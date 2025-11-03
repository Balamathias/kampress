import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_USER = "info@kampressgps.com";
const EMAIL_PASS = "Info2025";

// const EMAIL_USER = process.env.EMAIL_USER || "balaladalo@gmail.com";
// const EMAIL_PASS = process.env.EMAIL_PASS || "vdci adoi bjtd aclo";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, subject } = body;

    if (!name || !email || !message || !subject) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: EMAIL_USER,
    //     pass: EMAIL_PASS,
    //   },
    // });



    const transporter = nodemailer.createTransport({
      host: "da22.host-ww.net", // replace with your actual domain
      // host: "mail.kampressgps.com", // replace with your actual domain
      port: 465, // use 465 for SSL or 587 for TLS
      secure: true, // true for port 465, false for port 587
      auth: {
        user: EMAIL_USER, // e.g. 'info@yourdomain.com'
        pass: EMAIL_PASS, // your DomainKing email password
  },
});


    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`,
      replyTo: email, // so you can reply directly to the sender
      to: EMAIL_USER,
      subject: `Web Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Web Contact Message
          </h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Message From Web Contact Form
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        Message:
        ${message}
        This message was sent from your contact form.
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email. Please try again later or contact directly at info@kampressgps.com' }, { status: 500 });
  }
}

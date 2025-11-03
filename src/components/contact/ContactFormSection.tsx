"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (!formData.message.trim()) return "Message is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address.";
    if (formData.message.length < 10) return "Message must be at least 10 characters long.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/mail-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/kampressgps", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://twitter.com/kampressgps", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: Instagram, href: "https://instagram.com/kampressgps", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Youtube, href: "https://youtube.com/@kampressgps", label: "YouTube", color: "hover:bg-red-600" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Social Sidebar */}
      <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-gradient-to-b from-orange-500 to-orange-500 rounded-r-2xl shadow-2xl overflow-hidden">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10, scale: 1.1 }}
              className={`flex items-center gap-3 p-4 ${social.color} transition-all duration-300 group border-b border-white/10 last:border-0`}
              aria-label={social.label}
            >
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center group-hover:bg-white transition-colors">
                <social.icon className="w-6 h-6 text-white group-hover:text-orange-600 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
                Send Us a Message
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you shortly</p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full name <span className="text-red-500 my-2">*</span></Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="bg-gray-50 border-gray-300 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="email">Email address <span className="text-red-500 my-2">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-gray-50 border-gray-300 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject <span className="text-red-500 my-2">*</span></Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="bg-gray-50 border-gray-300 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="message">Your message <span className="text-red-500 my-2">*</span></Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  className="bg-gray-50 border-gray-300 min-h-[150px] text-base p-3"
                />
              </div>

              {error && (
                <p className="text-red-600 bg-red-50 border border-red-100 rounded-lg p-3 text-sm text-center">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white py-6 text-base font-semibold shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-center"
                >
                  <p className="text-green-700 font-medium">Thank you! We'll get back to you soon.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;



































// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Send, Loader2, CheckCircle2, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// const ContactFormSection = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const socialLinks = [
//     { icon: Facebook, href: "https://facebook.com/kampressgps", label: "Facebook", color: "hover:bg-blue-600" },
//     { icon: Twitter, href: "https://twitter.com/kampressgps", label: "Twitter", color: "hover:bg-blue-400" },
//     { icon: Instagram, href: "https://instagram.com/kampressgps", label: "Instagram", color: "hover:bg-pink-600" },
//     { icon: Youtube, href: "https://youtube.com/@kampressgps", label: "YouTube", color: "hover:bg-red-600" },
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setIsSuccess(true);
//     setIsSubmitting(false);
//     setTimeout(() => setIsSuccess(false), 5000);
//   };

//   return (
//     <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       {/* Social Media Sidebar - Fixed on left */}
//       <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-50">
//         <div className="bg-gradient-to-b from-orange-500 to-orange-500 rounded-r-2xl shadow-2xl overflow-hidden">
//           {socialLinks.map((social, index) => (
//             <motion.a
//               key={social.label}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ x: -100 }}
//               animate={{ x: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ x: 10, scale: 1.1 }}
//               className={`flex items-center gap-3 p-4 ${social.color} transition-all duration-300 group border-b border-white/10 last:border-0`}
//               aria-label={social.label}
//             >
//               <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center group-hover:bg-white transition-colors">
//                 <social.icon className="w-6 h-6 text-white group-hover:text-orange-600 transition-colors" />
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-32 relative z-10">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
//                 Send Us a Message
//               </span>
//             </h2>
//             <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you shortly</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <Label htmlFor="name" className="text-gray-900 font-semibold text-base mb-2 block">
//                   Full name <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   id="name"
//                   required
//                   placeholder="Enter your full name"
//                   className="bg-gray-50 border-gray-300 h-12 text-base"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="email" className="text-gray-900 font-semibold text-base mb-2 block">
//                   Email address <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   required
//                   placeholder="your@email.com"
//                   className="bg-gray-50 border-gray-300 h-12 text-base"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="subject" className="text-gray-900 font-semibold text-base mb-2 block">
//                   Subject <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   id="subject"
//                   required
//                   placeholder="What is this about?"
//                   className="bg-gray-50 border-gray-300 h-12 text-base"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="message" className="text-gray-900 font-semibold text-base mb-2 block">
//                   Your message <span className="text-red-500">*</span>
//                 </Label>
//                 <Textarea
//                   id="message"
//                   required
//                   placeholder="Tell us more..."
//                   className="bg-gray-50 border-gray-300 min-h-[150px] text-base p-3"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting || isSuccess}
//                 size="lg"
//                 className="w-full rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white py-6 text-base font-semibold shadow-xl"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                     Sending...
//                   </>
//                 ) : isSuccess ? (
//                   <>
//                     <CheckCircle2 className="mr-2 h-5 w-5" />
//                     Message Sent!
//                   </>
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="ml-2 h-5 w-5" />
//                   </>
//                 )}
//               </Button>

//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="p-4 bg-green-50 border border-green-200 rounded-lg text-center"
//                 >
//                   <p className="text-green-700 font-medium">Thank you! We'll get back to you soon.</p>
//                 </motion.div>
//               )}
//             </form>
//           </motion.div>

//           {/* Mobile Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="lg:hidden mt-12 flex justify-center gap-4"
//           >
//             {socialLinks.map((social) => (
//               <motion.a
//                 key={social.label}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 className={`w-14 h-14 rounded-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center ${social.color} transition-all shadow-lg`}
//                 aria-label={social.label}
//               >
//                 <social.icon className="w-6 h-6 text-white" />
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFormSection;

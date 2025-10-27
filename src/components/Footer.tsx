"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Career Counseling/Visa Guide", href: "/career-counseling" },
    { name: "Study", href: "/study-abroad" },
  ];

  const services = [
    { name: "Kampress Academy", href: "/academy" },
    { name: "Undergraduate Placement", href: "/study-abroad" },
    { name: "Postgraduate Placement", href: "/study-abroad" },
    { name: "Visa Assistance", href: "/career-counseling" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/kampressgps", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: Facebook, href: "https://facebook.com/kampressgps", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "https://instagram.com/kampressgps", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Youtube, href: "https://youtube.com/@kampressgps", label: "YouTube", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 40C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="url(#footer-gradient)"
          />
          <defs>
            <linearGradient id="footer-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Link href="/" className="inline-block">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Kampress Logo"
                    width={160}
                    height={60}
                    className="w-40 h-auto"
                  />
                </motion.div>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Making international education accessible. Your trusted partner for international student placement.
              </p>

              {/* Social Links - Vertical layout */}
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm ${social.color} transition-all duration-300 group`}
                    aria-label={social.label}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:from-white group-hover:to-white transition-all">
                      <social.icon className="w-5 h-5 text-white group-hover:text-orange-600 transition-colors" />
                    </div>
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <Link
                      href={service.href}
                      className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{service.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Contact
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white mb-1">Abuja Office</p>
                    <p>Angel Plaza, Plot 1243, Samuel Ladoke Akintola Boulevard Garki, Abuja, Nigeria</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>+2347047780438</p>
                    <p>+2349165012740</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="break-all">kampressgps@gmail.com</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 py-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="text-center sm:text-left">
              Copyright © {currentYear} Kampress Global Placement Services (KGPS)
            </p>
            <p className="text-center sm:text-right hidden">
              Designs & Contents by{" "}
              <a
                href="https://flawlessvilleerp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
              >
                Flawless Ville Enterprise Resource Center
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
    </footer>
  );
};

export default Footer;

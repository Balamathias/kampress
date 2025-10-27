"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Meet Us-Abuja",
      details: "Angel Plaza, Plot 1243, Samuel Ladoke Akintola Boulevard Garki, Abuja, Nigeria",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Meet Us-Asaba",
      details: "Suite B11 Chrisvan Petrol Plaza, Summit Road Asaba, Delta State",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "Call or Chat Us",
      details: "+2347047780438, +2349165012740",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "kampressgps@gmail.com",
      gradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-orange-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-300"
              >
                <Send className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Contact Us</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
              >
                Ready to start your journey? Reach out to us and let's make your study abroad dreams a reality.
              </motion.p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-orange-500"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${contact.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {contact.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Abuja Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 group"
            >
              <div className="absolute top-4 right-4 z-10">
                <Button
                  size="sm"
                  className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 shadow-md rounded-full text-xs"
                  onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=Angel+Plaza+Plot 1243+Samuel+Ladoke+Akintola+Boulevard+Garki+Abuja+Nigeria", "_blank")}
                >
                  Get Directions
                </Button>
              </div>
              <div className="aspect-video w-full relative bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d7.4914!3d9.0354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDInMDcuNCJOIDfCsDI5JzI5LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890&q=Samuel+Ladoke+Akintola+Boulevard+Garki+Abuja"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-4">
                <p className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Abuja Office
                </p>
              </div>
            </motion.div>

            {/* Asaba Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 group"
            >
              <div className="absolute top-4 right-4 z-10">
                <Button
                  size="sm"
                  className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 shadow-md rounded-full text-xs"
                  onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=Suite+B11+Chrisvan+Petrol+Plaza+Summit+Road+Asaba+Delta+State", "_blank")}
                >
                  Get Directions
                </Button>
              </div>
              <div className="aspect-video w-full relative bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1537289283844!2d6.734444!3d6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043a7c5c7c5c7c7%3A0x1c5c5c5c5c5c5c5c!2sSummit%20Road%20Asaba!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4">
                <p className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Asaba Office
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Us a Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

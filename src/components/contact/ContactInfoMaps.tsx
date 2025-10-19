"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfoMaps = () => {
  const contactCards = [
    {
      icon: MapPin,
      title: "Meet Us-Abuja",
      details: "SUITE 314A DBM PLAZA NOUAKCHOTT STREET WUSE ZONE 1 ABUJA FCT",
      gradient: "from-blue-500 to-blue-600",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=SUITE+314A+DBM+PLAZA+NOUAKCHOTT+STREET+WUSE+ZONE+1+ABUJA+FCT",
    },
    {
      icon: MapPin,
      title: "Meet Us-Asaba",
      details: "Suite B11 Chrisvan Petrol Plaza, Summit Road Asaba, Delta State",
      gradient: "from-purple-500 to-purple-600",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Suite+B11+Chrisvan+Petrol+Plaza+Summit+Road+Asaba+Delta+State",
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
      details: "info@kampressgps.com",
      gradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{card.details}</p>
              {card.mapUrl && (
                <Button
                  onClick={() => window.open(card.mapUrl, "_blank")}
                  variant="outline"
                  className="mt-6 rounded-full border-2 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
                >
                  View on Map
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Maps Section */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Abuja Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group"
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                size="sm"
                onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=SUITE+314A+DBM+PLAZA+NOUAKCHOTT+STREET+WUSE+ZONE+1+ABUJA+FCT", "_blank")}
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 shadow-md rounded-full"
              >
                View larger map
              </Button>
            </div>
            <div className="aspect-video relative bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9747289283844!2d7.487729!3d9.076479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5c7c5c7c7%3A0x1c5c5c5c5c5c5c5c!2sDBM%20Plaza%20Abuja!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6">
              <p className="text-white font-semibold text-lg flex items-center gap-2">
                <Building className="w-5 h-5" />
                Abuja Office
              </p>
            </div>
          </motion.div>

          {/* Asaba Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group"
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                size="sm"
                onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Suite+B11+Chrisvan+Petrol+Plaza+Summit+Road+Asaba+Delta+State", "_blank")}
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 shadow-md rounded-full"
              >
                View larger map
              </Button>
            </div>
            <div className="aspect-video relative bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1537289283844!2d6.734444!3d6.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043a7c5c7c5c7c7%3A0x1c5c5c5c5c5c5c5c!2sSummit%20Road%20Asaba!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-6">
              <p className="text-white font-semibold text-lg flex items-center gap-2">
                <Building className="w-5 h-5" />
                Asaba Office
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoMaps;

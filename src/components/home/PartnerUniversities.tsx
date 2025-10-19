"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Award, Globe2 } from "lucide-react";

const PartnerUniversities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const universities = [
    { name: "De Montfort University Leicester", logo: "/images/partner-universities/de_montfort.png" },
    { name: "Glasgow Caledonian University", logo: "/images/partner-universities/glassglow.png" },
    { name: "Liverpool John Moores University", logo: "/images/partner-universities/liverpool.png" },
    { name: "Anglia Ruskin University", logo: "/images/partner-universities/anglia.png" },
    { name: "Aston University", logo: "/images/partner-universities/aston.png" },
    { name: "University of Birmingham", logo: "/images/partner-universities/birmingham.png" },
    { name: "Brunel University London", logo: "/images/partner-universities/brunel.png" },
    { name: "University of Chichester", logo: "/images/partner-universities/chichester.png" },
    { name: "Coventry University", logo: "/images/partner-universities/coventry.png" },
    { name: "Cranfield University", logo: "/images/partner-universities/cranfield.png" },
    { name: "University for the Creative Arts", logo: "/images/partner-universities/creative_arts.png" },
    { name: "University of Dundee", logo: "/images/partner-universities/dundee.png" },
    { name: "University of Greenwich", logo: "/images/partner-universities/greenwhich.png" },
    { name: "Holmes Institute", logo: "/images/partner-universities/holmes.png" },
    { name: "London Metropolitan University", logo: "/images/partner-universities/london-metropolitan.png" },
    { name: "Middlesex University", logo: "/images/partner-universities/middlesex.png" },
    { name: "Nottingham Trent University", logo: "/images/partner-universities/nottingham.png" },
    { name: "Oxford International", logo: "/images/partner-universities/oxford_intl.png" },
    { name: "University of Plymouth", logo: "/images/partner-universities/plymouth.png" },
    { name: "University of Portsmouth", logo: "/images/partner-universities/portsmouth.png" },
    { name: "Queen Mary University of London", logo: "/images/partner-universities/queen-mary.png" },
    { name: "University of Sheffield", logo: "/images/partner-universities/sheffield.png" },
    { name: "Staffordshire University", logo: "/images/partner-universities/staffordshire.png" },
    { name: "University of East London", logo: "/images/partner-universities/uel.png" },
    { name: "University of Worcester", logo: "/images/partner-universities/worcester.png" },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedUniversities = [...universities, ...universities];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50 to-orange-50 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-400" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-orange-300/20 to-orange-300/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-100 rounded-full border border-orange-300 mb-6"
          >
            <Globe2 className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Global Network</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            <span className="text-gray-800">Some Partnering</span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-500 bg-clip-text text-transparent">
              Universities & Institutions
            </span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            We collaborate with prestigious institutions worldwide to provide you with the best educational opportunities
          </p>
        </motion.div>

        {/* Universities Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-orange-50 via-orange-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden py-8">
            <motion.div
              ref={scrollRef}
              className="flex gap-8 sm:gap-12 lg:gap-16"
              animate={{
                x: [0, -50 * universities.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedUniversities.map((university, index) => (
                <motion.div
                  key={`${university.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex-shrink-0 w-40 sm:w-48 lg:w-56 h-32 sm:h-36 lg:h-40 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex items-center justify-center group border border-gray-100 hover:border-orange-300"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={university.logo}
                      alt={university.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.min(universities.length, 20) }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.02 }}
                className={`h-2 rounded-full ${
                  index < 3 ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "25+", label: "Partner Universities", icon: Award },
            { value: "10+", label: "Countries", icon: Globe2 },
            { value: "200+", label: "Success Stories", icon: Award },
            { value: "100%", label: "Satisfaction", icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-100 to-orange-100 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Value */}
              <div className="relative text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <p className="relative text-gray-600 text-sm sm:text-base font-medium group-hover:text-gray-700 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerUniversities;

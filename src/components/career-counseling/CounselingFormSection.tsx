"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CounselingForm from "@/components/forms/CounselingForm";

export const countries = [
  { name: "Study in Canada", href: "/study-abroad/canada", icon: "🇨🇦" },
  { name: "Study in USA", href: "/study-abroad/usa", icon: "🇺🇸" },
  { name: "Study in UK", href: "/study-abroad/uk", icon: "🇬🇧" },
  { name: "Study in Netherlands", href: "/study-abroad/netherlands", icon: "🇳🇱" },
  { name: "Study in France", href: "/study-abroad/france", icon: "🇫🇷" },
  { name: "Study in Australia", href: "/study-abroad/australia", icon: "🇦🇺" },
  { name: "Study in Ireland", href: "/study-abroad/ireland", icon: "🇮🇪" },
  { name: "Study in Barbados", href: "/study-abroad/barbados", icon: "🇧🇧" },
  { name: "Study in Mauritius", href: "/study-abroad/mauritius", icon: "🇲🇺" },
  { name: "Study in Ghana", href: "/study-abroad/ghana", icon: "🇬🇭" },
];

const CounselingFormSection = () => {

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 overflow-hidden">
      {/* Background pattern */}
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
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-400/30 mb-4"
              >
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-orange-300">Get Started</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
              >
                Book a counseling session
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-sm sm:text-base"
              >
                Fill the form below
              </motion.p>
            </div>

            {/* Title Banner */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Kampress Counseling Session form
              </h3>
            </motion.div> */}

            {/* Form */}
            <CounselingForm />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Study Abroad Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 text-center">
                Study Abroad-Country Check List Undergraduate and Post Graduate Courses
              </h3>

              <ul className="space-y-2">
                {countries.map((country, index) => (
                  <motion.li
                    key={country.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <Link
                      href={country.href}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-400/30 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform text-white">
                        {country.icon}
                      </div>
                      <span className="text-sm text-orange-300 font-medium flex-1 group-hover:text-orange-200 transition-colors">
                        {country.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-orange-400 transition-colors" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Kampress Academy Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="bg-gradient-to-br from-orange-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30"
            >
              <Link
                href="/academy"
                className="group block text-center space-y-3 hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-orange-500/30">
                  <BookOpen className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="text-base font-bold text-white">
                  Learn More About Our Discover & Inform Program from Kampress Academy
                </h3>
                <div className="flex items-center justify-center gap-2 text-orange-300 font-semibold">
                  <span>Visit Academy</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero-bg-slides/slide-4.png"
                  alt="Kampress Academy"
                  fill
                  className="object-cover"
                  sizes="450px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-sm">
                    Join thousands of students who achieved their dreams
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CounselingFormSection;

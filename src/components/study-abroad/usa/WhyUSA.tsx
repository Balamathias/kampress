"use client";

import { motion } from "framer-motion";
import { DollarSign, Building2, Flag } from "lucide-react";

export default function WhyUSA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-900 via-blue-950 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
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
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Average Cost Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto shadow-lg">
              <DollarSign className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white text-center leading-tight">
              What are the average cost for under graduate programs in United States
            </h3>

            <div className="text-gray-300 text-sm leading-relaxed space-y-2 text-justify">
              <p>
                The cost varies depending on the State or the institution. The average cost of attendance for a student living on campus at a public 4-year in-state institution is <span className="font-semibold text-orange-400">$25,707 per year</span> or <span className="font-semibold text-orange-400">$102,828</span> over 4 years.
              </p>
              <p>
                Out-of-state students pay <span className="font-semibold text-orange-400">$43,421 per year</span> or <span className="font-semibold text-orange-400">$173,684</span> over 4 years.
              </p>
              <p>
                Private, nonprofit university students pay <span className="font-semibold text-orange-400">$54,501 per year</span> or <span className="font-semibold text-orange-400">$218,004</span> over 4 years.
              </p>
              <p>
                There are opportunities for scholarship awards but it is important that you have at least one semester's expenses with you when you arrive at the University or have sent the fees before arrival.
              </p>
            </div>
          </motion.div>

          {/* Affordable States Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg">
              <Building2 className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white text-center leading-tight">
              Which States in the U.S offer affordable learning cost for international students
            </h3>

            <div className="text-gray-300 text-sm leading-relaxed text-center">
              <p className="text-base">
                <span className="font-semibold text-blue-400">Wyoming, Indiana, Missouri, Alabama</span> and <span className="font-semibold text-blue-400">Kansas</span> are some of the states with affordable
              </p>
            </div>
          </motion.div>

          {/* Affordable Cities Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg">
              <Flag className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white text-center leading-tight">
              Which cities in the U.S offer affordable learning cost for international students
            </h3>

            <div className="text-gray-300 text-sm leading-relaxed text-center">
              <p className="text-base">
                <span className="font-semibold text-purple-400">San Diego, Baltimore, Atlanta, Philadelphia, Houston</span> and <span className="font-semibold text-purple-400">Chicago</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

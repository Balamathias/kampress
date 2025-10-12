"use client";

import { motion } from "framer-motion";
import { Target, Eye, Compass, Sparkles } from "lucide-react";

const MissionVisionCards = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/30 to-yellow-50/30 overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 40C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
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
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full border border-orange-300 mb-6"
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Our Purpose</span>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200 overflow-hidden"
          >
            {/* Background decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <Target className="absolute top-10 right-10 w-48 h-48 text-green-600" strokeWidth={0.5} />
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg mb-6 relative z-10"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">
              <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                Mission and Vision
              </span>
            </h3>

            {/* Content */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed relative z-10">
              We Help students discover abilities and personalities by using{" "}
              <span className="font-semibold text-green-700">cognitive, social and developmental psychology</span>{" "}
              as tool; then inform by getting them on same page using discovered evidences before we place them in the{" "}
              <span className="font-semibold text-green-700">right college or university</span>
            </p>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Strategy Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200 overflow-hidden"
          >
            {/* Background decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <Compass className="absolute top-10 right-10 w-48 h-48 text-orange-600" strokeWidth={0.5} />
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg mb-6 relative z-10"
            >
              <Compass className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">
              <span className="bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
                What is our Strategy?
              </span>
            </h3>

            {/* Content */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed relative z-10">
              Kampress Global Placement Service uses our uniquely{" "}
              <span className="font-semibold text-orange-700">creative bounce, verve and network</span> seamlessly to
              even out challenges associated with{" "}
              <span className="font-semibold text-orange-700">student placements and visas</span> in selected countries
              around the globe; with our{" "}
              <span className="font-semibold text-orange-700">happiness tied to each student's satisfaction</span>
            </p>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Continuous Service Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative md:col-span-2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200 overflow-hidden"
          >
            {/* Background decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <Eye className="absolute top-10 right-10 w-48 h-48 text-blue-600" strokeWidth={0.5} />
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg mb-6 relative z-10"
            >
              <Eye className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">
              <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Continuous Service
              </span>
            </h3>

            {/* Content */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed relative z-10">
              In our desire to identify and inculcate new ways to add value to our esteemed students both{" "}
              <span className="font-semibold text-blue-700">existing and prospective</span>, we have continued to
              interact with students even after their settling down
            </p>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionCards;

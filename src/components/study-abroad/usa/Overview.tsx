"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Flag } from "lucide-react";

export default function Overview() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 overflow-hidden">
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
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
              DID YOU KNOW WHAT IT TAKES YOU TO
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Study in the United States as a Global Student?
              </span>
            </h2>
          </motion.div>

          {/* Right Side - Content Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Overview Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                Overview
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed text-justify">
                The United States, christened the land of the free, with 50 States and over 325 million people is the third most populous country in the world. It is also the fourth largest country world over by total area and the largest economy in the world. Cultural stamps are driven by innovations that are powered by technology among others. United States of America is one of the most popular study abroad destinations where global students can study.
              </p>
            </motion.div>

            {/* What's Special Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto">
                <Flag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                What is special about United States for International Students
              </h3>
              <div className="text-gray-300 text-sm leading-relaxed space-y-3 text-justify">
                <p>
                  The United States hosts the most number of global learners in the world. Excellent education, distinctive curriculum, multiracial environment, and ample opportunities are some reasons why many Global students study in the US.
                </p>
                <p>
                  To study in the U.S, you will need a J-1 visa; which is a non-immigrant visa issued by the United States to research scholars, professors and exchange visitors participating in programs that promote cultural exchange.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

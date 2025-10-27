"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileSearch, FileEdit, Send, FileCheck, Plane, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SimpleSteps = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "Attend our discover & inform program",
      number: "01",
    },
    {
      icon: FileEdit,
      title: "Online Application",
      number: "02",
    },
    {
      icon: Send,
      title: "Scan & Forward documents to kampressgps@gmail.com",
      number: "03",
    },
    {
      icon: FileCheck,
      title: "Receive & Accept admission offer",
      number: "04",
    },
    {
      icon: CheckCircle2,
      title: "Visa Application",
      number: "05",
    },
    {
      icon: Plane,
      title: "Travel & Enrol",
      number: "06",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-orange-100/50 via-orange-50/30 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
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
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-orange-300/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              <List className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Getting Started</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-orange-700 via-orange-700 to-orange-700 bg-clip-text text-transparent">
                Simple Steps Taken to Study Abroad
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
            >
              Follow our streamlined process to make your study abroad journey smooth and hassle-free
            </motion.p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-orange-100 group-hover:text-orange-200 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-md mb-4 relative z-10"
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight min-h-[3rem] flex items-center">
                      {step.title}
                    </h3>
                  </div>

                  {/* Check mark indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
                  </motion.div>
                </div>

                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className={`hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-400 ${
                      (index + 1) % 3 === 0 ? "lg:hidden" : ""
                    }`}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-br from-orange-50 to-orange-50 rounded-3xl p-8 sm:p-10 shadow-xl border border-orange-200">
              <p className="text-gray-700 text-lg sm:text-xl font-medium mb-6">
                Ready to start your journey to study abroad?
              </p>
              <Link href="/career-counseling">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-10 py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 opacity-20"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 40C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="currentColor"
            className="text-orange-100"
          />
        </svg>
      </div>
    </section>
  );
};

export default SimpleSteps;

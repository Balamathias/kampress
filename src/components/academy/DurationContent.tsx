"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, Lightbulb } from "lucide-react";

const DurationContent = () => {
  const highlights = [
    "Scientific, daring and practical approach",
    "Intuitive outline by professionals",
    "Social and developmental psychology",
    "Results-oriented methodology",
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Duration & Content Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-yellow-50 to-yellow-50 rounded-3xl p-8 sm:p-10 shadow-xl border border-yellow-200"
          >
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg mb-6">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-700 to-yellow-700 bg-clip-text text-transparent">
                Duration & Content Highlights
              </span>
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              This <span className="font-bold text-yellow-600">two weeks' program</span> is{" "}
              <span className="font-semibold">scientific, daring and practical</span> with intuitive outline
              designed by professionals. Some aspects of{" "}
              <span className="font-semibold">social and developmental psychology</span> are deployed to achieve results.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-32 h-32 text-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DurationContent;

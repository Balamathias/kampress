"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileSearch, List, Send, FileCheck, Plane } from "lucide-react";

const AcademySteps = () => {
  const steps = [
    { icon: CheckCircle2, text: "Attend our discover & inform program" },
    { icon: List, text: "Online Application" },
    { icon: Send, text: "Scan & Forward documents to admissions@studyabroad24.com" },
    { icon: FileCheck, text: "Confirm & Accept Invitation" },
    { icon: CheckCircle2, text: "Visa Application" },
    { icon: Plane, text: "Enrol & Travel" },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
            Simple Steps Taken to Study Abroad
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-l-4 border-yellow-500"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
              </div>
              <p className="text-gray-700 font-medium">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademySteps;

"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  ClipboardCheck,
  Zap,
  FolderOpen,
  BookOpen,
  Phone,
  FileSearch,
  BarChart,
  FolderCheck,
  HelpCircle,
  FileText,
  List,
  Send,
  FileCheck,
  Plane,
} from "lucide-react";

const CounselingChecklist = () => {
  const careerCounseling = [
    { icon: MessageCircle, text: "One-on-One Conversations" },
    { icon: ClipboardCheck, text: "Assessments" },
    { icon: Zap, text: "Activities" },
    { icon: FolderOpen, text: "Uniquely Designed Projects" },
    { icon: BookOpen, text: "Overview of study and work settings for international students" },
    { icon: Phone, text: "Call-to-Action" },
  ];

  const visaCounseling = [
    { icon: MessageCircle, text: "One-on-One Conversations" },
    { icon: FileSearch, text: "Overview of educational objectives" },
    { icon: BarChart, text: "Analyzing Grades" },
    { icon: FolderCheck, text: "Looking at long-range plans" },
    { icon: HelpCircle, text: "Solving the student queries" },
    { icon: FileText, text: "Handling Registrations" },
    { icon: Phone, text: "Call-to-Action" },
  ];

  const simpleSteps = [
    { icon: CheckCircle2, text: "Attend our discover & inform program" },
    { icon: List, text: "Online Application" },
    { icon: Send, text: "Scan & Forward documents to admissions@studyabroad24.com" },
    { icon: FileCheck, text: "Confirm & Accept Invitation" },
    { icon: CheckCircle2, text: "Visa Application" },
    { icon: Plane, text: "Enrol & Travel" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-blue-900 to-blue-950 overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="url(#gradient-wave)"
          />
          <defs>
            <linearGradient id="gradient-wave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
        </svg>
      </div>

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
          >
            Career and Visa/Immigration{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent">
              Counseling Checklist
            </span>
          </motion.h2>
        </motion.div>

        {/* Three Column Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Career Counseling */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50" />

            {/* Content */}
            <div className="relative z-10">
              {/* Title */}
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg mb-3">
                  <ClipboardCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Career Counseling</h3>
              </div>

              {/* Checklist Items */}
              <ul className="space-y-3">
                {careerCounseling.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-snug pt-1">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Visa Counseling */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50" />

            {/* Content */}
            <div className="relative z-10">
              {/* Title */}
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg mb-3">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visa Counseling</h3>
              </div>

              {/* Checklist Items */}
              <ul className="space-y-3">
                {visaCounseling.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-snug pt-1">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Simple Steps */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-50 opacity-50" />

            {/* Content */}
            <div className="relative z-10">
              {/* Title */}
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg mb-3">
                  <List className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Simple Steps Taken to Study Abroad</h3>
              </div>

              {/* Checklist Items */}
              <ul className="space-y-3">
                {simpleSteps.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-white" fill="white" strokeWidth={0} />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-snug pt-1">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
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
          className="w-full h-16 sm:h-20"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default CounselingChecklist;

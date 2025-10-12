"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, GraduationCap, Plane, Search, UserCheck } from "lucide-react";

const ApplicationProcess = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Choose Your Destination",
      description: "Explore countries and universities that match your academic goals and career aspirations.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: UserCheck,
      number: "02",
      title: "Free Consultation",
      description: "Meet with our expert counselors to discuss your options and create a personalized plan.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: FileText,
      number: "03",
      title: "Prepare Documents",
      description: "Gather and prepare all required documents with guidance from our experienced team.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      number: "04",
      title: "Apply to Universities",
      description: "Submit applications to selected institutions with our assistance and follow-up support.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CheckCircle2,
      number: "05",
      title: "Secure Your Visa",
      description: "Navigate the visa application process with our comprehensive guidance and preparation.",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Plane,
      number: "06",
      title: "Begin Your Journey",
      description: "Get pre-departure orientation and support as you embark on your exciting adventure.",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <CheckCircle2 className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold text-white">Simple & Streamlined</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Your Path to{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              International Education
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We've simplified the study abroad process into 6 easy steps. Our team supports you at every stage.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-8 lg:mb-12 last:mb-0"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-8 lg:left-12 top-20 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-transparent hidden sm:block" />
              )}

              <div className="flex flex-col sm:flex-row items-start gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:bg-white/10 group">
                <div className="flex-shrink-0">
                  <div className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
                      <span className="text-xs lg:text-sm font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Take the First Step?
          </h3>
          <p className="text-lg text-white/95 mb-6 max-w-2xl mx-auto">
            Our team of experts is here to guide you through every step of your study abroad journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;

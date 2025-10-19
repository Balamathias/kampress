"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, Award, TrendingUp, Users } from "lucide-react";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: Target,
      title: "Detailed Admission Counseling",
      description: "Latest information about admission criteria, acceptance rates, and committee expectations",
    },
    {
      icon: Users,
      title: "Career Counseling",
      description: "Helping students understand themselves, solve problems, make decisions, and improve abilities",
    },
    {
      icon: Award,
      title: "Bursary & Grant Information",
      description: "Comprehensive guidance on financial aid opportunities",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Mentor-ship",
      description: "Continuous support and guidance throughout your journey",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-blue-900 to-blue-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Objectives set to achieve after{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent">
              each session
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 mb-4`}>
                <obj.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{obj.title}</h3>
              <p className="text-white/80 text-sm">{obj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;

"use client";

import { motion } from "framer-motion";
import { Globe, Users, Trophy, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const StudyAbroadBenefits = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Experience diverse cultures, perspectives, and ways of thinking that broaden your worldview.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description: "Access top-ranked universities and cutting-edge research facilities across the globe.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Gain international work experience and open doors to global career prospects.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Networking",
      description: "Build lifelong connections with students, professors, and professionals worldwide.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Trophy,
      title: "Personal Growth",
      description: "Develop independence, adaptability, and confidence through international experience.",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Competitive Edge",
      description: "Stand out to employers with international credentials and cross-cultural competence.",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-6"
          >
            <Trophy className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Why Study Abroad?</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Transform Your Future
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Studying abroad is more than just academics—it's a life-changing experience that shapes your future in countless ways.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
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
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Ready to start your journey?
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives through international education. Let Kampress guide you every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyAbroadBenefits;

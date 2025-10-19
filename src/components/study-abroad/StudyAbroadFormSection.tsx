"use client";

import { motion } from "framer-motion";
import CounselingForm from "@/components/forms/CounselingForm";
import { BookOpen, Globe, GraduationCap, Plane, Shield, Users } from "lucide-react";

const StudyAbroadFormSection = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Personalized support from experienced counselors",
    },
    {
      icon: Shield,
      title: "Visa Assistance",
      description: "Complete help with visa applications and interviews",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Partnerships with top universities worldwide",
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description: "IELTS, TOEFL, GRE, and other exam support",
    },
    {
      icon: Plane,
      title: "Pre-Departure Support",
      description: "Orientation and travel assistance",
    },
    {
      icon: GraduationCap,
      title: "Scholarship Guidance",
      description: "Help finding and applying for scholarships",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600 bg-clip-text text-transparent">
              Start Your Application
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Fill out the form below and our expert counselors will contact you within 24 hours to begin your study abroad journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Kampress?</h3>
              <p className="text-white/90 leading-relaxed">
                With over a decade of experience, we've helped thousands of students achieve their dreams of studying abroad. Our success rate speaks for itself.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-orange-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 text-lg">Need Immediate Help?</h4>
              <p className="text-blue-800 mb-4">Call us now or visit our office</p>
              <div className="space-y-2 text-blue-900">
                <p className="font-semibold">📞 +237 233 45 37 99</p>
                <p className="font-semibold">📞 +237 233 45 80 37</p>
                <p className="text-sm text-blue-700 mt-3">
                  📍 Opposite Tradex Ndamukong Junction, Bamenda, North West Region, Cameroon
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100">
              <CounselingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadFormSection;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  User,
  GraduationCap,
  Building2,
  FileCheck,
  School,
  Landmark,
  Award,
  TrendingUp,
  Users,
  Globe,
  UserCheck,
} from "lucide-react";

const ServicesDashboard = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: User,
      title: "Career Counseling",
      description: "Setting is advisory. For Undergraduate, Post-graduate and Boot camp/Certification Course",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
      link: "/career-counseling",
    },
    {
      icon: Building2,
      title: "Undergraduate School Placement",
      description: "We work directly with institutions or accredited international partners",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500",
      link: "/undergraduate-placement",
    },
    {
      icon: GraduationCap,
      title: "Post-graduate School Placement",
      description: "We work directly with institutions or accredited international partners",
      gradient: "from-yellow-500 to-red-500",
      borderColor: "border-yellow-500",
      link: "/postgraduate-placement",
    },
    {
      icon: FileCheck,
      title: "Visa and Accommodation Guide",
      description: "Setting is professional guide designed to help you succeed",
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
      link: "/visa-guide",
    },
    {
      icon: School,
      title: "Placement for Boot camp & Pro Certification Programs",
      description: "We work directly with institutions or accredited international partners",
      gradient: "from-yellow-500 to-yellow-500",
      borderColor: "border-yellow-500",
      link: "/bootcamp-placement",
    },
    {
      icon: Award,
      title: "Kampress Academy",
      description: "Learning program designed to help you succeed",
      gradient: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-500",
      link: "/academy",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: 200, suffix: "+", label: "Successful Placements" },
    { icon: Award, value: 13, suffix: "+", label: "Years of Experience" },
    { icon: Globe, value: 20, suffix: "+", label: "Global Placement Partners" },
    { icon: Users, value: 40, suffix: "+", label: "Staff: In-person/Remote" },
    { icon: UserCheck, value: 85, suffix: "%+", label: "Support Rating" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-pink-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4"
          >
            <Landmark className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white">Our Services</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-300 bg-clip-text text-transparent">
              Kampress Placement
            </span>
            <br />
            <span className="text-white">Solutions Dashboard</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto">
            Comprehensive services designed to make your international education journey seamless
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 lg:mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants as any}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`relative h-full bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 ${
                  hoveredCard === index ? service.borderColor : "border-white/10"
                } transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-yellow-500/20`}
              >
                {/* Icon */}
                <motion.div
                  animate={hoveredCard === index ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  className="absolute bottom-6 right-6 text-yellow-400 font-semibold text-sm"
                >
                  Learn More →
                </motion.div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Stats container with decorative border */}
          <div className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/20">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="text-center group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 mb-4 group-hover:border-yellow-400 transition-colors"
                  >
                    <stat.icon className="w-6 h-6 text-yellow-400" />
                  </motion.div>

                  {/* Value with counter animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  >
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-300 bg-clip-text text-transparent">
                      {stat.value}
                      {stat.suffix}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <p className="text-white/70 text-xs sm:text-sm font-medium group-hover:text-white/90 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-400/50 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-400/50 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-400/50 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-400/50 rounded-br-3xl" />
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 lg:h-24"
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

export default ServicesDashboard;

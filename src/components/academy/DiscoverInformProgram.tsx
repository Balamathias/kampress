"use client";

import { motion } from "framer-motion";
import { Users, Video, Laptop, Globe2 } from "lucide-react";

const DiscoverInformProgram = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
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

      {/* Decorative blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-300 mb-6"
            >
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">The Program</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                Discover and Inform program of Kampress Academy
              </span>
            </motion.h2>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100 mb-12"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-yellow-500/10 rounded-tr-full" />

            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg mb-6"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>

            {/* Content */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed relative z-10"
            >
              Discover and Inform program of{" "}
              <span className="font-bold text-blue-900">Kampress Academy</span> is a{" "}
              <span className="font-semibold text-orange-600">combination of in-person and virtual boot camp experience</span>,
              designed to help prospective college students for{" "}
              <span className="font-semibold text-orange-600">undergraduate courses</span> to get ready to face the world.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Video,
                title: "Virtual Sessions",
                description: "Interactive online classes with experienced instructors",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                title: "In-Person Experience",
                description: "Hands-on boot camp activities and group workshops",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: Laptop,
                title: "Practical Training",
                description: "Real-world skills and knowledge application",
                gradient: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md mb-4 relative z-10`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverInformProgram;

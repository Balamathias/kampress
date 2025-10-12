"use client";

import { motion } from "framer-motion";
import { Globe2, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CountriesSection = () => {
  const countries = [
    { name: "Canada", flag: "🇨🇦", color: "from-red-500 to-red-600" },
    { name: "United States", flag: "🇺🇸", color: "from-blue-600 to-blue-700" },
    { name: "United Kingdom", flag: "🇬🇧", color: "from-blue-700 to-indigo-700" },
    { name: "Netherlands", flag: "🇳🇱", color: "from-yellow-500 to-red-500" },
    { name: "France", flag: "🇫🇷", color: "from-blue-600 to-indigo-600" },
    { name: "Australia", flag: "🇦🇺", color: "from-blue-500 to-blue-600" },
    { name: "Ireland", flag: "🇮🇪", color: "from-green-600 to-emerald-600" },
    { name: "Barbados", flag: "🇧🇧", color: "from-blue-500 to-yellow-500" },
    { name: "Ghana", flag: "🇬🇭", color: "from-red-600 to-yellow-500" },
    { name: "Mauritius", flag: "🇲🇺", color: "from-red-500 to-blue-600" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-300 mb-6"
          >
            <Globe2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Study Destinations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              Countries We Serve
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
          >
            Explore study and work opportunities in these amazing destinations
          </motion.p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 text-center space-y-3">
                  {/* Flag */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl"
                  >
                    {country.flag}
                  </motion.div>

                  {/* Country Name */}
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {country.name}
                  </h3>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-1 text-xs text-blue-600 font-semibold"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                <FileText className="w-8 h-8 text-yellow-400" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Ready to Start Your Journey?
              </h3>

              <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
                Get detailed requirements and documentation for your chosen destination. Our team is here to guide you every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 text-white px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  View Documentation
                  <FileText className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white/20 text-white px-8 py-6 text-base font-semibold shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountriesSection;

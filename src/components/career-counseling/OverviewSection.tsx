"use client";

import { motion } from "framer-motion";
import { Globe2, Sparkles } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";

const OverviewSection = () => {
  const countries = [
    { name: "Canada", href: "#" },
    { name: "United States", href: "#" },
    { name: "United Kingdom", href: "#" },
    { name: "Netherlands", href: "#" },
    { name: "France", href: "#" },
    { name: "Australia", href: "#" },
    { name: "Ireland", href: "#" },
    { name: "Barbados", href: "#" },
    { name: "Ghana", href: "#" },
    { name: "Mauritius", href: "#" },
  ];

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-300"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Our Approach</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                Our Strategy
              </span>
            </motion.h2>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              <p>
                Kampress Global Placement Services uses our uniquely{" "}
                <span className="font-semibold text-blue-900">creative bounce, verve and network</span> seamlessly to
                even out challenges associated with{" "}
                <span className="font-semibold text-blue-900">student placements and visas</span> in selected
                countries around the globe; with our{" "}
                <span className="font-semibold text-blue-900">happiness tied to each student's satisfaction.</span>.
              </p>

              <p>
                You can check{" "}
                <span className="font-semibold text-orange-600">requirements and documentations</span> necessary for
                one to study in{" "}
                <span className="inline-flex flex-wrap gap-1">
                  {countries.map((country, index) => (
                    <span key={country.name}>
                      <Link
                        href={country.href}
                        className="font-semibold text-blue-600 hover:text-orange-600 underline decoration-dotted transition-colors"
                      >
                        {country.name}
                      </Link>
                      {index < countries.length - 1 && <span>,</span>}
                    </span>
                  ))}
                </span>{" "}
                for either undergraduate or Postgraduate program.
              </p>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-500 rounded-full" />
              <Globe2 className="w-8 h-8 text-blue-600" />
            </motion.div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/50 via-orange-200/50 to-orange-200/50 rounded-3xl blur-xl" />

            <div className="relative">
              <VideoPlayer
                src="/videos/kampress_placement_welcome_vid.mp4"
                className="w-full aspect-video rounded-2xl"
                loop
              />
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-blue-500 rounded-br-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;

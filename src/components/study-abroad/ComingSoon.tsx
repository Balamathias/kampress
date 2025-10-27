"use client";

import { motion } from "framer-motion";
import { Plane, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  country: string;
  flag?: string;
  description?: string;
}

export default function ComingSoon({
  country,
  flag = "🌍",
  description = "We're working on bringing you comprehensive information about studying in this amazing destination."
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white flex items-center justify-center overflow-hidden relative">
      {/* Subtle animated gradient blob */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-200/40 to-orange-300/40 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Flag/Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl">
              <Plane className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold tracking-wide">
              COMING SOON
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-900">Study in </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {country}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Get Notified
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/study-abroad">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-semibold transition-all duration-300"
              >
                Explore Other Destinations
              </Button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-gray-200"
          >
            <p className="text-gray-600 text-sm">
              In the meantime, feel free to explore our other study abroad destinations or{" "}
              <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold underline">
                contact us
              </Link>{" "}
              for more information.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

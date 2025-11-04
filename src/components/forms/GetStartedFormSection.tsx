"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import CounselingForm from "@/components/forms/CounselingForm";
import Image from "next/image";

const GetStartedFormSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-400/30 mb-4"
              >
                <GraduationCap className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-orange-300">Get Started</span>
              </motion.div>

              {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Get started; Experience Kampress Discover & Inform Program
              </h2> */}
              <p className="text-white/80 text-sm sm:text-base">Fill the form below to get in</p>
            </div>

            <CounselingForm />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero-bg-slides/slide-4.png"
                  alt="Kampress Academy"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold">Transform your future with Kampress Academy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedFormSection;

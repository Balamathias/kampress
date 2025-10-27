"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NLHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-700/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Study the Netherlands
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl"
            >
              Discover innovative teaching, vibrant cities, and hundreds of English‑taught programmes across a welcoming, globally connected country.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-56 sm:h-72 lg:h-96"
          >
            <Image
              src="/images/hero-bg-slides/slide-3.png"
              alt="Netherlands city"
              fill
              className="object-cover rounded-xl shadow-2xl ring-1 ring-white/10"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

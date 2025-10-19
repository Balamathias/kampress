"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-1">
          <p className="uppercase tracking-widest text-white/60 text-sm">Did you know what it takes you to</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-orange-400">Study and Work in France as a Global Student?</h2>
          <div className="mt-4 h-1 w-16 bg-emerald-500 rounded" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">
          <div className="relative w-36 h-28 mx-auto lg:mx-0">
            <Image src="/images/partner-universities/anglia.png" alt="France" fill className="object-contain" />
          </div>
          <h3 className="text-center lg:text-left text-lg font-semibold">Overview</h3>
          <p className="text-white/85 leading-relaxed">France combines top‑tier universities and Grandes Écoles with vibrant culture, student benefits, and strong research across STEM, business, arts and more.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-4">
          <div className="relative w-36 h-28 mx-auto lg:mx-0">
            <Image src="/images/hero-bg-slides/slide-1.png" alt="Campus life" fill className="object-cover rounded" />
          </div>
          <h3 className="text-center lg:text-left text-lg font-semibold">What is special about France for international students?</h3>
          <p className="text-white/85 leading-relaxed">Affordable tuition at public institutions, scholarships, world‑leading research, and extensive programmes in English attract students worldwide.</p>
        </motion.div>
      </div>
    </section>
  );
}

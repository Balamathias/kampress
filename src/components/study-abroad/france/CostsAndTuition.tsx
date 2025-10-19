"use client";

import { motion } from "framer-motion";
import { BadgeEuro, University } from "lucide-react";

export default function CostsAndTuition() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><BadgeEuro className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Average costs</h3></div>
          <p className="text-white/85 leading-relaxed">Public universities in France offer comparatively low tuition, with additional fees for specific programmes. Grandes Écoles and private schools have higher tuition. Living costs vary by city; budget more for Paris than regional cities.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><University className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Notable universities</h3></div>
          <ul className="list-disc list-inside text-white/85 space-y-2">
            <li>Sorbonne University</li>
            <li>Université Paris‑Saclay</li>
            <li>Université PSL</li>
            <li>Université Grenoble Alpes</li>
            <li>Université de Lyon</li>
            <li>Skema Business School</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><University className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Scholarships & funding</h3></div>
          <p className="text-white/85 leading-relaxed">Explore Eiffel Excellence Scholarships, Campus France listings, and institutional merit awards. Many master’s programmes offer partial tuition waivers.</p>
        </motion.div>
      </div>
    </section>
  );
}

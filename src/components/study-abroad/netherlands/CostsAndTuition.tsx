"use client";

import { motion } from "framer-motion";
import { BadgeEuro, University } from "lucide-react";

export default function CostsAndTuition() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <BadgeEuro className="h-6 w-6 text-orange-400" />
            <h3 className="font-semibold text-lg">Average costs</h3>
          </div>
          <p className="text-white/85 leading-relaxed">
            EU/EEA students often pay lower tuition; non‑EU fees vary by institution and programme. Expect roughly €6,000–€18,000 per year for many English‑taught bachelors and €8,000–€25,000 for masters (indicative ranges; check university sites).
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><University className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Notable/affordable universities</h3></div>
          <ul className="list-disc list-inside text-white/85 space-y-2">
            <li>Hanze University of Applied Sciences</li>
            <li>HU University of Applied Sciences Utrecht</li>
            <li>Saxion University of Applied Sciences</li>
            <li>Fontys University of Applied Sciences</li>
            <li>Radboud University</li>
            <li>Tilburg University</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><University className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Scholarships & funding</h3></div>
          <p className="text-white/85 leading-relaxed">Look into Holland Scholarship, Erasmus+, and university‑specific merit awards. Many institutions offer early‑bird discounts and tuition instalments.</p>
        </motion.div>
      </div>
    </section>
  );
}

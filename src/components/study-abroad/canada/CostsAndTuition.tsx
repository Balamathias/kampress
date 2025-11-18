"use client";

import { motion } from "framer-motion";

export default function CostsAndTuition() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            Average tuition for undergraduate and postgraduate study
          </h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            Tuition for government‑owned universities averages between
            <span className="font-semibold text-orange-300"> 15,000 – 50,000 CAD</span> {" "}
            per year. Private universities are typically higher. Degrees earned in Canada are globally accepted. Students from non‑English speaking countries may need to prove proficiency through TOEFL® or IELTS™.
          </p>
          <div className="mt-6 h-1 w-20 bg-emerald-500 rounded" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            Scholarships and funding
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-white/85">
            <li>Entrance and merit scholarships for international students</li>
            <li>Graduate assistantships and research funding</li>
            <li>Provincial grants and bursaries</li>
            <li>Work‑while‑studying pathways for eligible programs</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

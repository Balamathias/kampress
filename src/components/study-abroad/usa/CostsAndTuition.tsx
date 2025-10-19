"use client";

import { motion } from "framer-motion";

export default function CostsAndTuition() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-1"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            Average cost for undergraduate programs in the U.S.
          </h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            Costs vary by state and institution. For a student living on campus,
            the average cost of attendance at a public 4‑year in‑state institution is
            approximately <span className="font-semibold text-orange-300">$25,700 per year</span>
            (about $102,800 over four years). Out‑of‑state students average around
            <span className="font-semibold text-orange-300"> $43,400 per year</span> ($173,600 over four years).
            Private nonprofit universities average roughly
            <span className="font-semibold text-orange-300"> $54,500 per year</span> ($218,000 over four years).
            Scholarships may reduce costs; ensure you budget at least one semester upfront.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            States with more affordable learning costs
          </h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            Wyoming, Indiana, Missouri, Alabama and Kansas are commonly cited among
            the states with comparatively affordable tuition for international students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            Cities known for relative affordability
          </h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            San Diego, Baltimore, Atlanta, Philadelphia, Houston and Chicago provide
            a balance of quality education and cost of living compared to other major metros.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

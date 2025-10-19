"use client";

import { motion } from "framer-motion";

export default function WorkAndChecklist() {
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
            Working as an international student in the U.S.
          </h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            On F‑1 visas, students can usually work up to <span className="font-semibold text-orange-300">20 hours per week</span>
            on campus during terms, with higher limits during breaks. Off‑campus options like CPT/OPT
            may be available depending on program rules and approvals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold">U.S. student checklist</h3>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-white/85">
            <li>Receive I‑20 and pay SEVIS fee</li>
            <li>Apply for F‑1 or J‑1 visa and schedule your interview</li>
            <li>Meet your DSO and understand enrollment & work rules</li>
            <li>Arrange housing and health insurance</li>
            <li>Explore scholarships, graduate assistantships and campus jobs</li>
            <li>Attend orientation and get to know your new city</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

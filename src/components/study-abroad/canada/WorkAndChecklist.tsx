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
            How many hours can international students work?
          </h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            You can work up to <span className="font-semibold text-orange-300">20 hours per week</span> during study periods. Working more than 20 hours per week may violate your study permit conditions and affect your status. Always verify the latest rules on the Government of Canada website.
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
            Canadian international student checklist
          </h3>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-white/85">
            <li>Submit admissions and obtain study permit</li>
            <li>Schedule advising appointment</li>
            <li>Understand immigration and work regulations</li>
            <li>Explore scholarships, grants and provincial aid</li>
            <li>Review international student resources</li>
            <li>Plan your arrival and housing</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

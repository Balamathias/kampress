"use client";

import { motion } from "framer-motion";

const undergrad = [
  "University of the People",
  "Brandon University",
  "Université de Saint‑Boniface",
  "University of Guelph",
  "Canadian Mennonite University",
  "Memorial University of Newfoundland",
];

const postgrad = [
  "Memorial University of Newfoundland",
  "University of Northern British Columbia",
  "University of Calgary",
  "Simon Fraser University",
  "University of Saskatchewan",
];

export default function Universities() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Affordable undergraduate options
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-white/85">
            {undergrad.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Affordable postgraduate options
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-white/85">
            {postgrad.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

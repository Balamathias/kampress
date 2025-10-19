"use client";

import { motion } from "framer-motion";

const bachelors = [
  "United States Military Academy at West Point, New York",
  "Curtis Institute of Music, Philadelphia",
  "South Dakota State University, South Dakota",
  "The City University of New York, New York",
  "University of Central Florida, Florida",
  "University of the People, California",
  "Mercy College, New York",
  "Western Michigan University, Michigan",
  "West Virginia University, West Virginia",
  "Cascadia Community College, Washington",
];

const masters = [
  "University of Notre Dame",
  "Lynn University",
  "West Texas A&M University",
  "Acupuncture and Integrative Medicine College",
  "Seattle Pacific University",
  "DePaul University",
  "Colorado Mesa University",
  "Hamline University",
  "Murray State University",
  "Concordia University Wisconsin",
];

export default function Universities() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Affordable universities in America offering Bachelor’s degrees
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-white/85">
            {bachelors.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-white/60">(from mastersportal.com)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Affordable universities in America offering Master’s degrees
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-white/85">
            {masters.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-white/60">(from mastersportal.com)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            How many hours in a week can international students work in the U.S.?
          </h3>
          <p className="mt-4 text-white/85 leading-relaxed">
            U.S. regulations generally allow international students in valid F‑1 status to work
            on‑campus up to <span className="font-semibold text-orange-300">20 hours per week</span> when classes are in session, and up to 40 hours during official breaks. Always confirm current rules with your Designated School Official (DSO).
          </p>
        </motion.div>
      </div>
    </section>
  );
}

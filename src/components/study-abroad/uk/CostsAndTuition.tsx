"use client";

import { motion } from "framer-motion";
import { BadgeEuro, University } from "lucide-react";

export default function CostsAndTuition() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <BadgeEuro className="h-6 w-6 text-orange-400" />
            <h3 className="font-semibold text-lg">
              What are the average costs for undergraduate programs in the UK?
            </h3>
          </div>
          <div className="text-white/85 space-y-4 leading-relaxed">
            <p>
              Undergraduate tuition fees for international students typically
              range from £11,400 to £38,000 per year. Many programs average
              around £22,200. Bachelor degrees usually take three years in
              England, Wales and Northern Ireland, and four years in Scotland.
            </p>
            <p>
              Costs vary significantly by university and course. Home fees can
              range from 5,500 to 10,200 EUR per year, while international fees
              generally add 3,000–8,000 EUR on top. Scholarships, grants and
              bursaries are widely available from institutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <University className="h-6 w-6 text-orange-400" />
            <h3 className="font-semibold text-lg">
              Affordable universities for undergraduate study
            </h3>
          </div>
          <ul className="list-disc list-inside text-white/85 space-y-2">
            <li>London South Bank University</li>
            <li>The Scottish Association for Marine Science</li>
            <li>Robert Gordon University</li>
            <li>Queen’s University Belfast</li>
            <li>Anglia Ruskin University</li>
            <li>University of Birmingham</li>
            <li>Edinburgh Napier University</li>
            <li>University of Central Lancashire</li>
            <li>Teesside University</li>
            <li>Glasgow Caledonian University</li>
          </ul>
          <p className="mt-3 text-white/60 text-sm">(Sourced from mastersportal.com)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <University className="h-6 w-6 text-orange-400" />
            <h3 className="font-semibold text-lg">
              Affordable universities for postgraduate study
            </h3>
          </div>
          <ul className="list-disc list-inside text-white/85 space-y-2">
            <li>Scotland’s Rural College (SRUC)</li>
            <li>University of Southampton</li>
            <li>Aston University</li>
            <li>St George’s, University of London</li>
            <li>Trier University</li>
            <li>University of Northampton</li>
            <li>University of Hertfordshire</li>
            <li>University of Westminster</li>
            <li>Northumbria University</li>
            <li>University of Kent</li>
            <li>The University of Exeter</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

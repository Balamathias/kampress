"use client";

import { motion } from "framer-motion";
import { GraduationCap, Landmark, Users } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Globally ranked degrees",
    desc:
      "Historic universities, research excellence and industry‑informed teaching across disciplines.",
  },
  {
    icon: Landmark,
    title: "Fast, flexible programs",
    desc:
      "Three‑year bachelors and one‑year masters help you graduate sooner and enter the workforce faster.",
  },
  {
    icon: Users,
    title: "Diverse, connected cities",
    desc:
      "Vibrant multicultural campuses with strong international communities and career links.",
  },
];

export default function WhyUK() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-extrabold mb-8"
      >
        Why choose the United Kingdom
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-4 shadow-lg">
              <f.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

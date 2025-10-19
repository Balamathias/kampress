"use client";

import { motion } from "framer-motion";

const partners = [
  "/images/partner-universities/anglia.png",
  "/images/partner-universities/aston.png",
  "/images/partner-universities/birmingham.png",
  "/images/partner-universities/queen-mary.png",
  "/images/partner-universities/portsmouth.png",
  "/images/partner-universities/greenwhich.png",
  "/images/partner-universities/middlesex.png",
];

export default function Universities() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-extrabold mb-8"
      >
        Some partner and popular UK universities
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {partners.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="aspect-[4/3] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="university logo" className="object-contain h-full w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

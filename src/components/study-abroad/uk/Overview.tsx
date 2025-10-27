"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <p className="uppercase tracking-widest text-white/60 text-sm">
            Did you know what it takes you to
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-orange-400">
            Study in the United Kingdom as a Global Student?
          </h2>
          <div className="mt-4 h-1 w-16 bg-emerald-500 rounded" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="relative w-36 h-28 mx-auto lg:mx-0">
            <Image src="/images/partner-universities/anglia.png" alt="UK map" fill className="object-contain" />
          </div>
          <h3 className="text-center lg:text-left text-lg font-semibold">Overview</h3>
          <p className="text-white/85 leading-relaxed">
            The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is a multicultural hub with historic universities and innovative research. UK degrees are globally recognized and often shorter in duration, helping you save time and costs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-4"
        >
          <div className="relative w-36 h-28 mx-auto lg:mx-0">
            <Image src="/images/hero-bg-slides/slide-1.png" alt="Campus life" fill className="object-cover rounded" />
          </div>
          <h3 className="text-center lg:text-left text-lg font-semibold">
            What is special about the UK for international students?
          </h3>
          <p className="text-white/85 leading-relaxed">
            UK universities rank high globally, emphasize critical and creative thinking, and provide comprehensive student support. Diverse cities, rich culture and post‑study work options make the UK a top destination.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

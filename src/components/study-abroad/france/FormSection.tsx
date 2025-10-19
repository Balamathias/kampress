"use client";

import { motion } from "framer-motion";
import CounselingForm from "@/components/forms/CounselingForm";

export default function FormSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-[90%] max-w-5xl bg-gradient-to-r from-orange-500/10 via-orange-600/10 to-orange-700/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to start your France application?</h2>
            <p className="mt-3 text-white/85 max-w-xl">Book a counseling session. We’ll help you shortlist programmes, understand scholarships, and guide your Campus France or direct application.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <CounselingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

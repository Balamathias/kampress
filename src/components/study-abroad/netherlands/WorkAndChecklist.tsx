"use client";

import { motion } from "framer-motion";
import { Briefcase, ListChecks, FileText } from "lucide-react";

export default function WorkAndChecklist() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><Briefcase className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Student work rules (NL)</h3></div>
          <p className="text-white/85 leading-relaxed">Many non‑EU students may work up to 16 hours/week during term or full‑time in summer with a work permit; EU/EEA students can work without hour limits. Always verify with official Dutch government resources.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><ListChecks className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Application checklist</h3></div>
          <ol className="list-decimal list-inside text-white/85 space-y-2">
            {/* <li>Shortlist programmes (Studielink / university website).</li> */}
            <li>Prepare academic transcripts and diploma.</li>
            <li>Provide English proficiency (IELTS/TOEFL/PTE) if required.</li>
            <li>Submit motivation letter/CV and references.</li>
            <li>Arrange finances, insurance and housing.</li>
          </ol>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-4"><FileText className="h-6 w-6 text-orange-400" /><h3 className="font-semibold text-lg">Supporting documents</h3></div>
          <ul className="list-disc list-inside text-white/85 space-y-2">
            {/* <li>Passport/ID copy</li> */}
            <li>Academic transcripts and certificates</li>
            <li>English test results (if required)</li>
            <li>CV and motivation letter</li>
            <li>Reference letters</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

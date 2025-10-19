"use client";

import { motion } from "framer-motion";
import { UserX, ListChecks, FileText } from "lucide-react";

export default function WorkAndChecklist() {
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
            <UserX className="h-6 w-6 text-orange-400" />
            <h3 className="font-semibold text-lg">
              How many hours can international students work in the UK?
            </h3>
          </div>
          <p className="text-white/85 leading-relaxed">
            International students in the UK can typically work up to 20 hours per week during term time and full‑time during holidays. The Graduate Route allows eligible graduates to stay and work in the UK for up to two years after completing their degree.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <ListChecks className="h-6 w-6 text-orange-400" />
            <h3 className="font-semibold text-lg">
              UK International Student Admission Checklist
            </h3>
          </div>
          <ol className="list-decimal list-inside text-white/85 space-y-2">
            <li>Create your UCAS application.</li>
            <li>Apply to up to five programmes at one or different universities.</li>
            <li>Complete personal information.</li>
            <li>Include previous educational qualifications.</li>
            <li>Add financial information.</li>
            <li>Write a personal statement.</li>
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-orange-400" />
            <h3 className="font-semibold text-lg">UK University Supporting Documents</h3>
          </div>
          <ul className="list-disc list-inside text-white/85 space-y-2">
            <li>Copy of passport/visa (if available)</li>
            <li>Academic transcript and certificate of graduation</li>
            <li>Certificate of English proficiency (IELTS/TOEFL/PTE/Other)</li>
            <li>Personal statement</li>
            <li>Reference letters</li>
            <li>CV (if applicable)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

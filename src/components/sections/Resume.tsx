// ─── src/components/sections/Resume.tsx ─────────────────────────────────────
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { personal } from "@/data/config";

const highlights = [
  "ATS-optimized format",
  "Clean single-page layout",
  "Projects, skills & education",
  "Updated for 2024–25 placements",
];

export function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="resume" className="relative py-24 px-4 md:px-8" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl border border-[rgba(99,102,241,0.2)] p-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <FileText size={28} className="text-accent" />
          </div>

          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">06 / Resume</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Download My Resume
          </h2>
          <p className="text-text-secondary font-body mb-8 max-w-md mx-auto">
            My resume is crafted to be ATS-friendly while remaining visually clear for human reviewers.
          </p>

          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-10">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-text-secondary font-body text-left">
                <CheckCircle size={14} className="text-green-400 shrink-0" />
                {h}
              </div>
            ))}
          </div>

          <motion.a
            href={personal.resumeUrl}
            download
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-accent text-white font-display font-bold text-lg shadow-glow-md transition-all"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;



"use client";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { personal } from "@/data/config";
import SectionTransition from "@/components/ui/SectionTransition";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const highlights = [
  "ATS-optimized format",
  "Clean single-page layout",
  "Projects, skills & education",
  "Updated for 2026 placements",
];

export function Resume() {
  return (
    <section id="resume" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient z-0 opacity-30 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <SectionTransition variant="scale">
          <TiltCard maxTilt={5}>
            <div className="glass-card rounded-3xl p-12 border-gradient relative overflow-hidden group">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6"
              >
                <FileText size={28} className="text-accent" />
              </motion.div>

              <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">06 / Resume</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">Download My Resume</h2>
              <p className="text-text-secondary font-body mb-8 max-w-md mx-auto">
                My resume is crafted to be ATS-friendly while remaining visually clear for human reviewers.
              </p>

              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-10">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-text-secondary font-body text-left">
                    <CheckCircle size={14} className="text-green-400 shrink-0" /> {h}
                  </div>
                ))}
              </div>

              <MagneticButton>
                <a
                  href={personal.resumeUrl}
                  download
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-accent text-white font-display font-bold text-lg shadow-glow-md transition-all hover:bg-accent/90 border border-transparent hover:border-white/20 block"
                >
                  <Download size={20} /> Download Resume
                </a>
              </MagneticButton>
            </div>
          </TiltCard>
        </SectionTransition>
      </div>
    </section>
  );
}

export default Resume;

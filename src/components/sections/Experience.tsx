"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Award } from "lucide-react";
import { education, achievements } from "@/data/config";
import SectionTransition from "@/components/ui/SectionTransition";
import TiltCard from "@/components/ui/TiltCard";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <section className="relative py-24 px-4 md:px-8 bg-surface/10 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTransition variant="fadeUp">
          <div className="mb-20 text-center md:text-left">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">04 / Background</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Education & Achievements</h2>
          </div>
        </SectionTransition>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline side */}
          <div className="relative">
            {/* SVG Line for scroll animation */}
            <div className="absolute left-[15px] top-4 bottom-0 w-1 bg-white/5 rounded-full" />
            <motion.div 
              className="absolute left-[15px] top-4 bottom-0 w-1 rounded-full origin-top"
              style={{ background: "linear-gradient(180deg, #6366f1, #06b6d4)", scaleY: pathLength }}
            />

            <div className="space-y-12">
              {education.map((edu, i) => (
                <SectionTransition key={i} variant="slideRight" delay={i * 0.2}>
                  <div className="relative pl-12 group">
                    <div className="absolute left-[-2px] top-2 w-8 h-8 rounded-full border-4 border-[#0a0a1a] flex items-center justify-center z-10 transition-transform group-hover:scale-125" style={{ background: edu.color }}>
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                    
                    <TiltCard maxTilt={5}>
                      <div className="glass-card rounded-2xl p-6 border-gradient relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                          <Award size={100} style={{ color: edu.color }} />
                        </div>
                        <h3 className="font-display text-xl font-bold text-text-primary mb-1">{edu.degree}</h3>
                        <p className="text-text-secondary font-body font-medium text-sm mb-4">{edu.institution}</p>
                        
                        <div className="flex flex-col gap-2 font-mono text-xs text-text-muted">
                          <span className="flex items-center gap-2"><Calendar size={14} style={{ color: edu.color }}/> {edu.duration}</span>
                          <span className="flex items-center gap-2"><MapPin size={14} style={{ color: edu.color }}/> {edu.location}</span>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </SectionTransition>
              ))}
            </div>
          </div>

          {/* Achievements side */}
          <div>
            <SectionTransition variant="fadeUp" delay={0.2}>
              <h3 className="font-display text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
                <Award className="text-accent" /> Key Achievements
              </h3>
            </SectionTransition>
            
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <SectionTransition key={i} variant="slideLeft" delay={0.3 + i * 0.1}>
                  <div className="glass rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ background: `${ach.color}15` }}>
                      {ach.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">{ach.title}</h4>
                      <p className="text-text-secondary font-body text-sm leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                </SectionTransition>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

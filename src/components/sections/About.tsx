"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code2, Zap, Target } from "lucide-react";
import { personal } from "@/data/config";
import TiltCard from "@/components/ui/TiltCard";
import SectionTransition from "@/components/ui/SectionTransition";
import dynamic from "next/dynamic";

const FloatingGeometry = dynamic(() => import("@/components/three/FloatingGeometry"), { ssr: false });

const cards = [
  { icon: GraduationCap, title: "Education", content: personal.degree, sub: `${personal.university} · ${personal.year}`, color: "#6366f1", span: "md:col-span-2" },
  { icon: Code2, title: "Passion", content: "Full-Stack Development", sub: "React · Node.js · System Design", color: "#06b6d4", span: "" },
  { icon: Zap, title: "Focus", content: "DSA & Problem Solving", sub: "200+ problems solved", color: "#8b5cf6", span: "" },
  { icon: Target, title: "Goal", content: "Software Engineer", sub: "Building scalable systems", color: "#f59e0b", span: "md:col-span-2" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <FloatingGeometry type="icosahedron" color="#06b6d4" className="-right-1/4 -top-1/4" scale={1.5} />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <SectionTransition variant="fadeUp">
          <div className="mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">01 / About</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">Who I Am</h2>
            <p className="text-text-secondary font-body text-lg max-w-2xl leading-relaxed">{personal.bio}</p>
          </div>
        </SectionTransition>

        <div className="grid md:grid-cols-3 gap-6">
          <SectionTransition variant="slideLeft" delay={0.1} className="md:col-span-1 h-full">
            <TiltCard className="h-full" maxTilt={5}>
              <div className="glass-card rounded-2xl p-8 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-2xl gradient-text">{personal.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{personal.name}</h3>
                  <p className="text-text-secondary font-body text-sm leading-relaxed mb-6">Passionate about bridging the gap between elegant UI and robust backend architecture.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Node.js", "MongoDB", "DSA"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </SectionTransition>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <SectionTransition key={card.title} variant="fadeUp" delay={0.15 + i * 0.1} className={card.span}>
                <TiltCard className="h-full">
                  <div className="glass-card rounded-2xl p-6 h-full flex flex-col justify-center border-gradient group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3" style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}>
                      <card.icon size={20} style={{ color: card.color }} />
                    </div>
                    <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">{card.title}</p>
                    <p className="text-text-primary font-display font-semibold text-xl leading-tight mb-2">{card.content}</p>
                    <p className="text-text-secondary font-body text-sm">{card.sub}</p>
                  </div>
                </TiltCard>
              </SectionTransition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code2, Zap, Target } from "lucide-react";
import { personal } from "@/data/config";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    content: personal.degree,
    sub: `${personal.university} · ${personal.year}`,
    color: "#6366f1",
    span: "md:col-span-2",
  },
  {
    icon: Code2,
    title: "Passion",
    content: "Full-Stack Development",
    sub: "React · Node.js · System Design",
    color: "#06b6d4",
    span: "",
  },
  {
    icon: Zap,
    title: "Focus",
    content: "DSA & Competitive Programming",
    sub: "450+ problems solved",
    color: "#8b5cf6",
    span: "",
  },
  {
    icon: Target,
    title: "Goal",
    content: "Software Engineer @ Top Tech",
    sub: "Targeting 2026 placements",
    color: "#f59e0b",
    span: "md:col-span-2",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            01 / About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Who I Am
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-2xl leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Left: Large intro card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 glass rounded-2xl border border-[rgba(99,102,241,0.15)] p-8 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-2xl gradient-text">{personal.name.charAt(0)}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{personal.name}</h3>
              <p className="text-text-secondary font-body text-sm leading-relaxed">{personal.bio}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Node.js", "C++", "DSA"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Bento Grid of info cards */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`glass rounded-2xl border border-[rgba(99,102,241,0.12)] p-6 glow-border transition-all duration-300 ${card.span}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${card.color}20`, border: `1px solid ${card.color}30` }}
                >
                  <card.icon size={18} style={{ color: card.color }} />
                </div>
                <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-1">{card.title}</p>
                <p className="text-text-primary font-display font-semibold text-lg leading-tight mb-1">{card.content}</p>
                <p className="text-text-secondary font-body text-sm">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
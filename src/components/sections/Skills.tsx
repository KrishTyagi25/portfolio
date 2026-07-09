"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/config";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionTransition from "@/components/ui/SectionTransition";
import dynamic from "next/dynamic";

const FloatingGeometry = dynamic(() => import("@/components/three/FloatingGeometry"), { ssr: false });

const categories = [
  { key: "frontend", label: "Frontend", color: "#6366f1" },
  { key: "backend", label: "Backend", color: "#06b6d4" },
  { key: "languages", label: "Languages", color: "#8b5cf6" },
  { key: "tools", label: "Tools", color: "#f59e0b" },
];

function SkillBar({ name, level, icon, color, index }: { name: string; level: number; icon: string; color: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20, rotateX: -10 }}
      animate={inView ? { opacity: 1, x: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass-card rounded-xl p-4 glow-border perspective-1000"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl filter drop-shadow-md">{icon}</span>
          <span className="font-display font-medium text-text-primary text-sm">{name}</span>
        </div>
        <span className="font-mono text-xs" style={{ color }}>
          <AnimatedCounter end={level} suffix="%" duration={1500} />
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.2 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}90)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("frontend");
  
  const activeSkills = skills[active as keyof typeof skills];
  const activeColor = categories.find(c => c.key === active)?.color || "#6366f1";

  return (
    <section className="relative py-24 px-4 md:px-8 bg-surface/40 overflow-hidden">
      <FloatingGeometry type="octahedron" color={activeColor} className="-left-1/4 top-1/4" scale={2} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTransition variant="fadeUp">
          <div className="mb-12">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">02 / Skills</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Tech Arsenal</h2>
            <p className="text-text-secondary font-body text-lg max-w-xl">Technologies and tools I use to build scalable, beautiful, and performant applications.</p>
          </div>
        </SectionTransition>

        <SectionTransition variant="fadeUp" delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-10 p-2 rounded-2xl glass inline-flex border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-6 py-2.5 rounded-xl font-display font-medium text-sm transition-all duration-300 relative ${
                  active === cat.key ? "text-white" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {active === cat.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: cat.color, boxShadow: `0 0 20px ${cat.color}50` }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </SectionTransition>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activeSkills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} color={activeColor} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
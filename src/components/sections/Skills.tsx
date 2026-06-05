"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/config";

const categories = [
  { key: "frontend", label: "Frontend", color: "#6366f1" },
  { key: "backend", label: "Backend", color: "#06b6d4" },
  { key: "languages", label: "Languages", color: "#8b5cf6" },
  { key: "tools", label: "Tools", color: "#f59e0b" },
];

function SkillBar({ name, level, icon, color, index }: {
  name: string; level: number; icon: string; color: string; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="glass rounded-xl border border-[rgba(99,102,241,0.12)] p-4 glow-border transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="font-display font-medium text-text-primary text-sm">{name}</span>
        </div>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.06, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const activeSkills = skills[active as keyof typeof skills];
  const activeColor = categories.find(c => c.key === active)?.color || "#6366f1";

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 bg-surface/40" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">02 / Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Tech Arsenal
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-xl">
            Technologies and tools I use to build scalable, beautiful, and performant applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-xl font-display font-medium text-sm transition-all duration-300 ${
                active === cat.key
                  ? "text-white shadow-glow-sm"
                  : "glass border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20"
              }`}
              style={
                active === cat.key
                  ? { background: cat.color, boxShadow: `0 0 20px ${cat.color}50` }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {activeSkills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              {...skill}
              color={activeColor}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
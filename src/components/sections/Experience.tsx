"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Open Source Contributor",
    company: "GitHub / Community",
    duration: "2025 - Present",
    location: "Remote",
    description: "Contributing to various open-source projects, improving code quality, fixing bugs, and collaborating with developers globally.",
    color: "#6366f1",
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance / Personal Projects",
    duration: "2024 - Present",
    location: "Self-Employed",
    description: "Designing and developing responsive full-stack web applications using Next.js, React, Node.js, and MongoDB.",
    color: "#06b6d4",
  },
  {
    role: "B.Tech CSE Student",
    company: "Ajay Kumar Garg Engineering College",
    duration: "2024 - 2028",
    location: "Ghaziabad, UP",
    description: "Studying core computer science concepts, algorithms, data structures, and software engineering principles.",
    color: "#8b5cf6",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 bg-surface/10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">04 / Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            My Journey
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-xl">
            A timeline of my education, projects, and professional growth as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Dot */}
              <div
                className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-background transition-all duration-300 group-hover:scale-125"
                style={{ borderColor: exp.color, boxShadow: `0 0 10px ${exp.color}60` }}
              />

              {/* Card */}
              <div className="glass rounded-2xl border border-[rgba(99,102,241,0.12)] p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-primary group-hover:gradient-text transition-all">
                      {exp.role}
                    </h3>
                    <p className="text-text-secondary font-body font-medium text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-xs font-mono text-text-muted gap-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

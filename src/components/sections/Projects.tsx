"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Star } from "lucide-react";
import { projects } from "@/data/config";
import Image from "next/image";

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 glass-strong rounded-3xl border border-[rgba(99,102,241,0.2)] p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-all"
          >
            <X size={16} />
          </button>

          {/* Color accent */}
          <div
            className="h-1 w-20 rounded-full mb-6"
            style={{ background: project.color }}
          />

          <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{project.title}</h3>
          <p className="text-text-secondary font-body leading-relaxed mb-6">{project.longDescription}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono border"
                  style={{ background: `${project.color}15`, color: project.color, borderColor: `${project.color}30` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">Key Features</p>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-text-secondary font-body text-sm">
                  <Star size={12} style={{ color: project.color }} className="shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 rounded-xl glass border border-white/10 flex items-center justify-center gap-2 text-text-secondary hover:text-text-primary font-display font-medium text-sm transition-all hover:border-white/20"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 rounded-xl font-display font-medium text-sm flex items-center justify-center gap-2 text-white transition-all"
              style={{ background: project.color, boxShadow: `0 0 20px ${project.color}40` }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        whileHover={{ y: -8 }}
        className="group glass rounded-3xl border border-[rgba(99,102,241,0.12)] overflow-hidden cursor-pointer transition-all duration-500 hover:border-[rgba(99,102,241,0.3)] hover:shadow-card-hover"
        onClick={() => setOpen(true)}
      >
        {/* Project Image/Preview */}
        <div
          className="relative h-52 overflow-hidden flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)` }}
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)"
          }} />

          {/* Placeholder visual (replace with actual project screenshot) */}
          <div className="relative z-10 text-center">
            <div
              className="w-16 h-16 rounded-2xl border flex items-center justify-center mx-auto mb-3"
              style={{ background: `${project.color}20`, borderColor: `${project.color}40` }}
            >
              <ExternalLink size={24} style={{ color: project.color }} />
            </div>
            <p className="font-mono text-xs" style={{ color: project.color }}>Click to explore</p>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 backdrop-blur-sm flex items-center justify-center"
            style={{ background: `${project.color}15` }}
          >
            <span className="font-display font-semibold text-white text-sm px-4 py-2 rounded-lg"
              style={{ background: project.color }}>
              View Details →
            </span>
          </motion.div>

          {/* Color stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: project.color }} />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-text-secondary font-body text-sm leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono"
                style={{ background: `${project.color}15`, color: project.color }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono text-text-muted bg-white/5">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary font-mono transition-all"
            >
              <Github size={14} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-all"
              style={{ color: project.color }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">03 / Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-xl">
            Real-world projects that demonstrate my full-stack expertise, problem-solving approach, and attention to detail.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-accent/20 text-text-secondary hover:text-text-primary hover:border-accent/40 font-display font-medium text-sm transition-all"
          >
            <Github size={16} />
            See all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
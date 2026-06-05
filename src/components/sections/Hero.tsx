"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";
import { personal } from "@/data/config";

// Lazy load Three.js (avoid SSR issues)
const ParticleBackground = dynamic(() => import("@/components/three/ParticleBackground"), {
  ssr: false,
});

const roles = ["Full-Stack Developer", "DSA Enthusiast", "UI/UX Craftsman", "Open Source Contributor"];

function AnimatedRoles() {
  const roles_list = roles;
  return (
    <div className="overflow-hidden h-8 md:h-10">
      <motion.div
        animate={{ y: [0, -40, -80, -120, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        className="flex flex-col gap-0"
      >
        {[...roles_list, roles_list[0]].map((role, i) => (
          <span
            key={i}
            className="h-8 md:h-10 flex items-center text-accent font-display font-semibold text-lg md:text-2xl"
          >
            {role}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-hero-gradient z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-mesh z-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-1 pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-sm text-text-secondary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Internships & Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <AnimatedRoles />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl bg-accent text-white font-display font-semibold text-base hover:bg-accent/90 transition-all shadow-glow-sm"
          >
            View Projects →
          </motion.a>

          <motion.a
            href={personal.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl glass border border-accent/30 text-text-primary font-display font-semibold text-base hover:border-accent/60 transition-all flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
            { icon: FaLinkedin, href: personal.socials.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-all"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="scroll-indicator" />
      </motion.div>
    </section>
  );
}
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/config";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Coding", href: "#coding" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-[rgba(99,102,241,0.15)] py-3"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-xl gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt;KS /&gt;
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 ${
                  active === link.href
                    ? "text-accent bg-accent/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <motion.a
              href={personal.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="ml-3 px-5 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent text-sm font-medium hover:bg-accent/30 transition-all"
            >
              Resume ↓
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-40 glass-strong rounded-2xl border border-[rgba(99,102,241,0.2)] p-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all font-body"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={personal.resumeUrl}
              download
              className="block mt-2 px-4 py-3 rounded-lg bg-accent/20 border border-accent/30 text-accent text-center font-medium"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
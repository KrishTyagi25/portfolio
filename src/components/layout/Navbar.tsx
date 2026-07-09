"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/config";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Coding", href: "coding" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Active section detection
      let current = "";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = link.href;
          }
        }
      });
      setActive(current);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-[rgba(99,102,241,0.15)] py-3 shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <MagneticButton strength={10}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display font-bold text-xl gradient-text block"
            >
              &lt;KT /&gt;
            </button>
          </MagneticButton>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <MagneticButton key={link.href} strength={5}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-300 relative group block ${
                    active === link.href ? "text-white" : "text-text-secondary hover:text-white"
                  }`}
                >
                  {active === link.href && (
                    <motion.span 
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-accent/20 border border-accent/30 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              </MagneticButton>
            ))}
            <MagneticButton>
              <motion.a
                href={personal.resumeUrl}
                download
                className="ml-3 px-5 py-2 rounded-lg bg-accent border border-accent/50 text-white text-sm font-medium hover:bg-accent/90 transition-all shadow-glow-sm block"
              >
                Resume ↓
              </motion.a>
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-secondary hover:text-white"
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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-4 right-4 z-40 glass-strong rounded-2xl border border-[rgba(99,102,241,0.2)] p-4 md:hidden shadow-lg"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all font-body ${
                  active === link.href ? "bg-accent/20 text-white border border-accent/30" : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={personal.resumeUrl}
              download
              className="block mt-4 px-4 py-3 rounded-lg bg-accent border border-accent/50 text-white text-center font-medium shadow-glow-sm"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
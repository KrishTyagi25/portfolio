"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "@/data/config";
import emailjs from "emailjs-com";

// ─── SET THESE in .env.local ─────────────────────────────────────────────────
// NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
// Go to emailjs.com → Create account → Create a service & template

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl glass border border-[rgba(99,102,241,0.15)]
    text-text-primary font-body text-sm placeholder:text-text-muted
    focus:outline-none focus:border-accent/50 focus:shadow-glow-sm
    transition-all duration-300 bg-transparent
  `;

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">07 / Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-xl">
            Have an opportunity, project idea, or just want to talk code? I&apos;m always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-3xl border border-[rgba(99,102,241,0.15)] p-8 h-full">
              <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                Open for Opportunities
              </h3>
              <p className="text-text-secondary font-body leading-relaxed mb-8">
                Currently looking for internship and full-time roles in software engineering.
                If you have an exciting project or opportunity, let&apos;s build something amazing together.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-accent/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono uppercase">Email</p>
                    <p className="text-text-primary font-body text-sm group-hover:text-accent transition-colors">{personal.email}</p>
                  </div>
                </a>

                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-accent/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <FaGithub size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono uppercase">GitHub</p>
                    <p className="text-text-primary font-body text-sm group-hover:text-accent transition-colors">github.com/{codingStats?.github?.username ?? "yourusername"}</p>
                  </div>
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-accent/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center">
                    <FaLinkedin size={18} className="text-[#3b82f6]" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono uppercase">LinkedIn</p>
                    <p className="text-text-primary font-body text-sm group-hover:text-[#3b82f6] transition-colors">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-3xl border border-[rgba(99,102,241,0.15)] p-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Hey, I'd love to discuss..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl bg-accent text-white font-display font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <><CheckCircle size={16} /> Sent!</>
                  ) : status === "error" ? (
                    <><AlertCircle size={16} /> Failed. Try again</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Fix: import codingStats
const { codingStats } = personal;
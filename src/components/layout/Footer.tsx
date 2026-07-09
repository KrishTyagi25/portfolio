"use client";
import { personal } from "@/data/config";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-[rgba(99,102,241,0.1)] bg-surface/50 z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <MagneticButton strength={10}>
          <p className="font-display font-bold text-lg gradient-text block cursor-none">&lt;KT /&gt;</p>
        </MagneticButton>
        <p className="text-text-muted font-body text-sm text-center">
          Built with Next.js · Tailwind · Framer Motion · Three.js
        </p>
        <p className="text-text-muted font-body text-sm text-center">
          © {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  );
}
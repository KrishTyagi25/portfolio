// ─── src/components/layout/Footer.tsx ────────────────────────────────────────
export function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-[rgba(99,102,241,0.1)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-lg gradient-text">&lt;KS /&gt;</p>
        <p className="text-text-muted font-body text-sm">
          Built with Next.js · Tailwind · Framer Motion · Three.js
        </p>
        <p className="text-text-muted font-body text-sm">
          © {new Date().getFullYear()} Krish Sharma
        </p>
      </div>
    </footer>
  );
}
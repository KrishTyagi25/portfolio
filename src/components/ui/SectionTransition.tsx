"use client";
import { useRef, ReactNode } from "react";
import { motion, useInView, TargetAndTransition } from "framer-motion";

type Variant =
  | "fadeUp"
  | "fadeDown"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "rotateIn";

const variants: Record<Variant, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  fadeUp: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } },
  fadeDown: { initial: { opacity: 0, y: -60 }, animate: { opacity: 1, y: 0 } },
  slideLeft: { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 } },
  slideRight: { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
  rotateIn: {
    initial: { opacity: 0, rotateX: -15, y: 40 },
    animate: { opacity: 1, rotateX: 0, y: 0 },
  },
};

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  duration?: number;
}

export default function SectionTransition({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
}: SectionTransitionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const v = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial={v.initial}
      animate={inView ? v.animate : v.initial}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
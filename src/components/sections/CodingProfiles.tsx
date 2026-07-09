"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/config";
import { ExternalLink } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TiltCard from "@/components/ui/TiltCard";
import SectionTransition from "@/components/ui/SectionTransition";
import dynamic from "next/dynamic";

const FloatingGeometry = dynamic(() => import("@/components/three/FloatingGeometry"), { ssr: false });

const { codingStats, socials } = personal;

const platforms = [
  {
    name: "LeetCode", username: codingStats.leetcode.username, url: socials.leetcode,
    color: "#f59e0b", icon: "🧩",
    stats: [
      { label: "Solved", value: codingStats.leetcode.solved },
      { label: "Easy", value: codingStats.leetcode.easy },
      { label: "Medium", value: codingStats.leetcode.medium },
      { label: "Hard", value: codingStats.leetcode.hard },
    ],
    rating: codingStats.leetcode.rating, ratingLabel: "Contest Rating",
  },
  {
    name: "Codeforces", username: codingStats.codeforces.username, url: socials.codeforces,
    color: "#3b82f6", icon: "⚡",
    stats: [
      { label: "Rating", value: codingStats.codeforces.rating },
      { label: "Max Rating", value: codingStats.codeforces.maxRating },
      { label: "Solved", value: codingStats.codeforces.problemsSolved },
      { label: "Rank", value: codingStats.codeforces.rank, isString: true },
    ],
    rating: codingStats.codeforces.rating, ratingLabel: "Current Rating",
  },
  {
    name: "GitHub", username: codingStats.github.username, url: socials.github,
    color: "#6366f1", icon: "🐙",
    stats: [
      { label: "Repos", value: codingStats.github.repos },
      { label: "Stars", value: codingStats.github.stars },
      { label: "Contributions", value: codingStats.github.contributions, prefix: "+" },
      { label: "Streak", value: "Active", isString: true },
    ],
    rating: codingStats.github.contributions, ratingLabel: "Contributions", prefix: "+"
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <FloatingGeometry type="torusKnot" color="#6366f1" className="-right-1/3 top-0 opacity-40" scale={1.2} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTransition variant="fadeUp">
          <div className="mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">05 / Profiles</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">Coding Profiles</h2>
            <p className="text-text-secondary font-body text-lg max-w-xl">Actively solving problems and contributing to open source.</p>
          </div>
        </SectionTransition>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <SectionTransition key={platform.name} variant="slideUp" delay={i * 0.15}>
              <TiltCard className="h-full" glare={true} maxTilt={8}>
                <div className="glass-card rounded-3xl p-6 h-full flex flex-col border-gradient">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl filter drop-shadow-md">{platform.icon}</span>
                      <div>
                        <p className="font-display font-bold text-text-primary">{platform.name}</p>
                        <p className="font-mono text-xs text-text-muted">@{platform.username}</p>
                      </div>
                    </div>
                    <a href={platform.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 transition-all">
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="rounded-2xl p-6 mb-8 text-center flex-1 flex flex-col justify-center" style={{ background: `${platform.color}08`, border: `1px solid ${platform.color}20` }}>
                    <p className="font-display text-4xl font-bold mb-1" style={{ color: platform.color }}>
                      {platform.prefix}<AnimatedCounter end={platform.rating as number} />
                    </p>
                    <p className="text-text-muted font-mono text-xs uppercase tracking-wider">{platform.ratingLabel}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {platform.stats.map((stat) => (
                      <div key={stat.label} className="text-center bg-surface-2/50 rounded-xl p-3 border border-white/5">
                        <p className="font-display text-xl font-bold" style={{ color: platform.color }}>
                          {stat.isString ? stat.value : <><AnimatedCounter end={stat.value as number} />{stat.prefix}</>}
                        </p>
                        <p className="text-text-muted font-mono text-[10px] uppercase mt-1 tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
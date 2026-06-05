"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/config";
import { ExternalLink } from "lucide-react";

const { codingStats, socials } = personal;

function StatCard({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-2xl font-bold" style={{ color }}>{value}</p>
      <p className="text-text-muted font-body text-xs mt-1">{label}</p>
    </div>
  );
}

const platforms = [
  {
    name: "LeetCode",
    username: codingStats.leetcode.username,
    url: socials.leetcode,
    color: "#f59e0b",
    icon: "🧩",
    stats: [
      { label: "Solved", value: codingStats.leetcode.solved },
      { label: "Easy", value: codingStats.leetcode.easy },
      { label: "Medium", value: codingStats.leetcode.medium },
      { label: "Hard", value: codingStats.leetcode.hard },
    ],
    rating: codingStats.leetcode.rating,
    ratingLabel: "Contest Rating",
  },
  {
    name: "Codeforces",
    username: codingStats.codeforces.username,
    url: socials.codeforces,
    color: "#3b82f6",
    icon: "⚡",
    stats: [
      { label: "Rating", value: codingStats.codeforces.rating },
      { label: "Max Rating", value: codingStats.codeforces.maxRating },
      { label: "Solved", value: codingStats.codeforces.problemsSolved },
      { label: "Rank", value: codingStats.codeforces.rank },
    ],
    rating: codingStats.codeforces.rating,
    ratingLabel: "Current Rating",
  },
  {
    name: "GitHub",
    username: codingStats.github.username,
    url: socials.github,
    color: "#6366f1",
    icon: "🐙",
    stats: [
      { label: "Repos", value: codingStats.github.repos },
      { label: "Stars", value: codingStats.github.stars },
      { label: "Contributions", value: `${codingStats.github.contributions}+` },
      { label: "Streak", value: "Active" },
    ],
    rating: codingStats.github.contributions,
    ratingLabel: "Contributions",
  },
];

export default function CodingProfiles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coding" className="relative py-24 px-4 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">05 / Coding</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Coding Profiles
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-xl">
            Actively solving problems and competing. Here&apos;s my journey across platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-3xl border border-[rgba(99,102,241,0.12)] p-6 glow-border transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Platform Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <div>
                    <p className="font-display font-bold text-text-primary">{platform.name}</p>
                    <p className="font-mono text-xs text-text-muted">@{platform.username}</p>
                  </div>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary transition-all"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Rating highlight */}
              <div
                className="rounded-2xl p-4 mb-6 text-center"
                style={{ background: `${platform.color}12`, border: `1px solid ${platform.color}25` }}
              >
                <p className="font-display text-3xl font-bold" style={{ color: platform.color }}>
                  {platform.rating}
                  {platform.name === "GitHub" && "+"}
                </p>
                <p className="text-text-muted font-body text-xs mt-1">{platform.ratingLabel}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {platform.stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} color={platform.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 glass rounded-2xl border border-[rgba(99,102,241,0.12)] p-6 text-center"
        >
          <p className="text-text-muted font-body text-sm mb-3">GitHub Activity Graph</p>
          {/* Replace src with your actual GitHub username */}
          <img
            src={`https://ghchart.rshah.org/${codingStats.github.username}`}
            alt="GitHub Contribution Chart"
            className="mx-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity"
            style={{ maxWidth: "100%", filter: "hue-rotate(220deg)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
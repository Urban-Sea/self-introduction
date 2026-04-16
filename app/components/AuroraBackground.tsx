"use client";

import { motion } from "motion/react";

const blobs = [
  {
    className: "bg-blush-strong",
    style: { width: 680, height: 680, top: "-12%", left: "-8%" },
    animate: { x: [0, 60, -20, 0], y: [0, 40, -30, 0] },
    duration: 20,
  },
  {
    className: "bg-sky-strong",
    style: { width: 560, height: 560, top: "25%", right: "-12%" },
    animate: { x: [0, -60, 30, 0], y: [0, -30, 50, 0] },
    duration: 24,
  },
  {
    className: "bg-lilac-strong",
    style: { width: 620, height: 620, bottom: "-8%", left: "25%" },
    animate: { x: [0, 50, -60, 0], y: [0, 30, 50, 0] },
    duration: 26,
  },
  {
    className: "bg-peach-strong",
    style: { width: 460, height: 460, top: "60%", right: "20%" },
    animate: { x: [0, -40, 40, 0], y: [0, 60, -20, 0] },
    duration: 22,
  },
];

export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`aurora-blob ${b.className}`}
          style={b.style}
          animate={b.animate}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

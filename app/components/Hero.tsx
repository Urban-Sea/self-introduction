"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center px-6 py-24 md:px-12"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[auto_1fr] md:gap-28 lg:gap-44"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto h-52 w-52 shrink-0 overflow-hidden rounded-full shadow-[0_30px_60px_-20px_rgba(42,33,65,0.35)] ring-4 ring-white/80 sm:h-60 sm:w-60 md:mx-0 md:h-72 md:w-72 lg:h-[340px] lg:w-[340px]"
        >
          <Image
            src="/avatar.jpeg"
            alt="武本龍"
            width={680}
            height={680}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Right content */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-ink-soft md:text-xs"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blush-strong" />
            Self Introduction / 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-5 font-hero text-8xl italic font-medium lowercase leading-[0.9] tracking-[-0.02em] text-ink md:text-9xl lg:text-[11rem]"
          >
            hello
            <span className="not-italic text-blush-strong">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 text-sm tracking-[0.05em] text-ink-soft md:text-base"
          >
            — はじめまして。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 space-y-1.5"
          >
            <p className="font-display text-2xl font-bold text-ink md:text-3xl">
              武本 龍{" "}
              <span className="font-sans text-base font-normal text-ink-soft md:text-lg">
                / Ryu Takemoto
              </span>
            </p>
            <p className="text-sm text-ink-soft md:text-base">
              千葉工業大学 情報変革科学部 情報工学科 3年
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft md:mx-0 md:text-lg"
          >
            システムインフラエンジニア見習い。
            <br className="hidden sm:inline" />
            セキュリティも勉強中。投資と競馬が好きです。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="mt-10 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink-soft md:justify-start"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block h-5 w-px bg-ink-soft/40"
            />
            Scroll
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

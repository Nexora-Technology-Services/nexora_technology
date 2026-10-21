"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroBg from "@/app/Photo/hero-section.png";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import Footer from "@/app/components/Footer";
import {
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Globe2,
  ArrowRight,
  Code2,
  Cpu,
} from "lucide-react";

export default function WhoWeArePage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  const pillars = [
    {
      icon: Sparkles,
      title: "Engineering Craft",
      desc: "Clean architectures, automated testing pipelines, and production-tested design systems ensuring your software is resilient and scalable.",
      badge: "Zero Technical Debt Focus",
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      desc: "Agile two-week sprints with transparent milestones, automated deployment previews, and continuous stakeholder alignment.",
      badge: "Predictable Sprints",
    },
    {
      icon: Target,
      title: "Strategic Impact",
      desc: "Every line of code and user interface decision is tied directly to measurable business outcomes, speed, and user retention.",
      badge: "Measurable ROI",
    },
  ];

  const values = [
    {
      title: "Obsession with Code Quality",
      desc: "We write clean, modular, test-driven code designed for long-term maintainability and high concurrency.",
      icon: Code2,
    },
    {
      title: "Enterprise-Grade Reliability",
      desc: "Architectures built for 99.99% uptime with automated telemetry, security benchmarks, and failover redundancy.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation with Purpose",
      desc: "Deploying generative AI, intelligent pipelines, and cloud-native paradigms to solve tangible business problems.",
      icon: Cpu,
    },
    {
      title: "Global Collaboration",
      desc: "Dedicated engineering pods working in sync with your timezone and agile workflows.",
      icon: Globe2,
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO BANNER — 3D CRYSTAL NTS BACKGROUND & BALANCED FOREGROUND
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
        {/* Full Bleed Hero Background Image (Edge-to-Edge with Visible Right-Aligned NTS 3D Logo) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Technology Services - 3D Crystal NTS Identity"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-right select-none pointer-events-none"
            sizes="100vw"
          />

          {/* Minimal soft top blend for floating navbar */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Left-Aligned UI Content Container */}
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-xl lg:max-w-2xl text-left">
            {/* Glassmorphic Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-white text-[#0051fe] text-xs font-bold uppercase tracking-widest mb-3.5 sm:mb-4 backdrop-blur-md shadow-[0_4px_20px_rgba(0,81,254,0.18)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0051fe] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0051fe]" />
              </span>
              <span
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                ORGANIZATION • IDENTITY & VISION
              </span>
            </motion.div>

            {/* Impactful Heading — Solid Colors with Persistent White/Light-Blue Shadow & Animated Hover Motion */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              whileHover={{
                x: 8,
                transition: { type: "spring", stiffness: 350, damping: 22 },
              }}
              onMouseEnter={() => setH1Hovered(true)}
              onMouseLeave={() => setH1Hovered(false)}
              style={{
                textShadow: h1Hovered
                  ? "0 4px 14px rgba(255, 255, 255, 1), 0 0 28px rgba(186, 230, 253, 0.95), 0 0 45px rgba(147, 197, 253, 0.85)"
                  : "0 2px 10px rgba(255, 255, 255, 0.95), 0 0 20px rgba(186, 230, 253, 0.85), 0 0 35px rgba(147, 197, 253, 0.65)",
                transition: "text-shadow 0.35s ease",
              }}
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-slate-900 tracking-tight font-heading leading-[1.12] mb-3.5 sm:mb-4 cursor-pointer select-none inline-block"
            >
              A Forward-Thinking Partner <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">
                Built for High-Growth Scale
              </span>
            </motion.h1>

            {/* Strategic Value Proposition (Bold Sub Text, No Shadow) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-[15px] text-slate-800 hover:text-slate-950 font-semibold leading-relaxed max-w-md mb-8 drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)] hover:drop-shadow-[0_2px_16px_rgba(255,255,255,1)] cursor-default transition-all duration-300"
              style={{
                textShadow:
                  "0 1px 12px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(15, 23, 42, 0.08)",
              }}
            >
              At Nexora Technology Services, we engineer mission-critical
              systems that unite intuitive design, robust software architecture,
              and agile execution.
            </motion.p>
            {/* <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6 font-bold"
            >
              At Nexora Technology Services, we engineer mission-critical systems that unite intuitive design, robust software architecture, and agile execution.
            </motion.p> */}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6"
            >
              <Link
                href="/contact"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#principles"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_12px_28px_rgba(0,81,254,0.2)] transition-all duration-200 cursor-pointer"
              >
                <span>Our Principles</span>
              </Link>
            </motion.div>

            {/* Capability / Ethos Metrics (Positioned Perfectly Inside Viewport) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-blue-200/70 max-w-xl"
            >
              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-200/80 flex items-center justify-center text-[#0051fe] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Engineering Craft
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Zero Tech Debt
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-200/80 flex items-center justify-center text-[#0284c7] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Rapid Delivery
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Predictable Sprints
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-200/80 flex items-center justify-center text-cyan-700 shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Strategic Impact
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Measurable ROI
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE PILLARS SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="principles"
        className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f1f6fd]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Our Core Ethos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Built on Three Foundational Principles
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every system we build is designed with extreme craft, rapid
              agility, and tangible business leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-white/95 via-blue-50/50 to-white/90 border border-blue-200/80 shadow-[0_12px_35px_-6px_rgba(0,81,254,0.08)] hover:shadow-[0_20px_50px_-8px_rgba(0,81,254,0.18)] hover:border-[#0051fe]/50 hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center mb-6 shadow-[0_8px_22px_-4px_rgba(0,81,254,0.45)] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="h-1 w-10 bg-gradient-to-r from-[#0051fe] to-sky-400 rounded-full mb-4" />
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0051fe] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-blue-100 flex items-center gap-2 text-xs font-extrabold text-[#0051fe]">
                    <span>✓ {item.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ARCHITECTURAL EXCELLENCE SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Engineering Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <SpotlightCard
                  key={i}
                  spotlightColor="rgba(0, 81, 254, 0.16)"
                  borderColor="rgba(0, 81, 254, 0.4)"
                  className="p-7 bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/90"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {val.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_25px_rgba(0,81,254,0.4)] hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>Partner With Nexora</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FUTURISTIC FROSTED GLASS FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

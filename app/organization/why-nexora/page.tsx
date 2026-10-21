"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroBg from "@/app/Photo/hero-section.png";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import Footer from "@/app/components/Footer";
import {
  Zap,
  Target,
  Globe2,
  Users2,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

export default function WhyNexoraPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  const whyItems = [
    {
      icon: Zap,
      title: "Velocity & Agility",
      desc: "Rapid sprint delivery with continuous feedback loops, bringing products to market up to 40% faster than traditional agency cycles.",
      stat: "40% Faster Release",
    },
    {
      icon: Target,
      title: "Business-First Architecture",
      desc: "We don't just write code; we design scalable digital engines aligned with your revenue metrics, customer LTV, and retention.",
      stat: "ROI-Aligned Design",
    },
    {
      icon: Globe2,
      title: "Future-Ready Systems",
      desc: "Built with modern protocols, strict security benchmarks, and elastic cloud infrastructure ready for massive concurrency.",
      stat: "99.99% Elastic Scale",
    },
    {
      icon: Users2,
      title: "Dedicated Partnership",
      desc: "Direct access to senior solution architects, proactive communication, and long-term post-launch lifecycle support.",
      stat: "Zero Account Layers",
    },
  ];

  const comparison = [
    {
      feature: "Team Seniority",
      traditional: "Junior staff behind account managers",
      nexora: "Dedicated senior architects & core pods",
    },
    {
      feature: "Sprint Feedback",
      traditional: "Monthly delayed status presentations",
      nexora: "Bi-weekly live demos & staging previews",
    },
    {
      feature: "IP Ownership",
      traditional: "Proprietary lock-ins and royalties",
      nexora: "100% full client IP transfer from Day 1",
    },
    {
      feature: "Code Quality",
      traditional: "Manual regression and accumulated tech debt",
      nexora: "Automated test suites & strict linting benchmarks",
    },
    {
      feature: "Post-Launch SLA",
      traditional: "Ticket-based generic queue support",
      nexora: "24/7 dedicated engineering telemetry & SLAs",
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════
          HERO BANNER — 3D CRYSTAL NTS BACKGROUND & BALANCED FOREGROUND
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-0 md:min-h-[560px] lg:min-h-screen flex items-center pt-[88px] sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-16 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
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
                ORGANIZATION • THE NEXORA ADVANTAGE
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
              THE NEXORA <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">ENGINEERING ADVANTAGE</span>
            </motion.h1>

            {/* Strategic Value Proposition (Bold Sub Text, No Shadow) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-[15px] text-slate-800 hover:text-slate-950 font-semibold leading-relaxed max-w-md mb-6 sm:mb-8 drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)] hover:drop-shadow-[0_2px_16px_rgba(255,255,255,1)] cursor-default transition-all duration-300"
              style={{
                textShadow:
                  "0 1px 12px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(15, 23, 42, 0.08)",
              }}
            >
              Discover why fast-growing scaleups and enterprise leaders trust
              our dedicated pods for high-stakes digital transformations.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY NEXORA GRID
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Strategic Leverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Why Ambitious{" "}
              <span className="text-[#0051fe]">Leaders Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.18)"
                  borderColor="rgba(0, 81, 254, 0.45)"
                  className="flex flex-col justify-between p-8 bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/90 shadow-[0_12px_35px_-6px_rgba(0,81,254,0.08)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-[0_8px_22px_-4px_rgba(0,81,254,0.4)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0051fe] transition-colors font-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0051fe] uppercase tracking-wider">
                      {item.stat}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Enterprise Standard
                    </span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARATIVE DIFFERENTIATION TABLE
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Traditional Outsourcing vs{" "}
              <span className="text-[#0051fe]">Nexora</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A transparent comparison of how our dedicated pod model delivers
              superior outcomes.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-blue-200/90 shadow-xl bg-white">
            <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-4 sm:col-span-4">Evaluation Metric</div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">
                Traditional Agency
              </div>
              <div className="col-span-4 sm:col-span-4 text-cyan-300 font-extrabold">
                Nexora Technology Services
              </div>
            </div>

            <div className="divide-y divide-blue-100">
              {comparison.map((row, rIdx) => (
                <div
                  key={rIdx}
                  className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm hover:bg-blue-50/40 transition-colors"
                >
                  <div className="col-span-4 sm:col-span-4 font-bold text-slate-900">
                    {row.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-center gap-1.5 pr-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-[#0051fe] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{row.nexora}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_25px_rgba(0,81,254,0.4)] hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>Build With Nexora</span>
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

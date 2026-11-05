"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroBg from "@/public/images/hero-section.png";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

export default function WhyNexoraPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  const partnerPoints = [
    {
      title: "Industry Understanding",
      desc: "Experience in manufacturing, distribution and enterprise technology environments.",
    },
    {
      title: "End-to-End Capabilities",
      desc: "From application development to cloud, data integration and support.",
    },
    {
      title: "Flexible Engagement Models",
      desc: "Project-based, dedicated teams, or long-term partnership.",
    },
    {
      title: "Skilled & Scalable Talent",
      desc: "Access to experienced engineers and domain-savvy teams when you need them.",
    },
    {
      title: "Quality & Security Focus",
      desc: "Built-in quality processes, secure development practices and compliance awareness.",
    },
    {
      title: "Collaborative Approach",
      desc: "We work as an extension of your team, with transparency, shared ownership and focus on outcomes.",
    },
  ];

  const clientBenefits = [
    {
      icon: Zap,
      badge: "Speed",
      title: "Faster Time to Value",
      desc: "Experienced teams and proven methodologies.",
    },
    {
      icon: ShieldCheck,
      badge: "Security",
      title: "Reduced Execution Risk",
      desc: "Structured delivery, quality and security focus.",
    },
    {
      icon: TrendingUp,
      badge: "Output",
      title: "Operational Efficiency",
      desc: "Technology solutions that simplify processes and improve productivity.",
    },
    {
      icon: Sparkles,
      badge: "Agility",
      title: "Access to Innovation",
      desc: "Modern technologies to support evolving business needs.",
    },
    {
      icon: HeartHandshake,
      badge: "Trust",
      title: "Long-Term Partnership",
      desc: "Committed to your growth journey beyond individual projects.",
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
              our dedicated teams for high-stakes digital transformations.
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
          THE RIGHT PARTNER SECTION (STRATEGIC LEVERAGE)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Strategic Leverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              The right partner to support your{" "}
              <span className="text-[#0051fe]">digital journey.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerPoints.map((item, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(0, 81, 254, 0.15)"
                borderColor="rgba(0, 81, 254, 0.35)"
                className="flex flex-col p-7 bg-white/95 border-blue-200/80 shadow-[0_8px_30px_-6px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.12)] transition-all"
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-[#0051fe] flex items-center justify-center shrink-0 font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-12">
                  {item.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT THIS MEANS FOR OUR CLIENTS (SINGLE ROW 5-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-blue-100/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Client Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              What this means for{" "}
              <span className="text-[#0051fe]">our clients</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Clear, compounding outcomes engineered into every engagement.
            </p>
          </div>

          {/* 5-Column Grid with Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-4.5">
            {clientBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.18)"
                  borderColor="rgba(0, 81, 254, 0.4)"
                  className="group relative flex flex-col justify-between p-5 xl:p-6 rounded-2xl bg-gradient-to-b from-white via-[#f8fbff] to-blue-50/20 border-blue-100 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(0,81,254,0.18)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    {/* Top Accent: Numbering badge & Category Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-black font-mono tracking-wider text-[#0051fe]/70 bg-blue-50/90 px-2 py-0.5 rounded-md border border-blue-100/80">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    {/* Icon container */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center mb-4 shadow-[0_8px_18px_-4px_rgba(0,81,254,0.4)] group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] xl:text-base font-extrabold text-slate-900 font-heading leading-snug mb-2 group-hover:text-[#0051fe] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs xl:text-[13px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom indicator border line */}
                  {/* <div className="mt-5 pt-3.5 border-t border-blue-100/70 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#0051fe] transition-colors">
                      Guaranteed Focus
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0051fe]/60 group-hover:text-[#0051fe] transition-colors" />
                  </div> */}
                </SpotlightCard>
              );
            })}
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

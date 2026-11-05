"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroBg from "@/public/images/hero-section.png";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Search,
  Layout,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  GitBranch,
  TrendingUp,
  Users,
  ShieldAlert,
  Zap,
  Repeat,
} from "lucide-react";

export default function ExecutionModelPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  const processSteps = [
    {
      step: "01",
      phaseName: "Phase 1",
      title: "Initiate to Plan",
      desc: "Establish strategic alignment, comprehensive governance frameworks, and an actionable roadmap to guarantee predictable milestone delivery.",
      icon: Search,
    },
    {
      step: "02",
      phaseName: "Phase 2",
      title: "Analyze to Design",
      desc: "Conduct thorough current-state evaluations, map target architectures, perform gap assessments, and formalize blueprint specifications.",
      icon: Layout,
    },
    {
      step: "03",
      phaseName: "Phase 3",
      title: "Build to Realize",
      desc: "Bring functional designs into reality through structured configuration, custom software engineering, pipeline integrations, and data migration.",
      icon: Code2,
    },
    {
      step: "04",
      phaseName: "Phase 4",
      title: "Test to Confirm",
      desc: "Validate every functional boundary, verify integration points, benchmark load performance, and ensure enterprise compliance before release.",
      icon: ShieldCheck,
    },
    {
      step: "05",
      phaseName: "Phase 5",
      title: "Finalize to Go-Live",
      desc: "Execute precise cutover sequences, upskill business users, ensure operational launch readiness, and provide dedicated hypercare stability.",
      icon: Rocket,
    },
    {
      step: "06",
      phaseName: "Phase 6",
      title: "Close to Transfer",
      desc: "Formalize project completion, complete seamless knowledge handover to operations teams, and track long-term ROI and business value realization.",
      icon: GitBranch,
    },
  ];

  const keyOutcomes = [
    {
      icon: Zap,
      title: "Predictable delivery",
      metric: "On-Time Sprints",
      desc: "Stage-gated milestones eliminate schedule variance and maintain clear execution pace.",
    },
    {
      icon: Users,
      title: "Improved adoption",
      metric: "User-Centered",
      desc: "Structured training and proactive enablement drive maximum stakeholder engagement.",
    },
    {
      icon: ShieldAlert,
      title: "Reduced Risk",
      metric: "Zero Surprises",
      desc: "Continuous automated validation, fit-gap scrutiny, and early regression detection.",
    },
    {
      icon: TrendingUp,
      title: "Higher Business Value",
      metric: "Maximized ROI",
      desc: "Direct alignment with strategic enterprise objectives and measurable KPIs.",
    },
    {
      icon: Repeat,
      title: "Successful Transition to support",
      metric: "Seamless Handoff",
      desc: "Thorough documentation, knowledge transfer, and hypercare guarantee long-term stability.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO BANNER — 3D CRYSTAL NTS BACKGROUND & BALANCED FOREGROUND
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-0 md:min-h-[560px] lg:min-h-screen flex items-center pt-[88px] sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-16 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
        {" "}
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
                ORGANIZATION • EXECUTION MODEL
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
              A Proven, Transparent <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">Delivery Lifecycle</span>
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
              Predictable delivery cycles engineered to keep you in total
              control from day one with continuous telemetry and zero technical
              debt.
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
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#process"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_12px_28px_rgba(0,81,254,0.2)] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Delivery Phases</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCESS 6 PHASES DETAILED
      ═══════════════════════════════════════════ */}
      <section
        id="process"
        className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Structured 6-Phase Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              How Your Project Moves From{" "}
              <span className="text-[#0051fe]">Initiation to Realization</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              An enterprise-grade, stage-gated delivery blueprint engineered for
              rapid execution, rigorous validation, and long-term operational
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {processSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.18)"
                  borderColor="rgba(0, 81, 254, 0.45)"
                  className="p-7 sm:p-8 bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/90 shadow-[0_12px_35px_-6px_rgba(0,81,254,0.08)] flex flex-col justify-between rounded-3xl hover:shadow-[0_20px_45px_-8px_rgba(0,81,254,0.16)] transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#1d4ed8] text-white flex items-center justify-center font-extrabold text-lg sm:text-xl shadow-[0_8px_22px_rgba(0,81,254,0.35)] group-hover:scale-105 transition-transform duration-300">
                        {item.step}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-[11px] font-extrabold text-[#0051fe] border border-blue-200 tracking-wide uppercase">
                        {item.phaseName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0051fe] flex items-center justify-center border border-blue-100">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#0051fe] transition-colors font-heading">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          KEY OUTCOMES SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f4f8fe] via-[#edf4ff] to-white border-t border-blue-100/90 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Measurable Business Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Key <span className="text-[#0051fe]">Outcomes</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every phase of our execution model is tied directly to tangible,
              de-risked enterprise milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {keyOutcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative p-6 rounded-3xl bg-white/90 border border-blue-200/80 backdrop-blur-sm shadow-[0_10px_30px_-8px_rgba(0,81,254,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#1d4ed8] text-white flex items-center justify-center mb-5 shadow-[0_6px_18px_rgba(0,81,254,0.3)] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-extrabold text-[#0051fe] tracking-wider uppercase mb-2.5">
                      {item.metric}
                    </span>

                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-[#0051fe] transition-colors font-heading">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-blue-100 flex items-center gap-1.5 text-[11px] font-bold text-[#0051fe]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0051fe] shrink-0" />
                    <span>Guaranteed Standard</span>
                  </div>
                </div>
              );
            })}
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

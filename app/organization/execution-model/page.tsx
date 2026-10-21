"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroBg from "@/app/Photo/hero-section.png";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import Footer from "@/app/components/Footer";
import {
  Search,
  Layout,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  GitBranch,
  Eye,
} from "lucide-react";

export default function ExecutionModelPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      desc: "Deep dive into your technical constraints, user personas, and target KPIs to architect the perfect roadmap and sprint budget.",
      icon: Search,
      deliverables: [
        "Product Specification Document",
        "Architecture Blueprints",
        "KPI & Milestone Roadmap",
      ],
    },
    {
      step: "02",
      title: "Architecture & UI/UX",
      desc: "Interactive high-fidelity wireframes, modular design tokens, schema definitions, and cloud infrastructure specifications.",
      icon: Layout,
      deliverables: [
        "Interactive Framer Prototypes",
        "Cloud IAM & Network Topology",
        "Database Schema Specs",
      ],
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Bi-weekly sprint demos, test-driven codebases, pull-request peer reviews, and automated staging environments.",
      icon: Code2,
      deliverables: [
        "Bi-Weekly Sprint Demos",
        "Automated Regression Test Suites",
        "Staging Preview Environments",
      ],
    },
    {
      step: "04",
      title: "Deployment & Scaling",
      desc: "Zero-downtime production deployment, telemetry observability, latency monitoring, and continuous performance tuning.",
      icon: Rocket,
      deliverables: [
        "Automated CI/CD Pipelines",
        "24/7 Telemetry & Observability",
        "Complete IP & Documentation Transfer",
      ],
    },
  ];

  const highlights = [
    {
      icon: GitBranch,
      title: "Transparent Sprint Demos",
      desc: "Review working software every 14 days with staging deployments you can test in real time.",
    },
    {
      icon: ShieldCheck,
      title: "Automated QA & Security",
      desc: "Every commit undergoes automated linting, security vulnerability scans, and unit test suites.",
    },
    {
      icon: Eye,
      title: "Live Telemetry & Observability",
      desc: "Full visibility into system performance, error logs, and cloud resource utilization.",
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
            {/* <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-bold"
            >
              Predictable delivery cycles engineered to keep you in total control from day one with continuous telemetry and zero technical debt.
            </motion.p> */}

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
          PROCESS 4 PHASES DETAILED
      ═══════════════════════════════════════════ */}
      <section
        id="process"
        className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Structured 4-Phase System
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              How Your Project Moves From{" "}
              <span className="text-[#0051fe]">Concept to Scale</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((item, idx) => {
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.18)"
                  borderColor="rgba(0, 81, 254, 0.45)"
                  className="p-8 bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/90 shadow-[0_12px_35px_-6px_rgba(0,81,254,0.08)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#1d4ed8] text-white flex items-center justify-center font-extrabold text-xl shadow-[0_8px_22px_rgba(0,81,254,0.4)]">
                        {item.step}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-xs font-bold text-[#0051fe] border border-blue-200">
                        Phase {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0051fe] transition-colors font-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-blue-100">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#0051fe]">
                        Key Deliverables:
                      </p>
                      {item.deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0051fe] shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-100/80 flex items-center justify-between text-xs font-bold text-[#0051fe]">
                    <span>Stage Gate Review</span>
                    <span>100% Quality Checked</span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GOVERNANCE & TRANSPARENCY
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0051fe] tracking-tight font-heading">
              Agile Governance & Predictability
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              You maintain total transparency into codebase check-ins, sprint
              velocity, and burn-down charts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-blue-50/50 border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0051fe] text-white flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {h.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider shadow-[0_8px_25px_rgba(0,81,254,0.4)] hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>Schedule Roadmap Discovery</span>
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

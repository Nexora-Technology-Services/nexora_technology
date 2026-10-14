"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  Zap,
  Layers,
  GitBranch,
  Eye,
} from "lucide-react";

export default function ExecutionModelPage() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      desc: "Deep dive into your technical constraints, user personas, and target KPIs to architect the perfect roadmap and sprint budget.",
      icon: Search,
      deliverables: ["Product Specification Document", "Architecture Blueprints", "KPI & Milestone Roadmap"],
    },
    {
      step: "02",
      title: "Architecture & UI/UX",
      desc: "Interactive high-fidelity wireframes, modular design tokens, schema definitions, and cloud infrastructure specifications.",
      icon: Layout,
      deliverables: ["Interactive Framer Prototypes", "Cloud IAM & Network Topology", "Database Schema Specs"],
    },
    {
      step: "03",
      title: "Agile Development",
      desc: "Bi-weekly sprint demos, test-driven codebases, pull-request peer reviews, and automated staging environments.",
      icon: Code2,
      deliverables: ["Bi-Weekly Sprint Demos", "Automated Regression Test Suites", "Staging Preview Environments"],
    },
    {
      step: "04",
      title: "Deployment & Scaling",
      desc: "Zero-downtime production deployment, telemetry observability, latency monitoring, and continuous performance tuning.",
      icon: Rocket,
      deliverables: ["Automated CI/CD Pipelines", "24/7 Telemetry & Observability", "Complete IP & Documentation Transfer"],
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
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white border-b border-blue-400/30 shadow-2xl">
        
        {/* Ambient Lights */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl z-0" />

        {/* Cyber Matrix Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,black_40%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <span>ORGANIZATION • EXECUTION MODEL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-heading"
          >
            A Proven, Transparent <br />
            <span className="text-[#67e8f9] drop-shadow-sm">
              Delivery Lifecycle
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100 leading-relaxed font-medium opacity-95"
          >
            Predictable delivery cycles engineered to keep you in total control from day one with continuous telemetry and zero technical debt.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCESS 4 PHASES DETAILED
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]">
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
              const Icon = item.icon;
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
                        <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
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
              You maintain total transparency into codebase check-ins, sprint velocity, and burn-down charts.
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{h.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
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

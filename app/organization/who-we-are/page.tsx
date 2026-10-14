"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
            <span>ORGANIZATION • IDENTITY & VISION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-heading"
          >
            A Forward-Thinking Partner <br />
            <span className="text-[#67e8f9] drop-shadow-sm">
              Built for High-Growth Scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100 leading-relaxed font-medium opacity-95"
          >
            At Nexora Technology Services, we engineer mission-critical systems that unite intuitive design, robust software architecture, and agile execution.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE PILLARS SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f1f6fd]">
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
              Every system we build is designed with extreme craft, rapid agility, and tangible business leverage.
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
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
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

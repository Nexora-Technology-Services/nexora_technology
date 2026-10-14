"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
            <span>ORGANIZATION • THE NEXORA ADVANTAGE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-heading"
          >
            The Nexora <br />
            <span className="text-[#67e8f9] drop-shadow-sm">
              Engineering Advantage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100 leading-relaxed font-medium opacity-95"
          >
            Discover why fast-growing scaleups and enterprise leaders trust our dedicated pods for high-stakes digital transformations.
          </motion.p>
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
              A transparent comparison of how our dedicated pod model delivers superior outcomes.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-blue-200/90 shadow-xl bg-white">
            <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-4 sm:col-span-4">Evaluation Metric</div>
              <div className="col-span-4 sm:col-span-4 text-slate-400">Traditional Agency</div>
              <div className="col-span-4 sm:col-span-4 text-cyan-300 font-extrabold">Nexora Technology Services</div>
            </div>

            <div className="divide-y divide-blue-100">
              {comparison.map((row, rIdx) => (
                <div key={rIdx} className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm hover:bg-blue-50/40 transition-colors">
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

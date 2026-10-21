"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img1 from "@/app/Photo/img 1.jpg";
import Footer from "@/app/components/Footer";
import { CheckCircle2, Award, Zap, ArrowRight } from "lucide-react";

export default function AboutNexoraPage() {
  const keyStrengths = [
    "Agile Two-Week Sprints",
    "24/7 Production Support",
    "Modern Cloud Security",
    "Transparent Fixed/Time Pricing",
    "Full IP Ownership",
    "Long-Term Scale Roadmaps",
    "SOC2 Compliant Workflows",
    "Direct Architect Access",
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
            <span>ORGANIZATION • COMPANY STORY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-heading"
          >
            Engineering Trust. <br />
            <span className="text-[#67e8f9] drop-shadow-sm">
              Accelerating Modern Enterprises.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100 leading-relaxed font-medium opacity-95"
          >
            Founded with a singular commitment: to bridge ambitious vision and
            production-grade engineering through transparent workflows and
            technical mastery.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT NEXORA & INTERACTIVE SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          {/* Left Column — Deep Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Our Mission
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-heading">
              A Technical Co-Pilot For <br />
              <span className="bg-gradient-to-r from-[#0051fe] via-[#2563eb] to-[#0284c7] bg-clip-text text-transparent">
                High-Stakes Initiatives
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Nexora Technology Services Pvt. Ltd. was founded with a singular
              commitment: to bridge ambitious vision and production-grade
              engineering. We build long-term relationships through technical
              mastery, transparent workflows, and obsessive attention to detail.
            </p>

            <div className="space-y-3 mb-4 text-slate-600 text-base leading-relaxed">
              <p>
                Our specialized engineering pods cover custom web applications,
                multi-tier ERP architectures, cloud telemetry, and bespoke AI
                workflows. With an unwavering focus on performance, security,
                and developer ergonomics, every deliverable is built to scale
                gracefully under enterprise load.
              </p>
              <p>
                Whether you are scaling from seed to series or modernizing
                critical infrastructure for a multinational organization, we
                serve as your trusted technical co-pilot.
              </p>
            </div>

            {/* Feature Checklist with Vivid Blue Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full my-6">
              {keyStrengths.map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-sm text-slate-700 font-semibold p-2.5 rounded-xl bg-white/80 border border-blue-100 shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0051fe] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/about"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <span>View Leadership Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column — Device Mockup & Badges with Blue Aura */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0051fe]/35 via-sky-400/25 to-blue-600/20 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden p-3 shadow-2xl bg-white/90 border border-blue-200">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square border border-blue-100">
                <Image
                  src={img1}
                  alt="Nexora Technology Team in Action"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0051fe]/85 via-[#0051fe]/20 to-transparent" />

                {/* Floating Bottom Label inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-xl border border-blue-200/90 shadow-lg">
                  <p className="text-xs font-extrabold text-[#0051fe] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0051fe] animate-pulse" />
                    Nexora Engineering Hub
                  </p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">
                    Bengaluru, India • Serving Global Enterprises
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Metric Badge */}
            <div className="absolute -top-4 -left-4 sm:-left-6 rounded-2xl p-3.5 shadow-xl bg-white/95 border border-blue-200 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,81,254,0.3)]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">
                  98% Satisfaction
                </p>
                <p className="text-[10px] font-bold text-[#0051fe]">
                  Verified Client Rating
                </p>
              </div>
            </div>

            {/* Floating Speed Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 rounded-2xl p-3.5 shadow-xl bg-white/95 border border-blue-200 flex items-center gap-3 animate-float-delayed">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#0284c7] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,81,254,0.3)]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">
                  2x Time-to-Market
                </p>
                <p className="text-[10px] font-bold text-[#0051fe]">
                  Rapid Sprint Cycles
                </p>
              </div>
            </div>
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

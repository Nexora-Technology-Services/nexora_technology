"use client";

import { useState } from "react";
import Image from "next/image";
import heroBg from "@/public/images/hero-section.png";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Quote,
  Cpu,
  Compass,
} from "lucide-react";

const leaders = [
  {
    name: "Venkatesh Gothe",
    title: "Founder & CEO",
    initials: "VG",
    bio: "Guiding Nexora's global strategy, engineering standards, and innovation roadmap. Venkatesh spearheads mission-critical software engineering, enterprise cloud modernization, and applied AI workflows with an uncompromising focus on code craft, transparency, and scalable architecture.",
    quote:
      "We founded Nexora with one immutable principle: solve high-stakes challenges with uncompromising engineering craft, absolute transparency, and genuine client ownership.",
    expertise: [
      "Enterprise Architecture",
      "Applied AI & Cloud Transformation",
      "Global Technology Strategy",
      "High-Concurrency Systems",
    ],
    stats: [{ label: "Experience", value: "25+ Years" }],
    accentGradient: "from-[#0051fe] via-[#2563eb] to-[#0284c7]",
    badgeBg: "bg-blue-50 text-[#0051fe] border-blue-200",
    linkedin:
      "https://www.linkedin.com/company/nexora-technology-services-pvt-ltd",
    email: "info@nexoratechnology.co.in",
  },
  {
    name: "M. B Sanjay",
    title: "COO",
    initials: "MS",
    bio: "Directing Nexora's operational architecture, delivery governance, and multi-disciplinary engineering pods. Sanjay ensures every client engagement executes with predictable sprint cadences, SOC2-standard quality benchmarks, and proactive stakeholder collaboration across global timezones.",
    quote:
      "Predictability in execution and precision in delivery are what turn ambitious digital blueprints into durable, high-performing production systems.",
    expertise: [
      "Agile Delivery Governance",
      "Engineering Pod Optimization",
      "Enterprise SLA Compliance",
      "Continuous Integration & QA",
    ],
    stats: [{ label: "Experience", value: "30+ Years" }],
    accentGradient: "from-[#0284c7] via-[#0051fe] to-[#1e3a8a]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200",
    linkedin:
      "https://www.linkedin.com/company/nexora-technology-services-pvt-ltd",
    email: "info@nexoratechnology.co.in",
  },
];

const leadershipPrinciples = [
  {
    icon: Cpu,
    title: "Engineering Over Buzzwords",
    description:
      "We prioritize robust, test-driven architectures, low latency, and zero technical debt over fleeting technological trends.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description:
      "Direct access to solution architects, live staging previews, open sprint backlogs, and total IP ownership without middleman friction.",
  },
  {
    icon: Compass,
    title: "Client-Centric Co-Pilot",
    description:
      "We approach every client engagement as our own product, aligning our software architecture with concrete business metrics and growth.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description:
      "Pioneering cloud-native paradigms, generative AI integrations, and automated pipelines to give our partners a distinct competitive edge.",
  },
];

export default function About() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — POWER BLUE PALETTE & CYBER GRID
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
                ORGANIZATION • EXECUTIVE LEADERSHIP
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
              VISIONARY LEADERSHIP <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">
                ARCHITECTING GLOBAL EXCELLENCE
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
              Meet the leaders guiding Nexora&apos;s engineering craft, rapid
              agile execution, and unwavering commitment to client value.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6"
            ></motion.div>

            {/* Enterprise Trust & Capability Metrics (Positioned Perfectly Inside Viewport) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-blue-200/70 max-w-xl"
            >
              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-200/80 flex items-center justify-center text-[#0051fe] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Direct Architect Access
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    No Junior Filters
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-200/80 flex items-center justify-center text-[#0284c7] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    100+Systems Built
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Mission Critical-scale
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-200/80 flex items-center justify-center text-cyan-700 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    100 % IP Protected
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Full Code Ownership
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LEADERSHIP DIRECTORY — FEATURED PROFILES
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Executive Directory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              The Minds Driving Nexora
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Decades of combined engineering mastery, enterprise operational
              scaling, and an unrelenting drive to help our clients lead their
              industries.
            </p>
          </div>

          {/* Leaders List */}
          <div className="space-y-12">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 81, 254, 0.14)"
                  borderColor="rgba(0, 81, 254, 0.45)"
                  className="p-6 sm:p-10 bg-white/95 border-blue-200/90 shadow-[0_20px_60px_-15px_rgba(0,81,254,0.12)] rounded-3xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left: Avatar & Identity Visual */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center">
                      <div className="relative group/avatar">
                        {/* Ambient Glow */}
                        <div
                          className={`absolute -inset-4 bg-gradient-to-tr ${leader.accentGradient} opacity-30 rounded-full blur-xl group-hover/avatar:opacity-50 transition-opacity duration-300`}
                        />

                        {/* Modern Avatar Crest */}
                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-1.5 bg-gradient-to-br from-white via-blue-100 to-blue-200 shadow-xl border border-blue-200/80 flex items-center justify-center">
                          <div
                            className={`w-full h-full rounded-[22px] bg-gradient-to-br ${leader.accentGradient} flex flex-col items-center justify-center text-white relative overflow-hidden shadow-inner`}
                          >
                            {/* Abstract Matrix Overlay in Avatar */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25)_0%,transparent_60%)]" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                            <span className="font-heading text-4xl sm:text-5xl font-black tracking-tight drop-shadow-md z-10">
                              {leader.initials}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Experience Stat Metric Box */}
                      <div className="mt-6 w-full max-w-[200px]">
                        {leader.stats.map((st, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200/90 text-center shadow-xs"
                          >
                            <p className="text-2xl font-black text-slate-950 font-heading">
                              {st.value}
                            </p>
                            <p className="text-xs font-extrabold text-[#0051fe] uppercase tracking-wider mt-0.5">
                              {st.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Social Connect Icons */}
                      <div className="mt-5 flex items-center gap-2.5">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Connect with ${leader.name} on LinkedIn`}
                          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#0051fe] hover:text-white text-slate-700 border border-slate-200/80 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_4px_16px_rgba(0,81,254,0.3)] hover:-translate-y-0.5"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        <a
                          href={`mailto:${leader.email}`}
                          aria-label={`Send an email to ${leader.name}`}
                          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#0051fe] hover:text-white text-slate-700 border border-slate-200/80 flex items-center justify-center transition-all shadow-sm hover:shadow-[0_4px_16px_rgba(0,81,254,0.3)] hover:-translate-y-0.5"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right: Detailed Bio, Philosophy & Expertise */}
                    <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                      {/* Name & Title */}
                      <div>
                        <div className="mb-2">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-extrabold uppercase tracking-wider ${leader.badgeBg}`}
                          >
                            {leader.title}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 font-heading tracking-tight">
                          {leader.name}
                        </h3>
                      </div>

                      {/* Full Bio */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                        {leader.bio}
                      </p>

                      {/* Executive Philosophy Quote */}
                      <div className="relative p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-blue-50/40 border border-blue-200/80 shadow-sm">
                        <Quote className="w-6 h-6 text-[#0051fe]/30 absolute top-4 right-4 pointer-events-none" />
                        <p className="text-xs sm:text-sm font-medium italic text-slate-800 leading-relaxed pr-6">
                          &quot;{leader.quote}&quot;
                        </p>
                      </div>

                      {/* Core Competencies / Expertise Pills */}
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                          Executive Focus Areas
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-xl bg-white border border-blue-200/90 text-slate-800 text-xs font-bold shadow-xs hover:border-[#0051fe] hover:text-[#0051fe] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LEADERSHIP PHILOSOPHY & ETHOS
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100/80">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Executive Tenets
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              How Our Leadership Operates
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              The non-negotiable principles that guide our technical choices,
              engagement models, and organizational growth.
            </p>
          </div>

          {/* Grid of Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.16)"
                  borderColor="rgba(0, 81, 254, 0.4)"
                  className="p-7 sm:p-8 bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/90 shadow-sm"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-[0_6px_18px_rgba(0,81,254,0.35)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-heading mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CALL TO ACTION (CTA) BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white shadow-[0_20px_60px_-15px_rgba(0,81,254,0.45)] border border-blue-400/40 text-center">
            {/* Ambient Background Aura Lights */}
            <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/30 text-xs font-bold uppercase tracking-wider text-cyan-200 mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                Collaborate Directly With Leadership
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-4">
                Ready to Discuss Your Next Architectural Initiative?
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                Whether you need senior architecture advisory, specialized
                engineering pods, or cloud modernization, our executive team is
                ready to connect.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Schedule Meeting</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/organization/execution-model"
                  className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Explore Execution Model</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SHARED ENTERPRISE FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";
import {
  Users,
  Search,
  Briefcase,
  Clock,
  Globe,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Activity,
  Laptop,
  Cpu,
  ShieldCheck,
  ClipboardCheck,
  UserCheck,
  Building2,
  Check,
  Layers,
} from "lucide-react";

export default function TalentAcquisition() {
  const approachSteps = [
    { n: "01", title: "Understanding client requirements and company culture" },
    { n: "02", title: "Sourcing candidates through multiple channels" },
    { n: "03", title: "Screening and shortlisting top talent" },
    { n: "04", title: "Coordinating interviews and assessments" },
    { n: "05", title: "Managing offer negotiation and onboarding" },
  ];

  const offerings = [
    {
      icon: Users,
      title: "End-to-End Recruitment Solutions",
      desc: "We manage the complete hiring lifecycle — from requirement analysis to candidate onboarding — ensuring a seamless and efficient recruitment experience.",
    },
    {
      icon: Laptop,
      title: "IT Hiring Expertise",
      desc: "Specialized in sourcing top-tier technology professionals across development, infrastructure, data, and cybersecurity domains.",
    },
    {
      icon: Briefcase,
      title: "Leadership & Executive Search and Hiring",
      desc: "Strategic search and placement for C-suite and senior leadership roles through our exclusive executive network and discreet headhunting process.",
    },
    {
      icon: Clock,
      title: "Contract & Permanent Staffing",
      desc: "Flexible staffing models to meet your business needs — short-term contracts, long-term engagements, or direct permanent placements.",
    },
  ];

  const whyItems = [
    {
      icon: Globe,
      title: "Strong Talent Network",
      desc: "Extensive cross-industry connections enabling access to a wide pool of pre-vetted, high-quality candidates.",
    },
    {
      icon: Zap,
      title: "Faster Turnaround Time",
      desc: "Streamlined processes and advanced sourcing techniques ensure quality hires are delivered without delay.",
    },
    {
      icon: Target,
      title: "Customized Hiring Strategies",
      desc: "Tailored recruitment plans aligned with your unique organizational goals, culture, and growth objectives.",
    },
    {
      icon: BarChart3,
      title: "Transparent Communication",
      desc: "Clear reporting at every stage of the recruitment lifecycle — no surprises, just actionable insights.",
    },
    {
      icon: UserCheck,
      title: "Cultural Fit & Long-Term Retention",
      desc: "We prioritize lasting placements by matching candidates who align with your values and team dynamics.",
    },
  ];

  const heroStats = [
    {
      icon: Users,
      label: "Talent Operations",
      value: "Full Lifecycle",
      sub: "End-to-end recruitment",
      color: "from-cyan-400/20 to-blue-500/30",
      border: "border-cyan-400/30",
      text: "text-cyan-300",
    },
    {
      icon: Target,
      label: "Pre-Vetted Pool",
      value: "High-Caliber",
      sub: "Industry-aligned specialists",
      color: "from-sky-400/20 to-blue-600/30",
      border: "border-sky-400/30",
      text: "text-sky-300",
    },
    {
      icon: Zap,
      label: "Speed & Fit",
      value: "Rapid Delivery",
      sub: "Long-term team retention",
      color: "from-blue-400/20 to-indigo-500/30",
      border: "border-blue-400/30",
      text: "text-blue-300",
    },
  ];

  const heroPoints = [
    "Strategic Workforce Planning",
    "Deep Market Insights",
    "Advanced Sourcing Techniques",
    "Full Recruitment Lifecycle",
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* Dynamic Keyframes for Floating Badge Animation */}
      <style>{`
        @keyframes diagonalFloat {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, -8px);
          }
        }
        @keyframes diagonalFloatReverse {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-5px, 8px);
          }
        }
        .float-badge-1 {
          animation: diagonalFloat 4s ease-in-out infinite;
        }
        .float-badge-2 {
          animation: diagonalFloatReverse 5s ease-in-out infinite;
        }
      `}</style>

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER (DEEP ENTERPRISE BLUE)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white border-b border-blue-400/30 shadow-2xl">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute top-20 left-10 w-72 h-72 bg-[#0051fe]/30 rounded-full blur-3xl z-0" />

        {/* Cyber Matrix Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,black_40%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-[11px] font-bold uppercase tracking-widest mb-5 backdrop-blur-md shadow-sm select-none"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                <span>NEXORA TECHNOLOGY SERVICES PVT LTD</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.14] mb-5 font-heading"
              >
                Building High-Performing <br />
                <span className="text-cyan-200">Teams That Last</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal opacity-95 max-w-2xl mb-4"
              >
                At Nexora Technology Services, our Talent Acquisition function goes beyond traditional
                recruitment—we focus on building high-performing teams that drive long-term business success.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="text-xs sm:text-sm text-blue-200/90 leading-relaxed font-normal max-w-xl mb-8"
              >
                We understand that hiring the right talent is critical to organizational growth. Our
                approach combines strategic workforce planning, deep market insights, and advanced sourcing
                techniques to identify, attract, and onboard the best candidates for your business.
              </motion.p>

              {/* Highlights Chips */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="flex flex-wrap gap-2.5 sm:gap-3 mb-8"
              >
                {["Workforce Planning", "Technical Sourcing", "Executive Search", "Culture Fit"].map(
                  (chip) => (
                    <div
                      key={chip}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-white transition-all shadow-sm"
                    >
                      <Check className="w-4 h-4 text-cyan-300 shrink-0" />
                      <span>{chip}</span>
                    </div>
                  )
                )}
              </motion.div>

              {/* Hero CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28 }}
                className="flex flex-wrap items-center gap-3.5"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white text-[#0051fe] hover:bg-blue-50 shadow-md shadow-black/15 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Start Hiring Today
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  About Us
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Talent Operations HUD Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300" />
                    </span>
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                      From Entry-Level to Leadership
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/15 text-cyan-200 border border-white/20 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-300" />
                    Active Sourcing
                  </span>
                </div>

                {/* Stat Cards */}
                <div className="space-y-3 mb-5">
                  {heroStats.map((s, i) => {
                    const StatIcon = s.icon;
                    return (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-white/15"
                      >
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} border ${s.border} flex items-center justify-center shrink-0 ${s.text}`}
                        >
                          <StatIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-blue-200 text-[11px] uppercase tracking-wider">
                            {s.label}
                          </p>
                          <p className="font-heading text-white font-extrabold text-base sm:text-lg">
                            {s.value}
                          </p>
                        </div>
                        <span className="text-cyan-200 text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/15 text-right max-w-[130px] leading-tight">
                          {s.sub}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Core Pillars List */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5 mb-4">
                  {heroPoints.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center shrink-0 text-cyan-300">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <p className="text-blue-100 text-xs sm:text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>

                {/* HUD Footer Status */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100/80">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                    End-to-End Managed Process
                  </span>
                  <span className="font-mono text-cyan-300">Enterprise Standard</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: WHO WE ARE (CRISP WHITE)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Who We Are</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Recruitment That Goes <br />
                <span className="text-[#0051fe]">Beyond the Resume</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Our approach combines strategic workforce planning, deep market insights, and advanced sourcing
                techniques to identify, attract, and onboard the best candidates for your business.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                From entry-level roles to leadership hiring, we manage the entire recruitment lifecycle with
                precision and speed. We act as a strategic partner to help you build a workforce that is agile,
                skilled, and future-ready.
              </p>

              {/* Scope Chips */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {["Entry-Level Hiring", "Leadership Search", "Contract Staffing", "Executive Roles"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 border border-blue-100 text-[#0051fe]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-3.5 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-md shadow-[#0051fe]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Start Hiring Today
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  About Us
                  <ArrowUpRight className="w-4 h-4 text-[#0051fe]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Multi-Layered Image Presentation with Floating Badges */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              {/* Background Ambient Glow */}
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                {/* Main Large Image */}
                <div className="relative w-[84%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 transition-transform duration-500 hover:scale-[1.01]">
                  <Image
                    src={img1}
                    alt="Talent Acquisition"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Accent Floating Image Top-Right */}
                <div className="hidden sm:block absolute -top-4 -right-2 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img3}
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="Strategic hiring"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Floating Glassmorphism Badge 1 (Diagonal Float Animation Preserved) */}
                <div className="float-badge-1 absolute bottom-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">Full Lifecycle</p>
                    <p className="text-[11px] text-slate-500">End-to-End Managed</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 (Diagonal Float Animation Preserved) */}
                <div className="float-badge-2 hidden sm:flex absolute top-4 left-4 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3 shadow-xl border border-blue-400/30 z-30 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">Strategic Partner</p>
                    <p className="text-[10px] text-blue-200">Future-Ready Teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: OUR APPROACH (DISTINCT BLUE BACKGROUND SECTION)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image Stack Presentation with Floating Badges */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6 order-2 lg:order-1">
              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                {/* Main Large Image */}
                <div className="relative w-[84%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 transition-transform duration-500 hover:scale-[1.01]">
                  <Image
                    src={img2}
                    alt="Recruitment Approach"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Accent Floating Image Top-Right */}
                <div className="hidden sm:block absolute -top-4 -right-2 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img3}
                    alt="Candidate Evaluation"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img1}
                    alt="Onboarding Process"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Floating Glassmorphism Badge 1 (Diagonal Float Animation Preserved) */}
                <div className="float-badge-1 absolute bottom-6 left-2 sm:left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">Data-Driven</p>
                    <p className="text-[11px] text-slate-500">Recruitment Methodology</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 (Diagonal Float Animation Preserved) */}
                <div className="float-badge-2 hidden sm:flex absolute top-4 right-4 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3 shadow-xl border border-blue-400/30 z-30 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">Targeted Sourcing</p>
                    <p className="text-[10px] text-blue-200">High Retention Fit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Approach Steps */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Our Approach</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Structured &amp; <br />
                <span className="text-[#0051fe]">Data-Driven</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                We follow a proven, structured recruitment methodology that ensures quality, speed,
                and cultural alignment at every step.
              </p>

              <div className="space-y-3.5 pt-2">
                {approachSteps.map((step) => (
                  <div
                    key={step.n}
                    className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center gap-4 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Smooth and Slow Top Accent Bar (duration-700 ease-in-out) */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] font-heading font-extrabold text-sm shrink-0 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                      {step.n}
                    </div>

                    <p className="font-heading text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#0051fe] transition-colors leading-relaxed">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: WHAT WE OFFER (CRISP WHITE)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>What We Offer</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Comprehensive <span className="text-[#0051fe]">Hiring Solutions</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From technical roles to executive leadership, our service portfolio covers every hiring
              need your organization may have.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.title}
                  className="group bg-white rounded-2xl p-7 sm:p-8 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  {/* Smooth and Slow Top Accent Bar (duration-700 ease-in-out) */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div>
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-3 leading-snug">
                      {o.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {o.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: WHY CHOOSE US (DISTINCT BLUE BACKGROUND SECTION)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative & Intro */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Why Choose Us</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                A Strategic Partner <br />
                <span className="text-[#0051fe]">For Your Workforce</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                We act as a strategic partner to help you build a workforce that is agile, skilled,
                and future-ready. Here&apos;s what sets Nexora apart in talent acquisition.
              </p>

              {/* Quick Summary Highlights */}
              <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0051fe] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-semibold text-xs sm:text-sm text-slate-800">
                    Pre-vetted, high-retention talent pool
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0051fe] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-semibold text-xs sm:text-sm text-slate-800">
                    Tailored recruitment aligned with company culture
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0051fe] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-semibold text-xs sm:text-sm text-slate-800">
                    Transparent reporting at every milestone
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-md shadow-[#0051fe]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Start Hiring Today
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Right Column: 5 Why Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {whyItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`group bg-white rounded-2xl p-6 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 cursor-pointer ${
                        idx === whyItems.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      {/* Smooth and Slow Top Accent Bar (duration-700 ease-in-out) */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                      <div>
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-4 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>

                        <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: INSET-ROUNDED CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#eaf2fc]/60">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white shadow-[0_20px_60px_-15px_rgba(0,81,254,0.45)] border border-blue-400/30 text-center">
            {/* Ambient Background Aura Lights */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl z-0" />
            <div className="pointer-events-none absolute -bottom-24 right-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl z-0" />

            {/* Cyber Matrix Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold uppercase tracking-wider text-cyan-200 mb-5 backdrop-blur-md">
                <Users className="w-3.5 h-3.5 text-cyan-300" />
                <span>Talent Acquisition</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Let&apos;s Build Your <br />
                <span className="text-cyan-200">Future-Ready Workforce</span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Partner with Nexora to find the right talent — from entry-level professionals to
                senior leadership — with speed, precision, and a focus on long-term fit.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Hiring Now</span>
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Talk to an Expert</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GLOBAL SHARED FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

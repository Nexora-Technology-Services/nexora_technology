"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import img1 from "@/public/images/img-1.jpg";
import img2 from "@/public/images/img-2.jpg";
import img3 from "@/public/images/img-3.jpg";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Compass,
  Rocket,
  Zap,
  Sliders,
  ShieldCheck,
  GraduationCap,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
  TrendingUp,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Package Evaluation & Roadmap Creation",
    desc: "We identify and evaluate the right enterprise solutions aligned with your business goals. Our experts conduct detailed requirement analysis, gap assessments, and process evaluations — delivering a strategic roadmap with phases, timelines, resource planning, and risk mitigation.",
    tag: "Strategic Advisory",
    colSpan: "lg:col-span-3", // Row 1 (Card 1/2)
  },
  {
    icon: Rocket,
    title: "Implementation",
    desc: "End-to-end implementation services designed for seamless ERP deployment with minimal disruption. Our structured approach covers planning, configuration, data migration, testing, go-live support, and change management for faster adoption.",
    tag: "Deployment",
    colSpan: "lg:col-span-3", // Row 1 (Card 2/2)
  },
  {
    icon: Zap,
    title: "Upgrade",
    desc: "Stay current with the latest features, security standards, and performance enhancements. Our upgrade methodology ensures smooth migration, compatibility validation, data integrity, and minimal downtime while maximising existing technology investments.",
    tag: "Modernization",
    colSpan: "lg:col-span-2", // Row 2 (Card 1/3)
  },
  {
    icon: Sliders,
    title: "Customization",
    desc: "Every business has unique needs. We develop custom workflows, reports, dashboards, integrations, and modules that align with your specific processes — enabling greater efficiency, flexibility, and user productivity.",
    tag: "Tailored Architecture",
    colSpan: "lg:col-span-2", // Row 2 (Card 2/3)
  },
  {
    icon: ShieldCheck,
    title: "Application Support",
    desc: "Uninterrupted operations through proactive monitoring, issue resolution, system optimisation, and ongoing maintenance. We deliver reliable technical assistance, performance tuning, and troubleshooting to maximise system uptime and user satisfaction.",
    tag: "24/7 Operations",
    colSpan: "lg:col-span-2", // Row 2 (Card 3/3)
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Comprehensive user and administrator training programs to ensure smooth system adoption. Our approach includes hands-on workshops, process-oriented learning, documentation, and role-based knowledge transfer to empower your teams.",
    tag: "Enablement",
    colSpan: "lg:col-span-3", // Row 3 (Card 1/2)
  },
  {
    icon: Boxes,
    title: "Package Consolidation",
    desc: "Streamline and consolidate multiple software applications into a unified enterprise platform. We reduce operational complexity, eliminate redundant systems, improve data visibility, and enhance process integration for better control and cost optimisation.",
    tag: "System Unification",
    colSpan: "lg:col-span-3", // Row 3 (Card 2/2)
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Discover & Assess",
    desc: "Detailed requirement analysis and gap assessment to map the right solution directly to your organizational objectives.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Plan & Design",
    desc: "Architecting a strategic roadmap with transparent milestones, resource planning, and proactive risk mitigation.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Implement & Configure",
    desc: "Precision engineering, rigorous testing, automated data migration, and zero-downtime go-live support.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Support & Evolve",
    desc: "Continuous proactive monitoring, administrator training, and iterative enhancements to maximise ROI.",
    icon: TrendingUp,
  },
];

export default function Organization() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO BANNER — 3D CRYSTAL NTS BACKGROUND (UNCROPPED) & BALANCED FOREGROUND
      ═══════════════════════════════════════════ */}
      <section id="overview" className="relative w-full min-h-screen flex items-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
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
                About Nexora • Enterprise Overview
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
              Transforming Business <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">
                Through Next-Gen Enterprise Technology
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
              Your trusted strategic partner for enterprise ERP solutions - from
              roadmap evaluation and full-cycle implementation to continuous
              support, training, and ecosystem modernization.
            </motion.p>
            {/* <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6 font-bold"
            >
              Your trusted strategic partner for enterprise ERP solutions - from roadmap evaluation
              and full-cycle implementation to continuous support, training, and ecosystem modernization.
            </motion.p> */}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6"
            >
              <Link
                href="/contact"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_12px_28px_rgba(0,81,254,0.2)] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Enterprise Trust & Capability Metrics (Positioned Perfectly Inside Viewport) */}
            {/* <motion.div
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
                    SOC2 & ISO
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Enterprise QA
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-200/80 flex items-center justify-center text-[#0284c7] shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    ERP & Cloud
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Modern Arch
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-200/80 flex items-center justify-center text-cyan-700 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    24/7 Operations
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    Mission Support
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHO WE ARE (INTRO SPLIT)
      ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                Who We Are
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-6 leading-tight">
                Your End-to-End <br />
                <span className="text-[#0051fe]">
                  Enterprise Technology Partner
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
                Nexora Technology Services Pvt Ltd helps forward-thinking
                organisations identify and evaluate the right enterprise
                software architectures aligned with their long-term growth and
                operational goals.
              </p>

              <p className="text-slate-600 text-base leading-relaxed mb-8">
                From strategic roadmap design to seamless implementation, 24/7
                mission-critical support, and custom integrations — we combine
                deep technical acumen, agile methodologies, and proven delivery
                excellence.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  "ERP Architecture & Deployment",
                  "Custom Enterprise Engineering",
                  "Proactive Application Support",
                  "Role-Based Team Enablement",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-slate-800 text-xs sm:text-sm font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0051fe] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_8px_20px_-4px_rgba(0,81,254,0.4)] flex items-center gap-2 transition-all duration-200"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/organization/leaders"
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0051fe] border border-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-200"
                >
                  <span>About Our Leadership</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Image Composition */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative w-full flex justify-center items-center min-h-[360px] sm:min-h-[420px]"
            >
              {/* Decorative Concentric Dashed Rings */}
              <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border border-dashed border-blue-200/80 animate-[spin_60s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full border border-blue-100 pointer-events-none" />

              {/* Main Image */}
              <div className="relative w-[280px] sm:w-[360px] h-[220px] sm:h-[280px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,81,254,0.18)] border-4 border-white z-10">
                <Image
                  src={img1}
                  alt="Nexora Enterprise Services"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent Image Top-Right */}
              <div className="absolute top-0 right-2 sm:right-6 w-[140px] sm:w-[180px] h-[100px] sm:h-[130px] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,81,254,0.15)] border-4 border-white z-20">
                <Image
                  src={img3}
                  alt="Nexora Innovation Hub"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent Image Bottom-Left */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-6 w-[150px] sm:w-[190px] h-[110px] sm:h-[140px] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,81,254,0.15)] border-4 border-white z-20">
                <Image
                  src={img2}
                  alt="Nexora Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Quality Badge (Smoothly Animated) */}
              <motion.div
                animate={{
                  y: [0, -9, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,81,254,0.2)] border border-blue-200/90 flex items-center gap-3 z-30 select-none"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100/90 text-[#0051fe] flex items-center justify-center font-bold shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    ISO Certified
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Enterprise QA Standard
                  </p>
                </div>
              </motion.div>

              {/* Top-Left Floating Metric Badge (Smoothly Animated) */}
              <motion.div
                animate={{
                  y: [0, 9, 0],
                  rotate: [0, -1, 0, 1, 0],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="absolute top-2 left-2 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,81,254,0.2)] border border-blue-200/90 flex items-center gap-3 z-30 select-none"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center font-bold shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    100% Secure
                  </p>
                  <p className="text-[11px] text-[#0051fe] font-semibold">
                    SOC2 Compliant
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE SERVICES GRID (2-3-2 LAYOUT)
      ═══════════════════════════════════════════ */}
      <section
        id="services"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#f4f8fe] relative overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Our <span className="text-[#0051fe]">Core Services</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Comprehensive, high-impact enterprise technology solutions
              tailored to accelerate digital transformation, modernize
              workflows, and deliver measurable operational ROI.
            </p>
          </div>

          {/* 
            CORE SERVICES 2-3-2 GRID:
            - Row 1: 2 cards (lg:col-span-3, lg:col-span-3)
            - Row 2: 3 cards (lg:col-span-2, lg:col-span-2, lg:col-span-2)
            - Row 3: 2 cards (lg:col-span-3, lg:col-span-3)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.22)"
                  borderColor="rgba(0, 81, 254, 0.45)"
                  className={`flex flex-col justify-between min-h-[300px] group cursor-pointer bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/80 shadow-[0_10px_30px_-5px_rgba(0,81,254,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(0,81,254,0.18)] ${item.colSpan} ${
                    idx === 6 ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(0,81,254,0.4)] group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="relative overflow-hidden px-3.5 py-1 rounded-full bg-blue-100 text-[11px] font-bold text-[#0051fe] border border-blue-200/90 transition-colors duration-500 ease-out group-hover:border-[#0051fe] group-hover:shadow-[0_4px_16px_rgba(0,81,254,0.35)]">
                        {/* Left-to-Right Animated Fill Layer */}
                        <span className="absolute inset-0 bg-[#0051fe] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
                        <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-white">
                          {item.tag}
                        </span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#0051fe] transition-colors duration-400 font-heading">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#0051fe] transition-colors">
                    <span>Enterprise Capability</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STRATEGIC DELIVERY & APPROACH SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Interactive Step Cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                Our Approach
              </div>

              <h2 className="text-[1.35rem] min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.5rem] font-extrabold text-slate-900 tracking-tight font-heading mb-6 leading-tight">
                <span className="block whitespace-nowrap">
                  Structured, Strategic &
                </span>
                <span className="block text-[#0051fe] whitespace-nowrap">
                  Results Driven Execution
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Our battle-tested engagement model ensures transparent
                milestones, complete governance, and zero disruption to your
                daily operations.
              </p>

              <div className="flex flex-col gap-4">
                {approachSteps.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="group p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-200 transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-md"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-[0_4px_12px_rgba(0,81,254,0.3)] group-hover:scale-105 transition-transform">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0051fe] transition-colors font-heading">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Approach Visuals */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative w-full flex justify-center items-center min-h-[340px] sm:min-h-[400px]"
            >
              {/* Concentric rings */}
              <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-dashed border-blue-200 pointer-events-none" />

              {/* Main Image */}
              <div className="relative w-[280px] sm:w-[350px] h-[220px] sm:h-[270px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,81,254,0.18)] border-4 border-white z-10">
                <Image
                  src={img2}
                  alt="Nexora Roadmap Planning"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent Image Top-Right */}
              <div className="absolute top-0 right-2 sm:right-6 w-[140px] sm:w-[170px] h-[100px] sm:h-[125px] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,81,254,0.15)] border-4 border-white z-20">
                <Image
                  src={img1}
                  alt="Nexora System Execution"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Accent Image Bottom-Left */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-6 w-[140px] sm:w-[170px] h-[100px] sm:h-[125px] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,81,254,0.15)] border-4 border-white z-20">
                <Image
                  src={img3}
                  alt="Nexora Client Delivery"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Agile Pill Badge (Smoothly Animated) */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -1, 0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 left-2 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,81,254,0.2)] border border-blue-200/90 flex items-center gap-3 z-30 select-none"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center font-bold shadow-sm">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Agile Delivery
                  </p>
                  <p className="text-[11px] text-[#0051fe] font-semibold">
                    Faster Time-to-Market
                  </p>
                </div>
              </motion.div>

              {/* Bottom-Right Floating Speed Metric (Smoothly Animated) */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute bottom-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,81,254,0.2)] border border-blue-200/90 flex items-center gap-3 z-30 select-none"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#0284c7] text-white flex items-center justify-center font-bold shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Zero Downtime
                  </p>
                  <p className="text-[11px] text-[#0051fe] font-semibold">
                    Seamless Migration
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER (With Outward Curved Integration & Footer Fill)
      ═══════════════════════════════════════════ */}
      <div className="relative w-full bg-[#f8fafc]">
        <section className="relative pt-20 md:pt-24 pb-28 md:pb-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#06112a] via-[#0036a7] to-[#0051fe] text-white overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4.5rem]">
          {/* Glow Spheres */}
          <div className="pointer-events-none absolute -top-20 left-1/4 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-[#0051fe]/35 rounded-full blur-3xl" />

          {/* Cyber matrix grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                Ready to Accelerate Growth?
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-6">
                Let&apos;s Build Your Enterprise{" "}
                <br className="hidden sm:inline" />
                <span className="text-cyan-200">
                  Transformation Journey Together
                </span>
              </h2>

              <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 opacity-90 font-normal">
                Partner with Nexora to unlock the full potential of your
                technology architecture. From evaluation to scalable execution,
                we are with you every step of the way.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_10px_25px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_34px_-4px_rgba(0,0,0,0.4)] flex items-center gap-2 transition-all duration-200 cursor-pointer group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md transition-all duration-200 cursor-pointer"
                >
                  <span>Explore About Us</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seamless Footer Integration with Outward Curved Overlap */}
        <div className="-mt-14 sm:-mt-16 md:-mt-20 relative z-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

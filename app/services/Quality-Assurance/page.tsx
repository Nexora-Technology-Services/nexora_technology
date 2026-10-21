"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/app/Photo/hero-section.png";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";
import {
  ShieldCheck,
  CheckCircle2,
  Bot,
  RefreshCw,
  ClipboardCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  // Activity,
  // Target,
  Layers,
} from "lucide-react";

const keyPractices = [
  {
    icon: CheckCircle2,
    title: "Comprehensive Testing",
    desc: "We conduct multiple levels of testing, including functional, performance, security, and usability testing, to ensure that every aspect of the product meets expectations.",
  },
  {
    icon: Bot,
    title: "Automation & Tools",
    desc: "By leveraging modern automation tools, we enhance efficiency, accuracy, and speed in our testing processes.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "We regularly review and refine our QA methodologies to adapt to evolving technologies and industry best practices.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Standards",
    desc: "Our processes align with recognized industry standards, ensuring that our deliverables meet regulatory and quality benchmarks.",
  },
];

{
  /* const telemetryStats = [
  {
    icon: ShieldCheck,
    label: "Reliability",
    value: "Built-In",
    sub: "From day one, not afterthought",
    color: "from-cyan-400/20 to-blue-500/30",
    border: "border-cyan-400/30",
    text: "text-cyan-300",
  },
  {
    icon: Target,
    label: "Customer Satisfaction",
    value: "First Priority",
    sub: "Feedback-driven quality",
    color: "from-emerald-400/20 to-teal-500/30",
    border: "border-emerald-400/30",
    text: "text-emerald-300",
  },
  {
    icon: ClipboardCheck,
    label: "Industry Standards",
    value: "Compliant",
    sub: "Regulatory benchmarks met",
    color: "from-sky-400/20 to-indigo-500/30",
    border: "border-sky-400/30",
    text: "text-sky-300",
  },
]; */
}

const commitments = [
  {
    num: "01",
    title: "Customer-Centric Focus",
    desc: "Quality for us is defined by customer satisfaction. We actively gather feedback, analyse user behaviour, and implement improvements to deliver products that truly meet user needs.",
  },
  {
    num: "02",
    title: "Our Commitment",
    desc: "We are dedicated to delivering solutions that are not only functional but also reliable, secure, and scalable. Through rigorous quality assurance practices, we strive to exceed expectations and build long-term trust with our clients.",
  },
];

export default function QualityAssurance() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER (DEEP ENTERPRISE BLUE)
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
          <div className="max-w-xl lg:max-w-2xl text-left flex flex-col items-start">
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
                Nexora Technology Services Pvt Ltd
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
              Quality <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">Assurance</span>
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
              Quality Assurance is more than just a process - it is a commitment
              to delivering excellence at every stage. We believe quality is
              built into a product from the very beginning, not just tested at
              the end.
            </motion.p>

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
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: OUR APPROACH & IMAGE SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Our Approach</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Structured, Proactive <br />
                <span className="text-[#0051fe]">Quality Assurance</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                We follow a structured and proactive approach to quality
                assurance, integrating it throughout the entire development
                lifecycle. From initial planning and design to development,
                testing, and deployment, our QA team works closely with all
                stakeholders to identify potential issues early and ensure
                consistent standards.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Our QA practices are designed to ensure reliability,
                performance, and customer satisfaction at every stage of our
                work.
              </p>

              <div className="flex flex-wrap gap-3.5 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-md shadow-[#0051fe]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Talk to Our QA Team
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  href="/components/Organization"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  About Us
                  <ArrowUpRight className="w-4 h-4 text-[#0051fe]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Multi-Layered Image Presentation */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              {/* Background Ambient Glow */}
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                {/* Main Large Image */}
                <div className="relative w-[84%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 transition-transform duration-500 hover:scale-[1.01]">
                  <Image
                    src={img1}
                    alt="Quality Assurance"
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
                    alt="QA standards"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="QA testing"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Floating Glassmorphism Badge 1 */}
                <div className="absolute bottom-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">
                      Zero Defect Goal
                    </p>
                    <p className="text-[11px] text-slate-500">Every Delivery</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="hidden sm:flex absolute top-4 left-4 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3 shadow-xl border border-blue-400/30 z-30 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">
                      End-to-End QA
                    </p>
                    <p className="text-[10px] text-blue-200">Full Lifecycle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: KEY PRACTICES (BLUE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Key Practices</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              How We Ensure <span className="text-[#0051fe]">Quality</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our QA framework is built on four core practices that together
              ensure every product we deliver meets the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {keyPractices.map((p) => {
              const PracticeIcon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group bg-white rounded-2xl p-7 sm:p-8 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  {/* Smooth and Slow Top Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div>
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                      <PracticeIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-3 leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: OUR FOCUS & COMMITMENT + SECOND IMAGE SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Content Blocks */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Our Focus &amp; Commitment</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Quality Defined by <br />
                <span className="text-[#0051fe]">Customer Success</span>
              </h2>

              <div className="space-y-4 pt-2">
                {commitments.map((item) => (
                  <div
                    key={item.num}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex items-start gap-5 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Smooth and Slow Top Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                    <div className="font-heading text-3xl sm:text-4xl font-black text-[#0051fe] shrink-0 leading-none pt-1">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Multi-Layered Image Showcase */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              {/* Background Ambient Glow */}
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                {/* Main Large Image */}
                <div className="relative w-[84%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 transition-transform duration-500 hover:scale-[1.01]">
                  <Image
                    src={img3}
                    alt="Customer satisfaction"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Accent Floating Image Top-Right */}
                <div className="hidden sm:block absolute -top-4 -right-2 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="QA commitment"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img1}
                    alt="Reliable solutions"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Floating Glassmorphism Badge 1 */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">
                      Long-Term Trust
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Built with Clients
                    </p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="absolute bottom-6 right-2 sm:right-6 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3.5 shadow-xl border border-blue-400/30 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">
                      Exceed Expectations
                    </p>
                    <p className="text-[11px] text-blue-200">Every Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: INSET-ROUNDED CTA BANNER
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
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Quality You Can Trust</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Let&apos;s Build Something <br />
                <span className="text-cyan-200">Reliable &amp; Scalable</span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Partner with Nexora for rigorous quality assurance that ensures
                every solution we deliver is functional, secure, scalable, and
                built to exceed your expectations.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <Link
                  href="/components/Organization"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>About Us</span>
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

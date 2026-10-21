"use client";
import { useState } from "react";
import Image from "next/image";
import heroBg from "@/app/Photo/hero-section.png";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";
import {
  Boxes,
  Workflow,
  BarChart3,
  Network,
  Smartphone,
  LayoutTemplate,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "Custom ERP Modules",
    desc: "Purpose-built modules that extend your existing ERP system to handle unique business functions not covered by standard functionality.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Design and implement role-based workflows that streamline approvals, notifications, and business process routing across departments.",
  },
  {
    icon: BarChart3,
    title: "Custom Dashboards & Reports",
    desc: "Tailored dashboards and analytical reports that surface the KPIs and business data your teams need for confident decision-making.",
  },
  {
    icon: Network,
    title: "Third-Party Integrations",
    desc: "Seamless integrations between your ERP and external platforms — CRM, e-commerce, payment gateways, logistics, and more.",
  },
  {
    icon: Smartphone,
    title: "Mobile Accessibility",
    desc: "Mobile-ready ERP extensions that give your field teams and managers access to critical data and actions from any device.",
  },
  {
    icon: LayoutTemplate,
    title: "User-Friendly Interfaces",
    desc: "Redesigned and simplified UI layers that improve adoption rates, reduce training time, and enhance day-to-day user productivity.",
  },
];

const approach = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "Deep-dive into your current ERP setup and business processes to identify gaps and custom development opportunities.",
  },
  {
    num: "02",
    title: "Solution Design",
    desc: "Architect scalable, secure custom solutions with clear technical specifications and an agreed delivery roadmap.",
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "Agile development with thorough unit, integration, and UAT testing at every milestone to ensure quality delivery.",
  },
  {
    num: "04",
    title: "Deployment & Support",
    desc: "Smooth go-live with zero-disruption deployment and ongoing post-launch support for enhancements and maintenance.",
  },
];

export default function CustomDevelopment() {
  const [h1Hovered, setH1Hovered] = useState(false);
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — ERP CUSTOM DEVELOPMENT
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
                NEXORA TECHNOLOGY SERVICES PVT LTD
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
              Custom ERP <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">Development</span>
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
              We develop customized ERP modules, workflows, dashboards, and
              integrations that improve efficiency, automate business
              operations, and enhance decision-making tailored precisely to your
              unique business processes.
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
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: WHAT WE DO & IMAGE SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>What We Do</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                ERP Solutions Built <br />
                <span className="text-[#0051fe]">Around Your Business</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At Nexora Technology Services Pvt Ltd, we provide ERP Custom
                Development services designed to align enterprise systems with
                unique business processes and operational requirements.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We help organizations extend and optimize their ERP systems
                through tailored solutions — ensuring scalable, secure, and
                future-ready ERP solutions that support business growth and
                digital transformation.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  "Custom Modules",
                  "Workflow Automation",
                  "Dashboards",
                  "Integrations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50/80 border border-blue-100 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs hover:border-blue-300 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-[#0051fe] stroke-[2.5]" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-md shadow-[#0051fe]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Get in Touch
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

            {/* Right Multi-Layered Image Presentation */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              {/* Background Ambient Glow */}
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                {/* Main Large Image */}
                <div className="relative w-[84%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 transition-transform duration-500 hover:scale-[1.01]">
                  <Image
                    src={img1}
                    alt="ERP Custom Development"
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
                    alt="ERP integration"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="ERP modules"
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
                      Scalable Solutions
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Built for Growth
                    </p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="hidden sm:flex absolute top-4 left-4 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3 shadow-xl border border-blue-400/30 z-30 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">
                      200+ Modules
                    </p>
                    <p className="text-[10px] text-blue-200">
                      Delivered Globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: SERVICES GRID (WHAT WE BUILD)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] relative border-y border-blue-200/60 overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Our Services</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              What We Build for <span className="text-[#0051fe]">You</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From custom modules to mobile-ready interfaces — every solution we
              develop is designed around your processes, your people, and your
              growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc) => {
              const IconComponent = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="group bg-white rounded-2xl p-7 sm:p-8 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1"
                >
                  {/* Subtle Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-3 leading-snug">
                      {svc.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: APPROACH + SECOND IMAGE STACK
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Process Steps */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Our Approach</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                How We Deliver <br />
                <span className="text-[#0051fe]">Custom ERP Solutions</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {approach.map((a) => (
                  <div
                    key={a.num}
                    className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/70 hover:border-blue-400/50 hover:bg-white hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-heading text-3xl sm:text-4xl font-black text-[#0051fe]/25 group-hover:text-[#0051fe] transition-colors mb-2.5">
                        {a.num}
                      </div>
                      <h4 className="font-heading text-base font-bold text-slate-900 mb-2">
                        {a.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Multi-Layered Image Presentation */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              {/* Background Ambient Glow */}
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                {/* Main Large Image */}
                <div className="relative w-[84%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 transition-transform duration-500 hover:scale-[1.01]">
                  <Image
                    src={img3}
                    alt="ERP development process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Accent Floating Image Top-Right */}
                <div className="hidden sm:block absolute -top-4 -right-2 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img1}
                    alt="ERP deployment"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="ERP testing"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Floating Glassmorphism Badge 1 */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">
                      Zero Disruption
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Go-Live Guaranteed
                    </p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="absolute bottom-6 right-2 sm:right-6 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3.5 shadow-xl border border-blue-400/30 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">
                      Future-Ready
                    </p>
                    <p className="text-[11px] text-blue-200">
                      Secure & Scalable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: CALL TO ACTION (CTA) BANNER
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
                Ready to Build?
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-4">
                Let&apos;s Customize Your <br />
                <span className="text-[#67e8f9] drop-shadow-sm">
                  ERP for Maximum Impact
                </span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                Partner with Nexora to build ERP solutions that fit exactly how
                your business operates — scalable, secure, and designed for
                long-term success.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/components/Organization"
                  className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>About Us</span>
                  <ArrowUpRight className="w-4 h-4" />
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

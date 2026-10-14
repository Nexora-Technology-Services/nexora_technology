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
  Boxes,
  Workflow,
  Cloud,
  Sparkles,
  Cpu,
  BarChart3,
  Compass,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  Users,
  Zap,
  Globe,
  Search,
  Wrench,
  Check,
  Activity,
  Briefcase,
  TrendingDown,
} from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "ERP Advisory",
    desc: "Expert guidance on selecting, evaluating, and implementing the right ERP platform aligned with your business size, industry, and long-term growth objectives.",
  },
  {
    icon: Workflow,
    title: "Business Process Optimization",
    desc: "We analyse your current workflows, identify inefficiencies, and redesign processes to improve productivity, reduce costs, and enhance overall operational performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    desc: "Strategic advisory and hands-on support for migrating your infrastructure, applications, and workloads to scalable and secure cloud environments.",
  },
  {
    icon: Sparkles,
    title: "Digital Modernization",
    desc: "Helping businesses move from legacy systems to modern, agile digital platforms that improve user experience, flexibility, and competitive advantage.",
  },
  {
    icon: Cpu,
    title: "Automation Strategy",
    desc: "Designing intelligent automation frameworks — from robotic process automation to AI-driven workflows — that eliminate repetitive tasks and free your teams for strategic work.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Transform raw data into actionable business intelligence through advanced analytics, reporting dashboards, and data governance strategies that support confident decision-making.",
  },
  {
    icon: Compass,
    title: "Technology Roadmap Planning",
    desc: "We build comprehensive technology roadmaps that align IT investments with business goals, define implementation phases, and prioritise initiatives for maximum ROI.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Discover & Diagnose",
    desc: "Deep-dive into your business challenges, goals, and existing systems to form a clear picture of where you are and where you need to be.",
  },
  {
    num: "02",
    title: "Strategize & Design",
    desc: "Develop a tailored technology and process strategy with clear milestones, risk considerations, and measurable success metrics.",
  },
  {
    num: "03",
    title: "Implement & Execute",
    desc: "Our consultants stay engaged through implementation — ensuring the strategy translates into real, working outcomes without disruption.",
  },
  {
    num: "04",
    title: "Optimize & Evolve",
    desc: "Post-delivery, we partner with you on continuous improvement cycles so your systems and processes evolve as your business grows.",
  },
];

const whyItems = [
  {
    icon: Target,
    title: "Business-First Approach",
    desc: "We start with your goals, not technology. Every recommendation is grounded in what drives real business value.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    desc: "We work alongside your teams — sharing knowledge, building capability, and ensuring genuine long-term success.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    desc: "Outcomes are tied to KPIs. We track progress, report transparently, and adjust strategies based on real data.",
  },
  {
    icon: ShieldCheck,
    title: "Industry Best Practices",
    desc: "Our consultants bring cross-industry expertise and frameworks refined across hundreds of engagements.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    desc: "We design for where you are today and where you are going — ensuring solutions scale with your growth.",
  },
  {
    icon: Globe,
    title: "End-to-End Support",
    desc: "From initial advisory through implementation and beyond — a single trusted partner for your entire journey.",
  },
];

const continuousItems = [
  {
    icon: Search,
    title: "Deep Business Analysis",
    desc: "We invest time to truly understand your operations before making a single recommendation.",
  },
  {
    icon: Wrench,
    title: "Implementation Support",
    desc: "Our consultants stay hands-on through execution — bridging strategy and delivery.",
  },
  {
    icon: BarChart3,
    title: "Outcome Measurement",
    desc: "Every engagement is tied to clear KPIs so you can see the value we deliver.",
  },
];

export default function Consulting() {
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
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
                Strategic Technology <br />
                <span className="text-[#67e8f9] drop-shadow-sm">
                  Consulting Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal opacity-95 max-w-2xl mb-8"
              >
                We partner with organizations to understand their business challenges, analyze operational
                processes, and deliver customized IT and digital transformation strategies that drive
                measurable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="flex flex-wrap items-center gap-3.5"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white text-[#0051fe] hover:bg-blue-50 shadow-md shadow-black/15 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Talk to a Consultant
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Free Strategy Call
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Advisory Operations Telemetry HUD */}
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
                      Strategic Advisory Center
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/15 text-cyan-200 border border-white/20 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-300" />
                    Advisory Active
                  </span>
                </div>

                {/* Key Metrics Cards */}
                <div className="space-y-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-white/15">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/30 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-200 text-[11px] uppercase tracking-wider">Engagements Delivered</p>
                      <p className="font-heading text-white font-extrabold text-xl">500+</p>
                    </div>
                    <span className="text-cyan-200 text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/15">
                      Across 20+ Countries
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-white/15">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/30 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-300">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-200 text-[11px] uppercase tracking-wider">Average Cost Reduction</p>
                      <p className="font-heading text-white font-extrabold text-xl">30–40%</p>
                    </div>
                    <span className="text-emerald-200 text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/15">
                      Post-Optimization
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-white/15">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400/20 to-indigo-500/30 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-300">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-200 text-[11px] uppercase tracking-wider">Faster Time-to-Market</p>
                      <p className="font-heading text-white font-extrabold text-xl">3×</p>
                    </div>
                    <span className="text-sky-200 text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/15">
                      With Our Roadmaps
                    </span>
                  </div>
                </div>

                {/* HUD Footer Status */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100/80">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                    KPI-Driven Architecture
                  </span>
                  <span className="font-mono text-cyan-300">Enterprise Standard</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: ABOUT CONSULTING / PHILOSOPHY
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text & Values */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Our Consulting Philosophy</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                More Than Recommendations<br />
                <span className="text-[#0051fe]">
                  We Deliver Solutions
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At Nexora, consulting is not just about presenting a report and walking away. We are with
                you from diagnosis through delivery, embedding alongside your teams, driving implementation,
                and measuring real business outcomes.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                With a strong understanding of industry best practices and emerging technologies, we help
                businesses improve efficiency, reduce operational costs, and accelerate innovation through
                scalable and future-ready solutions aligned with their goals.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["ERP Advisory", "Process Optimization", "Cloud Strategy", "Digital Modernization"].map((tag) => (
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
                  Start a Conversation
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
                    alt="Nexora strategic consulting"
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
                    alt="Business analysis"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="Strategy session"
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
                    <p className="font-heading font-bold text-xs text-slate-900">ISO Certified</p>
                    <p className="text-[11px] text-slate-500">Quality Assured</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="hidden sm:flex absolute top-4 left-4 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3 shadow-xl border border-blue-400/30 z-30 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">500+ Engagements</p>
                    <p className="text-[10px] text-blue-200">Delivered Globally</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: CONSULTING AREAS GRID (BLUE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Our Consulting Areas</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              What We {" "}<span className="text-[#0051fe]">Consult On</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From strategy to execution — our consulting services span every dimension of technology
              transformation to help you compete and grow.
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
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

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
          SECTION 4: OUR APPROACH (4-STEP METHODOLOGY)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4">
              <Workflow className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Our Approach</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              How We {" "}<span className="text-[#0051fe]">Work With You</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A proven four-phase consulting methodology that ensures clarity, accountability, and
              measurable outcomes at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Subtle Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                <div>
                  <div className="font-heading text-3xl sm:text-4xl font-black text-[#0051fe]/25 group-hover:text-[#0051fe] transition-colors mb-3">
                    {p.num}
                  </div>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-2.5">
                    {p.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: WHY CHOOSE US (BLUE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Why Choose Us</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Why Nexora <span className="text-[#0051fe]">Consulting</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine deep technical expertise with genuine business acumen to deliver consulting
              that creates lasting, meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyItems.map((w) => {
              const WhyIcon = w.icon;
              return (
                <div
                  key={w.title}
                  className="group bg-white rounded-2xl p-7 sm:p-8 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 relative overflow-hidden flex flex-col hover:-translate-y-1"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 text-[#0051fe] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                    <WhyIcon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0051fe] transition-colors">
                    {w.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-auto">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: CONTINUOUS IMPROVEMENT & SECOND IMAGE STACK
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Methodology Points */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Continuous Improvement</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                <span className="whitespace-nowrap">Scalable, Future-Ready</span> <br />
                <span className="text-[#0051fe]">
                  Solutions That Evolve
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our team works closely with clients to provide expert guidance, seamless implementation
                support, and continuous improvement strategies that enable long-term business success.
                We don&apos;t just hand over a report — we stay engaged until you achieve measurable results.
              </p>

              <div className="space-y-4 pt-2">
                {continuousItems.map(({ icon: ItemIcon, title, desc }) => (
                  <div
                    key={title}
                    className="p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/70 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] shrink-0 mt-0.5">
                      <ItemIcon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {desc}
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
                    src={img2}
                    alt="Nexora consulting team"
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
                    alt="Strategy planning"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img1}
                    alt="Digital transformation"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Floating Glassmorphism Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">Expert Guidance</p>
                    <p className="text-[11px] text-slate-500">From Day One</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="absolute bottom-6 right-2 sm:right-6 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3.5 shadow-xl border border-blue-400/30 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">Measurable Impact</p>
                    <p className="text-[11px] text-blue-200">KPI Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: INSET-ROUNDED CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
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
                <span>Ready to Transform?</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Let&apos;s Build Your Digital <br />
                <span className="text-[#67e8f9] drop-shadow-sm">Transformation Strategy</span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Partner with Nexora consultants to unlock new efficiency, reduce costs, and accelerate
                growth. From first conversation to final delivery — we are with you every step.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <Link
                  href="/about"
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

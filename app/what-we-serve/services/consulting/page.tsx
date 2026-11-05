"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import Footer from "@/components/layout/footer";
// import img1 from "@/public/images/img-1.jpg";
// import img2 from "@/public/images/img-2.jpg";
// import img3 from "@/public/images/img-3.jpg";
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
  // ShieldCheck,
  // CheckCircle2,
  // TrendingUp,
  // Target,
  // Users,
  // Zap,
  // Globe,
  // Search,
  // Wrench,
  // Check,
  // Briefcase,
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

// const whyItems = [
//   {
//     icon: Target,
//     title: "Business-First Approach",
//     desc: "We start with your goals, not technology. Every recommendation is grounded in what drives real business value.",
//   },
//   {
//     icon: Users,
//     title: "Collaborative Partnership",
//     desc: "We work alongside your teams — sharing knowledge, building capability, and ensuring genuine long-term success.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Measurable Results",
//     desc: "Outcomes are tied to KPIs. We track progress, report transparently, and adjust strategies based on real data.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Industry Best Practices",
//     desc: "Our consultants bring cross-industry expertise and frameworks refined across hundreds of engagements.",
//   },
//   {
//     icon: Zap,
//     title: "Scalable Solutions",
//     desc: "We design for where you are today and where you are going — ensuring solutions scale with your growth.",
//   },
//   {
//     icon: Globe,
//     title: "End-to-End Support",
//     desc: "From initial advisory through implementation and beyond — a single trusted partner for your entire journey.",
//   },
// ];

// const continuousItems = [
//   {
//     icon: Search,
//     title: "Deep Business Analysis",
//     desc: "We invest time to truly understand your operations before making a single recommendation.",
//   },
//   {
//     icon: Wrench,
//     title: "Implementation Support",
//     desc: "Our consultants stay hands-on through execution — bridging strategy and delivery.",
//   },
//   {
//     icon: BarChart3,
//     title: "Outcome Measurement",
//     desc: "Every engagement is tied to clear KPIs so you can see the value we deliver.",
//   },
// ];

export default function Consulting() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
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
              Strategic Technology <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">Consulting Services</span>
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
              We partner with organizations to understand their business
              challenges, analyze operational processes, and deliver customized
              IT and digital transformation strategies that drive measurable
              results.
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
                <span>Talk to a Consultant</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: ABOUT CONSULTING / PHILOSOPHY
      ═══════════════════════════════════════════ */}
      {/* <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Our Consulting Philosophy</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                More Than Recommendations
                <br />
                <span className="text-[#0051fe]">We Deliver Solutions</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At Nexora, consulting is not just about presenting a report and
                walking away. We are with you from diagnosis through delivery,
                embedding alongside your teams, driving implementation, and
                measuring real business outcomes.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                With a strong understanding of industry best practices and
                emerging technologies, we help businesses improve efficiency,
                reduce operational costs, and accelerate innovation through
                scalable and future-ready solutions aligned with their goals.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  "ERP Advisory",
                  "Process Optimization",
                  "Cloud Strategy",
                  "Digital Modernization",
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
                  Start a Conversation
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

            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
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

                <div className="hidden sm:block absolute -top-4 -right-2 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img3}
                    alt="Business analysis"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="Strategy session"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                <div className="absolute bottom-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">
                      ISO Certified
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Quality Assured
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex absolute top-4 left-4 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3 shadow-xl border border-blue-400/30 z-30 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">
                      500+ Engagements
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
      </section> */}

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
              What We <span className="text-[#0051fe]">Consult On</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From strategy to execution — our consulting services span every
              dimension of technology transformation to help you compete and
              grow.
            </p>
          </div>

          {/* Consulting Areas Dynamic Grid: Arranged 2 - 3 - 2 on Desktop */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {services.map((svc, idx) => {
              const IconComponent = svc.icon;
              // Row 1 (idx 0, 1): 2 cards -> lg:w-[calc(50%-16px)] xl:w-[calc(42%-16px)] (or balanced 2-column width)
              // Row 2 (idx 2, 3, 4): 3 cards -> lg:w-[calc(33.333%-22px)]
              // Row 3 (idx 5, 6): 2 cards -> lg:w-[calc(50%-16px)] xl:w-[calc(42%-16px)]
              const isTwoCardRow = idx === 0 || idx === 1 || idx === 5 || idx === 6;

              return (
                <div
                  key={svc.title}
                  className={`w-full md:w-[calc(50%-16px)] ${
                    isTwoCardRow
                      ? "lg:w-[calc(50%-16px)] max-w-xl"
                      : "lg:w-[calc(33.333%-22px)] max-w-lg"
                  } group bg-white rounded-2xl p-7 sm:p-8 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:-translate-y-1`}
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
              How We <span className="text-[#0051fe]">Work With You</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A proven four-phase consulting methodology that ensures clarity,
              accountability, and measurable outcomes at every stage.
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
      {/* <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
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
              We combine deep technical expertise with genuine business acumen
              to deliver consulting that creates lasting, meaningful impact.
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
      </section> */}

      {/* ═══════════════════════════════════════════
          SECTION 6: CONTINUOUS IMPROVEMENT & SECOND IMAGE STACK
      ═══════════════════════════════════════════ */}
      {/* <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Continuous Improvement</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                <span className="whitespace-nowrap">
                  Scalable, Future-Ready
                </span>{" "}
                <br />
                <span className="text-[#0051fe]">Solutions That Evolve</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our team works closely with clients to provide expert guidance,
                seamless implementation support, and continuous improvement
                strategies that enable long-term business success. We don&apos;t
                just hand over a report — we stay engaged until you achieve
                measurable results.
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

            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
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

                <div className="hidden sm:block absolute -top-4 -right-2 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img3}
                    alt="Strategy planning"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img1}
                    alt="Digital transformation"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">
                      Expert Guidance
                    </p>
                    <p className="text-[11px] text-slate-500">From Day One</p>
                  </div>
                </div>

                <div className="absolute bottom-6 right-2 sm:right-6 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3.5 shadow-xl border border-blue-400/30 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">
                      Measurable Impact
                    </p>
                    <p className="text-[11px] text-blue-200">KPI Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                <span className="text-[#67e8f9] drop-shadow-sm">
                  Transformation Strategy
                </span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Partner with Nexora consultants to unlock new efficiency, reduce
                costs, and accelerate growth. From first conversation to final
                delivery — we are with you every step.
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

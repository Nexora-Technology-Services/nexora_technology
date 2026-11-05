"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/public/images/hero-section.png";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Globe2,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Users,
  HeartHandshake,
  Award,
  BookOpen,
  Laptop,
  HeartPulse,
  Rocket,
  Compass,
  CheckCircle2,
  Layers,
  Cloud,
  ChevronRight,
  Briefcase,
  TrendingUp,
  Flame,
  Check,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   DATA DEFINITIONS CONSOLIDATED FROM ALL 4 PILLARS
══════════════════════════════════════════════════════════════ */

// 1. Why Nexora: Strategic Differentiators & Client Impact
const whyNexoraHighlights = [
  {
    icon: Zap,
    title: "High-Velocity Execution",
    badge: "Agile Teams",
    desc: "Two-week predictable sprint cycles, zero bureaucracy, and continuous stakeholder previews ensuring immediate time-to-value.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Debt Engineering",
    badge: "High Assurance",
    desc: "Rigorous automated test suites, clean modular architectures, and cloud-native resilience.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Impact",
    badge: "Measurable ROI",
    desc: "Every sprint goal and technology choice ties directly to top-line growth, workflow efficiency, and scalable user adoption.",
  },
  {
    icon: Globe2,
    title: "Global Collaborative Teams",
    badge: "Follow-The-Sun",
    desc: "Dedicated senior engineering squads synced to your timezone, acting as a seamless extension of your in-house teams.",
  },
];


// 2. Our Values: Guiding Principles
const ourValues = [
  {
    icon: Users,
    title: "Customer Success Obsession",
    badge: "Partnership First",
    desc: "We measure our success exclusively through our clients' tangible market growth and technological leverage.",
    color: "from-blue-600 to-sky-500",
  },
  {
    icon: Sparkles,
    title: "Relentless Innovation",
    badge: "Cutting-Edge",
    desc: "Embracing transformative AI pipelines, cloud modernization, and forward-thinking paradigms to solve hard problems.",
    color: "from-indigo-600 to-blue-500",
  },
  {
    icon: HeartHandshake,
    title: "Compassion, Dignity & Empathy",
    badge: "People-Centric",
    desc: "Nurturing diverse talent, psychological safety, and respectful collaboration in every team interaction.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    badge: "Radical Transparency",
    desc: "Open code governance, honest roadmaps, strict compliance, and dependable operational security.",
    color: "from-sky-600 to-blue-600",
  },
  {
    icon: Award,
    title: "Craftsmanship & Excellence",
    badge: "Benchmark Standards",
    desc: "Pairing collective engineering intellect with fine craft to deliver software that sets the gold enterprise standard.",
    color: "from-blue-600 to-indigo-600",
  },
];

// 3. Our Services: Flagship Offerings
const services = [
  {
    icon: Cloud,
    title: "Cloud & DevOps Architecture",
    category: "Infrastructure",
    desc: "Resilient multi-cloud orchestration (AWS, Azure, GCP), microservices, zero-downtime CI/CD pipelines, and FinOps optimization.",
    tags: ["AWS", "Azure", "Kubernetes", "Terraform"],
    href: "/what-we-serve/services/cloud-services",
  },
  {
    icon: Cpu,
    title: "Data & Applied AI Solutions",
    category: "Intelligent Systems",
    desc: "Custom LLM deployments, autonomous agent workflows, predictive intelligence, and unified data lakehouse architectures.",
    tags: ["Generative AI", "LLMs", "Pipelines", "MLOps"],
    href: "/what-we-serve/services/data-and-ai",
  },
  {
    icon: Code2,
    title: "Custom Software Engineering",
    category: "Application Development",
    desc: "Bespoke web applications, scalable platforms, high-concurrency microservices, and robust API ecosystems built for endurance.",
    tags: ["Next.js", "TypeScript", "Node.js", "GraphQL"],
    href: "/what-we-serve/services/custom-developments",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Quality Assurance",
    category: "Reliability & Testing",
    desc: "Full automated regression suites, load & stress simulations, end-to-end security compliance, and zero-defect QA frameworks.",
    tags: ["Playwright", "Cypress", "Load Testing", "Security"],
    href: "/what-we-serve/services/quality-assurance",
  },
  {
    icon: Layers,
    title: "Enterprise Consulting & Strategy",
    category: "Advisory & Transformation",
    desc: "Strategic modernization roadmaps, legacy refactoring, enterprise architectural audits, and technical leadership advisory.",
    tags: ["Enterprise Architecture", "Audits", "Digital Strategy"],
    href: "/what-we-serve/services/consulting",
  },
  {
    icon: Briefcase,
    title: "Enterprise ERP Modernization",
    category: "Operations & Systems",
    desc: "End-to-end ERP implementations, seamless data migration, custom extensions, and business workflow automations.",
    tags: ["SAP Ecosystem", "Integrations", "Workflow Automation"],
    href: "/what-we-serve/services/erp",
  },
];

// 4. Life at NTS: Culture & Community
const lifePillars = [
  {
    icon: Flame,
    title: "Creative Autonomy",
    desc: "Flat hierarchy with high trust. Squads make architectural decisions without red tape or micro-management.",
    tag: "High Trust Culture",
  },
  {
    icon: BookOpen,
    title: "Continuous Upskilling",
    desc: "Sponsored certifications (AWS, Azure, GCP), learning budgets, and internal engineering masterclasses.",
    tag: "Funded Growth",
  },
  {
    icon: Laptop,
    title: "Modern Hybrid Flexibility",
    desc: "Collaborative hubs combined with true remote flexibility. Work in ways that let you thrive personally and professionally.",
    tag: "Flexibility First",
  },
  {
    icon: HeartPulse,
    title: "Holistic Well-being",
    desc: "Comprehensive family health coverage, mental wellness allowances, flexible recharge breaks, and community events.",
    tag: "Full Family Coverage",
  },
];

export default function WhoWeAreRedesignedPage() {
  const [h1Hovered, setH1Hovered] = useState(false);
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ══════════════════════════════════════════════════════════════
          HERO BANNER — 3D CRYSTAL NTS BACKGROUND & FLOATING GLASS CARDS
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
        {/* Full Bleed Background Image */}
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
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/40 to-transparent pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl lg:max-w-3xl text-left">
            {/* Luminous Animated Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-white text-[#0051fe] text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-[0_4px_22px_rgba(0,81,254,0.18)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0051fe] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0051fe]" />
              </span>
              <span
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.9)" }}
              >
                WHO WE ARE • THE UNIFIED NEXORA STORY
              </span>
            </motion.div>

            {/* Main Punchy Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              whileHover={{
                x: 6,
                transition: { type: "spring", stiffness: 350, damping: 22 },
              }}
              onMouseEnter={() => setH1Hovered(true)}
              onMouseLeave={() => setH1Hovered(false)}
              style={{
                textShadow: h1Hovered
                  ? "0 4px 18px rgba(255, 255, 255, 1), 0 0 32px rgba(186, 230, 253, 0.95), 0 0 50px rgba(147, 197, 253, 0.85)"
                  : "0 2px 12px rgba(255, 255, 255, 0.95), 0 0 22px rgba(186, 230, 253, 0.85), 0 0 38px rgba(147, 197, 253, 0.65)",
                transition: "text-shadow 0.35s ease",
              }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-[1.08] mb-4 sm:mb-5 cursor-pointer select-none"
            >
              Creating{" "}
              <span className="text-[#0051fe] inline-block">Positive Change.</span>
              {/* <br />
              Champions of Craft. */}
            </motion.h1>

            {/* Strategic Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold leading-relaxed max-w-2xl mb-8 drop-shadow-[0_1px_10px_rgba(255,255,255,0.95)]"
              style={{
                textShadow:
                  "0 1px 14px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(15, 23, 42, 0.08)",
              }}
            >
              At Nexora Technology Services (NTS), we bridge visionary software
              engineering with human-first culture. Discover how our core
              values, end-to-end capabilities, and relentless focus create
              transformational velocity for global enterprises.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 transition-all duration-200 group cursor-pointer"
              >
                <span>Partner With Nexora</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#narrative"
                className="px-8 py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_14px_28px_rgba(0,81,254,0.22)] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Universe</span>
                <ChevronRight className="w-4 h-4 text-[#0051fe]" />
              </a>
            </motion.div>

            {/* Quick Hero Floating Metrics */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-blue-200/80"
            >
              {whyNexoraMetrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-white/85 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/90 shadow-sm hover:border-[#0051fe]/40 hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-xl sm:text-2xl font-black text-[#0051fe] font-heading leading-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-900 leading-snug">
                    {m.label}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    {m.sub}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INTERACTIVE CHAPTER NAVIGATION STRIP (QUICK JUMP)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="narrative"
        className="sticky top-16 z-30 w-full bg-white/80 backdrop-blur-xl border-y border-blue-100 shadow-[0_4px_20px_rgba(0,81,254,0.04)] py-3 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 pl-1">
              Chapters:
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {[
              { id: "why-nexora", label: "01. Why Nexora" },
              { id: "our-values", label: "02. Core Values" },
              { id: "our-services", label: "03. Flagship Services" },
              { id: "life-at-nts", label: "04. Life @ NTS" },
            ].map((ch) => (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className="px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-[#0051fe] bg-slate-100/80 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 transition-all duration-200 whitespace-nowrap"
              >
                {ch.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="/careers/apply-for-job"
              className="text-xs font-bold text-[#0051fe] hover:underline flex items-center gap-1"
            >
              <span>Join the Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHAPTER 01: WHY NEXORA — STRATEGIC LEVERAGE & ADVANTAGE
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="why-nexora"
        className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#f8fafc] via-[#eff6ff] to-[#f8fafc] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chapter 01 • The Nexora Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
              Why Ambitious Leaders Choose{" "}
              <span className="text-[#0051fe]">Nexora</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              We replace bureaucratic friction with elite engineering teams that
              deliver velocity, zero technical debt, and predictable business
              leverage.
            </p>
          </div>

          {/* 4 Pillars Grid with Spotlight Glow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyNexoraHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.2)"
                  borderColor="rgba(0, 81, 254, 0.4)"
                  className="p-7 bg-white/90 border-blue-200/80 shadow-[0_10px_30px_-6px_rgba(0,81,254,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(0,81,254,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(0,81,254,0.4)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Differentiator Callout Banner */}
          {/* <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-r from-[#0051fe] via-[#124bda] to-[#0d369c] text-white shadow-[0_20px_50px_-10px_rgba(0,81,254,0.35)] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="px-3.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  Continuous Feedback Loop
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading mb-4 text-white">
                  Built to work as an organic extension of your engineering
                  squads.
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Whether you require full-lifecycle product engineering, cloud
                  migration teams, or an enterprise AI transformation, Nexora
                  delivers with full transparency, weekly demos, and zero vendor
                  lock-in.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/about/organization/why-nexora"
                  className="px-8 py-4 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Deep-Dive Why Nexora</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHAPTER 02: OUR VALUES — INTERACTIVE VALUES SHOWCASE
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="our-values"
        className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-white border-t border-blue-100/80"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <Compass className="w-3.5 h-3.5" />
              <span>Chapter 02 • Guiding Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
              Our Core <span className="text-[#0051fe]">Values.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              These five tenets govern how we write code, how we treat
              teammates, and how we deliver generational value to clients.
            </p>
          </div>

          {/* Interactive Values Dual-Pane Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Left Selector Column */}
            <div className="lg:col-span-5 space-y-3">
              {ourValues.map((val, idx) => {
                const Icon = val.icon;
                const isSelected = activeValueIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveValueIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-50 to-white border-[#0051fe] shadow-[0_8px_25px_rgba(0,81,254,0.14)] -translate-x-1"
                        : "bg-white hover:bg-slate-50 border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                          isSelected
                            ? "bg-[#0051fe] text-white scale-105 shadow-md"
                            : "bg-blue-50 text-[#0051fe]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Principle 0{idx + 1}
                        </div>
                        <div
                          className={`text-base font-bold transition-colors ${
                            isSelected ? "text-[#0051fe]" : "text-slate-900"
                          }`}
                        >
                          {val.title}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        isSelected
                          ? "text-[#0051fe] translate-x-1"
                          : "text-slate-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Expressive Detail Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValueIndex}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white via-blue-50/50 to-white border-2 border-blue-200/90 shadow-[0_20px_50px_-10px_rgba(0,81,254,0.12)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-6">
                      <span>{ourValues[activeValueIndex].badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading mb-6 leading-tight">
                      {ourValues[activeValueIndex].title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
                      {ourValues[activeValueIndex].desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-blue-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0051fe] flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 font-bold" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">
                          Applied across every team
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0051fe] flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 font-bold" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">
                          Transparent stakeholder governance
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <Link
                        href="/about/organization/our-values"
                        className="text-xs font-bold uppercase tracking-wider text-[#0051fe] hover:underline flex items-center gap-1.5 group"
                      >
                        <span>Read complete values charter</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHAPTER 03: OUR SERVICES — FULL MATRIX SHOWCASE
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="our-services"
        className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f8fafc] border-t border-blue-100/80"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>Chapter 03 • Flagship Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
              End-to-End Enterprise{" "}
              <span className="text-[#0051fe]">Solutions</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              From foundational cloud architecture to custom AI workflows and
              ERP integrations, we deliver complete technological sovereignty.
            </p>
          </div>

          {/* 6-Card Flagship Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={idx}
                  href={srv.href}
                  className="group block h-full focus:outline-none"
                >
                  <SpotlightCard
                    spotlightColor="rgba(0, 81, 254, 0.22)"
                    borderColor="rgba(0, 81, 254, 0.45)"
                    contentClassName="h-full flex flex-col justify-between"
                    className="h-full min-h-[320px] cursor-pointer bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/80 shadow-[0_10px_30px_-5px_rgba(0,81,254,0.06)] hover:shadow-[0_22px_45px_-8px_rgba(0,81,254,0.18)] hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(0,81,254,0.4)] group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          {srv.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-heading group-hover:text-[#0051fe] transition-colors">
                        {srv.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {srv.desc}
                      </p>

                      {/* Tech Pills */}
                      {/* <div className="flex flex-wrap gap-1.5 mb-4">
                        {srv.tags.map((t, ti) => (
                          <span
                            key={ti}
                            className="px-2.5 py-1 rounded-md bg-blue-50/80 border border-blue-100 text-[11px] font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div> */}
                    </div>

                    <div className="mt-6 pt-4 border-t border-blue-100/90 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0051fe] group-hover:underline">
                        Explore Capability
                      </span>
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200 flex items-center justify-center transition-colors group-hover:bg-[#0051fe] group-hover:text-white group-hover:border-[#0051fe]">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHAPTER 04: LIFE AT NTS — CULTURE, CAMARADERIE & PEOPLE
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="life-at-nts"
        className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-white border-t border-blue-100/80"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <Users className="w-3.5 h-3.5" />
              <span>Chapter 04 • People & Culture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
              Life at <span className="text-[#0051fe]">Nexora (NTS)</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              We believe elite software is written by fulfilled, empowered
              humans. Here is how our culture nurtures brilliance and belonging.
            </p>
          </div>

          {/* 4 Cultural Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {lifePillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-7 bg-gradient-to-br from-white via-blue-50/30 to-white border border-blue-200/80 shadow-[0_10px_30px_-6px_rgba(0,81,254,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(0,81,254,0.16)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(0,81,254,0.4)] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Life at NTS Interactive Culture Strip */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#f8fafc] via-blue-50 to-[#edf4ff] border border-blue-200/90 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0051fe] mb-2 block">
                  Join Our Ranks
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-3">
                  Do the most impactful work of your career.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  We are continually seeking curious engineers, solution
                  architects, AI practitioners, and design visionaries. Explore
                  open roles or learn more about our transparent hiring process.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/careers/life-at-nts"
                  className="px-6 py-3.5 rounded-full bg-white text-[#0051fe] border border-blue-200 hover:border-[#0051fe] text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <span>Experience Culture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/careers/apply-for-job"
                  className="px-6 py-3.5 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_8px_20px_rgba(0,81,254,0.35)] hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <span>View Openings</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL STRATEGIC CALL TO ACTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#f8fafc] via-[#eff6ff] to-[#e0edff] border-t border-sky-200/80 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0051fe] animate-pulse" />
            <span>Ready for what is next</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-6">
            Let us engineer your next{" "}
            <span className="text-[#0051fe]">generation of growth.</span>
          </h2>

          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you want to build high-scale platforms, modernize legacy
            ecosystems, or integrate autonomous AI, our dedicated teams are ready
            to partner.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-9 py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.65)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 transition-all duration-200 group cursor-pointer"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about/organization/leaders"
              className="px-9 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 hover:text-[#0051fe] border border-blue-200 text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <span>Meet Leadership</span>
              <Users className="w-4 h-4 text-[#0051fe]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

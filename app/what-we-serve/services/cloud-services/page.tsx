"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import Footer from "@/components/layout/footer";
import img3 from "@/public/images/img-3.jpg";
import {
  Cloud,
  Compass,
  Rocket,
  Cpu,
  Code2,
  ShieldCheck,
  //CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Database,
  TrendingDown,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Headphones,
  Check,
  Globe,
} from "lucide-react";

const offerings = [
  {
    icon: Compass,
    title: "Cloud Consulting",
    subtitle: "Services Include",
    items: [
      "Cloud readiness assessment",
      "Cloud strategy & roadmap",
      "Infrastructure planning",
      "Cost optimization planning",
      "Security & compliance consulting",
    ],
    desc: "We analyse your business requirements and recommend the right cloud strategy to maximize efficiency, scalability, and ROI.",
  },
  {
    icon: Rocket,
    title: "Cloud Migration Services",
    subtitle: "Migration Support For",
    items: [
      "On-premise to cloud migration",
      "Legacy application modernization",
      "Data migration",
      "Hybrid cloud setup",
      "Multi-cloud deployment",
    ],
    desc: "Seamlessly migrate your applications, servers, databases, and workloads to the cloud with minimal downtime and maximum security.",
  },
  {
    icon: Cpu,
    title: "Cloud Infrastructure Management",
    subtitle: "Key Features",
    items: [
      "24/7 monitoring & support",
      "Performance optimization",
      "Backup & disaster recovery",
      "Server management",
      "Security management",
      "Automated scaling",
    ],
    desc: "End-to-end cloud infrastructure management to ensure high availability, security, and operational efficiency.",
  },
  {
    icon: Code2,
    title: "Cloud Application Development",
    subtitle: "Development Capabilities",
    items: [
      "SaaS application development",
      "Microservices architecture",
      "API integrations",
      "Containerization & orchestration",
      "DevOps implementation",
    ],
    desc: "Build modern, scalable, and high-performing cloud-native applications tailored to your business needs.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security Services",
    subtitle: "Security Solutions Include",
    items: [
      "Identity & access management",
      "Data encryption",
      "Threat monitoring",
      "Compliance management",
      "Security audits",
      "Disaster recovery planning",
    ],
    desc: "Protect your cloud environment with advanced security solutions and industry best practices.",
  },
];

const platforms = [
  {
    label: "Amazon Web Services (AWS)",
    color: "#ff9900",
    bgGlow: "rgba(255, 153, 0, 0.12)",
    tag: "Certified Partner",
    icon: Cloud,
  },
  {
    label: "Microsoft Azure",
    color: "#0089d6",
    bgGlow: "rgba(0, 137, 214, 0.12)",
    tag: "Enterprise Cloud",
    icon: Database,
  },
  {
    label: "Google Cloud Platform (GCP)",
    color: "#4285f4",
    bgGlow: "rgba(66, 133, 244, 0.12)",
    tag: "AI & BigQuery Ready",
    icon: Globe,
  },
  {
    label: "Hybrid & Private Cloud Solutions",
    color: "#0051fe",
    bgGlow: "rgba(0, 81, 254, 0.12)",
    tag: "Flexible Architecture",
    icon: Layers,
  },
];

const whyItems = [
  {
    icon: Users,
    title: "Experienced Cloud Professionals",
    desc: "Certified cloud architects and engineers with deep multi-cloud expertise across diverse industries.",
  },
  {
    icon: Target,
    title: "Customized Cloud Strategies",
    desc: "Tailored cloud roadmaps aligned with your unique business goals, workloads, and budget.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Secure Solutions",
    desc: "Infrastructure designed to grow with your business while maintaining enterprise-grade security.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Implementation",
    desc: "Smart resource planning and optimization strategies that deliver maximum ROI on cloud investments.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support & Maintenance",
    desc: "From migration through ongoing operations — a single partner for your entire cloud lifecycle.",
  },
  {
    icon: Zap,
    title: "Faster Deployment & Business Agility",
    desc: "Agile delivery methods and automation tooling that accelerate your time-to-value in the cloud.",
  },
];

{
  /*const cloudMetrics = [
  {
    value: "99.99%",
    label: "Uptime SLA",
    icon: CheckCircle2,
    color: "text-emerald-400",
  },
  {
    value: "35%",
    label: "Cost Savings",
    icon: TrendingDown,
    color: "text-cyan-300",
  },
  { value: "3x", label: "Faster Deploy", icon: Zap, color: "text-amber-300" },
  {
    value: "24/7",
    label: "Monitoring",
    icon: ShieldCheck,
    color: "text-sky-300",
  },
]; */
}

export default function CloudSolutions() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — CLOUD SOLUTIONS
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
                CLOUD SOLUTIONS
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
              Accelerate Your Business with <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">Scalable Cloud</span>
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
              At Nexora Technology Services Pvt Ltd, we help businesses
              modernize their IT infrastructure with secure, scalable, and
              cost-effective cloud solutions - improving agility, collaboration,
              and performance across your entire organization.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6"
            >
              <Link
                href="#offerings"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_12px_28px_rgba(0,81,254,0.2)] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Services</span>
              </Link>
              <Link
                href="/contact"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              >
                <span>Free Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: SERVICE OFFERINGS ("WHAT WE OFFER")
      ═══════════════════════════════════════════ */}
      <section
        id="offerings"
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden"
      >
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Our Cloud Service Offerings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Comprehensive cloud services covering every stage of your digital
              transformation journey — from strategy to security.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {offerings.map((o, idx) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col p-7 sm:p-8 rounded-2xl bg-white border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 group cursor-pointer relative overflow-hidden hover:-translate-y-1">
                    {/* Top Accent Bar at the true top edge of the card */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0051fe] to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />

                    {/* Icon */}
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 text-[#0051fe] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2.5 leading-snug">
                      {o.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {o.desc}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-[#0051fe] uppercase tracking-wider font-heading mb-3 flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-[#0051fe]" />
                        {o.subtitle}
                      </p>

                      <ul className="space-y-2">
                        {o.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug"
                          >
                            <Check className="w-3.5 h-3.5 text-[#0051fe] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: IMAGE + CLOUD PLATFORMS
      ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Interactive Showcase Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Decorative Background Aura Rings */}
                <div className="pointer-events-none absolute -top-8 -left-8 w-72 h-72 rounded-full bg-blue-100/60 blur-2xl z-0" />
                <div className="pointer-events-none absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-cyan-100/60 blur-2xl z-0" />

                {/* Main Card Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10"
                >
                  <Image
                    src={img3}
                    alt="Cloud Solutions at Nexora"
                    width={600}
                    height={460}
                    className="w-full h-[400px] sm:h-[440px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Glassmorphic Badge 1: 99.99% Uptime */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-100 z-20 flex items-center gap-3.5 hover:shadow-2xl transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-[#0051fe] flex items-center justify-center text-white shadow-md shadow-blue-500/25">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                      99.99% Uptime
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      SLA Guaranteed
                    </p>
                  </div>
                </motion.div>

                {/* Floating Glassmorphic Badge 2: 35% Cost Saved */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 }}
                  className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-100 z-20 flex items-center gap-3.5 hover:shadow-2xl transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                      35% Cost Saved
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Avg. client savings
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Cloud Platforms We Work With */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4">
                <Layers className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Cloud Platforms</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4 leading-tight">
                Cloud Platforms <br />
                <span className="text-[#0051fe]">We Work With</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                We support leading cloud platforms and technologies, delivering
                certified expertise across all major providers so you always
                have the right tool for the job.
              </p>

              {/* Platform Cards */}
              <div className="space-y-3.5">
                {platforms.map((p, idx) => {
                  const PlatformIcon = p.icon;
                  return (
                    <motion.div
                      key={p.label}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center gap-4 group cursor-pointer"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105"
                        style={{
                          background: p.bgGlow,
                          borderColor: `${p.color}33`,
                          color: p.color,
                        }}
                      >
                        <PlatformIcon className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0051fe] transition-colors">
                            {p.label}
                          </p>
                          <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {p.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: "45px",
                              background: p.color,
                              opacity: 0.9,
                            }}
                          />
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: "25px",
                              background: p.color,
                              opacity: 0.5,
                            }}
                          />
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: "15px",
                              background: p.color,
                              opacity: 0.2,
                            }}
                          />
                        </div>
                      </div>

                      <div
                        className="w-3 h-3 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                        style={{
                          background: p.color,
                          boxShadow: `0 0 10px ${p.color}`,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: WHY CHOOSE US
      ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Why Choose Nexora Technology Services{" "}
              <span className="text-[#0051fe]">for Cloud?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We ensure seamless cloud adoption with minimal disruption while
              maximising performance, security, and cost efficiency.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 relative z-10">
            {whyItems.map((item, idx) => {
              const WhyIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="h-full"
                >
                  <div className="h-full p-7 rounded-2xl bg-white border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col hover:-translate-y-1">
                    {/* Top Accent Line on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 text-[#0051fe] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                      <WhyIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-[#0051fe] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-auto">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: INSET-ROUNDED CTA BANNER
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
                <Cloud className="w-3.5 h-3.5 text-cyan-300" />
                <span>Transform Your Business</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Transform Your Business <br />
                <span className="text-[#67e8f9] drop-shadow-sm">
                  with Cloud Technology
                </span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Empower your organization with flexible, reliable, and
                future-ready cloud solutions. We help businesses leverage the
                power of the cloud to improve operational efficiency, enhance
                customer experiences, and drive innovation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Free Assessment</span>
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

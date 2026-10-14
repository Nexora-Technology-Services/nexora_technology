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
  Globe,
  Smartphone,
  Building2,
  RefreshCw,
  Network,
  Zap,
  Target,
  TrendingUp,
  Users,
  LayoutTemplate,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Activity,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "We build responsive, scalable, and high-performance web applications tailored to your business processes and customer needs.",
    subtitle: "Our Expertise Includes",
    items: [
      "Business portals",
      "CRM & ERP solutions",
      "E-commerce applications",
      "Workflow management systems",
      "Customer self-service portals",
      "Admin dashboards",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    desc: "Develop powerful and user-friendly mobile applications for Android and iOS platforms.",
    subtitle: "Mobile Solutions",
    items: [
      "Native mobile applications",
      "Cross-platform app development",
      "Enterprise mobility solutions",
      "API integrations",
      "Mobile UI/UX design",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Software Development",
    desc: "We create enterprise-grade software solutions that improve operational efficiency and support business growth.",
    subtitle: "Solutions Include",
    items: [
      "HR Management Systems",
      "Inventory & Supply Chain Systems",
      "Finance & Accounting Software",
      "Manufacturing & ERP Solutions",
      "Learning Management Systems",
      "Document Management Systems",
    ],
  },
  {
    icon: RefreshCw,
    title: "Software Product Development - Process",
    desc: "Transform your ideas into successful digital products with end-to-end product development services.",
    subtitle: "Our Product Development Approach",
    items: [
      "Requirement analysis",
      "UI/UX design",
      "Agile development",
      "Testing & quality assurance",
      "Deployment & support",
      "Product enhancement",
    ],
  },
  {
    icon: Network,
    title: "API & System Integration",
    desc: "Enable seamless communication between applications and platforms through secure API and integration services.",
    subtitle: "Integration Services",
    items: [
      "Third-party API integration",
      "Payment gateway integration",
      "CRM & ERP integrations",
      "Cloud integrations",
      "Data synchronization services",
    ],
  },
  {
    icon: Zap,
    title: "Application Modernization",
    desc: "Upgrade legacy applications with modern technologies to improve performance, scalability, and user experience.",
    subtitle: "Modernization Services Include",
    items: [
      "Legacy system migration",
      "UI modernization",
      "Cloud enablement",
      "Performance optimization",
      "Database modernization",
    ],
  },
];

const technologies = [
  { label: "React JS", color: "#61dafb" },
  { label: "Angular", color: "#dd1b16" },
  { label: "Node JS", color: "#339933" },
  { label: "Java", color: "#f89820" },
  { label: "Python", color: "#3776ab" },
  { label: "PHP", color: "#777bb4" },
  { label: "SQL & NoSQL Databases", color: "#f29111" },
  { label: "Cloud & DevOps Technologies", color: "#17b8e0" },
];

const whyItems = [
  {
    icon: Target,
    title: "Customized Business-Focused Solutions",
    desc: "Every solution is built around your specific workflows, industry, and business objectives — not a generic template.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Secure Development",
    desc: "Enterprise-grade architecture designed to scale with your growth while maintaining robust security standards.",
  },
  {
    icon: Zap,
    title: "Agile Development Methodology",
    desc: "Iterative delivery with continuous feedback ensures faster time-to-market and better alignment with your vision.",
  },
  {
    icon: Users,
    title: "Experienced Full-Stack Team",
    desc: "A skilled team of developers, designers, and architects with deep expertise across front-end, back-end, and cloud.",
  },
  {
    icon: LayoutTemplate,
    title: "High-Quality UI/UX Design",
    desc: "Intuitive, user-centric interfaces that improve adoption, reduce training time, and deliver exceptional experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Support & Maintenance",
    desc: "Post-launch support, performance monitoring, and ongoing enhancements to keep your product running at its best.",
  },
];

export default function ProductDevelopment() {
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
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
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.14] mb-4 font-heading"
              >
                Product Development <br />
                <span className="text-[#67e8f9] drop-shadow-sm">
                  Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="text-base sm:text-lg font-semibold text-cyan-200 mb-4 tracking-wide"
              >
                Tailored Software Solutions Built for Your Business
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal opacity-95 max-w-2xl mb-8"
              >
                We specialize in delivering custom software development solutions designed to meet unique
                business requirements — helping organizations streamline operations, improve productivity,
                and accelerate digital transformation through scalable and innovative technology.
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
                  Start Your Project
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Free Consultation
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Product Operations Telemetry HUD */}
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
                      Product Engineering Center
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/15 text-cyan-200 border border-white/20 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-300" />
                    Development Active
                  </span>
                </div>

                {/* Key Metrics Cards */}
                <div className="space-y-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-white/15">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/30 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-200 text-[11px] uppercase tracking-wider">Web & Mobile Apps Built</p>
                      <p className="font-heading text-white font-extrabold text-xl">300+</p>
                    </div>
                    <span className="text-cyan-200 text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/15">
                      Across Industries
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-white/15">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/30 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-300">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-200 text-[11px] uppercase tracking-wider">Enterprise Solutions</p>
                      <p className="font-heading text-white font-extrabold text-xl">150+</p>
                    </div>
                    <span className="text-emerald-200 text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/15">
                      Deployed Globally
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center gap-4 transition-all hover:bg-white/15">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400/20 to-indigo-500/30 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-300">
                      <Network className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-blue-200 text-[11px] uppercase tracking-wider">API Integrations</p>
                      <p className="font-heading text-white font-extrabold text-xl">200+</p>
                    </div>
                    <span className="text-sky-200 text-[11px] bg-white/10 px-2 py-1 rounded-md border border-white/15">
                      Seamlessly Connected
                    </span>
                  </div>
                </div>

                {/* HUD Footer Status */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-100/80">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                    Agile Lifecycle Architecture
                  </span>
                  <span className="font-mono text-cyan-300">Enterprise Standard</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: INTRO / WHAT WE BUILD (WHITE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>What We Build</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                From Enterprise Apps <br />
                <span className="text-[#0051fe]">
                  to Mobile Platforms
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                From enterprise applications to web and mobile platforms, our custom development services
                are focused on creating reliable, secure, and future-ready systems that align with your
                business goals.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["Web Applications", "Mobile Apps", "Enterprise Systems", "API Integrations"].map((tag) => (
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
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  About Us
                  <ArrowUpRight className="w-4 h-4 text-[#0051fe]" />
                </Link>
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
                    src={img1}
                    alt="Product Development at Nexora"
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
                    alt="Mobile apps development"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="Software development team"
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
                    <p className="font-heading font-bold text-xs text-slate-900">Future-Ready</p>
                    <p className="text-[11px] text-slate-500">Secure & Scalable</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="hidden sm:flex absolute top-4 left-4 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3 shadow-xl border border-blue-400/30 z-30 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">300+ Solutions</p>
                    <p className="text-[10px] text-blue-200">Delivered Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SERVICE OFFERINGS GRID (BLUE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Our Product Development Services</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              What We Develop <span className="text-[#0051fe]">for You</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Comprehensive software development services covering every layer of your digital product —
              from idea to deployment and beyond.
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
                  {/* Slow & Smooth Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div>
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2.5 leading-snug">
                      {svc.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {svc.desc}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      <p className="font-heading text-xs font-bold text-[#0051fe] uppercase tracking-wider mb-3">
                        {svc.subtitle}
                      </p>

                      <ul className="space-y-2">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe] shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: TECHNOLOGIES + SECOND IMAGE (WHITE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Tech Stack Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Technologies We Work With</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Modern Stack, <br />
                <span className="text-[#0051fe]">
                  Robust Solutions
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Our development team works with modern technologies and frameworks to build robust,
                scalable, and maintainable solutions tailored to your business.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {technologies.map((t) => (
                  <div
                    key={t.label}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs hover:border-blue-300 hover:bg-blue-50/50 hover:text-[#0051fe] transition-all duration-200"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: t.color }}
                    />
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Multi-Layered Image Showcase 2 */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6">
              {/* Background Ambient Glow */}
              <div className="absolute w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-0" />
              <div className="absolute w-60 h-60 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                {/* Main Large Image */}
                <div className="relative w-[84%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 transition-transform duration-500 hover:scale-[1.01]">
                  <Image
                    src={img3}
                    alt="Technology stack at Nexora"
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
                    alt="Development team"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>

                {/* Accent Floating Image Bottom-Left */}
                <div className="hidden sm:block absolute -bottom-5 -left-3 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                  <Image
                    src={img2}
                    alt="Code and architecture"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Floating Glassmorphism Badge 1 */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-blue-100 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-slate-900">Full-Stack Team</p>
                    <p className="text-[11px] text-slate-500">Expert Developers</p>
                  </div>
                </div>

                {/* Floating Glassmorphism Badge 2 */}
                <div className="absolute bottom-6 right-2 sm:right-6 bg-gradient-to-br from-[#0051fe] to-[#1e3a8a] text-white rounded-xl p-3.5 shadow-xl border border-blue-400/30 z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-white">Agile Delivery</p>
                    <p className="text-[11px] text-blue-200">Faster Time-to-Market</p>
                  </div>
                </div>
              </div>
            </div>
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
              Why Choose Nexora{" "}
              <span className="text-[#0051fe]">
                Technology Services?
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine technical excellence with deep business understanding to deliver software
              solutions that create lasting value.
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
                  {/* Slow & Smooth Top Accent Line */}
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
          SECTION 6: INSET-ROUNDED CTA BANNER
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
                <span>Ready to Build?</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Let&apos;s Turn Your Idea <br />
                <span className="text-[#67e8f9] drop-shadow-sm">Into a Digital Product</span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Partner with Nexora to build scalable, secure, and future-ready software solutions
                that streamline operations and accelerate your digital transformation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Your Project</span>
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

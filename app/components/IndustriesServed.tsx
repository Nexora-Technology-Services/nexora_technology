"use client";

import { useState } from "react";
import Image from "next/image";
import heroBg from "@/app/Photo/hero-section.png";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import Footer from "@/app/components/Footer";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";
import {
  Landmark,
  Factory,
  ShoppingCart,
  Tv,
  Zap,
  Truck,
  Plane,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Cpu,
  Layers,
  Globe2,
  Activity,
  Server,
  Workflow,
} from "lucide-react";

interface IndustryItem {
  id: string;
  category: "finance" | "industrial" | "consumer" | "all";
  icon: typeof Landmark;
  title: string;
  badge: string;
  code: string;
  summary: string;
  desc: string;
  capabilities: string[];
  metrics: string;
}

const industries: IndustryItem[] = [
  {
    id: "bfsi",
    category: "finance",
    icon: Landmark,
    title: "Banking & Financial Services",
    badge: "BFSI",
    code: "FIN-01",
    summary:
      "Secure, compliant, and ultra-low latency fintech infrastructures.",
    desc: "Delivering mission-critical, SOC2 and PCI-DSS compliant technology solutions for global retail banks, institutional lenders, payment gateways, and asset managers.",
    capabilities: [
      "Core Banking Modernization & Microservices",
      "Real-Time Fraud Detection & AML Pipelines",
      "PCI-DSS Level 1 & SOC2 Compliance Engineering",
      "Algorithmic Risk Scoring & Open Banking APIs",
    ],
    metrics: "99.999% Fault-Tolerant Uptime",
  },
  {
    id: "manufacturing",
    category: "industrial",
    icon: Factory,
    title: "Manufacturing & Industry 4.0",
    badge: "MFG 4.0",
    code: "IND-02",
    summary: "Intelligent automation and connected shop-floor telemetry.",
    desc: "Streamlining enterprise production lines, inventory orchestration, and automated supply chains through SAP/Oracle integrations, edge computing, and real-time ERP analytics.",
    capabilities: [
      "Smart Factory IoT & Edge Sensor Telemetry",
      "Predictive Asset Maintenance & Digital Twins",
      "Next-Gen ERP & MES Production Orchestration",
      "Automated Supply Chain Inventory Synchronization",
    ],
    metrics: "35% Average OEE Improvement",
  },
  {
    id: "retail",
    category: "consumer",
    icon: ShoppingCart,
    title: "Retail & Omnichannel E-Commerce",
    badge: "RETAIL",
    code: "COM-03",
    summary: "High-conversion headless storefronts and unified commerce.",
    desc: "Empowering hyper-growth retailers and enterprise online marketplaces with composable headless commerce architectures, sub-second checkout speeds, and AI personalization.",
    capabilities: [
      "Headless & Composable Commerce Stacks",
      "AI-Powered Dynamic Pricing & Recommendation Engines",
      "Unified Multi-Channel Inventory & Order Management",
      "Sub-Second Mobile Storefronts with Edge Caching",
    ],
    metrics: "2.4x Faster Cart Conversion",
  },
  {
    id: "hitech",
    category: "finance",
    icon: Tv,
    title: "Hi-Tech, Media & Streaming",
    badge: "HI-TECH",
    code: "MED-04",
    summary:
      "Low-latency media distribution and multi-tenant SaaS engineering.",
    desc: "Supporting digital-native technology companies, streaming networks, and SaaS providers with hyper-scalable cloud pipelines, CDN orchestration, and high-concurrency architectures.",
    capabilities: [
      "Low-Latency Video Streaming & Content Delivery",
      "Multi-Tenant SaaS Platforms with Automated Tenant Isolation",
      "Data Lakehouse Architectures & Real-Time Telemetry",
      "Agile CI/CD Pipelines with Automated Testing Pods",
    ],
    metrics: "< 50ms Edge Video Latency",
  },
  {
    id: "energy",
    category: "industrial",
    icon: Zap,
    title: "Energy & Smart Utilities",
    badge: "ENERGY",
    code: "ENG-05",
    summary: "Resilient grid monitoring, smart metering, and ESG compliance.",
    desc: "Driving operational resilience and environmental compliance in energy generation, distribution, and municipal utility management through smart metering data ingestion and IoT networks.",
    capabilities: [
      "Smart Meter Data Ingestion & High-Throughput Analytics",
      "Renewable Grid Asset Monitoring & Fault Prediction",
      "Automated ESG Reporting & Regulatory Compliance",
      "Field Service Mobility & Workforce Dispatch Tools",
    ],
    metrics: "Millions of Sensor Events/Sec",
  },
  {
    id: "logistics",
    category: "industrial",
    icon: Truck,
    title: "Logistics & Supply Chain",
    badge: "LOGISTICS",
    code: "SCM-06",
    summary:
      "End-to-end cargo visibility, fleet tracking, and automated routing.",
    desc: "Optimizing multi-modal freight transport, warehouse management (WMS), and cross-border customs clearing with real-time GPS telemetry, route AI, and dynamic dispatching.",
    capabilities: [
      "Dynamic Route Optimization & Fuel Economy AI",
      "WMS & TMS Enterprise Integration Hubs",
      "Real-Time Cold-Chain & Asset Telematics Tracking",
      "Automated Manifest Documentation & Customs Portals",
    ],
    metrics: "18% Logistics Route Cost Savings",
  },
  {
    id: "aviation",
    category: "industrial",
    icon: Plane,
    title: "Aviation & Aerospace Operations",
    badge: "AVIATION",
    code: "AVN-07",
    summary:
      "Critical flight operations, passenger portals, and ICAO compliance.",
    desc: "Providing high-reliability IT services for commercial airlines, ground handling providers, and airport operators including crew scheduling, passenger processing, and maintenance compliance.",
    capabilities: [
      "High-Availability Flight Scheduling & Dispatch Systems",
      "Next-Gen Passenger Processing & Self-Service Kiosks",
      "FAA / ICAO Regulatory Audit & Maintenance Logging",
      "Baggage Tracking & Ground Operations Coordination",
    ],
    metrics: "100% Mission-Critical Reliability",
  },
];

const enterprisePillars = [
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security & Compliance",
    desc: "Rigorous SOC2 Type II, ISO 27001, HIPAA, and PCI-DSS compliance integrated directly into our infrastructure blueprints.",
  },
  {
    icon: Cpu,
    title: "High-Concurrency Architectures",
    desc: "Event-driven distributed systems engineered to process tens of thousands of transactions per second with sub-50ms latency.",
  },
  {
    icon: Layers,
    title: "Cloud-Agnostic Resiliency",
    desc: "Multi-region deployments across AWS, Azure, and Google Cloud with automated failover and 99.99% guaranteed SLA benchmarks.",
  },
  {
    icon: Globe2,
    title: "Dedicated Domain Pods",
    desc: "Specialized engineering squads with proven subject matter expertise in your specific industry regulations and operational workflows.",
  },
];

const stats = [
  { value: "7+", label: "Key Regulated Verticals", sub: "Deep Domain Mastery" },
  {
    value: "99.99%",
    label: "Platform Uptime SLA",
    sub: "Enterprise Production Grade",
  },
  {
    value: "40%",
    label: "Faster Deployment Cycles",
    sub: "Modular Microservices",
  },
  { value: "100%", label: "Client IP Ownership", sub: "Zero Vendor Lock-in" },
];

export default function IndustriesServed() {
  const [h1Hovered, setH1Hovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredIndustries =
    activeFilter === "all"
      ? industries
      : industries.filter((item) => item.category === activeFilter);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f0f5fc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — ALIGNED 2-COLUMN LAYOUT
          Cards are directly visible beside hero copy without scrolling down
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
                SOLUTIONS • SECTOR ENTERPRISE
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
              Domain Specific Engineering. <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">
                Built for High Stakes Industries
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
              Nexora brings deep sector mastery across seven essential global
              industries. We build bespoke software architectures aligned with
              your regulatory compliance, scalability, and mission-critical
              workflows.
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
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#industries-grid"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_12px_28px_rgba(0,81,254,0.2)] transition-all duration-200 cursor-pointer"
              >
                <span>Explore All Sectors</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DOMAIN EXPERTISE SHOWCASE SECTION
          Solid text color for "Your Industry Realities"
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f1f6fd] via-[#e5f0fc] to-[#edf5fd] overflow-hidden">
        {/* Subtle mesh background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/20 to-sky-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-300/15 to-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Micro-dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#0051fe_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Domain Narrative */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                Domain Mastery
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-5 font-heading">
                Enterprise Architectures Shaped for{" "}
                <span className="text-[#0051fe]">Your Industry Realities</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-6 font-sans">
                Off-the-shelf software and generic templates crumble under
                sector-specific regulatory audits, throughput spikes, and
                complex legacy integrations. At Nexora, every system is
                engineered by domain-literate pods who comprehend the precise
                compliance, latency, and operational boundaries of your
                vertical.
              </p>

              {/* Three Strategic Strengths */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-white/80 backdrop-blur-sm shadow-sm hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#0051fe]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      Strict Regulatory &amp; Audit Compliance
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Built-in compliance protocols matching SOC2, PCI-DSS,
                      HIPAA, and ICAO standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-white/80 backdrop-blur-sm shadow-sm hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Server className="w-4 h-4 text-[#0051fe]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      Zero Technical Debt Architecture
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Test-driven microservices designed for 10x vertical scale
                      without expensive rewrites.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/70 border border-white/80 backdrop-blur-sm shadow-sm hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Workflow className="w-4 h-4 text-[#0051fe]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      Seamless Legacy &amp; Modern Integrations
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Safe, non-disruptive bridges connecting monolithic ERPs
                      with high-speed cloud APIs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-[#0051fe] to-[#0284c7] text-white hover:opacity-95 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Schedule Technical Briefing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/components/Organization"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  About Our Pods
                </Link>
              </div>
            </div>

            {/* Right Column: Layered Premium Image Display */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-600/20 blur-xl opacity-75 -z-10" />

                {/* Primary Card / Main Image */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/80 shadow-2xl bg-white z-10 group">
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                    <Image
                      src={img1}
                      alt="Nexora Industry Technology Expertise"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider mb-1.5 font-heading">
                        Production Proven
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white">
                        Enterprise Workloads Delivered Across 7 Global Sectors
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Secondary Offset Image 1 */}
                <div className="hidden sm:block absolute -bottom-8 -left-8 w-52 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20 bg-white">
                  <div className="relative w-full h-full">
                    <Image
                      src={img2}
                      alt="Precision Engineering Pods"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/30" />
                    <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded-lg p-1.5 text-center">
                      <p className="text-[10px] font-bold text-slate-800 font-heading">
                        Agile 2-Week Sprints
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secondary Offset Image 2 */}
                <div className="hidden sm:block absolute -top-8 -right-8 w-48 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20 bg-white">
                  <div className="relative w-full h-full">
                    <Image
                      src={img3}
                      alt="Scalable Cloud Architecture"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/20" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-bold font-heading shadow-md">
                      99.99% SLA
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute -bottom-6 right-6 sm:right-10 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-blue-100 shadow-xl z-30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#0051fe]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 font-heading">
                      100% Client IP Ownership
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Transparent Codebase &amp; Governance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE SECTORS WE SERVE — THE MAIN GRID
      ═══════════════════════════════════════════ */}
      <section
        id="industries-grid"
        className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e8f2fc] via-[#f0f6ff] to-[#e4eefb] overflow-hidden scroll-mt-20"
      >
        {/* Ambient Glow Orbs */}
        <div className="pointer-events-none absolute top-10 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Specialized Verticals
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Purpose-Built Engineering for High-Stakes Sectors
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how Nexora delivers robust, tailored software systems
              engineered to address the specific throughput, data governance,
              and reliability requirements of your industry.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {[
                { id: "all", label: "All 7 Verticals" },
                { id: "finance", label: "Banking, FinTech & Hi-Tech" },
                {
                  id: "industrial",
                  label: "Manufacturing, Logistics & Energy",
                },
                { id: "consumer", label: "Retail & Omnichannel" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer font-heading ${
                    activeFilter === tab.id
                      ? "bg-[#0051fe] text-white shadow-md shadow-blue-500/25"
                      : "bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-blue-100/80 shadow-sm"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid: 2 - 3 - 2 Column Layout for all 7 verticals */}
          {filteredIndustries.length === 7 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {filteredIndustries.map((ind, i) => {
                const Icon = ind.icon;
                // 2 - 3 - 2 column layout on lg:
                // Row 1 (2 cards): items 0, 1 -> col-span-3 (3 + 3 = 6 cols)
                // Row 2 (3 cards): items 2, 3, 4 -> col-span-2 (2 + 2 + 2 = 6 cols)
                // Row 3 (2 cards): items 5, 6 -> col-span-3 (3 + 3 = 6 cols)
                const colSpanClass =
                  i < 2
                    ? "md:col-span-1 lg:col-span-3"
                    : i < 4
                      ? "md:col-span-1 lg:col-span-2"
                      : i === 4
                        ? "md:col-span-2 lg:col-span-2"
                        : "md:col-span-1 lg:col-span-3";

                return (
                  <div
                    key={ind.id}
                    id={ind.id}
                    className={`${colSpanClass} scroll-mt-28`}
                  >
                    <SpotlightCard
                      className="h-full flex flex-col justify-between !bg-white/85 !border-blue-100/90 hover:!border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-7"
                      spotlightColor="rgba(0, 81, 254, 0.16)"
                      borderColor="rgba(0, 81, 254, 0.4)"
                    >
                      <div>
                        {/* Top Header of Card */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/90 border border-blue-200/80 flex items-center justify-center shadow-sm">
                            <Icon className="w-6 h-6 text-[#0051fe]" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                              {ind.code}
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-blue-50 text-[#0051fe] border border-blue-200/80 font-heading">
                              {ind.badge}
                            </span>
                          </div>
                        </div>

                        {/* Card Title & Description */}
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading tracking-tight leading-snug">
                          {ind.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#0051fe] mb-3">
                          {ind.summary}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                          {ind.desc}
                        </p>

                        {/* Key Capabilities Bullet Points */}
                        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 font-heading">
                            Core Deliverables:
                          </p>
                          {ind.capabilities.map((cap, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#0051fe] shrink-0 mt-0.5" />
                              <span className="leading-snug">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Card Footer */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600">
                          <Activity className="w-3.5 h-3.5 text-blue-600" />
                          <span>{ind.metrics}</span>
                        </div>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0051fe] hover:text-[#0041cb] font-heading group transition-colors cursor-pointer"
                        >
                          <span>Discuss Need</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </SpotlightCard>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIndustries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.id} id={ind.id} className="scroll-mt-28">
                    <SpotlightCard
                      className="h-full flex flex-col justify-between !bg-white/85 !border-blue-100/90 hover:!border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-7"
                      spotlightColor="rgba(0, 81, 254, 0.16)"
                      borderColor="rgba(0, 81, 254, 0.4)"
                    >
                      <div>
                        {/* Top Header of Card */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/90 border border-blue-200/80 flex items-center justify-center shadow-sm">
                            <Icon className="w-6 h-6 text-[#0051fe]" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                              {ind.code}
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-blue-50 text-[#0051fe] border border-blue-200/80 font-heading">
                              {ind.badge}
                            </span>
                          </div>
                        </div>

                        {/* Card Title & Description */}
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading tracking-tight leading-snug">
                          {ind.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#0051fe] mb-3">
                          {ind.summary}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                          {ind.desc}
                        </p>

                        {/* Key Capabilities Bullet Points */}
                        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 font-heading">
                            Core Deliverables:
                          </p>
                          {ind.capabilities.map((cap, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#0051fe] shrink-0 mt-0.5" />
                              <span className="leading-snug">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Card Footer */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600">
                          <Activity className="w-3.5 h-3.5 text-blue-600" />
                          <span>{ind.metrics}</span>
                        </div>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0051fe] hover:text-[#0041cb] font-heading group transition-colors cursor-pointer"
                        >
                          <span>Discuss Need</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </SpotlightCard>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CROSS-SECTOR ENTERPRISE STANDARDS
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#09152b] via-[#0d1e3d] to-[#071124] text-white overflow-hidden border-y border-blue-900/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0" />
        <div className="pointer-events-none absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Unified Architecture Benchmarks
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Universal Engineering Rigor Across Every Vertical
            </h2>
            <p className="mt-3 text-blue-200 text-sm sm:text-base leading-relaxed">
              Regardless of the sector, every solution Nexora ships complies
              with institutional standards of high availability, automated
              telemetry, and ironclad security.
            </p>
          </div>

          {/* 4 Architectural Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {enterprisePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <PillarIcon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-blue-200/80 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Proven Impact Statistics Banner */}
          <div className="rounded-2xl bg-white/[0.08] border border-white/20 p-8 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className={`text-center ${idx !== 0 ? "pt-6 sm:pt-0" : ""}`}
                >
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-1 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white font-heading">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-cyan-300/80 font-medium mt-0.5">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CALL TO ACTION (CTA) BANNER — ENCLOSED CARD
          Light blue background around the floating CTA card
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f1f6fd] to-[#e5eefa] overflow-hidden">
        {/* Soft Ambient Lights in Light Blue Outer Section */}
        <div className="pointer-events-none absolute -top-10 left-1/4 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-10 right-1/4 w-80 h-80 bg-sky-300/25 rounded-full blur-3xl z-0" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-r from-[#0041cb] via-[#0051fe] to-[#0284c7] text-white shadow-[0_20px_60px_-15px_rgba(0,81,254,0.45)] border border-blue-400/40 text-center">
            {/* Ambient Aura & Cyber Matrix within the Card */}
            <div className="pointer-events-none absolute -top-16 left-1/3 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl z-0" />
            <div className="pointer-events-none absolute -bottom-16 right-1/4 w-72 h-72 bg-blue-300/25 rounded-full blur-3xl z-0" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-[11px] font-bold uppercase tracking-widest mb-3 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                <span>DIRECT DOMAIN COLLABORATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3 font-heading">
                Accelerate Your Sector-Specific{" "}
                <br className="hidden sm:inline" />
                <span className="text-[#67e8f9] drop-shadow-sm">
                  Digital Transformation Roadmap
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium mb-6 opacity-95">
                Partner with Nexora&apos;s senior solutions architects to audit
                your architecture, eliminate bottlenecks, and engineer resilient
                systems built for scale.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white text-[#0051fe] hover:bg-blue-50 shadow-lg shadow-black/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Schedule Architecture Briefing
                  <ArrowRight className="w-3.5 h-3.5 text-[#0051fe]" />
                </Link>

                <Link
                  href="/what-we-serve/services"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white/15 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore All Services
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
                </Link>
              </div>

              <p className="mt-4 text-[11px] text-blue-200/80 font-medium">
                No obligation consultation • Direct access to principal solution
                architects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER INTEGRATION
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

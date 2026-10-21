"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/app/Photo/hero-section.png";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import Footer from "@/app/components/Footer";
import img1 from "@/app/Photo/img 1.jpg";
import img2 from "@/app/Photo/img 2.jpg";
import img3 from "@/app/Photo/img 3.jpg";
import {
  Settings2,
  Code2,
  ArrowUpCircle,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Workflow,
  TrendingUp,
  BarChart3,
  Users,
  Factory,
  Building2,
  Gauge,
  Boxes,
  Lock,
  ChevronLeft,
  ChevronRight,
  Activity,
} from "lucide-react";

// Core ERP Service Pillars
interface ServicePillar {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  content: string[];
  capabilities: string[];
  metrics: string;
}

const erpServices: ServicePillar[] = [
  {
    id: "implementation",
    stepNumber: "01",
    title: "Implementation",
    subtitle: "End-to-End Enterprise System Deployment",
    badge: "Core Service",
    icon: Settings2,
    content: [
      "ERP Implementation helps organizations streamline and automate their business processes by integrating various functions such as finance, HR, inventory, procurement, sales, and operations into a single centralized system.",
      "A successful ERP implementation improves operational efficiency, enhances data accuracy, enables real-time reporting, and supports better decision-making across the organization.",
    ],
    capabilities: [
      "Multi-Department Business Process Integration",
      "Unified Central Data Repository & Master Data Management",
      "Automated End-to-End Operational Workflows",
      "Real-Time Executive BI & Reporting Dashboards",
    ],
    metrics: "40% Faster Cross-Department Workflow Execution",
  },
  {
    id: "custom-development",
    stepNumber: "02",
    title: "Custom Development",
    subtitle: "Tailor-Made Modules & Specialized Extensions",
    badge: "High Flexibility",
    icon: Code2,
    content: [
      "ERP Custom Development enables businesses to build tailored ERP solutions that align perfectly with their unique workflows, operational requirements, and industry-specific processes. Unlike standard ERP systems, custom ERP development provides flexibility to add personalized modules, automate complex tasks, integrate third-party applications, and scale as the business grows.",
      "Our ERP custom development services focus on designing user-friendly, secure, and scalable solutions that improve efficiency, enhance productivity, and provide real-time business insights. From finance and inventory management to HR, CRM, and reporting dashboards, we develop customized ERP applications that help organizations streamline operations and achieve better business performance.",
    ],
    capabilities: [
      "Custom Workflow Automation & Specialized Business Logic",
      "Enterprise REST / GraphQL & Legacy Third-Party API Integration",
      "Modular Microservices & Scalable Cloud Micro-Frontends",
      "Role-Based Access Control (RBAC) & Custom Governance Portals",
    ],
    metrics: "100% Fit to Unique Industry Operating Workflows",
  },
  {
    id: "upgrade",
    stepNumber: "03",
    title: "Upgrade & Modernization",
    subtitle: "Legacy Migration to Modern Cloud Platforms",
    badge: "Performance & Security",
    icon: ArrowUpCircle,
    content: [
      "ERP Upgrade services help organizations modernize their existing ERP systems with the latest features, improved performance, enhanced security, and better user experience. Upgrading an ERP system ensures compatibility with current technologies, improves operational efficiency, and enables businesses to leverage advanced capabilities such as automation, analytics, cloud integration, and real-time reporting.",
      "Our ERP upgrade solutions focus on seamless migration, minimal business disruption, data integrity, and optimized system performance. We help businesses transition smoothly from legacy systems to upgraded platforms while ensuring scalability, reliability, and improved productivity to support future business growth.",
    ],
    capabilities: [
      "Zero-Downtime Data Migration & Schema Harmonization",
      "Legacy Monolith to Cloud-Native Architecture Transition",
      "Latest Security Patching & Strict Compliance Enforcement",
      "User Experience & Modern Mobile-Responsive Interface Overhaul",
    ],
    metrics: "Zero Business Disruption & 99.9% Data Integrity",
  },
  {
    id: "global-rollout",
    stepNumber: "04",
    title: "Global Rollout",
    subtitle: "Multi-Region, Multi-Currency Standardization",
    badge: "Multi-Country Scale",
    icon: Globe,
    content: [
      "ERP Global Rollout services help organizations successfully deploy and standardize ERP systems across multiple locations, regions, and business units worldwide. A global ERP rollout ensures consistent business processes, centralized data management, regulatory compliance, and improved collaboration across international operations.",
      "Our ERP global rollout approach focuses on strategic planning, localization, multi-country compliance, seamless data migration, user training, and change management to ensure smooth implementation across global teams. We help businesses achieve operational consistency, enhanced visibility, and scalable growth through efficient and well-managed ERP deployment strategies.",
    ],
    capabilities: [
      "Multi-Currency, Multi-Language & Regional Tax Localization",
      "Standardized Corporate Global Operating Template",
      "Cross-Border Compliance (GDPR, SOC2, Local Statutory Laws)",
      "Comprehensive Change Management & Multi-Tier User Enablement",
    ],
    metrics: "20+ Country Multi-Entity Standardization Capability",
  },
  {
    id: "support",
    stepNumber: "05",
    title: "Support & Managed Services",
    subtitle: "24/7 SLA-Backed Maintenance & Optimization",
    badge: "Mission-Critical SLA",
    icon: ShieldCheck,
    content: [
      "ERP Support services ensure the smooth functioning, maintenance, and continuous improvement of ERP systems to help businesses operate efficiently without disruptions. Effective ERP support helps organizations resolve technical issues quickly, optimize system performance, manage updates, and ensure users can maximize the value of the ERP platform.",
      "Our ERP support solutions include system monitoring, troubleshooting, performance optimization, user assistance, bug fixing and ongoing maintenance with agreed SLAs. We provide reliable and proactive support to ensure business continuity, improved productivity, and seamless ERP operations tailored to evolving business needs.",
    ],
    capabilities: [
      "24/7/365 Proactive Telemetry & Automated System Health Monitoring",
      "Strict SLA-Backed Incident Resolution (L1, L2 & L3 Engineering)",
      "Continuous Performance Tuning & Database Index Optimization",
      "Quarterly Feature Enhancements & Proactive Release Management",
    ],
    metrics: "15-Minute Critical Incident SLA Response Time",
  },
];

// Enterprise Functional Modules
const erpModules = [
  {
    title: "Financial Management & Accounting",
    desc: "Automated general ledger, accounts payable/receivable, multi-currency cash flow, audit trails, and instant financial closing.",
    icon: Building2,
    badge: "Finance & Treasury",
  },
  {
    title: "Supply Chain & Inventory",
    desc: "Real-time stock tracking across distributed warehouses, automated procurement reordering, vendor scorecards, and logistics routing.",
    icon: Boxes,
    badge: "SCM & Logistics",
  },
  {
    title: "Human Capital Management (HCM)",
    desc: "End-to-end employee lifecycle, global payroll processing, biometric attendance, talent acquisition, and compliance management.",
    icon: Users,
    badge: "HR & Workforce",
  },
  {
    title: "Manufacturing & Production (MES)",
    desc: "Bill of materials (BOM), shop-floor job card tracking, machine capacity planning, quality inspection gates, and scrap reduction.",
    icon: Factory,
    badge: "Industry 4.0",
  },
  {
    title: "CRM & Sales Operations",
    desc: "Unified customer pipelines, quote-to-cash acceleration, automated recurring billing, discount governance, and omnichannel tracking.",
    icon: TrendingUp,
    badge: "Commercial Growth",
  },
  {
    title: "Business Intelligence & Analytics",
    desc: "Executive telemetry dashboards, predictive forecasting models, KPI trend discovery, and automated regulatory reporting.",
    icon: BarChart3,
    badge: "Executive Insights",
  },
];

// Implementation Methodology Steps
const methodologySteps = [
  {
    step: "01",
    phase: "Discovery & Blueprint",
    desc: "Deep-dive business process mapping, gap analysis, stakeholder interviews, and future-state enterprise architecture definition.",
  },
  {
    step: "02",
    phase: "System Architecture & Design",
    desc: "Data modeling, security governance frameworks, infrastructure sizing, and detailed functional design specifications.",
  },
  {
    step: "03",
    phase: "Agile Build & Customization",
    desc: "Configuring core modules, developing bespoke extensions, building integration adapters, and automated testing pipelines.",
  },
  {
    step: "04",
    phase: "Data Migration & Validation",
    desc: "Legacy data sanitization, test cutovers, user acceptance testing (UAT), security penetration tests, and dry runs.",
  },
  {
    step: "05",
    phase: "Global Go-Live & Hypercare",
    desc: "Seamless production cutover, executive command center supervision, end-user enablement, and dedicated 24/7 hypercare support.",
  },
];

// Enterprise Platforms Supported
const platformsSupported = [
  { name: "SAP S/4HANA & ECC", tag: "Enterprise Core" },
  { name: "Microsoft Dynamics 365", tag: "Cloud Ecosystem" },
  { name: "Oracle NetSuite", tag: "High-Growth Cloud" },
  { name: "Odoo Enterprise", tag: "Modular Agile" },
  { name: "Custom Cloud ERP", tag: "Proprietary Architecture" },
];

export default function ERPService() {
  const [activeTab, setActiveTab] = useState<string>("implementation");
  const [h1Hovered, setH1Hovered] = useState(false);

  const currentIndex = erpServices.findIndex((s) => s.id === activeTab);
  const selectedService = erpServices[currentIndex >= 0 ? currentIndex : 0];

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + erpServices.length) % erpServices.length;
    setActiveTab(erpServices[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % erpServices.length;
    setActiveTab(erpServices[nextIndex].id);
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — ENTERPRISE ERP SOLUTIONS
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
                NEXORA TECHNOLOGY • APPLICATION SERVICES{" "}
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
              Enterprise Resource <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">Planning (ERP) Solutions</span>
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
              At Nexora Technology Services Pvt Ltd, we architect and deliver
              end-to-end ERP solutions - spanning greenfield implementation,
              custom bespoke development, high-security upgrades, multi-country
              global rollouts, and proactive 24/7 managed support.
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
                <span>Schedule ERP Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#erp-services"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_12px_28px_rgba(0,81,254,0.2)] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Service Pillars</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: OVERVIEW & IMAGE SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Our Strategic Value</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Complete ERP Solutions <br />
                <span className="text-[#0051fe]">
                  Tailored to Your Enterprise
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                From initial assessment and systems architecture to
                multi-country rollout and long-term proactive support, Nexora
                delivers enterprise-grade ERP services that streamline
                operations, unify fragmented data silos, and empower leadership
                with actionable business intelligence.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Single unified partner managing your full software lifecycle from kickoff to scaling",
                  "Deep statutory expertise in multi-entity compliance, tax regulations, and localization",
                  "Enterprise-grade security adhering to ISO, SOC2, and global data privacy standards",
                  "Modular design enabling step-by-step digital transformation without operational risk",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0051fe] flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Consult an ERP Architect
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="/components/Organization"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  About Nexora
                </Link>
              </div>
            </div>

            {/* Right Images Composite */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none pt-4 pb-10 sm:pb-14 sm:pr-8">
                {/* Ambient glow behind images */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-3xl blur-2xl -z-10" />

                {/* Primary Large Image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-white aspect-[4/3] w-full max-w-lg mx-auto">
                  <Image
                    src={img1}
                    alt="Nexora Enterprise ERP Systems & Implementation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Floating badge inside main image placed at top so bottom accent image NEVER blocks it */}
                  <div className="absolute top-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-slate-900 z-10">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="font-heading font-bold text-[11px] text-[#0051fe] uppercase tracking-wider">
                          Enterprise Orchestration
                        </p>
                        <p className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                          Unified Real-Time Business Data
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-blue-100 text-[#0051fe] text-[10px] sm:text-[11px] font-bold flex-shrink-0">
                        Full Lifecycle
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Accent Image: Floating Bottom Left */}
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 w-40 sm:w-52 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block z-20">
                  <Image
                    src={img2}
                    alt="ERP Custom Development & Integration"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11px] font-heading font-semibold">
                    Custom Workflows
                  </div>
                </div>

                {/* Tertiary Accent Image: Floating Top Right */}
                <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 w-32 sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block z-20">
                  <Image
                    src={img3}
                    alt="ERP 24/7 Managed Services & Global Rollout"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11px] font-heading font-semibold">
                    24/7 Support SLAs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: THE 5 CORE SERVICE PILLARS
          Active Pillar Spotlight Showcase with Dual Arrows
      ═══════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════
          SECTION 2: THE 5 CORE SERVICE PILLARS
          Fully Mobile-Optimized Active Pillar Showcase
      ═══════════════════════════════════════════ */}
      <section
        id="erp-services"
        className="py-12 sm:py-20 lg:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#f0f5fc] border-t border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <Workflow className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Full Lifecycle Capabilities</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black text-[#0051fe] tracking-tight leading-tight mb-3 sm:mb-4">
              Our Core ERP Service Pillars
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
              Comprehensive ERP engineering services engineered to support every
              milestone of your enterprise technology evolution — from
              greenfield deployment to continuous innovation.
            </p>
          </div>

          {/* Mobile Top Navigation & Status Bar */}
          <div className="flex sm:hidden items-center justify-between gap-2 mb-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xs text-[#0051fe] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                {selectedService.stepNumber} / 05
              </span>
              <span className="font-heading font-bold text-xs text-slate-800 truncate max-w-[150px]">
                {selectedService.title}
              </span>
            </div>

            {/* Micro Dots */}
            <div className="flex items-center gap-1">
              {erpServices.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  aria-label={`Jump to ${svc.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeTab === svc.id
                      ? "w-4 bg-[#0051fe]"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Active Pillar Spotlight Showcase Container */}
          <div className="relative flex items-center sm:gap-4 lg:gap-6 mb-6 sm:mb-10">
            {/* Desktop Left Switch Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous ERP service pillar"
              className="hidden sm:flex flex-shrink-0 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-white hover:bg-blue-50 text-[#0051fe] border border-slate-200/90 hover:border-blue-400 shadow-md hover:shadow-lg items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 z-20"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Center Showcase Card: 100% width on Mobile, no side button squeeze */}
            <div className="w-full sm:flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.28 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(0, 81, 254, 0.16)"
                    borderColor="rgba(0, 81, 254, 0.35)"
                    className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200 shadow-xl overflow-hidden relative"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
                      {/* Left Column of Card */}
                      <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="font-heading font-black text-xl sm:text-2xl text-[#0051fe]">
                            {selectedService.stepNumber}
                          </span>
                          <span className="h-4 w-px bg-slate-300" />
                          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0051fe] font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                            {selectedService.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-1 sm:mb-2">
                            {selectedService.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-[#0051fe]">
                            {selectedService.subtitle}
                          </p>
                        </div>

                        <div className="space-y-2.5 sm:space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {selectedService.content.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>

                        <div className="pt-1 sm:pt-2">
                          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-blue-50/90 text-[11px] sm:text-xs font-semibold text-[#0051fe] border border-blue-100">
                            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0051fe] flex-shrink-0" />
                            <span>Key Impact: {selectedService.metrics}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column of Card: Core Capabilities Checklist */}
                      <div className="lg:col-span-5 bg-gradient-to-br from-[#f8fafc] to-blue-50/60 p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-blue-100 space-y-3 sm:space-y-4 w-full">
                        <div className="flex items-center gap-2 font-heading font-bold text-xs sm:text-sm text-slate-900 border-b border-blue-200/60 pb-2.5 sm:pb-3">
                          <selectedService.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0051fe] flex-shrink-0" />
                          <span>Key Strategic Deliverables</span>
                        </div>

                        <div className="space-y-2.5 sm:space-y-3">
                          {selectedService.capabilities.map((cap, cIdx) => (
                            <div
                              key={cIdx}
                              className="flex items-start gap-2 sm:gap-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#0051fe] flex-shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                                {cap}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 sm:pt-4 border-t border-blue-200/60">
                          <Link
                            href="/contact"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-md transition-all duration-200 cursor-pointer"
                          >
                            Request Quote for {selectedService.title}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Right Switch Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next ERP service pillar"
              className="hidden sm:flex flex-shrink-0 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-white hover:bg-blue-50 text-[#0051fe] border border-slate-200/90 hover:border-blue-400 shadow-md hover:shadow-lg items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 z-20"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Mobile Bottom Thumb Navigation Controls */}
          <div className="flex sm:hidden items-center justify-between gap-3 mb-6">
            <button
              onClick={handlePrev}
              aria-label="Previous ERP service pillar"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white text-[#0051fe] border border-slate-200/90 shadow-sm active:bg-blue-50 font-heading font-bold text-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Pillar</span>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next ERP service pillar"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#0051fe] text-white shadow-sm active:bg-[#0041cb] font-heading font-bold text-xs cursor-pointer"
            >
              <span>Next Pillar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Horizontal Swipeable Track on Mobile / 5-Column Grid on Desktop */}
          <div className="flex gap-2.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2 pt-1 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 snap-x">
            {erpServices.map((svc) => {
              const IconComp = svc.icon;
              const isSelected = activeTab === svc.id;
              return (
                <div
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  className={`snap-start flex-shrink-0 w-[170px] sm:w-auto p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#0051fe] shadow-lg shadow-blue-500/10 ring-2 ring-[#0051fe]/20"
                      : "bg-white/80 border-slate-200/80 hover:border-blue-300 hover:bg-white shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center ${isSelected ? "bg-[#0051fe] text-white" : "bg-blue-50 text-[#0051fe]"}`}
                      >
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-heading font-bold text-xs text-slate-400">
                        {svc.stepNumber}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 mb-0.5 sm:mb-1 truncate sm:whitespace-normal">
                      {svc.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-2">
                      {svc.subtitle}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-[#0051fe]">
                    <span>{isSelected ? "Active" : "View"}</span>
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: ENTERPRISE FUNCTIONAL MODULES
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4">
              <Boxes className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Full Functional Coverage</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0051fe] tracking-tight leading-tight mb-4">
              ERP Functional Modules We Implement
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Seamlessly integrating each critical department of your
              organization to eliminate communication barriers, redundant data
              entry, and procedural bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {erpModules.map((mod, idx) => {
              const ModIcon = mod.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(0, 81, 254, 0.14)"
                  borderColor="rgba(0, 81, 254, 0.3)"
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:text-white transition-all duration-300">
                        <ModIcon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                        {mod.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-lg text-slate-900 mb-2 group-hover:text-[#0051fe] transition-colors">
                      {mod.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#0051fe]">
                    <span>Standardized &amp; Customized</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: IMPLEMENTATION METHODOLOGY
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-[#0a1e3d] to-slate-950 text-white relative overflow-hidden">
        {/* Ambient Lights */}
        <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-[#0051fe]/20 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Activity className="w-3.5 h-3.5 text-cyan-300" />
              <span>Predictable Delivery</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Proven 5-Stage Implementation Roadmap
            </h2>

            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
              We eliminate ERP delivery risks through a structured, transparent,
              and battle-tested delivery framework with quantifiable gates at
              every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-md relative flex flex-col justify-between hover:bg-white/15 hover:border-cyan-300/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-2xl text-cyan-300 group-hover:scale-110 transition-transform">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-2 leading-snug">
                    {step.phase}
                  </h3>

                  <p className="text-xs text-blue-200/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] uppercase font-mono tracking-wider text-cyan-200 font-semibold">
                  Phase 0{idx + 1} Gate
                </div>
              </div>
            ))}
          </div>

          {/* Supported Platforms Banner */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-heading font-bold text-base text-white">
                  Cross-Platform ERP Ecosystem Competency
                </p>
                <p className="text-xs text-blue-200/80">
                  Certified architectural advisory and delivery across tier-1
                  and open-source stacks
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {platformsSupported.map((plat) => (
                  <div
                    key={plat.name}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white font-heading font-semibold hover:bg-white/20 transition-colors"
                  >
                    <span>{plat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: WHY PARTNER WITH NEXORA
          Second Image Showcase + Differentiators
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Differentiators */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Why Nexora ERP</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                A Trusted Partner Across the <br />
                <span className="text-[#0051fe]">Entire ERP Lifecycle</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We combine deep technical engineering with robust functional
                domain knowledge to ensure your enterprise technology investment
                drives sustained competitive advantage.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    icon: Workflow,
                    title: "Single Partner, Full Lifecycle",
                    desc: "From blueprinting through 24/7 post-launch support — one unified engineering pod that understands your unique workflows inside and out.",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach, Local Statutory Expertise",
                    desc: "Multi-country rollout expertise ensuring seamless regional tax localization, multi-currency reporting, and statutory compliance.",
                  },
                  {
                    icon: Lock,
                    title: "Enterprise Security & High Availability",
                    desc: "Hardened infrastructure architectures built with role-based governance, automated data encryption, and 99.98% availability SLAs.",
                  },
                  {
                    icon: Gauge,
                    title: "Transparent Timelines & Quantifiable ROI",
                    desc: "Rigorous milestone-based accountability, predictable budgetary controls, and measurable efficiency gains across operational divisions.",
                  },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0051fe] flex-shrink-0 mt-0.5">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Images Composite 2 */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none pt-4 pb-10 sm:pb-14 sm:pr-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-3xl blur-2xl -z-10" />

                {/* Primary Large Image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-white aspect-[4/3] w-full max-w-lg mx-auto">
                  <Image
                    src={img3}
                    alt="Global Enterprise ERP Rollout and Implementation Support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Floating Card inside main image placed at top so bottom card NEVER blocks it */}
                  <div className="absolute top-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-slate-900 z-10">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="font-heading font-bold text-[11px] text-[#0051fe] uppercase tracking-wider">
                          Global Standard
                        </p>
                        <p className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                          Multi-Country Rollout Excellence
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-[11px] font-bold flex-shrink-0">
                        99.9% Uptime
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Card Top Right */}
                <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xl hidden sm:block max-w-[190px] z-20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-heading font-bold text-slate-900">
                      12+ Years
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Enterprise technology engineering &amp; ERP architecture
                  </p>
                </div>

                {/* Floating Card Bottom Left */}
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 p-3.5 sm:p-4 rounded-2xl bg-[#0051fe] text-white shadow-2xl hidden sm:block max-w-[210px] z-20">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                    <span className="text-xs font-heading font-bold text-white">
                      Tailored Delivery
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-100">
                    Guaranteed zero business disruption throughout transition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: PRE-FOOTER CALL TO ACTION (CTA)
          Light Blue Background & Reduced Padding
      ═══════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-blue-50/70 border-t border-blue-200/60">
        {/* Ambient Subtle Glows */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-16 right-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl z-0" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
            <span>Ready for Next-Gen Operations?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Let&apos;s Build Your <br />
            <span className="text-[#0051fe]">Enterprise ERP Success Story</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Partner with Nexora Technology Services for end-to-end ERP solutions
            that deliver measurable results — from your initial discovery and
            blueprinting to global multi-region scale and beyond.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Get in Touch with an Expert
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              href="/organization/execution-model"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Our Execution Model
              <ArrowUpRight className="w-4 h-4 text-[#0051fe]" />
            </Link>
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

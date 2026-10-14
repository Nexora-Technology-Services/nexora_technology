"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import Footer from "@/app/components/Footer";
import {
  Brain,
  Database,
  BarChart3,
  Workflow,
  Sparkles,
  Network,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Bot,
  RefreshCw,
  LineChart,
  Gauge,
  Boxes,
  Microscope,
} from "lucide-react";

// Platform items from the original page elevated with category, tags, and rich details
interface PlatformItem {
  id: string;
  name: string;
  category: "analytics" | "bi" | "automation" | "ml";
  badge: string;
  icon: React.ElementType;
  desc: string;
  capabilities: string[];
  highlight: string;
}

const platforms: PlatformItem[] = [
  {
    id: "knime",
    name: "KNIME Analytics Platform",
    category: "analytics",
    badge: "Flagship Data Science",
    icon: Microscope,
    desc: "KNIME (Konstanz Information Miner) is an open-source data analytics, machine learning, and workflow automation platform widely used for data preparation, predictive analytics, AI model development, and reporting. It provides a visual drag-and-drop interface that allows teams to build complex data pipelines without extensive coding overhead.",
    capabilities: [
      "Visual Drag-and-Drop Workflow Canvas",
      "End-to-End Predictive Analytics & AI Modeling",
      "Automated Data Blending & ETL Pipelines",
      "Seamless Integration with Python, R & SQL",
    ],
    highlight: "Zero-code to code-optional workflow automation",
  },
  {
    id: "powerbi",
    name: "Microsoft Power BI",
    category: "bi",
    badge: "Enterprise Business Intelligence",
    icon: BarChart3,
    desc: "A premier enterprise business analytics suite engineered for high-impact visual storytelling, real-time KPI dashboards, automated report distribution, and DAX-driven financial & operational modeling.",
    capabilities: [
      "Real-Time Streaming KPI Telemetry",
      "Advanced DAX Modeling & Dataflows",
      "Executive Interactive Drill-Down Reports",
      "Enterprise Azure & Microsoft 365 Sync",
    ],
    highlight: "Unified executive visibility and decision dashboards",
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "bi",
    badge: "Visual Discovery",
    icon: LineChart,
    desc: "A leading business intelligence and visual discovery platform utilized for multi-dimensional data exploration, geographic geospatial mapping, and high-concurrency analytics across distributed datasets.",
    capabilities: [
      "High-Performance In-Memory Data Engine",
      "Complex Multi-Variate Visual Analytics",
      "Geospatial & Trend Pattern Detection",
      "Self-Service Reporting for Enterprise Teams",
    ],
    highlight: "Deep visual discovery and exploratory analysis",
  },
  {
    id: "rapidminer",
    name: "RapidMiner",
    category: "ml",
    badge: "Predictive Intelligence",
    icon: Bot,
    desc: "An enterprise-grade data science and machine learning platform that empowers engineering pods to engineer predictive algorithms, automate feature selection, and streamline model lifecycle validation.",
    capabilities: [
      "Automated Machine Learning (AutoML)",
      "High-Dimensional Feature Engineering",
      "Predictive Customer & Risk Scoring",
      "Model Validation & Champion-Challenger Testing",
    ],
    highlight: "Rapid prototyping to production predictive models",
  },
  {
    id: "nifi",
    name: "Apache NiFi",
    category: "automation",
    badge: "Real-Time Ingestion",
    icon: RefreshCw,
    desc: "An enterprise open-source data integration and real-time automation engine specifically designed for high-throughput data routing, transformation, and reliable system mediation across hybrid clouds.",
    capabilities: [
      "Dynamic Data Routing & Prioritization",
      "Full Data Provenance & Lineage Tracking",
      "Backpressure Handling & Buffer Management",
      "Secure Edge-to-Cloud Distributed Transport",
    ],
    highlight: "Mission-critical real-time ingestion & transport",
  },
];

// Core service offerings
const capabilitiesList = [
  {
    icon: Database,
    title: "Enterprise Data Engineering & Lakehouses",
    badge: "Foundational Architecture",
    desc: "We design modern data lakehouses and resilient ELT/ETL pipelines using Medallion architecture (Bronze, Silver, Gold) ensuring single-source-of-truth accuracy across disparate business systems.",
    deliverables: ["Automated Data Pipelines", "Delta Lake / Warehouse Sync", "Unified Data Catalog", "Schema Governance"],
  },
  {
    icon: Brain,
    title: "Machine Learning & Predictive Modeling",
    badge: "Predictive Automation",
    desc: "From supervised classification to regression forecasting, our ML engineers build custom algorithms that accurately predict market demand, detect equipment anomalies, and prevent customer churn.",
    deliverables: ["Demand & Revenue Forecasting", "Customer Lifetime & Churn ML", "Anomaly & Fraud Detection", "Model Validation Audits"],
  },
  {
    icon: Workflow,
    title: "KNIME Workflow Automation & Low-Code AI",
    badge: "Workflow Orchestration",
    desc: "Empower non-technical analysts and data scientists alike. We build modular, repeatable KNIME workflows that automate hours of manual data wrangling and produce audit-ready automated reports.",
    deliverables: ["Visual Workflow Templates", "Multi-Source Automated Blending", "Scheduled Batch Ingestion", "Reusable Node Workflows"],
  },
  {
    icon: Sparkles,
    title: "Generative AI & Enterprise Copilots",
    badge: "Next-Gen AI Systems",
    desc: "Integrate Large Language Models (LLMs) with your enterprise knowledge bases using Retrieval-Augmented Generation (RAG). Create secure, compliant internal assistants that automate knowledge work.",
    deliverables: ["Enterprise RAG Pipelines", "Private Knowledge Assistants", "Document Summarization & Extraction", "Fine-Tuned Domain Prompts"],
  },
  {
    icon: Gauge,
    title: "Executive Business Intelligence & Dashboards",
    badge: "Visual Storytelling",
    desc: "Turn complex multi-table databases into intuitive, sub-second executive dashboards in Power BI and Tableau. Give your leadership real-time visibility into KPIs, margin trends, and operations.",
    deliverables: ["Power BI Executive Dashboards", "Tableau Visual Storyboards", "Automated KPI Alerts", "Self-Service Semantic Models"],
  },
  {
    icon: ShieldCheck,
    title: "Data Governance, Quality & MLOps",
    badge: "Enterprise Reliability",
    desc: "Ensure enterprise security, SOC2/GDPR compliance, data lineage, and continuous model health with automated drift detection and automated CI/CD deployment pipelines.",
    deliverables: ["Automated Model Drift Monitoring", "Data Lineage & Provenance", "RBAC & PII Masking Security", "Automated Retraining Triggers"],
  },
];

// Architecture Pipeline Stages
const pipelineStages = [
  {
    step: "01",
    title: "Ingest & Stream",
    platform: "Apache NiFi / Kafka / APIs",
    desc: "Real-time and batch extraction from IoT sensors, ERP systems, CRMs, and transactional databases with zero data loss.",
    color: "from-sky-500 to-blue-600",
  },
  {
    step: "02",
    title: "Cleanse & Model",
    platform: "KNIME / Lakehouses / dbt",
    desc: "Automated deduplication, schema normalization, feature transformation, and cataloging in a structured data layer.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    step: "03",
    title: "Train & Infer",
    platform: "RapidMiner / PyTorch / LLMs",
    desc: "Training predictive models, evaluating statistical accuracy, optimizing hyperparameters, and deploying low-latency endpoints.",
    color: "from-indigo-600 to-cyan-500",
  },
  {
    step: "04",
    title: "Visualize & Action",
    platform: "Power BI / Tableau / Automated Actions",
    desc: "Streaming KPIs, executive dashboards, automated alerts, and closed-loop trigger actions that drive direct ROI.",
    color: "from-cyan-500 to-emerald-500",
  },
];

// Industry Applications
const industryUseCases = [
  {
    sector: "Banking & Financial Services",
    challenge: "High transaction volumes and increasing regulatory fraud scrutiny.",
    solution: "Real-time anomaly detection pipelines and automated credit scoring models with Power BI compliance reporting.",
    impact: "94% faster fraud pattern recognition and audit-ready data lineage.",
    icon: ShieldCheck,
  },
  {
    sector: "Manufacturing & Industry 4.0",
    challenge: "Unplanned factory downtime and disparate sensor telemetry.",
    solution: "Edge data ingestion via Apache NiFi coupled with KNIME predictive maintenance models.",
    impact: "38% reduction in equipment failure and continuous shop-floor visibility.",
    icon: Boxes,
  },
  {
    sector: "Retail & Omnichannel Commerce",
    challenge: "Volatile customer demand and inefficient inventory allocation.",
    solution: "RapidMiner predictive forecasting paired with Tableau regional heatmaps and real-time restocking alerts.",
    impact: "22% reduction in stockouts and 3.1x faster trend forecasting.",
    icon: TrendingUp,
  },
  {
    sector: "Healthcare & Life Sciences",
    challenge: "Fragmented patient records and stringent HIPAA/GDPR compliance.",
    solution: "Secure ETL data cleaning pipelines, clinical predictive analytics, and anonymized research workflows.",
    impact: "Zero compliance violations and 60% faster clinical data prep.",
    icon: Microscope,
  },
];

export default function DataAIPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "analytics" | "bi" | "automation" | "ml">("all");

  const filteredPlatforms =
    activeCategory === "all"
      ? platforms
      : platforms.filter((p) => p.category === activeCategory);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f0f5fc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      
      {/* ═══════════════════════════════════════════
          HERO SECTION — ENTERPRISE DATA & AI
      ═══════════════════════════════════════════ */}
      <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white border-b border-blue-400/30 shadow-2xl">
        
        {/* Ambient Lights */}
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
                <span>NEXORA TECHNOLOGY • DATA, ML &amp; AI</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5 font-heading"
              >
                Data, ML &amp; <br />
                <span className="text-[#67e8f9] drop-shadow-sm">
                  Artificial Intelligence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal opacity-95 max-w-2xl mb-4"
              >
                At Nexora Technology Services Pvt Ltd, we help businesses unlock the power of Data, Machine
                Learning (ML), and Artificial Intelligence (AI) to drive smarter decisions, automate processes,
                and accelerate innovation. Our solutions enable organizations to transform raw data into meaningful
                insights and intelligent business outcomes.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.22 }}
                className="text-xs sm:text-sm text-blue-200/90 leading-relaxed font-normal max-w-2xl mb-8"
              >
                We provide end-to-end services including data analytics, predictive modelling, AI-powered automation,
                machine learning solutions, and intelligent dashboards tailored to business needs. From improving
                operational efficiency to enhancing customer experiences, our Data, ML, and AI services help
                businesses stay competitive in a rapidly evolving digital landscape.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28 }}
                className="flex flex-wrap items-center gap-3.5"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white text-[#0051fe] hover:bg-blue-50 shadow-md shadow-black/15 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <a
                  href="#platforms-tools"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore Platforms &amp; Tools
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </a>
              </motion.div>
            </div>

            {/* Right Column: Interactive Live Telemetry / Model Pipeline HUD */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300" />
                    </span>
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                      AI Pipeline Telemetry
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/15 text-cyan-200 border border-white/20">
                    Live Stream: Healthy
                  </span>
                </div>

                {/* Key Metric Gauges in HUD */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
                      <span>Model Precision</span>
                      <Activity className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                    <div className="text-2xl font-black text-white font-heading">99.4%</div>
                    <div className="text-[10px] text-cyan-300 font-mono mt-0.5">Top-quartile accuracy</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
                      <span>Inference Speed</span>
                      <Zap className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                    <div className="text-2xl font-black text-white font-heading">38 ms</div>
                    <div className="text-[10px] text-cyan-300 font-mono mt-0.5">Sub-second latency</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
                      <span>Events Streamed</span>
                      <Network className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                    <div className="text-2xl font-black text-white font-heading">4.2M/s</div>
                    <div className="text-[10px] text-cyan-300 font-mono mt-0.5">Distributed throughput</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-blue-200 mb-1">
                      <span>Drift Detection</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    </div>
                    <div className="text-2xl font-black text-white font-heading">0.00%</div>
                    <div className="text-[10px] text-emerald-300 font-mono mt-0.5">Zero model degradation</div>
                  </div>
                </div>

                {/* Live Connected Engines List */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-blue-200 uppercase tracking-wider mb-1.5">
                    Integrated Stack Nodes
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/20 text-xs">
                    <div className="flex items-center gap-2">
                      <Microscope className="w-4 h-4 text-cyan-300" />
                      <span className="font-medium text-white">KNIME Analytics Pipeline</span>
                    </div>
                    <span className="text-[10px] text-emerald-300 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active Node
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/20 text-xs">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-cyan-300" />
                      <span className="font-medium text-white">Power BI &amp; Tableau Sync</span>
                    </div>
                    <span className="text-[10px] text-emerald-300 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Real-time Feed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/20 text-xs">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-cyan-300" />
                      <span className="font-medium text-white">Apache NiFi Dataflow Engine</span>
                    </div>
                    <span className="text-[10px] text-emerald-300 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Streaming
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ENTERPRISE ROI & VALUE METRICS BAR
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 -mt-7 max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { metric: "10x", label: "Faster Time-to-Insight", sub: "from raw data to visual KPIs" },
            { metric: "99.9%", label: "Pipeline Reliability", sub: "enterprise SLA standards" },
            { metric: "60%", label: "Less Data Prep Overhead", sub: "with automated KNIME workflows" },
            { metric: "5+", label: "Leading Platforms", sub: "deep certified engineering bench" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-lg shadow-blue-900/5 hover:border-[#0051fe]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#0051fe] font-heading tracking-tight mb-1">
                {item.metric}
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE CAPABILITIES MATRIX (SPOTLIGHT CARDS)
      ═══════════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#0051fe] mb-2 font-heading">
            Comprehensive Offerings
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">  
              <span className="text-[#0051fe]">End-to-End </span> &amp; AI Capabilities
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-2">
            Engineered to handle your entire data lifecycle — from initial ingestion through predictive intelligence and boardroom visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilitiesList.map((cap) => {
            const Icon = cap.icon;
            return (
              <SpotlightCard
                key={cap.title}
                spotlightColor="rgba(0, 81, 254, 0.12)"
                borderColor="rgba(0, 81, 254, 0.3)"
                className="flex flex-col justify-between group hover:border-blue-400/50 bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0051fe] transition-colors">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 leading-snug group-hover:text-[#0051fe] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {cap.desc}
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-100 pt-3">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PLATFORMS & TOOLS (SPOTLIGHT)
      ═══════════════════════════════════════════ */}
      <section id="platforms-tools" className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3">
                <Gauge className="w-3.5 h-3.5" />
                <span>Platforms &amp; Tool Ecosystem</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                KNIME and Similar{" "}
              <span className="text-[#0051fe]">Data Analytics &amp; AI Tools</span>
              </h2>
              <p className="text-slate-500 text-sm max-w-xl mt-2">
                We deliver robust, end-to-end implementations across the industry&apos;s most proven data analytics, automation, and reporting suites.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
              {[
                { key: "all", label: "All Tools" },
                { key: "analytics", label: "Analytics & KNIME" },
                { key: "bi", label: "Business Intelligence" },
                { key: "ml", label: "Machine Learning" },
                { key: "automation", label: "Data Integration" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeCategory === tab.key
                      ? "bg-[#0051fe] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPlatforms.map((p) => {
                const Icon = p.icon;
                const isFlagship = p.id === "knime";

                return (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                      isFlagship
                        ? "bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 border-[#0051fe]/40 shadow-xl shadow-blue-500/5 ring-1 ring-[#0051fe]/20"
                        : "bg-white border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300"
                    }`}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                            isFlagship
                              ? "bg-[#0051fe] text-white shadow-md shadow-blue-600/30"
                              : "bg-blue-50 text-[#0051fe] border border-blue-100"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            isFlagship
                              ? "bg-[#0051fe] text-white"
                              : "bg-slate-100 text-slate-600 border border-slate-200"
                          }`}
                        >
                          {p.badge}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 leading-snug">
                        {p.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                        {p.desc}
                      </p>
                    </div>

                    <div>
                      {/* Capabilities Bullet points */}
                      <div className="border-t border-slate-100 pt-3 mb-4">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Capabilities &amp; Features
                        </div>
                        <ul className="space-y-1.5">
                          {p.capabilities.map((cap) => (
                            <li key={cap} className="flex items-center gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0051fe] shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Highlight Tag */}
                      <div className="rounded-lg bg-slate-50 border border-slate-200/80 px-3 py-2 text-[11px] font-semibold text-[#0051fe] flex items-center justify-between">
                        <span>{p.highlight}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Complementary Ecosystem Badges */}
          <div className="mt-12 p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm font-bold text-slate-900 font-heading">
                Complementary Modern Data Ecosystem
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                We also connect seamlessly with your existing cloud warehouses, lakehouses, and custom codebases.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                "Snowflake",
                "Databricks",
                "Python & Scikit-Learn",
                "PyTorch",
                "PostgreSQL",
                "LangChain & RAG",
                "Docker & Kubernetes",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          END-TO-END DELIVERY ARCHITECTURE
      ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Execution Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
            How We Build &amp; Deploy{" "}
              <span className="text-[#0051fe]">Data Solutions</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-2">
            A battle-tested 4-stage engineering lifecycle designed for fast time-to-value, airtight governance, and seamless stakeholder adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {pipelineStages.map((stage, idx) => (
            <div
              key={stage.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-heading text-slate-200">
                    {stage.step}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#0051fe] flex items-center justify-center text-xs font-bold font-mono">
                    P{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">
                  {stage.title}
                </h3>

                <div className="text-[11px] font-semibold text-[#0051fe] mb-3">
                  {stage.platform}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Production-grade validation</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INDUSTRY USE CASES & APPLIED VALUE
      ═══════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0051fe] mb-2 font-heading">
              Proven Sector Value
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
              Applied Data &amp; AI Across Core Industries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryUseCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.sector}
                  className="rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6 hover:border-blue-300 hover:bg-white transition-all duration-300 shadow-2xs"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0051fe] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      {useCase.sector}
                    </h3>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-700">Challenge: </span>
                      <span className="text-slate-600">{useCase.challenge}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#0051fe]">Solution: </span>
                      <span className="text-slate-600">{useCase.solution}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200/80">
                      <span className="font-bold text-emerald-700">Measurable Impact: </span>
                      <span className="font-medium text-emerald-900">{useCase.impact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HIGH-CONVERSION CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl bg-gradient-to-r from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Lighting */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Let&apos;s Accelerate Your Enterprise AI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight mb-5">
              Ready to Turn Your Data into a Defensible Advantage?
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mb-8">
              Whether you need to automate workflows in KNIME, build executive Power BI telemetry,
              or deploy customized machine learning models, our technical team is ready to assist.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-bold text-sm bg-white text-[#0051fe] hover:bg-blue-50 shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 text-[#0051fe]" />
              </Link>

              <a
                href="mailto:info@nexoratechnology.co.in"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                info@nexoratechnology.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GLOBAL FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />

    </div>
  );
}

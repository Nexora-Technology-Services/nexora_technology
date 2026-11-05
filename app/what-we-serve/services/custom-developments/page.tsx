"use client";

import { useState } from "react";
import Image from "next/image";
import heroBg from "@/public/images/hero-section.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/layout/footer";
import img1 from "@/public/images/img-1.jpg";
import {
  Smartphone,
  Layers,
  Cpu,
  Network,
  ShieldCheck,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Check,
  Server,
  Terminal,
  Activity,
  Code2,
  Workflow,
  Lock,
  GitBranch,
  Gauge,
  Radio,
} from "lucide-react";

// Four Core Engineering Pillars
const corePillars = [
  {
    id: "bespoke-apps",
    badge: "Omnichannel Engineering",
    title: "Bespoke Mobile & Web Applications",
    tagline:
      "Purpose-engineered client applications designed for zero friction, high engagement, and native fluidity.",
    icon: Smartphone,
    color: "#0051fe",
    gradient: "from-[#0051fe] to-[#38bdf8]",
    bullets: [
      "Cross-platform parity with React Native, Flutter, Next.js & native toolchains",
      "Offline-first sync architectures with encrypted local key-value stores",
      "Sub-100ms micro-interactions and silky smooth 60/120fps gesture-driven navigation",
      "Strict WCAG AAA accessibility, biometric authentication & instant session recovery",
    ],
    techStack: [
      "React Native",
      "Next.js",
      "Swift",
      "Kotlin",
      "WebAssembly",
      "TypeScript",
    ],
  },
  {
    id: "scalable-platforms",
    badge: "Cloud-Native Core",
    title: "Scalable Enterprise Platforms",
    tagline:
      "Mission-critical backbones engineered to expand horizontally without latency degradation or operational ceilings.",
    icon: Layers,
    color: "#0284c7",
    gradient: "from-[#0284c7] to-[#06b6d4]",
    bullets: [
      "Elastic multi-tenant SaaS kernels with dynamic automated provisioning",
      "Event-driven CQRS architectures separating write performance from read scaling",
      "Zero-downtime rolling canary deployments across geo-distributed regions",
      "Self-healing compute clusters governed by predictive auto-scaling policies",
    ],
    techStack: [
      "Kubernetes",
      "AWS EKS",
      "Terraform",
      "Kafka",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: "microservices",
    badge: "Extreme Throughput",
    title: "High-Concurrency Microservices",
    tagline:
      "Decoupled distributed services running on event loops tuned to handle peak enterprise traffic surges seamlessly.",
    icon: Cpu,
    color: "#4f46e5",
    gradient: "from-[#4f46e5] to-[#818cf8]",
    bullets: [
      "Ultra-low latency microservices coded in Go, Rust, and optimized Node.js runtimes",
      "Resilient circuit breakers, adaptive retry budgets, and distributed ratelimiting",
      "Real-time event streaming via Apache Kafka, RabbitMQ, and Redis Pub/Sub",
      "Distributed tracing with OpenTelemetry and sub-millisecond p99 SLA guarantees",
    ],
    techStack: [
      "Go",
      "Rust",
      "gRPC",
      "Apache Kafka",
      "OpenTelemetry",
      "Docker",
    ],
  },
  {
    id: "api-ecosystems",
    badge: "Secure Connectivity",
    title: "Robust API Ecosystems",
    tagline:
      "Standardized, hardened, and observable API networks built for developer adoption and ironclad enterprise endurance.",
    icon: Network,
    color: "#0d9488",
    gradient: "from-[#0d9488] to-[#10b981]",
    bullets: [
      "Clean RESTful, GraphQL, and high-performance gRPC gateway contracts",
      "Enterprise security: OAuth2, mTLS, zero-trust edge token validation & HSM keys",
      "Interactive developer portals, automated OpenAPI specs, and instant sandboxes",
      "Deterministic versioning, backward compatibility guarantees & deprecation shields",
    ],
    techStack: [
      "GraphQL",
      "gRPC",
      "Kong Gateway",
      "OAuth 2.0",
      "OpenAPI",
      "Envoy",
    ],
  },
];

// Interactive Architectural Capability Matrix
const architecturalCapabilities = [
  {
    title: "Endurance-First Engineering",
    category: "Architecture",
    desc: "Fault-isolated domains with graceful degradation pathways ensuring critical transactions never drop even under upstream outages.",
    icon: ShieldCheck,
  },
  {
    title: "High-Concurrency Message Brokers",
    category: "Event Streaming",
    desc: "Clustered Kafka and RabbitMQ pipelines processing millions of transactional events with exact-once semantics.",
    icon: Zap,
  },
  {
    title: "Geo-Distributed Caching",
    category: "Performance",
    desc: "Multi-layer cache topology combining edge CDNs with localized Redis clusters to deliver instantaneous read responses.",
    icon: Server,
  },
  {
    title: "Enterprise Zero-Trust Security",
    category: "Hardening",
    desc: "Hardware-security-module backed tokenization, end-to-end payload encryption, and automated vulnerability scanning at commit.",
    icon: Lock,
  },
  {
    title: "Automated GitOps CI/CD",
    category: "Delivery",
    desc: "Hermetic container builds, automated regression test suites, and progressive canary rollouts for confident hourly releases.",
    icon: GitBranch,
  },
  {
    title: "Full-Stack Telemetry",
    category: "Observability",
    desc: "Unified observability pipeline routing traces, metrics, and distributed structured logs into centralized proactive alerting dashboards.",
    icon: Activity,
  },
];

// Delivery Lifecycle Workflow
const engineeringRoadmap = [
  {
    stage: "01",
    phase: "Systems Architecture & Domain Modeling",
    summary:
      "Deep architectural blueprinting, domain-driven design (DDD) modeling, throughput forecasting, and threat vector analysis.",
    deliverables: [
      "Domain Boundary Maps",
      "Data Schema Schematics",
      "Throughput & Latency Budgets",
    ],
  },
  {
    stage: "02",
    phase: "Core Engine & Microservice Synthesis",
    summary:
      "Rigorous test-driven engineering of foundational microservices, database schemas, and event ingestion pipelines.",
    deliverables: [
      "Hardened API Gateways",
      "gRPC / Event Contracts",
      "Automated Contract Testing",
    ],
  },
  {
    stage: "03",
    phase: "Stress Simulation & Resilience Chaos",
    summary:
      "Synthetic load generation, chaos monkey injection, memory leak profiling, and high-concurrency bottleneck elimination.",
    deliverables: [
      "Soak & Spike Load Reports",
      "Failover Resilience Audits",
      "p99 Latency Tuning",
    ],
  },
  {
    stage: "04",
    phase: "Orchestrated Deployment & Handover",
    summary:
      "Canary rollouts, geo-replicated database syncing, telemetry dashboard provisioning, and internal engineering enablement.",
    deliverables: [
      "Zero-Downtime Migration",
      "Live Observability Deck",
      "Architecture Runbooks",
    ],
  },
];

export default function CustomDevelopments() {
  const [h1Hovered, setH1Hovered] = useState(false);
  const [activePillar, setActivePillar] = useState(0);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — HIGH IMPACT SYSTEMS HERO
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-0 md:min-h-[600px] lg:min-h-screen flex items-center pt-[92px] sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
        {/* Full Bleed Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Custom Engineering & High Concurrency Architecture"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-right select-none pointer-events-none"
            sizes="100vw"
          />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
          {/* Subtle Cyber Grid Layer */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,81,254,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,81,254,0.04)_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl lg:max-w-3xl text-left flex flex-col items-start">
            {/* Glassmorphic Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-white text-[#0051fe] text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-[0_4px_20px_rgba(0,81,254,0.18)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0051fe] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0051fe]" />
              </span>
              <span
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                HIGH-CONCURRENCY CUSTOM ENGINEERING
              </span>
            </motion.div>

            {/* Impactful Heading with Hover Glow */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              whileHover={{
                x: 6,
                transition: { type: "spring", stiffness: 350, damping: 22 },
              }}
              onMouseEnter={() => setH1Hovered(true)}
              onMouseLeave={() => setH1Hovered(false)}
              style={{
                textShadow: h1Hovered
                  ? "0 4px 18px rgba(255, 255, 255, 1), 0 0 32px rgba(186, 230, 253, 0.95), 0 0 50px rgba(147, 197, 253, 0.85)"
                  : "0 2px 10px rgba(255, 255, 255, 0.95), 0 0 20px rgba(186, 230, 253, 0.85), 0 0 35px rgba(147, 197, 253, 0.65)",
                transition: "text-shadow 0.35s ease",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight font-heading leading-[1.12] mb-4 cursor-pointer select-none"
            >
              Custom Developments <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">& High-Scale Systems</span>
            </motion.h1>

            {/* Service Thesis Lead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold leading-relaxed max-w-2xl mb-8 drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)]"
              style={{
                textShadow:
                  "0 1px 12px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(15, 23, 42, 0.08)",
              }}
            >
              Bespoke mobile and web applications, scalable platforms,
              high-concurrency microservices, and robust API ecosystems built
              for endurance.
            </motion.p>

            {/* Hero Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              >
                <span>Architect Your Solution</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#pillars"
                className="px-8 py-4 rounded-full bg-white/90 hover:bg-white text-slate-900 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md shadow-[0_8px_20px_rgba(0,81,254,0.12)] hover:shadow-[0_12px_28px_rgba(0,81,254,0.2)] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-[#0051fe]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 1: THE FOUR CORE ENGINEERING PILLARS
          Interactive Architectural Deck
      ═══════════════════════════════════════════ */}
      <section
        id="pillars"
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-16 right-10 w-[420px] h-[420px] bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 w-[420px] h-[420px] bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Core Service Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Engineered for{" "}
              <span className="text-[#0051fe]">Endurance & Speed</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We replace fragile monolithic stacks with resilient, highly
              concurrent systems tailored to your unique workflows, traffic
              peaks, and digital roadmaps.
            </p>
          </div>

          {/* Interactive Navigation Tabs for 4 Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {corePillars.map((p, idx) => {
              const PillarIcon = p.icon;
              const isActive = activePillar === idx;
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? "bg-white border-[#0051fe] shadow-[0_12px_30px_-6px_rgba(0,81,254,0.22)] -translate-y-1"
                      : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-blue-300/80 hover:shadow-md"
                  }`}
                >
                  {/* Active highlight pip */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarTab"
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0051fe] to-cyan-400 rounded-t-2xl"
                    />
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#0051fe] text-white shadow-md shadow-[#0051fe]/30"
                          : "bg-blue-50 text-[#0051fe]"
                      }`}
                    >
                      <PillarIcon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#0051fe] uppercase tracking-wider mb-1">
                      {p.badge}
                    </p>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Deep-Dive Showcase Console */}
          <div className="relative rounded-3xl bg-white border border-blue-100 shadow-[0_20px_50px_-10px_rgba(0,81,254,0.12)] p-6 sm:p-8 lg:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left 7 Cols: Pillar Specifications */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0051fe] text-xs font-bold border border-blue-200">
                      <Radio className="w-3 h-3 text-[#0051fe] animate-pulse" />
                      {corePillars[activePillar].badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                    {corePillars[activePillar].title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {corePillars[activePillar].tagline}
                  </p>

                  <div className="space-y-3 pt-2">
                    {corePillars[activePillar].bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0051fe]">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      Production Tech Ecosystem:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {corePillars[activePillar].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#0051fe] hover:text-[#0051fe] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <span>Consult Our Systems Architect</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right 5 Cols: Live Simulated Architectural Blueprint Card */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white p-6 sm:p-7 shadow-2xl border border-blue-500/30 relative overflow-hidden">
                    {/* Top Console Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="text-[11px] font-mono text-slate-400 ml-2">
                          runtime://engine.core
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        HEALTH: OPTIMAL
                      </span>
                    </div>

                    {/* Architectural Specs Simulation */}
                    <div className="space-y-4 font-mono text-xs">
                      <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                        <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                          <span>SYSTEM TARGET</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#0051fe] to-cyan-400 rounded-full w-[94%]" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-slate-300">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                          <p className="text-[10px] text-slate-400 uppercase">
                            Concurrency Mode
                          </p>
                          <p className="font-bold text-sm text-white mt-1">
                            Non-Blocking
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                          <p className="text-[10px] text-slate-400 uppercase">
                            Failover Topology
                          </p>
                          <p className="font-bold text-sm text-cyan-300 mt-1">
                            Active-Active
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-blue-400/20 text-[11px] leading-relaxed text-blue-200">
                        <p className="text-slate-400 mb-1 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                          <span>ARCHITECTURE TELEMETRY</span>
                        </p>
                        <p className="text-slate-300">
                          Distributed pipelines certified for continuous
                          zero-data-loss execution under simulated 10x traffic
                          spikes.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Nexora High-Scale V3</span>
                      <span className="text-cyan-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: ARCHITECTURAL ENDURANCE MATRIX
          Visual Proof of High-Concurrency Capabilities
      ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4">
              <Gauge className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Reliability Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Architected for{" "}
              <span className="text-[#0051fe]">
                Endurance & Peak Concurrency
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every layer of your custom platform is deliberately fortified
              against systemic bottlenecks, runaway database queries, and
              unexpected traffic surges.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {architecturalCapabilities.map((item, idx) => {
              const CapIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.07 }}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  {/* Top animated accent runner */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0051fe] to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:text-white transition-all duration-300 shadow-xs">
                        <CapIcon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
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
          SECTION 3: ARCHITECTURE SHOWCASE & STACK DEPTH
      ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual System Architecture Stack */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Ambient glow rings */}
                <div className="pointer-events-none absolute -top-8 -left-8 w-72 h-72 rounded-full bg-blue-200/50 blur-3xl z-0" />
                <div className="pointer-events-none absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-sky-200/50 blur-3xl z-0" />

                {/* Primary Photo Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10"
                >
                  <Image
                    src={img1}
                    alt="Custom High Concurrency Engineering"
                    width={600}
                    height={460}
                    className="w-full h-[400px] sm:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Overlay Narrative */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 bg-white/10 px-2.5 py-1 rounded backdrop-blur-md">
                      Production Verified
                    </span>
                    <h4 className="text-lg font-bold font-heading text-white mt-2">
                      Zero-Disruption Engineering
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                      Purpose-built backbones delivering guaranteed sub-second
                      response times across distributed client applications.
                    </p>
                  </div>
                </motion.div>

                {/* Floating Telemetry Badge 1: Peak QPS */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="absolute -top-5 -right-2 sm:-right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-100 z-20 flex items-center gap-3.5 hover:shadow-2xl transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-[#0051fe] flex items-center justify-center text-white shadow-md shadow-blue-500/25">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-xs sm:text-sm text-slate-900">
                      500,000+ QPS
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Simulated Concurrency
                    </p>
                  </div>
                </motion.div>

                {/* Floating Telemetry Badge 2: Latency SLA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 }}
                  className="absolute -bottom-5 -left-2 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-100 z-20 flex items-center gap-3.5 hover:shadow-2xl transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-xs sm:text-sm text-slate-900">
                      Zero Data Drop
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Idempotent Transactions
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Engineering Philosophy & Principles */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider shadow-xs">
                <Code2 className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>The Engineering Standard</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                Built to Withstand <br />
                <span className="text-[#0051fe]">Massive Enterprise Load</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Off-the-shelf software and bloated boilerplate cannot solve
                unique business bottlenecks. Nexora crafts custom software
                architectures that eliminate single-points-of-failure and scale
                frictionlessly as your operation grows.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Bespoke Domain Alignment",
                    desc: "Custom models mirror your unique business logic instead of forcing workflows into rigid pre-made templates.",
                  },
                  {
                    title: "Endurance-Grade Microservices",
                    desc: "Decoupled services run on async non-blocking runtimes ensuring extreme throughput and seamless regional isolation.",
                  },
                  {
                    title: "Observable & Self-Healing APIs",
                    desc: "Every API endpoint includes automated circuit-breakers, distributed tracing, and rate-limiting safeguards.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0051fe] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: DELIVERY ROADMAP & ENGINEERING PHASES
      ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4">
              <Workflow className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Rigorous Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
              Our End-to-End{" "}
              <span className="text-[#0051fe]">Delivery Lifecycle</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From architectural blueprinting through high-concurrency chaos
              testing and automated canary rollouts.
            </p>
          </div>

          {/* 4-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringRoadmap.map((step) => (
              <div
                key={step.stage}
                className="p-6 sm:p-7 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-blue-400/60 hover:bg-white hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading text-4xl font-black text-[#0051fe]/25 group-hover:text-[#0051fe] transition-colors mb-3">
                    {step.stage}
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {step.phase}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 mt-auto">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Key Outputs:
                  </p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: HIGH-IMPACT CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white shadow-[0_20px_60px_-15px_rgba(0,81,254,0.45)] border border-blue-400/30 text-center">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl z-0" />
            <div className="pointer-events-none absolute -bottom-24 right-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl z-0" />

            {/* Subtle Grid Matrix Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold uppercase tracking-wider text-cyan-200 mb-5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Engineered For Maximum Scale</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Ready to Build Robust Systems <br />
                <span className="text-[#67e8f9] drop-shadow-sm">
                  That Never Break Under Load?
                </span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Whether you are launching a bespoke web and mobile ecosystem,
                partitioning monoliths into high-concurrency microservices, or
                architecting enterprise APIs, partner with Nexora for
                endurance-grade engineering.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule Architecture Review</span>
                  <ArrowRight className="w-4 h-4 text-[#0051fe]" />
                </Link>

                <Link
                  href="/about#services"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Capabilities</span>
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

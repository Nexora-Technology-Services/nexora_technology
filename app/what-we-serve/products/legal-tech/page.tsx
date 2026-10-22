"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Scale,
  FileCheck2,
  ShieldCheck,
  Cpu,
  Lock,
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";

const productFeatures = [
  {
    icon: Cpu,
    title: "AI-Powered Contract Intelligence",
    desc: "Automate contract extraction, clause risk scoring, and non-standard term detection using enterprise-grade natural language models.",
  },
  {
    icon: FileCheck2,
    title: "End-to-End Matter Management",
    desc: "Centralize corporate legal matters, dispute resolutions, and litigation schedules with role-based permissions and real-time status dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Regulatory Compliance",
    desc: "Stay ahead of statutory mandates and jurisdiction-specific regulatory changes with proactive alerts and automated compliance audits.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Cryptographic Security",
    desc: "Zero-knowledge encryption for legal documents, SOC2 Type II compliance, tamper-evident audit trails, and multi-factor access controls.",
  },
  {
    icon: Search,
    title: "Semantic Legal Discovery",
    desc: "Instantly search across millions of contracts and legal briefs using conversational semantic search with precise citation anchoring.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Redlining & Collaboration",
    desc: "Collaborate seamlessly across legal teams, external counsel, and business stakeholders with version-controlled smart redlines.",
  },
];

export default function LegalTechPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora LegalTech Product Suite"
            fill
            priority
            quality={100}
            className="object-cover object-right select-none pointer-events-none"
            sizes="100vw"
          />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white text-[#0051fe] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
            >
              <Scale className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>NEXORA PRODUCTS • ENTERPRISE LEGAL TECH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              onMouseEnter={() => setH1Hovered(true)}
              onMouseLeave={() => setH1Hovered(false)}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4"
              style={{
                textShadow: h1Hovered
                  ? "0 4px 14px rgba(255, 255, 255, 1), 0 0 28px rgba(186, 230, 253, 0.95)"
                  : "0 2px 10px rgba(255, 255, 255, 0.95)",
              }}
            >
              Intelligent <span className="text-[#0051fe]">LegalTech</span> Platform.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              Transform corporate legal operations with AI-driven contract intelligence,
              automated risk detection, and unified matter lifecycle management.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>Request Product Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/what-we-serve/services/custom-developments"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Custom Integrations</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CAPABILITIES */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Engineered For Modern <span className="text-[#0051fe]">Legal Departments</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Accelerate contract velocity, mitigate non-compliance risks, and minimize legal spend with automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFeatures.map((feat, i) => (
              <SpotlightCard key={i} className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 shadow-sm">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

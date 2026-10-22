"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  TrendingUp,
  Globe2,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

const impactPillars = [
  {
    icon: Globe2,
    title: "Global Enterprise Scale",
    desc: "Your code and architectures power mission-critical transactions and workflows across Fortune 500 enterprises and hyper-growth scaleups.",
  },
  {
    icon: Zap,
    title: "High-Concurrency Engineering",
    desc: "Tackle hard technical problems: distributed caching, microsecond query latency, fault-tolerant pipelines, and resilient cloud architectures.",
  },
  {
    icon: Cpu,
    title: "Applied AI Innovations",
    desc: "Build next-generation production AI systems that automate complex corporate operations rather than just academic toys.",
  },
  {
    icon: ShieldCheck,
    title: "Mission-Critical Resiliency",
    desc: "Design zero-downtime, SOC2 compliant architectures that withstand high traffic surges without operational degradation.",
  },
];

export default function WorkAndImpactPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Careers - Work & Impact"
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
              <TrendingUp className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>CAREERS • MISSION & IMPACT</span>
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
              Work That <span className="text-[#0051fe]">Makes An Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              Solve challenging real-world problems. Build software that matters.
              Experience genuine engineering autonomy at every career step.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/careers/apply-for-job"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>View Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers/life-at-nts"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Life @ NTS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT AREAS */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Where You Create <span className="text-[#0051fe]">Value</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Real projects, real responsibility, and real career acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactPillars.map((item, idx) => (
              <SpotlightCard key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
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

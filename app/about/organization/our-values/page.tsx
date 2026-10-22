"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Cpu,
  Target,
  Compass,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    desc: "We relentlessly challenge conventional paradigms, adopting cutting-edge engineering toolkits to deliver unmatched speed and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    desc: "Complete transparency in our code, architecture, timelines, and commercial relationships. We treat your intellectual property like our own.",
  },
  {
    icon: HeartHandshake,
    title: "People-Centric Empathy",
    desc: "Empathetic collaboration with our partners and within our engineering pods. Great software is built by empowered humans.",
  },
  {
    icon: Cpu,
    title: "Technical Mastery",
    desc: "We don't settle for 'good enough'. Every distributed system, database schema, and interface is architected for enterprise durability.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Execution",
    desc: "We align engineering milestones directly with measurable business ROI, accelerating time-to-market without technical debt.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Evolution",
    desc: "From AI frameworks to cloud infrastructure, we continuously upskill and upgrade our capabilities to keep our clients ahead.",
  },
];

export default function OurValuesPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[550px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Technology Services - Core Values"
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
              <Compass className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>ORGANIZATION • GUIDING PRINCIPLES</span>
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
              Our Core <span className="text-[#0051fe]">Values.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              The bedrock of every architectural decision, client partnership,
              and code commit across Nexora Technology Services.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/organization/who-we-are"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Who We Are</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              What Defines <span className="text-[#0051fe]">Nexora Culture</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every deliverable reflects our commitment to technical precision and human integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <SpotlightCard key={i} className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 shadow-sm">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.desc}
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

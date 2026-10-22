"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  HelpCircle,
  FileText,
  UserCheck,
  Code2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const hiringStages = [
  {
    step: "01",
    title: "Application & Profile Review",
    desc: "Our technical recruiting team reviews your background, open-source work, or previous engineering deliverables.",
  },
  {
    step: "02",
    title: "Initial Exploratory Conversation",
    desc: "A 30-minute informal conversation to learn about your ambitions, discuss Nexora's mission, and answer your questions.",
  },
  {
    step: "03",
    title: "Technical Discussion & Code Architecture",
    desc: "A collaborative session with a principal engineer exploring system design, practical trade-offs, and architecture.",
  },
  {
    step: "04",
    title: "Values & Culture Alignment",
    desc: "Meet leaders and future pod members to understand team dynamics, mentorship opportunities, and working styles.",
  },
  {
    step: "05",
    title: "Transparent Offer & Onboarding",
    desc: "A competitive compensation offer with clear equity/bonus structures, followed by structured day-one onboarding.",
  },
];

export default function HowWeHirePage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Careers - How We Hire"
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
              <HelpCircle className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>CAREERS • SELECTION PROCESS</span>
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
              How We <span className="text-[#0051fe]">Hire.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              Transparent, respectful, and engineer-friendly. We evaluate real-world
              capabilities rather than trick questions.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/careers/apply-for-job"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers/hiring-journey"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Hiring Journey Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIRING STEPS */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Our 5-Stage <span className="text-[#0051fe]">Hiring Blueprint</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Designed to give you maximum clarity on our culture, role expectations, and technical stack.
            </p>
          </div>

          <div className="space-y-4">
            {hiringStages.map((stage, idx) => (
              <SpotlightCard key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0051fe] text-white flex items-center justify-center font-heading text-xl font-black shrink-0 shadow-md shadow-blue-500/25">
                  {stage.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-heading">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <CheckCircle2 className="w-6 h-6 text-[#0051fe] opacity-80" />
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

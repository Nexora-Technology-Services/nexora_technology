"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Coffee,
} from "lucide-react";

const journeyMilestones = [
  {
    week: "Day 1 - Week 1",
    title: "Welcome & Pod Onboarding",
    desc: "Hardware setup, access provisioning, meeting your engineering buddy, and getting introduced to company culture.",
  },
  {
    week: "Week 2 - Week 4",
    title: "Architecture Immersion & First Commit",
    desc: "Dive into repository codebases, understand CI/CD pipelines, and push your first production sprint deliverables.",
  },
  {
    week: "Month 2 - Month 3",
    title: "Full Autonomy & Client Engagement",
    desc: "Lead architectural discussions, contribute to core pods, and collaborate directly with enterprise stakeholders.",
  },
  {
    week: "Month 6+",
    title: "Leadership & Growth Milestones",
    desc: "Structured 6-month growth review, merit assessment, mentorship opportunities, and expanded technical ownership.",
  },
];

export default function HiringJourneyPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Careers - Hiring Journey"
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
              <span>CAREERS • ONBOARDING & MILESTONES</span>
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
              Your Journey <span className="text-[#0051fe]">At Nexora.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              From day one to long-term leadership, discover what your path looks like
              as an engineer or consultant at Nexora Technology Services.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/careers/apply-for-job"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>Explore Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers/culture"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Company Culture</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE MILESTONES */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              The First 180 Days &amp; <span className="text-[#0051fe]">Beyond</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We set every team member up for success with structured mentorship and clear progression roadmaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journeyMilestones.map((m, idx) => (
              <SpotlightCard key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0051fe] text-xs font-bold mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{m.week}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {m.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {m.desc}
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

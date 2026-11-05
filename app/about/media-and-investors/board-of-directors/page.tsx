"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Users,
} from "lucide-react";

const boardMembers = [
  {
    name: "Venkatesh Gothe",
    title: "Founder & Chairman",
    role: "Strategic Governance & Vision",
    initials: "VG",
    desc: "Overseeing Nexora's long-term enterprise vision, shareholder value creation, capital allocation, and executive governance across global markets.",
    focus: [
      "Enterprise Growth Strategy",
      "Capital Allocation & Expansion",
      "Executive Board Governance",
    ],
    avatarGradient: "from-[#0051fe] via-[#2563eb] to-[#0284c7]",
    badgeBg: "bg-blue-50 text-[#0051fe] border-blue-200/80",
  },
  {
    name: "Sanjana Gothe",
    title: "Director",
    role: "Corporate Oversight & Operations",
    initials: "SG",
    desc: "Directing organizational stewardship, compliance standards, and sustainable enterprise operations aligned with institutional investor objectives.",
    focus: [
      "Corporate Compliance & Standards",
      "Sustainable Operations",
      "Stakeholder Relations",
    ],
    avatarGradient: "from-[#0284c7] via-[#0051fe] to-[#1e3a8a]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200/80",
  },
];

const governancePillars = [
  {
    icon: ShieldCheck,
    title: "Fiduciary Responsibility",
    desc: "Upholding rigorous financial accountability, transparent audit oversight, and disciplined stewardship of enterprise resources.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Long-Term Value",
    desc: "Balancing quarterly performance milestones with multi-year investments in AI, engineering intellectual property, and global talent.",
  },
  {
    icon: Building2,
    title: "Global Compliance & Ethics",
    desc: "Adhering to SOC2, GDPR, and international enterprise security and confidentiality benchmarks across all delivery teams.",
  },
];

export default function BoardOfDirectorsPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[520px] flex items-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Technology Services - Board of Directors"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-right select-none pointer-events-none"
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
              <Users className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>LEADERSHIP • BOARD OF DIRECTORS</span>
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
              Board of <span className="text-[#0051fe]">Directors.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              Fiduciary leadership, strategic stewardship, and enterprise governance
              powering Nexora Technology Services Pvt. Ltd.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about/organization/leaders"
                className="px-6 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>Executive Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/media-and-investors/media"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Media & Press</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOARD MEMBERS GRID */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Governance &amp; <span className="text-[#0051fe]">Fiduciary Oversight</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Distinguished stewards ensuring accountability, ethics, and strategic direction across our global engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.map((person, idx) => (
              <SpotlightCard key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${person.avatarGradient} text-white flex items-center justify-center font-heading text-2xl font-black shadow-lg shadow-blue-500/20 shrink-0 border-2 border-white`}
                    >
                      {person.initials}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight font-heading">
                        {person.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full border ${person.badgeBg}`}
                        >
                          {person.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#0051fe] mb-3">
                    {person.role}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {person.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Governance Focus
                    </p>
                    {person.focus.map((item, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0051fe] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Nexora Technology Services
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0051fe] hover:text-[#0041cb] transition-colors"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE PILLARS */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governancePillars.map((g, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-4">
                  <g.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                  {g.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

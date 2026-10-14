"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import Footer from "@/app/components/Footer";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  FileText,
  Compass,
  CheckCircle2,
  ExternalLink,
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

const investorPillars = [
  {
    icon: TrendingUp,
    title: "Sustainable Capital Growth",
    desc: "Disciplined capital management and predictable revenue expansion across high-margin enterprise cloud, AI, and digital transformation verticals.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate Governance & Integrity",
    desc: "Strict adherence to international financial compliance, audit controls, risk mitigation, and transparent reporting frameworks.",
  },
  {
    icon: Sparkles,
    title: "Enterprise R&D & Innovation",
    desc: "Strategic reinvestment into next-generation generative AI workflows, elastic cloud systems, and high-concurrency enterprise software.",
  },
  {
    icon: Building2,
    title: "Global Market Expansion",
    desc: "Systematic scale into high-growth North American, EMEA, and APAC enterprise technology sectors through dedicated delivery pods.",
  },
];

export default function MediaPage() {
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white border-b border-blue-400/30 shadow-2xl">
        {/* Ambient Lights */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl z-0" />

        {/* Cyber Matrix Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,black_40%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <span>ORGANIZATION • MEDIA &amp; INVESTORS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 font-heading"
          >
            Media &amp;{" "}
            <span className="text-[#67e8f9] drop-shadow-sm">Investors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100 leading-relaxed font-medium opacity-95"
          >
            Leadership driving Nexora's long-term vision, corporate governance, shareholder stewardship, and official media communications.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOARD OF DIRECTORS & INVESTORS SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Strategic Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Board of Directors &amp; Investors
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Guiding Nexora's capital strategies, governance principles, and institutional growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {boardMembers.map((person, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(0, 81, 254, 0.18)"
                borderColor="rgba(0, 81, 254, 0.4)"
                className="flex flex-col justify-between p-8 bg-white/90 border border-blue-100/80 rounded-3xl shadow-[0_12px_35px_-8px_rgba(0,81,254,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(0,81,254,0.14)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    {/* Initials Avatar */}
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0051fe] hover:text-[#0041cb] transition-colors group cursor-pointer"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INVESTOR PILLARS & VALUE DRIVERS
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
              Institutional Pillars
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Governance &amp; Value Creation
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The foundational principles steering Nexora's long-term enterprise investments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {investorPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
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
      </section>

      {/* ═══════════════════════════════════════════
          MEDIA & INVESTOR CONTACT / PRESS KIT
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#edf4ff]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Media & Press Resources */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0051fe] flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                  Media &amp; Press Enquiries
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Access official press releases, corporate brand assets, leadership commentary, and executive biographies for publication.
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                    <span>Official Press Announcements &amp; Updates</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                    <span>Executive Leadership Biographies &amp; Photography</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                    <span>Brand Identity Guidelines &amp; Official Logos</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-blue-500/25 cursor-pointer"
                >
                  <span>Request Media Kit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Investor Relations Desk */}
            <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#0051fe]/20 rounded-full blur-3xl z-0" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center mb-5 backdrop-blur-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                  Investor Relations Desk
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  For institutional shareholders, strategic investment inquiries, and corporate governance correspondence.
                </p>

                <div className="space-y-3 mb-6 text-sm text-slate-300">
                  <p className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#0051fe] shrink-0" />
                    <a
                      href="mailto:info@nexoratechnology.co.in"
                      className="hover:text-white transition-colors"
                    >
                      info@nexoratechnology.co.in
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0051fe] shrink-0" />
                    <a
                      href="tel:+917483891857"
                      className="hover:text-white transition-colors"
                    >
                      +91 7483891857
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#0051fe] shrink-0" />
                    <span>Bengaluru, Karnataka, India</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 relative z-10">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  <span>Contact IR Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SHARED SITE FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

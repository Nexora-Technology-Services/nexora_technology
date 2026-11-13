"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import { Leader, getAllLeaders } from "@/data/leaders";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Quote,
  CheckCircle2,
  Briefcase,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface LeaderProfileClientProps {
  leader: Leader;
}

export default function LeaderProfileClient({ leader }: LeaderProfileClientProps) {
  const allLeaders = getAllLeaders();
  const otherLeaders = allLeaders.filter((l) => l.slug !== leader.slug);
  const firstName = leader.name.split(" ")[0];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          BREADCRUMBS & EXECUTIVE HEADER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#e3efff] via-[#edf4fe] to-[#f8fafc] border-b border-blue-100/80">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,81,254,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,81,254,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/about/organization/leaders"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-blue-200 text-slate-700 hover:text-[#0051fe] hover:border-[#0051fe]/50 font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-sm transition-all group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#0051fe]" />
              <span>Back to all leaders</span>
            </Link>

            {/* Breadcrumb Path */}
            <nav
              aria-label="Breadcrumb"
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500"
            >
              <Link
                href="/"
                className="hover:text-slate-800 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/about"
                className="hover:text-slate-800 transition-colors"
              >
                About
              </Link>
              <span>/</span>
              <Link
                href="/about/organization/leaders"
                className="hover:text-slate-800 transition-colors"
              >
                Leaders
              </Link>
              <span>/</span>
              <span className="text-[#0051fe] font-bold">{leader.name}</span>
            </nav>
          </div>

          {/* Leader Title & Tag */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#0051fe] animate-pulse" />
              {leader.roleTag}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight font-heading"
            >
              {leader.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl font-bold text-slate-600 mt-2"
            >
              {leader.title}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAIN EXECUTIVE PROFILE SECTION (SPLIT LAYOUT)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* ──────────────────────────────────────
                LEFT COLUMN: Portrait & Quick Stats
            ────────────────────────────────────── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Leader Portrait Card */}
              <div className="relative group">
                {/* Ambient glow behind image */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-tr ${leader.accentGradient} opacity-20 rounded-3xl blur-2xl group-hover:opacity-35 transition-opacity duration-500`}
                />

                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border-2 border-blue-100 shadow-[0_20px_50px_-15px_rgba(0,81,254,0.18)] bg-slate-900">
                  <Image
                    src={leader.image}
                    alt={`${leader.name} - ${leader.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                    className="object-cover object-top filter transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle glass gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Overlay badge with initials */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider">
                      {leader.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Connect & Social Media Card */}
              <SpotlightCard
                spotlightColor="rgba(0, 81, 254, 0.12)"
                borderColor="rgba(0, 81, 254, 0.3)"
                className="p-6 bg-slate-50/70 border-slate-200/80 rounded-2xl shadow-xs"
              >
                <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-4">
                  Connect Directly
                </div>

                <div className="flex flex-col gap-3">
                  {leader.social.linkedin && (
                    <a
                      href={leader.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-[#0051fe] hover:text-[#0051fe] text-slate-700 transition-all shadow-xs group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0051fe] flex items-center justify-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        <span className="text-sm font-bold">LinkedIn Profile</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0051fe] transition-colors" />
                    </a>
                  )}

                  {leader.social.email && (
                    <a
                      href={`mailto:${leader.social.email}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-[#0051fe] hover:text-[#0051fe] text-slate-700 transition-all shadow-xs group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0051fe] flex items-center justify-center">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold">{leader.social.email}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0051fe] transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>

                {/* Consultation Link */}
                <div className="mt-4 pt-4 border-t border-slate-200/80">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0051fe] hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Request Executive Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SpotlightCard>

              {/* Quick Metrics Cards */}
              {/* <div className="grid grid-cols-2 gap-3">
                {leader.stats.slice(0, 2).map((st, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-center"
                  >
                    <p className="text-2xl font-black text-slate-950 font-heading">
                      {st.value}
                    </p>
                    <p className="text-xs font-bold text-[#0051fe] uppercase tracking-wider mt-1">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* ──────────────────────────────────────
                RIGHT COLUMN: Biography, Quote & Highlights
            ────────────────────────────────────── */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* About Header with Accent Line */}
              <div>
                <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0051fe] to-cyan-500 mb-4" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight">
                  About {firstName}
                </h2>
              </div>

              {/* Full Biography Narrative */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {leader.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Executive Philosophy Quote Card */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 border-2 border-blue-200/80 shadow-[0_15px_40px_-10px_rgba(0,81,254,0.08)]">
                <Quote className="w-10 h-10 text-[#0051fe]/20 absolute top-5 right-5 pointer-events-none" />
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#0051fe] mb-3">
                  Leadership Philosophy
                </div>
                <blockquote className="text-base sm:text-lg font-semibold italic text-slate-800 leading-relaxed pr-6">
                  &quot;{leader.quote}&quot;
                </blockquote>
                <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0051fe]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {leader.name} — {leader.title}
                  </span>
                </div>
              </div>

              {/* Core Competencies & Focus Areas */}
              {/* <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0051fe]" />
                  <span>Executive Focus Areas & Competencies</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {leader.expertise.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:border-[#0051fe] hover:text-[#0051fe] hover:bg-blue-50/50 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Career Highlights / Milestones if available */}
              {/* {leader.highlights && leader.highlights.length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#0051fe]" />
                    <span>Leadership Track Record</span>
                  </h3>
                  <div className="space-y-3">
                    {leader.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                      >
                        <div>
                          <p className="text-sm font-extrabold text-slate-900">
                            {item.role}
                          </p>
                          <p className="text-xs text-slate-600 font-medium mt-0.5">
                            {item.organization}
                          </p>
                        </div>
                        {item.period && (
                          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 shrink-0">
                            {item.period}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OTHER LEADERS SECTION (EXPLORE MORE)
      ═══════════════════════════════════════════ */}
      {otherLeaders.length > 0 && (
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white via-slate-50 to-[#edf4fe] border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0051fe]">
                  Nexora Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight mt-1">
                  Meet Other Executives
                </h3>
              </div>
              <Link
                href="/about/organization/leaders"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0051fe] hover:text-blue-700 uppercase tracking-wider group"
              >
                <span>View Full Leadership Directory</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {otherLeaders.map((other) => (
                <SpotlightCard
                  key={other.slug}
                  spotlightColor="rgba(0, 81, 254, 0.14)"
                  borderColor="rgba(0, 81, 254, 0.4)"
                  className="p-6 bg-white border border-blue-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-5 items-center">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-blue-100 bg-slate-900">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-bold text-[#0051fe] uppercase tracking-wider">
                        {other.title}
                      </span>
                      <h4 className="text-lg font-black text-slate-950 font-heading truncate">
                        {other.name}
                      </h4>
                      <Link
                        href={`/about/organization/leaders/${other.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0051fe] hover:text-blue-700 mt-2 group"
                      >
                        <span>View profile</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

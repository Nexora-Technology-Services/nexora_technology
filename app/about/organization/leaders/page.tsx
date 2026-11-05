"use client";

import { useState } from "react";
import Image from "next/image";
import heroBg from "@/public/images/hero-section.png";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import { ArrowRight, Mail } from "lucide-react";
import { leaders } from "@/data/leaders";

export default function About() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — POWER BLUE PALETTE & CYBER GRID
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[550px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Technology Services - Core Values"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-right select-none pointer-events-none"
            sizes="100vw"
          />

          {/* Minimal soft top blend for floating navbar */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Left-Aligned UI Content Container */}
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-xl lg:max-w-2xl text-left">
            {/* Glassmorphic Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-white text-[#0051fe] text-xs font-bold uppercase tracking-widest mb-3.5 sm:mb-4 backdrop-blur-md shadow-[0_4px_20px_rgba(0,81,254,0.18)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0051fe] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0051fe]" />
              </span>
              <span
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              >
                ORGANIZATION • EXECUTIVE LEADERSHIP
              </span>
            </motion.div>

            {/* Impactful Heading — Solid Colors with Persistent White/Light-Blue Shadow & Animated Hover Motion */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              whileHover={{
                x: 8,
                transition: { type: "spring", stiffness: 350, damping: 22 },
              }}
              onMouseEnter={() => setH1Hovered(true)}
              onMouseLeave={() => setH1Hovered(false)}
              style={{
                textShadow: h1Hovered
                  ? "0 4px 14px rgba(255, 255, 255, 1), 0 0 28px rgba(186, 230, 253, 0.95), 0 0 45px rgba(147, 197, 253, 0.85)"
                  : "0 2px 10px rgba(255, 255, 255, 0.95), 0 0 20px rgba(186, 230, 253, 0.85), 0 0 35px rgba(147, 197, 253, 0.65)",
                transition: "text-shadow 0.35s ease",
              }}
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-slate-900 tracking-tight font-heading leading-[1.12] mb-3.5 sm:mb-4 cursor-pointer select-none inline-block"
            >
              VISIONARY LEADERSHIP <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">
                ARCHITECTING GLOBAL EXCELLENCE
              </span>
            </motion.h1>

            {/* Strategic Value Proposition (Bold Sub Text, No Shadow) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-[15px] text-slate-800 hover:text-slate-950 font-semibold leading-relaxed max-w-md mb-8 drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)] hover:drop-shadow-[0_2px_16px_rgba(255,255,255,1)] cursor-default transition-all duration-300"
              style={{
                textShadow:
                  "0 1px 12px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(15, 23, 42, 0.08)",
              }}
            >
              Meet the leaders guiding Nexora&apos;s engineering craft, rapid
              agile execution, and unwavering commitment to client value.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LEADERSHIP DIRECTORY — FEATURED PROFILES
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Contact link */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                Executive Directory
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
                The Minds Driving Nexora
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Decades of combined engineering mastery, enterprise operational
                scaling, and an unrelenting drive to help our clients lead their
                industries.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0051fe] text-white hover:bg-blue-700 text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all shrink-0 self-start md:self-auto"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Leaders Grid — Modern Nexora Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 81, 254, 0.16)"
                  borderColor="rgba(0, 81, 254, 0.38)"
                  className="h-full p-6 sm:p-7 bg-white/95 border-blue-200/90 shadow-[0_15px_45px_-15px_rgba(0,81,254,0.12)] hover:shadow-[0_22px_60px_-10px_rgba(0,81,254,0.22)] rounded-3xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    {/* Leader Photo */}
                    <Link
                      href={`/about/organization/leaders/${leader.slug}`}
                      className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 border border-blue-100 shadow-md bg-slate-900 group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.title}`}
                        fill
                        sizes="(max-width: 640px) 144px, 160px"
                        className="object-cover object-top filter transition-all duration-500 group-hover:contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    </Link>

                    {/* Leader Info */}
                    <div className="flex flex-col flex-1 justify-between text-center sm:text-left w-full h-full">
                      <div>
                        {/* Designation Pill */}
                        <div className="mb-2">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full border text-[11px] font-extrabold uppercase tracking-wider ${leader.badgeBg}`}
                          >
                            {leader.title}
                          </span>
                        </div>

                        {/* Name */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-heading tracking-tight group-hover:text-[#0051fe] transition-colors">
                          <Link
                            href={`/about/organization/leaders/${leader.slug}`}
                          >
                            {leader.name}
                          </Link>
                        </h3>

                        {/* Short Summary */}
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                          {leader.shortBio}
                        </p>
                      </div>

                      {/* Stat Teaser */}
                      <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                        <span>
                          {leader.stats[0]?.value} {leader.stats[0]?.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Profile Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/about/organization/leaders/${leader.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0051fe] group-hover:text-blue-700 transition-colors"
                    >
                      <span>View profile</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <a
                        href={leader.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect with ${leader.name} on LinkedIn`}
                        className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#0051fe] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href={`mailto:${leader.social.email}`}
                        aria-label={`Send an email to ${leader.name}`}
                        className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#0051fe] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CALL TO ACTION (CTA) BANNER
      ═══════════════════════════════════════════ */}
      {/* <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white shadow-[0_20px_60px_-15px_rgba(0,81,254,0.45)] border border-blue-400/40 text-center"> */}
      {/* Ambient Background Aura Lights */}
      {/* <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/30 text-xs font-bold uppercase tracking-wider text-cyan-200 mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                Collaborate Directly With Leadership
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-4">
                Ready to Discuss Your Next Architectural Initiative?
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                Whether you need senior architecture advisory, specialized
                engineering teams, or cloud modernization, our executive team is
                ready to connect.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Schedule Meeting</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/organization/execution-model"
                  className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Explore Execution Model</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════════════
          SHARED ENTERPRISE FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

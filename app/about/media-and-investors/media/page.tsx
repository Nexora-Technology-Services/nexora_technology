"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
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
  Users,
} from "lucide-react";

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
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[520px] flex items-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Technology Services - Media & Press"
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
              <FileText className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>CORPORATE COMMUNICATIONS • MEDIA & PRESS</span>
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
              Media &amp; <span className="text-[#0051fe]">Press Center.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              Official announcements, corporate publications, brand identity assets,
              and executive commentary from Nexora Technology Services.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about/media-and-investors/board-of-directors"
                className="px-6 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <Users className="w-4 h-4" />
                <span>Board of Directors</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Media Inquiries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL PILLARS */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Value Creation &amp; Enterprise Vision
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The foundational pillars guiding Nexora&apos;s growth and industry footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {investorPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
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

      {/* MEDIA RESOURCES & IR DESK */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#edf4ff]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Press Resources */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0051fe] flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                  Media &amp; Press Enquiries
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Access official press releases, corporate brand assets,
                  leadership commentary, and executive biographies for publication.
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
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
                  For institutional shareholders, strategic investment inquiries,
                  and corporate governance correspondence.
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
                      href="tel:+919886071933"
                      className="hover:text-white transition-colors"
                    >
                      +91 9886071933
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Contact IR Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

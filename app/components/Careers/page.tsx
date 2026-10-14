"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/app/components/Footer";
import {
  Sparkles,
  Code2,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Users,
  Handshake,
  ArrowUpRight,
  Mail,
  Check,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function CareersPage() {
  const roles = [
    {
      dept: "Engineering",
      icon: Code2,
      count: "8+ roles",
      desc: "Full-stack development, distributed backend architectures, and enterprise software engineering.",
    },
    {
      dept: "Cloud & DevOps",
      icon: Cloud,
      count: "5+ roles",
      desc: "Multi-cloud infrastructure, automated CI/CD pipelines, Kubernetes, and site reliability.",
    },
    {
      dept: "Data & AI",
      icon: Cpu,
      count: "6+ roles",
      desc: "Machine learning engineering, intelligent automation, data pipelines, and analytics platforms.",
    },
    {
      dept: "ERP Consulting",
      icon: Layers,
      count: "4+ roles",
      desc: "Enterprise SAP, Oracle, and Microsoft Dynamics implementation and technical advisory.",
    },
    {
      dept: "Quality Assurance",
      icon: ShieldCheck,
      count: "3+ roles",
      desc: "Automated test suites, end-to-end performance benchmarking, and security validation.",
    },
    {
      dept: "Talent & HR",
      icon: Users,
      count: "2+ roles",
      desc: "People operations, technical recruiting, employer branding, and organizational development.",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      desc: "Continuous learning, modern engineering toolkits, and real freedom to explore novel technologies.",
    },
    {
      icon: Handshake,
      title: "People-Centric",
      desc: "Empathetic leadership, transparent communication, inclusive teams, and mutual respect.",
    },
    {
      icon: Globe,
      title: "Remote Friendly",
      desc: "Modern hybrid culture, flexible working arrangements, and respect for personal time.",
    },
    {
      icon: TrendingUp,
      title: "Fast Growth",
      desc: "Clear merit-based career trajectories, leadership mentoring, and high-impact enterprise projects.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER (DEEP ENTERPRISE BLUE)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full pt-28 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white border-b border-blue-400/30 shadow-2xl">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute top-24 left-10 w-72 h-72 bg-[#0051fe]/30 rounded-full blur-3xl z-0" />

        {/* Cyber Matrix Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,black_40%,transparent_100%)] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-[11px] font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm select-none"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <span>Nexora Technology Services — Careers</span>
          </motion.div>

          {/* Headline (No Gradient for Text: White with Cyan Accent) */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] mb-6 font-heading max-w-4xl mx-auto"
          >
            Your Next <br className="hidden sm:inline" />
            <span className="text-cyan-200">Big Move.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal opacity-95 max-w-2xl mx-auto mb-8"
          >
            Our Careers portal is almost ready. We&apos;re bringing together the best open roles, company
            culture, and hiring experience — all in one place.
          </motion.p>

          {/* Value Pills with Lucide Icons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-2xl mx-auto mb-12"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-white transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>{v.title}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Hero Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href="mailto:hr@nexoratechnology.co.in"
              className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#0051fe]" />
              <span>Send Your CV</span>
            </a>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Talent Team</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: DEPARTMENTS HIRING SOON (COMMENTED OUT)
      ═══════════════════════════════════════════ */}
      {/*
      <section
        id="roles"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Open Positions</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Departments <span className="text-[#0051fe]">Hiring Soon</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Roles across engineering, cloud, data, consulting, and more are opening up when the portal goes live.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {roles.map((r) => {
              const IconComponent = r.icon;
              return (
                <div
                  key={r.dept}
                  className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-blue-100 hover:border-[#0051fe]/50 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs shrink-0">
                        <IconComponent className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="font-heading font-bold text-xs px-3 py-1.5 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200/80 whitespace-nowrap shadow-xs">
                        {r.count}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2">
                      {r.dept}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {r.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <Activity className="w-3.5 h-3.5 text-[#0051fe]" />
                      Positions opening soon
                    </span>
                    <span className="font-heading font-semibold text-[#0051fe] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      */}

      {/* ═══════════════════════════════════════════
          SECTION 3: VALUES & WORK CULTURE (CRISP CANVAS)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Life @ Nexora</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Built for People Who <span className="text-[#0051fe]">Build</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Nexora, we invest in our people as much as our enterprise technologies. Here is the foundation of our work culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  {/* Smooth and Slow Top Accent Bar (duration-700 ease-in-out) */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs mb-5">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2.5">
                      {v.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0051fe]">
                    <Check className="w-3.5 h-3.5 mr-1.5 text-[#0051fe]" />
                    <span>Nexora Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: INSET-ROUNDED CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#eaf2fc]/60">
        <div className="max-w-6xl mx-auto">
          {/* Inset Rounded Card */}
          <div className="relative rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-[#0051fe] via-[#0041cb] to-[#1e3a8a] text-white shadow-[0_20px_60px_-15px_rgba(0,81,254,0.45)] border border-blue-400/30 text-center">
            {/* Ambient Background Aura Lights */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl z-0" />
            <div className="pointer-events-none absolute -bottom-24 right-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl z-0" />

            {/* Cyber Matrix Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold uppercase tracking-wider text-cyan-200 mb-5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Don&apos;t Want to Wait?</span>
              </span>

              {/* Headline with No Gradient */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Send Us Your <br />
                <span className="text-cyan-200">CV Now</span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Reach out to our talent team directly. We review every application and will match you to a role when the portal opens.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:hr@nexoratechnology.co.in"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#0051fe]" />
                  <span>hr@nexoratechnology.co.in</span>
                </a>

                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GLOBAL SHARED FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}

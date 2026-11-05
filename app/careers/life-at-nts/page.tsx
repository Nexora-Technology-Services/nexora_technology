"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import Footer from "@/components/layout/footer";
import {
  Sparkles,
  HeartHandshake,
  GraduationCap,
  Award,
  BookOpen,
  Laptop,
  HeartPulse,
  Rocket,
  Coins,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Check,
  Briefcase,
  Target,
  Zap,
  Coffee,
  Code2,
} from "lucide-react";

export default function WorkingAtNTSPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  /* ── Core Cultural Pillars ── */
  const culturalPillars = [
    {
      icon: Sparkles,
      title: "Innovation with Freedom",
      desc: "We empower engineers and consultants to explore novel tech, challenge conventional thinking, and architect solutions with genuine creative autonomy.",
      metric: "Open Tech Stacks",
    },
    {
      icon: HeartHandshake,
      title: "People-First Empathy",
      desc: "Flat communication hierarchies, approachable leadership, and deep mutual respect. We treat human well-being as our highest organizational benchmark.",
      metric: "Zero Gatekeeping",
    },
    {
      icon: GraduationCap,
      title: "Continuous Upskilling",
      desc: "Annual learning stipends, sponsored certifications (AWS, SAP, Azure, GCP), and internal study teams to help you stay ahead of industry curves.",
      metric: "Funded Certifications",
    },
    {
      icon: Award,
      title: "Meritocracy & Recognition",
      desc: "Clear career ladders, frequent performance reviews, and spot awards. Contributions are recognized visibly without tenure bottlenecks.",
      metric: "Fast-Track Growth",
    },
  ];

  /* ── Comprehensive Perks & Benefits ── */
  const perks = [
    {
      icon: BookOpen,
      title: "Learning & Growth Stipend",
      desc: "Access to premium courses, global tech conference sponsorships, books, and guaranteed budgets dedicated solely to your professional evolution.",
      tag: "Career Advancement",
    },
    {
      icon: Laptop,
      title: "Modern Flexible & Hybrid Work",
      desc: "Work-life balance that respects your personal time. Enjoy flexible working models, core collaboration windows, and home workspace support.",
      tag: "Flexibility First",
    },
    {
      icon: HeartPulse,
      title: "Health & Comprehensive Wellness",
      desc: "All-inclusive medical, dental, and health coverage for you and your family, paired with dedicated wellness days and mental health support.",
      tag: "Full Family Coverage",
    },
    {
      icon: Rocket,
      title: "High-Impact Global Projects",
      desc: "Build mission-critical ERP platforms, cloud transformations, and AI applications that reshape operations for global enterprises.",
      tag: "Enterprise Impact",
    },
    {
      icon: Coins,
      title: "Competitive Compensation & Rewards",
      desc: "Market-leading salary structures, performance bonuses, transparent salary bands, and annual increments matching industry benchmarks.",
      tag: "Transparent Bands",
    },
    {
      icon: Users,
      title: "Vibrant Community & Socials",
      desc: "Hackathons, team retreats, celebratory milestones, sports leagues, and casual hangouts that turn colleagues into lifelong friends.",
      tag: "Culture & Camaraderie",
    },
  ];

  /* ── Transparent Hiring Steps ── */
  const hiringSteps = [
    {
      step: "01",
      title: "Apply or Connect",
      desc: "Share your CV or portfolio with our talent team. We review every profile with care within 48 hours — no tedious 10-page application forms.",
      badge: "Quick Review",
    },
    {
      step: "02",
      title: "Conversational Sync",
      desc: "A relaxed, 30-minute dialogue with our talent team to discuss your aspirations, work style, and see if our missions align.",
      badge: "Human-Centric",
    },
    {
      step: "03",
      title: "Practical Deep-Dive",
      desc: "A hands-on, realistic challenge or architecture discussion directly relevant to the role. No outdated whiteboard trivia.",
      badge: "Role-Relevant",
    },
    {
      step: "04",
      title: "Offer & Welcome",
      desc: "Transparent offer package, swift decisions, zero ghosting, and a dedicated buddy to ensure a smooth onboarding experience.",
      badge: "Fast Decision",
    },
  ];

  /* ── Workplace Highlights ── */
  const workplaceHighlights = [
    {
      icon: Code2,
      title: "Engineering Craftsmanship",
      desc: "From clean code reviews to automated CI/CD pipelines and microservices, our technical standard is built for scalability and elegance.",
      highlight: "Modern Tech Standards",
    },
    {
      icon: Target,
      title: "Autonomous Ownership",
      desc: "We trust our squads to take ownership of end-to-end deliverables without micromanagement, fostering pride in what we ship.",
      highlight: "High Trust Culture",
    },
    {
      icon: Zap,
      title: "Velocity & Agility",
      desc: "Decisions move quickly. Cross-functional collaboration between engineering, consulting, and product teams keeps momentum high.",
      highlight: "Frictionless Workflow",
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER (DEEP ENTERPRISE BLUE)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-0 md:min-h-[560px] lg:min-h-screen flex items-center pt-[88px] sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-16 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
        {" "}
        {/* Full Bleed Hero Background Image (Edge-to-Edge with Visible Right-Aligned NTS 3D Logo) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Technology Services - 3D Crystal NTS Identity"
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
          <div className="max-w-xl lg:max-w-2xl text-left flex flex-col items-start">
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
                Life &amp; Culture @ NTS
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
              Working @ <span className="text-[#0051fe]">NTS</span>
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
              We are building an environment where talented minds thrive,
              curiosity is celebrated, and careers accelerate. Explore our
              workplace culture, employee benefits, and what makes NTS a truly
              rewarding place to build your future.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6"
            >
              <Link
                href="/careers/apply-for-job"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 transition-all duration-200 cursor-pointer group"
              >
                <Briefcase className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>Explore Careers</span>
              </Link>
              <a
                href="mailto:hr@nexoratechnology.co.in"
                className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#0051fe]" />
                <span>Send Your CV</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CULTURE CODE & PILLARS (DISTINCT BLUE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf2fc] via-[#f0f6fd] to-[#e4eefb] border-y border-blue-200/60 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-[#0051fe]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Our Culture Code</span>
            </div>

            {/* Headline (No Gradient for Text: Dark with Primary Blue Accent) */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              The Principles That{" "}
              <span className="text-[#0051fe]">Drive Us</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe great engineering and enterprise innovation start with
              the people behind the solutions. Here is how we collaborate, lead,
              and grow together every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {culturalPillars.map((p) => {
              const PillarIcon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  {/* Smooth and Slow Top Accent Bar (duration-700 ease-in-out) */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs mb-5">
                      <PillarIcon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2.5">
                      {p.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0051fe]">
                      {p.metric}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#0051fe]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: PERKS & BENEFITS (BLUE TINT BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f4f8fe] via-[#edf4fc] to-[#f0f6fd] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>Employee Benefits</span>
            </div>

            {/* Headline (No Gradient for Text) */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Built for People Who <span className="text-[#0051fe]">Build</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We invest in your comfort, career, and long-term well-being with
              industry-leading benefits designed for modern technology
              professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {perks.map((p) => {
              const PerkIcon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  {/* Smooth and Slow Top Accent Bar (duration-700 ease-in-out) */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                        <PerkIcon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200/80">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors mb-2.5">
                      {p.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0051fe]">
                    <Check className="w-3.5 h-3.5 mr-1.5 text-[#0051fe]" />
                    <span>Included for All NTS Team Members</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: OUR HIRING JOURNEY (DEEP ROYAL BLUE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a2558] via-[#0041cb] to-[#0051fe] text-white border-y border-blue-400/30 relative overflow-hidden shadow-xl">
        {/* Ambient Lights */}
        <div className="pointer-events-none absolute -top-20 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl z-0" />

        {/* Matrix Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-cyan-200 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
              <span>Hiring Experience</span>
            </div>

            {/* Headline (No Gradient for Text) */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              How We <span className="text-cyan-200">Hire</span>
            </h2>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto opacity-90">
              Straightforward, respectful, and human. No black-box algorithms or
              endless loops — just authentic conversations with the people you
              will actually work with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step) => (
              <div
                key={step.step}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-cyan-300/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer overflow-hidden shadow-lg"
              >
                {/* Smooth and Slow Top Accent Bar for Dark Card (duration-700 ease-in-out) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-cyan-200/80 group-hover:text-cyan-200 transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/15 text-cyan-100 border border-white/20">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-100 transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed opacity-85">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/15 flex items-center text-xs text-cyan-200/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-cyan-300" />
                  <span>Transparent Milestone</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hiring CTA Banner Substrip */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm text-blue-100">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              <span>Have a question about our interview process?</span>
              <a
                href="mailto:hr@nexoratechnology.co.in"
                className="text-white font-bold underline hover:text-cyan-200 transition-colors"
              >
                Contact HR directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: WORKPLACE EXPERIENCE (SOFT SKY-BLUE BACKGROUND)
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#e8f2fc] via-[#f1f6fd] to-[#f8fafc] border-b border-blue-200/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider shadow-xs">
                <Coffee className="w-3.5 h-3.5 text-[#0051fe]" />
                <span>Workplace Atmosphere</span>
              </div>

              {/* Headline (No Gradient for Text) */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Where Every Voice <br />
                <span className="text-[#0051fe]">Matters</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Nexora, culture is not a slide deck — it is the sum of daily
                interactions between teams who love crafting enterprise
                technology. We remove friction so you can focus on building work
                you are proud of.
              </p>

              <div className="pt-2 space-y-3">
                {[
                  "Bi-weekly tech lightning talks & cross-functional demos",
                  "Direct mentorship pairing with seasoned domain architects",
                  "Structured compensation reviews with clear milestone criteria",
                  "Celebration of individual achievements and team milestones",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0051fe] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/careers/apply-for-job"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-[#0051fe] hover:bg-[#0041cb] text-white shadow-md shadow-[#0051fe]/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  View Open Roles
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Feature Cards */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {workplaceHighlights.map((w) => {
                const WIcon = w.icon;
                return (
                  <div
                    key={w.title}
                    className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-blue-100 hover:border-[#0051fe]/60 shadow-[0_4px_20px_-4px_rgba(0,81,254,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,81,254,0.16)] transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Smooth and Slow Top Accent Bar (duration-700 ease-in-out) */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051fe] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-10" />

                    <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:border-[#0051fe] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs shrink-0">
                      <WIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#0051fe] transition-colors">
                          {w.title}
                        </h3>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200/80">
                          {w.highlight}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {w.desc}
                      </p>
                    </div>

                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#0051fe] group-hover:translate-x-1 transition-all shrink-0 hidden sm:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: INSET-ROUNDED CTA BANNER
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
                <span>Ready for Your Next Career Step?</span>
              </span>

              {/* Headline with No Gradient */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight mb-5 leading-tight">
                Join the Builders at <br />
                <span className="text-cyan-200">Nexora Technology</span>
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl mx-auto opacity-95">
                Whether you are an enterprise consultant, full-stack engineer,
                cloud architect, or talent specialist, there is a space for your
                skills and ambitions at NTS. Reach out to our talent team today.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:hr@nexoratechnology.co.in"
                  className="px-8 py-3.5 rounded-full bg-white text-[#0051fe] hover:bg-blue-50 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#0051fe]" />
                  <span>Send Your CV</span>
                </a>

                <Link
                  href="/careers/apply-for-job"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Careers</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Contact HR</span>
                  <ArrowRight className="w-4 h-4 text-cyan-300" />
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

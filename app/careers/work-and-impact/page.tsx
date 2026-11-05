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
  Leaf,
  Users2,
  Cpu,
  Compass,
  GraduationCap,
  Briefcase,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function WorkAndImpactPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  /* ── Work With Purpose Pillars ── */
  const purposePillars = [
    {
      title: "Sustainability",
      badge: "Environmental & Ethical Impact",
      icon: Leaf,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accentGlow: "rgba(16, 185, 129, 0.15)",
      accentBorder: "rgba(16, 185, 129, 0.35)",
      summary:
        "We embed sustainability into our client work and operate our business with a strong commitment to the environment, ethics and human rights. We work to create value in communities around the world.",
      highlights: [
        "Responsible cloud & lean architectural efficiency",
        "Environmental stewardship & sustainable engineering",
        "Measurable value creation in global communities",
      ],
    },
    {
      title: "Inclusion & diversity",
      badge: "Belonging & Meritocracy",
      icon: Users2,
      iconBg: "bg-blue-50 text-[#0051fe] border-blue-100",
      accentGlow: "rgba(0, 81, 254, 0.18)",
      accentBorder: "rgba(0, 81, 254, 0.4)",
      summary:
        "We are committed to equal opportunity, a workplace free from bias and providing all of our people with the opportunity to thrive and unlock their full potential. We are a meritocracy. Our intention is to foster a culture and a workplace in which all of our people feel a sense of belonging.",
      highlights: [
        "Meritocracy where contributions define trajectory",
        "Zero-bias culture fostering genuine belonging",
        "Empowering every voice to lead and innovate",
      ],
    },
    {
      title: "Responsible AI",
      badge: "Trust & Intentional Innovation",
      icon: Cpu,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      accentGlow: "rgba(99, 102, 241, 0.18)",
      accentBorder: "rgba(99, 102, 241, 0.4)",
      summary:
        "Powerful AI tools like generative AI bring unprecedented opportunities as well as new risks. We help clients to take intentional actions to design, deploy and use AI to create value and build trust.",
      highlights: [
        "Ethical guardrails and explainable AI pipelines",
        "Mitigating risks while compounding enterprise value",
        "Building human-centered AI systems people trust",
      ],
    },
  ];

  /* ── Become Your Next Best Self Pillars ── */
  const growthPillars = [
    {
      title: "Grow with purpose",
      tag: "Career Horizons",
      icon: Compass,
      desc: "Whether this is your first full-time role or you're joining us as an executive, there's space to grow. Our breadth and depth of expertise across industries means you can easily explore and develop your skills and interests.",
      linkText: "Explore Career Areas",
      linkHref: "/careers/apply-for-job",
      statsBadge: "Endless Pathways",
    },
    {
      title: "Keep learning",
      tag: "Skill Advancement",
      icon: GraduationCap,
      desc: "Continuous learning is essential for growth. That's why we invest substantially in learning and development for all of our people. No matter your function, industry or business expertise, you'll get the skills you need for ongoing success.",
      linkText: "Discover Life at Nexora",
      linkHref: "/careers/life-at-nts",
      statsBadge: "Continuous Upskilling",
    },
  ];

  /* ── Stay Connected Channels ── */
  const stayConnectedCards = [
    {
      title: "Join us",
      tag: "Open Roles",
      icon: Briefcase,
      body: "Explore open roles that match your interests and skills.",
      cta: "Search jobs",
      href: "/careers/apply-for-job",
    },
    {
      title: "Stay in touch",
      tag: "Insights & Stories",
      icon: BookOpen,
      body: "Get career tips, culture highlights and industry-leading insights.",
      cta: "Learn more",
      href: "/careers/life-at-nts",
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full min-h-[560px] flex items-center pt-28 pb-18 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Technology - Careers, Work and Impact"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-right select-none pointer-events-none"
            sizes="100vw"
          />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-white text-[#0051fe] text-xs font-bold uppercase tracking-widest mb-5 shadow-sm"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>CAREERS • WORK & IMPACT</span>
            </motion.div>

            {/* Verbatim Headline from Source */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              onMouseEnter={() => setH1Hovered(true)}
              onMouseLeave={() => setH1Hovered(false)}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-5"
              style={{
                textShadow: h1Hovered
                  ? "0 4px 14px rgba(255, 255, 255, 1), 0 0 28px rgba(186, 230, 253, 0.95)"
                  : "0 2px 10px rgba(255, 255, 255, 0.95)",
              }}
            >
              Here, anything <span className="text-[#0051fe]">is possible</span>
            </motion.h1>

            {/* Verbatim Subheadline from Source */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-7"
            >
              Thrive and collaborate with extraordinary people, build in‑demand
              skills, and create meaningful change for clients, communities, and
              the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/careers/apply-for-job"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <span>View Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#work-with-purpose"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Explore Our Impact</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. WORK WITH PURPOSE SECTION ── */}
      <section
        id="work-with-purpose"
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f1f6fd] to-[#f8fafc] border-b border-slate-200/60"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Verbatim Content */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE PURPOSE & IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Work with <span className="text-[#0051fe]">purpose</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Be part of creating positive change and making the world better for
              our people, our clients, and the communities where we live and
              work.
            </p>
          </div>

          {/* 3 Pillars Grid: Sustainability, Inclusion & Diversity, Responsible AI */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {purposePillars.map((pillar, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor={pillar.accentGlow}
                borderColor={pillar.accentBorder}
                className="flex flex-col justify-between h-full bg-white/80 border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${pillar.iconBg}`}
                    >
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="space-y-2.5">
                    {pillar.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-600 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0051fe] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BECOME YOUR NEXT BEST SELF SECTION ── */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Verbatim Content */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>CONTINUOUS EVOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Become your next <span className="text-[#0051fe]">best self</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We value continuous learning and curiosity because there’s always
              more to know, from new technologies to skills that you’ll need as
              your career advances.
            </p>
          </div>

          {/* 2 Featured Banners: Grow with purpose & Keep learning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthPillars.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/20 to-white border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,81,254,0.1)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] shadow-sm group-hover:scale-105 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#0051fe] bg-white px-3 py-1 rounded-full border border-blue-100 shadow-xs">
                      {item.statsBadge}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0051fe] hover:text-[#0043d4] transition-colors group/link"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. STAY CONNECTED SECTION ── */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#eff6ff] to-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>YOUR JOURNEY STARTS HERE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
              Stay <span className="text-[#0051fe]">connected</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Take the next step in shaping your career trajectory with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {stayConnectedCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-7 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0051fe]/40 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] mb-5 shadow-xs">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {card.body}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-50 hover:bg-[#0051fe] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0051fe] text-xs font-bold uppercase tracking-wider transition-all duration-200 group"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Users,
  TrendingUp,
  Heart,
  ShieldCheck,
  Award,
  Compass,
  Eye,
  Target,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Customer Success",
    desc: "We dedicate ourselves to our clients' long-term growth, aligning our technology roadmaps with their tangible business outcomes and satisfaction.",
  },
  {
    icon: TrendingUp,
    title: "Innovation Growth",
    desc: "We foster relentless curiosity, embracing transformative technologies and forward-thinking engineering to drive continuous advancement.",
  },
  {
    icon: Heart,
    title: "Compassion and Respect",
    desc: "We prioritize people first, building empathetic connections, nurturing diverse talent, and championing mutual dignity across every team.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity and Respect",
    desc: "We uphold unwavering honesty, transparency, and accountability in our partnerships, code, architectures, and governance.",
  },
  {
    icon: Award,
    title: "Collaboration and Excellence",
    desc: "We unite collective expertise with uncompromising engineering craft, delivering world-class solutions that set enterprise benchmarks.",
  },
];

export default function OurValuesPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* Hero Section */}
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
              <span>ORGANIZATION • GUIDING PRINCIPLES</span>
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
              Our Core <span className="text-[#0051fe]">Values.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              The bedrock of every architectural decision, client partnership,
              and code commit across Nexora Technology Services.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#core-values"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Core Values</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0051fe] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              PURPOSE & DIRECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mt-3 mb-4">
              Our Vision & <span className="text-[#0051fe]">Mission</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Guiding our journey as we empower organizations to thrive in an evolving digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/40 border border-blue-200/60 shadow-lg shadow-blue-500/5 flex flex-col justify-between overflow-hidden group hover:border-[#0051fe]/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0051fe] text-white flex items-center justify-center mb-6 shadow-md shadow-[#0051fe]/25">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold tracking-widest text-[#0051fe] uppercase">
                  OUR PURPOSE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1 mb-4">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  To be a trusted technology partner, empowering businesses through innovation, talent and digital transformation.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-sky-50/70 via-white to-blue-50/40 border border-sky-200/60 shadow-lg shadow-blue-500/5 flex flex-col justify-between overflow-hidden group hover:border-[#0051fe]/40 transition-all"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0051fe] text-white flex items-center justify-center mb-6 shadow-md shadow-[#0051fe]/25">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-extrabold tracking-widest text-[#0051fe] uppercase">
                  OUR COMMITMENT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1 mb-4">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  To deliver innovative, agile and reliable technology solutions that help our clients achieve measurable business growth and lasting success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section id="core-values"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#0051fe] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              OUR BELIEFS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mt-3 mb-4">
              Core Values That <span className="text-[#0051fe]">Drive Us</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              The fundamental principles that guide our everyday culture, collaboration, and client deliverables.
            </p>
          </div>

          {/* Dynamically Aligned Dynamic Grid: responsive, auto-centering for 5 cards */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-7">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="w-full md:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] max-w-md lg:max-w-none flex"
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 81, 254, 0.16)"
                  borderColor="rgba(0, 81, 254, 0.4)"
                  className="w-full flex flex-col justify-between p-7 sm:p-8 bg-white/95 border-blue-200/80 shadow-[0_10px_30px_-6px_rgba(0,81,254,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(0,81,254,0.18)] rounded-3xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border border-blue-200/80 flex items-center justify-center text-[#0051fe] shadow-sm group-hover:scale-105 group-hover:bg-[#0051fe] group-hover:text-white transition-all duration-300">
                        <v.icon className="w-6 h-6 transition-colors duration-300" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-[#0051fe] transition-colors">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 font-heading tracking-tight group-hover:text-[#0051fe] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {v.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#0051fe] transition-colors">
                    <span className="uppercase tracking-wider text-[11px] font-bold">Nexora Principle</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-[#0051fe] group-hover:scale-125 transition-all" />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

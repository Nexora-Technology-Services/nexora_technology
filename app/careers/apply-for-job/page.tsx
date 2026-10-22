"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Briefcase,
  Mail,
  Send,
  MapPin,
  Clock,
  ArrowRight,
  Code2,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const openRoles = [
  {
    title: "Senior Full-Stack Engineer (Next.js / Node.js)",
    dept: "Engineering",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-Time",
    icon: Code2,
    desc: "Architect high-performance distributed systems, modern React/Next.js interfaces, and scalable REST/GraphQL APIs.",
  },
  {
    title: "Lead Cloud & DevOps Architect",
    dept: "Cloud & Infrastructure",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-Time",
    icon: Cloud,
    desc: "Oversee multi-cloud deployments (AWS/Azure/GCP), Kubernetes orchestrations, terraform automation, and security posture.",
  },
  {
    title: "AI & Machine Learning Engineer",
    dept: "Data & AI Pod",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-Time",
    icon: Cpu,
    desc: "Build LLM-augmented workflow engines, custom embeddings, predictive telemetry, and production machine learning pipelines.",
  },
  {
    title: "Enterprise ERP Solutions Consultant",
    dept: "ERP Advisory",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-Time",
    icon: Layers,
    desc: "Design end-to-end ERP migration roadmaps, custom modules, business process optimization, and multi-tier integrations.",
  },
];

export default function ApplyForJobPage() {
  const [h1Hovered, setH1Hovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora Careers - Apply For Job"
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
              <Briefcase className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>CAREERS • OPEN ROLES & APPLICATION</span>
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
              Apply For <span className="text-[#0051fe]">Your Next Role.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-xl mb-6"
            >
              Join a team of passionate engineers, architects, and problem solvers
              building the future of enterprise software.
            </motion.p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hr@nexoratechnology.co.in"
                className="px-7 py-3 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send CV Directly</span>
              </a>
              <Link
                href="/careers/hiring-journey"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Hiring Journey</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f0f6ff] to-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
              Featured <span className="text-[#0051fe]">Opportunities</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore our current engineering, cloud, and consulting openings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, idx) => (
              <SpotlightCard key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200">
                      {role.dept}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {role.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {role.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-[#0051fe]" />
                    <span>{role.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`mailto:hr@nexoratechnology.co.in?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
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

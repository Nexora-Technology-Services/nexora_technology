"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroBackground from "@/app/Photo/hero-background.png";
import SpotlightCard from "./components/ui/SpotlightCard";
import Footer from "./components/Footer";
import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Layers,
      title: "ERP & Digital Transformation",
      desc: "End-to-end modernization of legacy architectures into agile, cloud-native ERPs and collaborative platforms.",
      tag: "Modernization",
      href: "/components/ERPService",
    },
    {
      icon: Smartphone,
      title: "Modern Web & Mobile Apps",
      desc: "Ultra-responsive, fluid web applications and native mobile experiences delivering Framer-grade polish and speed.",
      tag: "Cross-Platform",
      href: "/components/ProductDevelopment",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Architecture",
      desc: "Resilient multi-cloud infrastructure, automated CI/CD pipelines, and microservices built for 99.99% availability.",
      tag: "AWS • Azure • GCP",
      href: "/services/cloud-solution",
    },
    {
      icon: Code2,
      title: "Custom Software Engineering",
      desc: "Bespoke high-performance software architectures built around your exact business workflows and high-scale ambitions.",
      tag: "Full-Cycle",
      href: "/components/CustomDevelopment",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Quality Assurance",
      desc: "Automated regression testing, load simulations, and security auditing ensuring flawless zero-defect releases.",
      tag: "Automated QA",
      href: "/services/Quality-Assurance",
    },
    {
      icon: Cpu,
      title: "Data & Applied AI Solutions",
      desc: "Predictive analytics, intelligent automation, and custom LLM workflows to turn enterprise data into actionable leverage.",
      tag: "AI & ML",
      href: "/services/dataAi",
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900">
      
      {/* ═══════════════════════════════════════════
          HERO SECTION WITH 3D CRYSTAL BACKGROUND
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background Image: 3D Crystal Glass Lettering Graphic */}
        <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden">
          <Image
            src={heroBackground}
            alt="Nexora Technology Services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left md:object-center"
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-16 pt-32 sm:pt-36 pb-20 flex flex-col justify-center">
          
          <div className="max-w-lg lg:max-w-[480px] text-left">
            {/* Framer-Style Floating Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 border border-blue-200/80 shadow-[0_4px_16px_rgba(0,81,254,0.1),0_2px_8px_rgba(255,255,255,0.9)] hover:border-[#0051fe]/60 hover:shadow-[0_6px_22px_rgba(0,81,254,0.2)] backdrop-blur-md mb-6 cursor-default transition-all duration-300 select-none group"
            >
              <span className="w-2 h-2 rounded-full bg-[#0051fe] animate-pulse group-hover:scale-125 transition-transform" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#0051fe] uppercase transition-colors">
                NEXT-GEN DIGITAL & CLOUD ENGINEERING
              </span>
            </motion.div>

            {/* Hero Headline with pure white glow */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-slate-950 leading-[1.08] mb-5 select-none cursor-default group"
              style={{
                textShadow:
                  "0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.95), 0 0 60px rgba(255, 255, 255, 0.75), 0 2px 4px rgba(15, 23, 42, 0.08)",
              }}
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                Empowering Ideas.
              </span>{" "}
              <br />
              <span
                className="inline-block text-[#0051fe] transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{
                  textShadow:
                    "0 0 25px rgba(255, 255, 255, 1), 0 0 45px rgba(255, 255, 255, 0.95), 0 0 65px rgba(255, 255, 255, 0.65)",
                }}
              >
                Engineering the Future.
              </span>
            </motion.h1>

            {/* Hero Subtitle with soft interactive focus */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-[15px] text-slate-800 hover:text-slate-950 font-semibold leading-relaxed max-w-md mb-8 drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)] hover:drop-shadow-[0_2px_16px_rgba(255,255,255,1)] cursor-default transition-all duration-300"
              style={{
                textShadow: "0 1px 12px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(15, 23, 42, 0.08)",
              }}
            >
              Nexora architects high-performance software, cloud ecosystems, and AI solutions. We partner with ambitious enterprises to innovate, scale, and lead in a digital-first era.
            </motion.p>

            {/* Hero Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 drop-shadow-[0_4px_16px_rgba(255,255,255,0.6)]"
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_10px_25px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_16px_34px_-4px_rgba(0,81,254,0.65)] flex items-center gap-2 transition-all duration-200 cursor-pointer group"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#capabilities"
                  className="px-8 py-4 rounded-full bg-white/95 hover:bg-white text-slate-900 hover:text-[#0051fe] text-xs sm:text-sm font-bold flex items-center gap-2 border border-slate-200/90 shadow-[0_4px_16px_-2px_rgba(15,23,42,0.08),0_0_0_1px_rgba(255,255,255,0.9)_inset] hover:shadow-[0_10px_28px_-4px_rgba(0,81,254,0.2)] backdrop-blur-md transition-all duration-200 cursor-pointer group"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0051fe] group-hover:translate-x-1.5 transition-all" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE CAPABILITIES / SPOTLIGHT BENTO GRID
      ═══════════════════════════════════════════ */}
      <section id="capabilities" className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#f4f8fe] overflow-hidden">
        
        {/* Luminous Ambient Glow Background */}
        <div className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0051fe]/12 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
                Solutions Engineered for{" "}<br></br>
                <span className="text-[#0051fe]">
                  Scale & Performance
                </span>
              </h2>
            </div>
          </div>

          {/* Interactive Spotlight Bento Grid with Rich Blue Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group block h-full focus:outline-none"
                >
                  <SpotlightCard
                    spotlightColor="rgba(0, 81, 254, 0.22)"
                    borderColor="rgba(0, 81, 254, 0.45)"
                    contentClassName="h-full flex flex-col justify-between"
                    className="h-full min-h-[290px] cursor-pointer bg-gradient-to-br from-white/95 via-blue-50/40 to-white/90 border-blue-200/80 shadow-[0_10px_30px_-5px_rgba(0,81,254,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(0,81,254,0.18)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(0,81,254,0.4)] group-hover:scale-110">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="relative overflow-hidden px-3.5 py-1 rounded-full bg-blue-100 text-[11px] font-bold text-[#0051fe] border border-blue-200/90 transition-colors duration-500 ease-out group-hover:border-[#0051fe] group-hover:shadow-[0_4px_16px_rgba(0,81,254,0.35)]">
                          {/* Left-to-Right Animated Fill Layer */}
                          <span className="absolute inset-0 bg-[#0051fe] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
                          <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-white">
                            {item.tag}
                          </span>
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#0051fe] transition-colors duration-400 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-blue-100/90 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0051fe] group-hover:underline transition-colors duration-300">
                        Learn More
                      </span>
                      <div className="relative overflow-hidden w-8 h-8 rounded-full bg-blue-50 text-[#0051fe] border border-blue-200 flex items-center justify-center transition-colors duration-500 ease-out shadow-sm group-hover:border-[#0051fe] group-hover:shadow-[0_4px_16px_rgba(0,81,254,0.4)]">
                        {/* Left-to-Right Animated Fill Layer */}
                        <span className="absolute inset-0 bg-[#0051fe] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
                        <ArrowUpRight className="relative z-10 w-4 h-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FUTURISTIC FROSTED GLASS FOOTER
      ═══════════════════════════════════════════ */}
      <Footer />

    </div>
  );
}

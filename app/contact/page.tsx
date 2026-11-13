"use client";

import { useState } from "react";
import Image from "next/image";
import heroBg from "@/public/images/hero-section.png";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  MessageSquare,
  Loader2,
  HelpCircle,
  ChevronDown,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [h1Hovered, setH1Hovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setErrorMessage(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setSending(false);
      setErrorMessage("Web3Forms access key is missing. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Project Brief from Nexora Website",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service || "General Inquiry",
          message: formData.message,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => {
          setSent(false);
        }, 5000);
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMessage("Network error occurred while transmitting your brief. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: "Global Headquarters",
      value:
        "# 44/1, 2nd Floor, 16th Cross, Jayanagar, 7th Block (west), K.R. Road",
      subvalue: "Bengaluru, Karnataka - 560070, India",
      action:
        "https://www.google.com/maps/place/12%C2%B055'20.0%22N+77%C2%B034'25.8%22E",
      actionLabel: "View on Google Maps",
    },
    {
      icon: Mail,
      label: "Official Inquiries",
      value: "info@nexoratechnology.co.in",
      subvalue: "Typically replies in < 4 business hours",
      action: "mailto:info@nexoratechnology.co.in",
      actionLabel: "Send an Email",
    },
    {
      icon: Phone,
      label: "Direct Phone & WhatsApp",
      value: "+91 98860 71933",
      subvalue: "Mon–Fri from 9:00 AM to 6:00 PM IST",
      action: "tel:+919886071933",
      actionLabel: "Call Directly",
    },
    {
      icon: Clock,
      label: "Operating Hours",
      value: "Monday – Friday: 9:00 AM – 6:00 PM",
      subvalue: "24/7 Priority Emergency Support for Enterprise Clients",
      action: null,
      actionLabel: null,
    },
  ];

  const serviceOptions = [
    "Custom Software Engineering",
    "Cloud & DevOps Architecture",
    "Data & Applied AI Solutions",
    "Digital Transformation & ERP",
    "Mobile & Web Applications",
    "Enterprise Quality Assurance",
    "General Technical Consulting",
    "Other",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nexora-technology-services-pvt-ltd",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://x.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "How fast can we initiate a new project with Nexora?",
      a: "Following an initial discovery session, we assemble dedicated engineering teams and present an actionable architecture roadmap and sprint plan within 3 to 5 business days.",
    },
    {
      q: "Do we retain full Intellectual Property (IP) ownership?",
      a: "Yes, 100%. All source code, design assets, database schemas, and documentation created during our engagement belong exclusively to your organization under standard NDA & IP transfer agreements.",
    },
    {
      q: "Can Nexora provide dedicated engineering teams for long-term roadmaps?",
      a: "Absolutely. We provide dedicated agile teams — comprising senior full-stack engineers, cloud architects, QA leads, and scrum masters — fully aligned with your timezone and workflow.",
    },
    {
      q: "What security and confidentiality measures are in place?",
      a: "We operate with strict enterprise security protocols, SOC2 compliant workflows, role-based access management, and enforceable mutual NDAs before any technical discussions begin.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — LANDING PAGE CTA POWER PALETTE & CYBER GRID
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-b border-sky-200/70 bg-[#c5dfff]">
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
                START A CONVERSATION • 24H RESPONSE
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
              Let&apos;s Engineer Your Next <br className="hidden sm:inline" />
              <span className="text-[#0051fe]">BreakThrough Together</span>
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
              Partner with senior architects and dedicated engineering teams to
              build, scale, and modernize your mission-critical digital systems.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-5 sm:mb-6"
            ></motion.div>

            {/* Enterprise Trust & Capability Metrics (Positioned Perfectly Inside Viewport) */}
            {/* <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-blue-200/70 max-w-xl"
            >
              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-200/80 flex items-center justify-center text-[#0051fe] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    &lt;24H Response
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-200/80 flex items-center justify-center text-[#0284c7] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Direct Architect
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/95 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-200/80 flex items-center justify-center text-cyan-700 shrink-0">
                  <Earth className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Global Pods
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAIN INTERACTIVE CONTACT INTERFACE — VERTICALLY ALIGNED
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#f1f6fe] to-[#f8fafc]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Direct Channels Container (Vertically Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 h-full relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#ebf3ff] via-[#e2eeff] to-[#d6e7fe] border border-blue-200/90 shadow-[0_16px_45px_-10px_rgba(0,81,254,0.15)] flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Accent Orbs for Direct Channels */}
            <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-[#0051fe]/12 rounded-full blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 w-44 h-44 bg-sky-400/12 rounded-full blur-2xl" />

            {/* Header info badge */}
            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/95 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                Direct Channels
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-heading">
                We&apos;re Here to Help You Innovate
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium">
                Connect with our advisory and engineering leaders directly
                through your preferred channel.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-3.5 relative z-10">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <SpotlightCard
                    key={idx}
                    spotlightColor="rgba(0, 81, 254, 0.18)"
                    borderColor="rgba(0, 81, 254, 0.45)"
                    className="p-4 sm:p-4.5 bg-white/95 border-blue-200/90 shadow-[0_6px_20px_-4px_rgba(0,81,254,0.06)] hover:bg-white transition-all"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0051fe] to-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-[0_6px_16px_-3px_rgba(0,81,254,0.4)]">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-extrabold text-[#0051fe] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm sm:text-[14px] font-bold text-slate-900 leading-snug">
                          {item.value}
                        </p>
                        {item.subvalue && (
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-relaxed">
                            {item.subvalue}
                          </p>
                        )}
                        {item.action && (
                          <a
                            href={item.action}
                            target={
                              item.action.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.action.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0051fe] hover:text-[#0043d4] mt-2 group transition-colors"
                          >
                            <span>{item.actionLabel}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>

            {/* Follow Us Social Section — Icon Only */}
            <div className="pt-4 border-t border-blue-200/80 relative z-10 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Follow Us
                </p>
                <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                  Connect on Social
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Nexora on ${item.name}`}
                    className="group/social w-11 h-11 rounded-2xl bg-white/95 border border-blue-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#0051fe] hover:border-[#0051fe] hover:shadow-[0_8px_20px_-4px_rgba(0,81,254,0.35)] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                  >
                    <div className="transition-transform duration-200 group-hover/social:scale-110">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Project Brief Form (Vertically Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 h-full"
          >
            <div className="h-full relative rounded-3xl p-6 sm:p-9 bg-white/95 border border-blue-200/90 shadow-[0_20px_60px_-15px_rgba(0,81,254,0.12)] backdrop-blur-xl flex flex-col justify-between">
              {/* Decorative Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Us a Proposal / Brief</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-heading">
                  Tell Us About Your Project
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Complete the fields below and our team will prepare a
                  structured initial assessment within 24 hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 flex-1 flex flex-col justify-between"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name <span className="text-[#0051fe]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0051fe] focus:ring-4 focus:ring-[#0051fe]/10 outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Work Email <span className="text-[#0051fe]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0051fe] focus:ring-4 focus:ring-[#0051fe]/10 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91  12345  67890"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0051fe] focus:ring-4 focus:ring-[#0051fe]/10 outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Service of Interest
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-[#0051fe] focus:ring-4 focus:ring-[#0051fe]/10 outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select an engineering domain...
                        </option>
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    Project Overview / Requirements{" "}
                    <span className="text-[#0051fe]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your goals, challenges, technical preferences, or timeline milestones..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0051fe] focus:ring-4 focus:ring-[#0051fe]/10 outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Privacy and Security Assurance */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-[#0051fe] shrink-0" />
                  <span>
                    Strict Confidentiality: Your details and project brief are
                    protected under our standard non-disclosure policy.
                  </span>
                </div>

                {/* Submit Action */}
                <div>
                  <button
                    type="submit"
                    disabled={sending || sent}
                    className="w-full py-4 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-sm font-extrabold uppercase tracking-wider shadow-[0_10px_25px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_16px_34px_-4px_rgba(0,81,254,0.65)] flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    {sent ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-300" />
                        <span>Message Sent Successfully!</span>
                      </span>
                    ) : sending ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Brief...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>SEND MESSAGE & SCHEDULE CONSULTATION</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </span>
                    )}
                  </button>

                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTERACTIVE CAMPUS / MAP LOCATION HUB
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f4f8fe] border-t border-blue-100/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe]" />
                Engineering Headquarters
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-heading">
                Visit Nexora Technology
              </h3>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=12.9222185,77.573822"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0051fe] hover:bg-[#0051fe] hover:text-white border border-blue-200 font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md group"
            >
              <MapPin className="w-4 h-4 text-[#0051fe] group-hover:text-white transition-colors" />
              <span>Get Turn-by-Turn Directions</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Map Frame Card with Glowing Accents */}
          <div className="relative rounded-3xl overflow-hidden p-2 bg-white/90 border border-blue-200/90 shadow-[0_16px_50px_-10px_rgba(0,81,254,0.15)]">
            {/* Live Pin Overlay Card */}
            <div className="absolute top-6 left-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200/90 shadow-xl max-w-xs flex items-center gap-3.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#0051fe] animate-pulse shrink-0 ring-4 ring-blue-100" />
              <div>
                <p className="text-xs font-extrabold text-slate-950 leading-tight">
                  Nexora Technology Campus
                </p>
                <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                  Jayanagar, Bengaluru, Karnataka
                </p>
              </div>
            </div>

            {/* High-Performance Embed */}
            <div className="relative rounded-2xl overflow-hidden w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d971.5!2d77.573822!3d12.9222185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nexora Technology Services Bengaluru Office"
                className="w-full h-full object-cover filter contrast-[1.03] saturate-[1.1]"
              />
            </div>

            {/* GPS Strip Bar */}
            <div className="mt-2 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Building2 className="w-4 h-4 text-[#0051fe]" />
                <span>
                  12&deg;55&apos;20.0&quot;N, 77&deg;34&apos;25.8&quot;E —
                  Bengaluru, Karnataka, India
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/12%C2%B055'20.0%22N+77%C2%B034'25.8%22E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0051fe] font-extrabold hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Satellite View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FREQUENTLY ASKED QUESTIONS ACCORDION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f4f8fe]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200 text-[#0051fe] text-xs font-extrabold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ & Engagement Process</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Answers to common queries regarding onboarding, technical scoping,
              and engagement models.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/95 border border-blue-200/80 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-blue-50/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-blue-50 text-[#0051fe] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#0051fe] text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-blue-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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

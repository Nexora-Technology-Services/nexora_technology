"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/images/hero-section.png";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlightcard";
import Footer from "@/components/layout/footer";
import {
  Scale,
  Briefcase,
  Users,
  Calendar,
  Clock,
  FileText,
  CheckSquare,
  BarChart3,
  Gavel,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Database,
  Server,
  Code2,
  Bell,
  Search,
  Filter,
  ExternalLink,
  AlertCircle,
  ChevronRight,
  TrendingUp,
  Building2,
  UserCheck,
  Bookmark,
  FolderCheck,
  CalendarDays,
  FileCheck2,
  Lock,
  Download,
  Plus,
  MessageSquare,
  HelpCircle,
  Eye,
} from "lucide-react";

// ==========================================
// DATA DEFINITIONS FOR INTERACTIVE STUDIO
// ==========================================

type StudioTab = "cases" | "advocates" | "hearings" | "appointments" | "tasks" | "reports";

interface SampleCase {
  id: string;
  cnr: string;
  title: string;
  client: string;
  type: "Corporate" | "Civil" | "Arbitration" | "Commercial";
  court: string;
  advocate: string;
  stage: string;
  nextHearing: string;
  status: "Active" | "Hearing Pending" | "Reserved for Orders";
  priority: "High" | "Medium" | "Urgent";
}

const sampleCases: SampleCase[] = [
  {
    id: "MAT-2026-081",
    cnr: "DLHC01-008921-2026",
    title: "Apex Global Ltd vs. Directorate of Enforcement",
    client: "Apex Global Enterprise Corp",
    type: "Corporate",
    court: "High Court of Delhi • Court Hall 04",
    advocate: "Adv. Rajeshwar Sharma (Senior Partner)",
    stage: "Final Arguments on Interim Relief",
    nextHearing: "Nov 03, 2026",
    status: "Active",
    priority: "Urgent",
  },
  {
    id: "MAT-2026-044",
    cnr: "MHBOM-004312-2025",
    title: "Starlight Logistics vs. Horizon Infrastructure",
    client: "Starlight Logistics International",
    type: "Arbitration",
    court: "International Arbitration Centre (DIAC)",
    advocate: "Adv. Ananya Sengupta (Partner)",
    stage: "Cross-Examination of Expert Witness",
    nextHearing: "Nov 07, 2026",
    status: "Hearing Pending",
    priority: "High",
  },
  {
    id: "MAT-2026-102",
    cnr: "KA03HC-012940-2026",
    title: "Nexora Cyber Systems vs. State Tax Appellate",
    client: "Nexora Software Labs",
    type: "Commercial",
    court: "High Court Commercial Division • Bench 2",
    advocate: "Adv. Vikramaditya Nair",
    stage: "Filing of Rejoinder Affidavit",
    nextHearing: "Nov 12, 2026",
    status: "Active",
    priority: "Medium",
  },
  {
    id: "MAT-2025-911",
    cnr: "NCLT-ND-002194-2025",
    title: "In Re: Mergers of Primus Health & Zen Lifesciences",
    client: "Zen Life Healthcare Inc.",
    type: "Corporate",
    court: "NCLT Principal Bench • New Delhi",
    advocate: "Adv. Rajeshwar Sharma",
    stage: "Pronouncement of Scheme Sanction",
    nextHearing: "Nov 18, 2026",
    status: "Reserved for Orders",
    priority: "High",
  },
];

interface SampleAdvocate {
  id: string;
  name: string;
  role: string;
  barCouncilId: string;
  practiceAreas: string[];
  activeCases: number;
  maxCapacity: number;
  winRate: string;
  pendingTasks: number;
  status: "In Court" | "In Chamber" | "Available";
}

const sampleAdvocates: SampleAdvocate[] = [
  {
    id: "ADV-01",
    name: "Rajeshwar Sharma",
    role: "Senior Partner & Head of Litigation",
    barCouncilId: "D/1482/2004",
    practiceAreas: ["Corporate Disputes", "Constitutional Law", "NCLT / Insolvency"],
    activeCases: 16,
    maxCapacity: 18,
    winRate: "91.4%",
    pendingTasks: 3,
    status: "In Court",
  },
  {
    id: "ADV-02",
    name: "Ananya Sengupta",
    role: "Partner • Dispute Resolution",
    barCouncilId: "MH/3391/2011",
    practiceAreas: ["Commercial Arbitration", "Contract Law", "IPR Litigation"],
    activeCases: 12,
    maxCapacity: 15,
    winRate: "88.6%",
    pendingTasks: 5,
    status: "In Chamber",
  },
  {
    id: "ADV-03",
    name: "Vikramaditya Nair",
    role: "Senior Associate Counsel",
    barCouncilId: "KAR/2810/2016",
    practiceAreas: ["Taxation & Appellate", "Regulatory Compliance", "White Collar"],
    activeCases: 9,
    maxCapacity: 14,
    winRate: "85.2%",
    pendingTasks: 4,
    status: "Available",
  },
  {
    id: "ADV-04",
    name: "Meenakshi Sundaram",
    role: "Associate & Research Lead",
    barCouncilId: "D/5120/2020",
    practiceAreas: ["Statutory Filings", "Civil Appeals", "Due Diligence"],
    activeCases: 7,
    maxCapacity: 12,
    winRate: "89.0%",
    pendingTasks: 6,
    status: "In Chamber",
  },
];

interface SampleHearing {
  id: string;
  caseRef: string;
  caseTitle: string;
  court: string;
  bench: string;
  advocate: string;
  date: string;
  itemNumber: string;
  purpose: string;
  remarksStatus: "Recorded" | "Pending Entry";
  lastRemarks: string;
}

const sampleHearings: SampleHearing[] = [
  {
    id: "HR-901",
    caseRef: "DLHC01-008921-2026",
    caseTitle: "Apex Global Ltd vs. Directorate of Enforcement",
    court: "Delhi High Court • Court No. 12",
    bench: "Hon'ble Justice S. Mukherjee & Justice K. Verma",
    advocate: "Adv. Rajeshwar Sharma",
    date: "Today • 11:30 AM",
    itemNumber: "Item # 14 (Urgent List)",
    purpose: "Hearing on Stay Application & Production of Case Diary",
    remarksStatus: "Recorded",
    lastRemarks: "Senior Counsel argued maintainability. Court granted ad-interim protection till next date. Directed respondent to file counter in 2 weeks.",
  },
  {
    id: "HR-902",
    caseRef: "MHBOM-004312-2025",
    caseTitle: "Starlight Logistics vs. Horizon Infrastructure",
    court: "Delhi International Arbitration Centre",
    bench: "Sole Arbitrator: Retd. Justice P. Ramanathan",
    advocate: "Adv. Ananya Sengupta",
    date: "Tomorrow • 02:00 PM",
    itemNumber: "Session # 08",
    purpose: "Cross-Examination of Claimant's Forensic Auditor",
    remarksStatus: "Pending Entry",
    lastRemarks: "Previous Session: Documents 12 to 19 admitted into evidence without objection. Affidavits taken on record.",
  },
  {
    id: "HR-903",
    caseRef: "KA03HC-012940-2026",
    caseTitle: "Nexora Cyber Systems vs. State Tax Appellate",
    court: "Karnataka High Court • Division Bench III",
    bench: "Hon'ble The Chief Justice & Justice B. Patil",
    advocate: "Adv. Vikramaditya Nair",
    date: "Nov 05, 2026 • 10:45 AM",
    itemNumber: "Item # 29",
    purpose: "Admission & Hearing on Notice of Motion",
    remarksStatus: "Recorded",
    lastRemarks: "Court issued notice returnable in three weeks. Department advocate accepted notice in court.",
  },
];

interface SampleAppointment {
  id: string;
  clientName: string;
  company: string;
  type: "Pre-Trial Briefing" | "New Client Intake" | "Arbitration Prep" | "Settlement Discussion";
  scheduledFor: string;
  duration: string;
  leadAdvocate: string;
  mode: "Conference Room A" | "Virtual Meeting (Encrypted)" | "High Court Chambers";
  conflictStatus: "Cleared" | "Verified";
}

const sampleAppointments: SampleAppointment[] = [
  {
    id: "APT-401",
    clientName: "Dr. Siddharth Mallya (General Counsel)",
    company: "Apex Global Enterprise Corp",
    type: "Pre-Trial Briefing",
    scheduledFor: "Today • 04:30 PM",
    duration: "45 mins",
    leadAdvocate: "Adv. Rajeshwar Sharma",
    mode: "High Court Chambers",
    conflictStatus: "Cleared",
  },
  {
    id: "APT-402",
    clientName: "Kavita Krishnamurthy (MD)",
    company: "Horizon Infrastructure Ltd",
    type: "Arbitration Prep",
    scheduledFor: "Tomorrow • 10:00 AM",
    duration: "60 mins",
    leadAdvocate: "Adv. Ananya Sengupta",
    mode: "Conference Room A",
    conflictStatus: "Cleared",
  },
  {
    id: "APT-403",
    clientName: "Aakash Patel (Head of Legal)",
    company: "Zen Life Healthcare Inc.",
    type: "Settlement Discussion",
    scheduledFor: "Nov 04, 2026 • 03:00 PM",
    duration: "30 mins",
    leadAdvocate: "Adv. Rajeshwar Sharma",
    mode: "Virtual Meeting (Encrypted)",
    conflictStatus: "Verified",
  },
];

interface SampleTask {
  id: string;
  title: string;
  caseRef: string;
  assignedTo: string;
  dueDate: string;
  priority: "Urgent" | "High" | "Normal";
  category: "Drafting" | "Research" | "Filing" | "Client Review";
  status: "In Progress" | "Under Partner Review" | "Ready for Filing";
}

const sampleTasks: SampleTask[] = [
  {
    id: "TSK-801",
    title: "Draft Rejoinder Affidavit & Compile Judicial Precedents",
    caseRef: "DLHC01-008921-2026",
    assignedTo: "Meenakshi Sundaram",
    dueDate: "Tomorrow by 05:00 PM",
    priority: "Urgent",
    category: "Drafting",
    status: "Under Partner Review",
  },
  {
    id: "TSK-802",
    title: "Scrutiny of Original Arbitration Ex-Facie Invoices",
    caseRef: "MHBOM-004312-2025",
    assignedTo: "Adv. Ananya Sengupta",
    dueDate: "Nov 04, 2026",
    priority: "High",
    category: "Research",
    status: "In Progress",
  },
  {
    id: "TSK-803",
    title: "E-Filing of Vakalathnama & Certified Paperbook Copies",
    caseRef: "KA03HC-012940-2026",
    assignedTo: "Court Clerk / Paralegal Cell",
    dueDate: "Nov 05, 2026",
    priority: "Normal",
    category: "Filing",
    status: "Ready for Filing",
  },
];

// ==========================================
// CORE PILLARS LIST
// ==========================================

const corePillars = [
  {
    icon: FolderCheck,
    title: "Comprehensive Client & Case Management",
    badge: "Core Matter Tracking",
    desc: "Centralize corporate clients, case dossiers, CNR tracking, jurisdictional courts, and procedural stages in a unified digital repository with zero lost filings.",
    deliverables: [
      "CNR & Case Number Auto-Tracking",
      "Multi-Jurisdiction Forum Mapping",
      "Opposite Counsel & Judge Registry",
      "Digital Evidence & Brief Repository",
    ],
  },
  {
    icon: UserCheck,
    title: "Smart Advocate Roster & Allocation",
    badge: "Counsel Workload Optimizer",
    desc: "Seamlessly map senior partners, arguing counsel, associates, and paralegals to matters based on expertise, court appearances, and real-time workload capacity.",
    deliverables: [
      "Advocate Capacity & Caseload Meters",
      "Bar Council Profile & Bio Directory",
      "Chamber & Court Appearance Tracker",
      "Matter Handover & Lead Succession",
    ],
  },
  {
    icon: Gavel,
    title: "Court Hearings & Remarks Docket",
    badge: "Judicial Intelligence",
    desc: "Track daily cause lists, court halls, judge orders, interim directions, and capture authoritative post-hearing remarks right from the courtroom corridor.",
    deliverables: [
      "Daily Court Cause List Sync",
      "Hearing Remarks & Order Log Entry",
      "Next Date of Hearing (NDH) Automation",
      "Historical Court Diary Timelines",
    ],
  },
  {
    icon: CalendarDays,
    title: "Appointment Scheduling & Tracking",
    badge: "Zero-Conflict Calendar",
    desc: "Eliminate double-booking across client briefings, pre-trial conferences, and courtroom slots with automated reminders and conflict-of-interest checks.",
    deliverables: [
      "Client Consultation Booking Portal",
      "Court vs. Chamber Conflict Warnings",
      "Encrypted Virtual Video Deposition Rooms",
      "Automated SMS & Email Notifications",
    ],
  },
  {
    icon: CheckSquare,
    title: "Advocate Task Delegation & Workflows",
    badge: "Statutory Deadline Safeguard",
    desc: "Assign drafting briefs, research memos, affidavit rejoinders, and paperbook filings to junior advocates with strict statutory limitation tracking.",
    deliverables: [
      "Kanban & List Task Allocation",
      "Statutory Limitation Alerts",
      "Senior Partner Review Approval Chains",
      "Automated Activity Audit Trails",
    ],
  },
  {
    icon: BarChart3,
    title: "Practice Intelligence & Executive Reports",
    badge: "Law Firm Analytics",
    desc: "Gain boardroom clarity into case disposal speeds, win-loss decree ratios, advocate billing velocity, hearing attendance, and export compliance-ready PDF summaries.",
    deliverables: [
      "Matter Win/Loss & Decree Analytics",
      "Hearing Adjournment Rate Tracking",
      "Advocate Productivity & Utilization",
      "One-Click PDF/Excel Audit Exports",
    ],
  },
];

// Operational Lifecycle Stages
const lifecycleStages = [
  {
    step: "01",
    title: "Client Intake & Conflict Clearance",
    desc: "Register corporate clients, log opposite parties, perform automated conflict checks, and generate digital engagement letters.",
    tag: "Intake Governance",
  },
  {
    step: "02",
    title: "Matter Docketing & CNR Assignment",
    desc: "File cases with court registry, record CNR identifiers, classify matters (Civil, Corporate, IPR), and upload certified documents.",
    tag: "Matter Setup",
  },
  {
    step: "03",
    title: "Advocate Allocation & Task Delegation",
    desc: "Assign lead partners and associates, generate drafting tasks, schedule precedent discovery, and set limitation date alerts.",
    tag: "Execution & Workflows",
  },
  {
    step: "04",
    title: "Courtroom Hearing & Remarks Logging",
    desc: "Sync daily cause lists, track courtroom appearances, record live bench observations, and log interim directions and orders.",
    tag: "Court Tracking",
  },
  {
    step: "05",
    title: "Analytics & Closure Reports",
    desc: "Review matter milestones, generate client progress dockets, track advocate billable hours, and analyze firm disposal velocity.",
    tag: "Firm Intelligence",
  },
];

export default function LegalTechPage() {
  const [activeTab, setActiveTab] = useState<StudioTab>("cases");
  const [h1Hovered, setH1Hovered] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState<string>("MAT-2026-081");
  const [hearingSearch, setHearingSearch] = useState<string>("");
  const [newRemarkText, setNewRemarkText] = useState<string>(
    "Senior counsel argued the maintainability of the petition. Court directed filing of reply within 10 days."
  );
  const [remarkSaved, setRemarkSaved] = useState<boolean>(false);

  const handleSaveRemark = (e: React.FormEvent) => {
    e.preventDefault();
    setRemarkSaved(true);
    setTimeout(() => setRemarkSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-[#0051fe]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — LEGALTECH ENTERPRISE SUITE
      ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[620px] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-[#c5dfff] overflow-hidden border-b border-sky-200/70">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Nexora LegalTech Advocate & Case Management Product Suite"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-right select-none pointer-events-none"
            sizes="100vw"
          />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none" />
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            {/* Top Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-white text-[#0051fe] text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_4px_16px_rgba(0,81,254,0.15)] backdrop-blur-md"
            >
              <Scale className="w-3.5 h-3.5 text-[#0051fe]" />
              <span>NEXORA LEGALTECH • ADVOCATE &amp; MATTER MANAGEMENT SUITE</span>
            </motion.div>

            {/* Impactful H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              onMouseEnter={() => setH1Hovered(true)}
              onMouseLeave={() => setH1Hovered(false)}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-[1.14] mb-4 cursor-pointer select-none"
              style={{
                textShadow: h1Hovered
                  ? "0 4px 14px rgba(255, 255, 255, 1), 0 0 28px rgba(186, 230, 253, 0.95), 0 0 45px rgba(147, 197, 253, 0.85)"
                  : "0 2px 10px rgba(255, 255, 255, 0.95)",
              }}
            >
              Intelligent <span className="text-[#0051fe]">LegalTech</span> Platform
              <br className="hidden sm:inline" /> For Modern Law Firms.
            </motion.h1>

            {/* Rich Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-sm sm:text-base lg:text-lg text-slate-700 font-semibold leading-relaxed max-w-2xl mb-6"
            >
              An integrated, enterprise-grade advocate and case management system.
              Empower your law firm to manage clients, court matters, advocate rosters,
              daily cause lists, hearing remarks, appointment schedules, and task workflows
              with real-time practice intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap items-center gap-3.5 mb-8"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-[0_10px_24px_-4px_rgba(0,81,254,0.4)] hover:shadow-[0_16px_32px_-4px_rgba(0,81,254,0.5)] transition-all duration-200 cursor-pointer group"
              >
                <span>Request Law Firm Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <a
                href="#interactive-studio"
                className="px-7 py-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#0051fe] border border-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Explore Interactive Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </a> */}
            </motion.div>

            {/* Quick Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 pt-2 border-t border-sky-300/40"
            >
              {[
                "Client & Matter Management",
                "Advocate Workload Allocation",
                "Daily Cause List & Remarks Entry",
                "Appointment Scheduling",
                "Advocate Task Board",
                "Practice Analytics & Reports",
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-white/90 text-slate-700 text-xs font-semibold backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0051fe]" />
                  <span>{pill}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ROI & VALUE METRICS BAR
      ═══════════════════════════════════════════ */}
      {/* <section className="relative z-20 -mt-7 max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            {
              metric: "100%",
              label: "Hearing Date Tracking",
              sub: "Zero missed court dates or cause lists",
            },
            {
              metric: "4.8x",
              label: "Faster Case Docketing",
              sub: "Instant CNR, judge & advocate assignment",
            },
            {
              metric: "65%",
              label: "Less Admin Overhead",
              sub: "Automated tasks, appointments & logs",
            },
            {
              metric: "30+",
              label: "Courts & Tribunals",
              sub: "Supreme Court, High Courts, NCLT & DIAC",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-lg shadow-blue-900/5 hover:border-[#0051fe]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#0051fe] font-heading tracking-tight mb-1">
                {item.metric}
              </div>
              <div className="font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* ═══════════════════════════════════════════
          TECH STACK SPECIFICATION STRIP
      ═══════════════════════════════════════════ */}
      <section className="mt-8 max-w-6xl mx-auto px-4 w-full">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-700/60">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-blue-400 font-heading">
                Underlying Technology Stack
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Engineered on React, Node.js &amp; MySQL
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>React • Modern Interactive UI</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Node.js • High-Throughput API Engine</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>MySQL • ACID Relational Data Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTERACTIVE APP STUDIO & LIVE PREVIEW SWITCHER
      ═══════════════════════════════════════════ */}
      {/* <section
        id="interactive-studio"
        className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Product Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
            Explore the <span className="text-[#0051fe]">LegalTech Dashboard</span> Modules
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5">
            Switch between the core modules below to test live records, advocate assignments,
            courtroom remarks entry, appointment schedules, task boards, and analytical reports.
          </p>
        </div> */}

        {/* Tabbed Mock SaaS Studio Frame */}
        {/* <div className="rounded-2xl border border-slate-300/80 bg-white shadow-2xl overflow-hidden"> */}
          {/* Top Window Header */}
          {/* <div className="bg-slate-900 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Nexora LegalTech OS • Enterprise v3.2
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>MySQL Connected • ACID Sync</span>
              </div>
              <span className="text-slate-400 hidden md:inline">
                Organization: <strong className="text-white">Sharma &amp; Partners Law Chambers</strong>
              </span>
            </div>
          </div> */}

          {/* Studio Workspace Layout */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]"> */}
            {/* Sidebar Navigation */}
            {/* <div className="lg:col-span-3 bg-slate-50 border-r border-slate-200 p-3 sm:p-4 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
                  Core Management Modules
                </div>

                {[
                  {
                    id: "cases" as StudioTab,
                    name: "Client & Case Management",
                    sub: "Matters, CNRs & Forums",
                    icon: FolderCheck,
                    count: "4 Matters",
                  },
                  {
                    id: "advocates" as StudioTab,
                    name: "Advocates & Counsel",
                    sub: "Roster & Caseload Meter",
                    icon: Users,
                    count: "4 Counsels",
                  },
                  {
                    id: "hearings" as StudioTab,
                    name: "Court Hearings & Remarks",
                    sub: "Cause Lists & Judge Notes",
                    icon: Gavel,
                    count: "3 Hearings",
                  },
                  {
                    id: "appointments" as StudioTab,
                    name: "Appointment Scheduling",
                    sub: "Client Consults & Tracker",
                    icon: CalendarDays,
                    count: "3 Bookings",
                  },
                  {
                    id: "tasks" as StudioTab,
                    name: "Advocate Tasks & Workflow",
                    sub: "Drafting, Filings & Deadlines",
                    icon: CheckSquare,
                    count: "3 Due",
                  },
                  {
                    id: "reports" as StudioTab,
                    name: "Practice Intelligence & Reports",
                    sub: "Disposal & Analytics",
                    icon: BarChart3,
                    count: "Live KPIs",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0051fe] text-white shadow-md shadow-blue-600/30 font-bold"
                          : "text-slate-700 hover:bg-slate-200/70 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? "text-white" : "text-[#0051fe]"
                          }`}
                        />
                        <div>
                          <div className="text-xs leading-snug">{item.name}</div>
                          <div
                            className={`text-[10px] ${
                              isActive ? "text-blue-100" : "text-slate-500"
                            }`}
                          >
                            {item.sub}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-slate-200 text-slate-600 font-medium"
                        }`}
                      >
                        {item.count}
                      </span>
                    </button>
                  );
                })}
              </div> */}

              {/* Bottom Law Firm Quick Info */}
              {/* <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-slate-700">Firm Active Docket</span>
                  <span className="font-bold text-[#0051fe]">41 Matters</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#0051fe] h-full w-[78%]" />
                </div>
                <div className="text-[10px] text-slate-400 mt-1 flex justify-between">
                  <span>Capacity: 78% utilized</span>
                  <span>4 Courts Today</span>
                </div>
              </div>
            </div> */}

            {/* Main Stage Panel */}
            {/* <div className="lg:col-span-9 p-4 sm:p-6 bg-slate-50/50 flex flex-col justify-between">
              <AnimatePresence mode="wait"> */}
                {/* 1. CASES TAB */}
                {/* {activeTab === "cases" && (
                  <motion.div
                    key="tab-cases"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-heading flex items-center gap-2">
                          <FolderCheck className="w-4 h-4 text-[#0051fe]" />
                          <span>Active Client &amp; Matter Dockets</span>
                        </h4>
                        <p className="text-xs text-slate-500">
                          Tracking CNR identifiers, presiding benches, case milestones, and assigned counsel.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#0051fe] border border-blue-200">
                          Auto-Sync with e-Courts
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {sampleCases.map((c) => {
                        const isSelected = selectedCaseId === c.id;
                        return (
                          <div
                            key={c.id}
                            onClick={() => setSelectedCaseId(c.id)}
                            className={`p-4 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-white border-[#0051fe] shadow-md ring-1 ring-[#0051fe]/30"
                                : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm"
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                              <div>
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  <span className="text-xs font-bold text-[#0051fe] font-mono">
                                    {c.cnr}
                                  </span>
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                                    {c.type}
                                  </span>
                                  <span
                                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                      c.priority === "Urgent"
                                        ? "bg-rose-100 text-rose-700"
                                        : c.priority === "High"
                                        ? "bg-amber-100 text-amber-800"
                                        : "bg-slate-100 text-slate-700"
                                    }`}
                                  >
                                    {c.priority} Priority
                                  </span>
                                </div>
                                <h5 className="text-sm font-bold text-slate-900 font-heading">
                                  {c.title}
                                </h5>
                                <div className="text-xs text-slate-500">
                                  Client: <strong className="text-slate-700">{c.client}</strong>
                                </div>
                              </div>

                              <div className="sm:text-right shrink-0">
                                <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  Next: {c.nextHearing}
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100 text-slate-600">
                              <div>
                                <span className="text-slate-400">Court: </span>
                                <span className="font-medium text-slate-800">{c.court}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Assigned Advocate: </span>
                                <span className="font-medium text-slate-800">{c.advocate}</span>
                              </div>
                              <div className="sm:col-span-2">
                                <span className="text-slate-400">Current Stage: </span>
                                <span className="font-medium text-[#0051fe]">{c.stage}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )} */}

                {/* 2. ADVOCATES TAB */}
                {/* {activeTab === "advocates" && (
                  <motion.div
                    key="tab-advocates"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-heading flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#0051fe]" />
                          <span>Advocates &amp; Legal Counsel Roster</span>
                        </h4>
                        <p className="text-xs text-slate-500">
                          Monitor bar credentials, practice domain expertise, active caseload meters, and task queues.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                          All Counsel Verified
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {sampleAdvocates.map((adv) => {
                        const utilization = Math.round((adv.activeCases / adv.maxCapacity) * 100);
                        return (
                          <div
                            key={adv.id}
                            className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div>
                                  <h5 className="text-sm font-bold text-slate-900 font-heading">
                                    {adv.name}
                                  </h5>
                                  <div className="text-[11px] text-slate-500 font-medium">
                                    {adv.role}
                                  </div>
                                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                                    Bar Roll: {adv.barCouncilId}
                                  </div>
                                </div>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    adv.status === "In Court"
                                      ? "bg-amber-100 text-amber-800"
                                      : adv.status === "In Chamber"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-emerald-100 text-emerald-800"
                                  }`}
                                >
                                  {adv.status}
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-1 mb-3">
                                {adv.practiceAreas.map((pa, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                                  >
                                    {pa}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                              <div>
                                <div className="flex justify-between text-[11px] mb-1">
                                  <span className="text-slate-500">
                                    Caseload: {adv.activeCases}/{adv.maxCapacity} Matters
                                  </span>
                                  <span className="font-bold text-[#0051fe]">{utilization}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                  <div
                                    className="bg-[#0051fe] h-full rounded-full"
                                    style={{ width: `${utilization}%` }}
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between text-[11px] pt-1 text-slate-600">
                                <span>
                                  Win Rate: <strong className="text-emerald-600">{adv.winRate}</strong>
                                </span>
                                <span>
                                  Pending Tasks: <strong className="text-slate-800">{adv.pendingTasks}</strong>
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )} */}

                {/* 3. COURT HEARINGS TAB */}
                {/* {activeTab === "hearings" && (
                  <motion.div
                    key="tab-hearings"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-heading flex items-center gap-2">
                          <Gavel className="w-4 h-4 text-[#0051fe]" />
                          <span>Court Hearing Docket &amp; Remarks Entry</span>
                        </h4>
                        <p className="text-xs text-slate-500">
                          Daily cause list tracking, bench details, purpose of appearance, and post-hearing observations.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#0051fe] border border-blue-200">
                          Live Cause List Active
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4"> */}
                      {/* Hearings List */}
                      {/* <div className="lg:col-span-7 space-y-3">
                        {sampleHearings.map((h) => (
                          <div
                            key={h.id}
                            className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all text-xs"
                          >
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div>
                                <span className="font-bold text-[#0051fe] font-mono">{h.caseRef}</span>
                                <h6 className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5">
                                  {h.caseTitle}
                                </h6>
                              </div>
                              <span className="font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded text-[11px] shrink-0 border border-rose-200">
                                {h.date}
                              </span>
                            </div>

                            <div className="text-slate-600 space-y-0.5 my-2">
                              <div>
                                <span className="text-slate-400">Court / Bench: </span>
                                <span className="font-medium text-slate-800">{h.court}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Presiding: </span>
                                <span className="text-slate-700">{h.bench}</span>
                              </div>
                              <div>
                                <span className="text-slate-400">Advocate on Record: </span>
                                <span className="text-slate-800 font-medium">{h.advocate}</span> •{" "}
                                <span className="text-blue-600 font-semibold">{h.itemNumber}</span>
                              </div>
                              <div className="pt-1 text-[#0051fe] font-medium">
                                Purpose: {h.purpose}
                              </div>
                            </div>

                            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 mt-2">
                              <span className="font-bold text-slate-800">Latest Courtroom Remarks: </span>
                              <span>&ldquo;{h.lastRemarks}&rdquo;</span>
                            </div>
                          </div>
                        ))}
                      </div> */}

                      {/* Interactive Remarks Entry Box */}
                      {/* <div className="lg:col-span-5 bg-white rounded-xl border border-blue-200/90 p-4 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-900 font-heading flex items-center gap-1.5">
                              <MessageSquare className="w-3.5 h-3.5 text-[#0051fe]" />
                              <span>Log Immediate Court Remarks</span>
                            </span>
                            <span className="text-[10px] bg-blue-100 text-[#0051fe] font-bold px-2 py-0.5 rounded">
                              DLHC01-008921-2026
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mb-3">
                            Capture interim orders, next date directions, and judge remarks directly after hearing.
                          </p>

                          <form onSubmit={handleSaveRemark} className="space-y-3">
                            <div>
                              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                Bench Remarks / Order Summary
                              </label>
                              <textarea
                                rows={4}
                                value={newRemarkText}
                                onChange={(e) => setNewRemarkText(e.target.value)}
                                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0051fe] focus:ring-1 focus:ring-[#0051fe] bg-slate-50/50"
                                placeholder="Enter judge observations, interim orders, rejoinder deadlines..."
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                  Next Hearing Date (NDH)
                                </label>
                                <input
                                  type="text"
                                  defaultValue="Nov 17, 2026"
                                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-slate-50/50"
                                />
                              </div>
                              <div>
                                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                  Order Type
                                </label>
                                <select className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-slate-50/50">
                                  <option>Ad-Interim Stay Granted</option>
                                  <option>Notice Issued</option>
                                  <option>Adjourned with Costs</option>
                                  <option>Arguments Concluded</option>
                                </select>
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="w-full mt-2 py-2 px-3 rounded-lg bg-[#0051fe] hover:bg-[#0042cd] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Save Remarks to Case Dossier</span>
                            </button>
                          </form>

                          {remarkSaved && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>Remarks saved to MySQL database &amp; client notified!</span>
                            </motion.div>
                          )}
                        </div>

                        <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 mt-2">
                          All entered remarks are cryptographically timestamped and added to the advocate audit log.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )} */}

                {/* 4. APPOINTMENTS TAB */}
                {/* {activeTab === "appointments" && (
                  <motion.div
                    key="tab-appointments"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-heading flex items-center gap-2">
                          <CalendarDays className="w-4 h-4 text-[#0051fe]" />
                          <span>Appointment Scheduling &amp; Conflict Tracking</span>
                        </h4>
                        <p className="text-xs text-slate-500">
                          Coordinate client briefings, pre-trial conferences, and courtroom availability with zero scheduling overlaps.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                          No Schedule Conflicts
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                      {sampleAppointments.map((apt) => (
                        <div
                          key={apt.id}
                          className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#0051fe]">
                                {apt.type}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                                {apt.conflictStatus}
                              </span>
                            </div>

                            <h5 className="text-sm font-bold text-slate-900 font-heading mb-1">
                              {apt.clientName}
                            </h5>
                            <div className="text-xs text-slate-500 font-medium mb-3">
                              {apt.company}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-[#0051fe] shrink-0" />
                              <span className="font-semibold text-slate-800">{apt.scheduledFor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>{apt.mode}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500">
                              <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>Counsel: {apt.leadAdvocate}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div> */}

                    {/* Schedule Conflict Resolver Alert */}
                    {/* <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-5 h-5 text-[#0051fe] shrink-0" />
                        <div>
                          <span className="font-bold text-slate-900">
                            Automated Conflict Check Engine Active:{" "}
                          </span>
                          <span className="text-slate-600">
                            System verifies court timings against Delhi High Court cause list to prevent chamber appointment collisions.
                          </span>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-[#0051fe] font-bold text-xs hover:bg-blue-50 transition-colors shrink-0 shadow-2xs">
                        View Chamber Calendar
                      </button>
                    </div>
                  </motion.div>
                )} */}

                {/* 5. TASKS TAB */}
                {/* {activeTab === "tasks" && (
                  <motion.div
                    key="tab-tasks"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-heading flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-[#0051fe]" />
                          <span>Advocate Task Delegation &amp; Workflows</span>
                        </h4>
                        <p className="text-xs text-slate-500">
                          Assign petition drafting, case law research, and certified document filings with statutory deadlines.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          3 Statutory Deadlines
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                      {sampleTasks.map((t) => (
                        <div
                          key={t.id}
                          className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                {t.category}
                              </span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                  t.priority === "Urgent"
                                    ? "bg-rose-100 text-rose-700"
                                    : t.priority === "High"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {t.priority}
                              </span>
                            </div>

                            <h5 className="text-xs sm:text-sm font-bold text-slate-900 font-heading mb-1.5 leading-snug">
                              {t.title}
                            </h5>
                            <div className="text-[11px] text-[#0051fe] font-mono mb-2">
                              Matter: {t.caseRef}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                            <div>
                              <span className="text-slate-400">Assigned Advocate: </span>
                              <span className="font-semibold text-slate-800">{t.assignedTo}</span>
                            </div>
                            <div>
                              <span className="text-slate-400">Due: </span>
                              <span className="font-bold text-rose-700">{t.dueDate}</span>
                            </div>
                            <div className="pt-1">
                              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0051fe] border border-blue-100">
                                {t.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )} */}

                {/* 6. REPORTS TAB */}
                {/* {activeTab === "reports" && (
                  <motion.div
                    key="tab-reports"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-heading flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-[#0051fe]" />
                          <span>Practice Intelligence &amp; Disposal Analytics</span>
                        </h4>
                        <p className="text-xs text-slate-500">
                          Real-time insights across case win rates, hearing attendance, advocate productivity, and billing logs.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#0051fe] text-white flex items-center gap-1.5 hover:bg-[#0041cb] transition-colors cursor-pointer">
                          <Download className="w-3.5 h-3.5" />
                          <span>Export PDF Audit</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { label: "Overall Win / Favorable Ratio", value: "89.4%", note: "+3.2% vs last quarter", color: "text-emerald-600" },
                        { label: "Avg. Days to Final Decree", value: "142 Days", note: "38% faster than benchmark", color: "text-[#0051fe]" },
                        { label: "Hearing Attendance Rate", value: "98.7%", note: "Only 1.3% adjournment rate", color: "text-blue-700" },
                        { label: "Advocate Billable Hours", value: "1,240 Hrs", note: "Logged in MySQL current mo.", color: "text-slate-900" },
                      ].map((kpi, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="text-[11px] text-slate-500 font-medium mb-1">{kpi.label}</div>
                          <div className={`text-xl sm:text-2xl font-black font-heading ${kpi.color}`}>
                            {kpi.value}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-1">{kpi.note}</div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xs font-bold text-slate-800 font-heading mb-2">
                        Available One-Click Compliance &amp; Practice Reports
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        {[
                          { title: "Monthly Court Cause List Audit", fmt: "PDF / Excel", desc: "All courtroom appearances, bench notes, and item dispositions" },
                          { title: "Advocate Caseload & Task Summary", fmt: "PDF", desc: "Detailed breakdown of assigned matters and statutory adherence" },
                          { title: "Client Matter Expense & Fee Ledger", fmt: "Excel / CSV", desc: "Itemized court fee disbursements and billable hours" },
                        ].map((rep, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between">
                            <div>
                              <div className="font-bold text-slate-900">{rep.title}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5">{rep.desc}</div>
                            </div>
                            <div className="mt-2 text-[10px] font-bold text-[#0051fe] flex items-center justify-between">
                              <span>Format: {rep.fmt}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence> */}

              {/* Bottom Quick Bar */}
              {/* <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
                <div className="flex items-center gap-2">
                  <Database className="w-3.5 h-3.5 text-[#0051fe]" />
                  <span>Stateful React frontend with real-time Node.js APIs and MySQL persistence</span>
                </div>
                <Link
                  href="/contact"
                  className="font-bold text-[#0051fe] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Live Custom Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════════════
          CORE CAPABILITIES MATRIX (SPOTLIGHT CARDS)
      ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Pillars of Advocate Management</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
            Engineered For Modern <span className="text-[#0051fe]">Law Firms &amp; Chambers</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2.5">
            Everything your litigation and corporate advisory practice requires to manage matters,
            safeguard deadlines, coordinate counsel, and impress clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <SpotlightCard
                key={pillar.title}
                spotlightColor="rgba(0, 81, 254, 0.12)"
                borderColor="rgba(0, 81, 254, 0.3)"
                className="flex flex-col justify-between group hover:border-blue-400/50 bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0051fe] group-hover:bg-[#0051fe] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0051fe] transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 leading-snug group-hover:text-[#0051fe] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {pillar.desc}
                  </p>
                </div>

                {/* <div>
                  <div className="border-t border-slate-100 pt-3">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Capabilities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div> */}
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LAW FIRM OPERATIONAL LIFECYCLE
      ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>End-to-End Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
              The Law Firm <span className="text-[#0051fe]">Lifecycle Automation</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-2">
              From client conflict checks to courtroom hearings and final decree reporting —
              streamlined across your entire team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-heading text-slate-300">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-[#0051fe]">
                      {stage.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1.5 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                {/* <div className="mt-4 pt-2.5 border-t border-slate-200/60 flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Integrated Milestone</span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DATA SECURITY & PRIVACY ACCREDITATION
      ═══════════════════════════════════════════ */}
      {/* <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Attorney-Client Privilege Protection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading mb-3">
              Bank-Grade Security for Sensitive Legal Case Files
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Legal documents, witness statements, and court remarks are safeguarded with AES-256
              encryption, role-based access control (RBAC), and immutable audit logs to maintain
              strict compliance with Bar Council confidentiality mandates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Lock className="w-5 h-5 text-blue-400 mb-2" />
                <div className="font-bold text-white mb-0.5">Role-Based Access</div>
                <div className="text-slate-400">Granular rights for Managing Partners, Arguing Counsel, and Paralegals.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Database className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="font-bold text-white mb-0.5">ACID Relational MySQL</div>
                <div className="text-slate-400">Zero data corruption, foreign key integrity, and continuous snapshot backups.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <FileCheck2 className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="font-bold text-white mb-0.5">Tamper-Evident Logs</div>
                <div className="text-slate-400">Every remark update, appointment shift, and file view is logged with user ID.</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════════════
          DUAL CONVERSION PATH & CALL TO ACTION
      ═══════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] via-[#edf4ff] to-[#f8fafc] border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/90 shadow-xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0051fe] text-xs font-bold uppercase tracking-wider mb-4">
              <Gavel className="w-3.5 h-3.5" />
              <span>Modernize Your Legal Operations Today</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading mb-4">
              Ready to Upgrade Your Law Firm to <span className="text-[#0051fe]">Nexora LegalTech</span>?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a bespoke walkthrough tailored to your practice size. See how our React, Node.js,
              and MySQL platform simplifies case dockets, advocate rosters, and courtroom remarks tracking.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#0051fe] hover:bg-[#0041cb] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-[0_12px_28px_-4px_rgba(0,81,254,0.45)] hover:shadow-[0_18px_36px_-4px_rgba(0,81,254,0.55)] transition-all duration-200 cursor-pointer flex items-center gap-2 group"
              >
                <span>Request Law Firm Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/what-we-serve/services/custom-developments"
                className="px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Custom Law Firm Integrations</span>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Setup Friction</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>On-Premise or Private Cloud Deployment</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Seamless Data Migration from Excel &amp; Legacy ERPs</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

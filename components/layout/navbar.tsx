"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/images/nexora-logo.png";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

interface SubItem {
  name: string;
  href: string;
}

interface Column {
  heading: string;
  items: SubItem[];
}

interface DropdownNavItem {
  label: string;
  overviewTitle: string;
  overviewHref: string;
  columns: Column[];
  href?: never;
}

interface SimpleNavItem {
  label: string;
  href: string;
  overviewTitle?: never;
  overviewHref?: never;
  columns?: never;
}

type NavItem = SimpleNavItem | DropdownNavItem;

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let prev = false;
    const handleScroll = () => {
      const isPast = window.scrollY > 20;
      if (isPast !== prev) {
        prev = isPast;
        setScrolled(isPast);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes menu
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setHoveredNav(null);
  };

  // Close on route change
  useEffect(() => {
    closeAll();
  }, [pathname]);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "What We Serve",
      overviewTitle: "Explore What We Serve",
      overviewHref: "/what-we-serve/services/data-and-ai",
      columns: [
        {
          heading: "Services",
          items: [
            { name: "Data & AI", href: "/what-we-serve/services/data-and-ai" },
            { name: "ERP", href: "/what-we-serve/services/erp" },
            {
              name: "Custom Developments",
              href: "/what-we-serve/services/custom-developments",
            },
            {
              name: "Cloud Services",
              href: "/what-we-serve/services/cloud-services",
            },
            { name: "Consulting", href: "/what-we-serve/services/consulting" },
            {
              name: "Quality Assurance",
              href: "/what-we-serve/services/quality-assurance",
            },
          ],
        },
        {
          heading: "Our Capabilities",
          items: [
            {
              name: "Industries Served",
              href: "/what-we-serve/our-capabilities/industries-served",
            },
            {
              name: "Learning & Development",
              href: "/what-we-serve/our-capabilities/learning-and-development",
            },
            {
              name: "Talent Acquisition",
              href: "/what-we-serve/our-capabilities/talent-acquisition",
            },
          ],
        },
        {
          heading: "Products",
          items: [
            {
              name: "Legal Tech",
              href: "/what-we-serve/products/legal-tech",
            },
          ],
        },
      ],
    },
    {
      label: "About Us",
      overviewTitle: "About Nexora",
      overviewHref: "/about",
      columns: [
        {
          heading: "Organization",
          items: [
            { name: "Who We Are", href: "/about/organization/who-we-are" },
            { name: "Leaders", href: "/about/organization/leaders" },
            { name: "Our Values", href: "/about/organization/our-values" },
            {
              name: "Execution Model",
              href: "/about/organization/execution-model",
            },
            { name: "Why Nexora", href: "/about/organization/why-nexora" },
          ],
        },
        {
          heading: "Media & Investors",
          items: [
            { name: "Media", href: "/about/media-and-investors/media" },
            {
              name: "Board of Directors",
              href: "/about/media-and-investors/board-of-directors",
            },
          ],
        },
        {
          heading: "Our Network & Commitments",
          items: [
            { name: "Global Delivery Model", href: "/about" },
            {
              name: "Security & ISO Standards",
              href: "/about/organization/why-nexora",
            },
            {
              name: "Sustainability & Ethics",
              href: "/about/organization/our-values",
            },
            { name: "Client Trust & Recognition", href: "/about" },
          ],
        },
      ],
    },
    {
      label: "Careers",
      overviewTitle: "Careers at Nexora",
      overviewHref: "/careers",
      columns: [
        {
          heading: "Opportunities",
          items: [
            { name: "Careers Portal", href: "/careers" },
            { name: "Apply for Job", href: "/careers/apply-for-job" },
            { name: "Life @ NTS", href: "/careers/life-at-nts" },
            { name: "Work & Impact", href: "/careers/work-and-impact" },
          ],
        },
        {
          heading: "Hiring & Culture",
          items: [
            { name: "Culture", href: "/careers/culture" },
            { name: "How We Hire", href: "/careers/how-we-hire" },
            { name: "Hiring Journey", href: "/careers/hiring-journey" },
          ],
        },
        {
          heading: "Growth & Benefits",
          items: [
            { name: "Fast-Track Mentorship", href: "/careers/work-and-impact" },
            { name: "Continuous Learning Fund", href: "/careers/culture" },
            { name: "Hybrid Workplace Model", href: "/careers/life-at-nts" },
          ],
        },
      ],
    },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Dimmed backdrop when mega menu is open */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeAll}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-40 pointer-events-auto"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Floating White Frosted-Glass Header */}
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <motion.nav
          ref={navRef}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-6xl xl:max-w-7xl rounded-2xl sm:rounded-full transition-all duration-300 relative ${
            scrolled || activeDropdown
              ? "bg-white/95 shadow-[0_16px_45px_-8px_rgba(0,81,254,0.18),0_0_0_1px_rgba(255,255,255,0.95)] backdrop-blur-2xl py-2 px-4 sm:px-6"
              : "bg-white/85 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),0_0_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl py-2.5 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              onClick={closeAll}
              className="flex items-center gap-2 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0051fe] rounded-xl"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src={logo}
                  alt="Nexora Technology Logo"
                  width={135}
                  height={40}
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 relative">
              {navItems.map((item) => {
                const hasSub = Boolean("columns" in item && item.columns);
                const isCurrentPage = item.href ? pathname === item.href : false;
                const isHovered = hoveredNav === item.label;
                const isOpen = activeDropdown === item.label;

                if (!hasSub) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href!}
                      onMouseEnter={() => setHoveredNav(item.label)}
                      onMouseLeave={() => setHoveredNav(null)}
                      onClick={closeAll}
                      className={`relative px-3.5 xl:px-4 py-2 rounded-full text-[15px] font-bold tracking-[-0.01em] transition-colors duration-200 select-none ${
                        isCurrentPage
                          ? "text-[#0051fe] font-extrabold"
                          : "text-slate-800 hover:text-[#0051fe]"
                      }`}
                    >
                      {/* Floating hover pill */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full bg-blue-50/90 -z-10 shadow-[0_2px_8px_rgba(0,81,254,0.08)] pointer-events-none"
                          />
                        )}
                      </AnimatePresence>

                      <span className="relative z-10">{item.label}</span>

                      {/* Active Route Indicator Bar */}
                      {isCurrentPage && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-[-2px] left-3.5 right-3.5 h-[3px] bg-[#0051fe] rounded-full shadow-[0_2px_8px_rgba(0,81,254,0.4)]"
                        />
                      )}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredNav(item.label)}
                      onMouseLeave={() => setHoveredNav(null)}
                      onClick={() => {
                        // Submenu items only appear when clicking the item!
                        setActiveDropdown(isOpen ? null : item.label);
                      }}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`relative px-3.5 xl:px-4 py-2 rounded-full text-[15px] font-bold tracking-[-0.01em] flex items-center gap-1.5 transition-colors duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0051fe] ${
                        isOpen || isHovered
                          ? "text-[#0051fe]"
                          : "text-slate-800 hover:text-[#0051fe]"
                      }`}
                    >
                      {/* Floating hover pill */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full bg-blue-50/90 -z-10 shadow-[0_2px_8px_rgba(0,81,254,0.08)] pointer-events-none"
                          />
                        )}
                      </AnimatePresence>

                      <span className="relative z-10">{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-250 ${
                          isOpen ? "rotate-180 text-[#0051fe]" : "opacity-70"
                        }`}
                      />

                      {/* Active indicator bar when open */}
                      {isOpen && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-[-2px] left-3.5 right-3.5 h-[3px] bg-[#0051fe] rounded-full shadow-[0_2px_8px_rgba(0,81,254,0.4)]"
                        />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
              >
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="px-5 py-2.5 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-[13px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,81,254,0.35)] hover:shadow-[0_8px_24px_rgba(0,81,254,0.5)] transition-all duration-200 group cursor-pointer"
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#0051fe] hover:bg-blue-50 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              DESKTOP MEGA MENU SUBMENU (UP TO 3/4TH SCREEN HEIGHT)
              Styled with the original white glassmorphism aesthetics!
          ═══════════════════════════════════════════════════════════════ */}
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 right-0 top-[calc(100%+10px)] w-full rounded-3xl bg-white/95 backdrop-blur-3xl border border-white/90 shadow-[0_24px_65px_-12px_rgba(0,81,254,0.18),0_0_0_1px_rgba(0,81,254,0.06)] overflow-hidden max-h-[75vh] flex flex-col z-50"
              >
                {navItems.map((item) => {
                  if (
                    item.label !== activeDropdown ||
                    !("columns" in item) ||
                    !("overviewHref" in item) ||
                    !item.overviewHref
                  ) {
                    return null;
                  }

                  return (
                    <div
                      key={item.label}
                      className="p-7 sm:p-9 lg:p-10 overflow-y-auto flex flex-col justify-between flex-1 space-y-6"
                    >
                      {/* Top Header: About Nexora with Electric Blue Icon Linking to Overview */}
                      <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                        <Link
                          href={item.overviewHref}
                          onClick={closeAll}
                          className="group inline-flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0051fe] rounded-2xl"
                        >
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#0051fe] transition-colors font-heading">
                            {item.overviewTitle}
                          </h2>
                          {/* Electric blue accent square with chevron right */}
                          <span className="w-8 h-8 rounded-xl bg-[#0051fe] group-hover:bg-[#0043d4] text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-1.5 shadow-[0_4px_16px_rgba(0,81,254,0.38)]">
                            <ChevronRight className="w-5 h-5 stroke-[2.8]" />
                          </span>
                        </Link>
                      </div>

                      {/* Middle: Organized Columns Equally Aligned Across Full Width */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 w-full">
                        {item.columns.map((col, cIdx) => (
                          <div key={cIdx} className="space-y-3.5 w-full">
                            {/* Non-Clickable Category Heading */}
                            <p className="text-xs font-extrabold text-slate-400 select-none cursor-default tracking-wider uppercase font-heading px-1">
                              {col.heading}
                            </p>

                            {/* Sub items under this category */}
                            <ul className="space-y-1 w-full">
                              {col.items.map((sub, sIdx) => (
                                <li key={sIdx} className="w-full">
                                  <Link
                                    href={sub.href}
                                    onClick={closeAll}
                                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-[14.5px] font-bold text-slate-800 hover:text-[#0051fe] hover:bg-blue-50/80 rounded-xl transition-all duration-200 group w-full"
                                  >
                                    <span className="w-2 h-2 rounded-full bg-[#0051fe] shrink-0 shadow-[0_0_8px_rgba(0,81,254,0.35)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                    <span className="flex-1">{sub.name}</span>
                                    <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0051fe]" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ═══════════════════════════════════════════════════════════════
              MOBILE NAVIGATION DRAWER
              Styled with the original white glassmorphism aesthetics!
          ═══════════════════════════════════════════════════════════════ */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden mt-3 pt-3 border-t border-slate-100 max-h-[75vh] overflow-y-auto space-y-1 pb-2"
              >
                {navItems.map((item) => {
                  if (
                    !("columns" in item) ||
                    !("overviewHref" in item) ||
                    !item.overviewHref
                  ) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href || "/"}
                        onClick={closeAll}
                        className="block px-3.5 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:text-[#0051fe] hover:bg-blue-50/80 transition-colors"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  const isExpanded = mobileExpanded === item.label;

                  return (
                    <div
                      key={item.label}
                      className="rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                        className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-bold text-slate-900 hover:text-[#0051fe] hover:bg-blue-50/80 transition-colors cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-3 pr-1 py-2 space-y-3 bg-slate-50/80 rounded-xl my-1 overflow-hidden"
                          >
                            {/* Overview Link */}
                            <Link
                              href={item.overviewHref}
                              onClick={closeAll}
                              className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-100/70 text-[#0051fe] font-bold text-sm"
                            >
                              <span>{item.overviewTitle} &rarr;</span>
                              <span className="text-[11px] uppercase tracking-wider">
                                Overview
                              </span>
                            </Link>

                            {/* Category Columns */}
                            {item.columns.map((col, cIdx) => (
                              <div key={cIdx} className="space-y-1">
                                {/* Non-Clickable Category Heading */}
                                <p className="px-3 text-xs font-extrabold text-[#0051fe] uppercase tracking-wider">
                                  {col.heading}
                                </p>
                                <div className="space-y-0.5">
                                  {col.items.map((sub, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      href={sub.href}
                                      onClick={closeAll}
                                      className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0051fe] hover:bg-white rounded-lg transition-colors"
                                    >
                                      • {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="pt-2 pb-1 px-1">
                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className="px-5 py-2.5 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-[13px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>GET STARTED</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
}

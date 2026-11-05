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
  const [isVisible, setIsVisible] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let prevPast = false;
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Scrolled past 20px threshold for navbar background density
      const isPast = currentY > 20;
      if (isPast !== prevPast) {
        prevPast = isPast;
        setScrolled(isPast);
      }

      // Hide when scrolling down, show when scrolling up
      if (currentY > 60) {
        if (currentY > lastY + 8) {
          // Scrolling down - transition up and disappear
          setIsVisible(false);
        } else if (currentY < lastY - 8) {
          // Scrolling up - transition in
          setIsVisible(true);
        }
      } else {
        // At or near top of the page - always visible
        setIsVisible(true);
      }

      lastY = currentY;
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

  // Disable page scrolling when mega menu or mobile menu is active/open across all tabs
  useEffect(() => {
    if (activeDropdown || mobileMenuOpen) {
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevBodyOverflow = document.body.style.overflow;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      // Prevent wheel & touch scrolling from leaking to the page (covers About, Careers, What We Serve)
      const preventScrollLeak = (e: WheelEvent | TouchEvent) => {
        const target = e.target as HTMLElement | null;
        // Allow internal scrolling inside menu only if the content actually overflows
        const scrollable = target?.closest(".overflow-y-auto") as HTMLElement | null;
        if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
          return;
        }
        e.preventDefault();
      };

      window.addEventListener("wheel", preventScrollLeak, { passive: false });
      window.addEventListener("touchmove", preventScrollLeak, { passive: false });

      return () => {
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
        window.removeEventListener("wheel", preventScrollLeak);
        window.removeEventListener("touchmove", preventScrollLeak);
      };
    }
  }, [activeDropdown, mobileMenuOpen]);

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  // Close on route change asynchronously to avoid synchronous cascading renders
  useEffect(() => {
    const timer = setTimeout(() => {
      closeAll();
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);
  
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
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
      ],
    },
    {
      label: "What We Serve",
      overviewTitle: "Explore What We Serve",
      overviewHref: "/about#services",
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
      label: "Careers",
      overviewTitle: "Careers at Nexora",
      overviewHref: "/careers",
      columns: [
        {
          heading: "Opportunities",
          items: [
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
            className="fixed inset-0 bg-white/5 backdrop-blur-md sm:backdrop-blur-lg z-40 pointer-events-auto"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Floating Glassmorphic Header */}
      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <motion.nav
          ref={navRef}
          initial={{ y: -60, opacity: 0 }}
          animate={{
            y: isVisible || activeDropdown || mobileMenuOpen ? 0 : -140,
            opacity: 1,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-6xl xl:max-w-7xl transition-all duration-300 relative border ${
            mobileMenuOpen ? "rounded-3xl" : "rounded-2xl sm:rounded-full"
          } ${
            scrolled || activeDropdown
              ? "bg-white/10 backdrop-blur-3xl border-white/40 shadow-[0_20px_45px_-8px_rgba(15,23,42,0.18),0_10px_24px_-4px_rgba(0,81,254,0.15),0_-8px_24px_-2px_rgba(15,23,42,0.12),0_-4px_12px_rgba(0,81,254,0.1)] py-2 px-4 sm:px-6"
              : "bg-white/10 backdrop-blur-3xl border-white/40 shadow-[0_16px_36px_-6px_rgba(15,23,42,0.14),0_8px_20px_-4px_rgba(0,81,254,0.12),0_-6px_20px_-2px_rgba(15,23,42,0.1),0_-3px_10px_rgba(0,81,254,0.08)] py-2.5 px-4 sm:px-6"
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
                const isOpen = activeDropdown === item.label;

                if (!hasSub) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href!}
                      onClick={closeAll}
                      className={`relative px-3.5 xl:px-4 py-2 rounded-full text-[15px] font-bold tracking-[-0.01em] transition-colors duration-100 select-none group ${
                        isCurrentPage
                          ? "text-[#0051fe] font-extrabold"
                          : "text-slate-800 hover:text-[#0051fe]"
                      }`}
                    >
                      {/* Floating crystal glass hover pill — 100% Pure CSS, zero JS state lag */}
                      <span
                        className="absolute inset-0 rounded-full bg-white/50 border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] -z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-75 group-hover:duration-100 ease-out"
                      />

                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveDropdown(isOpen ? null : item.label);
                      }}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`relative px-3.5 xl:px-4 py-2 rounded-full text-[15px] font-bold tracking-[-0.01em] flex items-center gap-1.5 transition-colors duration-100 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0051fe] group ${
                        isOpen
                          ? "text-[#0051fe]"
                          : "text-slate-800 hover:text-[#0051fe]"
                      }`}
                    >
                      {/* Floating crystal glass hover pill — 100% Pure CSS, zero JS state lag */}
                      <span
                        className={`absolute inset-0 rounded-full bg-white/50 border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] -z-10 pointer-events-none transition-opacity duration-75 group-hover:duration-100 ease-out ${
                          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />

                      <span className="relative z-10">{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-250 ${
                          isOpen ? "rotate-180 text-[#0051fe]" : "opacity-70"
                        }`}
                      />
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
                className="p-2 rounded-xl text-slate-700 hover:text-[#0051fe] hover:bg-white/40 hover:backdrop-blur-sm transition-colors cursor-pointer"
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
              Styled with Cohesive Frosted Glassmorphism!
          ═══════════════════════════════════════════════════════════════ */}
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 right-0 top-[calc(100%+12px)] w-full rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden max-h-[75vh] flex flex-col z-50"
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
                      <div className="flex items-center justify-between pb-5 border-b border-slate-200/60">
                        <Link
                          href={item.overviewHref}
                          onClick={closeAll}
                          className="group inline-flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0051fe] rounded-2xl"
                        >
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-[0.01em] group-hover:text-[#0051fe] transition-colors font-heading">
                            {item.overviewTitle}
                          </h2>
                          {/* Electric blue accent square with chevron right */}
                          <span className="w-8 h-8 rounded-xl bg-[#0051fe] group-hover:bg-[#0043d4] text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-1.5 shadow-[0_4px_16px_rgba(0,81,254,0.38)]">
                            <ChevronRight className="w-5 h-5 stroke-[2.8]" />
                          </span>
                        </Link>
                      </div>

                      {/* Middle: Organized Columns Equally Aligned Across Full Width */}
                      <div
                        className={`grid grid-cols-1 ${
                          item.columns.length === 2
                            ? "md:grid-cols-2"
                            : "md:grid-cols-3"
                        } gap-8 lg:gap-12 xl:gap-16 w-full`}
                      >
                        {item.columns.map((col, cIdx) => (
                          <div key={cIdx} className="space-y-3.5 w-full">
                            {/* Non-Clickable Category Heading in Primary Blue (Larger & Bold) */}
                            <p className="text-[15px] sm:text-[16px] font-black text-[#0051fe] select-none cursor-default tracking-[0.06em] uppercase font-heading px-1">
                              {col.heading}
                            </p>

                            {/* Sub items under this category */}
                            <ul className="space-y-1 w-full flex flex-col items-start">
                              {col.items.map((sub, sIdx) => (
                                <li key={sIdx} className="w-auto">
                                  <Link
                                    href={sub.href}
                                    onClick={closeAll}
                                    className="relative inline-flex items-center gap-2.5 px-3 py-1.5 text-[15px] font-bold text-slate-950 tracking-[0.015em] hover:text-[#0051fe] hover:bg-white/70 hover:shadow-sm border border-transparent hover:border-white/60 rounded-xl transition-all duration-150 group overflow-hidden"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe] shrink-0 shadow-[0_0_8px_rgba(0,81,254,0.35)] opacity-90 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                                    <span>{sub.name}</span>
                                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0051fe]" />

                                    {/* Smooth bottom accent bar on hover */}
                                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0051fe] via-[#2563eb] to-[#38bdf8] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out shadow-[0_1px_6px_rgba(0,81,254,0.4)] pointer-events-none" />
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
              Styled with Cohesive Frosted Glassmorphism!
          ═══════════════════════════════════════════════════════════════ */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden mt-3 pt-3 border-t border-white/40 max-h-[75vh] overflow-y-auto space-y-1 pb-2"
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
                        className="block px-3.5 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:text-[#0051fe] hover:bg-white/40 hover:backdrop-blur-sm transition-colors"
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
                        className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-bold text-slate-900 hover:text-[#0051fe] hover:bg-white/40 hover:backdrop-blur-sm transition-colors cursor-pointer"
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
                            className="pl-3 pr-1 py-2 space-y-3 bg-white/35 backdrop-blur-md border border-white/45 rounded-xl my-1 overflow-hidden"
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
                                      className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0051fe] hover:bg-white/50 rounded-lg transition-colors"
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

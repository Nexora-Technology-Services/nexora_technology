"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/app/Photo/Nexora-Logo.png";

const FLYOUT_STYLES = {
  background: "rgba(255, 255, 255, 0.92)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255, 255, 255, 0.95)",
  boxShadow:
    "0 20px 45px -10px rgba(0, 81, 254, 0.15), 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(0, 81, 254, 0.06)",
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeSubSub, setActiveSubSub] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveSubMenu(null);
        setActiveSubSub(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setActiveDropdown(null);
    setActiveSubMenu(null);
    setActiveSubSub(null);
    setMobileMenuOpen(false);
    setHoveredNav(null);
  };

  useEffect(() => {
    closeAll();
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      children: [
        {
          name: "Our Organization",
          href: "/components/Organization",
          sub: [
            { name: "Overview", href: "/components/Organization" },
            { name: "Who We Are", href: "/organization/who-we-are" },
            { name: "Execution Model", href: "/organization/execution-model" },
            { name: "Why Nexora", href: "/organization/why-nexora" },
            { name: "Media & Investors", href: "/components/Media" },
          ],
        },
        { name: "Leaders", href: "/about" },
      ],
    },
    {
      label: "What We Serve",
      children: [
        { name: "Industry", href: "/components/IndustriesServed" },
        {
          name: "Services",
          href: "/what-we-serve/services",
          sub: [
            { name: "Data & AI", href: "/services/dataAi" },
            {
              name: "Application Services",
              href: "/what-we-serve/services/application-services",
              sub: [
                { name: "ERP", href: "/components/ERPService" },
                {
                  name: "Custom ERP Developments",
                  href: "/components/CustomDevelopment",
                },
              ],
            },
            { name: "Cloud Services", href: "/services/cloud-solution" },
            { name: "Consulting", href: "/components/Consulting" },
            { name: "Quality Assurance", href: "/services/Quality-Assurance" },
          ],
        },
        { name: "Product", href: "/components/ProductDevelopment" },
        {
          name: "Learning & Development",
          href: "/services/Learning-Development",
        },
        { name: "Talent Acquisition", href: "/services/Talent-Acquisition" },
      ],
    },
    {
      label: "Life @NTS",
      children: [{ name: "Working @ NTS", href: "/components/WorkingAtNTS" }],
    },
    { label: "Careers", href: "/components/Careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const DotAccent = () => (
    <span className="inline-block w-2 h-2 rounded-full bg-[#0051fe] shrink-0 shadow-[0_0_8px_rgba(0,81,254,0.35)]" />
  );

  const ChevronRightIcon = () => (
    <svg
      className="ml-auto opacity-50 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.8}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.nav
        ref={navRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onMouseLeave={() => {
          setHoveredNav(null);
        }}
        className={`pointer-events-auto w-full max-w-6xl xl:max-w-7xl rounded-2xl sm:rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-[0_16px_40px_-8px_rgba(0,81,254,0.16),0_0_0_1px_rgba(255,255,255,0.95)] backdrop-blur-2xl py-2 px-4 sm:px-6"
            : "bg-white/80 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),0_0_0_1px_rgba(255,255,255,0.9)] backdrop-blur-xl py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2 shrink-0 group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative overflow-hidden rounded-xl"
            >
              <Image
                src={logo}
                alt="Nexora Technology Logo"
                width={135}
                height={40}
                className="h-9 w-auto object-contain transition-transform duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 relative">
            {navItems.map((item) => {
              const isActive = item.href ? pathname === item.href : false;
              const isHovered = hoveredNav === item.label;
              const isOpen = activeDropdown === item.label;

              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onMouseEnter={() => {
                      setHoveredNav(item.label);
                      setActiveDropdown(null);
                      setActiveSubMenu(null);
                      setActiveSubSub(null);
                    }}
                    onClick={closeAll}
                    className={`relative px-3.5 xl:px-4 py-2 rounded-full text-[15px] font-bold tracking-[-0.01em] transition-colors duration-200 select-none ${
                      isActive
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
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scaleX: 0.8 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-[-2px] left-3.5 right-3.5 h-[3px] bg-[#0051fe] rounded-full shadow-[0_2px_8px_rgba(0,81,254,0.4)]"
                      />
                    )}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredNav(item.label);
                    setActiveDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubMenu(null);
                    setActiveSubSub(null);
                  }}
                >
                  <button
                    onClick={() => {
                      setActiveDropdown(isOpen ? null : item.label);
                      setActiveSubMenu(null);
                      setActiveSubSub(null);
                    }}
                    className={`relative px-3.5 xl:px-4 py-2 rounded-full text-[15px] font-bold tracking-[-0.01em] flex items-center gap-1.5 transition-colors duration-200 select-none ${
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
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-[#0051fe]" : "opacity-70"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.6}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  {/* Level 1 Dropdown with Framer Motion */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-[calc(100%+8px)] min-w-[245px] p-2 rounded-2xl z-50 origin-top-left"
                        style={FLYOUT_STYLES}
                      >
                        {item.children.map((child, idx) => {
                          const hasSub = "sub" in child && child.sub;
                          const isSubOpen = activeSubMenu === child.name;

                          return (
                            <div
                              key={idx}
                              className="relative group/item"
                              onMouseEnter={() => {
                                if (hasSub) {
                                  setActiveSubMenu(child.name);
                                  setActiveSubSub(null);
                                } else {
                                  setActiveSubMenu(null);
                                }
                              }}
                            >
                              {hasSub ? (
                                <div
                                  className={`flex items-center gap-2.5 px-3.5 py-2.5 text-[14.5px] font-bold rounded-xl mx-0.5 my-0.5 cursor-pointer transition-all duration-200 select-none ${
                                    isSubOpen
                                      ? "bg-gradient-to-r from-blue-50 to-indigo-50/70 text-[#0051fe] pl-4.5 shadow-sm"
                                      : "text-slate-800 hover:text-[#0051fe] hover:bg-blue-50/70 hover:pl-4.5"
                                  }`}
                                >
                                  <DotAccent />
                                  <span className="flex-1">{child.name}</span>
                                  <ChevronRightIcon />

                                  {/* Level 2 Flyout with Framer Motion */}
                                  <AnimatePresence>
                                    {isSubOpen && (
                                      <motion.div
                                        initial={{
                                          opacity: 0,
                                          x: -8,
                                          scale: 0.97,
                                        }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{
                                          opacity: 0,
                                          x: -6,
                                          scale: 0.98,
                                        }}
                                        transition={{
                                          duration: 0.2,
                                          ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="absolute left-[calc(100%+6px)] top-0 min-w-[240px] p-2 rounded-2xl z-50 origin-top-left"
                                        style={FLYOUT_STYLES}
                                      >
                                        {(child as any).sub.map(
                                          (subItem: any, sIdx: number) => {
                                            const hasSubSub =
                                              "sub" in subItem && subItem.sub;
                                            const isSubSubOpen =
                                              activeSubSub === subItem.name;

                                            return (
                                              <div
                                                key={sIdx}
                                                className="relative group/subitem"
                                                onMouseEnter={() => {
                                                  if (hasSubSub) {
                                                    setActiveSubSub(
                                                      subItem.name,
                                                    );
                                                  } else {
                                                    setActiveSubSub(null);
                                                  }
                                                }}
                                              >
                                                {hasSubSub ? (
                                                  <div
                                                    className={`flex items-center gap-2.5 px-3.5 py-2.5 text-[14.5px] font-bold rounded-xl mx-0.5 my-0.5 cursor-pointer transition-all duration-200 select-none ${
                                                      isSubSubOpen
                                                        ? "bg-gradient-to-r from-blue-50 to-indigo-50/70 text-[#0051fe] pl-4.5 shadow-sm"
                                                        : "text-slate-800 hover:text-[#0051fe] hover:bg-blue-50/70 hover:pl-4.5"
                                                    }`}
                                                  >
                                                    <DotAccent />
                                                    <span className="flex-1">
                                                      {subItem.name}
                                                    </span>
                                                    <ChevronRightIcon />

                                                    {/* Level 3 Flyout */}
                                                    <AnimatePresence>
                                                      {isSubSubOpen && (
                                                        <motion.div
                                                          initial={{
                                                            opacity: 0,
                                                            x: -8,
                                                            scale: 0.97,
                                                          }}
                                                          animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                            scale: 1,
                                                          }}
                                                          exit={{
                                                            opacity: 0,
                                                            x: -6,
                                                            scale: 0.98,
                                                          }}
                                                          transition={{
                                                            duration: 0.18,
                                                            ease: [
                                                              0.16, 1, 0.3, 1,
                                                            ],
                                                          }}
                                                          className="absolute left-[calc(100%+6px)] top-0 min-w-[230px] p-2 rounded-2xl z-50 origin-top-left"
                                                          style={FLYOUT_STYLES}
                                                        >
                                                          {subItem.sub.map(
                                                            (
                                                              ssItem: any,
                                                              ssIdx: number,
                                                            ) => (
                                                              <Link
                                                                key={ssIdx}
                                                                href={
                                                                  ssItem.href
                                                                }
                                                                className="flex items-center gap-2.5 px-3.5 py-2.5 text-[14.5px] font-bold text-slate-800 hover:text-[#0051fe] hover:bg-blue-50/80 hover:pl-4.5 rounded-xl mx-0.5 my-0.5 transition-all duration-200"
                                                                onClick={
                                                                  closeAll
                                                                }
                                                              >
                                                                <DotAccent />
                                                                <span>
                                                                  {ssItem.name}
                                                                </span>
                                                              </Link>
                                                            ),
                                                          )}
                                                        </motion.div>
                                                      )}
                                                    </AnimatePresence>
                                                  </div>
                                                ) : (
                                                  <Link
                                                    href={subItem.href}
                                                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-[14.5px] font-bold text-slate-800 hover:text-[#0051fe] hover:bg-blue-50/80 hover:pl-4.5 rounded-xl mx-0.5 my-0.5 transition-all duration-200"
                                                    onClick={closeAll}
                                                  >
                                                    <DotAccent />
                                                    <span>{subItem.name}</span>
                                                  </Link>
                                                )}
                                              </div>
                                            );
                                          },
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  href={child.href}
                                  className="flex items-center gap-2.5 px-3.5 py-2.5 text-[14.5px] font-bold text-slate-800 hover:text-[#0051fe] hover:bg-blue-50/80 hover:pl-4.5 rounded-xl mx-0.5 my-0.5 transition-all duration-200"
                                  onClick={closeAll}
                                >
                                  <DotAccent />
                                  <span>{child.name}</span>
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                className="px-5 py-2.5 rounded-full bg-[#0051fe] hover:bg-[#0043d4] text-white text-[13px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,81,254,0.35)] hover:shadow-[0_8px_24px_rgba(0,81,254,0.5)] transition-all duration-200 group"
              >
                <span>GET STARTED</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#0051fe] hover:bg-blue-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer with Framer Motion */}
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
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href!}
                      onClick={closeAll}
                      className="block px-3.5 py-2.5 rounded-xl text-base font-bold text-slate-900 hover:text-[#0051fe] hover:bg-blue-50/80 transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isExpanded = mobileExpanded === item.label;

                return (
                  <div key={item.label} className="rounded-xl overflow-hidden">
                    <button
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-bold text-slate-900 hover:text-[#0051fe] hover:bg-blue-50/80 transition-colors"
                    >
                      <span>{item.label}</span>
                      <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-3 pr-1 py-1 space-y-1 bg-slate-50/60 rounded-xl my-1 overflow-hidden"
                        >
                          {item.children.map((child, idx) => {
                            if ("sub" in child && child.sub) {
                              return (
                                <div key={idx} className="space-y-1 py-1">
                                  <p className="px-3 text-[13px] font-extrabold text-[#0051fe] tracking-wider uppercase">
                                    {child.name}
                                  </p>
                                  <div className="pl-2 space-y-1">
                                    {(child as any).sub.map(
                                      (subItem: any, sIdx: number) => {
                                        if ("sub" in subItem && subItem.sub) {
                                          return (
                                            <div
                                              key={sIdx}
                                              className="space-y-1"
                                            >
                                              <p className="px-3 text-xs font-bold text-slate-600">
                                                {subItem.name}
                                              </p>
                                              <div className="pl-2 space-y-0.5">
                                                {subItem.sub.map(
                                                  (
                                                    ssItem: any,
                                                    ssIdx: number,
                                                  ) => (
                                                    <Link
                                                      key={ssIdx}
                                                      href={ssItem.href}
                                                      onClick={closeAll}
                                                      className="block px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0051fe] hover:bg-white rounded-lg transition-colors"
                                                    >
                                                      • {ssItem.name}
                                                    </Link>
                                                  ),
                                                )}
                                              </div>
                                            </div>
                                          );
                                        }
                                        return (
                                          <Link
                                            key={sIdx}
                                            href={subItem.href}
                                            onClick={closeAll}
                                            className="block px-3 py-1.5 text-sm font-bold text-slate-800 hover:text-[#0051fe] hover:bg-white rounded-lg transition-colors"
                                          >
                                            {subItem.name}
                                          </Link>
                                        );
                                      },
                                    )}
                                  </div>
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={idx}
                                href={child.href}
                                onClick={closeAll}
                                className="block px-3 py-2 text-sm font-bold text-slate-800 hover:text-[#0051fe] hover:bg-white rounded-lg transition-colors"
                              >
                                {child.name}
                              </Link>
                            );
                          })}
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
                  GET STARTED
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
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

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Organisation", href: "/components/Organization" },
    { name: "Careers", href: "/components/Careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const organisationLinks = [
    { name: "Overview", href: "/components/Organization" },
    { name: "Who We Are", href: "/organization/who-we-are" },
    { name: "Execution Model", href: "/organization/execution-model" },
    { name: "Why Nexora", href: "/organization/why-nexora" },
    { name: "Leaders", href: "/about" },
    { name: "Media & Investors", href: "/components/Media" },
  ];

  const servicesLinks = [
    { name: "What We Serve", href: "/what-we-serve/services" },
    { name: "Data & AI", href: "/services/dataAi" },
    {
      name: "Application Services",
      href: "/what-we-serve/services/application-services",
    },
    { name: "ERP Solutions", href: "/components/ERPService" },
    { name: "Custom ERP Developments", href: "/components/CustomDevelopment" },
    { name: "Cloud Services", href: "/services/cloud-solution" },
    { name: "Consulting", href: "/components/Consulting" },
    { name: "Quality Assurance", href: "/services/Quality-Assurance" },
  ];

  return (
    <footer className="w-full bg-slate-950 text-white relative overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] shadow-2xl">
      {/* Ambient Top Light Beam */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#0051fe]/25 to-transparent blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Brand Info + Contact Section + Follow Us */}
          <div className="md:col-span-4 flex flex-col items-start space-y-5">
            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight font-heading mb-2">
                Nexora <span className="text-[#0051fe]">Technology</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Pioneering enterprise digital transformation, scalable cloud
                architectures, AI workflows, and bespoke software engineering.
              </p>
            </div>

            {/* Contact Details (Moved Under Brand Column) */}
            <div className="space-y-2.5 text-sm text-slate-400 w-full pt-2">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0051fe] shrink-0" />
                <a
                  href="mailto:info@nexoratechnology.co.in"
                  className="text-slate-300 hover:text-[#0051fe] transition-colors"
                >
                  info@nexoratechnology.co.in
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0051fe] shrink-0" />
                <a
                  href="tel:+919886071933"
                  className="text-slate-300 hover:text-[#0051fe] transition-colors"
                >
                  +91 98860 71933
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0051fe] shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  Bengaluru, Karnataka, India
                </span>
              </p>
            </div>

            {/* Follow Us (Icon Only) */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Nexora on ${item.name}`}
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-[#0051fe] hover:border-[#0051fe] hover:shadow-[0_4px_16px_rgba(0,81,254,0.4)] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200 cursor-pointer"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0051fe]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Organisation (All Sub Menu Items) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 font-heading">
              Organisation
            </h4>
            <ul className="space-y-2.5">
              {organisationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0051fe]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services (All Sub Menu Items) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 font-heading">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#0051fe]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Nexora Technology Services Pvt. Ltd.
            All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0051fe] animate-pulse" />
            <span>Build with Nexora. Grow without limits.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

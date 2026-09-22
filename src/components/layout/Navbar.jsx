"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import LanguageToggle from "@/components/LanguageToggle";

const leftLinks = [
  { name: "Home", href: "/" },
  {
    name: "Practice Areas",
    href: "/services",
    dropdown: [
      { name: "Civil Traffic Infractions", href: "/services#civil-traffic" },
      { name: "Criminal Traffic & Crime Cases", href: "/services#criminal-traffic" },
      { name: "Civil & Commercial Litigation", href: "/services#civil-litigation" },
    ],
  },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Meet Our Attorneys", href: "/about" },
      { name: "Lizette P. Benitez", href: "/about#lizette" },
      { name: "Leo Benitez", href: "/about#leo" },
    ],
  },
];

const rightLinks = [
  { name: "Reviews", href: "/reviews" },
  { name: "Contact Us", href: "/contact" },
  { name: "Submit Ticket", href: "/submit-ticket" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/" || pathname === "/home";
    return pathname.startsWith(href.split("#")[0]);
  };

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const renderDesktopLink = (link) => {
    if (link.dropdown) {
      return (
        <div
          key={link.name}
          className="relative"
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors px-3 py-2 rounded-lg ${
              isActive(link.href)
                ? "text-brand-gold"
                : "text-brand-blue hover:text-brand-gold"
            }`}
            aria-expanded={activeDropdown === link.name}
            aria-haspopup="true"
          >
            {link.name}
            <FaChevronDown
              className={`text-[10px] transition-transform ${
                activeDropdown === link.name ? "rotate-180" : ""
              }`}
            />
          </button>

          {activeDropdown === link.name && (
            <div
              className="absolute top-full left-0 mt-1 min-w-[260px] bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              {link.dropdown.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  className="block px-5 py-3 text-sm text-gray-700 hover:bg-brand-blue/5 hover:text-brand-blue transition-colors font-medium"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={link.name}
        href={link.href}
        className={`text-sm font-semibold tracking-wide uppercase transition-colors px-3 py-2 rounded-lg ${
          isActive(link.href)
            ? "text-brand-gold"
            : "text-brand-blue hover:text-brand-gold"
        }`}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-blue text-white text-xs py-2 z-50 hidden lg:block">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+13054420243"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <FaPhoneAlt className="text-brand-gold" />
              (305) 442-0243
            </a>
            <span className="text-white/50">|</span>
            <a
              href="mailto:thetrafficlawfirm@gmail.com"
              className="hover:text-brand-gold transition-colors"
            >
             thetrafficlawfirm@gmail.com 
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">
              122 Minorca Ave, Coral Gables, FL 33134
            </span>
            <span className="text-white/30">|</span>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left Links (desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              {leftLinks.map(renderDesktopLink)}
            </div>

            {/* Center Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/images/tlf-logo-3d.png"
                alt="The Traffic Law Firm"
                width={160}
                height={60}
                className="h-14 lg:h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right Links (desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              {rightLinks.map(renderDesktopLink)}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 lg:hidden">
              <div className="lg:hidden">
                <LanguageToggle />
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-brand-blue text-3xl p-1"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-2xl lg:hidden overflow-y-auto">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <Image
                  src="/assets/images/tlf-logo-3d.png"
                  alt="TLF"
                  width={120}
                  height={45}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-blue text-2xl"
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              <div className="p-5 space-y-1">
                {[...leftLinks, ...rightLinks].map((link) => {
                  if (link.dropdown) {
                    return (
                      <div key={link.name}>
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === link.name ? null : link.name
                            )
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                            isActive(link.href)
                              ? "text-brand-gold bg-brand-blue/5"
                              : "text-brand-blue hover:bg-brand-blue/5"
                          }`}
                        >
                          {link.name}
                          <FaChevronDown
                            className={`text-xs transition-transform ${
                              mobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileDropdown === link.name && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-gold/30 pl-4">
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-blue transition-colors rounded-lg"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive(link.href)
                          ? "text-brand-gold bg-brand-blue/5"
                          : "text-brand-blue hover:bg-brand-blue/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+13054420243"
                  className="flex items-center justify-center gap-2 w-full bg-brand-blue text-white py-3 rounded-xl font-bold hover:bg-brand-blue-light transition-colors"
                >
                  <FaPhoneAlt />
                  (305) 442-0243
                </a>
                <Link
                  href="/submit-ticket"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center w-full bg-brand-gold text-white py-3 rounded-xl font-bold hover:bg-brand-gold-light transition-colors"
                >
                  Submit Ticket
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

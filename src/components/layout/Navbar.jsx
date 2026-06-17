"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "Services",
    "Citations",
    "Violations",
    "About",
    "FAQ",
    "Contact",
  ];

  return (
    <>
      <header
        className={`fixed bg-black/90 top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-yellow-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <Link href="/">
              <h2 className="text-2xl font-black text-white">
                Traffic
                <span className="text-yellow-400"> Ticket</span>
              </h2>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white/90 hover:text-yellow-400 transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button className="px-5 py-3 rounded-xl border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                Call Now
              </button>

              <button className="px-5 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-105 transition">
                Submit Ticket
              </button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white text-3xl"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 z-60 h-screen w-[320px] bg-black transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-xl font-bold">
              Traffic Ticket
            </h3>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl"
            >
              <HiX />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {links.map((item) => (
              <a
                key={item}
                href="item"
                className="text-white text-lg hover:text-yellow-400"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <Link href="/submit-ticket"> 
            <button className="bg-yellow-400 text-black py-3 rounded-xl font-semibold">
              Submit Ticket
            </button>
            </Link>

<Link href="/contact">
            <button className="border border-yellow-400 text-yellow-400 py-3 rounded-xl">
              Call Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
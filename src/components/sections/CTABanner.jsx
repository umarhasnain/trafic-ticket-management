"use client";

import Link from "next/link";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function CTABanner() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,90,0.12),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden bg-brand-blue rounded-[40px] p-10 lg:p-16 shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 px-4 py-2 rounded-full font-semibold text-brand-gold text-sm tracking-wide">
                TAKE ACTION NOW
              </span>

              <h2 className="mt-6 text-4xl lg:text-6xl font-black text-white leading-tight">
                Don't Wait Until Your Court Date.
              </h2>

              <p className="mt-5 text-gray-200 text-lg max-w-xl">
                Submit your ticket today and get started with a fast,
                secure, and professional review process.
              </p>
            </div>

            <div className="flex flex-wrap lg:justify-end gap-4">
              <Link href="/submit-ticket">
                <button className="bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-brand-gold/25 cursor-pointer">
                  Submit Ticket
                  <FaArrowRight />
                </button>
              </Link>

              <a href="tel:+13054420243">
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                  <FaPhoneAlt className="text-brand-gold" />
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
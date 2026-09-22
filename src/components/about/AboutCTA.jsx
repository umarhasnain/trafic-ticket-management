"use client";

import Link from "next/link";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden bg-brand-blue rounded-[40px] p-10 sm:p-14 lg:p-20 text-center shadow-2xl"
        >
          {/* Decorative glow elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 px-4 py-1.5 rounded-full font-semibold text-brand-gold text-xs sm:text-sm tracking-widest uppercase mb-6">
              TAKE ACTION TODAY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready To Take Action?
            </h2>

            <p className="mt-5 text-gray-200 text-base sm:text-lg leading-relaxed">
              Submit your traffic ticket today and let our experienced legal team
              help you protect your driving record and license.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/submit-ticket">
                <button className="bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-brand-gold/25 cursor-pointer">
                  Submit Ticket
                  <FaArrowRight />
                </button>
              </Link>

              <a href="tel:+13054420243">
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                  <FaPhoneAlt className="text-brand-gold" />
                  Call (305) 442-0243
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
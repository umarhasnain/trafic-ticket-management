"use client";

import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function CTABanner() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#facc1540,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div
          data-aos="zoom-in"
          className="bg-gradient-to-r from-[#ff4103] via-yellow-500 to-[#ff4103] rounded-[40px] p-10 lg:p-16 shadow-[0_20px_80px_rgba(250,204,21,.35)]"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-black/10 px-4 py-2 rounded-full font-semibold">
                TAKE ACTION NOW
              </span>

              <h2 className="mt-6 text-4xl lg:text-6xl font-black text-black">
                Don't Wait Until Your Court Date.
              </h2>

              <p className="mt-5 text-black/80 text-lg max-w-xl">
                Submit your ticket today and get started with a fast,
                secure, and professional review process.
              </p>
            </div>

            <div className="flex flex-wrap lg:justify-end gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Submit Ticket
                <FaArrowRight />
              </button>

              <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <FaPhoneAlt />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
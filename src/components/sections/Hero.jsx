"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/img1.png"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/images/highway-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-32 w-full text-center">
        <div data-aos="fade-up">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/images/tlf-logo-3d.png"
              alt="TLF"
              width={200}
              height={80}
              className="h-20 lg:h-28 w-auto object-contain drop-shadow-2xl animate-swoosh"
              priority
            />
          </div>

          {/* Firm Name */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
            THE TRAFFIC
            <br />
            <span className="text-brand-gold">LAW FIRM</span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Here to Defend You — Over 30 years of dedicated legal
            representation for drivers in Miami and South Florida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/submit-ticket">
              <button className="bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-brand-gold/25">
                Submit Citation →
              </button>
            </Link>
            <a href="tel:+13054420243">
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10 backdrop-blur-sm transition-all">
                <FaPhoneAlt className="text-brand-gold" />
                Call (305) 442-0243
              </button>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16 mt-14">
            <div>
              <h3 className="text-brand-gold text-3xl lg:text-4xl font-black">
                30+
              </h3>
              <p className="text-white/60 text-sm mt-1">Years Experience</p>
            </div>

            <div className="w-px bg-white/20 hidden lg:block" />

            <div>
              <h3 className="text-brand-gold text-3xl lg:text-4xl font-black">
                10K+
              </h3>
              <p className="text-white/60 text-sm mt-1">Cases Handled</p>
            </div>

            <div className="w-px bg-white/20 hidden lg:block" />

            <div>
              <h3 className="text-brand-gold text-3xl lg:text-4xl font-black">
                95%
              </h3>
              <p className="text-white/60 text-sm mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-brand-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
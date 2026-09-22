"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHome, FaPhoneAlt, FaTicketAlt } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-white flex items-center justify-center py-20 px-5">
      <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
        {/* TLF Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/images/tlf-logo-3d.png"
            alt="The Traffic Law Firm"
            width={180}
            height={70}
            className="h-16 w-auto object-contain drop-shadow"
            priority
          />
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/15 text-brand-blue font-bold text-xs tracking-wider uppercase mb-4">
          Error 404 — Page Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-blue tracking-tight">
          Lost Your Way?
        </h1>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
          The page you are looking for does not exist or may have been moved. Let our legal team get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/">
            <button className="bg-brand-blue hover:bg-brand-blue-light text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer">
              <FaHome className="text-brand-gold" />
              <span>Back to Home</span>
            </button>
          </Link>

          <Link href="/submit-ticket">
            <button className="bg-brand-gold hover:bg-brand-gold-light text-white px-7 py-3.5 rounded-xl font-bold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer">
              <FaTicketAlt />
              <span>Submit Citation</span>
            </button>
          </Link>

          <a href="tel:3054420243">
            <button className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-7 py-3.5 rounded-xl font-bold transition-all inline-flex items-center gap-2 cursor-pointer">
              <FaPhoneAlt className="text-brand-gold" />
              <span>(305) 442-0243</span>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}


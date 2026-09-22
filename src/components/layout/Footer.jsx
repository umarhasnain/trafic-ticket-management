"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/assets/images/tlf-logo-3d.png"
              alt="The Traffic Law Firm"
              width={180}
              height={65}
              className="h-16 w-auto object-contain brightness-0 invert"
            />

            <p className="mt-5 text-white/60 max-w-md leading-relaxed">
              Over 30 years defending drivers in Miami. The Traffic
              Law Firm is here to defend you with dedication,
              personal attention, and proven results.
            </p>

            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="w-11 h-11 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold transition-all"
                  >
                    <Icon />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-5 text-brand-gold">
              Quick Links
            </h3>

            <div className="space-y-3 text-white/60">
              <Link href="/" className="block hover:text-brand-gold transition-colors">Home</Link>
              <Link href="/services" className="block hover:text-brand-gold transition-colors">Practice Areas</Link>
              <Link href="/about" className="block hover:text-brand-gold transition-colors">About Us</Link>
              <Link href="/reviews" className="block hover:text-brand-gold transition-colors">Reviews</Link>
              <Link href="/contact" className="block hover:text-brand-gold transition-colors">Contact Us</Link>
              <Link href="/submit-ticket" className="block hover:text-brand-gold transition-colors">Submit Citation</Link>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-bold text-xl mb-5 text-brand-gold">
              Practice Areas
            </h3>

            <div className="space-y-3 text-white/60">
              <p>Civil Traffic Infractions</p>
              <p>Criminal Traffic & Crime</p>
              <p>Civil & Commercial Litigation</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-5 text-brand-gold">
              Contact
            </h3>

            <div className="space-y-4 text-white/60">
              <div className="flex gap-3 items-start">
                <FaPhoneAlt className="text-brand-gold mt-1" />
                <a href="tel:+13054420243" className="hover:text-brand-gold transition-colors">
                  (305) 442-0243
                </a>
              </div>

              <div className="flex gap-3 items-start">
                <FaEnvelope className="text-brand-gold mt-1" />
                <a href="mailto:info@heretodefendyou.com" className="hover:text-brand-gold transition-colors text-sm">     
                  info@heretodefendyou.com
                </a>
              </div>

              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-brand-gold mt-1" />
                <span>
                  122 Minorca Avenue,
                  <br />
                  Coral Gables, FL 33134
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-center md:text-left">
            © 2026 The Traffic Law Firm. All Rights Reserved.
          </p>

          <p className="text-white/40">
            Developed by {"Bloops Designs"}.
          </p>
        </div>
      </div>
    </footer>
  );
}
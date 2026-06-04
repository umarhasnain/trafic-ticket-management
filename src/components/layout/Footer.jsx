"use client";

import Link from "next/link";
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
    <footer className="bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black">
              Traffic
              <span className="text-yellow-400">
                {" "}
                Ticket
              </span>
            </h2>

            <p className="mt-5 text-gray-400 max-w-md leading-relaxed">
              Helping drivers submit traffic tickets quickly and
              receive professional guidance through a secure and
              streamlined process.
            </p>

            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="w-11 h-11 rounded-full border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
                  >
                    <Icon />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Company
            </h3>

            <div className="space-y-3 text-gray-400">
              <Link href="/">About Us</Link>
              <br />
              <Link href="/">Contact</Link>
              <br />
              <Link href="/">Privacy Policy</Link>
              <br />
              <Link href="/">Terms & Conditions</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Services
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Traffic Tickets</p>
              <p>Case Reviews</p>
              <p>Legal Referrals</p>
              <p>Support</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex gap-3 items-start">
                <FaPhoneAlt className="text-yellow-400 mt-1" />
                <span>(305) 442-0243</span>
              </div>

              <div className="flex gap-3 items-start">
                <FaEnvelope className="text-yellow-400 mt-1" />
                <span>
                  info@heretodefendyou.com
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
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
          <p className="text-gray-500 text-center md:text-left">
            © 2026 Traffic Ticket. All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Developed by {"Bloops Designs"}.
          </p>
        </div>
      </div>
    </footer>
  );
}
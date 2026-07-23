"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaShieldAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#facc1530,transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500 bg-orange-500/10 text-orange-300 text-sm mb-6">
              <FaShieldAlt />
              Trusted Traffic Citation Support
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-tight">
              Got a
              <span className="text-orange-400"> Traffic Ticket?</span>
              <br />
              Submit It
              <span className="text-orange-400">
                {" "}
                Immediately.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Upload your traffic ticket in under 60 seconds and get
              connected with professionals who can review your case,
              reduce penalties, and protect your driving record.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/submit-ticket">
                <button className="bg-orange-400 hover:bg-orange-300 text-black px-8 py-4 rounded-xl font-bold transition hover:scale-105">
                  Submit Ticket →
                </button>
              </Link>
<Link href="tel:+3054420243">



              <button className="border border-orange-400 text-orange-400 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-orange-400 hover:text-black transition">
                <FaPhoneAlt />
                Call Now
              </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <h3 className="text-orange-400 text-3xl font-black">
                  10K+
                </h3>
                <p className="text-gray-400">Cases Reviewed</p>
              </div>

              <div>
                <h3 className="text-orange-400 text-3xl font-black">
                  95%
                </h3>
                <p className="text-gray-400">Success Rate</p>
              </div>

              <div>
                <h3 className="text-orange-400 text-3xl font-black">
                  24/7
                </h3>
                <p className="text-gray-400">Support</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div data-aos="fade-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-400 blur-3xl opacity-20 rounded-full" />

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-5">
                <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/images/img4.png"
                    alt="Traffic Ticket Upload"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-10 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-5 border border-orange-500/20">
                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <h4 className="text-white font-semibold">
                      Upload Your Ticket in Under 60 Seconds
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">
                      Fast, secure and confidential review process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
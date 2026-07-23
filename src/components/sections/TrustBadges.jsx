"use client";

import Image from "next/image";
import {
  FaShieldAlt,
  FaLock,
  FaBolt,
  FaUserShield,
  FaAward,
} from "react-icons/fa";

const badges = [
  {
    icon: FaShieldAlt,
    title: "Licensed Professionals",
    desc: "Experienced traffic ticket specialists ready to help.",
  },
  {
    icon: FaLock,
    title: "Secure Submission",
    desc: "Your information stays protected and encrypted.",
  },
  {
    icon: FaBolt,
    title: "Fast Response",
    desc: "Receive updates and case reviews quickly.",
  },
  {
    icon: FaUserShield,
    title: "Confidential Review",
    desc: "Private and secure handling of every submission.",
  },
  {
    icon: FaAward,
    title: "Customer Satisfaction",
    desc: "Trusted by thousands of drivers nationwide.",
  },
];

export default function TrustBadges() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-700">
            TRUSTED PLATFORM
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-gray-900">
            Trusted By Drivers Across The Country
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Fast, secure and professional assistance for traffic
            citations and violations.
          </p>
        </div>

        {/* ================= HERO IMAGE ================= */}
        <div
          data-aos="zoom-in"
          className="relative mt-14 mb-16 overflow-hidden rounded-[30px] shadow-2xl"
        >
          <Image
            src="/assets/images/img1.png"
            alt="Trusted Traffic Ticket Services"
            width={1400}
            height={700}
            priority
            className="h-[280px] md:h-[420px] w-full object-cover transition duration-700 hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-8 md:px-14 text-white">
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                ⭐ Trusted Since Day One
              </span>

              <h3 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                Protect Your Driving Record With Confidence
              </h3>

              <p className="mt-5 text-base md:text-lg text-gray-200 leading-relaxed">
                Our experienced traffic ticket professionals provide fast,
                confidential, and reliable legal assistance to help drivers
                resolve violations quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
        {/* ================= END HERO IMAGE ================= */}

        {/* Trust Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {badges.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-500 transition group-hover:rotate-6">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
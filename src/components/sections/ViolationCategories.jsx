"use client";

import {
  FaCarCrash,
  FaTrafficLight,
  FaBan,
  FaExclamationTriangle,
  FaIdCard,
  FaFileAlt,
  FaParking,
  FaMobileAlt,
  FaRoad,
  FaTruck,
  FaBalanceScale,
  FaGavel,
} from "react-icons/fa";

const violations = [
  {
    icon: FaRoad,
    title: "Speeding Tickets",
  },
  {
    icon: FaTrafficLight,
    title: "Red Light Violations",
  },
  {
    icon: FaBan,
    title: "Stop Sign Tickets",
  },
  {
    icon: FaCarCrash,
    title: "Reckless Driving",
  },
  {
    icon: FaIdCard,
    title: "No Insurance",
  },
  {
    icon: FaFileAlt,
    title: "License Suspension",
  },
  {
    icon: FaTruck,
    title: "Commercial Driver Tickets",
  },
  {
    icon: FaMobileAlt,
    title: "Cell Phone Violations",
  },
  {
    icon: FaParking,
    title: "Parking Violations",
  },
  {
    icon: FaBalanceScale,
    title: "Court Assistance",
  },
  {
    icon: FaExclamationTriangle,
    title: "DUI Consultation",
  },
  {
    icon: FaGavel,
    title: "Other Citations",
  },
];

export default function ViolationCategories() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#facc1520,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
            VIOLATION TYPES
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-white">
            Traffic Violations We Handle
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Professional support for a wide range of traffic citations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {violations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  Get assistance and professional review for this
                  violation category.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
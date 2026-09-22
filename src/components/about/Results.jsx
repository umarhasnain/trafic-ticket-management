"use client";

import {
  FaGavel,
  FaShieldAlt,
  FaBalanceScale,
  FaCheckCircle,
} from "react-icons/fa";

const results = [
  {
    icon: FaCheckCircle,
    title: "Reduced Penalties",
    description: "Minimizing fines and avoiding mandatory court appearances.",
  },
  {
    icon: FaGavel,
    title: "Dismissed Citations",
    description: "Challenging improper citations to achieve complete dismissal.",
  },
  {
    icon: FaShieldAlt,
    title: "License Protection",
    description: "Keeping points off your record and defending your driving privileges.",
  },
  {
    icon: FaBalanceScale,
    title: "Court Representation",
    description: "Experienced defense in court hearings without you having to take time off.",
  },
];

export default function Results() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-brand-gold/15 border border-brand-gold/30 px-4 py-1.5 rounded-full font-semibold text-brand-gold text-xs sm:text-sm tracking-widest uppercase mb-4">
            WHAT WE ACHIEVE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-blue tracking-tight">
            Proven Results
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-brand-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/15 flex items-center justify-center text-brand-gold text-2xl mb-6 flex-shrink-0">
                  <Icon />
                </div>

                <h3 className="font-bold text-xl text-brand-blue">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
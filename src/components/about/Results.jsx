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
  },
  {
    icon: FaGavel,
    title: "Dismissed Citations",
  },
  {
    icon: FaShieldAlt,
    title: "License Protection",
  },
  {
    icon: FaBalanceScale,
    title: "Court Representation",
  },
];

export default function Results() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900">
            Proven Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                className="p-8 rounded-3xl border border-gray-200 hover:border-orange-400 hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                  <Icon />
                </div>

                <h3 className="mt-6 font-bold text-xl">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
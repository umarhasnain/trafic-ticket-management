"use client";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael R.",
    role: "Driver",
    review:
      "The process was incredibly simple. I uploaded my ticket and received guidance within hours.",
  },
  {
    name: "Sarah J.",
    role: "Driver",
    review:
      "Professional support and excellent communication throughout the entire process.",
  },
  {
    name: "David K.",
    role: "Commercial Driver",
    review:
      "Saved me time and helped me understand my options immediately. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto"
        >
          <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-gray-900">
            What Drivers Are Saying
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Thousands of drivers trust our platform every year.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-gray-900">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Cards */}
        <div className="lg:hidden flex gap-5 overflow-x-auto mt-10 pb-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white p-6 rounded-3xl shadow-lg border border-gray-200"
            >
              <div className="flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-4 text-gray-600">
                "{item.review}"
              </p>

              <h4 className="mt-5 font-bold">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
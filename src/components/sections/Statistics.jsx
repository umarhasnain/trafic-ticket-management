"use client";

import { useEffect, useState } from "react";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return count;
}

export default function Statistics() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,90,0.12),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-5xl font-black text-brand-gold">
              <Counter end={10000} />+
            </h3>
            <p className="text-gray-600 mt-3 font-medium">Cases Reviewed</p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-5xl font-black text-brand-gold">
              <Counter end={95} />%
            </h3>
            <p className="text-gray-600 mt-3 font-medium">
              Customer Satisfaction
            </p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-5xl font-black text-brand-gold">
              24/7
            </h3>
            <p className="text-gray-600 mt-3 font-medium">Support Available</p>
          </div>

          <div className="text-center p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-5xl font-black text-brand-gold">
              <Counter end={50} />+
            </h3>
            <p className="text-gray-600 mt-3 font-medium">Regions Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
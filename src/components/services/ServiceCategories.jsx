"use client";

import Link from "next/link";
import { FaCar, FaGavel } from "react-icons/fa";

export default function ServiceCategories() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">Legal Services We Provide</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            className="rounded-4xl bg-white text-black p-10"
          >
            <FaCar className="text-yellow-400 text-5xl" />

            <h3 className="text-3xl font-black mt-6">Traffic Infractions</h3>

            <p className="mt-4 text-gray-400">
              Speeding tickets, red lights, seat belts, lane violations and many
              more traffic citations.
            </p>
            <Link href="/citations">
              <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
                View Infractions
              </button>
            </Link>
          </div>

          <div data-aos="fade-left" className="rounded-4xl bg-yellow-400 p-10">
            <FaGavel className="text-black text-5xl" />

            <h3 className="text-3xl font-black mt-6">
              Traffic Criminal Violations
            </h3>

            <p className="mt-4 text-black/80">
              DUI, reckless driving, racing, fleeing and other criminal traffic
              offenses.
            </p>
            <Link href="/citations">
              <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl font-bold">
                View Violations
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

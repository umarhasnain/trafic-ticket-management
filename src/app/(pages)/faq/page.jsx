"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const faqData = [
  {
    category: "Traffic",
    q: "What is a traffic citation?",
    a: "A traffic citation is issued for violating traffic laws like speeding, red light, or stop sign violations.",
  },
  {
    category: "Traffic",
    q: "Can traffic tickets increase insurance?",
    a: "Yes, violations can increase your insurance premiums.",
  },

  {
    category: "Criminal",
    q: "Is DUI a criminal offense?",
    a: "Yes, DUI is a serious criminal traffic offense.",
  },
  {
    category: "Criminal",
    q: "Is reckless driving a crime?",
    a: "Yes, it is often treated as a criminal offense.",
  },

  {
    category: "Citations",
    q: "What happens if I pay my citation?",
    a: "Paying is treated as a guilty plea and may add points.",
  },
  {
    category: "Citations",
    q: "Can I fight a citation?",
    a: "Yes, you can request a trial to contest it.",
  },
];

const categories = ["All", "Traffic", "Criminal", "Citations"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(() => {
    return faqData.filter((item) => {
      const cat =
        activeCategory === "All" ||
        item.category === activeCategory;

      const text =
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase());

      return cat && text;
    });
  }, [activeCategory, search]);

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* TOP HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <h1 className="text-4xl sm:text-5xl font-black text-brand-blue tracking-tight">
          Traffic Law{" "}
          <span className="text-brand-gold">
            FAQ
          </span>
        </h1>

        <p className="text-gray-600 mt-2 text-lg">
          Instant answers for tickets, citations & criminal violations
        </p>

        {/* SEARCH */}
        <div className="mt-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search anything..."
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-50
              border
              border-gray-200
              text-gray-900
              placeholder:text-gray-400
              outline-none
              focus:border-brand-blue
              focus:ring-1
              focus:ring-brand-blue
              transition-all
              duration-300
            "
          />
        </div>
      </div>

      {/* LAYOUT */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* SIDEBAR */}
        <div className="md:sticky md:top-28 h-fit space-y-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`
                w-full
                text-left
                px-4
                py-3
                rounded-xl
                transition-all
                duration-300
                font-semibold
                ${
                  activeCategory === c
                    ? "bg-brand-gold text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-brand-blue"
                }
              `}
            >
              {c}
            </button>
          ))}
        </div>

        {/* FAQ CARDS */}
        <div className="md:col-span-3 space-y-4">
          {filtered.length === 0 && (
            <div className="text-gray-500 text-center py-10">
              No results found
            </div>
          )}

          {filtered.map((item, i) => (
            <div
              key={i}
              className="
                group
                bg-gray-50
                border
                border-gray-200
                rounded-2xl
                p-5
                hover:border-brand-gold
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === i ? null : i
                  )
                }
                className="w-full text-left"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                      {item.category}
                    </span>

                    <h3
                      className="
                        text-lg
                        font-bold
                        mt-1
                        text-brand-blue
                        group-hover:text-brand-gold
                        transition-colors
                        duration-300
                      "
                    >
                      {item.q}
                    </h3>
                  </div>

                  <span className="text-2xl font-bold text-brand-gold select-none">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
              </button>

              {/* ANSWER */}
              {openIndex === i && (
                <div
                  className="
                    mt-4
                    text-gray-600
                    leading-7
                    border-t
                    border-gray-200
                    pt-4
                  "
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="
          text-center
          py-16
          mt-16
          border-t
          border-gray-200
        "
      >
        <h2 className="text-3xl font-bold text-brand-blue">
          Need Legal Help?
        </h2>

        <p className="text-gray-600 mt-2">
          Talk to an experienced traffic attorney today
        </p>

        <Link href="/contact">
          <button
            className="
              mt-6
              px-8
              py-4
              bg-brand-gold
              hover:bg-brand-gold-light
              text-white
              font-bold
              rounded-2xl
              shadow-lg
              shadow-brand-gold/25
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
}
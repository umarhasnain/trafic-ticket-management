"use client";

import { useMemo, useState } from "react";

const faqData = [
  { category: "Traffic", q: "What is a traffic citation?", a: "A traffic citation is issued for violating traffic laws like speeding, red light, or stop sign violations." },
  { category: "Traffic", q: "Can traffic tickets increase insurance?", a: "Yes, violations can increase your insurance premiums." },

  { category: "Criminal", q: "Is DUI a criminal offense?", a: "Yes, DUI is a serious criminal traffic offense." },
  { category: "Criminal", q: "Is reckless driving a crime?", a: "Yes, it is often treated as a criminal offense." },

  { category: "Citations", q: "What happens if I pay my citation?", a: "Paying is treated as a guilty plea and may add points." },
  { category: "Citations", q: "Can I fight a citation?", a: "Yes, you can request a trial to contest it." },
];

const categories = ["All", "Traffic", "Criminal", "Citations"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(() => {
    return faqData.filter((item) => {
      const cat =
        activeCategory === "All" || item.category === activeCategory;

      const text =
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase());

      return cat && text;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen pt-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* TOP HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold">
          Traffic Law <span className="text-orange-400">FAQ</span>
        </h1>

        <p className="text-slate-300 mt-2">
          Instant answers for tickets, citations & criminal violations
        </p>

        {/* SEARCH */}
        <div className="mt-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search anything..."
            className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 outline-none focus:border-orange-400 transition"
          />
        </div>
      </div>

      {/* LAYOUT */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* SIDEBAR */}
        <div className="md:sticky md:top-10 h-fit space-y-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`w-full text-left px-4 py-3 rounded-xl transition font-medium
              ${
                activeCategory === c
                  ? "bg-orange-400 text-black"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* FAQ CARDS */}
        <div className="md:col-span-3 space-y-4">

          {filtered.length === 0 && (
            <div className="text-slate-400 text-center py-10">
              No results found
            </div>
          )}

          {filtered.map((item, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur hover:border-orange-400 transition"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full text-left"
              >

                <div className="flex justify-between items-start gap-4">

                  <div>
                    <span className="text-xs text-orange-400">
                      {item.category}
                    </span>

                    <h3 className="text-lg font-semibold mt-1 group-hover:text-orange-300 transition">
                      {item.q}
                    </h3>
                  </div>

                  <span className="text-2xl text-orange-400">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>

              </button>

              {/* ANSWER */}
              {openIndex === i && (
                <div className="mt-4 text-slate-300 leading-7 border-t border-white/10 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 mt-10 border-t border-white/10">
        <h2 className="text-3xl font-bold">
          Need Legal Help?
        </h2>

        <p className="text-slate-400 mt-2">
          Talk to a traffic attorney today
        </p>

        <button className="mt-6 px-8 py-4 bg-orange-400 text-black font-bold rounded-2xl hover:scale-105 transition">
          Contact Now
        </button>
      </div>
    </div>
  );
}
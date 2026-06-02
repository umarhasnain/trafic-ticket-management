"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How long does the review take?",
    answer:
      "Most submissions are reviewed quickly, and you'll receive a response as soon as possible based on your case details.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Costs vary depending on the type of ticket and assistance required. Details are provided after review.",
  },
  {
    question: "Can I upload a photo from my phone?",
    answer:
      "Yes. Simply take a clear picture of your ticket and upload it directly from your mobile device.",
  },
  {
    question: "What types of tickets are accepted?",
    answer:
      "We assist with speeding tickets, red-light violations, reckless driving citations, parking violations, and more.",
  },
  {
    question: "Will my information remain private?",
    answer:
      "Absolutely. All submitted information is handled securely and confidentially.",
  },
  {
    question: "How quickly will someone contact me?",
    answer:
      "Response times vary, but many users receive updates shortly after submission.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know before submitting your ticket.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left p-6 lg:p-7"
              >
                <span className="font-bold text-gray-900 text-lg">
                  {faq.question}
                </span>

                <span className="text-yellow-500">
                  {active === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  active === index
                    ? "max-h-96"
                    : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
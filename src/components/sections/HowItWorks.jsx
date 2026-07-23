"use client";

import {
  FaUpload,
  FaSearch,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: FaUpload,
    title: "Upload Ticket",
    desc: "Take a photo or upload your citation in seconds.",
  },
  {
    icon: FaSearch,
    title: "Case Review",
    desc: "Our professionals evaluate your situation.",
  },
  {
    icon: FaClipboardList,
    title: "Receive Options",
    desc: "Get recommendations and possible outcomes.",
  },
  {
    icon: FaCheckCircle,
    title: "Resolve Case",
    desc: "Move forward confidently with expert guidance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto"
        >
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
            SIMPLE PROCESS
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-gray-900">
            How It Works
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Getting assistance takes less than two minutes.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400" />

          <div className="grid lg:grid-cols-4 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-28 h-28 mx-auto rounded-full bg-white border-8 border-orange-100 shadow-xl flex items-center justify-center text-orange-500 text-4xl">
                    <Icon />
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-400 text-white font-black mb-4">
                      {index + 1}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
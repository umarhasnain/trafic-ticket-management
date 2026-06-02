"use client";

import Image from "next/image";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaUserTie,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaBolt,
    title: "Fast Case Submission",
    desc: "Submit your ticket in less than a minute.",
  },
  {
    icon: FaUserTie,
    title: "Experienced Professionals",
    desc: "Get connected with trusted traffic specialists.",
  },
  {
    icon: FaShieldAlt,
    title: "Transparent Process",
    desc: "Clear communication from start to finish.",
  },
  {
    icon: FaLock,
    title: "Secure Information",
    desc: "Protected and confidential submissions.",
  },
  {
    icon: FaCheckCircle,
    title: "Quick Response Times",
    desc: "Fast reviews and timely follow-ups.",
  },
  {
    icon: FaHeadset,
    title: "Customer Support",
    desc: "Dedicated assistance whenever you need help.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div data-aos="fade-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl rounded-full" />

              <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
                  alt="Traffic Assistance"
                  width={800}
                  height={900}
                  className="w-full h-[650px] object-cover"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-yellow-500/20">
                <h3 className="text-white text-xl font-bold">
                  10,000+ Drivers Helped
                </h3>
                <p className="text-gray-400 mt-2">
                  Trusted support for traffic violations nationwide.
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div data-aos="fade-left">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-black text-gray-900">
              Why Drivers Trust Our Platform
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We make the traffic ticket process simpler, faster and more
              transparent so drivers can take action confidently.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="p-5 rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-500 text-xl">
                      <Icon />
                    </div>

                    <h3 className="mt-4 font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
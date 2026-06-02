"use client";

import {
  FaShieldAlt,
  FaLock,
  FaBolt,
  FaUserShield,
  FaAward,
} from "react-icons/fa";

const badges = [
  {
    icon: FaShieldAlt,
    title: "Licensed Professionals",
    desc: "Experienced traffic ticket specialists ready to help.",
  },
  {
    icon: FaLock,
    title: "Secure Submission",
    desc: "Your information stays protected and encrypted.",
  },
  {
    icon: FaBolt,
    title: "Fast Response",
    desc: "Receive updates and case reviews quickly.",
  },
  {
    icon: FaUserShield,
    title: "Confidential Review",
    desc: "Private and secure handling of every submission.",
  },
  {
    icon: FaAward,
    title: "Customer Satisfaction",
    desc: "Trusted by thousands of drivers nationwide.",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium">
            TRUSTED PLATFORM
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-gray-900">
            Trusted By Drivers Across The Country
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Fast, secure and professional assistance for traffic
            citations and violations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-16">
          {badges.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="group bg-white border border-gray-200 rounded-3xl p-6 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-500 text-2xl group-hover:rotate-6 transition">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
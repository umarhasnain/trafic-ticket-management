"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaGavel,
  FaExclamationTriangle,
} from "react-icons/fa";

import {
  trafficInfractions,
  criminalViolations,
} from "@/utils/violations";

export default function ViolationsGrid() {
  return (
    <section className="py-24 bg-linear-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ============================= */}
        {/* Traffic Infractions */}
        {/* ============================= */}

        <div className="mb-32">

          <div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-orange-500/10
                border
                border-orange-500/20
                text-orange-400
                font-semibold
              "
            >
              <FaGavel />
              CATEGORY A
            </span>

            <h2 className="mt-6 text-4xl lg:text-6xl font-black text-white">
              Traffic Infractions
            </h2>

            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              Common traffic citations that may impact your
              driving record, insurance premiums and future
              driving privileges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

            {trafficInfractions.map((item, index) => (
              <Link
                key={item.slug}
                href={`/violations/${item.slug}`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="
                  group
                  rounded-[28px]
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/3
                  hover:border-orange-500/50
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(250,204,21,0.12)]
                  transition-all
                  duration-500
                "
              >
                <div className="relative h-52 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      px-3
                      py-1
                      rounded-full
                      bg-orange-400
                      text-black
                      text-xs
                      font-bold
                    "
                  >
                    Infraction
                  </span>

                </div>

                <div className="p-6">

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      group-hover:text-orange-400
                      transition
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {item.shortDescription}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-orange-400
                      font-semibold
                    "
                  >
                    Learn More

                    <FaArrowRight
                      className="
                        group-hover:translate-x-2
                        transition-transform
                      "
                    />
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>

        {/* ============================= */}
        {/* Criminal Violations */}
        {/* ============================= */}

        <div>

          <div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-red-500/10
                border
                border-red-500/20
                text-red-400
                font-semibold
              "
            >
              <FaExclamationTriangle />
              CATEGORY B
            </span>

            <h2 className="mt-6 text-4xl lg:text-6xl font-black text-white">
              Criminal Violations
            </h2>

            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              Serious traffic-related offenses that may carry
              criminal penalties, license suspension, substantial
              fines and other consequences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

            {criminalViolations.map((item, index) => (
              <Link
                key={item.slug}
                href={`/violations/${item.slug}`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="
                  group
                  rounded-[28px]
                  overflow-hidden
                  border
                  border-red-500/20
                  bg-linear-to-b
                  from-red-500/5
                  to-transparent
                  hover:border-red-500/60
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)]
                  transition-all
                  duration-500
                "
              >
                <div className="relative h-52 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      px-3
                      py-1
                      rounded-full
                      bg-red-500
                      text-white
                      text-xs
                      font-bold
                    "
                  >
                    Attorney Review Required
                  </span>

                </div>

                <div className="p-6">

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      group-hover:text-red-400
                      transition
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {item.shortDescription}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-red-400
                      font-semibold
                    "
                  >
                    View Details

                    <FaArrowRight
                      className="
                        group-hover:translate-x-2
                        transition-transform
                      "
                    />
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
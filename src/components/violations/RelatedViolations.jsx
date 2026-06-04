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

export default function RelatedViolations({
  currentSlug,
}) {
  const currentViolation = trafficInfractions.find(
    (item) => item.slug === currentSlug
  );

const related = trafficInfractions
  .filter(
    (item) =>
      item.slug !== currentSlug &&
      item.category === currentViolation?.category
  );

const finalRelated =
  related.length >= 3
    ? related.slice(0, 3)
    : violations
        .filter((item) => item.slug !== currentSlug)
        .slice(0, 3);

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            <FaExclamationTriangle />
            Related Cases
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-gray-900">
            Similar Traffic Violations
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore other violations that may affect your
            driving record and learn about available options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {finalRelated.map((item, index) => (
            <Link
              key={item.slug}
              href={`/violations/${item.slug}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                bg-white
                rounded-[30px]
                overflow-hidden
                border
                border-gray-200
                hover:border-yellow-400
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
              "
            >
              {/* Image */}

              <div className="relative h-60 overflow-hidden">
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

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                <span
                  className={`
                    absolute
                    top-4
                    left-4
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                    ${
                      item.category ===
                      "Traffic Criminal Violation"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-400 text-black"
                    }
                  `}
                >
                  {item.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex items-center gap-2 text-yellow-500 mb-3">
                  <FaGavel />
                  <span className="text-sm font-semibold">
                    Attorney Review Available
                  </span>
                </div>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-gray-900
                    group-hover:text-yellow-600
                    transition
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.shortDescription}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    font-bold
                    text-yellow-600
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
    </section>
  );
}
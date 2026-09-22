"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaGavel,
  FaExclamationTriangle,
  FaBalanceScale,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

export default function ServiceCategories() {
  const practiceAreas = [
    {
      id: "civil-traffic",
      title: "Civil Traffic Infractions",
      tag: "Infraction Defense",
      icon: FaGavel,
      summary:
        "Comprehensive legal defense for moving and non-moving traffic citations across South Florida. In most cases, our attorneys appear in court on your behalf so you do not have to miss work or spend hours at the courthouse.",
      features: [
        "Speeding & Traffic Radar Violations",
        "Red Light Camera & Stop Sign Citations",
        "Careless Driving & Improper Lane Changes",
        "Toll Infractions, Expired Tags & Registration",
        "Keep Points Off Your Florida Driving Record",
        "Protect Against Insurance Rate Increases",
      ],
      linkText: "View Traffic Infractions",
      linkHref: "/violations",
    },
    {
      id: "criminal-traffic",
      title: "Criminal Traffic & Crime Cases",
      tag: "Criminal Defense",
      icon: FaExclamationTriangle,
      summary:
        "Aggressive courtroom representation for serious criminal traffic charges that carry potential jail sentences, probation, driver license suspensions, and permanent criminal records. Immediate attorney intervention is critical.",
      features: [
        "DUI / DWI (Driving Under the Influence)",
        "Reckless Driving & High-Speed Racing",
        "Driving With a Suspended or Revoked License (DWLS)",
        "Leaving the Scene of an Accident (Hit & Run)",
        "Fleeing or Attempting to Elude Law Enforcement",
        "Trial Defense & Aggressive Case Negotiation",
      ],
      linkText: "Explore Criminal Violations",
      linkHref: "/violations",
    },
    {
      id: "civil-litigation",
      title: "Civil & Commercial Litigation",
      tag: "Litigation Practice",
      icon: FaBalanceScale,
      note: "[Detailed content pending client review]",
      summary:
        "Strategic counsel and assertive representation in business disputes, commercial conflicts, contract enforcement, and civil matters throughout Florida state courts.",
      features: [
        "Commercial Disputes & Business Conflicts",
        "Breach of Contract & Agreement Enforcement",
        "Civil Claims & Pre-Trial Dispute Resolution",
        "Partnership & Shareholder Disputes",
        "Property & Business Tort Litigation",
        "Dedicated Trial & Settlement Advocacy",
      ],
      linkText: "Learn About Litigation Services",
      linkHref: "/violations",
    },
  ];

  return (
    <div className="bg-white">
      {/* ========================================= */}
      {/* Hero Section */}
      {/* ========================================= */}
      <section className="relative w-full overflow-hidden bg-brand-blue py-24 lg:py-32 min-h-[420px] lg:min-h-[480px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/assets/images/attorney-photographs.png"
          alt="The Traffic Law Firm Practice Areas"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-black/75 to-brand-blue/95" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 text-center w-full">
          {/* Centered TLF Logo */}
          <div className="flex justify-center mb-6" data-aos="fade-down">
            <Image
              src="/assets/images/tlf-logo-3d.png"
              alt="The Traffic Law Firm"
              width={220}
              height={90}
              className="h-20 lg:h-24 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase mb-4"
          >
            SOUTH FLORIDA TRAFFIC & LITIGATION DEFENSE
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight"
          >
            Practice <span className="text-brand-gold">Areas</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Over 22 years of dedicated legal advocacy. Whether defending against simple moving infractions, serious criminal traffic charges, or complex civil disputes, our attorneys deliver proven results.
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* Practice Area Cards Section */}
      {/* ========================================= */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Section Header */}
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-brand-gold/15 text-brand-blue font-bold text-xs tracking-wider uppercase inline-block">
              DEFENDING YOUR RIGHTS
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue tracking-tight">
              Legal Services We Provide
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Explore our core practice disciplines below. Select any category to view detailed violation guidelines, penalties, and defense strategies.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.id}
                  id={area.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="scroll-mt-32 bg-white rounded-3xl p-8 lg:p-10 shadow-md border border-gray-200 hover:border-brand-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 text-brand-gold flex items-center justify-center text-3xl border border-brand-gold/20 shadow-xs">
                        <IconComponent />
                      </div>
                      <span className="text-xs font-bold tracking-wider text-brand-blue bg-gray-100 border border-gray-200 px-3 py-1 rounded-full uppercase">
                        {area.tag}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-blue mt-6 tracking-tight">
                      {area.title}
                    </h3>

                    {/* Pending Review Note if applicable */}
                    {area.note && (
                      <div className="mt-3 px-3 py-1.5 rounded-lg bg-amber-50 border border-brand-gold/40 text-xs font-semibold text-amber-800 inline-block">
                        {area.note}
                      </div>
                    )}

                    {/* Summary Description */}
                    <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                      {area.summary}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-4">
                        Key Matters Handled:
                      </h4>
                      <ul className="space-y-3">
                        {area.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start text-sm text-gray-700">
                            <FaCheckCircle className="text-brand-gold mt-1 mr-2.5 shrink-0 text-xs" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      href={area.linkHref}
                      className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <span>{area.linkText}</span>
                      <FaArrowRight className="text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Notice Banner */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-14 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-gold flex items-center justify-center text-2xl shrink-0">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="font-bold text-brand-blue text-base sm:text-lg">
                  Need Immediate Help With a Citation?
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Upload a photo of your ticket in seconds. No courthouse visit required in most cases.
                </p>
              </div>
            </div>
            <Link
              href="/violations"
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold text-sm transition-all duration-200 shadow-sm shrink-0"
            >
              Browse All Violations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
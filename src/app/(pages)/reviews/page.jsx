"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaGoogle,
  FaYelp,
  FaVideo,
  FaQuoteLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaArrowRight,
  FaFilter,
  FaCalendarAlt,
} from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "Michael R.",
    source: "Google",
    rating: 5,
    tag: "Verified Client",
    date: "2 weeks ago",
    location: "Miami, FL",
    text: "The process was incredibly simple. I uploaded my ticket and received guidance within hours. Lizette and her team took care of everything without me having to take time off work.",
  },
  {
    id: 2,
    name: "Sarah J.",
    source: "Google",
    rating: 5,
    tag: "Verified Client",
    date: "1 month ago",
    location: "Coral Gables, FL",
    text: "Professional support and excellent communication throughout the entire process. Kept points completely off my Florida driving record!",
  },
  {
    id: 3,
    name: "David K.",
    source: "Google",
    rating: 5,
    tag: "Commercial Driver (CDL)",
    date: "2 months ago",
    location: "Broward County, FL",
    text: "Saved my CDL license and helped me understand my legal options immediately. If you drive for a living in South Florida, this is the only firm to call.",
  },
  {
    id: 4,
    name: "Maria L.",
    source: "Yelp",
    rating: 5,
    tag: "Verified Client",
    date: "3 weeks ago",
    location: "Miami-Dade, FL",
    text: "Lizette and her staff are amazing. They handled my moving violation with so much care and professionalism. No points, no court appearance required!",
  },
  {
    id: 5,
    name: "Carlos G.",
    source: "Yelp",
    rating: 5,
    tag: "Verified Client",
    date: "2 months ago",
    location: "Hialeah, FL",
    text: "Fast response, bilingual service in English & Spanish, and great results. Would definitely recommend to anyone who gets a traffic ticket in South Florida.",
  },
  {
    id: 6,
    name: "Jennifer W.",
    source: "Google",
    rating: 5,
    tag: "Multi-Generation Client",
    date: "3 months ago",
    location: "Miami, FL",
    text: "Three generations of my family have trusted The Traffic Law Firm for over 25 years. Lizette is genuine, powerful in court, and treats you like family.",
  },
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState("All");

  const filteredReviews = useMemo(() => {
    if (filter === "All") return reviewsData;
    return reviewsData.filter(
      (review) => review.source.toLowerCase() === filter.toLowerCase()
    );
  }, [filter]);

  const googleCount = reviewsData.filter((r) => r.source === "Google").length;
  const yelpCount = reviewsData.filter((r) => r.source === "Yelp").length;

  return (
    <main className="bg-white min-h-screen">
      {/* ========================================= */}
      {/* Courthouse Hero Section */}
      {/* ========================================= */}
      <section className="relative w-full overflow-hidden bg-brand-blue py-24 lg:py-32 min-h-[440px] lg:min-h-[500px] flex items-center justify-center">
        {/* Courthouse Background Image */}
        <Image
          src="/assets/images/courthouse.jpg"
          alt="Courthouse Defense Representation"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-black/75 to-brand-blue/95" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 text-center w-full">
          {/* Centered TLF Logo with Swoosh Animation */}
          <div className="flex justify-center mb-6" data-aos="fade-down">
            <Image
              src="/assets/images/tlf-logo-3d.png"
              alt="The Traffic Law Firm"
              width={220}
              height={90}
              className="h-20 lg:h-24 w-auto object-contain drop-shadow-2xl animate-swoosh"
              priority
            />
          </div>

          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-bold tracking-widest uppercase mb-4"
          >
            VERIFIED CLIENT EXPERIENCES
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight"
          >
            REVIEWS & <span className="text-brand-gold">TESTIMONIALS</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how The Traffic Law Firm has successfully defended thousands
            of Florida drivers, protected commercial driver licenses, and eliminated courthouse stress.
          </p>

          {/* Rating Summary Bar */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-brand-gold text-base">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="font-bold">5.0 / 5.0 Rating</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div>
              <span className="font-bold text-brand-gold">30+</span> Years of Experience
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div>
              <span className="font-bold text-brand-gold">10,000+</span> Citations Defended
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* Reviews Grid & Filter Section */}
      {/* ========================================= */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Section Header */}
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-brand-gold/15 text-brand-blue font-bold text-xs tracking-wider uppercase inline-block">
              GENUINE FEEDBACK
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue tracking-tight">
              What Our Clients Say
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Read authentic feedback from drivers who trusted our legal team with their traffic infractions and court matters.
            </p>
          </div>

          {/* Filter Controls: Tabs for Desktop + Dropdown for Mobile / Convenience */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14"
          >
            {/* Desktop / Tablet Button Tabs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setFilter("All")}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                  filter === "All"
                    ? "bg-brand-blue text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                All Reviews ({reviewsData.length})
              </button>

              <button
                onClick={() => setFilter("Google")}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                  filter === "Google"
                    ? "bg-brand-blue text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <FaGoogle className="text-emerald-600 text-xs" />
                <span>Google Reviews ({googleCount})</span>
              </button>

              <button
                onClick={() => setFilter("Yelp")}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-xs ${
                  filter === "Yelp"
                    ? "bg-brand-blue text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <FaYelp className="text-rose-600 text-xs" />
                <span>Yelp Reviews ({yelpCount})</span>
              </button>
            </div>

            {/* Dropdown Selector (Fulfills client "Maybe use a drop box?" request) */}
            <div className="sm:hidden flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm w-full max-w-xs">
              <FaFilter className="text-brand-gold text-xs" />
              <span className="text-xs font-bold text-gray-500 uppercase">Filter:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-transparent font-bold text-sm text-brand-blue focus:outline-none"
              >
                <option value="All">All Reviews ({reviewsData.length})</option>
                <option value="Google">Google Reviews ({googleCount})</option>
                <option value="Yelp">Yelp Reviews ({yelpCount})</option>
              </select>
            </div>
          </div>

          {/* Review Cards Grid (3 Columns on Desktop — DDRB Reference Style) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredReviews.map((review, index) => {
              const isGoogle = review.source === "Google";
              return (
                <div
                  key={review.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-brand-gold shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Source Badge & Star Rating */}
                    <div className="flex items-center justify-between gap-2">
                      {isGoogle ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <FaGoogle className="text-xs" />
                          Google Review
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                          <FaYelp className="text-xs" />
                          Yelp Review
                        </span>
                      )}

                      {/* FaStar rating in brand-gold */}
                      <div className="flex gap-1 text-brand-gold text-sm">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < review.rating
                                ? "text-brand-gold"
                                : "text-gray-200"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {/* Date & Location Line */}
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[10px]" />
                        {review.date}
                      </span>
                      <span>{review.location}</span>
                    </div>

                    {/* Quote Icon */}
                    <div className="mt-4 text-brand-gold/30 text-2xl">
                      <FaQuoteLeft />
                    </div>

                    {/* Review Text */}
                    <p className="mt-2 text-gray-700 text-base leading-relaxed italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-brand-blue text-base group-hover:text-brand-blue-light transition-colors">
                          {review.name}
                        </h3>
                        <FaCheckCircle className="text-emerald-600 text-xs" title="Verified Driver" />
                      </div>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        {review.tag}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-brand-blue/5 text-brand-blue font-black text-sm flex items-center justify-center border border-brand-blue/10 shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* Video Testimonials Section */}
      {/* ========================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-brand-gold/15 text-brand-blue font-bold text-xs tracking-wider uppercase inline-block">
              VIDEO STORIES
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-brand-blue tracking-tight">
              Client Video Testimonials
            </h2>

            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              Hear firsthand from clients about their courtroom defense and how our attorneys handled their citations.
            </p>
          </div>

          {/* Video Placeholder Container */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="rounded-3xl bg-gray-50 border-2 border-dashed border-gray-300 p-10 lg:p-16 text-center shadow-xs"
          >
            <div className="w-20 h-20 rounded-2xl bg-brand-blue/5 border border-brand-gold/30 text-brand-gold flex items-center justify-center text-3xl mx-auto mb-6 shadow-xs">
              <FaVideo />
            </div>

            <div className="inline-block px-4 py-1.5 rounded-lg bg-amber-50 border border-brand-gold/40 text-xs sm:text-sm font-bold text-amber-800 tracking-wide mb-3">
              [Video testimonials coming soon]
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-brand-blue mt-2">
              Interviews In Production
            </h3>

            <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We are currently recording video testimonials with clients sharing their legal experiences and courtroom resolutions with Lizette Benitez and our legal team.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-brand-gold" />
                Real Client Cases
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-brand-gold" />
                Miami-Dade & Broward Courts
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-brand-gold" />
                Traffic Infraction & Criminal Defense
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* Bottom CTA Section with Blue Background */}
      {/* ========================================= */}
      <section className="py-20 lg:py-24 bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div
            data-aos="fade-up"
            className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue rounded-[36px] p-10 lg:p-16 text-center border border-white/15 shadow-2xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 text-brand-gold flex items-center justify-center text-2xl mx-auto mb-6 border border-white/20">
              <FaShieldAlt />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold tracking-wider uppercase mb-4">
              READY FOR DEFENSE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Have a Traffic Ticket or Citation?
            </h2>

            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied drivers across South Florida. Let our experienced defense attorneys fight to keep points off your record and lower your stress.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/submit-ticket">
                <button className="bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:scale-105 cursor-pointer inline-flex items-center gap-2">
                  <span>Submit Your Ticket</span>
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-brand-blue px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:scale-105 cursor-pointer">
                  Contact Our Office
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

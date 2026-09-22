"use client";

export default function FirmStory() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,165,90,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block bg-brand-gold/15 border border-brand-gold/30 px-4 py-1.5 rounded-full font-semibold text-brand-gold text-xs sm:text-sm tracking-widest uppercase mb-4">
            ABOUT THE TRAFFIC LAW FIRM
          </span>

          <h2 className="mt-2 text-4xl lg:text-6xl font-black text-brand-blue tracking-tight">
            Our Story
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
            The Traffic Law Firm was founded by Lizette Benitez with an enduring
            mission — provide exceptional traffic ticket defense while treating
            every client as family, not just a case number.
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            With more than 30 years of dedicated legal representation and
            thousands of successfully resolved traffic matters, the firm has earned
            a reputation throughout South Florida for relentless advocacy, deep
            procedural expertise, and client-centered service.
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            Our priority is to eliminate unnecessary courthouse appearances,
            reduce stress, protect your driving record, and secure the strongest
            possible outcome for every case we handle.
          </p>
        </div>
      </div>
    </section>
  );
}
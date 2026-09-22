"use client";

export default function Experience() {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "10K+", label: "Cases Handled" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-brand-gold/15 border border-brand-gold/30 px-4 py-1.5 rounded-full font-semibold text-brand-gold text-xs sm:text-sm tracking-widest uppercase mb-4">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-blue tracking-tight">
            Experience You Can Trust
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center hover:border-brand-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-5xl font-black text-brand-gold">
                {item.number}
              </h3>

              <p className="text-gray-700 font-medium mt-3 text-base sm:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
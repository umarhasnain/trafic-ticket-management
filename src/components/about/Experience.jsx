"use client";

export default function Experience() {
  const stats = [
    { number: "22+", label: "Years Experience" },
    { number: "10K+", label: "Cases Handled" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            Experience You Can Trust
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-black text-yellow-400">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
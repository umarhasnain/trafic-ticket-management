"use client";

export default function FirmStory() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#facc1520,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto text-center"
        >
          <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-500/20 text-orange-600 dark:text-orange-400">
            OUR STORY
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-black text-gray-900 dark:text-white">
            About The Traffic Law Firm
          </h2>

          <p className="mt-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The Traffic Law Firm was founded by Lizette Benitez
            with a simple mission — provide exceptional traffic
            ticket defense while treating every client as an
            individual, not a case number.
          </p>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            With more than 22 years of experience and thousands of
            successfully handled traffic matters, the firm has
            earned a reputation throughout South Florida for
            professionalism, legal expertise, and client-focused
            representation.
          </p>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Our goal is to eliminate unnecessary courthouse visits,
            reduce stress, save valuable time, and maximize the
            chances of a favorable outcome for every client.
          </p>
        </div>
      </div>
    </section>
  );
}
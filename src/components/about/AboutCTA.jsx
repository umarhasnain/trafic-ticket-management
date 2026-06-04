"use client";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <div className="bg-linear-to-r from-yellow-400 to-yellow-500 rounded-[40px] p-12 lg:p-20 text-center">

          <h2 className="text-5xl font-black text-black">
            Ready To Take Action?
          </h2>

          <p className="mt-5 text-black/80 text-lg">
            Submit your traffic ticket today and let our
            experienced legal team help you move forward.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold">
              Submit Ticket
            </button>

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold">
              Call Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
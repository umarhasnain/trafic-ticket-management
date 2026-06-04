export default function ViolationDefense() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Defense Strategies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Review Officer Evidence",
            "Challenge Citation Errors",
            "Negotiate Reduced Penalties",
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-2xl shadow"
            >
              <h3 className="font-semibold text-xl">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
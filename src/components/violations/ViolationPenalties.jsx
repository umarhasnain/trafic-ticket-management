import {
  AlertTriangle,
  BadgeDollarSign,
  ShieldAlert,
} from "lucide-react";

export default function ViolationPenalties() {
  const penalties = [
    "Court fines",
    "License points",
    "Insurance premium increases",
    "Possible license suspension",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Potential Penalties
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {penalties.map((item) => (
            <div
              key={item}
              className="bg-slate-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition"
            >
              <AlertTriangle className="mx-auto mb-4 text-yellow-500" />

              <h3 className="font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export const metadata = {
  title: "Citations | Traffic Law Guide",
  description:
    "Learn your options when you receive a traffic citation including fines, traffic school, or trial.",
};

export default function CitationsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Citations
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Home » Citations
          </p>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Option 1 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-red-600">
              Pay the Fine
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              This is the worst option. You will receive an automatic guilty finding and an adjudication (points on your driving record). This may lead to insurance increases, and possible license suspension. You may be marked as a habitual traffic offender.
            </p>
          </div>

          {/* Option 2 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-orange-600">
              Traffic School
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              No points will be assessed but your driving record will still reflect the violation. You may not be eligible and will need to pay fees and spend time completing the course.
            </p>
          </div>

          {/* Option 3 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition border-2 border-green-500">
            <h2 className="text-2xl font-bold text-green-600">
              Request a Trial
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              This is the only option where, if successful, your record will not be marked. You avoid fines, points, and traffic school. You may also negotiate a plea.
            </p>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-7">
          <h2 className="text-3xl font-bold mb-4">
            Suspended License Notice
          </h2>

          <p>
            If your ticket is late and you have received a notice of suspension of your driving record, legal assistance may help restore your driving privileges (if eligible). Contact a legal professional for guidance.
          </p>

          <div className="mt-6">
            <a
              href="tel:3054420243"
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Call: (305) 442-0243
            </a>
          </div>
        </div>
      </section>

      {/* INFRACTION LIST */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Traffic Infraction Violations
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            {[
              "Careless driving",
              "Child restraint",
              "Commercial vehicle securing load",
              "Driving in opposite direction",
              "Wrong way on one way street",
              "Driving while license suspended unknowingly",
              "Driving without lights",
              "Expired driver license (6 months or less)",
              "Expired registration (6 months or less)",
              "Failure to change address",
              "Failure to display driver license",
              "Failure to provide insurance",
              "Failure to stop at stop sign",
              "Failure to yield right of way",
              "Following too close",
              "Improper lane change",
              "Red light violation",
              "Seat belt",
              "Speeding",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRIMINAL LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-red-600">
            Traffic Criminal Violations
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            {[
              "DUI",
              "Driving while license suspended knowingly",
              "Expired driver license (6+ months)",
              "Expired registration (6+ months)",
              "Fleeing and eluding",
              "Leaving children unattended",
              "Leaving scene of accident",
              "No valid driver license",
              "Racing",
              "Reckless driving",
              "Unlawful use of insurance card",
              "Unlawful use of license",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-100 p-4 rounded-lg shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Hire Legal Help Today
          </h2>

          <p className="mt-4 text-slate-300">
            If you received a citation or criminal traffic violation, get professional legal assistance to protect your driving record.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-orange-500 text-black px-8 py-4 rounded-xl font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
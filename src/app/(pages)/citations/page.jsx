import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Citations | The Traffic Law Firm",
  description:
    "Learn your options when you receive a traffic citation including fines, traffic school, or requesting a court trial.",
};

export default function CitationsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-brand-blue text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Home » Citations
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Citations
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Understand your legal options and how our experienced traffic attorneys can help protect your driving record.
          </p>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Option 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
              Option 1 — Guilty Finding
            </span>
            <h2 className="text-2xl font-bold text-brand-blue">
              Pay the Fine
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              This is often the worst option. You will receive an automatic guilty finding and an adjudication (points on your driving record). This may lead to insurance increases and possible license suspension. You may be marked as a habitual traffic offender.
            </p>
          </div>

          {/* Option 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="inline-block px-3 py-1 bg-brand-gold/15 text-brand-gold text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
              Option 2 — Fines & Time
            </span>
            <h2 className="text-2xl font-bold text-brand-blue">
              Traffic School
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              No points will be assessed, but your driving record will still reflect the violation. You may not be eligible, and you will need to pay election fees in addition to spending hours completing the course.
            </p>
          </div>

          {/* Option 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-brand-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
            <span className="inline-block px-3 py-1 bg-brand-gold text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
              Option 3 — Recommended
            </span>
            <h2 className="text-2xl font-bold text-brand-blue">
              Request a Trial
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              This is the only option where, if successful, your record will remain clean without points, fines, or traffic school requirements. An experienced attorney can represent you in court to fight the violation or negotiate a plea.
            </p>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-7">
          <h2 className="text-3xl font-black mb-4 text-brand-blue">
            Suspended License Notice
          </h2>

          <p className="text-gray-600 text-lg">
            If your ticket is overdue or you have received an official notice of driver license suspension, prompt legal assistance can help restore your driving privileges (if eligible). Contact our legal team immediately for guidance.
          </p>

          <div className="mt-8">
            <a
              href="tel:3054420243"
              className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-light text-white px-7 py-3.5 rounded-xl font-bold shadow-md transition-all hover:scale-[1.02]"
            >
              <FaPhoneAlt className="text-brand-gold text-sm" />
              Call: (305) 442-0243
            </a>
          </div>
        </div>
      </section>

      {/* INFRACTION LIST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-brand-blue">
            Traffic Infraction Violations
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-800">
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
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-200/70 font-medium hover:border-brand-gold/60 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRIMINAL LIST */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-brand-blue">
            Traffic Criminal Violations
          </h2>

          <p className="text-gray-600 mb-10 max-w-2xl">
            Criminal traffic offenses are serious charges that carry lasting penalties. Our legal defense team works diligently to protect your rights, license, and freedom.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-800">
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
                className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 font-medium hover:border-brand-blue/50 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Hire Legal Help Today
          </h2>

          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            If you received a citation or criminal traffic violation, get professional legal assistance to protect your driving record.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-gold/25 hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
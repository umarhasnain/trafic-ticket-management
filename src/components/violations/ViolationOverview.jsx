export default function ViolationOverview({ violation }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-4xl font-bold mb-6">
            Overview
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            {violation.shortDescription}
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Understanding your citation and responding
            correctly can help protect your driving
            record and reduce long-term consequences.
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";

export default function AttorneyBio() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Lizette */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">
            <div className="relative rounded-4xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/lizette-headsho.jpg"
                alt="Lizette Benitez"
                width={700}
                height={900}
                className="w-full h-162.5 object-cover"
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <span className="text-orange-500 font-bold">
              FOUNDING ATTORNEY
            </span>

            <h2 className="mt-4 text-5xl font-black text-gray-900">
              Lizette P. Benitez
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Founder of The Traffic Law Firm and one of South
              Florida's most respected traffic defense attorneys.
              Since founding the firm in 1993, Lizette has
              assisted thousands of clients in traffic,
              criminal and civil matters.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">22+ Years</h4>
                <p className="text-gray-500 text-sm">
                  Experience
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">Thousands</h4>
                <p className="text-gray-500 text-sm">
                  Cases Handled
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">Florida Bar</h4>
                <p className="text-gray-500 text-sm">
                  Member
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">
                  Spanish & English
                </h4>
                <p className="text-gray-500 text-sm">
                  Fluent
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Leo */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">

          <div
            data-aos="fade-right"
            className="order-2 lg:order-1"
          >
            <span className="text-orange-500 font-bold">
              PARTNER ATTORNEY
            </span>

            <h2 className="mt-4 text-5xl font-black text-gray-900">
              Leo Benitez
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Leo Benitez founded Benitez & Associates in 1995
              and has represented clients in commercial,
              civil and criminal litigation matters while
              securing numerous high-value verdicts and
              settlements.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">30+ Years</h4>
                <p className="text-gray-500 text-sm">
                  Legal Experience
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">
                  Million Dollar
                </h4>
                <p className="text-gray-500 text-sm">
                  Settlements
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">
                  Civil Trial Attorney
                </h4>
                <p className="text-gray-500 text-sm">
                  Florida Bar
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50">
                <h4 className="font-bold">
                  Georgetown Law
                </h4>
                <p className="text-gray-500 text-sm">
                  J.D.
                </p>
              </div>

            </div>
          </div>

          <div
            data-aos="fade-left"
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/leo-headshot.jpg"
                alt="Leo Benitez"
                width={700}
                height={900}
                className="w-full h-162.5 object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
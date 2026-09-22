"use client";

import Image from "next/image";

export default function AttorneyBio() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        {/* Lizette Benitez Section */}
        <article id="lizette" className="scroll-mt-28 text-center" data-aos="fade-up">
          {/* Centered Photo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-200">
              <Image
                 src="/assets/images/lizette-professional.png"
                alt="Lizette P. Benitez"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Caption in brand-gold */}
          <p className="text-brand-gold font-bold uppercase tracking-widest text-sm sm:text-base">
            MEET LIZETTE
          </p>

          {/* Name Heading in brand-blue */}
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue">
            Lizette P. Benitez
          </h2>

          <p className="mt-1 text-gray-500 font-medium text-base sm:text-lg">
            Founder, The Traffic Law Firm
          </p>

          {/* Full Biography Text */}
          <div className="mt-8 space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed text-left max-w-3xl mx-auto">
            <p>
              Lizette Benitez is the founder of The Traffic Law Firm and a native
              of Miami, Florida. With more than three decades of legal experience,
              Lizette has built her practice on dedication, personal attention,
              and a strong commitment to fighting for her clients.
            </p>
            <p>
              Lizette earned her Juris Doctor degree from New England School of
              Law in Boston, Massachusetts, in 1989. She began her legal career
              practicing criminal law and, within two years, established her own
              practice, which has grown into one of Miami&apos;s longest-standing
              traffic law firms.
            </p>
            <p>
              Fluent in both English and Spanish, Lizette has earned a reputation
              for her strategic thinking, strong advocacy, and determination to
              achieve the best possible results for her clients. Her dedication to
              her clients has created a legacy of trust that spans generations.
              Many of the clients she represented early in her career have
              returned over the years, with their children and grandchildren now
              seeking her guidance and representation.
            </p>
            <p>
              Lizette has built The Traffic Law Firm around the belief that every
              client deserves exceptional service, professionalism, and
              individualized attention. Her team is committed to making every
              client feel heard, respected, and confident that their case is in
              capable hands. No one is treated as just another client, but as
              family.
            </p>
          </div>
        </article>

        {/* Elegant Gold Accent Divider */}
        <div className="my-20 lg:my-28 flex items-center justify-center gap-3">
          <div className="h-px bg-gray-200 w-24 sm:w-32" />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
          <div className="h-px bg-gray-200 w-24 sm:w-32" />
        </div>

        {/* Leo Benitez Section */}
        <article id="leo" className="scroll-mt-28 text-center" data-aos="fade-up">
          {/* Centered Photo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-200">
              <Image
                src="/assets/images/leo-professional.png"
                alt="Leo Benitez"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Caption in brand-gold */}
          <p className="text-brand-gold font-bold uppercase tracking-widest text-sm sm:text-base">
            MEET LEO
          </p>

          {/* Name Heading in brand-blue */}
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-brand-blue">
            Leo Benitez
          </h2>

          <p className="mt-1 text-gray-500 font-medium text-base sm:text-lg">
            Founder, Benitez Law
          </p>

          {/* Biography Text */}
          <div className="mt-8 space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed text-left max-w-3xl mx-auto">
            <p>
              Leo Benitez founded Benitez &amp; Associates in 1995 and has
              represented clients in commercial, civil and criminal litigation
              matters while securing numerous high-value verdicts and settlements.
            </p>
            <p className="text-gray-400 italic">
              [Full biography pending — content to be provided by client]
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import AttorneyBio from "@/components/about/AttorneyBio";
// import FirmStory from "@/components/about/FirmStory";
// import Experience from "@/components/about/Experience";
// import Results from "@/components/about/Results";
// import AboutCTA from "@/components/about/AboutCTA";

// export default function AboutPage() {
//   return (
//     <main className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-brand-blue text-white py-16 lg:py-24 relative overflow-hidden">
//         {/* Subtle decorative glow */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
//           {/* TLF logo top-left */}
//           <div className="mb-10" data-aos="fade-right">
//             <Link href="/" className="inline-block">
//               <Image
//                 src="/assets/images/tlf-logo-3d.png"
//                 alt="The Traffic Law Firm"
//                 width={180}
//                 height={65}
//                 className="h-14 lg:h-16 w-auto object-contain drop-shadow"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Hero Heading */}
//           <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
//             <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 px-4 py-1.5 rounded-full font-semibold text-brand-gold text-xs sm:text-sm tracking-widest uppercase mb-4">
//               Experienced Legal Leadership
//             </span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
//               MEET OUR ATTORNEYS
//             </h1>
//             <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//               Decades of dedicated courtroom advocacy and personalized defense for
//               clients across South Florida.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Two Side-by-Side Clickable Attorney Portrait Cards Below Hero */}
//       <section className="py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
//         <div className="max-w-5xl mx-auto px-5 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {/* Left Card: Lizette P. Benitez */}
//             <Link
//               href="#lizette"
//               data-aos="fade-right"
//               className="group bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-md hover:shadow-2xl hover:border-brand-gold transition-all duration-300 block text-center"
//             >
//               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100 mb-6">
//                 <Image
//                   src="/assets/images/Lizette P. Benitez.png"
//                   alt="Lizette P. Benitez"
//                   fill
//                   sizes="(max-width: 768px) 100vw, 500px"
//                   className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <h2 className="text-2xl lg:text-3xl font-black text-brand-blue group-hover:text-brand-gold transition-colors">
//                 Lizette P. Benitez
//               </h2>
//               <p className="mt-2 text-brand-gold font-semibold text-base">
//                 Founder, The Traffic Law Firm
//               </p>
//               <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:text-brand-gold transition-colors">
//                 <span>View Biography</span>
//                 <span className="text-lg transition-transform group-hover:translate-y-1">↓</span>
//               </div>
//             </Link>

//             {/* Right Card: Leo Benitez */}
//             <Link
//               href="#leo"
//               data-aos="fade-left"
//               className="group bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-md hover:shadow-2xl hover:border-brand-gold transition-all duration-300 block text-center"
//             >
//               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100 mb-6">
//                 <Image
//                   src="/assets/images/Leo Benitez.png"
//                   alt="Leo Benitez"
//                   fill
//                   sizes="(max-width: 768px) 100vw, 500px"
//                   className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <h2 className="text-2xl lg:text-3xl font-black text-brand-blue group-hover:text-brand-gold transition-colors">
//                 Leo Benitez
//               </h2>
//               <p className="mt-2 text-brand-gold font-semibold text-base">
//                 Founder, Benitez Law
//               </p>
//               <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:text-brand-gold transition-colors">
//                 <span>View Biography</span>
//                 <span className="text-lg transition-transform group-hover:translate-y-1">↓</span>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Attorney Biographies */}
//       <AttorneyBio />

//       {/* Firm Story */}
//       <FirmStory />

//       {/* Firm Experience */}
//       <Experience />

//       {/* Proven Results */}
//       <Results />

//       {/* Call To Action */}
//       <AboutCTA />
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import AttorneyBio from "@/components/about/AttorneyBio";
import FirmStory from "@/components/about/FirmStory";
import Experience from "@/components/about/Experience";
import Results from "@/components/about/Results";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* =========================================================
          HERO — MEET OUR ATTORNEYS
      ========================================================= */}
   <section className="relative overflow-hidden bg-brand-blue text-white py-16 lg:py-24 min-h-[760px] flex items-center">
  {/* Banner Background Image */}
  <div className="">
    <Image
      src="/assets/images/lizette-leo-together.png"
      alt="The Traffic Law Firm Attorneys"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  {/* Dark Overlay */}
  <div className="" />

  {/* Gradient Overlay for premium depth */}
  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-brand-blue/55" />

  {/* Gold ambient glow */}
  <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

  {/* Subtle bottom gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-blue/80 to-transparent pointer-events-none" />

  <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 w-full">

    {/* TLF Logo */}
    <div
      className="mb-10 lg:mb-12"
      data-aos="fade-right"
    >
      <Link href="/" className="inline-block">
        <Image
          src="/assets/images/tlf-logo-3d.png"
          alt="The Traffic Law Firm"
          width={700}
          height={250}
          className="h-14 lg:h-16 w-auto object-contain drop-shadow-2xl"
          priority
        />
      </Link>
    </div>

    {/* Heading */}
    <div
      className="text-center max-w-4xl mx-auto"
      data-aos="fade-up"
    >
      <span className="inline-flex items-center bg-brand-gold/15 border border-brand-gold/40 backdrop-blur-sm px-5 py-2 rounded-full font-semibold text-brand-gold text-xs sm:text-sm tracking-[0.2em] uppercase mb-5 shadow-lg">
        Experienced Legal Leadership
      </span>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-xl">
        Meet Our Attorneys
      </h1>

      <p className="mt-5 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
        Decades of dedicated legal experience, personalized attention,
        and committed advocacy for clients across South Florida.
      </p>
    </div>
  </div>
</section>

      {/* =========================================================
          ATTORNEY CARDS
      ========================================================= */}
      <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* =====================================================
                LIZETTE
            ===================================================== */}
            <Link
              href="#lizette"
              data-aos="fade-right"
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-200
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                hover:border-brand-gold
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">

                <Image
                  src="/assets/images/lizette-professional.png"
                  alt="Lizette P. Benitez"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                  priority
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8 text-center">

                <h2 className="
                  text-2xl
                  lg:text-3xl
                  font-black
                  text-brand-blue
                  group-hover:text-brand-gold
                  transition-colors
                ">
                  Lizette P. Benitez
                </h2>

                <p className="mt-2 text-brand-gold font-semibold">
                  Owner &amp; Founder
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  The Traffic Law Firm
                </p>

                <div className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-brand-blue
                  group-hover:text-brand-gold
                  transition-colors
                ">
                  <span>Meet Lizette</span>

                  <span className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  ">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* =====================================================
                LEO
            ===================================================== */}
            <Link
              href="#leo"
              data-aos="fade-left"
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border border-gray-200
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                hover:border-brand-gold
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">

                <Image
                  src="/assets/images/leo-professional.png"
                  alt="Leo Benitez"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8 text-center">

                <h2 className="
                  text-2xl
                  lg:text-3xl
                  font-black
                  text-brand-blue
                  group-hover:text-brand-gold
                  transition-colors
                ">
                  Leo Benitez
                </h2>

                <p className="mt-2 text-brand-gold font-semibold">
                  Owner &amp; Founder
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Benitez Law
                </p>

                <div className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-brand-blue
                  group-hover:text-brand-gold
                  transition-colors
                ">
                  <span>Meet Leo</span>

                  <span className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  ">
                    →
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================================
          ATTORNEY BIOGRAPHIES
      ========================================================= */}
      <AttorneyBio />

      {/* =========================================================
          FIRM STORY
      ========================================================= */}
      <FirmStory />

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}
      <Experience />

      {/* =========================================================
          RESULTS
      ========================================================= */}
      <Results />

      {/* =========================================================
          CTA
      ========================================================= */}
      <AboutCTA />
    </main>
  );
}
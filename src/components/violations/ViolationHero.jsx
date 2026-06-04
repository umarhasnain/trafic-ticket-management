// "use client";

// import Image from "next/image";

// export default function ViolationHero({
//   violation,
// }) {
//   return (
//     <section className="bg-black text-white">
//       <div className="max-w-7xl mx-auto px-5 py-24">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           <div>
//             <span className="text-yellow-400 font-bold">
//               {violation.category}
//             </span>

//             <h1 className="mt-4 text-5xl lg:text-7xl font-black">
//               {violation.title}
//             </h1>

//             <p className="mt-6 text-gray-400 text-lg">
//               {violation.shortDescription}
//             </p>
//           </div>

//           <div className="relative h-[500px] rounded-[32px] overflow-hidden">
//             <Image
//               fill
//               src={violation.image}
//               alt={violation.title}
//               className="object-cover"
//             />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

export default function ViolationHero({ violation }) {
  return (
    <section className="relative h-150 overflow-hidden">
      <Image
        src={violation.image}
        alt={violation.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
            Traffic Violation
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            {violation.title}
          </h1>

          <p className="text-xl mt-6 text-slate-200">
            {violation.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition">
              Free Consultation
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
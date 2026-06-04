// "use client";

// import { FaExclamationTriangle } from "react-icons/fa";

// export default function AttorneyReviewRequired() {
//   return (
//     <section className="py-20 bg-black">

//       <div className="max-w-5xl mx-auto px-5">

//         <div
//           data-aos="zoom-in"
//           className="
//             bg-linear-to-r
//             from-red-500
//             to-yellow-500
//             rounded-4xl
//             p-10
//             text-center
//           "
//         >
//           <FaExclamationTriangle
//             className="
//               text-white
//               text-6xl
//               mx-auto
//               mb-5
//             "
//           />

//           <h2 className="text-4xl font-black text-white">
//             Attorney Review Required
//           </h2>

//           <p className="mt-5 text-white/90 text-lg">
//             Criminal traffic violations may carry
//             serious penalties including license suspension,
//             fines, criminal records, and possible jail time.
//             Immediate legal review is strongly recommended.
//           </p>

//           <button
//             className="
//               mt-8
//               bg-white
//               text-black
//               px-8
//               py-4
//               rounded-xl
//               font-bold
//             "
//           >
//             Contact Attorney Now
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }


export default function AttorneyReviewRequired() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Attorney Review Recommended
        </h2>

        <p className="text-slate-300 text-lg">
          Every violation can have different legal
          consequences. A professional review may help
          identify opportunities to reduce penalties.
        </p>
      </div>
    </section>
  );
}
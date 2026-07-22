// "use client";

// import { useState } from "react";
// import {
//   FiUser,
//   FiFileText,
//   FiUpload,
//   FiCheck,
//   FiArrowRight,
//   FiArrowLeft,
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiCalendar,
// } from "react-icons/fi";
// import Swal from "sweetalert2";
// import {
//   trafficInfractions,
//   criminalViolations,
// } from "@/utils/violations";


// export default function SubmitTicketPage() {
//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
// const [eligibility, setEligibility] = useState({
//   citationType: "",
//   county: "",
//   citationDate: "",
// });

// const [eligible, setEligible] = useState(null);

//   const [formData, setFormData] = useState({
//     // Ticket Information
//     violationType: "",
//     ticketNumber: "",
//     ticketDate: "",
//     location: "",
//     description: "",

//     // Driver Information
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",

//     // Files
//     ticketFront: null,
//     ticketBack: null,
//   });


//   const infractions = trafficInfractions;

// const selectedViolation = infractions.find(
//   (item) => item.title === formData.violationType
// );

// const attorneyFee =
//   formData.violationType
//     .toLowerCase()
//     .includes("speed")
//     ? 150
//     : formData.violationType
//         .toLowerCase()
//         .includes("accident")
//     ? 150
//     : 100;


//   const handleSubmit = async () => {
//     setLoading(true);
//     // Fake API Delay
//     await new Promise((resolve) =>
//       setTimeout(resolve, 2000)
//     );

//     setLoading(false);
//     setSubmitted(true);


//     Swal.fire({
//       icon: "success",
//       title: "Ticket Submitted Successfully!",
//       text:
//         "Our traffic attorneys will review your case and contact you shortly.",
//       confirmButtonColor: "#EAB308",
//       background: "#111827",
//       color: "#ffffff",
//     });


//     setFormData({
//       violationType: "",
//       ticketNumber: "",
//       ticketDate: "",
//       location: "",
//       description: "",
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       ticketFront: null,
//       ticketBack: null,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };


//   const nextStep = () => {
//     if (step < 4) {
//       setStep(step + 1);
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   };
// const checkEligibility = () => {
//   if (
//     !eligibility.citationType ||
//     !eligibility.county ||
//     !eligibility.citationDate
//   ) {
//     Swal.fire({
//       icon: "warning",
//       title: "Complete Required Fields",
//       text: "Please answer all eligibility questions first.",
//       confirmButtonColor: "#EAB308",
//     });

//     return;
//   }

//   const citationDate = new Date(
//     eligibility.citationDate
//   );

//   const today = new Date();

//   const diffDays = Math.floor(
//     (today - citationDate) /
//       (1000 * 60 * 60 * 24)
//   );

//   // Criminal

//   if (
//     eligibility.citationType === "criminal"
//   ) {
//     setEligible(false);

//     Swal.fire({
//       icon: "error",
//       title: "Free Consultation Required",
//       html: `
//       Criminal traffic citations
//       cannot be submitted online.<br><br>

//       Please contact our office directly.
//       `,
//       confirmButtonColor: "#dc2626",
//     });

//     return;
//   }

//   // 30 Days

//   if (diffDays > 30) {
//     setEligible(false);

//     Swal.fire({
//       icon: "warning",
//       title: "Citation Too Old",
//       html: `
//       Online submission is available only
//       within <b>30 days</b> of issuance.

//       <br><br>

//       Please contact our office.
//       `,
//       confirmButtonColor: "#EAB308",
//     });

//     return;
//   }

//   // Palm Beach

//   if (
//     eligibility.county ===
//     "Palm Beach"
//   ) {
//     setEligible(false);

//     Swal.fire({
//       icon: "info",
//       title: "Call Our Office",
//       html: `
//       Palm Beach County citations
//       cannot be submitted online.
//       `,
//       confirmButtonColor: "#EAB308",
//     });

//     return;
//   }

//   // Other Counties

//   if (
//     ![
//       "Miami-Dade",
//       "Broward",
//     ].includes(
//       eligibility.county
//     )
//   ) {
//     setEligible(false);

//     Swal.fire({
//       icon: "info",
//       title: "Outside Service Area",
//       html: `
//       Online submission is only
//       available for:

//       <br><br>

//       Miami-Dade County<br>
//       Broward County
//       `,
//       confirmButtonColor: "#EAB308",
//     });

//     return;
//   }

//   setEligible(true);

//   Swal.fire({
//     icon: "success",
//     title: "Eligible!",
//     text:
//       "Your citation qualifies for online submission.",
//     confirmButtonColor: "#16a34a",
//   });
// };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);

//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   };


//   const steps = [
//     {
//       id: 1,
//       title: "Ticket",
//       icon: <FiFileText />,
//     },
//     {
//       id: 2,
//       title: "Driver",
//       icon: <FiUser />,
//     },
//     {
//       id: 3,
//       title: "Upload",
//       icon: <FiUpload />,
//     },
//     {
//       id: 4,
//       title: "Review",
//       icon: <FiCheck />,
//     },
//   ];


//   return (
//     <main className="min-h-screen bg-gray-50">

// {/* ================= HERO ================= */}

// <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-yellow-600 text-white">

//   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

//   <div className="relative max-w-7xl mx-auto px-5 py-24">

//     <div className="max-w-4xl">

//       <span className="inline-flex items-center rounded-full bg-yellow-400 text-black px-5 py-2 font-bold">
//         Online Traffic Ticket Submission
//       </span>

//       <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight">
//         Submit Your
//         <span className="block text-yellow-400">
//           Traffic Citation
//         </span>
//         Online
//       </h1>

//       <p className="mt-8 text-xl text-gray-300 leading-8 max-w-3xl">
//         Our attorneys will review eligible traffic citations submitted
//         online. Before submitting, please review the eligibility
//         requirements below.
//       </p>

//     </div>

//   </div>

// </section>

// {/* ================= IMPORTANT NOTICE ================= */}

// <section className="bg-yellow-50 border-y border-yellow-300">

//   <div className="max-w-7xl mx-auto px-5 py-10">

//     <div className="bg-white rounded-3xl border border-yellow-300 shadow-xl p-8">

//       <div className="flex items-center gap-3 mb-5">

//         <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xl font-black">
//           !
//         </div>

//         <h2 className="text-3xl font-black text-gray-900">
//           Before You Submit
//         </h2>

//       </div>

//       <div className="grid lg:grid-cols-2 gap-10">

//         <div>

//           <h3 className="font-black text-xl mb-4 text-green-700">
//             Eligible For Online Submission
//           </h3>

//           <ul className="space-y-4 text-gray-700">

//             <li>
//               ✅ Traffic Infraction only
//             </li>

//             <li>
//               ✅ Citation issued within the last 30 days
//             </li>

//             <li>
//               ✅ Citation issued in Miami-Dade County
//             </li>

//             <li>
//               ✅ Citation issued in Broward County
//             </li>

//           </ul>

//         </div>

//         <div>

//           <h3 className="font-black text-xl mb-4 text-red-600">
//             Please Contact Our Office Directly
//           </h3>

//           <ul className="space-y-4 text-gray-700">

//             <li>
//               ❌ Criminal Traffic Citation
//             </li>

//             <li>
//               ❌ Citation older than 30 days
//             </li>

//             <li>
//               ❌ Palm Beach County
//             </li>

//             <li>
//               ❌ Any Florida county outside Miami-Dade or Broward
//             </li>

//           </ul>

//         </div>

//       </div>

//     </div>

//   </div>

// </section>

// {/* ================= FEES ================= */}

// <section className="py-20 bg-white">

//   <div className="max-w-7xl mx-auto px-5">

//     <div className="text-center">

//       <span className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-bold">
//         Attorney Fees
//       </span>

//       <h2 className="mt-5 text-4xl font-black">
//         Simple Flat Fee Pricing
//       </h2>

//     </div>

//     <div className="grid lg:grid-cols-3 gap-8 mt-14">

//       <div className="rounded-3xl border p-8 shadow-lg">

//         <h3 className="text-2xl font-black">
//           Accident Citation
//         </h3>

//         <div className="text-5xl font-black text-yellow-500 mt-5">
//           $150
//         </div>

//       </div>

//       <div className="rounded-3xl border p-8 shadow-lg">

//         <h3 className="text-2xl font-black">
//           Speeding Citation
//         </h3>

//         <div className="text-5xl font-black text-yellow-500 mt-5">
//           $150
//         </div>

//       </div>

//       <div className="rounded-3xl border p-8 shadow-lg">

//         <h3 className="text-2xl font-black">
//           Other Infractions
//         </h3>

//         <div className="text-5xl font-black text-yellow-500 mt-5">
//           $100
//         </div>

//       </div>

//     </div>

//     <div className="mt-10 rounded-3xl bg-black text-white p-8">

//       <h3 className="text-2xl font-black mb-4">
//         Additional Citation
//       </h3>

//       <p className="text-gray-300">
//         Additional citations issued by the same officer during the same stop
//         are billed at
//         <span className="text-yellow-400 font-bold">
//           {" "} $50 each.
//         </span>
//       </p>

//     </div>

//   </div>

// </section>


// <section className="py-20 bg-gray-100">

//   <div className="max-w-4xl mx-auto px-5">

//     <div className="bg-white rounded-3xl shadow-xl p-10">

//       <h2 className="text-4xl font-black text-center">

//         Check Your Eligibility

//       </h2>

//       <p className="text-center text-gray-500 mt-4">

//         Before submitting your citation,
//         answer these questions.

//       </p>

//       <div className="grid md:grid-cols-3 gap-6 mt-10">

//         {/* Citation */}

//         <div>

//           <label className="font-bold">

//             Citation Type

//           </label>

//           <select
//             value={
//               eligibility.citationType
//             }
//             onChange={(e) =>
//               setEligibility({
//                 ...eligibility,
//                 citationType:
//                   e.target.value,
//               })
//             }
//             className="mt-2 w-full border rounded-xl p-4"
//           >
//             <option value="">
//               Select
//             </option>

//             <option value="infraction">
//               Traffic Infraction
//             </option>

//             <option value="criminal">
//               Criminal Citation
//             </option>

//           </select>

//         </div>

//         {/* County */}

//         <div>

//           <label className="font-bold">

//             County

//           </label>

//           <select
//             value={
//               eligibility.county
//             }
//             onChange={(e) =>
//               setEligibility({
//                 ...eligibility,
//                 county:
//                   e.target.value,
//               })
//             }
//             className="mt-2 w-full border rounded-xl p-4"
//           >

//             <option value="">
//               Select County
//             </option>

//             <option>
//               Miami-Dade
//             </option>

//             <option>
//               Broward
//             </option>

//             <option>
//               Palm Beach
//             </option>

//             <option>
//               Other Florida County
//             </option>

//           </select>

//         </div>

//         {/* Date */}

//         <div>

//           <label className="font-bold">

//             Citation Date

//           </label>

//           <input
//             type="date"
//             value={
//               eligibility.citationDate
//             }
//             onChange={(e) =>
//               setEligibility({
//                 ...eligibility,
//                 citationDate:
//                   e.target.value,
//               })
//             }
//             className="mt-2 w-full border rounded-xl p-4"
//           />

//         </div>

//       </div>

//       <div className="text-center mt-10">

//         <button
//           onClick={checkEligibility}
//           className="
//           bg-yellow-500
//           hover:bg-yellow-400
//           text-black
//           px-10
//           py-4
//           rounded-xl
//           font-bold
//           transition
//           "
//         >

//           Check Eligibility

//         </button>

//       </div>

//       {eligible === true && (

//         <div className="mt-10 bg-green-50 border border-green-300 rounded-2xl p-6">

//           <h3 className="text-2xl font-black text-green-700">

//             ✓ Eligible for Online Submission

//           </h3>

//           <p className="mt-3 text-green-700">

//             Continue below to submit your citation.

//           </p>

//         </div>

//       )}

//       {eligible === false && (

//         <div className="mt-10 bg-red-50 border border-red-300 rounded-2xl p-6">

//           <h3 className="text-2xl font-black text-red-700">

//             Online Submission Not Available

//           </h3>

//           <p className="mt-3 text-red-700">

//             Please contact our office for
//             assistance.

//           </p>

//           <a
//             href="tel:+13054420243"
//             className="
//             mt-6
//             inline-block
//             bg-red-600
//             hover:bg-red-700
//             text-white
//             px-8
//             py-3
//             rounded-xl
//             font-bold
//             transition
//             "
//           >

//             Call Our Office

//           </a>

//         </div>

//       )}

//     </div>

//   </div>

// </section>

//     </main>
//   );
// }



"use client";

import { useState } from "react";
import {
  FiUser,
  FiFileText,
  FiUpload,
  FiCheck,
  FiArrowRight,
  FiArrowLeft,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiImage,
  FiTrash2,
} from "react-icons/fi";
import Swal from "sweetalert2";
import {
  trafficInfractions,
  criminalViolations,
} from "@/utils/violations";
import ConvergePayment from "@/components/ConvergePayment";


export default function SubmitTicketPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eligibility, setEligibility] = useState({
    citationType: "",
    county: "",
    citationDate: "",
  });

  const [eligible, setEligible] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    citationNumber: "",
    county: "",
    issueDate: "",
    violationType: "",
    citationsCount: 1,

    attorneyFee: 0,

    ticketFront: null,
    ticketBack: null,
  });


  const allViolations = [
    ...trafficInfractions,
    ...criminalViolations,
  ];

//   const handleSubmit = async () => {
//     setLoading(true);
//     // Fake API Delay
//     await new Promise((resolve) =>
//       setTimeout(resolve, 2000)
//     );

//     setLoading(false);
//     setSubmitted(true);
// await fetch("/api/tickets",{
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body:JSON.stringify({
//       first_name:formData.firstName,
//       last_name:formData.lastName,
//       email:formData.email,
//       phone:formData.phone,
//       citation_number:formData.citationNumber,
//       county:formData.county,
//       issue_date:formData.issueDate,
//       violation_type:formData.violationType,
//       citations_count:formData.citationsCount,
//       attorney_fee:formData.attorneyFee,
//       total_amount:formData.attorneyFee,
//       payment_status:"Pending",
//       status:"Pending"
//   })
// });

//     Swal.fire({
//       icon: "success",
//       title: "Ticket Submitted Successfully!",
//       text:
//         "Our traffic attorneys will review your case and contact you shortly.",
//       confirmButtonColor: "#EAB308",
//       background: "#111827",
//       color: "#ffffff",
//     });


//     setFormData({
//       violationType: "",
//       ticketNumber: "",
//       ticketDate: "",
//       location: "",
//       description: "",
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       ticketFront: null,
//       ticketBack: null,
//     });
//   };

const handleSubmit = async () => {

try{

setLoading(true);

const body=new FormData();

Object.keys(formData).forEach((key)=>{

body.append(key,formData[key]);

});

const res=await fetch("/api/upload-ticket",{

method:"POST",

body

});

const data=await res.json();

setLoading(false);

if(!data.success){

throw new Error(data.message);

}

Swal.fire({

icon:"success",

title:"Submitted Successfully",

text:"Your ticket has been submitted."

});

}catch(err){

setLoading(false);

Swal.fire({

icon:"error",

title:"Submission Failed",

text:err.message

});

}

};

  const calculateFee = (ticketType, count = 1) => {
    let baseFee = 100;

    const title = ticketType.toLowerCase();

    if (
      title.includes("speed") ||
      title.includes("accident")
    ) {
      baseFee = 150;
    }

    const additional =
      Number(count) > 1
        ? (Number(count) - 1) * 50
        : 0;

    return baseFee + additional;
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowed = [
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];

    if (!allowed.includes(file.type)) {
      Swal.fire({
        icon: "error",
        title: "Invalid File",
        text: "Only JPG, PNG and PDF are allowed.",
      });

      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      Swal.fire({
        icon: "error",
        title: "File Too Large",
        text: "Maximum file size is 10MB.",
      });

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: file,
    }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      return;
    }

    let updated = {
      ...formData,
      [name]: value,
    };

    updated.attorneyFee = calculateFee(
      updated.violationType,
      updated.citationsCount
    );

    setFormData(updated);
  };


  const checkEligibility = () => {
    if (
      !eligibility.citationType ||
      !eligibility.county ||
      !eligibility.citationDate
    ) {
      Swal.fire({
        icon: "warning",
        title: "Complete Required Fields",
        text: "Please answer all eligibility questions.",
        confirmButtonColor: "#EAB308",
      });
      return;
    }

    const issueDate = new Date(eligibility.citationDate);
    const today = new Date();

    const days = Math.floor(
      (today - issueDate) / (1000 * 60 * 60 * 24)
    );

    // Criminal Citation

    if (eligibility.citationType === "criminal") {
      setEligible(false);

      Swal.fire({
        icon: "error",
        title: "Free Consultation Required",
        html: `
        Criminal citations cannot be submitted online.<br><br>
        Please call our office for assistance.
      `,
        confirmButtonColor: "#dc2626",
      });

      return;
    }

    // Older than 30 days

    if (days > 30) {
      setEligible(false);

      Swal.fire({
        icon: "warning",
        title: "Submission Closed",
        html: `
        Citations older than
        <b>30 days</b>
        cannot be submitted online.
      `,
        confirmButtonColor: "#EAB308",
      });

      return;
    }

    // Palm Beach

    if (eligibility.county === "Palm Beach") {
      setEligible(false);

      Swal.fire({
        icon: "info",
        title: "Call Our Office",
        html: `
        Palm Beach County
        citations require
        direct office assistance.
      `,
        confirmButtonColor: "#EAB308",
      });

      return;
    }

    // Other Counties

    if (
      !["Miami-Dade", "Broward"].includes(
        eligibility.county
      )
    ) {
      setEligible(false);

      Swal.fire({
        icon: "info",
        title: "Outside Service Area",
        html: `
      Online submission is only available for
      <br><br>

      <b>Miami-Dade</b><br>
      <b>Broward</b>
      `,
        confirmButtonColor: "#EAB308",
      });

      return;
    }

    setEligible(true);

    Swal.fire({
      icon: "success",
      title: "Eligible!",
      text:
        "Your citation qualifies for online submission.",
      confirmButtonColor: "#16a34a",
    });
  };


  const nextStep = () => {
    if(step<5) {
      setStep(step + 1);
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
    }
  };


  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);

      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
    }
  };


  const steps = [
    {
      id: 1,
      title: "Ticket",
      icon: <FiFileText />,
    },
    {
      id: 2,
      title: "Driver",
      icon: <FiUser />,
    },
    {
      id: 3,
      title: "Upload",
      icon: <FiUpload />,
    },
    {
      id: 4,
      title: "Review",
      icon: <FiCheck />,
    },
    {
      id: 5,
      title: "Payment",
      icon: <FiCheck />
    }
  ];


  return (
    <main className="min-h-screen bg-gray-50">


      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-yellow-600 text-white">

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-5 py-28">

          <span className="inline-flex rounded-full bg-yellow-400 text-black px-5 py-2 font-bold">
            Secure Online Ticket Submission
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">

            Submit Your

            <span className="block text-yellow-400">
              Traffic Citation
            </span>

            Online

          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-300 leading-9">

            Submit eligible Florida traffic citations
            securely online. Our attorneys will review
            your case and contact you within 24 hours.

          </p>

        </div>

      </section>

      <section className="py-16 bg-yellow-50">

        <div className="max-w-7xl mx-auto px-5">

          <div className="bg-white rounded-3xl border border-yellow-300 shadow-xl p-10">

            <h2 className="text-4xl font-black">

              Before You Submit

            </h2>

            <p className="text-gray-500 mt-4">

              Please review the eligibility requirements before submitting your citation.

            </p>

            <div className="grid lg:grid-cols-2 gap-12 mt-10">

              <div>

                <h3 className="font-black text-green-700 text-2xl">

                  Eligible

                </h3>

                <ul className="space-y-4 mt-6 text-gray-700">

                  <li>✅ Traffic Infraction</li>

                  <li>✅ Issued within 30 days</li>

                  <li>✅ Miami-Dade County</li>

                  <li>✅ Broward County</li>

                </ul>

              </div>

              <div>

                <h3 className="font-black text-red-600 text-2xl">

                  Not Eligible

                </h3>

                <ul className="space-y-4 mt-6 text-gray-700">

                  <li>❌ Criminal Citation</li>

                  <li>❌ Older than 30 Days</li>

                  <li>❌ Palm Beach County</li>

                  <li>❌ Other Florida Counties</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center">

            <span className="inline-flex bg-yellow-100 text-yellow-700 rounded-full px-5 py-2 font-bold">

              Attorney Fees

            </span>

            <h2 className="text-5xl font-black mt-5">

              Simple Flat Fee Pricing

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">

            <div className="rounded-3xl border p-8 shadow-lg">

              <h3 className="text-2xl font-black">

                Accident Citation

              </h3>

              <div className="text-5xl font-black text-yellow-500 mt-6">

                $150

              </div>

            </div>

            <div className="rounded-3xl border p-8 shadow-lg">

              <h3 className="text-2xl font-black">

                Speeding Citation

              </h3>

              <div className="text-5xl font-black text-yellow-500 mt-6">

                $150

              </div>

            </div>

            <div className="rounded-3xl border p-8 shadow-lg">

              <h3 className="text-2xl font-black">

                Other Infractions

              </h3>

              <div className="text-5xl font-black text-yellow-500 mt-6">

                $100

              </div>

            </div>

          </div>

          <div className="bg-black text-white rounded-3xl p-8 mt-10">

            <h3 className="text-2xl font-black">

              Additional Citations

            </h3>

            <p className="text-gray-300 mt-3">

              Each additional citation issued by the same officer during the same stop costs

              <span className="text-yellow-400 font-bold">

                $50

              </span>

              .

            </p>

          </div>

        </div>

      </section>


      <section className="py-20 bg-gray-100">

        <div className="max-w-4xl mx-auto px-5">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-4xl font-black text-center">

              Check Eligibility

            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <select
                className="border rounded-xl p-4"
                value={eligibility.citationType}
                onChange={(e) =>
                  setEligibility({
                    ...eligibility,
                    citationType: e.target.value
                  })
                }
              >

                <option value="">Citation Type</option>

                <option value="infraction">

                  Traffic Infraction

                </option>

                <option value="criminal">

                  Criminal Citation

                </option>

              </select>

              <select
                className="border rounded-xl p-4"
                value={eligibility.county}
                onChange={(e) =>
                  setEligibility({
                    ...eligibility,
                    county: e.target.value
                  })
                }
              >

                <option value="">County</option>

                <option>Miami-Dade</option>

                <option>Broward</option>

                <option>Palm Beach</option>

                <option>Other Florida County</option>

              </select>

              <input
                type="date"
                className="border rounded-xl p-4"
                value={eligibility.citationDate}
                onChange={(e) =>
                  setEligibility({
                    ...eligibility,
                    citationDate: e.target.value
                  })
                }
              />

            </div>

            <div className="text-center mt-10">

              <button
                onClick={checkEligibility}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold"
              >

                Check Eligibility

              </button>

            </div>

            {eligible === true && (

              <div className="mt-10 bg-green-50 border border-green-300 rounded-2xl p-6">

                <h3 className="text-2xl font-black text-green-700">

                  ✓ Eligible for Online Submission

                </h3>

                <p className="mt-2">

                  You may now continue with the ticket submission form below.

                </p>

              </div>

            )}

            {eligible === false && (

              <div className="mt-10 bg-red-50 border border-red-300 rounded-2xl p-6">

                <h3 className="text-2xl font-black text-red-700">

                  Online Submission Not Available

                </h3>

                <a
                  href="tel:+13054420243"
                  className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold"
                >

                  Call Our Office

                </a>

              </div>

            )}

          </div>

        </div>

      </section>




      {/* =============== FORM CONTAINER =============== */}

      <section className="py-16 px-5">

        <div
          className="
          max-w-5xl
          mx-auto
          bg-white
          rounded-3xl
          shadow-2xl
          overflow-hidden
          "
        >


          {/* Progress Bar */}

          <div className="p-8 border-b">

            <div className="flex items-center justify-between gap-2">

              {steps.map((item) => (

                <div
                  key={item.id}
                  className="flex-1 text-center"
                >

                  <div
                    className={`
                    w-14 h-14
                    mx-auto
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-xl
                    transition-all
                    duration-300

                    ${step >= item.id
                        ? "bg-yellow-500 text-black shadow-lg"
                        : "bg-gray-100 text-gray-500"
                      }
                    `}
                  >

                    {item.icon}

                  </div>


                  <p
                    className={`
                    mt-3
                    text-sm
                    font-semibold

                    ${step >= item.id
                        ? "text-yellow-600"
                        : "text-gray-400"
                      }
                    `}
                  >

                    {item.title}

                  </p>

                </div>

              ))}

            </div>

          </div>



          {/* ================= STEP 1 ================= */}

          {step === 1 && eligible === true && (

            <div
              className="
              p-8
              md:p-12
              "
            >

              <h2
                className="
                text-3xl
                font-black
                mb-2
                "
              >
                Ticket Information
              </h2>


              <p className="text-gray-500 mb-8">
                Enter your traffic citation details.
              </p>


              <div className="grid md:grid-cols-2 gap-6">

                {/* First Name */}

                <div>

                  <label className="font-bold">

                    First Name

                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  />

                </div>

                {/* Last Name */}

                <div>

                  <label className="font-bold">

                    Last Name

                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  />

                </div>

                {/* Email */}

                <div>

                  <label className="font-bold">

                    Email

                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  />

                </div>

                {/* Phone */}

                <div>

                  <label className="font-bold">

                    Phone

                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  />

                </div>

                {/* Citation */}

                <div>

                  <label className="font-bold">

                    Citation Number

                  </label>

                  <input
                    type="text"
                    name="citationNumber"
                    value={formData?.citationNumber}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  />

                </div>

                {/* County */}

                <div>

                  <label className="font-bold">

                    County

                  </label>

                  <select
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  >

                    <option value="">Select County</option>

                    <option>Miami-Dade</option>

                    <option>Broward</option>

                  </select>

                </div>

                {/* Issue Date */}

                <div>

                  <label className="font-bold">

                    Issue Date

                  </label>

                  <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  />

                </div>

                {/* Ticket Type */}

                <div>

                  <label className="font-bold">

                    Traffic Violation

                  </label>

                  <select
                    name="violationType"
                    value={formData.violationType}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  >

                    <option value="">

                      Select Violation

                    </option>

                    {trafficInfractions.map((item) => (

                      <option
                        key={item.slug}
                        value={item.title}
                      >

                        {item.title}

                      </option>

                    ))}

                  </select>

                </div>

                {/* Citations */}

                <div>

                  <label className="font-bold">

                    Number Of Citations

                  </label>

                  <select
                    name="citationsCount"
                    value={formData.citationsCount}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-xl p-4"
                  >

                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>

                  </select>

                </div>

                {/* Fee */}

                <div>

                  <label className="font-bold">

                    Attorney Fee

                  </label>

                  <div className="mt-2 bg-yellow-50 border border-yellow-300 rounded-xl p-4">

                    <span className="text-3xl font-black text-yellow-600">

                      ${formData.attorneyFee}

                    </span>

                  </div>

                </div>

              </div>



              {/* Description */}

              <div className="mt-6">

                <label className="font-semibold">
                  Additional Details
                </label>


                <textarea
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us anything about your traffic citation..."
                  className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  p-4
                  resize-none
                  outline-none
                  focus:border-yellow-500
                  "
                />

              </div>



              {/* Next Button */}

              <div className="mt-10 text-right">

                <button
                  onClick={() => {
                    if (
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.citationNumber ||
                      !formData.county ||
                      !formData.issueDate ||
                      !formData.violationType
                    ) {
                      Swal.fire({
                        icon: "warning",
                        title: "Complete All Fields",
                        text: "Please fill in all required information.",
                        confirmButtonColor: "#EAB308",
                      });

                      return;
                    }

                    nextStep();
                  }}
                  className="
                  inline-flex
                  items-center
                  gap-2
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  transition
                  "
                >

                  Next Step

                  <FiArrowRight />

                </button>

              </div>

            </div>

          )}



          {/* ================= STEP 2 ================= */}

          {step === 2 && (

            <div className="p-8 md:p-12">


              <h2 className="text-3xl font-black">
                Driver Information
              </h2>


              <p className="text-gray-500 mt-2 mb-8">
                Enter your personal details.
              </p>


              <div className="grid md:grid-cols-2 gap-6">


                {/* Full Name */}

                <div>

                  <label className="font-semibold">
                    Full Name
                  </label>


                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="
                    mt-2
                    w-full
                    border
                    rounded-xl
                    p-4
                    focus:border-yellow-500
                    outline-none
                    "
                  />

                </div>


                {/* Email */}

                <div>

                  <label className="font-semibold">
                    Email Address
                  </label>


                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                    className="
                    mt-2
                    w-full
                    border
                    rounded-xl
                    p-4
                    focus:border-yellow-500
                    outline-none
                    "
                  />

                </div>


                {/* Phone */}

                <div>

                  <label className="font-semibold">
                    Phone Number
                  </label>


                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    className="
                    mt-2
                    w-full
                    border
                    rounded-xl
                    p-4
                    focus:border-yellow-500
                    outline-none
                    "
                  />

                </div>


                {/* Address */}

                <div>

                  <label className="font-semibold">
                    Address
                  </label>


                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street, City, State"
                    className="
                    mt-2
                    w-full
                    border
                    rounded-xl
                    p-4
                    focus:border-yellow-500
                    outline-none
                    "
                  />

                </div>


              </div>



              {/* Buttons */}

              <div className="
                mt-10
                flex
                justify-between
                gap-4
              ">


                <button
                  onClick={prevStep}
                  className="
                  flex items-center gap-2
                  border
                  px-8 py-4
                  rounded-xl
                  font-bold
                  hover:bg-gray-100
                  transition
                  "
                >

                  <FiArrowLeft />

                  Previous

                </button>



                <button
                  onClick={nextStep}
                  className="
                  flex items-center gap-2
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  px-8 py-4
                  rounded-xl
                  font-bold
                  transition
                  "
                >

                  Next Step

                  <FiArrowRight />

                </button>


              </div>


            </div>

          )}
          {/* ================= STEP 3 ================= */}

          {step === 3 && (

            <div className="p-8 lg:p-12">

              <h2 className="text-4xl font-black">

                Upload Citation

              </h2>

              <p className="mt-3 text-gray-500">

                Upload clear images of your traffic citation.

              </p>

              <div className="grid lg:grid-cols-2 gap-8 mt-10">

                {/* FRONT */}

                <div className="border-2 border-dashed rounded-3xl p-8 hover:border-yellow-500 transition">

                  <label className="cursor-pointer block text-center">

                    <FiImage className="mx-auto text-6xl text-yellow-500" />

                    <h3 className="mt-5 text-xl font-black">

                      Front Side

                    </h3>

                    <p className="text-gray-500 mt-2">

                      JPG PNG PDF

                    </p>

                    <input
                      type="file"
                      hidden
                      name="ticketFront"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileUpload}
                    />

                    <div className="mt-6 bg-yellow-500 text-black py-3 rounded-xl font-bold">

                      Choose File

                    </div>

                  </label>

                  {formData.ticketFront && (

                    <div className="mt-6">

                      {formData.ticketFront.type.includes("image") ? (

                        <img

                          src={URL.createObjectURL(formData.ticketFront)}

                          alt="Front"

                          className="rounded-2xl h-60 w-full object-cover"

                        />

                      ) : (

                        <div className="bg-gray-100 rounded-xl p-6">

                          PDF Uploaded

                        </div>

                      )}

                      <div className="flex justify-between items-center mt-4">

                        <p className="text-sm">

                          {formData.ticketFront.name}

                        </p>

                        <button

                          onClick={() =>

                            setFormData({

                              ...formData,

                              ticketFront: null

                            })

                          }

                          className="text-red-600"

                        >

                          <FiTrash2 />

                        </button>

                      </div>

                    </div>

                  )}

                </div>

                {/* BACK */}

                <div className="border-2 border-dashed rounded-3xl p-8 hover:border-yellow-500 transition">

                  <label className="cursor-pointer block text-center">

                    <FiImage className="mx-auto text-6xl text-yellow-500" />

                    <h3 className="mt-5 text-xl font-black">

                      Back Side

                    </h3>

                    <p className="text-gray-500 mt-2">

                      JPG PNG PDF

                    </p>

                    <input
                      type="file"
                      hidden
                      name="ticketBack"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileUpload}
                    />

                    <div className="mt-6 bg-yellow-500 text-black py-3 rounded-xl font-bold">

                      Choose File

                    </div>

                  </label>

                  {formData.ticketBack && (

                    <div className="mt-6">

                      {formData.ticketBack.type.includes("image") ? (

                        <img

                          src={URL.createObjectURL(formData.ticketBack)}

                          alt="Back"

                          className="rounded-2xl h-60 w-full object-cover"

                        />

                      ) : (

                        <div className="bg-gray-100 rounded-xl p-6">

                          PDF Uploaded

                        </div>

                      )}

                      <div className="flex justify-between items-center mt-4">

                        <p className="text-sm">

                          {formData.ticketBack.name}

                        </p>

                        <button

                          onClick={() =>

                            setFormData({

                              ...formData,

                              ticketBack: null

                            })

                          }

                          className="text-red-600"

                        >

                          <FiTrash2 />

                        </button>

                      </div>

                    </div>

                  )}

                </div>

              </div>

              <div className="flex justify-between mt-12">

                <button

                  onClick={prevStep}

                  className="border px-8 py-4 rounded-xl font-bold"

                >

                  Back

                </button>

                <button

                  onClick={() => {

                    if (!formData.ticketFront) {

                      Swal.fire({

                        icon: "warning",

                        title: "Upload Required",

                        text: "Please upload the front side of your citation.",

                      });

                      return;

                    }

                    nextStep();

                  }}

                  className="bg-yellow-500 hover:bg-yellow-400 px-10 py-4 rounded-xl font-bold"

                >

                  Continue

                </button>

              </div>

            </div>

          )}


          {/* ================= STEP 4 ================= */}

{step === 4 && eligible && (

  <div className="p-8 md:p-12">

    <h2 className="text-3xl font-black">
      Review & Payment
    </h2>

    <p className="text-gray-500 mt-2 mb-8">
      Review your information before completing payment.
    </p>

    {/* ================= REVIEW ================= */}

    <div className="grid lg:grid-cols-2 gap-8">

      {/* LEFT */}

      <div className="space-y-5">

        <div className="rounded-2xl border bg-gray-50 p-6">

          <h3 className="font-black text-xl mb-5">
            Personal Information
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Name</span>
              <span className="font-semibold">
                {formData.firstName} {formData.lastName}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Email</span>
              <span className="font-semibold">
                {formData.email}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Phone</span>
              <span className="font-semibold">
                {formData.phone}
              </span>
            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-gray-50 p-6">

          <h3 className="font-black text-xl mb-5">
            Ticket Information
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Violation</span>
              <span className="font-semibold">
                {formData.violationType}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Citation Number</span>
              <span className="font-semibold">
                {formData?.citationNumber}
              </span>
            </div>

            <div className="flex justify-between">
              <span>County</span>
              <span className="font-semibold">
                {eligibility.county}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Date</span>
              <span className="font-semibold">
                {eligibility.citationDate}
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <div className="rounded-2xl border-2 border-yellow-400 bg-white p-8 shadow-lg">

          <h3 className="text-2xl font-black mb-8">
            Payment Summary
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Attorney Fee</span>
              <span className="font-bold">
                ${formData.attorneyFee}
              </span>
            </div>

            {Number(formData.numberOfCitations) > 1 && (

              <div className="flex justify-between">

                <span>
                  Additional Citation Fee
                </span>

                <span className="font-bold">
                  $
                  {(Number(formData.numberOfCitations)-1)*50}
                </span>

              </div>

            )}

            <hr />

            <div className="flex justify-between text-2xl font-black">

              <span>Total</span>

              <span className="text-yellow-600">

                $

                {formData?.attorneyFee +
                  Math.max(
                    Number(formData?.numberOfCitations)-1,
                    0
                  )*50}

              </span>

            </div>

          </div>

        </div>

        {/* PAYMENT */}

        <div className="mt-8 rounded-2xl border p-8">

          <h3 className="font-black text-xl mb-4">
            Secure Payment
          </h3>

          <p className="text-gray-600">

            Payment will be processed securely
            through

            <strong>
              {" "}Elavon Converge Hosted Payment.
            </strong>

          </p>

          <div
            id="converge-payment-form"
            className="
            mt-6
            border-2
            border-dashed
            rounded-xl
            p-10
            text-center
            bg-gray-50
          "
          >

            Hosted Payment Form

          </div>

        </div>

      </div>

    </div>

    {/* TERMS */}

    <div className="mt-10 rounded-2xl bg-yellow-50 border border-yellow-300 p-6">

      <label className="flex gap-3 items-start">

        <input
          type="checkbox"
          required
          className="mt-1"
        />

        <span>

          I understand that submitting this citation
          does not create an attorney-client
          relationship until my case has been reviewed
          and accepted. Payment authorizes review of my
          citation.

        </span>

      </label>

    </div>

    {/* BUTTONS */}

    <div className="flex justify-between mt-10">

      <button
        onClick={prevStep}
        className="
        border
        px-8
        py-4
        rounded-xl
        font-bold
      "
      >
        Back
      </button>

     <ConvergePayment
  amount={formData.attorneyFee}
  onSuccess={handleSubmit}
/>

    </div>

  </div>

)}
          

        </div>

      </section>


    </main>
  );
}
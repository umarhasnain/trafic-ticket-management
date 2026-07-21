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
} from "react-icons/fi";
import Swal from "sweetalert2";
import {
  trafficInfractions,
  criminalViolations,
} from "@/utils/violations";


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

  const handleSubmit = async () => {
    setLoading(true);
    // Fake API Delay
    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setLoading(false);
    setSubmitted(true);


    Swal.fire({
      icon: "success",
      title: "Ticket Submitted Successfully!",
      text:
        "Our traffic attorneys will review your case and contact you shortly.",
      confirmButtonColor: "#EAB308",
      background: "#111827",
      color: "#ffffff",
    });


    setFormData({
      violationType: "",
      ticketNumber: "",
      ticketDate: "",
      location: "",
      description: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      ticketFront: null,
      ticketBack: null,
    });
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
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };


  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
onChange={(e)=>
setEligibility({
...eligibility,
citationType:e.target.value
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
onChange={(e)=>
setEligibility({
...eligibility,
county:e.target.value
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
onChange={(e)=>
setEligibility({
...eligibility,
citationDate:e.target.value
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

{eligible===true && (

<div className="mt-10 bg-green-50 border border-green-300 rounded-2xl p-6">

<h3 className="text-2xl font-black text-green-700">

✓ Eligible for Online Submission

</h3>

<p className="mt-2">

You may now continue with the ticket submission form below.

</p>

</div>

)}

{eligible===false && (

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
value={formData.citationNumber}
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

{trafficInfractions.map((item)=>(

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

            <div className="p-8 md:p-12">


              <h2 className="text-3xl font-black">
                Upload Ticket Photos
              </h2>


              <p className="text-gray-500 mt-2 mb-8">
                Upload clear images of your ticket.
              </p>


              <div className="grid md:grid-cols-2 gap-6">


                {/* Front */}

                <label
                  className="
                  border-2
                  border-dashed
                  rounded-2xl
                  p-10
                  text-center
                  cursor-pointer
                  hover:border-yellow-500
                  transition
                  "
                >

                  <FiUpload
                    className="
                    text-5xl
                    mx-auto
                    text-yellow-500
                    mb-4
                    "
                  />

                  <h3 className="font-bold">
                    Upload Front Side
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    JPG, PNG or PDF
                  </p>


                  <input
                    type="file"
                    hidden
                    name="ticketFront"
                    onChange={handleChange}
                  />

                </label>



                {/* Back */}

                <label
                  className="
                  border-2
                  border-dashed
                  rounded-2xl
                  p-10
                  text-center
                  cursor-pointer
                  hover:border-yellow-500
                  transition
                  "
                >

                  <FiUpload
                    className="
                    text-5xl
                    mx-auto
                    text-yellow-500
                    mb-4
                    "
                  />

                  <h3 className="font-bold">
                    Upload Back Side
                  </h3>


                  <p className="text-gray-500 text-sm mt-2">
                    JPG, PNG or PDF
                  </p>


                  <input
                    type="file"
                    hidden
                    name="ticketBack"
                    onChange={handleChange}
                  />

                </label>


              </div>



              <div className="mt-10 flex justify-between">


                <button
                  onClick={prevStep}
                  className="
                  border
                  px-8 py-4
                  rounded-xl
                  font-bold
                  hover:bg-gray-100
                  transition
                  "
                >
                  Back
                </button>


                <button
                  onClick={nextStep}
                  className="
                  bg-yellow-500
                  hover:bg-yellow-400
                  px-8 py-4
                  rounded-xl
                  font-bold
                  transition
                  "
                >
                  Review Details
                </button>


              </div>

            </div>

          )}



          {/* ================= STEP 4 ================= */}

          {step === 4 && (

            <div className="p-8 md:p-12">


              <h2 className="text-3xl font-black">
                Review Your Submission
              </h2>


              <p className="text-gray-500 mt-2 mb-8">
                Verify all details before submitting.
              </p>


              <div className="
                grid 
                md:grid-cols-2 
                gap-5
              ">


                {Object.entries(formData).map(([key, value]) => (

                  <div
                    key={key}
                    className="
                    p-5
                    rounded-xl
                    bg-gray-50
                    border
                    "
                  >

                    <h4 className="font-bold capitalize">
                      {key.replaceAll(
                        /([A-Z])/g,
                        " $1"
                      )}
                    </h4>


                    <p className="text-gray-600 mt-2">

                      {value?.name || value || "Not Provided"}

                    </p>


                  </div>

                ))}


              </div>



              <div className="
                mt-10
                flex
                justify-between
                gap-4
              ">


                <button
                  onClick={prevStep}
                  className="
                  border
                  px-8 py-4
                  rounded-xl
                  font-bold
                  hover:bg-gray-100
                  transition
                  "
                >

                  <FiArrowLeft />

                </button>


                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                  bg-green-600
                  hover:bg-green-500
                  text-white
                  px-10
                  py-4
                  rounded-xl
                  font-bold
                  transition
                  disabled:opacity-50
                  "
                >

                  {loading
                    ? "Submitting..."
                    : "Submit Ticket"}

                </button>


              </div>


            </div>

          )}


        </div>

      </section>


    </main>
  );
}
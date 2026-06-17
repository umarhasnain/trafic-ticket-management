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

  const [formData, setFormData] = useState({
    // Ticket Information
    violationType: "",
    ticketNumber: "",
    ticketDate: "",
    location: "",
    description: "",

    // Driver Information
    fullName: "",
    email: "",
    phone: "",
    address: "",

    // Files
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
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

      <section
        className="
        relative
        overflow-hidden
        bg-linear-to-br
        from-black
        via-gray-900
        to-yellow-600
        py-24
        text-white
        "
      >

        {/* Glow Effect */}

        <div
          className="
          absolute
          top-0
          left-0
          w-72
          h-72
          bg-yellow-400/30
          blur-3xl
          rounded-full
          "
        />

        <div
          className="
          max-w-7xl
          mx-auto
          px-5
          text-center
          relative
          z-10
          "
        >

          <span
            className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-yellow-400
            text-black
            font-bold
            mb-6
            "
          >
            Fast & Secure Online Submission
          </span>


          <h1
            className="
            text-4xl
            md:text-6xl
            font-black
            leading-tight
            "
          >
            Submit Your Traffic Ticket
            <br />
            In Just 2 Minutes
          </h1>


          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-lg
            text-gray-200
            "
          >
            Upload your citation, provide your details,
            and our experienced traffic attorneys will
            carefully review your case and help you fight
            your ticket.
          </p>

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

          {step === 1 && (

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


                {/* Violation Type */}

                <div>

                  <label className="font-semibold">
                    Violation Type
                  </label>


                  <select
                    name="violationType"
                    value={formData.violationType}
                    onChange={handleChange}
                    className="
    mt-2
    w-full
    rounded-xl
    border
    p-4
    bg-white
    outline-none
    focus:border-yellow-500
    cursor-pointer
  "
                  >

                    <option value="">
                      Select Your Traffic Violation
                    </option>


                    {allViolations.map((violation) => (

                      <option
                        key={violation.slug}
                        value={violation.title}
                      >
                        {violation.title}
                      </option>

                    ))}

                  </select>

                </div>


                {/* Ticket Number */}

                <div>

                  <label className="font-semibold">
                    Ticket Number
                  </label>


                  <input
                    type="text"
                    name="ticketNumber"
                    value={formData.ticketNumber}
                    onChange={handleChange}
                    placeholder="Enter ticket number"
                    className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-4
                    outline-none
                    focus:border-yellow-500
                    "
                  />

                </div>
                {/* Ticket Date */}

                <div>

                  <label className="font-semibold">
                    Ticket Date
                  </label>


                  <input
                    type="date"
                    name="ticketDate"
                    value={formData.ticketDate}
                    onChange={handleChange}
                    className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-4
                    outline-none
                    focus:border-yellow-500
                    "
                  />

                </div>


                {/* Location */}

                <div>

                  <label className="font-semibold">
                    Violation Location
                  </label>


                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State, Road"
                    className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    p-4
                    outline-none
                    focus:border-yellow-500
                    "
                  />

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
                  onClick={nextStep}
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

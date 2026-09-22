"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully",
      text: "Our traffic attorneys will contact you shortly.",
      confirmButtonColor: "#1B3A5C",
      background: "#ffffff",
      color: "#111827",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      value: "(305) 442-0243",
      href: "tel:3054420243",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "THETRAFFICLAWFIRM@GMAIL.COM",
      href: "mailto:THETRAFFICLAWFIRM@GMAIL.COM",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      value: "122 Minorca Avenue, Coral Gables, FL 33134",
    },
    {
      icon: <FaClock />,
      title: "Hours",
      value: "Mon - Fri: 9AM - 6PM",
    },
  ];

  return (
    <main className="bg-white text-gray-900 transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="relative  min-h-[620px] md:min-h-[680px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/cellphone-image.png"
          alt="Contact The Traffic Law Firm"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-black/75 to-brand-blue/95" />

        {/* TLF Logo Overlay positioned roughly bottom-1/3, left-1/3 over phone area */}
        {/* <div
          aria-hidden="true"
          className="absolute bottom-[34%] left-[33%] -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none flex items-center justify-center"
        >
          <Image
            src="/assets/images/tlf-logo-white-bg.png"
            alt="TLF Logo"
            width={80}
            height={36}
            className="h-6 sm:h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-lg"
          />
        </div> */}

        {/* Heading & Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-5 text-center text-white py-24">
          <div data-aos="fade-up">
            <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm">
              Home / Contact
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 uppercase tracking-tight text-white">
              CONTACT US
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Have questions about your traffic ticket? Our experienced legal
              team is here to guide you through every step of your case.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                shadow-lg
                shadow-gray-200/50
                border
                border-gray-100
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
                items-center
              "
            >
              <div
                className="
                  w-16
                  h-16
                  bg-brand-blue
                  text-brand-gold
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mx-auto
                  mb-5
                  shadow-md
                "
              >
                {item.icon}
              </div>

              <h3 className="font-black text-xl text-brand-blue mb-3">
                {item.title}
              </h3>

              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-brand-gold transition-colors font-medium break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600 font-medium">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FORM + CTA */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div
            data-aos="fade-right"
            className="
              bg-gray-50
              rounded-3xl
              p-8
              md:p-10
              shadow-xl
              shadow-gray-200/40
              border
              border-gray-200
              transition-all
              duration-300
            "
          >
            <h2 className="text-3xl font-black text-brand-blue">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 mt-8">
              {["name", "email", "phone", "subject"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }
                  required
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    focus:border-brand-blue
                    focus:ring-1
                    focus:ring-brand-blue
                    transition-all
                    duration-300
                  "
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                placeholder="Tell us about your traffic ticket..."
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  text-gray-900
                  placeholder:text-gray-400
                  outline-none
                  focus:border-brand-blue
                  focus:ring-1
                  focus:ring-brand-blue
                  transition-all
                  duration-300
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-brand-gold
                  hover:bg-brand-gold-light
                  text-white
                  py-4
                  rounded-xl
                  font-black
                  shadow-md
                  hover:scale-[1.01]
                  transition-all
                  duration-300
                "
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* CTA CARD */}
          <div
            data-aos="fade-left"
            className="
              bg-brand-blue
              text-white
              rounded-3xl
              p-10
              flex
              flex-col
              justify-center
              shadow-xl
              border
              border-brand-blue-light/30
              transition-all
              duration-300
            "
          >
            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">
              Need Immediate Help?
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4 text-white leading-tight">
              Speak With A Traffic Attorney Today
            </h2>

            <p className="text-white/80 mt-6 leading-relaxed">
              Don&apos;t wait until your ticket affects your record or insurance.
              Get professional legal guidance now.
            </p>

            <a
              href="tel:3054420243"
              className="
                mt-10
                bg-brand-gold
                hover:bg-brand-gold-light
                text-white
                text-center
                py-4
                rounded-xl
                font-black
                shadow-lg
                shadow-brand-gold/25
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Call (305) 442-0243
            </a>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="h-96 md:h-[450px] w-full">
        <iframe
          title="Office Location"
          src="https://maps.google.com/maps?q=122+Minorca+Avenue,+Coral+Gables,+FL+33134&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </main>
  );
}
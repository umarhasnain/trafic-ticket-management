"use client";

import { useState } from "react";
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
      confirmButtonColor: "#EAB308",
      background: "#111827",
      color: "#fff",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">

      {/* HERO */}

      <section
        className="
          bg-gray-50
          dark:bg-black
          text-gray-900
          dark:text-white
          py-24
          text-center
          transition-colors
          duration-300
        "
      >
        <div className="max-w-7xl mx-auto px-5">

          <p className="text-orange-400 font-semibold">
            Home / Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-5">
            Contact Our Traffic Attorneys
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6 transition-colors duration-300">
            Have questions about your traffic ticket?
            Our experienced legal team is here to
            guide you through every step of your case.
          </p>

        </div>
      </section>


      {/* CONTACT INFO */}

      <section className="py-20 bg-white dark:bg-black transition-colors duration-300">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            grid
            md:grid-cols-4
            gap-6
          "
        >

          {[
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              value: "(305) 442-0243",
            },

            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "info@heretodefendyou.com",
            },

            {
              icon: <FaMapMarkerAlt />,
              title: "Office",
              value:
                "122 Minorca Avenue,Coral Gables, FL 33134",
            },

            {
              icon: <FaClock />,
              title: "Hours",
              value: "Mon - Fri: 9AM - 6PM",
            },
          ].map((item, index) => (

            <div
              key={index}
              data-aos="zoom-in"
              className="
                bg-gray-50
                dark:bg-white/5
                rounded-3xl
                p-8
                text-center
                shadow-lg
                dark:shadow-none
                border
                border-gray-200
                dark:border-white/10
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-16 h-16
                  bg-orange-400
                  text-black
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mx-auto
                  mb-5
                "
              >
                {item.icon}
              </div>

              <h3 className="font-black text-xl text-gray-900 dark:text-white transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mt-3 transition-colors duration-300">
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* FORM + OFFICE */}

      <section className="pb-24 bg-white dark:bg-black transition-colors duration-300">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            grid
            lg:grid-cols-2
            gap-10
          "
        >

          {/* FORM */}

          <div
            data-aos="fade-right"
            className="
              bg-gray-50
              dark:bg-white/5
              rounded-3xl
              p-8
              shadow-xl
              dark:shadow-none
              border
              border-gray-200
              dark:border-white/10
              transition-all
              duration-300
            "
          >

            <h2 className="text-3xl font-black text-gray-900 dark:text-white transition-colors duration-300">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
            >

              {[
                "name",
                "email",
                "phone",
                "subject",
              ].map((field) => (

                <input
                  key={field}
                  type={
                    field === "email"
                      ? "email"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field.charAt(0).toUpperCase() +
                    field.slice(1)
                  }
                  required
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-gray-300
                    dark:border-white/20
                    bg-white
                    dark:bg-black/20
                    text-gray-900
                    dark:text-white
                    placeholder:text-gray-500
                    dark:placeholder:text-gray-400
                    outline-none
                    focus:border-orange-500
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
                  dark:border-white/20
                  bg-white
                  dark:bg-black/20
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-500
                  dark:placeholder:text-gray-400
                  outline-none
                  focus:border-orange-500
                  transition-all
                  duration-300
                "
              />

              <button
                className="
                  w-full
                  bg-orange-400
                  hover:bg-orange-500
                  text-black
                  py-4
                  rounded-xl
                  font-black
                  transition
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
              bg-gray-100
              dark:bg-black
              text-gray-900
              dark:text-white
              rounded-3xl
              p-10
              flex
              flex-col
              justify-center
              border
              border-gray-200
              dark:border-white/10
              transition-all
              duration-300
            "
          >

            <span className="text-orange-400 font-bold">
              Need Immediate Help?
            </span>

            <h2 className="text-5xl font-black mt-4 text-gray-900 dark:text-white transition-colors duration-300">
              Speak With A Traffic Attorney Today
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-6 transition-colors duration-300">
              Don't wait until your ticket affects
              your record or insurance.
              Get professional legal guidance now.
            </p>

            <a
              href="tel:+13054420243"
              className="
                mt-10
                bg-orange-400
                text-black
                text-center
                py-4
                rounded-xl
                font-black
                hover:bg-orange-500
                transition
              "
            >
              Call (305) 442-0243
            </a>

          </div>

        </div>

      </section>


      {/* GOOGLE MAP */}

      <section className="h-112.5">

        <iframe
          title="Office Location"
          src="https://maps.google.com/maps?q=Miami,Florida&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
          loading="lazy"
        />

      </section>

    </main>
  );
}
"use client";

import { useState } from "react";

export default function ContactTrafficTicketForm() {
  const [form, setForm] = useState({
    clientType: "New Client",
    helpType: "",
    sendTicketNow: "Yes",
    ticketDate: "",
    county: "",
    ticketType: "",
    suspended: "No",
    accident: "No",
    schoolZone: "No",
    suspendedKnowingly: "No",
    reckless: "No",
    cdl: "No",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-linear-to-b from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact the Traffic Ticket Team
          </h1>
          <p className="text-slate-600 mt-3">
            Fill out the form below and our legal team will review your case.
          </p>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 border border-slate-200"
        >

          <div className="grid md:grid-cols-2 gap-6">

            {/* Client Type */}
            <div>
              <label className="text-sm font-semibold">I am a *</label>
              <select
                name="clientType"
                value={form.clientType}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
              >
                <option>New Client</option>
                <option>Returning Client</option>
              </select>
            </div>

            {/* Help Type */}
            <div>
              <label className="text-sm font-semibold">How can we help you today? *</label>
              <input
                type="text"
                name="helpType"
                value={form.helpType}
                onChange={handleChange}
                placeholder="e.g. I have a speeding ticket"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* Send ticket */}
            <div>
              <label className="text-sm font-semibold">Can you send ticket now? *</label>
              <select
                name="sendTicketNow"
                value={form.sendTicketNow}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            {/* Ticket Date */}
            <div>
              <label className="text-sm font-semibold">When was ticket issued?</label>
              <input
                type="date"
                name="ticketDate"
                value={form.ticketDate}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* County */}
            <div>
              <label className="text-sm font-semibold">What county was ticket issued in?</label>
              <input
                type="text"
                name="county"
                value={form.county}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
                placeholder="e.g. Miami-Dade"
              />
            </div>

            {/* Ticket Type */}
            <div>
              <label className="text-sm font-semibold">Type of ticket</label>
              <input
                type="text"
                name="ticketType"
                value={form.ticketType}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
                placeholder="e.g. Speeding / DUI / Red light"
              />
            </div>

            {/* Yes/No Questions */}
            {[
              ["suspended", "Is your license suspended?"],
              ["accident", "Were you in an accident?"],
              ["schoolZone", "School Zone violation?"],
              ["suspendedKnowingly", "Suspended knowingly driving?"],
              ["reckless", "Reckless driving?"],
              ["cdl", "Do you have CDL license?"],
            ].map(([key, label]) => (
              <div key={key}>
                <label className="text-sm font-semibold">{label}</label>
                <select
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg"
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            ))}

            {/* Name */}
            <div>
              <label className="text-sm font-semibold">First Name *</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Last Name *</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold">Phone *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold">Email *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-xl transition"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 mt-4">
              By submitting you agree to our Terms & Conditions.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
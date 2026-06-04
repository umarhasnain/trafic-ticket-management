"use client";

import { useState } from "react";

const initialState = {
  help: "",
  ticketType: "",
  date: "",
  county: "",
  accident: "No",
  suspended: "No",
  reckless: "No",
  cdl: "No",
  notes: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export default function TrafficTicketWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialState);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🧠 AUTO CASE CLASSIFICATION ENGINE
  const classifyCase = (data) => {
    const criminalKeywords = [
      "dui",
      "reckless",
      "suspended",
      "fleeing",
      "accident",
      "no valid",
    ];

    const text = (
      data.help +
      data.ticketType +
      data.notes
    ).toLowerCase();

    const isCriminal = criminalKeywords.some((k) =>
      text.includes(k)
    );

    return isCriminal ? "Criminal Traffic Case" : "Traffic Infraction Case";
  };

  const nextStep = () => {
    if (step === 2) {
      setCategory(classifyCase(form));
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    setCategory(classifyCase(form));
    console.log("FINAL FORM:", form);
    alert("Case Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden">

        {/* HEADER */}
        <div className="bg-slate-900 text-white p-6">
          <h2 className="text-2xl font-bold">
            Traffic Ticket Intake System
          </h2>

          <p className="text-sm text-slate-300 mt-1">
            Step {step} of 4
          </p>

          {/* progress bar */}
          <div className="w-full bg-slate-700 h-2 mt-4 rounded">
            <div
              className="bg-yellow-400 h-2 rounded transition-all"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {category && (
            <p className="mt-3 text-yellow-300 font-semibold">
              Auto Classified: {category}
            </p>
          )}
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <input
                name="help"
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full p-3 border rounded"
              />

              <input
                name="ticketType"
                onChange={handleChange}
                placeholder="Ticket type (speeding, DUI, etc)"
                className="w-full p-3 border rounded"
              />

              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              {[
                ["accident", "Were you in an accident?"],
                ["suspended", "License suspended?"],
                ["reckless", "Reckless driving?"],
                ["cdl", "Do you have CDL?"],
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="font-medium">{label}</label>
                  <select
                    name={key}
                    onChange={handleChange}
                    className="w-full p-3 border rounded mt-2"
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              ))}
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <input
                name="firstName"
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3 border rounded"
              />

              <input
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-3 border rounded"
              />

              <input
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-3 border rounded"
              />

              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border rounded"
              />
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="bg-slate-100 p-5 rounded-lg">
              <h3 className="text-lg font-bold mb-2">
                Review Your Case
              </h3>

              <pre className="text-xs whitespace-pre-wrap">
                {JSON.stringify(form, null, 2)}
              </pre>

              {category && (
                <p className="mt-4 font-bold text-green-700">
                  Case Type: {category}
                </p>
              )}
            </div>
          )}
        </div>

        {/* FOOTER BUTTONS */}
        <div className="p-6 flex justify-between border-t">

          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-5 py-2 bg-gray-200 rounded"
            >
              Back
            </button>
          )}

          {step < 4 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-yellow-500 font-bold rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-600 text-white font-bold rounded"
            >
              Submit Case
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
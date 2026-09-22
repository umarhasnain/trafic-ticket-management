"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState("EN");

  const handleToggle = (newLang) => {
    if (newLang === "ES") {
      setLang("ES");
      // Spanish translations not yet available
      if (typeof window !== "undefined") {
        const toast = document.createElement("div");
        toast.textContent = "Español — Próximamente";
        toast.className =
          "fixed top-24 right-6 z-[100] bg-brand-blue text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium transition-all";
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.style.opacity = "0";
          setTimeout(() => toast.remove(), 300);
        }, 2500);
      }
      // Revert to EN since no translations available
      setTimeout(() => setLang("EN"), 3000);
    } else {
      setLang("EN");
    }
  };

  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      <button
        onClick={() => handleToggle("EN")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "EN"
            ? "text-brand-white"
            : "text-gray-400 hover:text-brand-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => handleToggle("ES")}
        className={`px-2 py-1 rounded transition-colors ${
          lang === "ES"
            ? "text-brand-white"
            : "text-gray-400 hover:text-brand-white"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}


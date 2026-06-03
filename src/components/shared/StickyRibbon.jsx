"use client";

import { FaBolt } from "react-icons/fa";

export default function StickyRibbon() {
  return (
    <div className="sticky top-20 z-40 px-4">
      <div
        className="
          max-w-6xl
          mx-auto
          bg-gradient-to-r
          from-yellow-400
          via-yellow-500
          to-yellow-400
          rounded-2xl
          shadow-xl
          px-6
          py-4
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <div className="flex items-center gap-3">
          <FaBolt className="text-black text-xl" />

          <p className="font-semibold text-black text-center lg:text-left">
            Don't wait until your court date.
            Submit your ticket today and get a faster review.
          </p>
        </div>

        <button
          className="
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            font-bold
            hover:scale-105
            transition-all
          "
        >
          Submit Ticket
        </button>
      </div>
    </div>
  );
}
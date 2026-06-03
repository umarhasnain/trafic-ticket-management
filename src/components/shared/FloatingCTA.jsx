"use client";

import { FaTicketAlt } from "react-icons/fa";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <button
        className="
          group
          relative
          overflow-hidden
          bg-yellow-400
          hover:bg-yellow-300
          text-black
          font-bold
          px-6
          py-4
          rounded-full
          shadow-[0_15px_50px_rgba(250,204,21,.45)]
          hover:scale-105
          transition-all
          duration-300
          flex
          items-center
          gap-3
        "
      >
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000" />

        <FaTicketAlt className="relative z-10 text-lg" />

        <span className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-20">
          Submit Ticket
        </span>
      </button>
    </div>
  );
}
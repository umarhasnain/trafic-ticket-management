"use client";

import Link from "next/link";
import { FaPhoneAlt, FaTicketAlt } from "react-icons/fa";

export default function MobileBottomBar() {
  return (
    <div
      className="
        lg:hidden
        fixed
        bottom-0
        left-0
        right-0
        z-[999]
        bg-white/95
        backdrop-blur-xl
        border-t
        border-gray-200
        p-3
      "
    >
      <div className="grid grid-cols-2 gap-3">
        <Link href="/submit-ticket">
          <button
            className="
              w-full
              bg-brand-gold
              hover:bg-brand-gold-light
              text-white
              py-3
              px-4
              rounded-xl
              font-bold
              flex
              items-center
              justify-center
              gap-2
              shadow-sm
              transition-colors
            "
          >
            <FaTicketAlt />
            Submit
          </button>
        </Link>
        <Link href="/contact">
          <button
            className="
              w-full
              border-2
              border-brand-blue
              text-brand-blue
              hover:bg-brand-blue
              hover:text-white
              py-3
              px-4
              rounded-xl
              font-bold
              flex
              items-center
              justify-center
              gap-2
              transition-colors
            "
          >
            <FaPhoneAlt />
            Call Now
          </button>
        </Link>
      </div>
    </div>
  );
}
"use client";

import {
  FaPhoneAlt,
  FaTicketAlt,
} from "react-icons/fa";

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
        bg-black/95
        backdrop-blur-xl
        border-t
        border-yellow-500/20
        p-3
      "
    >
      <div className="grid grid-cols-2 gap-3">
        <button
          className="
            bg-yellow-400
            text-black
            py-3
            rounded-xl
            font-bold
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <FaTicketAlt />
          Submit
        </button>

        <button
          className="
            border
            border-yellow-400
            text-yellow-400
            py-3
            rounded-xl
            font-bold
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <FaPhoneAlt />
          Call Now
        </button>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";

export default function ImageBanner({
  image = "/assets/images/img3.png",
  alt = "Banner",
  height = "h-[260px] md:h-[420px] lg:h-[500px]",
  rounded = true,
  shadow = true,
}) {
  return (
    <section className="w-full py-10">
      <div
        className={`relative overflow-hidden ${
          rounded ? "rounded-3xl" : ""
        } ${shadow ? "shadow-2xl" : ""}`}
      >
        {/* Banner Image */}
        <Image
          src={image}
          alt={alt}
          width={1920}
          height={900}
          priority
          className={`w-full ${height} object-cover transition duration-700 hover:scale-105`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />

        {/* Decorative Glow */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-orange-400/10 blur-3xl" />
      </div>
    </section>
  );
}
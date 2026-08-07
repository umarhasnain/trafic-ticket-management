// // "use client";

// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// // import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 30);
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const links = [
// //     "Home",
// //     "Services",
// //     "Citations",
// //     "Violations",
// //     "About",
// //     "FAQ",
// //     "Contact",
// //   ];

// //   return (
// //     <>
// //       <header
// //         className={`fixed bg-black/90 top-0 left-0 z-50 w-full transition-all duration-300 ${
// //           scrolled
// //             ? "bg-black/90 backdrop-blur-xl border-b border-orange-400/20"
// //             : "bg-transparent"
// //         }`}
// //       >
// //         <div className="max-w-7xl mx-auto px-5 lg:px-8">
// //           <div className="h-20 flex items-center justify-between">
// //             <Link href="/">
// //               <h2 className="text-2xl font-black text-white">
// //                 Traffic
// //                 <span className="text-orange-400"> Ticket</span>
// //               </h2>
// //             </Link>

// //             <nav className="hidden lg:flex items-center gap-8">
// //               {links.map((item) => (
// //                 <a
// //                   key={item}
// //                   href={`/${item.toLowerCase()}`}
// //                   className="text-white/90 hover:text-orange-400 transition"
// //                 >
// //                   {item}
// //                 </a>
// //               ))}
// //             </nav>

// //             <div className="hidden lg:flex items-center gap-3">
// //               <Link href='/contact'> 
// //               <button className="px-5 py-3 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition">
// //                 Call Now
// //               </button>
// // </Link>
// // <Link href='submit-ticket'>


// //               <button className="px-5 py-3 rounded-xl bg-orange-400 text-black font-semibold hover:scale-105 transition">
// //                 Submit Ticket
// //               </button>

// //               </Link>
// //             </div>

// //             <button
// //               onClick={() => setOpen(true)}
// //               className="lg:hidden text-white text-3xl"
// //             >
// //               <HiOutlineMenuAlt3 />
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       <div
// //         className={`fixed top-0 right-0 z-60 h-screen w-[320px] bg-black transition-all duration-500 ${
// //           open ? "translate-x-0" : "translate-x-full"
// //         }`}
// //       >
// //         <div className="p-6">
// //           <div className="flex justify-between items-center">
// //             <h3 className="text-white text-xl font-bold">
// //               Traffic Ticket
// //             </h3>

// //             <button
// //               onClick={() => setOpen(false)}
// //               className="text-white text-3xl"
// //             >
// //               <HiX />
// //             </button>
// //           </div>

// //           <div className="mt-10 flex flex-col gap-6">
// //             {links.map((item) => (
// //               <a
// //                 key={item}
// //                 href="item"
// //                 className="text-white text-lg hover:text-orange-400"
// //               >
// //                 {item}
// //               </a>
// //             ))}
// //           </div>

// //           <div className="mt-10 flex flex-col gap-3">
// //             <Link href="/submit-ticket"> 
// //             <button className="bg-orange-400 text-black py-3 rounded-xl font-semibold">
// //               Submit Ticket
// //             </button>
// //             </Link>

// // <Link href="/contact">
// //             <button className="border border-orange-400 text-orange-400 py-3 rounded-xl">
// //               Call Now
// //             </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import ThemeToggle from "../ThemeToggle";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     "Home",
//     "Services",
//     "Citations",
//     "Violations",
//     "About",
//     "FAQ",
//     "Contact",
//   ];

//   return (
//     <>
//       <header
//         className={`fixed bg-white text-black top-0 left-0 z-50 w-full transition-all duration-300 ${
//           scrolled
//             ? "bg-black/90 backdrop-blur-xl border-b border-orange-400/20"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 lg:px-8">
//           <div className="h-20 flex items-center justify-between">
//             <Link href="/">
//               <Image
//                 src="/assets/images/logo.png"
//                 alt="Logo"
//                 width={180}
//                 height={60}
//                 priority
//                 className="h-12 w-auto object-contain"
//               />
//             </Link>

//             <nav className="hidden lg:flex items-center gap-8">
//               {links.map((item) => (
//                 <a
//                   key={item}
//                   href={`/${item.toLowerCase()}`}
//                   className="text-black/90 hover:text-orange-400 transition"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>

//             <div className="hidden lg:flex items-center gap-3">
//               <Link href="/contact">
//                 <button className="px-5 py-3 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition">
//                   Call Now
//                 </button>
//               </Link>

//               <Link href="submit-ticket">
//                 <button className="px-5 py-3 rounded-xl bg-orange-400 text-black font-semibold hover:scale-105 transition">
//                   Submit Ticket
//                 </button>
//               </Link>

//               <ThemeToggle />
//             </div>

//             <button
//               onClick={() => setOpen(true)}
//               className="lg:hidden text-white text-3xl"
//             >
//               <HiOutlineMenuAlt3 />
//             </button>
//           </div>
//         </div>
//       </header>

//       <div
//         className={`fixed top-0 right-0 z-60 h-screen w-[320px] bg-black transition-all duration-500 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center">
//             <Image
//               src="/assets/logo.png"
//               alt="Logo"
//               width={160}
//               height={50}
//               className="h-10 w-auto object-contain"
//             />

//             <button
//               onClick={() => setOpen(false)}
//               className="text-white text-3xl"
//             >
//               <HiX />
//             </button>
//           </div>

//           <div className="mt-10 flex flex-col gap-6">
//             {links.map((item) => (
//               <a
//                 key={item}
//                 href={`/${item.toLowerCase()}`}
//                 className="text-white text-lg hover:text-orange-400"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           <div className="mt-10 flex flex-col gap-3">
//             <Link href="/submit-ticket">
//               <button className="bg-orange-400 text-black py-3 rounded-xl font-semibold">
//                 Submit Ticket
//               </button>
//             </Link>

//             <Link href="/contact">
//               <button className="border border-orange-400 text-orange-400 py-3 rounded-xl">
//                 Call Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Citations", href: "/citations" },
    { name: "Violations", href: "/violations" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-zinc-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={170}
                height={50}
                priority
                className="w-auto h-10 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative font-medium transition-all duration-300
                      ${
                        active
                          ? "text-orange-400"
                          : "text-gray-800 dark:text-white hover:text-orange-400"
                      }`}
                  >
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-orange-400 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <button className="px-5 py-3 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Call Now
                </button>
              </Link>

              <Link href="/submit-ticket">
                <button className="px-5 py-3 rounded-xl bg-orange-400 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Submit Ticket
                </button>
              </Link>

              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-3xl text-gray-800 dark:text-white"
            >
              <HiOutlineMenuAlt3 />
            </button>

          </div>
        </div>
      </header>


            {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[320px] bg-white dark:bg-zinc-950 border-l border-gray-200 dark:border-zinc-800 shadow-2xl transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200 dark:border-zinc-800">

          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={160}
              height={45}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-gray-800 dark:text-white hover:text-orange-400 transition"
          >
            <HiX />
          </button>

        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col px-6 py-8 gap-2">

          {links.map((item) => {

            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                  active
                    ? "bg-orange-400 text-white"
                    : "text-gray-800 dark:text-white hover:bg-orange-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );

          })}

        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-8 left-6 right-6 flex flex-col gap-4">

          <ThemeToggle />

          <Link href="/submit-ticket" onClick={() => setOpen(false)}>
            <button className="w-full rounded-xl bg-orange-400 py-3 font-semibold text-white hover:scale-[1.02] transition-all duration-300">
              Submit Ticket
            </button>
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="w-full rounded-xl border border-orange-400 py-3 font-semibold text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300">
              Call Now
            </button>
          </Link>

        </div>

      </aside>

    </>
  );
}

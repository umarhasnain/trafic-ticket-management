import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosProvider from "@/components/providers/AosProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Traffic Law Firm — Here to Defend You",
  description:
    "Over 30 years defending drivers in Miami. Civil traffic infractions, criminal traffic cases, and civil litigation. Call (305) 442-0243.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <AosProvider>
          <Navbar />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosProvider from "@/components/providers/AosProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trafic Management System",
  description: "Your trusted partner for traffic ticket defense and legal solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <ThemeProvider>


        
         <AosProvider>
          <Navbar />
          {children}
          <Footer />
          </AosProvider>
           </ThemeProvider>
        </body>
    </html>
  );
}

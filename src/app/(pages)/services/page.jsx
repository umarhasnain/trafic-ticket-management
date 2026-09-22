import ServiceCategories from "@/components/services/ServiceCategories";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "Practice Areas | The Traffic Law Firm",
  description:
    "Explore our legal practice areas: Civil Traffic Infractions, Criminal Traffic Defense, and Civil & Commercial Litigation in South Florida.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <ServiceCategories />
      <AboutCTA />
    </main>
  );
}
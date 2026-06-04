import FirmStory from "@/components/about/FirmStory";
import AttorneyBio from "@/components/about/AttorneyBio";
import Experience from "@/components/about/Experience";
import Results from "@/components/about/Results";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <FirmStory />
      <AttorneyBio />
      <Experience />
      <Results />
      <AboutCTA />
    </>
  );
}
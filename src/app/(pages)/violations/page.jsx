import ViolationsGrid from "@/components/violations/ViolationsGrid";
import AttorneyReviewRequired from "@/components/violations/AttorneyReviewRequired";
import AboutCTA from "@/components/about/AboutCTA";

export default function ViolationsPage() {
  return (
    <>
      <ViolationsGrid />
      <AttorneyReviewRequired />
      <AboutCTA />
    </>
  );
}
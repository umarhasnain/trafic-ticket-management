import { notFound } from "next/navigation";

import {
trafficInfractions,
criminalViolations,
} from "@/utils/violations";

import ViolationHero from "@/components/violations/ViolationHero";
import ViolationOverview from "@/components/violations/ViolationOverview";
import ViolationPenalties from "@/components/violations/ViolationPenalties";
import ViolationDefense from "@/components/violations/ViolationDefense";
import AttorneyReviewRequired from "@/components/violations/AttorneyReviewRequired";
import RelatedViolations from "@/components/violations/RelatedViolations";
import ViolationCTA from "@/components/violations/ViolationCTA";

const allViolations = [
...trafficInfractions,
...criminalViolations,
];

export async function generateStaticParams() {
return allViolations.map((item) => ({
slug: item.slug,
}));
}

export async function generateMetadata({ params }) {
const { slug } = await params;

const violation = allViolations.find(
(item) => item.slug === slug
);

if (!violation) {
return {
title: "Violation Not Found",
};
}

return {
title: `${violation.title} | Traffic Violation Attorney`,
description: violation.shortDescription,


openGraph: {
  title: violation.title,
  description: violation.shortDescription,
  images: [
    {
      url: violation.image,
      width: 1200,
      height: 630,
    },
  ],
},


};
}

export default async function ViolationPage({
params,
}) {
const { slug } = await params;

const violation = allViolations.find(
(item) => item.slug === slug
);

if (!violation) {
notFound();
}

return ( <main className="bg-slate-50 min-h-screen"> <ViolationHero violation={violation} />


  {violation.overview && (
    <ViolationOverview violation={violation} />
  )}

  {violation.penalties?.length > 0 && (
    <ViolationPenalties violation={violation} />
  )}

  {violation.defenses?.length > 0 && (
    <ViolationDefense violation={violation} />
  )}

  <AttorneyReviewRequired />

  <RelatedViolations
    currentSlug={violation.slug}
  />

  <ViolationCTA />
</main>


);
}

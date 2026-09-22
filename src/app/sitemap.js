import { trafficInfractions, criminalViolations } from "@/utils/violations";

export default function sitemap() {
  const baseUrl = "https://thetrafficlawfirm.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/reviews",
    "/contact",
    "/submit-ticket",
    "/faq",
    "/citations",
    "/violations",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic violation routes
  const allViolations = [...trafficInfractions, ...criminalViolations];
  const violationRoutes = allViolations.map((item) => ({
    url: `${baseUrl}/violations/${item.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...violationRoutes];
}


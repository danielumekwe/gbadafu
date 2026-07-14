import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CTABand } from "@/components/sections/CTABand";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Gbadafu International Limited's mining services — from copper, gold, and iron ore mining to mineral processing, equipment supply, and general contracts.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <ServiceGrid />
      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

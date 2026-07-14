import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CoreValues } from "@/components/sections/CoreValues";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Solutions } from "@/components/sections/Solutions";
import { StatsBand } from "@/components/sections/StatsBand";
import { PrecisionCTA } from "@/components/sections/PrecisionCTA";
import { CTABand } from "@/components/sections/CTABand";
import { GET_IN_TOUCH_CTA } from "@/content/home";

export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreValues />
      <WhatWeDo />
      <Solutions />
      <StatsBand />
      <PrecisionCTA />
      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

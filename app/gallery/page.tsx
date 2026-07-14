import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { CTABand } from "@/components/sections/CTABand";
import { GALLERY_IMAGES } from "@/content/gallery";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description: "A look at Gbadafu International Limited's mining sites, equipment, and field operations.",
  path: "/gallery",
  image: "/images/gallery/gallery-1.jpeg",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
      <Gallery images={GALLERY_IMAGES} />
      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { CEO_MESSAGE } from "@/content/about";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "CEO Welcome Message",
  description: `A welcome message from ${CEO_MESSAGE.name}, ${CEO_MESSAGE.title} of Gbadafu International Limited.`,
  path: "/ceo-message",
  image: CEO_MESSAGE.image,
});

export default function CeoMessagePage() {
  return (
    <>
      <PageHero
        title="CEO Welcome Message"
        crumbs={[{ label: "Home", href: "/" }, { label: "CEO Welcome Message" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[320px_1fr]">
          <div className="flex flex-col items-center gap-4 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg">
              <Image
                src={CEO_MESSAGE.image}
                alt={CEO_MESSAGE.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, 60vw"
                priority
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-heading">{CEO_MESSAGE.name}</p>
              <p className="text-sm font-medium text-primary uppercase">{CEO_MESSAGE.title}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-6xl leading-none font-serif text-primary/30" aria-hidden="true">
              &ldquo;
            </span>
            <p className="-mt-8 text-base leading-relaxed text-body sm:text-lg">
              {CEO_MESSAGE.message}
            </p>
          </div>
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { INVESTOR_RELATIONS_PARAGRAPHS } from "@/content/investor";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Investor Relations",
  description:
    "Gbadafu International Limited's approach to investor relations — transparency, accountability, and sustainable growth for investors and stakeholders.",
  path: "/investor-relations",
});

export default function InvestorRelationsPage() {
  return (
    <>
      <PageHero
        title="Investor Relations"
        crumbs={[{ label: "Home", href: "/" }, { label: "Investor Relations" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-5">
          {INVESTOR_RELATIONS_PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-body">
              {p}
            </p>
          ))}
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

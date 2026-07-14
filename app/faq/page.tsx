import type { Metadata } from "next";
import { MessageCircleQuestion } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ_ITEMS } from "@/content/faq";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: "Frequently asked questions about Gbadafu International Limited.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          {FAQ_ITEMS.length > 0 ? (
            <Accordion items={FAQ_ITEMS} />
          ) : (
            <div className="flex flex-col items-center gap-4 rounded-lg border border-primary/20 bg-primary/5 p-10 text-center">
              <MessageCircleQuestion className="size-10 text-primary" aria-hidden="true" />
              <p className="font-semibold text-heading">Frequently Asked Questions coming soon</p>
              <p className="max-w-md text-sm leading-relaxed text-body">
                We&rsquo;re preparing answers to the questions we hear most from clients and partners. In the
                meantime, feel free to reach out directly with any questions.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

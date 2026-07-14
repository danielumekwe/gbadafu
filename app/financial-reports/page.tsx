import type { Metadata } from "next";
import { FileWarning, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { FINANCIAL_REPORTS } from "@/content/investor";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Financial Reports",
  description: "Financial statements and reports for Gbadafu International Limited.",
  path: "/financial-reports",
});

export default function FinancialReportsPage() {
  return (
    <>
      <PageHero title="Financial Reports" crumbs={[{ label: "Home", href: "/" }, { label: "Financial Reports" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-6">
          <p className="text-base leading-relaxed text-body">{FINANCIAL_REPORTS.intro}</p>

          <div className="flex items-start gap-4 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <FileWarning className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold text-heading">{FINANCIAL_REPORTS.emptyState}</p>
              <p className="mt-2 text-sm leading-relaxed text-body">{FINANCIAL_REPORTS.note}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-body">{FINANCIAL_REPORTS.followUp}</p>

          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
            <p className="text-sm font-semibold text-heading">{FINANCIAL_REPORTS.contactPrompt}</p>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-sm text-body hover:text-primary">
              <Mail className="size-4" aria-hidden="true" />
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 text-sm text-body hover:text-primary">
              <Phone className="size-4" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

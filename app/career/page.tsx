import type { Metadata } from "next";
import { Briefcase, CheckCircle2, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { CAREER, CAREERS_EMAIL } from "@/content/career";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Career",
  description: "Explore career opportunities at Gbadafu International Limited.",
  path: "/career",
});

export default function CareerPage() {
  return (
    <>
      <PageHero title="Career" crumbs={[{ label: "Home", href: "/" }, { label: "Career" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-14">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-heading">{CAREER.intro.title}</h2>
            <p className="text-base leading-relaxed text-body">{CAREER.intro.paragraph}</p>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <Briefcase className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="mb-2 text-lg font-bold text-heading">{CAREER.currentOpenings.title}</h2>
              <p className="mb-4 text-sm leading-relaxed text-body">{CAREER.currentOpenings.paragraph}</p>
              <p className="mb-2 text-sm font-semibold text-heading">{CAREER.currentOpenings.prompt}</p>
              <ul className="flex flex-col gap-2">
                {CAREER.currentOpenings.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-body">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item.includes(CAREERS_EMAIL) ? (
                      <span>
                        Submit your CV to{" "}
                        <a href={`mailto:${CAREERS_EMAIL}`} className="font-medium text-primary hover:underline">
                          {CAREERS_EMAIL}
                        </a>{" "}
                        to be considered for future roles.
                      </span>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-heading">{CAREER.whatWeOffer.title}</h2>
            <ul className="flex flex-col gap-3">
              {CAREER.whatWeOffer.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-heading">{CAREER.futureOpportunities.title}</h2>
            <p className="mb-4 text-base leading-relaxed text-body">{CAREER.futureOpportunities.prompt}</p>
            <div className="mb-6 flex flex-wrap gap-3">
              {CAREER.futureOpportunities.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-heading"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-base leading-relaxed text-body">{CAREER.futureOpportunities.closing}</p>
          </div>

          <a
            href={`mailto:${CAREERS_EMAIL}`}
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-primary-hover"
          >
            <Mail className="size-4" aria-hidden="true" />
            Submit Your CV
          </a>
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

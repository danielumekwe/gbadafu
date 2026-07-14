import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { CORPORATE_INFO } from "@/content/investor";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Corporate Information",
  description:
    "Corporate information for Gbadafu International Limited (G.I.L) — our vision, mission, leadership, services, and sustainability commitments.",
  path: "/corporate-information",
});

export default function CorporateInformationPage() {
  return (
    <>
      <PageHero
        title="Corporate Information"
        crumbs={[{ label: "Home", href: "/" }, { label: "Corporate Information" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex max-w-3xl flex-col gap-5">
          <h2 className="text-2xl font-bold text-heading">About Us</h2>
          {CORPORATE_INFO.about.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-body">
              {p}
            </p>
          ))}
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-navy p-8 text-white shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-white">Our Vision</h2>
            <p className="text-base leading-relaxed text-white/75">{CORPORATE_INFO.vision}</p>
          </div>
          <div className="rounded-lg bg-surface p-8 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-heading">Our Mission</h2>
            <ul className="flex flex-col gap-3">
              {CORPORATE_INFO.mission.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 rounded-lg border border-border p-8 lg:grid-cols-[200px_1fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-lg">
            <Image src="/images/team/yeldin.png" alt={CORPORATE_INFO.leadership.name} fill className="object-cover" sizes="200px" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-heading">{CORPORATE_INFO.leadership.name}</h2>
            <p className="mb-3 text-sm font-medium text-primary uppercase">{CORPORATE_INFO.leadership.title}</p>
            <p className="text-base leading-relaxed text-body">{CORPORATE_INFO.leadership.bio}</p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading align="center" kicker="What We Do" title="Our Services" className="mx-auto" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {CORPORATE_INFO.services.map((service) => (
              <div key={service.title} className="rounded-lg bg-surface p-7 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-heading">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-body">{service.description}</p>
                {service.items && (
                  <ul className="flex flex-col gap-2">
                    {service.items.map((item) => (
                      <li key={item.title} className="text-sm leading-relaxed text-body">
                        <span className="font-semibold text-heading">{item.title}</span> — {item.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Leaf className="size-7" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-heading">Commitment to Sustainability</h2>
            <p className="text-base leading-relaxed text-body">{CORPORATE_INFO.sustainability.intro}</p>
          </div>
          <ul className="flex flex-col gap-3">
            {CORPORATE_INFO.sustainability.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-body sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-white">Contact Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm text-white/75">{CORPORATE_INFO.contact.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col text-sm text-white/75">
                {CORPORATE_INFO.contact.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="hover:text-primary">
                    {email}
                  </a>
                ))}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${CORPORATE_INFO.contact.phone.replace(/\s/g, "")}`} className="text-sm text-white/75 hover:text-primary">
                {CORPORATE_INFO.contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

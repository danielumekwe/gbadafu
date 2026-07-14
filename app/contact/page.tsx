import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Gbadafu International Limited for inquiries, partnerships, or more information.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-heading">Contact Info</h2>
              <p className="text-base leading-relaxed text-body">
                For inquiries, partnerships, or any information, we&rsquo;re here to assist you. Feel free to reach
                out to our team.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">Office Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-body hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">Office Phone</p>
                  <a href={`tel:${SITE.phoneHref}`} className="text-body hover:text-primary">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">Office Location</p>
                  <p className="text-body">{SITE.address}</p>
                </div>
              </li>
            </ul>

            <div className="h-72 w-full overflow-hidden rounded-lg lg:h-80">
              <iframe
                title={`${SITE.name} location map`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.name)}&t=m&z=13&output=embed&iwloc=near`}
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-muted p-8">
            <h2 className="mb-6 text-2xl font-bold text-heading">Send Us a Message</h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getServiceBySlug, SERVICES } from "@/content/services";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        title={service.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative mb-10 aspect-video overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col gap-5">
              {service.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-lg border border-border bg-surface-muted p-7">
              <h2 className="mb-5 text-lg font-bold text-heading">Our Services</h2>
              <ul className="flex flex-col gap-1">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-sm px-3 py-2.5 text-sm text-body transition-colors duration-150 hover:bg-surface hover:text-primary"
                    >
                      {s.title}
                      <ArrowRight
                        className="size-4 shrink-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-navy p-7 text-white">
              <h2 className="mb-2 text-lg font-bold">Need this service?</h2>
              <p className="mb-5 text-sm leading-relaxed text-white/70">
                Reach out to our team for inquiries, partnerships, or more information.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase hover:text-white"
              >
                Contact Us
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

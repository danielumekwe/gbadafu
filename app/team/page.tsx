import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { TEAM_MEMBERS } from "@/content/team";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Executives",
  description:
    "Meet the executive team behind Gbadafu International Limited's leadership in Nigeria's mining sector.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero title="Executives" crumbs={[{ label: "Home", href: "/" }, { label: "Our Executives" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-20">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.slug} className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 280px, 60vw"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-heading">{member.name}</p>
                  <p className="text-sm font-medium text-primary uppercase">{member.title}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {member.bio.map((paragraph, j) => (
                  <p key={j} className="text-base leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

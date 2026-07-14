import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Gem, HeartHandshake, Leaf, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import {
  ABOUT_COMMITMENT,
  ABOUT_GALLERY,
  ABOUT_INTRO,
  CORE_PRINCIPLES,
  IRON_ORE_CAPTION,
  MISSION_VISION,
  STRATEGIC_GOALS,
} from "@/content/about";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Gbadafu International Limited — our mission, vision, values, and commitment to excellence in Nigeria's mining sector.",
  path: "/about",
});

const PRINCIPLE_ICONS = [Gem, HeartHandshake, Users, Leaf];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-5">
          {ABOUT_INTRO.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-body">
              {p}
            </p>
          ))}
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-surface p-8 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-heading">Our Mission</h2>
            <p className="text-base leading-relaxed text-body">{MISSION_VISION.mission}</p>
          </div>
          <div className="rounded-lg bg-navy p-8 text-white shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-white">Our Vision</h2>
            <p className="text-base leading-relaxed text-white/75">{MISSION_VISION.vision}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading align="center" kicker="What We Stand For" title="Our Core Principles" className="mx-auto" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PRINCIPLES.map((principle, i) => {
              const Icon = PRINCIPLE_ICONS[i];
              return (
                <div key={principle.title} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-heading">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about/iron-ore-process.jpg"
              alt="Iron ore to DRI process flow diagram"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-heading italic">{IRON_ORE_CAPTION}</p>
            <p className="text-base leading-relaxed text-body">{ABOUT_COMMITMENT}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <SectionHeading kicker="Looking Ahead" title="Our Strategic Goals" />
          <ul className="flex flex-col gap-4">
            {STRATEGIC_GOALS.map((goal, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-body sm:text-base">{goal}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ABOUT_GALLERY.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt="Gbadafu International mining operations"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(min-width: 640px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

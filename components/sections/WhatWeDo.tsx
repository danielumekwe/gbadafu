import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHAT_WE_DO } from "@/content/home";

export function WhatWeDo() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={WHAT_WE_DO.image}
            alt="Gbadafu International mining operations"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col gap-6">
          <SectionHeading kicker={WHAT_WE_DO.kicker} title={WHAT_WE_DO.title} />
          <p className="text-base leading-relaxed text-body">{WHAT_WE_DO.description}</p>
          <div>
            <Button href="/about" variant="outline" showArrow>
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

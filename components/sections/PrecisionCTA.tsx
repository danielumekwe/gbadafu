import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PRECISION_CTA } from "@/content/home";

export function PrecisionCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src={PRECISION_CTA.image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {PRECISION_CTA.title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/75">
          {PRECISION_CTA.description}
        </p>
        <button
          type="button"
          className="group flex items-center gap-3 rounded-full bg-white/10 py-3 pr-6 pl-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-primary"
        >
          <PlayCircle className="size-9" aria-hidden="true" />
          Watch Now
        </button>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/content/services";

export function ServiceGrid() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <h2 className="text-xl font-bold text-heading">{service.title}</h2>
                <p className="flex-1 text-sm leading-relaxed text-body">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
                  Learn More
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

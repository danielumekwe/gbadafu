import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SITE } from "@/lib/constants";

type PageHeroProps = {
  title: string;
  crumbs: { label: string; href?: string }[];
};

export function PageHero({ title, crumbs }: PageHeroProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${SITE.url}${crumb.href === "/" ? "" : crumb.href}` } : {}),
    })),
  };

  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        <Breadcrumb items={crumbs} />
      </Container>
    </section>
  );
}

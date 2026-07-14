import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { GIL_DOCUMENTS } from "@/content/about";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "GIL Documents",
  description: "Download official Gbadafu International Limited certifications and company documents.",
  path: "/git-documents",
});

export default function GilDocumentsPage() {
  return (
    <>
      <PageHero title="GIL Documents" crumbs={[{ label: "Home", href: "/" }, { label: "GIL Documents" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex max-w-3xl flex-col gap-8">
          <p className="text-base leading-relaxed text-body">{GIL_DOCUMENTS.intro}</p>

          <ul className="flex flex-col gap-4">
            {GIL_DOCUMENTS.files.map((file) => (
              <li key={file.href}>
                <a
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-border bg-surface-muted p-5 transition-colors duration-150 hover:border-primary"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileText className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-heading sm:text-base">
                    {file.title}
                  </span>
                  <Download
                    className="size-5 shrink-0 text-body transition-colors duration-150 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm leading-relaxed text-body">{GIL_DOCUMENTS.outro}</p>
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

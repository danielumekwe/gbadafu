import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { BLOG_POSTS } from "@/content/blog";
import { GET_IN_TOUCH_CTA } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Latest News",
  description: "News and insights from Gbadafu International Limited on mining and mineral exploration in Nigeria.",
  path: "/blog",
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero title="Latest News" crumbs={[{ label: "Home", href: "/" }, { label: "Latest News" }]} />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">{formatDate(post.date)}</p>
                <h2 className="text-xl font-bold text-heading">{post.title}</h2>
                <p className="flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
                <Button href={post.url} variant="link" showArrow className="mt-2 self-start">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CTABand title={GET_IN_TOUCH_CTA.title} description={GET_IN_TOUCH_CTA.description} />
    </>
  );
}

export type BlogPost = {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  image: string | null;
};

const FEED_URL = "https://blog.gbadafu.com/feeds/posts/default?alt=json&max-results=50";

type BloggerLink = { rel: string; href: string };
type BloggerEntry = {
  title?: { $t: string };
  published?: { $t: string };
  content?: { $t: string };
  summary?: { $t: string };
  link?: BloggerLink[];
  media$thumbnail?: { url: string };
};

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

// Blogger's feed thumbnail is a 72x72 crop (".../s72-c/...");
// swap the size segment for a larger one to get a usable card image.
function upscaleThumbnail(url: string) {
  return url.replace(/\/s72-c\//, "/s1600/");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data = await res.json();
    const entries: BloggerEntry[] = data?.feed?.entry ?? [];

    return entries.map((entry) => {
      const altLink = entry.link?.find((link) => link.rel === "alternate");
      const html = entry.content?.$t ?? entry.summary?.$t ?? "";
      const thumbnail = entry.media$thumbnail?.url;

      return {
        title: entry.title?.$t ?? "Untitled",
        url: altLink?.href ?? "https://blog.gbadafu.com",
        date: entry.published?.$t ?? new Date().toISOString(),
        excerpt: truncate(stripHtml(html), 200),
        image: thumbnail ? upscaleThumbnail(thumbnail) : null,
      };
    });
  } catch {
    return [];
  }
}

# Gbadafu International Limited — WordPress → Next.js Migration Plan

Source: local WordPress install at `htdocs/gbadafu` (audited via WP-CLI + rendered HTML crawl).

## Bugs found in the source site during audit (informational, already fixed on the WP side)
- `.htaccess` was generated for a root-domain install; under the local subdirectory install every
  non-home page 302-redirected into the shared XAMPP dashboard. Fixed locally, but note this reflects
  how the site was configured on `gbadafu.com` before migration — verify the same doesn't affect other subdirectory copies.
- Office email was corrupted to `info@localhost/gbadafu` in DB (original: `info@gbadafu.com`) by a global
  domain search-replace done during local troubleshooting — using the corrected address in the rebuild.
- The `/services` page and site-wide "Real Client Feedback" testimonial content is leftover Elementor
  "Financial Services" demo-template copy (references "Investment & Wealth Management") that was never
  replaced with mining-industry content. Flagged per page below; not blindly copied — using the
  page's actual mining-specific sections instead, correcting obvious placeholder mismatches only (per
  "correct only obvious mistakes, don't invent new copy").

## Site map (20 published pages + 6 blog posts)

```
/                                          Home
/about/                                    About (Our Profile)
/ceo-message/                              CEO Welcome Message
/git-documents/                            GIL Documents
/team/                                     Our Executives
/services/                                 Services (index)
  /services/copper-mining/
  /services/gold-exploration/
  /services/iron-ore-mining/
  /services/general-contracts/
  /services/mining-of-minerals/
  /services/sales-supply-distribution-of-mining-equipment/
  /services/importation-exportation-of-mining-machines-and-equipment/
/investor-relations/
/corporate-information/
/financial-reports/
/gallery/
/blog/ (was /blog-financial-services-v1/)   6 published posts
/contact/
/faq/
```

## Navigation (from WP main-menu, 21 items)
- Home
- Company ▾ — Our Profile, CEO Welcome Message, GIL Documents, Our Executives
- Services ▾ — 7 service pages (order: Copper Mining, Gold Exploration, Iron Ore Mining,
  General Contracts, Mining of Minerals, Sales/Supply/Distribution of Mining Equipment,
  Importation/Exportation of Mining Machines & Equipment)
- Investor Relations ▾ — Corporate Information, Financial Reports
  (note: WP menu had a duplicate "Investor Relations" self-link under itself — dropped, not a real page)
- Gallery
- Latest News → Blog
- Contact

## Brand
- **Primary/CTA color: `#FF6700`** (orange — actual button/accent color used site-wide; the Elementor
  theme's *default* kit color `#6EC1E4` blue is unused boilerplate, not the real brand color)
- Supporting: `#000000` text, `#FFFFFF` on dark sections, occasional accent blue `#0073E0`
- Fonts (Google Fonts, from Elementor global typography): **Roboto** (primary/body/accent),
  **Roboto Slab** (secondary/headings). Poppins/Montserrat are loaded but only used incidentally —
  standardizing on Roboto + Roboto Slab via `next/font/google` for performance (fewer font families).

## Content/forms
- Contact form: Elementor Form widget, fields = Name (text), Email (email, required), Message (textarea).
  No server-side handler existing locally (WP mail likely never configured on localhost) — rebuilding with
  React Hook Form + Zod client validation; submission target to be a Next.js Route Handler (mailto/API
  stub, swappable for a real email provider later).
- Contact info: `info@gbadafu.com` · `+234 803 323 6249` · `26, ID Gyang Street, Rayfield, Jos, Plateau State`
- Google Map: embed for "Gbadafu International Limited"
- Gallery: image grid (Elementor gallery widget)
- Blog: 6 posts, standard WP post loop — migrating as static MDX/TS content, paginated list + detail route
- FAQ: accordion (native, no plugin)

## Architecture (mirrors `cityview-nextjs` conventions already in this htdocs)
```
app/            route segments per page above, layout.tsx, sitemap.ts, robots.ts
components/ui/          Button, Container, SectionHeading, Card, Accordion, Breadcrumb
components/layout/      Header, DesktopMenu, MobileMenu, Footer
components/sections/    Hero, ServiceGrid, StatsBand, TestimonialsSection, CTABand, Gallery, PageHero
components/forms/       ContactForm
content/                typed content per page (home.ts, about.ts, services.ts, contact.ts, ...)
lib/                    fonts.ts, constants.ts (nav data, contact info), schemas/contact.ts
public/images/          extracted, optimized site images
```

## Build order (page by page, per instructions)
1. Scaffold + design tokens (this step)
2. Header/Footer/Nav (shared shell)
3. Home
4. Services (index) + 7 service detail pages (shared template component)
5. About, CEO Message, Team, GIL Documents (Company group)
6. Investor Relations, Corporate Information, Financial Reports
7. Gallery
8. Blog (list + detail)
9. Contact, FAQ
10. SEO pass (metadata, sitemap, robots, JSON-LD) + accessibility + Lighthouse pass across all pages

Each page: build → responsive check → visual compare against `http://localhost/gbadafu/...` → fix diffs → next.

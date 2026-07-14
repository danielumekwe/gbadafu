import type { Metadata } from "next";
import { roboto, robotoSlab } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const DESCRIPTION =
  "Gbadafu International Limited is a trusted mining company in Nigeria, delivering excellence in gold exploration, copper mining, iron ore mining, and mineral processing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – ${SITE.tagline}`,
    template: `%s – ${SITE.name}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} – ${SITE.tagline}`,
    description: DESCRIPTION,
    url: SITE.url,
    images: ["/images/brand/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: DESCRIPTION,
    images: ["/images/brand/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MiningCompany",
    name: SITE.name,
    description: DESCRIPTION,
    url: SITE.url,
    telephone: SITE.phoneHref,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "26, ID Gyang Street, Rayfield",
      addressLocality: "Jos",
      addressRegion: "Plateau State",
      addressCountry: "NG",
    },
  };

  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

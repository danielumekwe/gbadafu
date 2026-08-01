import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = [
  "",
  "/about",
  "/ceo-message",
  "/git-documents",
  "/team",
  "/career",
  "/services",
  "/services/copper-mining",
  "/services/gold-exploration",
  "/services/iron-ore-mining",
  "/services/general-contracts",
  "/services/mining-of-minerals",
  "/services/sales-supply-distribution-of-mining-equipment",
  "/services/importation-exportation-of-mining-machines-and-equipment",
  "/investor-relations",
  "/corporate-information",
  "/financial-reports",
  "/gallery",
  "/blog",
  "/contact",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

export const SITE = {
  name: "Gbadafu International Limited",
  shortName: "Gbadafu",
  tagline: "Trusted Mining Company in Nigeria",
  url: "https://gbadafu.com",
  email: "info@gbadafu.com",
  phone: "+234 803 323 6249",
  phoneHref: "+2348033236249",
  address: "26, ID Gyang Street, Rayfield, Jos, Plateau State",
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const SERVICE_LINKS: NavLink[] = [
  { label: "Copper Mining", href: "/services/copper-mining" },
  { label: "Gold Exploration", href: "/services/gold-exploration" },
  { label: "Iron Ore Mining", href: "/services/iron-ore-mining" },
  { label: "General Contracts", href: "/services/general-contracts" },
  { label: "Mining of Minerals", href: "/services/mining-of-minerals" },
  {
    label: "Sales, Supply & Distribution of Mining Equipment",
    href: "/services/sales-supply-distribution-of-mining-equipment",
  },
  {
    label: "Importation & Exportation of Mining Machines and Equipment",
    href: "/services/importation-exportation-of-mining-machines-and-equipment",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "Our Profile", href: "/about" },
      { label: "CEO Welcome Message", href: "/ceo-message" },
      { label: "GIL Documents", href: "/git-documents" },
      { label: "Our Executives", href: "/team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [{ label: "All Services", href: "/services" }, ...SERVICE_LINKS],
  },
  {
    label: "Investor Relations",
    href: "/investor-relations",
    children: [
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "Corporate Information", href: "/corporate-information" },
      { label: "Financial Reports", href: "/financial-reports" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Latest News", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Corporate Information", href: "/corporate-information" },
  { label: "Investor Relations", href: "/investor-relations" },
  { label: "Our Executives", href: "/team" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Career", href: "/career" },
  { label: "Contact us", href: "/contact" },
  { label: "Financial Reports", href: "/financial-reports" },
  { label: "Latest News", href: "/blog" },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = [
  { label: "General Contracts", href: "/services/general-contracts" },
  { label: "Gold Exploration", href: "/services/gold-exploration" },
  { label: "Iron Ore Extraction", href: "/services/iron-ore-mining" },
  { label: "Copper Mining", href: "/services/copper-mining" },
  { label: "Mining of Minerals", href: "/services/mining-of-minerals" },
  {
    label: "Importation & Exportation of Mining Machines and Equipment",
    href: "/services/importation-exportation-of-mining-machines-and-equipment",
  },
];

export const ABOUT_BLURB =
  "At Gbadafu International Ltd, we are more than a mining company — we are a trusted partner committed to excellence, responsibility, and innovation. Our reputation is built on delivering measurable value and sustainable results that exceed expectations.";

import { ShieldCheck, Leaf, Award, HeartHandshake, type LucideIcon } from "lucide-react";

export const HERO = {
  kicker: "TRUSTED NAME IN",
  title: "THE MINING SECTOR",
  description:
    "GIL provides world-class mining and exploration services with a proven track record. We are recognized locally and internationally and continue to stand out as one of the most reliable giants in the industry.",
  images: ["/images/home/hero-1.png", "/images/home/hero-2.png", "/images/home/hero-3.png"],
};

export type CoreValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Safety First",
    description:
      "We prioritize the safety of our workers, partners, equipment, and mining environments at every stage of operation.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainability",
    description:
      "Committed to responsible mining practices that support environmental protection and long-term development.",
    icon: Leaf,
  },
  {
    title: "Excellence",
    description:
      "Delivering high-quality mining solutions through innovation, expertise, and operational efficiency.",
    icon: Award,
  },
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, accountability, and professionalism.",
    icon: HeartHandshake,
  },
];

export const WHAT_WE_DO = {
  kicker: "What we do",
  title: "Explore minerals with Us",
  description:
    "Gbadafu International Ltd is a leading indigenous mining company specializing in exploration, extraction and processing of all kinds of minerals; sales, supply, distribution and export of minerals products. We specialize in procurement of all kinds of materials, equipment and machine tools used for conducting mining activities, and general contracts. With a strong commitment to sustainability, safety, and customer satisfaction, we have established ourselves as a trusted partner for businesses worldwide.",
  image: "/images/home/about-mining.png",
};

export const SOLUTIONS = {
  kicker: "OUR SOLUTIONS",
  title: "COMPLETE MINING SOLUTION",
  description:
    "Gbadafu International Limited proudly owns several mineral sites and holds the rights and licenses to commercial mineral deposits and metal mining fields. In addition, we operate as an authorized Mineral Buying Center across three strategic locations, with proven records of credibility and success.",
  items: [
    {
      title: "Mining of Minerals",
      description:
        "Expert mineral mining operations which includes Iron ore, Copper, Lithium, Gold etc. with proven records of credibility.",
      href: "/services/mining-of-minerals",
      image: "/images/home/service-1.png",
    },
    {
      title: "Minerals Processing",
      description:
        "Trusted leader in commercial sampling services. Full-cycle processing with certified quality control from extraction to delivery.",
      href: "/services/mining-of-minerals",
      image: "/images/home/service-2.png",
    },
    {
      title: "Import and Export",
      description:
        "GIL specializes in importation and exportation of high-quality mining machines, industrial equipment, tools, and heavy-duty machinery.",
      href: "/services/importation-exportation-of-mining-machines-and-equipment",
      image: "/images/home/service-3.png",
    },
  ],
};

export const STATS = {
  kicker: "We are known for our Lead in Mineral Export",
  title: "Unlocking Nigeria's Mineral Wealth",
  description:
    "Since our establishment in 2024, we have positioned ourselves as a trusted global partner by upholding the principles of sustainability, innovation, and customer-centricity. Our experienced professionals are committed to delivering high-quality minerals and mining solutions while ensuring the safety of our people, the satisfaction of our clients, and the protection of the environment. At Gbadafu International Limited, we view mining as a driver of sustainable growth. We integrate cutting-edge technologies, skilled expertise, and ethical practices to deliver exceptional value to businesses worldwide. Our mission is to foster long-term partnerships built on trust, excellence, and responsibility, while our vision is to emerge as a global leader in the mining industry—pioneering progress through innovation, integrity, and sustainable development.",
  items: [
    { value: 6, suffix: "", label: "Active Mines" },
    { value: 30, suffix: "", label: "Number of Concessions" },
    { value: 2, suffix: "", label: "Mineral Buying Centers" },
    { value: 2, suffix: "", label: "Awards" },
  ],
};

export const PRECISION_CTA = {
  title: "Explore Our Mining Precision",
  description:
    "Dive deeper into our mining process that sets the industry standard. From the very core of the earth to the refined product, witness the precision that defines Gbadafu International Limited's mining excellence.",
  image: "/images/home/hero-3.png",
};

export const GET_IN_TOUCH_CTA = {
  title: "GET IN TOUCH",
  description:
    "For inquiries, partnerships, or any information, we're here to assist you. Feel free to reach out to our team.",
};

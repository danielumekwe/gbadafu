export const INVESTOR_RELATIONS_PARAGRAPHS = [
  "Gbadafu International Ltd is committed to building strong, transparent, and long-term relationships with investors, stakeholders, and business partners through integrity, accountability, and sustainable business practices. As a growing company in the mining and industrial sector, we continuously focus on creating value by delivering efficient operations, strategic growth opportunities, and responsible resource management.",
  "Our investor relations approach is centered on transparency, effective communication, operational excellence, and long-term profitability. We provide investors and partners with reliable information about our business operations, growth strategies, project developments, market opportunities, and financial objectives while maintaining high standards of corporate governance and ethical business conduct.",
  "Gbadafu International Ltd operates across key sectors including mineral exploration, mining, mineral processing, equipment supply, importation and exportation of mining machinery, and general contracting services. Through innovation, strategic partnerships, and experienced leadership, we are positioned to support sustainable industrial growth and capitalize on emerging opportunities within the mining and commodities market.",
  "We remain dedicated to responsible mining practices, environmental sustainability, safety, and community development, ensuring that our operations contribute positively to both economic growth and social impact. By combining technical expertise, operational efficiency, and market-driven strategies, we continue to strengthen our position as a trusted and competitive player in the industry.",
  "At Gbadafu International Ltd, we welcome partnerships and investment opportunities that align with our vision of becoming a leading force in the global mining and industrial sector while delivering long-term value to investors, clients, and stakeholders.",
];

type CorporateService = {
  title: string;
  description: string;
  items?: { title: string; description: string }[];
};

export const CORPORATE_INFO: {
  aboutTitle: string;
  about: string[];
  vision: string;
  mission: string[];
  leadership: { name: string; title: string; bio: string };
  services: CorporateService[];
  sustainability: { intro: string; items: string[] };
  contact: { address: string; emails: string[]; phone: string };
} = {
  aboutTitle: "Gbadafu International Limited (G.I.L)",
  about: [
    "Gbadafu International Limited (G.I.L) is a leading Nigerian mining and exploration company committed to excellence, sustainability, and innovation. Founded with a vision to harness Nigeria's rich mineral resources responsibly, the company specializes in gold, iron ore, and copper mining, alongside the distribution and export of high-quality minerals and mining equipment.",
    "We pride ourselves on transparency, integrity, and professionalism, ensuring that our operations create lasting value for stakeholders, host communities, and the global marketplace.",
  ],
  vision:
    "To be a globally recognized mining company, renowned for responsible exploration, sustainable development, and reliable partnerships that deliver prosperity across communities and industries.",
  mission: [
    "To extract and process minerals safely and responsibly.",
    "To provide world-class mining equipment and technical services.",
    "To support national growth through innovation, sustainability, and employment creation.",
    "To maintain strong partnerships with investors, regulators, and host communities.",
  ],
  leadership: {
    name: "John Babatanko Yeldin",
    title: "Founder & Chief Executive Officer",
    bio: "With over 35 years of distinguished service in the Nigerian Navy, Mr. Yeldin brings exceptional leadership, operational management, and strategic expertise to Gbadafu International Limited. His dedication to transparency, discipline, and innovation continues to guide the company's growth and global outlook.",
  },
  services: [
    {
      title: "Mining of Minerals",
      description: "We conduct exploration, extraction, and processing of key minerals:",
      items: [
        { title: "Gold Mining", description: "High-quality refining and export-ready output." },
        {
          title: "Iron Ore Extraction",
          description: "Open-pit and underground operations, supported by beneficiation processes.",
        },
        { title: "Copper Mining", description: "Reliable sourcing and refining for industrial applications." },
      ],
    },
    {
      title: "Sales, Supply & Distribution of Mining Equipment",
      description:
        "We provide a wide range of equipment for exploration, extraction, processing, and safety support, ensuring our partners have the tools they need to succeed.",
    },
    {
      title: "Import & Export of Mining Machines",
      description:
        "Gbadafu facilitates the importation of advanced mining machinery into Nigeria and exports quality equipment to international markets with efficient logistics support.",
    },
    {
      title: "General Contracts",
      description:
        "We execute mining support services, construction projects, procurement, and maintenance contracts with professionalism and reliability.",
    },
  ],
  sustainability: {
    intro:
      "Gbadafu International Limited integrates environmental stewardship and community development into every project. We prioritize:",
    items: [
      "Land rehabilitation and water management.",
      "Safer mining practices that reduce environmental risks.",
      "Engaging host communities to ensure inclusive growth.",
    ],
  },
  contact: {
    address: "26, ID Gyang Street, Rayfield, Jos, Plateau State, Nigeria",
    emails: ["info@gbadafu.com", "btj4real@gmail.com"],
    phone: "+234 803 223 4345",
  },
};

export const FINANCIAL_REPORTS = {
  intro:
    "At Gbadafu International Limited, we are committed to transparency, accountability, and good corporate governance. As part of this commitment, we make our financial statements and reports available to stakeholders, partners, and the public.",
  emptyState: "No financial reports available at this time.",
  note:
    "Our team is working towards preparing and publishing periodic reports that reflect our performance, growth, and compliance with industry standards. These publications will provide insights into our operations, revenues, expenditures, and sustainability initiatives.",
  followUp: "Please check this page regularly for updates. Once available, reports will be accessible for download.",
  contactPrompt: "For inquiries regarding financial reporting, kindly contact:",
};

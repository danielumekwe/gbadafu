export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  date: string;
  /**
   * The source WordPress posts contained only unedited Elementor demo
   * ("Financial Services" template) placeholder text — not real Gbadafu
   * content, unrelated to mining, identical filler across all 6 posts.
   * Left blank rather than invented; replace with real articles.
   */
  excerpt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 251,
    slug: "the-pros-and-cons-of-different-investment-vehicles",
    title: "The Pros and Cons of Different Investment Vehicles",
    date: "2024-06-16",
    excerpt: "",
  },
  {
    id: 250,
    slug: "how-to-protect-your-wealth-during-market-volatility",
    title: "How to Protect Your Wealth During Market Volatility",
    date: "2024-06-16",
    excerpt: "",
  },
  {
    id: 249,
    slug: "the-role-of-financial-advisors-what-you-need-to-know",
    title: "The Role of Financial Advisors: What You Need to Know",
    date: "2024-06-16",
    excerpt: "",
  },
  {
    id: 248,
    slug: "understanding-credit-scores-and-how-to-improve-yours",
    title: "Understanding Credit Scores and How to Improve Yours",
    date: "2024-06-16",
    excerpt: "",
  },
  {
    id: 247,
    slug: "maximizing-your-retirement-savings-strategies-and-insights",
    title: "Maximizing Your Retirement Savings: Strategies and Insights",
    date: "2024-06-16",
    excerpt: "",
  },
  {
    id: 239,
    slug: "navigating-your-financial-future-tips-for-smart-investing",
    title: "Navigating Your Financial Future: Tips for Smart Investing",
    date: "2024-06-16",
    excerpt: "",
  },
];

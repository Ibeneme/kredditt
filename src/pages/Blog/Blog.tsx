import { useState } from "react";
import { motion } from "framer-motion";
import b1 from '../../assets/blog/b1.png'
import b2 from '../../assets/blog/b2.png'
import b3 from '../../assets/blog/b3.png'
import b4 from '../../assets/blog/b4.png'
import b5 from '../../assets/blog/b5.png'
// --- Placeholder Article Data ---
const ARTICLES = [
  {
    id: "calm-profitable",
    title: "Tips for staying Calm and Profitable",
    date: "November 10, 2023",
    category: "Investment",
    image: b5,
    snippet:
      "Discover proven techniques for emotional resilience in volatile markets, ensuring your decisions remain rational and focused on long-term gains.",
  },
  {
    id: "mastering-art",
    title: "Mastering the Art of Value Investing",
    date: "November 10, 2023",
    category: "Investment",
    image: b2,
    snippet:
      "Learn how to identify undervalued assets and build a portfolio based on intrinsic worth rather than speculative trends.",
  },
  {
    id: "boost-returns",
    title: "How to Spread Risk and Boost Returns",
    date: "November 10, 2023",
    category: "Investment",
    image: b3,
    snippet:
      "A comprehensive guide to diversification strategies that minimize potential losses while maximizing your exposure to high-growth opportunities.",
  },
  {
    id: "long-term-wealth",
    title: "Strategies for Long-Term Wealth Building",
    date: "November 10, 2023",
    category: "Investment",
    image: b4,
    snippet:
      "Essential principles for sustainable financial growth, including compound interest, tax efficiency, and retirement planning.",
  },
];

// --- Static Content from the Image ---
const RECENT_POSTS = [
  "Tips for Staying Calm and Profitable",
  "Mastering the Art of Value Investing",
  "How to Spread Risk and Boost Returns",
  "Tips for Staying Calm and Profitable",
  "Investment Strategies for Long-Term Wealth Building",
];

const OUR_SERVICES = [
  "Investment Advisory",
  "Portfolio Management",
  "Mutual Funds and ETFs",
  "Financial Planning",
];

// --- Icons ---
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.52 3.522L4.75 8.291a1.5 1.5 0 00-.44 1.059v4.18c0 .827.673 1.5 1.5 1.5h4.18a1.5 1.5 0 001.06-.44l4.768-4.768a1.5 1.5 0 00.44-1.06V7.75a1.5 1.5 0 00-1.5-1.5h-4.18a1.5 1.5 0 00-1.06.44z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 14.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
);
const CircleCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-indigo-500 mr-2"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.532a.75.75 0 001.085.962 4.5 4.5 0 003.328-4.63z"
      clipRule="evenodd"
    />
  </svg>
);
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

// --- Blog Article Card Component ---
const BlogCard = ({ article, onClick }: any) => (
  <motion.div
    className="flex mb-8 bg-white rounded-xl   transition duration-300 cursor-pointer"
    whileHover={{ translateY: -3 }}
    onClick={() => onClick(article)}
  >
    <img
      src={article.image}
      alt={article.title}
      className="w-2/5 h-auto object-cover rounded-l-xl hidden sm:block"
    />
    <div className="p-5 flex flex-col justify-center w-full sm:w-3/5">
      <div className="flex text-xs font-medium text-gray-500 mb-2 space-x-3">
        <div className="flex items-center">
          <ClockIcon />
          <span className="ml-1">{article.date}</span>
        </div>
        <div className="flex items-center">
          <TagIcon />
          <span className="ml-1">{article.category}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 leading-snug text-indigo-600 transition">
        {article.title}
      </h3>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {article.snippet}
      </p>
    </div>
  </motion.div>
);

// --- Sidebar Components ---
const RecentPosts = () => (
  <div className="bg-white p-6 rounded-xl mb-8">
    <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
      RECENT POST
    </h4>
    <ul className="space-y-3">
      {RECENT_POSTS.map((post, index) => (
        <li
          key={index}
          className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition"
        >
          {post}
        </li>
      ))}
    </ul>
  </div>
);

const OurServices = () => (
  <div className="bg-white p-6 rounded-xl ">
    <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
      OUR SERVICES
    </h4>
    <ul className="space-y-3">
      {OUR_SERVICES.map((service, index) => (
        <li key={index} className="flex items-center text-sm text-gray-700">
          <CircleCheckIcon />
          <span>{service}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Article Detail Component (Loads content from the Markdown file mock) ---
const ArticleDetail = ({ article, onBack }: any) => {
  // In a real BlogPage, you'd fetch the content based on article.id
  // Here we load the mock content from the included markdown file for demonstration
  const content = `
## ${article.title}

### 1. The Psychology of Profit: Overcoming Fear and Greed

The biggest enemy in the market is often yourself. **Fear** causes investors to sell low during downturns, and **greed** pushes them to buy high during bubbles. To stay calm, define your strategy *before* market turbulence hits.

* **Establish Clear Rules:** Determine your exit and entry points in advance.
* **Automate Investments:** Use dollar-cost averaging to remove emotional timing.
* **Practice Mindfulness:** Separate your daily emotions from your long-term financial goals.

### 2. The Power of Diversification

Diversification isn't just about holding different stocks; it's about holding assets that perform independently of each other.

| Asset Class | Role in Portfolio | Correlation to Equities |
| :--- | :--- | :--- |
| **Stocks** | Growth | High |
| **Bonds** | Income/Stability | Low/Negative |
| **Real Estate** | Inflation Hedge | Moderate |
| **Commodities** | Volatility Dampener | Varies |

By balancing these assets, you create a portfolio that is profitable across various economic cycles.

### 3. Long-Term Vision is Key

A truly profitable investor focuses on the next ten years, not the next ten minutes. Small, consistent contributions to a well-diversified portfolio are far more effective than trying to chase quick wins. **Patience is your greatest asset.**
`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full lg:col-span-2 bg-white p-8 rounded-xl "
    >
      <button
        onClick={onBack}
        className="flex items-center text-indigo-600 font-semibold mb-6 hover:text-indigo-800 transition"
      >
        <ArrowLeftIcon />
        Back to all Articles
      </button>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        {article.title}
      </h1>
      <div className="flex text-sm font-medium text-gray-500 mb-8 space-x-4 border-b pb-4">
        <div className="flex items-center">
          <ClockIcon /> <span className="ml-1">{article.date}</span>
        </div>
        <div className="flex items-center">
          <TagIcon /> <span className="ml-1">{article.category}</span>
        </div>
      </div>

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-96 object-cover rounded-xl mb-8 "
      />

      <div
        className="prose max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  );
};

// --- Main BlogPage Component ---
const BlogPage = () => {
  // State to hold the currently selected article object for the detail view
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased pt-16 pb-12">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tighter">
              Blog
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-lg">
              Take control of your financial future and achieve the life you’ve
              always dreamed of.
            </p>
          </div>
          <img
            src={b1}
            alt="Man calculating investments"
            className="w-full h-72 object-cover rounded-2xl  hidden lg:block"
          />
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
        {/* Left/Main Column */}
        {selectedArticle ? (
          <ArticleDetail
            article={selectedArticle}
            onBack={() => setSelectedArticle(null)}
          />
        ) : (
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {ARTICLES.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                onClick={setSelectedArticle}
              />
            ))}
          </motion.div>
        )}

        {/* Right/Sidebar Column */}
        <div className="lg:col-span-1 hidden lg:block">
          <RecentPosts />
          <OurServices />
          {/* CTA from the image */}
          <div className="mt-8">
            <div
              className="w-full h-64 bg-cover bg-center rounded-xl overflow-hidden relative "
              style={{
                backgroundImage: `url(${b1})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                <h4 className="text-xl font-extrabold text-white mb-2">
                  Unlock Exceptional Financial Gains
                </h4>
                <p className="text-sm text-gray-200 mb-4">
                  Elevate your economic potential with our insights.
                </p>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition duration-300">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

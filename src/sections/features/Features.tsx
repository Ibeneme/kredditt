import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import f1 from "../../assets/images/features/f1.png";
import f2 from "../../assets/images/features/f2.png";
import f4 from "../../assets/images/features/f4.png";
import f3 from "../../assets/images/features/f3.png";
// --- Inline SVG Icons ---

// Icon for the down/up arrow in the FAQ component
const ChevronDownIcon: React.FC<{ className?: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className={props.className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

// --- Framer Motion Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// --- Sub-components ---

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <motion.div
    className="w-full bg-cover bg-center h-80 rounded-2xl shadow-xl overflow-hidden relative group cursor-pointer"
    style={{ backgroundImage: `url(${imageSrc})` }}
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    {/* Overlay for readability and gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-black/30 transition duration-300 group-hover:from-gray-900/90"></div>

    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90 transition duration-300 group-hover:opacity-100">
        {description}
      </p>
    </div>
  </motion.div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="border-b border-gray-200" variants={itemVariants}>
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 hover:text-indigo-600 transition duration-150"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 30,
          stiffness: 300,
        }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600 text-sm">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

// --- 1. Features Section (Invest with Precision) ---

const FeaturesSection: React.FC = () => {
  const featureCards = [
    {
      title: "Spotlight on Global Investments",
      description:
        "Experience firsthand the power of data-driven investment trends and opportunities.",
      imageSrc: f1,
    },
    {
      title: "Master Dynamic Markets",
      description:
        "Adapt and thrive with investment solutions as dynamic as the markets they navigate.",
      imageSrc: f2,
    },
    {
      title: "Elite Opportunities for Astute Investors",
      description:
        "Step into a world where only the most rigorously vetted investments are made available.",
      imageSrc: f3,
    },
  ];

  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Block */}
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full tracking-wider mb-3">
            FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Invest with Precision Today
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Navigate through the global investment landscape with our expert
            guidance, ensuring every decision is calculated and potent.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- 2. FAQs Section ---

const FAQsSection: React.FC = () => {
  const faqData: FAQItemProps[] = [
    {
      question: "What exclusive services do we provide?",
      answer:
        "We provide personalized portfolio management, exclusive access to pre-IPO opportunities, and advanced risk assessment tools tailored for high-net-worth individuals.",
    },
    {
      question: "Which global areas do we influence?",
      answer:
        "Our influence spans key financial hubs across North America, Western Europe, and emerging markets in Southeast Asia and the Middle East, offering truly diversified exposure.",
    },
    {
      question: "What innovative property investments do we offer?",
      answer:
        "We offer fractional ownership in high-value commercial real estate, debt financing for sustainable development projects, and investments in proptech startups.",
    },
    {
      question: "How can you initiate a consultation?",
      answer:
        'You can initiate a consultation by clicking the "Get Started" button on our homepage, or by directly contacting our private wealth management team via email or phone.',
    },
  
  ];

  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Side: Title */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            FAQs
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-md">
            Find answers to the most common questions about our investment
            platform and services.
          </p>
        </motion.div>

        {/* Right Side: Accordion */}
        <div className="w-full">
          <motion.div
            className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200 shadow-lg p-4"
            variants={containerVariants}
          >
            {faqData.map((item, index) => (
              <FAQItem key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// --- 3. Final CTA Section (Unlock Financial Gains) ---

const CTASecuritySection: React.FC = () => {
  return (
    <motion.section
      className="py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full h-96 bg-cover bg-center rounded-3xl overflow-hidden relative shadow-2xl"
          style={{
            backgroundImage: `url(${f4})`, 
          }}
          variants={itemVariants}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl"
              variants={itemVariants}
            >
              Unlock Exceptional Financial Gains
            </motion.h2>
            <motion.p
              className="mt-4 text-xl text-gray-200 max-w-xl"
              variants={itemVariants}
            >
              Elevate your economic potential with our cutting-edge insights and
              steadfast guidance.
            </motion.p>
            <motion.button
              className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              GET STARTED
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- Main App Component ---

const Features: React.FC = () => (
  <div className="min-h-screen bg-white font-sans antialiased">
    <FeaturesSection />
    <FAQsSection />
    <CTASecuritySection />
  </div>
);

export default Features;

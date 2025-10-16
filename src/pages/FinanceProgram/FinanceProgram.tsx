import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// --- Images ---
import financeHero from "../../assets/images/features/f1.png";
import contentImage from "../../assets/images/features/f2.png";
import cardImage1 from "../../assets/images/features/f3.png";
import cardImage2 from "../../assets/images/features/f4.png";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.3 },
  },
};

// --- Icon Components ---
const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path
      fillRule="evenodd"
      d="M11.54 22.351A8.25 8.25 0 0112 22.5c2.215 0 4.33-.58 6.13-1.621a.75.75 0 00.175-.436V4.473a2.25 2.25 0 00-1.789-2.212c-.521-.09-.99-.163-1.458-.216A42.49 42.49 0 0012 2.25c-.297 0-.595.006-.893.016-1.026.12-2.031.341-2.992.653a.75.75 0 00-.518.517v16.155a.75.75 0 00.175.436A8.25 8.25 0 0111.54 22.351z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);

const DollarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 10.5a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3zM10.5 19.5a.75.75 0 001.5 0v-3a.75.75 0 00-1.5 0v3zM16.5 13.5a.75.75 0 00-1.5 0v-3a.75.75 0 001.5 0v3zM18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
);

// --- Service Item ---
interface ServiceItemProps {
  title: string;
  content: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div variants={itemVariants} className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 hover:text-indigo-600 transition"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {title}
        <FaChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180 text-indigo-600" : ""}`}
        />
      </button>
      {isExpanded && <div className="pb-4 text-gray-600 text-sm">{content}</div>}
    </motion.div>
  );
};

// --- Opportunity Card ---
interface OpportunityCardProps {
  title: string;
  imageSrc: string;
  valuation: string;
  investors: number;
  target: string;
  location: string;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  title,
  imageSrc,
  valuation,
  investors,
  target,
  location,
}) => (
  <motion.div
    className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md transition"
    variants={itemVariants}
  >
    <div className="w-full h-48 sm:h-56">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://placehold.co/400x200/d2d6dc/374151?text=${title.split(" ")[0]}`;
        }}
      />
    </div>

    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-extrabold text-gray-900 mb-2 text-xl leading-tight">{title}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-2">
        <MapPinIcon className="w-4 h-4 text-indigo-500" />
        <span>{location}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center border-y py-3 mb-4">
        <div className="border-r pr-2">
          <p className="text-2xl font-black text-indigo-600">${valuation}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Valuation</p>
        </div>
        <div className="pl-2">
          <p className="text-2xl font-black text-gray-900">{investors}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Investors</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="flex items-center space-x-1 text-sm font-semibold text-gray-700">
          <DollarIcon className="w-4 h-4 text-green-600" />
          <span>Target ${target}</span>
        </p>
        <a
          href="#"
          className="inline-flex items-center text-indigo-600 text-sm font-bold hover:text-indigo-800 transition group"
        >
          VIEW DEAL
          <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </motion.div>
);

// --- Main Component ---
const FinanceProgram: React.FC = () => {
  const opportunities = [
    {
      title: "International Art Museum Acquisition Fund",
      imageSrc: cardImage1,
      valuation: "5M",
      investors: 75,
      target: "500,000",
      location: "London, UK",
    },
    {
      title: "Cutting-edge Web Application Investment Program",
      imageSrc: cardImage2,
      valuation: "7.2M",
      investors: 92,
      target: "1M",
      location: "San Francisco, US",
    },
  ];

  const services: ServiceItemProps[] = [
    { title: "Comprehensive Financial Analysis", content: "We assess your goals and create actionable strategies." },
    { title: "Smart Investment Planning", content: "Tailored solutions for long-term financial success." },
    { title: "Wealth Management Support", content: "Dedicated advisors to optimize your portfolio." },
    { title: "Risk & Opportunity Insights", content: "Data-driven evaluations to guide confident decisions." },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight" variants={itemVariants}>
              Finance Program
            </motion.h1>
            <motion.p className="text-lg text-gray-700 max-w-md" variants={itemVariants}>
              Seize the opportunity to control your financial destiny and live the life you’ve always envisioned.
            </motion.p>
          </div>

          <motion.div className="lg:w-1/2 flex justify-center lg:justify-end" variants={imageVariants}>
            <img src={financeHero} alt="Finance hero" className="rounded-3xl shadow-xl w-full h-[300px] max-w-md object-cover" />
          </motion.div>
        </div>
      {/* Core Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-2">
            <motion.h2 className="text-4xl font-extrabold text-gray-900 mb-6" variants={itemVariants}>
              Your Path to Financial Freedom Begins Here
            </motion.h2>
            <motion.p className="text-gray-600 mb-8 max-w-2xl" variants={itemVariants}>
              Embark on a journey to financial independence with a program designed to provide the tools and guidance
              necessary to achieve your goals.
            </motion.p>
            <motion.p className="text-gray-600 mb-12 max-w-2xl" variants={itemVariants}>
              Every step you take with us is a move towards greater financial literacy and empowerment.
            </motion.p>

            {/* Services Section */}
            <motion.div className="flex flex-col md:flex-row gap-8 mb-12" variants={containerVariants}>
              <motion.div className="md:w-1/2" variants={imageVariants}>
                <img src={contentImage} alt="Consultant meeting" className="rounded-xl shadow-xl w-full object-cover" />
              </motion.div>
              <div className="md:w-1/2">
                <motion.h3 className="text-xl font-bold text-gray-900 mb-4" variants={itemVariants}>
                  Service Offerings
                </motion.h3>
                <div className="space-y-1">
                  {services.map((service, i) => (
                    <ServiceItem key={i} {...service} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Investment Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 sticky top-12" variants={itemVariants}>
              <div className="w-full h-40 mb-4 bg-gray-200 rounded-md" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Details</h3>
              <div className="space-y-2 text-gray-700 text-sm mb-6">
                <p className="flex justify-between">
                  <span className="font-semibold">Valuation:</span> <span>$8M</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Target:</span> <span>$500,000</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Location:</span> <span>London, UK</span>
                </p>
              </div>
              <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
                GET STARTED
              </button>
            </motion.div>

            {/* Testimonial */}
            <motion.div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200" variants={itemVariants}>
              <p className="text-gray-700 italic mb-4">
                "Guided by our expert team of financial strategists, we are dedicated to providing clients with exceptional
                results."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-200 rounded-full mr-3 flex items-center justify-center text-indigo-600 font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-gray-900">JOHN DOE</p>
                  <p className="text-sm text-gray-500">Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <motion.section
        className="py-16 md:py-24 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2" variants={itemVariants}>
            Opportunities
          </motion.p>
          <motion.h2 className="text-4xl font-extrabold text-gray-900 mb-12" variants={itemVariants}>
            Invest Wisely Today
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {opportunities.map((op, i) => (
              <OpportunityCard key={i} {...op} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FinanceProgram;
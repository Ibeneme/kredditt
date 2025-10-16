import React from "react";
import { motion, type Variants } from "framer-motion";
// Assuming these paths are correct
import ops1 from "../../assets/images/ops/ops1.png";
import ops2 from "../../assets/images/ops/ops2.png";
import ops3 from "../../assets/images/ops/ops3.png";
import ops4 from "../../assets/images/ops/ops4.png";

// --- Custom Icons (No change needed, they are clean SVG paths) ---

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);

const DollarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 10.5a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3zM10.5 19.5a.75.75 0 001.5 0v-3a.75.75 0 00-1.5 0v3zM16.5 13.5a.75.75 0 00-1.5 0v-3a.75.75 0 001.5 0v3zM18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351A8.25 8.25 0 0112 22.5c2.215 0 4.33-.58 6.13-1.621a.75.75 0 00.175-.436V4.473a2.25 2.25 0 00-1.789-2.212c-.521-.09-.99-.163-1.458-.216A42.49 42.49 0 0012 2.25c-.297 0-.595.006-.893.016-1.026.12-2.031.341-2.992.653a.75.75 0 00-.518.517v16.155a.75.75 0 00.175.436A8.25 8.25 0 0111.54 22.351z"
      clipRule="evenodd"
    />
  </svg>
);

const ChartBarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M3 3.75A.75.75 0 013.75 3h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 3.75zM7.5 7.5a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H8.25A.75.75 0 017.5 7.5zM10.5 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM13.5 16.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const RocketLaunchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16.892 10.373a4 4 0 00-7.784 0 4 4 0 007.784 0zM12 21.75c-1.89 0-3.79-.176-5.61-.532a2.25 2.25 0 01-1.79-2.61L6.75 14.25h10.5l.02.04c.264.53.497 1.072.705 1.628a2.25 2.25 0 01-1.79 2.61c-1.82.356-3.72.532-5.61.532zm-3-11.25a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm10.5-3.375a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-3z" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.25 4.96A1.5 1.5 0 0111.75 3.5h7.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-2.04.49l-1.68-1.07-5.06 5.06a.75.75 0 01-1.06 0l-3.88-3.88a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 0l2.79 2.79 4.34-4.34a.75.75 0 011.06 0l1.07 1.68a.75.75 0 00.49 1.04v7.5a.75.75 0 01-1.5 0v-6.06L9.69 11.05a.75.75 0 010-1.06l3.88-3.88a.75.75 0 011.06 0l1.06 1.06a.75.75 0 001.06 0l1.68-1.68a.75.75 0 01.53-.22z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Animation Variants (Kept simple and effective) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

// --- Opportunity Card (Styled for vertical layout and better stats display) ---
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
    className="flex flex-col bg-white rounded-xl  transition duration-300 border border-gray-200 overflow-hidden"
    variants={itemVariants}
   
  >
    {/* Image container (vertical focus) */}
    <div className="w-full h-48 sm:h-56">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://placehold.co/400x200/d2d6dc/374151?text=${
            title.split(" ")[0]
          }`;
        }}
      />
    </div>

    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-extrabold text-gray-900 mb-2 leading-tight text-xl">
        {title}
      </h3>
      <div className="flex items-center text-sm text-gray-500 space-x-2 mb-4">
        <MapPinIcon className="w-4 h-4 text-indigo-500" />
        <span>{location}</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 text-center border-t border-b py-3 mb-4">
        <div className="border-r pr-2">
          <p className="text-2xl font-black text-indigo-600">${valuation}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Valuation
          </p>
        </div>
        <div className="pl-2">
          <p className="text-2xl font-black text-gray-900">{investors}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Investors
          </p>
        </div>
      </div>

      {/* Target and Action */}
      <div className="flex items-center justify-between pt-2">
        <p className="flex items-center space-x-1 text-sm font-semibold text-gray-700">
          <DollarIcon className="w-4 h-4 text-green-600" />
          <span>Target ${target}</span>
        </p>

        <a
          href="#"
          className="inline-flex items-center text-indigo-600 text-sm font-bold hover:text-indigo-800 transition duration-150 group"
        >
          VIEW DEAL{" "}
          <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition duration-200" />
        </a>
      </div>
    </div>
  </motion.div>
);

// --- Feature Pill (Enhanced with dark BG for contrast) ---
interface FeaturePillProps {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

const FeaturePill: React.FC<FeaturePillProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <motion.div
    className="flex flex-col space-y-4 p-6 lg:p-8 bg-white rounded-xl  border border-gray-100"
    variants={itemVariants}
  >
    <Icon className="w-12 h-12 text-white bg-[#4F47E6] p-3 rounded-xl " />
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </motion.div>
);

// --- Main Component ---
const OpportunitiesSection: React.FC = () => {
  const opportunitiesData = [
    {
      title: "International Art Museum Acquisition Fund",
      imageSrc: ops1,
      valuation: "5M",
      investors: 75,
      target: "500,000",
      location: "London, UK",
    },
    {
      title: "Cutting-edge Web Application Investment Program",
      imageSrc: ops2,
      valuation: "7.2M",
      investors: 92,
      target: "1M",
      location: "San Francisco, US",
    },
    {
      title: "Eco-Friendly School Building Construction",
      imageSrc: ops3,
      valuation: "3M",
      investors: 55,
      target: "250,000",
      location: "Berlin, DE",
    },
    {
      title: "Precision Autoparts Gear Manufacturing Plant",
      imageSrc: ops4,
      valuation: "12M",
      investors: 110,
      target: "2.5M",
      location: "Tokyo, JP",
    },
  ];

  const features = [
    {
      title: "Live Market Insights",
      description:
        "Gain an edge with real-time updates and expert analyses delivered straight to your dashboard.",
      icon: ChartBarIcon,
    },
    {
      title: "Diverse Ventures",
      description:
        "Explore unique and lucrative investment avenues across multiple sectors and geographies.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Smart Strategies",
      description:
        "Harness powerful, personalized financial tools and automated strategies for maximum growth.",
      icon: TrendingUpIcon,
    },
  ];

  return (
    <>
      <motion.section
        className="py-16 md:py-24 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 mb-12"
            variants={itemVariants}
          >
            Explore Recent Opportunities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunitiesData.map((op, i) => (
              <OpportunityCard key={i} {...op} />
            ))}
          </div>
      
        </div>

     
      </motion.section>

   

      <motion.section
        className="py-16 md:py-24 animated-gradient text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline Box */}
          <motion.div
            className="bg-white p-8 md:p-12 rounded-2xlborder border-gray-100 mb-16 text-gray-900"
            variants={itemVariants}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Fortify Your <br /> Financial Horizon
              </h2>
              <div>
                <p className="mb-6 text-gray-700 text-lg">
                  Embark on a transformative journey that elevates your
                  financial potential. We connect you with verified, high-growth
                  opportunities previously reserved for large institutions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#121212] text-lg font-bold transition duration-150"
                >
                  VIEW OUR WHITE PAPER{" "}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FeaturePill key={i} {...f} />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default OpportunitiesSection;

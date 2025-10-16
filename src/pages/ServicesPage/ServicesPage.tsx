import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaCircle, FaAngleRight } from "react-icons/fa"; // Using FaCircle for the bullet points

// --- Placeholder Images (Replace with actual paths) ---
import servicesHero from "../../assets/images/ops/ops1.png"; // Main header image (stacking coins)
import cashImage from "../../assets/images/features/f2.png"; // Image of cash in the middle section

// --- Framer Motion Variants ---
// Parent container variants for staggered animation
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

// Variants for individual items (e.g., text blocks, features)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.3,
    },
  },
};

// --- Data Structures ---
const serviceList = [
  "Investment Advisory",
  "Portfolio Management",
  "Mutual Funds and ETFs",
  "Financial Planning",
  "Wealth Management",
  "Retirement Solutions",
  "Educational Resources",
  "Client Reporting",
  "Customer Support",
];

const featureBlocks = [
  {
    title: "Live Report",
    description:
      "Keep up with real-time portfolio market trends and forecasts.",
    iconClass: "bg-blue-600",
  },
  {
    title: "Complete Guide",
    description: "Access a comprehensive overview of investment strategies.",
    iconClass: "bg-blue-600",
  },
  {
    title: "Various Industries",
    description: "Explore investment opportunities across a wide range.",
    iconClass: "bg-blue-600",
  },
];

// --- Main Component ---
const ServicesPage: React.FC = () => {
  return (
    <div className="font-sans bg-white">
      {/* 1. Hero Section */}
      <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="lg:w-1/2">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
            variants={itemVariants}
          >
            Services
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-md"
            variants={itemVariants}
          >
            Take charge of your financial future and realize the life you've
            always aimed for.
          </motion.p>
        </div>

        {/* Right: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          variants={imageVariants}
        >
          <img
            src={servicesHero}
            alt="Person stacking coins, symbolizing financial growth"
            className="rounded-3xl shadow-xl w-full max-w-lg h-[300px] object-cover"
          />
        </motion.div>
      </div>

      {/* --- */}

      {/* 2. Expert Guidance Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column: Text Content */}
            <motion.div
              className="lg:col-span-2 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-4xl font-extrabold text-gray-900 mb-4"
                variants={itemVariants}
              >
                Expert Guidance for Optimal Investments
              </motion.h2>
              <motion.p
                className="text-gray-600 max-w-2xl"
                variants={itemVariants}
              >
                Our experienced team provides personalized guidance to help you
                navigate the complexities of today's financial markets. We are
                dedicated to crafting strategies that enhance your investment
                portfolio's performance while minimizing risk.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-8 items-start pt-4"
                variants={containerVariants}
              >
                {/* Text Block */}
                <div className="sm:w-2/3 space-y-4">
                  <motion.p className="text-gray-600" variants={itemVariants}>
                    Each plan is tailored to meet your individual financial
                    goals and risk profile. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </motion.p>
                  <motion.p className="text-gray-600" variants={itemVariants}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </motion.p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition duration-150 group"
                    variants={itemVariants}
                  >
                    GET STARTED{" "}
                    <FaAngleRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-200" />
                  </motion.a>
                </div>

                {/* Small Image */}
                <motion.div
                  className="sm:w-1/3 flex-shrink-0"
                  variants={imageVariants}
                >
                  <img
                    src={cashImage}
                    alt="A wad of cash notes"
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Services List */}
            <motion.div
              className="lg:col-span-1 bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <ul className="space-y-4">
                {serviceList.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700 pb-1 border-b border-gray-100 last:border-b-0"
                  >
                    <FaCircle className="w-2 h-2 text-indigo-600 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 3. Secure Your Financial Destiny Section (Feature Block) */}
      <motion.section
        className="py-16 md:py-24 bg-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left: Heading and CTA */}
            <motion.div
              className="lg:col-span-1 space-y-4"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 leading-snug">
                Secure Your Financial Destiny
              </h2>
              <p className="text-gray-700 text-sm">
                Our commitment is to provide you with the knowledge and tools
                necessary to make informed financial decisions.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 text-sm transition duration-150 group"
              >
                LEARN MORE{" "}
                <FaAngleRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition duration-200" />
              </a>
            </motion.div>

            {/* Right: Three Feature Blocks */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureBlocks.map((feature, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  variants={itemVariants}
                >
                  <div
                    className={`w-3 h-3 ${feature.iconClass} rounded-full mb-3`}
                  ></div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;

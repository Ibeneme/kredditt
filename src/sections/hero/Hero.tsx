import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import manOnPhone from "../../assets/images/hero/man-on-phone.png";

const StarIcon = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

const PlayIcon = (props: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.236-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="bg-gray-50 pt-16 md:pt-20 pb-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid-reverse md:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tighter"
              variants={itemVariants}
            >
              Investing <br className="hidden sm:inline" />
              Simplified
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-gray-600 max-w-lg"
              variants={itemVariants}
            >
              Take command of your financial future and transcend to the life
              you've always envisioned. Unleash potential and master the art of
              investment with unparalleled ease and precision.
            </motion.p>

            <motion.div
              className="mt-10 p-5 bg-white shadow-xl rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3">
                <StarIcon className="w-5 h-5 text-indigo-500" />
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800 text-sm">
                    Discover a World of Investment
                  </p>
                  <p className="text-indigo-600 text-sm">
                    Opportunities: Start Growing Your Wealth Now
                  </p>
                </div>
              </div>

              <motion.button
                className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayIcon className="w-5 h-5" />
                <span>GET STARTED</span>
              </motion.button>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-12 md:mt-0">
            <motion.div
              className="w-full max-w-md bg-gray-200 rounded-2xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center relative"
              variants={itemVariants}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img
                src={manOnPhone}
                alt="Financial analysis dashboard"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/800x800/e0e7ff/3730a3?text=FinTech+Visual";
                }}
              />
              <motion.div
                className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-2xl w-11/12 max-w-[280px]"
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-500">Income</span>
                  <span className="text-xl font-bold text-gray-900">
                    1,500.98
                  </span>
                </div>
                <p className="text-xs text-green-500 mb-4">
                  Higher Than Last Week
                </p>
                <div className="h-24 flex items-end justify-between space-x-1">
                  {[0.3, 0.6, 0.4, 0.7, 0.5, 0.9, 1.0].map((height, index) => (
                    <div
                      key={index}
                      className="w-3 bg-indigo-400 rounded-t-full"
                      style={{ height: `${height * 100}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <span key={day}>{day}</span>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

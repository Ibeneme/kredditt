import React from "react";
import { motion, type Variants } from "framer-motion";

// --- Image Import (Replace with your actual path) ---
import opportunitiesHero from "../assets/images/hero/man-on-phone.png"; // Image of the man at the desk



// Variants for individual items (e.g., text blocks)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // Start below and invisible
  visible: {
    opacity: 1,
    y: 0, // End at original position and visible
    transition: {
      type: "spring", // Spring animation for a natural feel
      stiffness: 100, // How stiff the spring is
      damping: 20, // How much friction there is
    },
  },
};

// Variants for the image
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.3, // Slightly delay image animation
    },
  },
};

// --- Main Component ---
const OpportunitiesHeader: React.FC = () => {
  return (
    <div
      className="bg-white py-16 md:py-24" // Increased padding for more breathing room
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"> {/* Adjusted gap */}
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight" // Increased font size for title
              variants={itemVariants}
            >
              Opportunities
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg" // Larger, more readable text
              variants={itemVariants}
            >
              Take command of your financial future and transcend to the life
              you've always envisioned. Unleash potential and master the art of
              investment with unparalleled ease and precision.
            </motion.p>
          </div>

          {/* Right: Hero Image */}
          <motion.div className="lg:w-1/2" variants={imageVariants}>
            <img
              src={opportunitiesHero}
              alt="Professional man smiling at his desk, holding a book"
              className="rounded-3xl shadow-xl w-full h-auto max-h-[500px] object-cover" // Ensure image covers its area well
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesHeader;
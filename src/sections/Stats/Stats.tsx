import React from "react";
import { motion, type Variants } from "framer-motion";
import inv from '../../assets/images/ops/inv.png'
// --- Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

// --- Stat Pill Component ---
interface StatPillProps {
  value: string;
  label: string;
}

const StatPill: React.FC<StatPillProps> = ({ value, label }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center p-4 transition-transform"
  >
    <span className="text-4xl md:text-5xl font-extrabold text-white">
      {value}
    </span>
    <span className="text-sm text-white mt-1 tracking-wide">{label}</span>
  </motion.div>
);

// --- Main Section ---
const StatSection: React.FC = () => {
  const statsData = [
    { value: "5k+", label: "Investors" },
    { value: "96+", label: "Assets Managed" },
    { value: "879", label: "Projects Funded" },
  ];

  return (
    <motion.section
      className="relative py-20 md:py-28 overflow-hidden text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient -z-10"></div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div variants={itemVariants} className="mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white/90 bg-white/10 rounded-full tracking-wider mb-4 backdrop-blur-sm border border-white/20">
            OUR IMPACT
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            Smart Investment Solutions
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Empowering global investors with precision, insight, and
            technology-driven strategies that redefine growth.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={itemVariants}
          className="rounded-3xl overflow-hidden shadow-2xl mb-14"
        >
          <img
            src={inv}
            alt="Investment professionals discussing data"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Stat Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 gap-8 pt-4"
        >
          {statsData.map((stat, i) => (
            <StatPill key={i} {...stat} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatSection;
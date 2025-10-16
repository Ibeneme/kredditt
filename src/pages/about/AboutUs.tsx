import React from "react";
import { motion, type Variants } from "framer-motion";
import aboutUsHero from "../../assets/images/hero/man-on-phone.png";
import investmentBuilding from "../../assets/images/features/f1.png";
import investmentCoins from "../../assets/images/features/f2.png";
import Features from "../../sections/features/Features";

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

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* --- Top Section: About Us Intro --- */}
        <div
          className="flex flex-col lg:flex-row gap-12 items-start"
      
        >
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              At <span className="font-semibold text-indigo-600">Kredditt</span>,
              we’re redefining how people access and manage financial
              opportunities. Our mission is to empower individuals and
              businesses with smart, transparent, and accessible credit and
              investment solutions tailored for Africa’s growing digital
              economy.
            </motion.p>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:w-1/2">
            <img
              src={aboutUsHero}
              alt="Kredditt financial advisor assisting a client on a call"
              className="rounded-3xl shadow-xl w-full h-auto max-h-[300px] object-cover"
            />
          </div>
        </div>

        {/* --- Bottom Section: Investment Opportunities --- */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Left: Building Image */}
          <motion.div className="lg:w-1/3 flex-shrink-0" variants={imageVariants}>
            <img
              src={investmentBuilding}
              alt="Kredditt office building in Lagos"
              className="rounded-3xl shadow-xl w-full h-[500px] object-cover object-center"
            />
          </motion.div>

          {/* Right: Text Content and Small Image */}
          <div className="lg:w-2/3">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              Discover a World of <br /> Financial Opportunities
            </motion.h2>
            <motion.p
              className="text-base text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Kredditt provides a seamless platform where technology meets
              finance. From personal credit access to investment programs, we
              make funding and wealth growth easier, faster, and safer for
              everyone. Whether you’re an entrepreneur, a professional, or an
              investor, we help you build financial confidence and achieve
              measurable growth.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <motion.div className="sm:w-3/4" variants={itemVariants}>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Our approach combines responsible lending, innovative tech, and
                  financial literacy — ensuring users not only access credit but
                  also use it wisely. Every solution we build is rooted in trust,
                  transparency, and long-term value creation.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  As we expand across Africa, Kredditt continues to partner with
                  forward-thinking investors and institutions to close the
                  financial inclusion gap and open new doors for millions of
                  people to thrive financially.
                </p>
              </motion.div>
              <motion.div
                className="sm:w-1/4 flex-shrink-0 mt-4 sm:mt-0"
                variants={imageVariants}
              >
                <img
                  src={investmentCoins}
                  alt="Coins representing financial growth and stability"
                  className="rounded-xl shadow-md w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reuse your features section */}
      <Features />
    </section>
  );
};

export default AboutUs;
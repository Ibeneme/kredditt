import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation, Link, useNavigate } from "react-router-dom";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "BLOG", href: "/blog" },
  { name: "OPPORTUNITIES", href: "/opportunities" },
  { name: "SERVICES", href: "/services" },
  { name: "FINANCE PROGRAM", href: "/program" },
  { name: "ABOUT", href: "/about" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 tracking-tight"
          >
            Kredditt<span className="text-gray-900 font-normal">.io</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 ml-10 items-baseline">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));

              return (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wider transition duration-150 ${
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Animated underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Sign In Button */}
          <motion.button
            className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 items-center space-x-2 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact-us")}
          >
            <span>Contact Us</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/" && location.pathname.startsWith(item.href));

            return (
              <motion.div key={item.name} variants={itemVariants}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${
                    isActive
                      ? "bg-indigo-600 text-white font-semibold"
                      : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}

          {/* Mobile Sign In */}
          <motion.div variants={itemVariants}>
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-indigo-600 text-white px-3 py-2 mt-4 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-150"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaMapPin,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import contactAgent from "../../assets/images/ops/ops1.png";


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

// --- Contact Data ---
const contactItems = [
  {
    icon: FaMapPin,
    text: "3rd Floor, The Waterside Building, Ozumba Mbadiwe Avenue, Victoria Island, Lagos, Nigeria",
    color: "text-red-500",
  },
  {
    icon: FaEnvelope,
    text: "support@kredditt.com",
    color: "text-blue-500",
  },
  {
    icon: FaPhone,
    text: "+234 913 456 7890",
    color: "text-green-500",
  },
  {
    icon: FaGlobe,
    text: "www.kredditt.com",
    color: "text-purple-500",
  },
  {
    icon: FaLinkedin,
    text: "linkedin.com/company/kredditt",
    color: "text-blue-700",
  },
  {
    icon: FaFacebook,
    text: "facebook.com/kredditt",
    color: "text-blue-600",
  },
];

const ContactUsPage: React.FC = () => {
  return (
    <div className="font-sans bg-white">
      {/* 1. Header Section with Live Map */}
      <motion.header
        className="pt-16 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left: Text Content */}
          <div className="lg:w-1/3">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 max-w-sm"
              variants={itemVariants}
            >
              We're here to help you take control of your financial goals.
              Reach out to the Kredditt team for inquiries, partnerships, or
              support.
            </motion.p>
          </div>

          {/* Right: Google Map Embed */}
          <motion.div className="lg:w-2/3" variants={imageVariants}>
            <div className="w-full h-80 rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <iframe
                title="Kredditt Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1989428164843!2d3.421958474823882!3d6.429958524205931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50f72c9d0b3%3A0xaaf76f30ed4ac4f!2sOzumba%20Mbadiwe%20Ave%2C%20Victoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1695123456789!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* 2. Get in Touch Section */}
      <motion.section
        className="py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Agent Image */}
            <motion.div className="lg:w-full" variants={imageVariants}>
              <img
                src={contactAgent}
                alt="Kredditt support specialist assisting a client"
                className="w-full h-[500px] rounded-xl shadow-2xl object-cover object-top"
              />
            </motion.div>

            {/* Right Column: Text and Contact List */}
            <div className="lg:w-full space-y-8">
              <motion.h2
                className="text-4xl font-extrabold text-gray-900 mb-4"
                variants={itemVariants}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-gray-600 max-w-lg"
                variants={itemVariants}
              >
                Have questions about our financial programs or investment
                options? Contact us today — our support team typically responds
                within 24 hours on weekdays.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-8 items-start">
                {/* Contact List */}
                <motion.ul
                  className="sm:w-2/3 space-y-4"
                  variants={containerVariants}
                >
                  {contactItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3 text-gray-700"
                      variants={itemVariants}
                    >
                      <item.icon
                        className={`w-5 h-5 ${item.color} flex-shrink-0`}
                      />
                      <span className="text-lg">{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Small Building Image */}
                <motion.div
                  className="sm:w-1/3 flex-shrink-0"
                  variants={imageVariants}
                >
            
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUsPage;
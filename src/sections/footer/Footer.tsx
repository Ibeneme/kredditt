import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const links = {
    MENU: ["Service", "Features", "Partners", "Testimonials"],
    LINKS: ["About us", "Contact", "Help Center", "Testimonials"],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Column 1: Logo and Social */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col items-start space-y-4">
            {/* Logo */}
            <div className="w-auto h-auto bg-indigo-600 rounded-full flex items-center justify-center p-2 px-4">
              <span className="text-white font-extrabold text-xl">
                Kredditt
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-gray-500 pt-4">Powered by SocialLib</p>
          </div>

          {/* Column 2: Office Info */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 tracking-wider mb-4">
              OFFICE
            </h4>
            <address className="text-gray-600 text-sm not-italic space-y-3">
              <p>
                186, G Block, Road-7, <br />
                South Point, Jersey, Network.
              </p>
              <a
                href="mailto:inqery@investa.io"
                className="flex items-center space-x-2 hover:text-indigo-600 transition"
              >
                <FaEnvelope className="w-4 h-4 text-indigo-500" />
                <span>inqery@investa.io</span>
              </a>
              <a
                href="tel:+14966696369"
                className="flex items-center space-x-2 hover:text-indigo-600 transition"
              >
                <FaPhone className="w-4 h-4 text-indigo-500" />
                <span>+1 496 6696369</span>
              </a>
            </address>
          </div>

          {/* Columns 3 & 4: Dynamic Link Sections */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-gray-900 tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-indigo-600 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
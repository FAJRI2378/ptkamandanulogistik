import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo512.png"
                alt="PT Kamandanu Jaya Samudera Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="ml-3">
                <h3 className="font-bold text-xl">
                  PT KAMANDANU JAYA SAMUDERA
                </h3>
                <p className="text-blue-300 text-sm">
                  Crew Manning & Ship Management Agency
                </p>
              </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              PT Kamandanu Jaya Samudera is a professional crew manning and ship
              management agency based in Indonesia. We provide qualified seafarers,
              vessel operations support, seafarer documentation, and technical
              management services for domestic and international shipping companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="tel:+6281311922417"
                  className="hover:text-white transition-colors"
                >
                  +62 813-1192-2417
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kamandanujayasamudera.com"
                  className="hover:text-white transition-colors"
                >
                  info@kamandanujayasamudera.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2026 PT Kamandanu Jaya Samudera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

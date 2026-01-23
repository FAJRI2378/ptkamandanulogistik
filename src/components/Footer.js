import React from "react";
import { Link } from "react-router-dom";
import { Ship } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Ship className="h-10 w-10 text-blue-400 hover:text-blue-300 transition-colors" />
              <div className="ml-3">
                <h3 className="font-bold text-xl">PT KAMANDANU JAYA SAMUDERA</h3>
                <p className="text-blue-300 text-sm">Ship Management Company</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Professional ship management and maritime services company based in Indonesia.
              We provide comprehensive shipping solutions including vessel operations, crew
              manning, seafarer documentation, and technical management for commercial vessels
              across Southeast Asia and international waters.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
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
                <Link to="/facilities" className="hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="tel:+6281311922417" className="hover:text-white transition-colors">
                  +62 813-1192-2417
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kamandanujayasamudera.com"
                  className="hover:text-white transition-colors"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            &copy; 2026 PT Kamandanu Jaya Samudera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
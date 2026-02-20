import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  ChevronRight,
  Clock,
  Globe,
  Award,
  Shield,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Inject structured data
  React.useEffect(() => {
    // Schema.org LocalBusiness structured data for SEO
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://kamandanujayasamudera.com/#organization",
      name: "PT Kamandanu Jaya Samudera",
      alternateName: "Kamandanu Jaya Samudera",
      description:
        "Professional crew manning agency and ship management services in Indonesia, providing qualified seafarers for international vessels",
      url: "https://kamandanujayasamudera.com",
      telephone: "+6281311922417",
      email: "info@kamandanujayasamudera.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "	Jl. Warakas 3 No.23 RT 010 RW 004 2nd floor North Jakarta, Indonesia",
        addressLocality: "Jakarta",
        addressCountry: "ID",
        postalCode: "12345",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-6.200000",
        longitude: "106.816666",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
      sameAs: [
        "https://www.facebook.com/kamandanujayasamudera",
        "https://twitter.com/kamandanujaya",
        "https://www.linkedin.com/company/pt-kamandanu-jaya-samudera",
        "https://www.instagram.com/kamandanujayasamudera_",
      ],
      priceRange: "$$",
      paymentAccepted: "Cash, Bank Transfer",
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "-6.200000",
          longitude: "106.816666",
        },
        geoRadius: "10000000",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(localBusinessSchema);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="bg-[#0A2540] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* ================= COMPANY INFO SECTION ================= */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo512.png"
                alt="PT Kamandanu Jaya Samudera - Indonesian Crew Manning Agency Logo"
                className="h-12 w-12 object-contain"
                width="48"
                height="48"
              />
              <div className="ml-3">
                <h2 className="font-bold text-xl">
                  PT KAMANDANU JAYA SAMUDERA
                </h2>
                <p className="text-blue-300 text-sm">
                  Professional Crew Manning & Ship Management Agency
                </p>
              </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              <strong>Leading Indonesian crew manning agency</strong>{" "}
              specializing in
              <strong> seafarer recruitment</strong>, vessel crew supply,
              maritime personnel management, and comprehensive ship management
              services for domestic and international shipping companies.
              Certified and compliant with{" "}
              <abbr title="Maritime Labour Convention">MLC</abbr>  and
              <abbr title="Standards of Training, Certification and Watchkeeping">
                STCW
              </abbr>{" "}
              regulations.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center text-xs">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span>ISO 9001:2015 </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center text-xs">
                <Award className="w-4 h-4 text-blue-400 mr-2" />
                <span>Mlc Compliant Regulation</span>
              </div>
            </div>

            {/* Social Media Links - Semantic Navigation */}
            <nav aria-label="Social media links">
              <h3 className="text-sm font-semibold mb-3 text-blue-300">
                Follow Us:
              </h3>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/kamandanujayasamudera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-2.5 rounded-full transition-all transform hover:scale-110"
                  aria-label="Follow PT Kamandanu Jaya Samudera on Facebook"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pt-kamandanu-jaya-samudera-8951a5275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 p-2.5 rounded-full transition-all transform hover:scale-110"
                  aria-label="Connect with PT Kamandanu Jaya Samudera on LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/kamandanujayasamudera_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 p-2.5 rounded-full transition-all transform hover:scale-110"
                  aria-label="Follow PT Kamandanu Jaya Samudera on Instagram"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
               
              </div>
            </nav>
          </div>

          {/* ================= QUICK LINKS SECTION ================= */}
          <nav className="lg:pl-4" aria-labelledby="quick-links-heading">
            <h3
              id="quick-links-heading"
              className="font-semibold mb-4 text-lg flex items-center"
            >
              <ChevronRight
                className="mr-2 text-blue-400"
                size={20}
                aria-hidden="true"
              />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-blue-200 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="Go to homepage"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="Learn about PT Kamandanu Jaya Samudera"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  About Us
                </Link>
              </li>
                 <li>
                <Link
                  to="/licenses"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="Meet our team"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  Licenses
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="View our crew manning services"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="Meet our team"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/client"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="View seafarer career opportunities"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  Partners & Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="Contact us"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  Contact
                </Link>
              </li>
                 <li>
                <Link
                  to="/gallery"
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center group"
                  aria-label="Meet our team"
                >
                  <ChevronRight
                    size={14}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>

          {/* ================= CONTACT INFO SECTION ================= */}
          <address className="not-italic" aria-labelledby="contact-heading">
            <h3
              id="contact-heading"
              className="font-semibold mb-4 text-lg flex items-center"
            >
              <ChevronRight
                className="mr-2 text-blue-400"
                size={20}
                aria-hidden="true"
              />
              Contact Information
            </h3>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-0.5 text-blue-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <span
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">
                    {" "}
                    Jl. Warakas 3 No.23 RT 010 RW 004 2nd floor North Jakarta,
                    Indonesia
                  </span>
                  ,<span itemProp="addressLocality"> Jakarta</span>,
                  <span itemProp="addressCountry"> Indonesia</span>
                  <span itemProp="postalCode">12345</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-2 text-blue-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="tel:+6281311922417"
                  className="hover:text-white transition-colors hover:underline"
                  itemProp="telephone"
                  aria-label="Call us at 	( 021 ) 43938505"
                >
                  ( 021 ) 43938505
                  <p> Mobile Phone : +62 8521 9060 597</p>
                  <p>Whatsapp : +62 813 1192 2417</p>
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-2 text-blue-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@kamandanujayasamudera.com"
                  className="hover:text-white transition-colors hover:underline"
                  itemProp="email"
                  aria-label="Email us at info@kamandanujayasamudera.com"
                >
                  info@kamandanujayasamudera.com
                </a>
              </li>
              <li className="flex items-center">
                <Globe
                  size={18}
                  className="mr-2 text-blue-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="https://kamandanujayasamudera.com"
                  className="hover:text-white transition-colors hover:underline"
                  itemProp="url"
                  aria-label="Visit our website"
                >
                  www.kamandanujayasamudera.com
                  <p>www.kamandanujayasamudera.com</p>
                </a>
              </li>
              <li className="flex items-center">
                <Clock
                  size={18}
                  className="mr-2 text-blue-400 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  <strong>Office Hours:</strong> Monday – Saturday 9:00-17:00
                  Sunday we closed
                </span>
              </li>
            </ul>
          </address>
        </div>

        {/* ================= COPYRIGHT & LEGAL ================= */}
        <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm text-center md:text-left">
            © {currentYear} <strong>PT Kamandanu Jaya Samudera</strong>. All
            rights reserved. |
            <span className="ml-1">
              Professional Crew Manning Agency Indonesia
            </span>
          </p>
        </div>

  
      </div>
    </footer>
  );
};

export default Footer;

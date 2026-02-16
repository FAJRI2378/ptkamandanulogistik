import React, { useState, useEffect } from "react";
import {
  Ship,
  Globe,
  CheckCircle,
  MapPin,
  GraduationCap,
  Image as ImageIcon,
  X,
  ExternalLink, 
} from "lucide-react";

// Import Scroller Logos (l1 - l9)
import l1 from "../img/lclient1.jpg";
import l2 from "../img/lclient2.jpg";
import l3 from "../img/lclient3.png";
import l4 from "../img/lclient4.png";
import l5 from "../img/lclient5.png";
import l6 from "../img/lclient6.jpg";
import l7 from "../img/lclient7.jpg";
import l8 from "../img/lclient8.png";
import l9 from "../img/lclient9.png";

// Import MoU Partner Logos
import stipJakarta from "../img/logo_stip.png";
import poltekpelBanten from "../img/logo_poli.png";

// Import Documentation Images
import stipDoc1 from "../img/stip_ttd.jpg";
import bantenDoc1 from "../img/ttd_poli.jpg";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab] = useState("mou");
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    // SEO Meta Tags
    document.title =
      "MoU Partners & Clients | PT Kamandanu Jaya Samudera - STIP Jakarta & Poltekpel Banten Partnership";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "PT Kamandanu Jaya Samudera proudly partners with STIP Jakarta and Poltekpel Banten for maritime education excellence. Trusted by leading global shipping companies for professional seafarer crew manning solutions."
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "STIP Jakarta partnership, Poltekpel Banten MoU, maritime education collaboration, crew manning Indonesia, STCW certified seafarers, shipping industry partners, Indonesian maritime training, seafarer recruitment"
      );
    }

    // Open Graph tags for social sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'MoU Partners & Clients | PT Kamandanu Jaya Samudera');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Strategic partnerships with STIP Jakarta and Poltekpel Banten for maritime education excellence');

    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Array Logo yang akan di-loop (L1 - L9)
  const scrollerLogos = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

  // MoU Partners Data with Educational Institutions
  const mouPartners = [
    {
      name: "STIP Jakarta",
      fullName: "Sekolah Tinggi Ilmu Pelayaran Jakarta",
      type: "Maritime Education",
      description:
        "Strategic collaboration for STCW-compliant maritime training, advanced certification programs, and professional seafarer competency development.",
      region: "Jakarta, Indonesia",
      logo: stipJakarta,
      website: "https://www.stipjakarta.ac.id",
      documentation: [
        {
          image: stipDoc1,
          title: "MoU Signing Ceremony",
          description: "Official partnership agreement with STIP Jakarta leadership for maritime education excellence",
        },
      ],
      highlights: [
        "Deck & Engine Cadet Education Programs",
        "Practical Sea Training & Onboard Preparation",
        "Industry-Aligned Maritime Certification Support",
        "Competency Development for Commercial Shipping",
        "Graduate Employment & Manning Support",
      ],
    },
    {
      name: "Poltekpel Banten",
      fullName: "Politeknik Pelayaran Banten",
      type: "Maritime Education",
      description:
        "Comprehensive partnership for maritime vocational education, cadet and crew development, and industry-ready seafarer workforce preparation.",
      region: "Banten, Indonesia",
      logo: poltekpelBanten,
      website: "https://poltekpel-banten.ac.id",
      documentation: [
        {
          image: bantenDoc1,
          title: "Partnership Agreement",
          description: "MoU signing with Poltekpel Banten management for seafarer training collaboration",
        },
      ],
      highlights: [
        "Deck & Engine Cadet Education Programs",
        "Practical Sea Training & Onboard Preparation",
        "Industry-Aligned Maritime Certification Support",
        "Competency Development for Commercial Shipping",
        "Graduate Employment & Manning Support",
      ],
    },
  ];

 

  return (
    <article className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen overflow-hidden">
      {/* Enhanced Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT Kamandanu Jaya Samudera",
          description:
            "Leading crew manning and maritime services provider with strategic partnerships with STIP Jakarta and Poltekpel Banten",
          url: "https://www.kamandanujayasamudera.com",
          logo: "https://www.kamandanujayasamudera.com/logo.png",
          industry: "Maritime Services",
          areaServed: {
            "@type": "Place",
            name: "Worldwide",
          },
          foundingDate: "2009",
          slogan: "Building lasting partnerships through excellence, reliability, and unwavering commitment to maritime safety",
          partner: [
            {
              "@type": "EducationalOrganization",
              name: "STIP Jakarta",
              alternateName: "Sekolah Tinggi Ilmu Pelayaran Jakarta",
              url: "https://www.stipjakarta.ac.id",
            },
            {
              "@type": "EducationalOrganization",
              name: "Poltekpel Banten",
              alternateName: "Politeknik Pelayaran Banten",
              url: "https://www.poltekpelbanten.ac.id",
            },
          ],
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
       <header
  className={`text-center pt-28 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-12 md:pb-16 relative ${
    isVisible ? "animate-fade-in" : "opacity-0"
  }`}
>

          {/* Decorative Background Elements */}
          <div
            className="absolute top-16 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-float"
            aria-hidden="true"
          ></div>
          <div
            className="absolute top-24 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10 animate-float-delayed"
            aria-hidden="true"
          ></div>

          {/* Badge */}
          <div className="mb-4 sm:mb-5 md:mb-6">
            <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg border border-blue-400/20">
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
              <span>Trusted by Industry Leaders</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0A2540] mb-4 sm:mb-5 md:mb-6 leading-tight px-4">
            Our Valued{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Partners & Clients
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-7 md:mb-8 px-4">
            Connecting Professional Seafarers with Global Maritime Leaders Through Strategic Educational Partnerships
          </p>

          <blockquote className="max-w-2xl mx-auto bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-5 md:p-6 rounded-r-lg italic text-xs sm:text-sm md:text-base text-gray-700 shadow-sm">
            "Building lasting partnerships through excellence, reliability, and
            unwavering commitment to maritime safety and professionalism."
          </blockquote>

          <div
            className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mt-6 sm:mt-7 md:mt-8 rounded-full shadow-lg"
            aria-hidden="true"
          />
        </header>

        {/* MoU Partners Content */}
        {activeTab === "mou" && (
          <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24" aria-labelledby="mou-heading">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <span className="inline-block bg-green-100 text-green-700 px-4 sm:px-5 md:px-6 py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Educational Partnerships
              </span>
              <h2 id="mou-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 sm:mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  MoU Partners
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Strategic collaborations with Indonesia's leading maritime educational institutions for seafarer excellence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
              {mouPartners.map((partner, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  {/* Partner Header with Logo */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6 md:p-7 lg:p-8 border-b-2 border-green-100">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6 mb-4">
                      <div className="bg-white p-3 sm:p-3.5 md:p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} Logo - Maritime Education Partner`}
                          className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain"
                          itemProp="logo"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A2540] mb-1" itemProp="name">
                          {partner.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2" itemProp="alternateName">
                          {partner.fullName}
                        </p>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium"
                            itemProp="url"
                          >
                            Visit Website
                            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      <span className="inline-flex items-center bg-green-100 text-green-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">
                        <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1" />
                        {partner.type}
                      </span>
                      <span className="inline-flex items-center bg-gray-100 text-gray-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1" />
                        <span itemProp="address">{partner.region}</span>
                      </span>
                    </div>
                  </div>

                  {/* Partner Description */}
                  <div className="p-5 sm:p-6 md:p-7 lg:p-8">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 sm:mb-6" itemProp="description">
                      {partner.description}
                    </p>

                    {/* Partnership Highlights */}
                    <div className="mb-5 sm:mb-6">
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#0A2540] mb-3 sm:mb-4 flex items-center">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600 flex-shrink-0" />
                        Partnership Highlights
                      </h4>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {partner.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs sm:text-sm text-gray-700"
                          >
                            <span className="text-green-600 mr-2 sm:mr-2.5 flex-shrink-0 font-bold text-base">✓</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documentation Section */}
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#0A2540] mb-3 sm:mb-4 flex items-center">
                        <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 flex-shrink-0" />
                        Partnership Documentation
                      </h4>
                      <div className="grid gap-3 sm:gap-4">
                        {partner.documentation.map((doc, idx) => (
                          <div
                            key={idx}
                            className="group/doc relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-green-400 transition-all cursor-pointer shadow-sm hover:shadow-md"
                            onClick={() =>
                              setSelectedPartner({
                                partner: partner.name,
                                doc: doc,
                              })
                            }
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                setSelectedPartner({
                                  partner: partner.name,
                                  doc: doc,
                                });
                              }
                            }}
                            aria-label={`View ${doc.title} for ${partner.name}`}
                          >
                            <div className="aspect-video bg-gray-100 overflow-hidden">
                              <img
                                src={doc.image}
                                alt={`${doc.title} - ${partner.name} Partnership`}
                                className="w-full h-full object-cover group-hover/doc:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/doc:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                              <div className="text-white w-full">
                                <p className="font-semibold text-xs sm:text-sm md:text-base mb-1">
                                  {doc.title}
                                </p>
                                <p className="text-[10px] sm:text-xs opacity-90 mb-2">
                                  {doc.description}
                                </p>
                                <span className="inline-block text-[10px] sm:text-xs bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                                  Click to enlarge
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Partner Logos Section - Enhanced */}
        <section
          className={`mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative ${isVisible ? "scale-in" : "opacity-0"}`}
          aria-labelledby="clients-heading"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 sm:px-5 md:px-6 py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">
              Trusted by Industry Leaders
            </span>
            <h2
              id="clients-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 sm:mb-4"
            >
              Our <span className="text-blue-600">Esteemed Clients</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Collaborating with leading shipping companies worldwide to deliver exceptional maritime crew solutions
            </p>
          </div>

          {/* Marquee 1 - Moving Left */}
          <div className="relative mb-5 sm:mb-6 md:mb-8 lg:mb-10">
            <div className="flex overflow-hidden bg-white rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-gray-100 py-4 sm:py-5 md:py-6 lg:py-8 shadow-lg">
              <div className="flex animate-marquee whitespace-nowrap space-x-6 sm:space-x-10 md:space-x-14 lg:space-x-16 items-center px-4 sm:px-6 md:px-8">
                {[...scrollerLogos, ...scrollerLogos, ...scrollerLogos].map(
                  (img, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-36 xl:w-44 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <img
                        src={img}
                        alt={`Trusted Maritime Client ${(index % 9) + 1} - PT Kamandanu Jaya Samudera`}
                        className="max-h-full max-w-full object-contain transition-all"
                        loading="lazy"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Gradient Fade */}
            <div className="absolute inset-y-0 left-0 w-10 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none rounded-l-lg sm:rounded-l-xl md:rounded-l-2xl"></div>
            <div className="absolute inset-y-0 right-0 w-10 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none rounded-r-lg sm:rounded-r-xl md:rounded-r-2xl"></div>
          </div>

          {/* Marquee 2 - Moving Right */}
          <div className="relative">
            <div className="flex overflow-hidden bg-white rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-gray-100 py-4 sm:py-5 md:py-6 lg:py-8 shadow-lg">
              <div className="flex animate-marquee-reverse whitespace-nowrap space-x-6 sm:space-x-10 md:space-x-14 lg:space-x-16 items-center px-4 sm:px-6 md:px-8">
                {[...scrollerLogos, ...scrollerLogos, ...scrollerLogos]
                  .reverse()
                  .map((img, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-36 xl:w-44 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <img
                        src={img}
                        alt={`Global Shipping Client ${(index % 9) + 1} - Crew Manning Solutions`}
                        className="max-h-full max-w-full object-contain transition-all"
                        loading="lazy"
                      />
                    </div>
                  ))}
              </div>
            </div>
            {/* Gradient Fade */}
            <div className="absolute inset-y-0 left-0 w-10 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none rounded-l-lg sm:rounded-l-xl md:rounded-l-2xl"></div>
            <div className="absolute inset-y-0 right-0 w-10 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none rounded-r-lg sm:rounded-r-xl md:rounded-r-2xl"></div>
          </div>
        </section>

        {/* Call to Action - Enhanced */}
        <section
          className={`pb-12 sm:pb-16 md:pb-20 lg:pb-24 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}
        >
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div
              className="absolute top-0 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-white/10 rounded-full blur-3xl -z-0"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-cyan-400/10 rounded-full blur-3xl -z-0"
              aria-hidden="true"
            ></div>

            <div className="relative z-10">
              <Ship className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-cyan-300" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5">
                Become Our Partner
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed px-2">
                Join our network of global maritime leaders and experience
                world-class crew manning solutions backed by Indonesia's leading educational institutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-block bg-white text-blue-600 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                  aria-label="Contact us to become a partner"
                >
                  Contact Us Today
                </a>
                <a
                  href="/services"
                  className="w-full sm:w-auto inline-block bg-transparent text-white border-2 border-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 text-sm sm:text-base"
                  aria-label="Learn about our maritime services"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Image Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in"
          onClick={() => setSelectedPartner(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-xl sm:rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl transform scale-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedPartner.doc.image}
                alt={selectedPartner.doc.title}
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 hover:bg-white text-gray-800 rounded-full p-2 sm:p-2.5 shadow-lg transition-all hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <h3 id="modal-title" className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A2540] mb-2">
                {selectedPartner.doc.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-600 font-semibold mb-3">
                {selectedPartner.partner}
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {selectedPartner.doc.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-bottom {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 45s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .slide-in-bottom {
          animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .scale-in {
          animation: scale-in 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Accessibility improvements */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Focus visible for accessibility */
        *:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </article>
  );
};

export default Clients;
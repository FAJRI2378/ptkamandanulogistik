import React, { useState, useEffect } from "react";
import { Navigation, Building, Ship, Compass, Mail, Globe, Phone, MapPin, Anchor, Star, ChevronLeft, ChevronRight, Award, Users } from "lucide-react";
import onboard1 from "../img/onboard1.png";
import onboard2 from "../img/onboard2.png";
import onboard3 from "../img/onboard3.png";
import onboard4 from "../img/onboard4.png";
import onboard5 from "../img/onboard5.png";
import onboard6 from "../img/onboard6.png";
import capt from "../img/capt.png";
import client1 from "../img/client1.png";
import client2 from "../img/client2.png";
import client3 from "../img/client3.png";
import onboard7 from "../img/onboard7.jpg";
import onboard8 from "../img/onboard8.jpg";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    // Enhanced SEO Meta Tags
    document.title = "Professional Maritime Team & Certified Seafarers | PT Kamandanu Jaya Samudera - Indonesian Crewing Company";
    
    // Meta Description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Meet PT Kamandanu Jaya Samudera's professional maritime team. Led by Mr. Makkama Patontonan with 30+ years experience. Certified seafarers serving global shipping operations from Indonesia.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    // Keywords Meta Tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "maritime team Indonesia, certified seafarers, ship crew Indonesia, crewing company Jakarta, PT Kamandanu Jaya Samudera, Indonesian maritime professionals, ship management, tanker crew, bulk carrier crew, VLCC crew, maritime recruitment Indonesia";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywordsContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }

    // Open Graph Meta Tags for Social Sharing
    const ogTags = [
      { property: "og:title", content: "Professional Maritime Team | PT Kamandanu Jaya Samudera" },
      { property: "og:description", content: descriptionContent },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PT Kamandanu Jaya Samudera" }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (ogTag) {
        ogTag.setAttribute("content", tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute("property", tag.property);
        meta.setAttribute("content", tag.content);
        document.head.appendChild(meta);
      }
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.href);
      document.head.appendChild(canonical);
    }

    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const onboardCrew = [
    {
      name: "Captain Ahmad Wijaya",
      position: "AB",
      vessel: "TANKER",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard1,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "2O",
      vessel: "LCT",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard2,
    },
    {
      name: "Engineering Officer",
      position: "AB",
      vessel: "BULK CARRIER",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard3,
    },
    {
      name: "Chief Engineer",
      position: "3O",
      vessel: "VLCC",
      status: "Onboard",
      nextPort: "SINGAPORE",
      avatar: onboard4,
    },
    {
      name: "Navigation Officer",
      position: "DECK CADET",
      vessel: "OIL TANKER",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard5,
    },
    {
      name: "Marine Engineer",
      position: "AB & OILER",
      vessel: "LCT",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard6,
    },
    {
      name: "Deck Officer",
      position: "AB",
      vessel: "GENERAL CARGO",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard7,
    },
    {
      name: "Technical Officer",
      position: "AB",
      vessel: "VLCC",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard8,
    },
  ];

  const owner = [
    {
      name: "Mr. Makkama Patontonan",
      position: "Founder & Owner",
      department: "Company Leadership",
      experience: "30+ years",
      expertise: "Maritime Industry Leadership, Business Development, Strategic Investment, Fleet Management",
      email: "kamandanu@kamandanujayasamudera.com",
      phone: "+62 21 1234 5678",
      level: "Owner & Founder",
      avatar: capt,
      bio: "Leading PT Kamandanu Jaya Samudera with over three decades of maritime expertise, Mr. Makkama Patontonan has established the company as a trusted name in Indonesian shipping and crewing services.",
    },
  ];

  const clients = [
    {
      name: "PT Pelni (Persero)",
      type: "National Shipping Company",
      logo: client1,
    },
    {
      name: "PT Pertamina Trans Kontinental",
      type: "Offshore & Marine Services",
      logo: client2,
    },
    {
      name: "Maersk Line",
      type: "Global Container Shipping",
      logo: client3,
    },
  ];

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCrew = onboardCrew.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(onboardCrew.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <article className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white min-h-screen pt-32" itemScope itemType="https://schema.org/Organization">
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PT Kamandanu Jaya Samudera",
          "description": "Professional maritime crewing company in Indonesia providing certified seafarers and ship management services",
          "founder": {
            "@type": "Person",
            "name": "Makkama Patontonan",
            "jobTitle": "Founder & Owner"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jakarta",
            "addressCountry": "Indonesia"
          },
          "email": "kamandanu@kamandanujayasamudera.com",
          "telephone": "+62 21 1234 5678"
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <header className={`text-center mb-24 relative ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-float" aria-hidden="true"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10 animate-float-delayed" aria-hidden="true"></div>
          
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg border border-blue-400/20">
              <Anchor className="inline h-4 w-4 mr-2 -mt-1" aria-hidden="true" />
              Meet Our Professional Maritime Team
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A2540] mb-6 leading-tight">
            Professional Maritime Team & 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2">
              Certified Seafarers
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experienced maritime professionals and certified seafarers dedicated to excellence in service and safety at PT Kamandanu Jaya Samudera
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              <span className="font-semibold">30+ Years Experience</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span className="font-semibold">500+ Seafarers</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <Ship className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span className="font-semibold">Global Operations</span>
            </div>
          </div>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto rounded-full shadow-lg" aria-hidden="true" />
        </header>

        {/* Enhanced Onboard Crew Section with Pagination */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg">
                  <Navigation className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-[#0A2540]">
                    Currently Onboard Crew
                  </h2>
                  <p className="text-gray-600 mt-1">Active certified seafarers serving our fleet worldwide</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-2xl font-bold shadow-xl flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              {onboardCrew.length} Active Crew
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentCrew.map((crew, index) => (
              <article
                key={index}
                className={`group bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 overflow-hidden relative ${
                  isVisible ? "scale-in" : "opacity-0"
                } stagger-${index + 1}`}
                itemScope
                itemType="https://schema.org/Person"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" aria-hidden="true"></div>
                
                <div className="relative overflow-hidden">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={crew.avatar}
                      alt={`${crew.name} - ${crew.position} at PT Kamandanu Jaya Samudera`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold rounded-full flex items-center shadow-2xl backdrop-blur-sm border border-white/20">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      {crew.status}
                    </span>
                  </div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 pt-16">
                    <h3 className="font-bold text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors" itemProp="name">
                      {crew.name}
                    </h3>
                    <p className="text-cyan-300 font-semibold text-sm" itemProp="jobTitle">{crew.position}</p>
                  </div>
                </div>

                <div className="p-5 relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100 group-hover:border-blue-300 transition-colors">
                      <Ship className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold mb-0.5">Vessel Type</p>
                        <span className="font-bold text-gray-900">{crew.vessel}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100 group-hover:border-purple-300 transition-colors">
                      <Compass className="h-5 w-5 mr-3 text-purple-600 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold mb-0.5">Next Destination</p>
                        <span className="font-bold text-gray-900">{crew.nextPort}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-3" aria-label="Crew pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-xl font-bold transition-all ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl hover:scale-105'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-5 py-3 rounded-xl font-bold transition-all ${
                      currentPage === index + 1
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl scale-110'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-400'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                    aria-current={currentPage === index + 1 ? 'page' : undefined}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-xl font-bold transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl hover:scale-105'
                }`}
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </nav>
          )}
        </section>

        {/* Company Leadership Section - Owner Only */}
        <section className="mb-32">
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg">
                <Building className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#0A2540]">
                  Company Leadership
                </h2>
                <p className="text-gray-600 mt-1">Meet our founder with decades of maritime excellence</p>
              </div>
            </div>
          </header>

          {/* OWNER SECTION */}
          <div className="max-w-5xl mx-auto">
            {owner.map((member, index) => (
              <article
                key={index}
                className={`bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-2 border-purple-200 rounded-3xl shadow-2xl hover:shadow-purple-300/50 transition-all duration-700 hover:scale-[1.02] p-12 relative overflow-hidden ${
                  isVisible ? "scale-in" : "opacity-0"
                }`}
                itemScope
                itemType="https://schema.org/Person"
              >
                {/* Enhanced Decorative Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10 animate-float" aria-hidden="true"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl -z-10 animate-float-delayed" aria-hidden="true"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/10 rounded-full blur-3xl -z-10" aria-hidden="true"></div>

                <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold px-6 py-3 rounded-full shadow-xl border border-white/20">
                  {member.level}
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="flex-shrink-0">
                    <div className="relative group/avatar">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover/avatar:opacity-100 transition duration-1000 group-hover/avatar:duration-200 animate-pulse"></div>
                      <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white bg-white">
                        <img
                          src={member.avatar}
                          alt={`${member.name} - ${member.position} at PT Kamandanu Jaya Samudera`}
                          className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-700"
                          loading="eager"
                          itemProp="image"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-extrabold text-4xl text-[#0A2540] mb-3 tracking-tight" itemProp="name">
                      {member.name}
                    </h3>
                    <p className="text-purple-700 font-bold text-2xl mb-2" itemProp="jobTitle">
                      {member.position}
                    </p>
                    <p className="text-purple-600 text-base font-semibold uppercase tracking-wider mb-8" itemProp="worksFor">
                      {member.department}
                    </p>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-8" aria-hidden="true"></div>
                    
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed" itemProp="description">
                      {member.bio}
                    </p>

                    <p className="text-gray-700 text-base mb-8 leading-relaxed">
                      <strong>Expertise:</strong> {member.expertise}
                    </p>
                    
                    <div className="bg-gradient-to-r from-purple-100/80 to-indigo-100/80 border-2 border-purple-200 rounded-2xl p-6 mb-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl" aria-hidden="true"></div>
                      <Award className="h-6 w-6 text-purple-600 inline mr-3 relative z-10" aria-hidden="true" />
                      <span className="italic text-gray-800 font-medium text-lg relative z-10">
                        "Leadership is not about position, but responsibility to the sea and people."
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-5 mb-8">
                      <div className="bg-white rounded-2xl p-5 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold text-purple-700 text-base">Experience:</span>
                          <span className="block text-gray-900 text-lg font-semibold mt-1">{member.experience}</span>
                        </p>
                      </div>
                      <div className="bg-white rounded-2xl p-5 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-colors">
                        <p className="text-sm text-gray-600">
                          <MapPin className="h-5 w-5 inline mr-2 text-purple-600 -mt-1" aria-hidden="true" />
                          <span className="font-bold text-purple-700 text-base">Location:</span>
                          <span className="block text-gray-900 text-lg font-semibold mt-1">Jakarta, Indonesia</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl flex items-center font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                        aria-label={`Email ${member.name}`}
                        itemProp="email"
                      >
                        <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                        Email
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="bg-white hover:bg-purple-50 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl flex items-center font-bold transition-all hover:scale-105"
                        aria-label={`Call ${member.name}`}
                        itemProp="telephone"
                      >
                        <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                        Call
                      </a>
                      <button 
                        className="bg-white hover:bg-purple-50 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl flex items-center font-bold transition-all hover:scale-105"
                        aria-label={`View ${member.name} LinkedIn profile`}
                      >
                        <Globe className="h-5 w-5 mr-2" aria-hidden="true" />
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="mb-24">
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg">
                <Users className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-4xl font-bold text-[#0A2540]">
                Our Valued Clients & Partners
              </h2>
            </div>
            <p className="text-gray-600 text-lg mt-3">
              Trusted by leading national and international maritime companies
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mx-auto mt-6 rounded-full shadow-lg" aria-hidden="true" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <article
                key={index}
                className={`group bg-white border-2 border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-700 hover:-translate-y-3 p-10 flex flex-col items-center justify-center text-center relative overflow-hidden ${
                  isVisible ? "scale-in" : "opacity-0"
                } stagger-${index + 1}`}
                itemScope
                itemType="https://schema.org/Organization"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                
                <div className="relative z-10 w-full">
                  <div className="w-full h-36 flex items-center justify-center mb-8 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={`${client.name} - Maritime Partner of PT Kamandanu Jaya Samudera`}
                      className="max-h-32 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </div>

                  <h3 className="font-bold text-lg text-[#0A2540] mb-3 group-hover:text-blue-600 transition-colors" itemProp="name">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-semibold" itemProp="description">
                    {client.type}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <style>
        {`
          @keyframes slide-in-bottom {
            from { transform: translateY(60px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.85); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          .slide-in-bottom { 
            animation: slide-in-bottom 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; 
          }
          .scale-in { 
            animation: scale-in 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; 
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.15s; }
          .stagger-3 { animation-delay: 0.2s; }
          .stagger-4 { animation-delay: 0.25s; }
          .stagger-5 { animation-delay: 0.3s; }
          .stagger-6 { animation-delay: 0.35s; }
          .stagger-7 { animation-delay: 0.4s; }
          .stagger-8 { animation-delay: 0.45s; }
        `}
      </style>
    </article>
  );
};

export default Team;
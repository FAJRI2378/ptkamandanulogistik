import React, { useState, useEffect } from "react";
import { Navigation, Building, Ship, Compass, Mail, Globe, Briefcase, Users, Award, Phone, MapPin, Anchor, Star } from "lucide-react";
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

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Our Professional Maritime Team - PT Kamandanu Jaya Samudera | Certified Crew & Management";
    
    // Meta Description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meet our expert maritime team at PT Kamandanu Jaya Samudera. Professional certified seafarers, experienced management, and dedicated crew serving Indonesia's shipping industry with 30+ years of excellence.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Meet our expert maritime team at PT Kamandanu Jaya Samudera. Professional certified seafarers, experienced management, and dedicated crew serving Indonesia's shipping industry with 30+ years of excellence.";
      document.head.appendChild(meta);
    }

    // Keywords Meta Tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "maritime team, seafarers, ship crew, crewing company, maritime professionals, Indonesia shipping, PT Kamandanu Jaya Samudera, certified crew, ship management");
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = "maritime team, seafarers, ship crew, crewing company, maritime professionals, Indonesia shipping, PT Kamandanu Jaya Samudera, certified crew, ship management";
      document.head.appendChild(meta);
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
      department: "Ownership",
      experience: "30+ years",
      expertise: "Maritime Industry Leadership, Business Development, Strategic Investment",
      email: "kamandanu@kamandanujayasamudera.com",
      phone: "+62 21 1234 5678",
      level: "Owner",
      avatar: capt,
    },
  ];

  const topManagement = [
    {
      name: "Vivi Savitri",
      position: "Crewing Manager",
      department: "Executive Board",
      experience: "20+ years",
      expertise: "Ship Management, Maritime Operations, Strategic Planning",
      email: "vivi@kamandanujayasamudera.com",
      phone: "+62 21 2234 5678",
      level: "MANAGER",
    },
  ];

  const middleManagement = [
    {
      name: "Silmi",
      position: "Crew Manager",
      department: "Human Resources",
      experience: "15+ years",
      expertise: "Crew Recruitment, Training, HR Development",
      email: "silmi@kamandanujayasamudera.com",
      level: "STAFF",
    },
    {
      name: "Jasmin",
      position: "Operations Manager",
      department: "Operations",
      experience: "12+ years",
      expertise: "Vessel Operations, Logistics, Supply Chain",
      email: "jasmin@kamandanujayasamudera.com",
      level: "STAFF",
    },
    {
      name: "Putri",
      position: "Marine Superintendent",
      department: "Technical",
      experience: "25+ years",
      expertise: "Marine Safety, Inspections, Quality Control",
      email: "putri@kamandanujayasamudera.com",
      level: "STAFF",
    },
    {
      name: "Echa",
      position: "Documentation Manager",
      department: "Administration",
      experience: "10+ years",
      expertise: "Maritime Documentation, Compliance, Legal Affairs",
      email: "echa@kamandanujayasamudera.com",
      level: "STAFF",
    },
    {
      name: "Shinta",
      position: "Documentation Manager",
      department: "Administration",
      experience: "10+ years",
      expertise: "Maritime Documentation, Compliance, Legal Affairs",
      email: "shinta@kamandanujayasamudera.com",
      level: "STAFF",
    },
  ];

  const clients = [
    {
      name: "PT Pelni (Persero)",
      type: "Shipping Company",
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

  return (
    <article className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section with Floating Elements */}
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

        {/* Enhanced Onboard Crew Section */}
        <section className="mb-32" itemScope itemType="https://schema.org/Organization">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardCrew.map((crew, index) => (
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
        </section>

        {/* Enhanced Office Team & Management Section */}
        <section className="mb-32">
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg">
                <Building className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#0A2540]">
                  Office Team & Management
                </h2>
                <p className="text-gray-600 mt-1">Organizational structure and leadership excellence</p>
              </div>
            </div>
          </header>

          {/* ENHANCED OWNER SECTION */}
          <section className="mb-24">
            <div className="flex items-center mb-12">
              <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">👑</span>
                <span className="text-lg">COMPANY OWNER</span>
              </div>
            </div>
            
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
                            loading="lazy"
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
                      
                      <p className="text-gray-700 text-lg mb-8 leading-relaxed" itemProp="description">{member.expertise}</p>
                      
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

          {/* ENHANCED TOP MANAGEMENT */}
          <section className="mb-24">
            <div className="flex items-center mb-12">
              <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">👔</span>
                <span className="text-lg">MANAGER</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {topManagement.map((member, index) => (
                <article
                  key={index}
                  className={`group bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] p-10 relative overflow-hidden ${
                    isVisible ? "scale-in" : "opacity-0"
                  }`}
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10 animate-float" aria-hidden="true"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -z-10 animate-float-delayed" aria-hidden="true"></div>

                  <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold px-6 py-3 rounded-full shadow-xl">
                    {member.level}
                  </div>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative group/icon">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-75 group-hover/icon:opacity-100 transition duration-500"></div>
                        <div className="relative w-36 h-36 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white group-hover/icon:scale-110 transition-transform duration-500">
                          <Briefcase className="h-16 w-16 text-white" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-bold text-3xl text-[#0A2540] mb-2" itemProp="name">{member.name}</h3>
                      <p className="text-amber-700 font-bold text-xl mb-2" itemProp="jobTitle">{member.position}</p>
                      <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider mb-6" itemProp="worksFor">{member.department}</p>
                      
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent my-6" aria-hidden="true"></div>
                      
                      <p className="text-gray-700 text-base mb-6 leading-relaxed" itemProp="description">{member.expertise}</p>
                      
                      <div className="bg-white/80 rounded-xl p-5 mb-6 border-2 border-amber-200">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold text-amber-700 text-base">Experience:</span>
                          <span className="block text-gray-900 text-lg font-semibold mt-1">{member.experience}</span>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                          href={`mailto:${member.email}`}
                          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl flex items-center font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                          aria-label={`Email ${member.name}`}
                          itemProp="email"
                        >
                          <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                          Contact
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className="bg-white hover:bg-amber-50 text-amber-600 border-2 border-amber-600 px-6 py-3 rounded-xl flex items-center font-bold transition-all hover:scale-105"
                          aria-label={`Call ${member.name}`}
                          itemProp="telephone"
                        >
                          <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                          Call
                        </a>
                        <button 
                          className="bg-white hover:bg-amber-50 text-amber-600 border-2 border-amber-600 px-6 py-3 rounded-xl flex items-center font-bold transition-all hover:scale-105"
                          aria-label={`View ${member.name} LinkedIn profile`}
                        >
                          <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
                          LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ENHANCED MIDDLE MANAGEMENT */}
          <section className="mb-24">
            <div className="flex items-center mb-12">
              <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">💼</span>
                <span className="text-lg">STAFF MEMBERS</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {middleManagement.map((member, index) => (
                <article
                  key={index}
                  className={`group bg-white border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-700 hover:-translate-y-2 p-6 relative overflow-hidden ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 3}`}
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" aria-hidden="true"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full border border-blue-200">
                        {member.level}
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative group/icon mb-5">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-50 group-hover/icon:opacity-100 transition duration-500"></div>
                        <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white group-hover/icon:scale-110 transition-transform duration-500">
                          <Briefcase className="h-12 w-12 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-[#0A2540] mb-1 group-hover:text-blue-600 transition-colors" itemProp="name">{member.name}</h3>
                      <p className="text-blue-700 font-bold text-sm mb-1" itemProp="jobTitle">{member.position}</p>
                      <p className="text-blue-600 text-xs mb-3 font-semibold" itemProp="worksFor">{member.department}</p>
                    </div>

                    <div className="pt-5 border-t-2 border-gray-100">
                      <p className="text-gray-700 text-sm mb-5 leading-relaxed min-h-[60px]" itemProp="description">{member.expertise}</p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 mb-5 border border-blue-100">
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold text-blue-700">Experience:</span>
                          <span className="block text-gray-900 font-bold mt-1">{member.experience}</span>
                        </p>
                      </div>

                      <a
                        href={`mailto:${member.email}`}
                        className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center px-4 py-3 rounded-xl font-bold transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105"
                        aria-label={`Email ${member.name}`}
                        itemProp="email"
                      >
                        <Mail className="h-4 w-4 inline mr-2 -mt-1" aria-hidden="true" />
                        Contact
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ENHANCED CLIENTS SECTION */}
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
                        alt={`${client.name} - Maritime Partner`}
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

          {/* ENHANCED STATISTICS SECTION */}
          <section className={`bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-14 mb-24 text-white shadow-2xl relative overflow-hidden ${isVisible ? "slide-in-bottom" : "opacity-0"} stagger-4`}>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" aria-hidden="true"></div>
            
            <header className="text-center max-w-4xl mx-auto relative z-10 mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Our Organizational Structure
              </h2>
              <p className="text-blue-100 leading-relaxed text-lg">
                Our team is structured with clear hierarchy and responsibilities to ensure efficient operations and excellent service delivery. From executive leadership to specialized departments, every member plays a crucial role in our success.
              </p>
            </header>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {[
                { number: "1", label: "Owner" },
                { number: "1", label: "Manager" },
                { number: "4", label: "Department Heads" },
                { number: "5", label: "Staff Members" },
                { number: "500+", label: "Seafarers" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-500 border-2 border-white/20 hover:scale-105 hover:border-white/40 group"
                >
                  <div className="text-6xl font-extrabold mb-3 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-bold text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ENHANCED CTA SECTION */}
          <section className={`bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 rounded-3xl p-14 text-center border-2 border-blue-200 shadow-2xl relative overflow-hidden ${isVisible ? "slide-in-bottom" : "opacity-0"} stagger-5`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" aria-hidden="true"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  Join Our Team
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-4">
                Join Our Professional Maritime Team
              </h2>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                We're always looking for talented maritime professionals to join our growing team. Explore career opportunities with PT Kamandanu Jaya Samudera.
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center">
                <button 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 flex items-center gap-3"
                  aria-label="View open positions at PT Kamandanu Jaya Samudera"
                >
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                  View Open Positions
                </button>
                <button 
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-3"
                  aria-label="Contact HR team at PT Kamandanu Jaya Samudera"
                >
                  <Mail className="h-6 w-6" aria-hidden="true" />
                  Contact HR Team
                </button>
              </div>
            </div>
          </section>
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
          .stagger-9 { animation-delay: 0.5s; }
        `}
      </style>
    </article>
  );
};

export default Team;
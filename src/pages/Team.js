import React, { useState, useEffect } from "react";
import { Navigation, Building, Ship, Compass, Mail, Globe, Briefcase, Users, User, Award, Phone, MapPin } from "lucide-react";
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
      vessel: "MV Kamandanu 1",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard1,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "20",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard2,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "AB",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard3,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "30",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "SINGAPORE",
      avatar: onboard4,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "DECK CADET",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard5,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "AB & OILER",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard6,
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
      email: "hendra@kamandanujayasamudera.com",
      phone: "+62 21 2234 5678",
      level: "C-Level",
    },
  ];

  const middleManagement = [
    {
      name: "Silmi",
      position: "Crew Manager",
      department: "Human Resources",
      experience: "15+ years",
      expertise: "Crew Recruitment, Training, HR Development",
      email: "ahmad@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Jasmin",
      position: "Operations Manager",
      department: "Operations",
      experience: "12+ years",
      expertise: "Vessel Operations, Logistics, Supply Chain",
      email: "maya@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Putri",
      position: "Marine Superintendent",
      department: "Technical",
      experience: "25+ years",
      expertise: "Marine Safety, Inspections, Quality Control",
      email: "budi@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Echa",
      position: "Documentation Manager",
      department: "Administration",
      experience: "10+ years",
      expertise: "Maritime Documentation, Compliance, Legal Affairs",
      email: "diana@kamandanujayasamudera.com",
      level: "Manager",
    },
  ];

  const staffMembers = [
    {
      name: "Jasmin",
      position: "HR Specialist",
      department: "Human Resources",
      experience: "5+ years",
      expertise: "Recruitment, Employee Relations, Training Coordination",
      email: "andi@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Silmi",
      position: "Operations Coordinator",
      department: "Operations",
      experience: "4+ years",
      expertise: "Vessel Scheduling, Port Coordination, Logistics Support",
      email: "nina@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Echa",
      position: "Technical Assistant",
      department: "Technical",
      experience: "6+ years",
      expertise: "Technical Documentation, Maintenance Planning",
      email: "budi.s@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Putri",
      position: "Documentation Officer",
      department: "Administration",
      experience: "3+ years",
      expertise: "Document Processing, Record Keeping, Compliance Support",
      email: "rina@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Shinta",
      position: "Finance Officer",
      department: "Finance",
      experience: "5+ years",
      expertise: "Accounting, Financial Reporting, Expense Management",
      email: "ahmad.h@kamandanujayasamudera.com",
      level: "Staff",
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
    <article className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Optimized Header Section */}
        <header className={`text-center mb-20 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Meet Our Professional Maritime Team
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
            Professional Maritime Team & <span className="text-blue-600">Certified Seafarers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced maritime professionals and certified seafarers dedicated to excellence in service and safety at PT Kamandanu Jaya Samudera
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-6 rounded-full" />
        </header>

        {/* Onboard Crew Section with Schema Markup */}
        <section className="mb-24" itemScope itemType="https://schema.org/Organization">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-2 flex items-center">
                <Navigation className="h-9 w-9 mr-3 text-blue-500" aria-hidden="true" />
                Currently Onboard Crew
              </h2>
              <p className="text-gray-600 ml-12">Active certified seafarers serving our fleet</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
                {onboardCrew.length} Active Crew
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onboardCrew.map((crew, index) => (
              <article
                key={index}
                className={`group bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  isVisible ? "scale-in" : "opacity-0"
                } stagger-${index + 1}`}
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={crew.avatar}
                      alt={`${crew.name} - ${crew.position} at PT Kamandanu Jaya Samudera`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-full flex items-center shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
                      {crew.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="font-bold text-lg text-white mb-1" itemProp="name">{crew.name}</h3>
                    <p className="text-blue-300 font-semibold text-sm" itemProp="jobTitle">{crew.position}</p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <Ship className="h-4 w-4 mr-3 text-blue-500 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium">{crew.vessel}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <Compass className="h-4 w-4 mr-3 text-blue-500 flex-shrink-0" aria-hidden="true" />
                      <span className="font-medium">Next Port: {crew.nextPort}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Office Team & Management Section */}
        <section className="mb-24">
          <header className="mb-10">
            <h2 className="text-3xl font-bold text-[#0A2540] mb-2 flex items-center">
              <Building className="h-9 w-9 mr-3 text-blue-500" aria-hidden="true" />
              Office Team & Management
            </h2>
            <p className="text-gray-600 ml-12">Organizational structure and leadership excellence</p>
          </header>

          {/* OWNER SECTION */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2" aria-hidden="true">👑</span>
                COMPANY OWNER
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {owner.map((member, index) => (
                <article
                  key={index}
                  className={`bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-2 border-purple-300 rounded-3xl shadow-2xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-[1.02] p-10 relative overflow-hidden ${
                    isVisible ? "scale-in" : "opacity-0"
                  }`}
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl -z-10" aria-hidden="true"></div>

                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    {member.level}
                  </div>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-300 bg-white">
                        <img
                          src={member.avatar}
                          alt={`${member.name} - ${member.position} at PT Kamandanu Jaya Samudera`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          itemProp="image"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-extrabold text-3xl text-[#0A2540] mb-2 tracking-tight" itemProp="name">
                        {member.name}
                      </h3>
                      <p className="text-purple-700 font-bold text-xl mb-2" itemProp="jobTitle">
                        {member.position}
                      </p>
                      <p className="text-purple-600 text-sm font-semibold uppercase tracking-wider mb-6" itemProp="worksFor">
                        {member.department}
                      </p>

                      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-6" aria-hidden="true"></div>
                      
                      <p className="text-gray-700 text-base mb-6 leading-relaxed" itemProp="description">{member.expertise}</p>
                      
                      <div className="bg-purple-100/50 border border-purple-200 rounded-xl p-4 mb-6 italic text-gray-700">
                        <Award className="h-5 w-5 text-purple-600 inline mr-2" aria-hidden="true" />
                        "Leadership is not about position, but responsibility to the sea and people."
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                          <p className="text-sm text-gray-600">
                            <span className="font-bold text-purple-700">Experience:</span> {member.experience}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                          <p className="text-sm text-gray-600">
                            <MapPin className="h-4 w-4 inline mr-1 text-purple-600" aria-hidden="true" />
                            <span className="font-bold text-purple-700">Location:</span> Jakarta, Indonesia
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                          href={`mailto:${member.email}`}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center font-semibold transition-all shadow-lg hover:shadow-xl"
                          aria-label={`Email ${member.name}`}
                          itemProp="email"
                        >
                          <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                          Email
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className="bg-white hover:bg-purple-50 text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg flex items-center font-semibold transition-all"
                          aria-label={`Call ${member.name}`}
                          itemProp="telephone"
                        >
                          <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                          Call
                        </a>
                        <button 
                          className="bg-white hover:bg-purple-50 text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg flex items-center font-semibold transition-all"
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

          {/* TOP MANAGEMENT */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2" aria-hidden="true">👔</span>
                TOP MANAGEMENT - EXECUTIVE BOARD
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {topManagement.map((member, index) => (
                <article
                  key={index}
                  className={`group bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all duration-500 hover:scale-105 p-8 relative overflow-hidden ${
                    isVisible ? "scale-in" : "opacity-0"
                  }`}
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                    {member.level}
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-2xl ring-4 ring-amber-200 group-hover:scale-110 transition-transform duration-500">
                      <Briefcase className="h-16 w-16 text-white" aria-hidden="true" />
                    </div>
                    
                    <h3 className="font-bold text-2xl text-[#0A2540] mb-2" itemProp="name">{member.name}</h3>
                    <p className="text-amber-700 font-bold text-lg mb-2" itemProp="jobTitle">{member.position}</p>
                    <p className="text-amber-600 text-sm font-semibold mb-6" itemProp="worksFor">{member.department}</p>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent my-4" aria-hidden="true"></div>
                    
                    <p className="text-gray-700 text-sm mb-6 leading-relaxed" itemProp="description">{member.expertise}</p>
                    
                    <div className="bg-white/80 rounded-lg p-4 mb-6 w-full">
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-amber-700">Experience:</span> {member.experience}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-lg flex items-center font-semibold transition-all text-sm shadow-lg"
                        aria-label={`Email ${member.name}`}
                        itemProp="email"
                      >
                        <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                        Contact
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="bg-white hover:bg-amber-50 text-amber-600 border-2 border-amber-600 px-5 py-2 rounded-lg flex items-center font-semibold transition-all text-sm"
                        aria-label={`Call ${member.name}`}
                        itemProp="telephone"
                      >
                        <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                        Call
                      </a>
                      <button 
                        className="bg-white hover:bg-amber-50 text-amber-600 border-2 border-amber-600 px-5 py-2 rounded-lg flex items-center font-semibold transition-all text-sm"
                        aria-label={`View ${member.name} LinkedIn profile`}
                      >
                        <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* MIDDLE MANAGEMENT */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2" aria-hidden="true">💼</span>
                MIDDLE MANAGEMENT - DEPARTMENT HEADS
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {middleManagement.map((member, index) => (
                <article
                  key={index}
                  className={`group bg-white border-2 border-blue-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-500 hover:-translate-y-1 p-6 ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 3}`}
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="flex justify-between items-start mb-5">
                    <div className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                      {member.level}
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center mb-5">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 shadow-lg ring-2 ring-blue-200 group-hover:scale-110 transition-transform duration-500">
                      <Briefcase className="h-12 w-12 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-lg text-[#0A2540] mb-1" itemProp="name">{member.name}</h3>
                    <p className="text-blue-700 font-bold text-sm mb-1" itemProp="jobTitle">{member.position}</p>
                    <p className="text-blue-600 text-xs mb-3 font-semibold" itemProp="worksFor">{member.department}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed" itemProp="description">{member.expertise}</p>
                    
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold text-blue-700">Experience:</span> {member.experience}
                      </p>
                    </div>

                    <a
                      href={`mailto:${member.email}`}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg font-semibold transition-all text-sm shadow-md"
                      aria-label={`Email ${member.name}`}
                      itemProp="email"
                    >
                      <Mail className="h-3 w-3 inline mr-2" aria-hidden="true" />
                      Contact
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* STAFF MEMBERS */}
          <section className="mb-20">
            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2" aria-hidden="true">👥</span>
                STAFF MEMBERS
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {staffMembers.map((member, index) => (
                <article
                  key={index}
                  className={`group bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-green-400 transition-all duration-500 hover:-translate-y-1 p-6 ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 4}`}
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="flex justify-between items-start mb-5">
                    <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      {member.level}
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center mb-5">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-lg ring-2 ring-green-200 group-hover:scale-110 transition-transform duration-500">
                      <User className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-base text-[#0A2540] mb-1" itemProp="name">{member.name}</h3>
                    <p className="text-green-700 font-bold text-sm mb-1" itemProp="jobTitle">{member.position}</p>
                    <p className="text-green-600 text-xs mb-3 font-semibold" itemProp="worksFor">{member.department}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-xs mb-4 leading-relaxed" itemProp="description">{member.expertise}</p>
                    
                    <div className="bg-green-50 rounded-lg p-2 mb-4">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold text-green-700">Exp:</span> {member.experience}
                      </p>
                    </div>

                    <a
                      href={`mailto:${member.email}`}
                      className="block w-full bg-green-600 hover:bg-green-700 text-white text-center px-3 py-2 rounded-lg font-semibold transition-all text-xs shadow-md"
                      aria-label={`Email ${member.name}`}
                      itemProp="email"
                    >
                      <Mail className="h-3 w-3 inline mr-1" aria-hidden="true" />
                      Email
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CLIENTS SECTION */}
          <section className="mb-16">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-3 flex items-center justify-center">
                <Users className="h-9 w-9 mr-3 text-blue-500" aria-hidden="true" />
                Our Valued Clients & Partners
              </h2>
              <p className="text-gray-600">
                Trusted by leading national and international maritime companies
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full" aria-hidden="true" />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
              {clients.map((client, index) => (
                <article
                  key={index}
                  className={`group bg-white border-2 border-gray-200 rounded-2xl shadow-md hover:shadow-2xl hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 p-8 flex flex-col items-center justify-center text-center ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 1}`}
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <div className="w-full h-32 flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={`${client.name} - Maritime Partner`}
                      className="max-h-28 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </div>

                  <h3 className="font-bold text-base text-[#0A2540] mb-2" itemProp="name">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500" itemProp="description">
                    {client.type}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* STATISTICS SECTION */}
          <section className={`bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 mb-16 text-white shadow-2xl ${isVisible ? "slide-in-bottom" : "opacity-0"} stagger-4`}>
            <header className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Our Organizational Structure
              </h2>
              <p className="text-blue-100 leading-relaxed mb-10 text-lg">
                Our team is structured with clear hierarchy and responsibilities to ensure efficient operations and excellent service delivery. From executive leadership to specialized departments, every member plays a crucial role in our success.
              </p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold mb-2">1</div>
                <div className="text-blue-100 font-semibold">Owner</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold mb-2">1</div>
                <div className="text-blue-100 font-semibold">C-Level Executive</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold mb-2">4</div>
                <div className="text-blue-100 font-semibold">Department Heads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold mb-2">5</div>
                <div className="text-blue-100 font-semibold">Staff Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100 font-semibold">Seafarers</div>
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center border-2 border-blue-200 shadow-xl ${isVisible ? "slide-in-bottom" : "opacity-0"} stagger-5`}>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
              Join Our Professional Maritime Team
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              We're always looking for talented maritime professionals to join our growing team. Explore career opportunities with PT Kamandanu Jaya Samudera.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                aria-label="View open positions at PT Kamandanu Jaya Samudera"
              >
                View Open Positions
              </button>
              <button 
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                aria-label="Contact HR team at PT Kamandanu Jaya Samudera"
              >
                Contact HR Team
              </button>
            </div>
          </section>
        </section>
      </div>

      <style>
        {`
          @keyframes slide-in-bottom {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .slide-in-bottom { animation: slide-in-bottom 0.8s ease-out forwards; }
          .scale-in { animation: scale-in 0.6s ease-out forwards; }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
          .stagger-5 { animation-delay: 0.5s; }
          .stagger-6 { animation-delay: 0.6s; }
        `}
      </style>
    </article>
  );
};

export default Team;
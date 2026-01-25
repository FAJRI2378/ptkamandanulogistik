import React, { useState, useEffect } from "react";
import { Navigation, Building, Ship, Compass, Mail, Globe, Briefcase, Users, User } from "lucide-react";
import onboard1 from "../img/onboard1.png";
import onboard2 from "../img/onboard2.png";
import onboard3 from "../img/onboard3.png";
import onboard4 from "../img/onboard4.png";
import onboard5 from "../img/onboard5.png";
import onboard6 from "../img/onboard6.png";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Our Team - PT Kamandanu Jaya Samudera";
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
      name: "Ir. Kamandanu Jaya",
      position: "Founder & Owner",
      department: "Ownership",
      experience: "30+ years",
      expertise: "Maritime Industry Leadership, Business Development, Strategic Investment",
      email: "kamandanu@kamandanujayasamudera.com",
      level: "Owner",
    },
  ];

  const topManagement = [
    {
      name: "Capt. Hendra Kusuma",
      position: "Managing Director & CEO",
      department: "Executive Board",
      experience: "20+ years",
      expertise: "Ship Management, Maritime Operations, Strategic Planning",
      email: "hendra@kamandanujayasamudera.com",
      level: "C-Level",
    },
    {
      name: "Ir. Siti Nurhaliza",
      position: "Technical Director",
      department: "Executive Board",
      experience: "18+ years",
      expertise: "Vessel Maintenance, Naval Architecture, Technical Operations",
      email: "siti@kamandanujayasamudera.com",
      level: "C-Level",
    },
  ];

  const middleManagement = [
    {
      name: "Ahmad Fauzi",
      position: "Crew Manager",
      department: "Human Resources",
      experience: "15+ years",
      expertise: "Crew Recruitment, Training, HR Development",
      email: "ahmad@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Maya Putri",
      position: "Operations Manager",
      department: "Operations",
      experience: "12+ years",
      expertise: "Vessel Operations, Logistics, Supply Chain",
      email: "maya@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Capt. Budi Hartono",
      position: "Marine Superintendent",
      department: "Technical",
      experience: "25+ years",
      expertise: "Marine Safety, Inspections, Quality Control",
      email: "budi@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Diana Susanti",
      position: "Documentation Manager",
      department: "Administration",
      experience: "10+ years",
      expertise: "Maritime Documentation, Compliance, Legal Affairs",
      email: "diana@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Rizki Pratama",
      position: "Finance Manager",
      department: "Finance",
      experience: "14+ years",
      expertise: "Financial Planning, Budget Management, Accounting",
      email: "rizki@kamandanujayasamudera.com",
      level: "Manager",
    },
    {
      name: "Sarah Wijaya",
      position: "Marketing Manager",
      department: "Business Development",
      experience: "8+ years",
      expertise: "Client Relations, Marketing Strategy, Business Growth",
      email: "sarah@kamandanujayasamudera.com",
      level: "Manager",
    },
  ];

  const staffMembers = [
    {
      name: "Andi Pratama",
      position: "HR Specialist",
      department: "Human Resources",
      experience: "5+ years",
      expertise: "Recruitment, Employee Relations, Training Coordination",
      email: "andi@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Nina Sari",
      position: "Operations Coordinator",
      department: "Operations",
      experience: "4+ years",
      expertise: "Vessel Scheduling, Port Coordination, Logistics Support",
      email: "nina@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Budi Santoso",
      position: "Technical Assistant",
      department: "Technical",
      experience: "6+ years",
      expertise: "Technical Documentation, Maintenance Planning",
      email: "budi.s@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Rina Wijaya",
      position: "Documentation Officer",
      department: "Administration",
      experience: "3+ years",
      expertise: "Document Processing, Record Keeping, Compliance Support",
      email: "rina@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Ahmad Hidayat",
      position: "Finance Officer",
      department: "Finance",
      experience: "5+ years",
      expertise: "Accounting, Financial Reporting, Expense Management",
      email: "ahmad.h@kamandanujayasamudera.com",
      level: "Staff",
    },
    {
      name: "Lisa Permata",
      position: "Marketing Assistant",
      department: "Business Development",
      experience: "2+ years",
      expertise: "Content Creation, Social Media, Client Communication",
      email: "lisa@kamandanujayasamudera.com",
      level: "Staff",
    },
  ];
  const clients = [
  {
    name: "PT Pelni (Persero)",
    type: "Shipping Company",
    logo: "/clients/pelni.png",
  },
  {
    name: "PT Pertamina Trans Kontinental",
    type: "Offshore & Marine Services",
    logo: "/clients/pertamina.png",
  },
  {
    name: "Maersk Line",
    type: "Global Container Shipping",
    logo: "/clients/maersk.png",
  },
  {
    name: "COSCO Shipping",
    type: "International Shipping",
    logo: "/clients/cosco.png",
  },
  {
    name: "Evergreen Marine",
    type: "Container Transportation",
    logo: "/clients/evergreen.png",
  },
  {
    name: "NYK Line",
    type: "Logistics & Shipping",
    logo: "/clients/nyk.png",
  },
];


  return (
    <section className="py-20 bg-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Our Professional Team & Onboard Crew
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced maritime professionals and certified seafarers serving our fleet
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4" />
        </div>

        {/* Onboard Crew */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-8 flex items-center">
            <Navigation className="h-8 w-8 mr-3 text-blue-500" />
            Currently Onboard Crew
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardCrew.map((crew, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden ${
                  isVisible ? "scale-in" : "opacity-0"
                } stagger-${index + 1}`}
              >
                <div className="relative">
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={crew.avatar}
                      alt={`${crew.name} - ${crew.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center shadow">
                      <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                      {crew.status}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-lg text-[#0A2540] mb-1">{crew.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{crew.position}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center">
                      <Ship className="h-3 w-3 mr-2 text-gray-400" />
                      {crew.vessel}
                    </p>
                    <p className="flex items-center">
                      <Compass className="h-3 w-3 mr-2 text-gray-400" />
                      Next: {crew.nextPort}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Team - Restructured by Hierarchy */}
        <div>
          <h3 className="text-2xl font-bold text-[#0A2540] mb-2 flex items-center">
            <Building className="h-8 w-8 mr-3 text-blue-500" />
            Office Team & Management
          </h3>
          <p className="text-gray-600 mb-12 ml-11">Organizational structure and leadership team</p>

          {/* OWNER */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2">👑</span>
                COMPANY OWNER
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              {owner.map((member, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105 p-8 relative overflow-hidden ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 1}`}
                >
                  {/* Owner Badge */}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {member.level}
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6 shadow-xl ring-4 ring-purple-200">
                      <Briefcase className="h-14 w-14 text-white" />
                    </div>
                    
                    <h4 className="font-bold text-2xl text-[#0A2540] mb-2">{member.name}</h4>
                    <p className="text-purple-700 font-bold text-lg mb-2">{member.position}</p>
                    <p className="text-purple-600 text-sm font-semibold mb-4">{member.department}</p>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-4"></div>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.expertise}</p>
                    
                    <div className="bg-white/60 rounded-lg p-3 mb-4 w-full">
                      <p className="text-xs text-gray-600">
                        <span className="font-bold text-purple-700">Experience:</span> {member.experience}
                      </p>
                    </div>

                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-purple-600 hover:text-purple-800 flex items-center font-semibold transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Contact
                      </a>
                      <span className="text-purple-300">|</span>
                      <button className="text-purple-600 hover:text-purple-800 flex items-center font-semibold transition-colors bg-none border-none cursor-pointer p-0">
                        <Globe className="h-4 w-4 mr-1" />
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TOP MANAGEMENT - C-Level Executives */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2">👔</span>
                TOP MANAGEMENT - EXECUTIVE BOARD
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {topManagement.map((member, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 hover:scale-105 p-8 relative overflow-hidden ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 1}`}
                >
                  {/* Executive Badge */}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {member.level}
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mb-6 shadow-xl ring-4 ring-amber-200">
                      <Briefcase className="h-14 w-14 text-white" />
                    </div>
                    
                    <h4 className="font-bold text-2xl text-[#0A2540] mb-2">{member.name}</h4>
                    <p className="text-amber-700 font-bold text-lg mb-2">{member.position}</p>
                    <p className="text-amber-600 text-sm font-semibold mb-4">{member.department}</p>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent my-4"></div>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.expertise}</p>
                    
                    <div className="bg-white/60 rounded-lg p-3 mb-4 w-full">
                      <p className="text-xs text-gray-600">
                        <span className="font-bold text-amber-700">Experience:</span> {member.experience}
                      </p>
                    </div>

                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-amber-600 hover:text-amber-800 flex items-center font-semibold transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Contact
                      </a>
                      <span className="text-amber-300">|</span>
                      <button className="text-amber-600 hover:text-amber-800 flex items-center font-semibold transition-colors bg-none border-none cursor-pointer p-0">
                        <Globe className="h-4 w-4 mr-1" />
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE MANAGEMENT - Managers */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2">💼</span>
                MIDDLE MANAGEMENT - DEPARTMENT HEADS
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {middleManagement.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 border-blue-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-500 hover:scale-105 p-6 ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 3}`}
                >
                  {/* Manager Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                      {member.level}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-blue-200">
                      <Briefcase className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-[#0A2540] mb-1">{member.name}</h4>
                      <p className="text-blue-700 font-bold text-sm mb-1">{member.position}</p>
                      <p className="text-blue-600 text-xs mb-2 font-semibold">{member.department}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">{member.expertise}</p>
                    
                    <div className="bg-blue-50 rounded-lg p-2 mb-3">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold text-blue-700">Experience:</span> {member.experience}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 text-xs">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center font-semibold transition-colors"
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                      <span className="text-gray-300">|</span>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center font-semibold transition-colors bg-none border-none cursor-pointer p-0">
                        <Globe className="h-3 w-3 mr-1" />
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STAFF MEMBERS */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                <span className="mr-2">👥</span>
                STAFF MEMBERS
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffMembers.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 border-green-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-green-400 transition-all duration-500 hover:scale-105 p-6 ${
                    isVisible ? "scale-in" : "opacity-0"
                  } stagger-${index + 4}`}
                >
                  {/* Staff Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      {member.level}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-green-200">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-[#0A2540] mb-1">{member.name}</h4>
                      <p className="text-green-700 font-bold text-sm mb-1">{member.position}</p>
                      <p className="text-green-600 text-xs mb-2 font-semibold">{member.department}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">{member.expertise}</p>
                    
                    <div className="bg-green-50 rounded-lg p-2 mb-3">
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold text-green-700">Experience:</span> {member.experience}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 text-xs">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-green-600 hover:text-green-800 flex items-center font-semibold transition-colors"
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                      <span className="text-gray-300">|</span>
                      <button className="text-green-600 hover:text-green-800 flex items-center font-semibold transition-colors bg-none border-none cursor-pointer p-0">
                        <Globe className="h-3 w-3 mr-1" />
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OUR CLIENTS */}
<div className="mb-20">
  <h3 className="text-2xl font-bold text-[#0A2540] mb-2 flex items-center">
    <Users className="h-8 w-8 mr-3 text-blue-500" />
    Our Valued Clients
  </h3>
  <p className="text-gray-600 mb-12 ml-11">
    Trusted by national and international maritime partners
  </p>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {clients.map((client, index) => (
      <div
        key={index}
        className={`bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 p-6 flex flex-col items-center justify-center text-center ${
          isVisible ? "scale-in" : "opacity-0"
        } stagger-${index + 1}`}
      >
        <div className="w-full h-20 flex items-center justify-center mb-4">
          <img
            src={client.logo}
            alt={client.name}
            className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        <h4 className="font-semibold text-sm text-[#0A2540]">
          {client.name}
        </h4>
        <p className="text-xs text-gray-500 mt-1">
          {client.type}
        </p>
      </div>
    ))}
  </div>
</div>


          {/* Organization Info */}
          <div className={`mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 ${isVisible ? "slide-in-bottom" : "opacity-0"} stagger-4`}>
            <div className="text-center max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-[#0A2540] mb-4">
                Our Organizational Structure
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team is structured with clear hierarchy and responsibilities to ensure efficient operations and excellent service delivery. From executive leadership to specialized departments, every member plays a crucial role in our success.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-purple-600 mb-1">1</div>
                  <div className="text-gray-600">Owner</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-amber-600 mb-1">2</div>
                  <div className="text-gray-600">C-Level Executives</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
                  <div className="text-gray-600">Department Heads</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-green-600 mb-1">6</div>
                  <div className="text-gray-600">Staff Members</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-red-600 mb-1">500+</div>
                  <div className="text-gray-600">Seafarers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slide-in-bottom {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .slide-in-bottom { animation: slide-in-bottom 0.8s ease-out forwards; }
          .scale-in { animation: scale-in 0.8s ease-out forwards; }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
        `}
      </style>
    </section>
  );
};

export default Team;
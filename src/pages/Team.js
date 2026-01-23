import React, { useState, useEffect } from "react";
import { Navigation, Building, Ship, Compass, Mail, Globe, Briefcase } from "lucide-react";
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

  const teamMembers = [
    {
      name: "Capt. Hendra Kusuma",
      position: "Managing Director",
      department: "Management",
      experience: "20+ years",
      expertise: "Ship Management, Maritime Operations",
      email: "hendra@kamandanujayasamudera.com",
    },
    {
      name: "Ir. Siti Nurhaliza",
      position: "Technical Director",
      department: "Technical",
      experience: "18+ years",
      expertise: "Vessel Maintenance, Naval Architecture",
      email: "siti@kamandanujayasamudera.com",
    },
    {
      name: "Ahmad Fauzi",
      position: "Crew Manager",
      department: "Human Resources",
      experience: "15+ years",
      expertise: "Crew Recruitment, Training",
      email: "ahmad@kamandanujayasamudera.com",
    },
    {
      name: "Maya Putri",
      position: "Operations Manager",
      department: "Operations",
      experience: "12+ years",
      expertise: "Vessel Operations, Logistics",
      email: "maya@kamandanujayasamudera.com",
    },
    {
      name: "Capt. Budi Hartono",
      position: "Marine Superintendent",
      department: "Technical",
      experience: "25+ years",
      expertise: "Marine Safety, Inspections",
      email: "budi@kamandanujayasamudera.com",
    },
    {
      name: "Diana Susanti",
      position: "Documentation Manager",
      department: "Administration",
      experience: "10+ years",
      expertise: "Maritime Documentation, Compliance",
      email: "diana@kamandanujayasamudera.com",
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

        {/* Office Team */}
        <div>
          <h3 className="text-2xl font-bold text-[#0A2540] mb-8 flex items-center">
            <Building className="h-8 w-8 mr-3 text-blue-500" />
            Office Team & Management
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 p-6 ${
                  isVisible ? "scale-in" : "opacity-0"
                } stagger-${index + 1}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-[#0A2540] mb-1">{member.name}</h4>
                    <p className="text-blue-600 font-semibold text-sm mb-1">{member.position}</p>
                    <p className="text-gray-500 text-xs mb-2">{member.department}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                    <div className="flex items-center space-x-3 text-xs">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-500 hover:text-blue-700 flex items-center"
                      >
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                      <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
                        <Globe className="h-3 w-3 mr-1" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </p>
                </div>
              </div>
            ))}
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
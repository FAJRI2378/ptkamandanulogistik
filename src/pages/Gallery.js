// src/pages/Gallery.jsx
import React, { useEffect, useState } from "react";
import { Camera, Ship, Users, Handshake, Heart, ArrowRight, MapPin } from "lucide-react";
import Seo from "../components/Seo";

// IMPORT SEMUA GAMBAR
import g1 from "../img/g1.jpg";
import g2 from "../img/g2.jpg";
import g3 from "../img/g3.jpg";
import g4 from "../img/g4.jpg";
import g5 from "../img/g5.jpg";
import g6 from "../img/g6.jpg";
import g7 from "../img/g7.jpg";
import g8 from "../img/g8.jpg";
import g9 from "../img/g9.jpg";
import g10 from "../img/g10.jpg";
import g11 from "../img/g11.jpg";
import g12 from "../img/g12.jpg";
import g13 from "../img/g13.jpg";
import g14 from "../img/g14.jpg";
import g15 from "../img/g15.jpg";
import g16 from "../img/g16.jpg";
import g17 from "../img/g17.jpg";
import backgroundImageHeader from "../img/gh.png";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: "Onboard Crew & Operations",
      id: "onboard",
      icon: <Ship className="text-blue-600" size={24} />,
      items: [
        { id: 6, img: g6, caption: "Deck Maintenance Procedures", sub: "Regular maintenance by our skilled deck department." },
        { id: 7, img: g7, caption: "Bridge Navigation Watch", sub: "Ensuring safety and precision during vessel transit." },
        { id: 8, img: g8, caption: "Engine Room Inspection", sub: "Routine checks on propulsion systems and auxiliary machinery." },
        { id: 9, img: g9, caption: "Safety Drill Operations", sub: "Maintaining high standards of emergency preparedness." },
        { id: 10, img: g10, caption: "Vessel Cargo Monitoring", sub: "Professional oversight of cargo handling and stability." },
      ]
    },
    {
      title: "Crew Briefing & Training",
      id: "briefing",
      icon: <Users className="text-blue-600" size={24} />,
      items: [
        { id: 1, img: g1, caption: "Handling Crew Dispute Resolution", sub: "Professional mediation and legal compliance handling." },
        { id: 5, img: g5, caption: "Pre-Departure Briefing", sub: "Final instruction session before crew deployment." },
        { id: 12, img: g12, caption: "Handover of SIUKAK Documentation", sub: "Official certification for maritime human resources." },
      ]
    },
    {
      title: "Principal Visits & Relations",
      id: "principal",
      icon: <Handshake className="text-blue-600" size={24} />,
      items: [
        { id: 2, img: g2, caption: "Headquarters Facility Tour", sub: "Showcasing our management infrastructure to partners." },
        { id: 3, img: g3, caption: "Strategic Quarterly Meeting", sub: "Discussing fleet performance and future crew planning." },
        { id: 4, img: g4, caption: "Principal Office Visit", sub: "Strengthening bilateral cooperation with vessel owners." },
        { id: 13, img: g13, caption: "Operational Synergy Discussion", sub: "Optimizing manning solutions for global shipping." },
        { id: 14, img: g14, caption: "Executive Site Visit", sub: "On-site evaluation of crew management operations." },
        { id: 15, img: g15, caption: "Annual Audit - Sea Transportation", sub: "Compliance audit by the Directorate General of Sea Transportation." },
        { id: 16, img: g16, caption: "Technical Management Review", sub: "Reviewing vessel maintenance and crew performance logs." },
        { id: 17, img: g17, caption: "Digital Manning Presentation", sub: "Introducing our new automated crew tracking system." },
      ]
    },
    {
      title: "Kegiatan Sosial",
      id: "sosial",
      icon: <Heart className="text-red-500" size={24} />,
      items: [
        { id: 11, img: g11, caption: "Kegiatan Sosial Santunan Anak Yatim", sub: "Support at Yayasan Mufakat Al Banna" },
      ]
    }
  ];

  return (
    <>
      <Seo title="Operational Gallery | PT Kamandanu Jaya Samudera" />

      <section className="min-h-screen bg-white">
        <header className="relative pt-20 pb-20 bg-[#0A2540] text-center">
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: `url(${backgroundImageHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative z-10 px-6">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Gallery Log</h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4" />
            <p className="text-blue-200/80 max-w-xl mx-auto italic">Visual Journey and Operational Documentation</p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {sections.map((section, sIdx) => (
            <div key={section.id} className={`mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${sIdx * 150}ms` }}>
              
              {/* Header Kategori */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2.5 bg-blue-50 rounded-xl">{section.icon}</div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] whitespace-nowrap tracking-tight">
                  {section.title}
                </h2>
                <div className="w-full h-[1px] bg-gray-200 mt-1"></div>
              </div>

              {/* Items List */}
              <div className="flex flex-col border-t border-gray-100">
                {section.items.map((item) => (
                  <div key={item.id} className="group flex flex-col md:flex-row items-center gap-8 py-8 border-b border-gray-100 hover:bg-slate-50 transition-all duration-300 px-4 -mx-4 rounded-2xl">
                    
                    {/* Image Container */}
                    <div className="w-full md:w-64 h-40 flex-shrink-0 overflow-hidden rounded-xl shadow-sm bg-gray-100 border border-gray-200/50">
                      <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Description Container */}
                    <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {item.caption}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500">
                          <p className="text-sm font-medium leading-relaxed italic">
                            {item.sub}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 pt-2">
                           <MapPin size={12} className="text-blue-500" />
                           <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">PT Kamandanu Jaya Samudera</span>
                        </div>
                      </div>

                      <a 
                        href={item.img} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-[#0A2540] hover:text-white hover:border-[#0A2540] transition-all"
                      >
                        VIEW FULL <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
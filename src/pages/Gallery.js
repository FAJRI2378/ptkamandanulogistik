// src/pages/Gallery.jsx
import React, { useEffect, useState } from "react";
import { Ship, Users, Handshake, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import Seo from "../components/Seo";

// IMPORT GAMBAR
import g1 from "../img/g1.webp";
import g2 from "../img/g2.webp";
import g3 from "../img/g3.webp";
import g4 from "../img/g4.webp";
import g5 from "../img/g5.webp";
import g6 from "../img/g6.webp";
import g7 from "../img/g7.webp";
import g8 from "../img/g8.webp";
import g9 from "../img/g9.webp";
import g10 from "../img/g10.webp";
import g11 from "../img/g11.webp";
import g12 from "../img/g12.webp";
import g13 from "../img/g13.webp";
import g14 from "../img/g14.webp";
import g15 from "../img/g15.webp";
import g16 from "../img/g16.webp";
import g17 from "../img/g17.webp";
import backgroundImageHeader from "../img/hg.jpg";
import g18 from "../img/baru.webp";
import g19 from "../img/baru2.webp";
import g20 from "../img/baru3.webp";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: "Onboard Crew",
      id: "onboard",
      icon: <Ship size={18} />,
      items: [
        { id: 6, img: g6, caption: "Crew Departure Preparation", sub: "Our crew preparing for deployment at the airport before joining the vessel." },
        { id: 7, img: g7, caption: "Crew Departure Preparation", sub: "Our crew preparing for deployment at the airport before joining the vessel." },
        { id: 8, img: g8, caption: "Crew Departure Preparation", sub: "Our crew preparing for deployment at the airport before joining the vessel." },
        { id: 9, img: g9, caption: "Crew Departure Preparation", sub: "Our crew preparing for deployment at the airport before joining the vessel." },
        { id: 10, img: g10, caption: "Crew Departure Preparation", sub: "Our crew preparing for deployment at the airport before joining the vessel." },
        { id: 5, img: g5, caption: "Onboard Crew Activity", sub: "Our professional crew performing duties onboard the vessel." },
        { id: 18, img: g18, caption: "Onboard Crew Activity", sub: "Our professional crew performing duties onboard the vessel." },
        { id: 19, img: g19, caption: "Onboard Crew Activity", sub: "Our professional crew performing duties onboard the vessel." },
        { id: 20, img: g20, caption: "Onboard Crew Activity", sub: "Our professional crew performing duties onboard the vessel." },
      ]
    },
    {
      title: "Training",
      id: "training",
      icon: <Users size={18} />,
      items: [
        { id: 1, img: g1, caption: "Handling Crew Dispute Resolution", sub: "Professional mediation and legal compliance handling." },
        { id: 12, img: g12, caption: "Handover of SIUKAK Documentation", sub: "Official certification." },
      ]
    },
    {
      title: "Principal Visits",
      id: "principal",
      icon: <Handshake size={18} />,
      items: [
        { id: 2, img: g2, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
        { id: 3, img: g3, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
        { id: 4, img: g4, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
        { id: 13, img: g13, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
        { id: 14, img: g14, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
        { id: 15, img: g15, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
        { id: 16, img: g16, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
        { id: 17, img: g17, caption: "Principal Meeting Session", sub: "Official meeting with principal to strengthen maritime collaboration and partnership." },
      ]
    },
    {
      title: "Social",
      id: "social",
      icon: <Heart size={18} />,
      items: [
        { id: 11, img: g11, caption: "Social Program", sub: "Supporting orphaned children at Mufakat Al Banna Foundation." },
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Mengimbangi navbar sticky agar judul tidak tertutup
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Seo
        title="Operational Gallery | PT Kamandanu Jaya Samudera"
        description="Visual documentation of PT Kamandanu Jaya Samudera's maritime operations."
        url="/gallery"
      />

      <main className="bg-[#F8FAFC] min-h-screen text-[#0A2540]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        
        {/* HEADER SECTION - TETAP SAMA DENGAN LICENSE */}
        <section className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                <ShieldCheck size={14} /> Operational Excellence
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Gallery <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Log</span>
              </h1>
              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed italic">
                A visual journey through our operational documentation and maritime activities.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY NAVBAR - STICKY */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-start md:justify-center gap-2 md:gap-8 overflow-x-auto py-4 no-scrollbar">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-tight whitespace-nowrap transition-all hover:bg-blue-50 hover:text-blue-600 text-slate-500"
                >
                  <span className="text-blue-500">{section.icon}</span>
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div className="max-w-7xl mx-auto px-4 pb-24 relative z-20 mt-12">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl p-6 md:p-16 border border-gray-100">
            {sections.map((section, sIdx) => (
              <div 
                key={section.id} 
                id={section.id}
                className={`mb-20 md:mb-32 last:mb-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
                style={{ transitionDelay: `${sIdx * 100}ms` }}
              >
                {/* Header Kategori */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-blue-50 rounded-2xl shrink-0 text-blue-600">
                    {React.cloneElement(section.icon, { size: 28 })}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-[#0A2540] tracking-tight uppercase">
                    {section.title}
                  </h2>
                  <div className="hidden md:block w-full h-[2px] bg-slate-50 mt-1"></div>
                </div>

                {/* Items List */}
                <div className="grid grid-cols-1 gap-8">
                  {section.items.map((item) => (
                    <div 
                      key={item.id} 
                      className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-4 md:p-6 hover:bg-slate-50/80 transition-all duration-500 rounded-[2rem] border border-transparent hover:border-slate-100"
                    >
                      {/* Image Container */}
                      <div className="w-full md:w-80 aspect-video md:h-48 flex-shrink-0 overflow-hidden rounded-3xl shadow-lg bg-gray-100 border border-white">
                        <img 
                          src={item.img} 
                          alt={item.caption} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                          loading="lazy" 
                        />
                      </div>

                      {/* Description Container */}
                      <div className="flex-grow space-y-4 w-full">
                        <div>
                          <h3 className="text-xl md:text-2xl font-black text-[#0A2540] group-hover:text-blue-600 transition-colors uppercase leading-tight">
                            {item.caption}
                          </h3>
                          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed italic mt-2">
                            "{item.sub}"
                          </p>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                          <div className="flex items-center gap-2">
                      
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                               Kamandanu Jaya Samudera
                            </span>
                          </div>
                          
                          <a
                            href={item.img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#0A2540] text-[11px] font-black text-white hover:bg-blue-600 transition-all shadow-md active:scale-95"
                          >
                            OPEN IMAGE <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Gallery;
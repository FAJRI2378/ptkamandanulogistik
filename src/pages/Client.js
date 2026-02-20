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
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

// Import Scroller Logos (Ganti path sesuai struktur folder Anda)
import l1 from "../img/lclient1.jpg";
import l2 from "../img/lclient2.jpg";
import l3 from "../img/lclient3.png";
import l4 from "../img/lclient4.png";
import l5 from "../img/lclient5.png";
import l6 from "../img/lclient6.jpg";
import l7 from "../img/lclient7.jpg";
import l8 from "../img/lclient8.png";
import l9 from "../img/lclient9.png";
import bp3ip from "../img/bp3ip.png";
import pip from "../img/pip.png";

// Import MoU Partner Logos
import stipJakarta from "../img/logo_stip.png";
import poltekpelBanten from "../img/logo_poli.png";

// Import Documentation Images
import stipDoc1 from "../img/stip_ttd.jpg";
import bantenDoc1 from "../img/ttd_poli.jpg";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    document.title = "Strategic Partnerships & Global Clients | PT Kamandanu Jaya Samudera";
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollerLogos = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

  const mouPartners = [
    {
      name: "STIP Jakarta",
      fullName: "Sekolah Tinggi Ilmu Pelayaran Jakarta",
      type: "Academic Maritime",
      description: "Indonesia's premier maritime academy. Our collaboration focuses on producing elite STCW-compliant officers for international tankers and container vessels.",
      region: "Jakarta, Indonesia",
      logo: stipJakarta,
      website: "https://www.stipjakarta.ac.id",
      documentation: stipDoc1,
      docTitle: "Strategic MoU Signing",
      highlights: ["Senior Deck & Engine Programs", "Competency Upgrading", "Cadet Recruitment Pipeline"],
    },
    {
      name: "Poltekpel Banten",
      fullName: "Politeknik Pelayaran Banten",
      type: "Academic Maritime",
      description: "Center of excellence for maritime vocational training. Partnering to develop industry-ready ratings and support crew for global shipping fleets.",
      region: "Banten, Indonesia",
      logo: poltekpelBanten,
      website: "https://poltekpel-banten.ac.id",
      documentation: bantenDoc1,
      docTitle: "Institutional Partnership",
      highlights: ["Rating Certification Support", "Maritime Safety Training", "Industry Placement"],
    },
     {
      name: "BP3IP Jakarta",
      fullName: "Sekolah Tinggi Ilmu Pelayaran Jakarta",
      type: "Academic Maritime",
      description: "Indonesia's premier maritime academy. Our collaboration focuses on producing elite STCW-compliant officers for international tankers and container vessels.",
      region: "Jakarta, Indonesia",
      logo: bp3ip,
      website: "https://www.stipjakarta.ac.id",
      documentation: bp3ip,
      docTitle: "Strategic MoU Signing",
      highlights: ["Senior Deck & Engine Programs", "Competency Upgrading", "Cadet Recruitment Pipeline"],
    },
     {
      name: "PIP Makassar",
      fullName: "Politeknik Pelayaran Indonesia Makassar",
      type: "Academic Maritime",
      description: "Center of excellence for maritime vocational training in South Sulawesi. Partnering to develop industry-ready ratings and support crew for global shipping fleets.",
      region: "Makassar, Indonesia",
      logo: pip,
      website: "https://www.stipjakarta.ac.id",
      documentation: stipDoc1,
      docTitle: "Strategic MoU Signing",
      highlights: ["Senior Deck & Engine Programs", "Competency Upgrading", "Cadet Recruitment Pipeline"],
    },
  ];

  return (
    <article className="bg-[#F8FAFC] min-h-screen">
      {/* ─── SEO ENHANCEMENT ─── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PT Kamandanu Jaya Samudera",
          "url": "https://ptkamandanujayasamudera.com",
          "logo": "https://ptkamandanujayasamudera.com/logo.png",
          "brand": "Kamandanu Crewing",
          "memberOf": [
            { "@type": "EducationalOrganization", "name": "STIP Jakarta" },
            { "@type": "EducationalOrganization", "name": "Poltekpel Banten" }
          ]
        })}
      </script>

      {/* ─── HERO HEADER ─── */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-xs font-black uppercase tracking-[0.2em] mb-8">
              <ShieldCheck size={16} /> Verified Global Network
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Partnerships <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Driven by Quality.</span>
            </h1>
            <p className="text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed font-medium">
              We leverage strategic alliances with Indonesia's top maritime academies to ensure our clients receive seafarers of the highest technical caliber.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        
        {/* ─── MOU PARTNERS BENTO GRID ─── */}
        <section className="grid lg:grid-cols-2 gap-8 mb-32">
          {mouPartners.map((partner, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-gray-100 group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-gray-100 group-hover:bg-blue-50 transition-colors">
                    <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="flex-1">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{partner.type}</span>
                    <h2 className="text-3xl font-black text-[#0A2540] mt-1 mb-3">{partner.name}</h2>
                    <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-400">
                      <span className="flex items-center gap-1"><MapPin size={14}/> {partner.region}</span>
                      <a href={partner.website} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-500 hover:underline">
                        Official Site <ArrowUpRight size={14}/>
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                  {partner.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-black text-[#0A2540] text-sm uppercase tracking-widest flex items-center gap-2">
                      <CheckCircle size={18} className="text-emerald-500" /> Collaboration
                    </h3>
                    {partner.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {h}
                      </div>
                    ))}
                  </div>
                  
                  <div 
                    className="relative rounded-3xl overflow-hidden cursor-pointer group/img h-48"
                    onClick={() => setSelectedPartner(partner)}
                  >
                    <img src={partner.documentation} alt="MoU Event" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                       <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white"><ImageIcon size={24}/></div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-xs bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit">View Document</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ─── CLIENT SCROLLER ─── */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0A2540] mb-4">World-Class Portfolios</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Trusted by leading ship owners and operators across the global maritime industry.</p>
          </div>

          <div className="relative group overflow-hidden py-10">
            {/* Smooth Edge Mask */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee hover:pause whitespace-nowrap gap-16 items-center">
              {[...scrollerLogos, ...scrollerLogos].map((logo, i) => (
               <div
  key={i}
  className="w-40 flex-shrink-0 transition-all duration-500 hover:scale-110"
>
  <img
    src={logo}
    alt="Maritime Client"
    className="h-16 w-full object-contain drop-shadow-sm"
  />
</div>

              ))}
            </div>
          </div>
        </section>


      </div>

      {/* ─── ENHANCED MODAL ─── */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-all duration-500" onClick={() => setSelectedPartner(null)}>
          <div className="relative max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <button className="absolute top-6 right-6 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black transition-all" onClick={() => setSelectedPartner(null)}>
              <X size={24}/>
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-[400px] md:h-full">
                <img src={selectedPartner.documentation} alt="Document" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-50">
                <span className="text-blue-600 font-black text-xs tracking-widest uppercase mb-2">{selectedPartner.name}</span>
                <h3 className="text-3xl font-black text-[#0A2540] mb-6">{selectedPartner.docTitle}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our formal agreement ensures that every seafarer under our management undergoes continuous professional development aligned with the latest IMO regulations.
                </p>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-2xl"><ShieldCheck/></div>
                  <p className="text-sm font-bold text-gray-700">Legally Verified & Internationally Recognized Documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause { animation-play-state: paused; }
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        article { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
    </article>
  );
};

export default Clients;
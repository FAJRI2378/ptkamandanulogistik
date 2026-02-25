import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  MapPin,
  Image as ImageIcon,
  X,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import backgroundImageHeader from "../img/hp.webp";
// Import Scroller Logos
import l1 from "../img/lclient1.webp";
import l2 from "../img/lclient2.webp";
import l3 from "../img/lclient3.webp";
import l4 from "../img/lclient4.webp";
import l5 from "../img/lclient5.webp";
import l6 from "../img/lclient6.webp";
import l7 from "../img/lclient7.webp";
import l8 from "../img/lclient8.webp";
import l9 from "../img/lclient9.webp";
import l10 from "../img/yuhua.webp";

// Import MoU Partner Logos
import stipJakarta from "../img/logo_stip.webp";
import poltekpelBanten from "../img/logo_poli.webp";
import bp3ip from "../img/bp3ip.webp";
import pip from "../img/pip.webp";
import ht from "../img/hangtuah.webp";
import smkp from "../img/smkp.webp";

// Import Documentation Images
import stipDoc1 from "../img/stip_ttd.webp";
import bantenDoc1 from "../img/ttd_poli.webp";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    document.title = "Strategic Partnerships & Global Clients | PT Kamandanu Jaya Samudera";
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const scrollerLogos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];
  
  const mouPartners = [
    {
      name: "STIP Jakarta",
      fullName: "Jakarta Maritime Higher Education Institute",
      type: "Academic Maritime",
      description: "Indonesia's premier maritime academy. Our collaboration focuses on producing elite STCW-compliant officers for international vessels.",
      region: "Jakarta, Indonesia",
      logo: stipJakarta,
      website: "https://www.stipjakarta.ac.id",
      documentation: stipDoc1,
      docTitle: "Strategic MoU Signing",
      highlights: [
        "Maritime Training & Certification Programs",
        "Seafarer Certificate Revalidation",
        "Fresh Graduate Recruitment",
        "Cadet Selection & Placement",
        "Industry Expert Speaker & Instructor Collaboration",
        "COC Upgrading Programs"
      ],
    },
    {
      name: "Poltekpel Banten",
      fullName: "Banten Maritime Polytechnic",
      type: "Academic Maritime",
      description: "Center of excellence for maritime vocational training. Partnering to develop industry-ready ratings and support crew for global shipping fleets.",
      region: "Banten, Indonesia",
      logo: poltekpelBanten,
      website: "https://poltekpel-banten.ac.id",
      documentation: bantenDoc1,
      docTitle: "Institutional Partnership",
      highlights: [
        "Onboard Training Collaboration",
        "Maritime Safety Training",
        "Industry Placement Programs",
        "Seafarer Certificate Revalidation",
        "Maritime Seminars"
      ],
    },
    {
      name: "BP3IP Jakarta",
      fullName: "Center for Maritime Education Refresher and Advanced Training",
      type: "Academic Maritime",
      description: "Advanced maritime training institution focused on professional skill enhancement and certification upgrading.",
      region: "Jakarta, Indonesia",
      logo: bp3ip,
      website: "https://bp3ip.ac.id/",
      documentation: null,
      highlights: [
        "Onboard Training Collaboration",
        "Maritime Safety Training",
        "Industry Placement Programs",
        "Seafarer Certificate Revalidation",
        "Medical Check-Up Services",
        "Certificate Endorsement Upgrading",
        "Certificate Endorsement Updating",
        "Cadet Selection & Placement"
      ],
    },
    {
      name: "PIP Makassar",
      fullName: "Indonesian Maritime Polytechnic Makassar",
      type: "Academic Maritime",
      description: "Center of excellence for maritime vocational training. Partnering to develop globally competitive maritime professionals.",
      region: "Makassar, Indonesia",
      logo: pip,
      website: "https://pipmakassar.ac.id/",
      documentation: null,
      highlights: [
        "Onboard Training Collaboration",
        "Maritime Safety Training",
        "Industry Placement Programs",
        "Seafarer Certificate Revalidation",
        "Medical Check-Up Services",
        "Certificate Endorsement Upgrading",
        "Certificate Endorsement Updating",
        "Cadet Selection & Placement"
      ],
    },
    {
      name: "SMKS Hang Tuah Maritime Jakarta",
      fullName: "SMKS Hang Tuah Maritime Jakarta",
      type: "Vocational Maritime School",
      description: "Specializing in early-stage maritime education. Supporting the development of young maritime professionals through internship and career placement programs.",
      region: "Jakarta, Indonesia",
      logo: ht,
      website: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/C0A3BAE0-016F-412F-9F91-AB8FAB6EAE30",
      documentation: null,
      highlights: [
        "Cadet Selection & Placement",
        "Fresh Graduate Recruitment",
        "Industry Expert Speaker & Instructor Collaboration"
      ],
    },
    {
      name: "SMK Pelayaran Jakarta",
      fullName: "Jakarta Maritime Vocational School",
      type: "Vocational Maritime School",
      description: "Focusing on building a strong foundation for future seafarers and bridging the gap between secondary maritime education and global industry demands.",
      region: "Jakarta, Indonesia",
      logo: smkp,
      website: "https://smkpelayaranjkt.sch.id/",
      documentation: null,
      highlights: [
        "Cadet Selection & Placement",
        "Fresh Graduate Recruitment",
        "Industry Expert Speaker & Instructor Collaboration"
      ],
    },
  ];

  return (
    <>
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

      {/* HEADER SECTION - IDENTIK DENGAN VERSI ATAS */}
      <section className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageHeader})` }}
        />

        {/* Overlay Gradient identical to About */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540] z-0" />

        <div className="relative z-10 text-center text-white">
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                <ShieldCheck size={14} /> Verified Global Network
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Partnerships{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Driven by Quality
                </span>
              </h1>
              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                We leverage strategic alliances with Indonesia's top maritime academies to ensure our clients receive seafarers of the highest technical caliber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY CONTENT - Padding & Margins aligned */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 pb-24 relative z-20">
        <section className="grid lg:grid-cols-2 gap-8 mb-32">
          {mouPartners.map((partner, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="p-8 md:p-12 h-full flex flex-col justify-center">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-gray-100 group-hover:bg-blue-50 transition-colors shrink-0">
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

                <p className={`text-gray-600 leading-relaxed text-lg ${partner.documentation ? 'mb-8' : 'mb-10'}`}>
                  {partner.description}
                </p>

                <div className={`grid ${partner.documentation ? 'md:grid-cols-2' : 'grid-cols-1'} gap-8`}>
                  <div className="space-y-4">
                    <h3 className="font-black text-[#0A2540] text-sm uppercase tracking-widest flex items-center gap-2">
                      <CheckCircle size={18} className="text-emerald-500" /> Collaboration
                    </h3>
                    <div className={`grid gap-3 ${partner.documentation ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                        {partner.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-slate-50/50 p-2 rounded-xl border border-transparent hover:border-blue-100 transition-all">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" /> 
                            <span className="leading-tight">{h}</span>
                        </div>
                        ))}
                    </div>
                  </div>
                  
                  {partner.documentation && (
                    <div 
                      className="relative rounded-3xl overflow-hidden cursor-pointer group/img h-48 self-end"
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* LOGO MARQUEE */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0A2540] mb-4">World-Class Portfolios</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Trusted by leading ship owners and operators across the global maritime industry.</p>
          </div>

          <div className="relative overflow-hidden py-12 space-y-10">
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
              {[...scrollerLogos, ...scrollerLogos].map((logo, i) => (
                <div key={`top-${i}`} className="w-40 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-700 hover:scale-110">
                  <img src={logo} alt={`Client ${i + 1}`} className="h-16 w-auto object-contain" />
                </div>
              ))}
            </div>

            <div className="flex animate-marquee-reverse whitespace-nowrap gap-16 items-center">
              {[...scrollerLogos, ...scrollerLogos].map((logo, i) => (
                <div key={`bottom-${i}`} className="w-40 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-700 hover:scale-110">
                  <img src={logo} alt={`Client ${i + 1}`} className="h-16 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MODAL DOCUMENTATION */}
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
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap");
        
        :global(body), :global(html) {
          font-family: "Plus Jakarta Sans", sans-serif;
          background-color: #F8FAFC;
        }

        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marqueeReverse 40s linear infinite; }
        .animate-scale-in { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes scaleIn { 
          from { opacity: 0; transform: scale(0.95); } 
          to { opacity: 1; transform: scale(1); } 
        }
      `}</style>
    </>
  );
};

export default Clients;
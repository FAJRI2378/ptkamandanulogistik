import React, { useState, useEffect, useRef } from "react";
import {
  Ship,
  Mail,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Quote,
  Calendar
} from "lucide-react";

// Import Assets
import onboard1 from "../img/onboard1.png";
import onboard2 from "../img/onboard2.png";
import onboard3 from "../img/onboard3.png";
import onboard4 from "../img/onboard4.png";
import onboard5 from "../img/onboard5.png";
import onboard6 from "../img/onboard6.png";
import onboard7 from "../img/onboard7.jpg";
import onboard8 from "../img/onboard8.jpg";
import capt from "../img/capt.png";
import headerBg from "../img/header.jpg";
import bv from "../img/bv.jpg"; 
import kp from "../img/kp.jpg";
import ke from "../img/ke.jpg";
// ─── DATA MANAGEMENT ────────────────────────────────────────────────────────

const managementTeam = {
  tier1: [
    {
      role: "Owner & Founder",
      name: "Mr. Makkama Patontonan",
      tenure: "Founded since 2010",
      education: "Master Mariner (ANT-I) - STIP Jakarta",
      specialty: "Global Strategic Manning & Maritime Law",
      wa: "6281234567890",
      email: "owner@kamandanujayasamudera.com",
      avatar: capt,
      quote: "Success in the maritime industry is built on the foundation of trust and unwavering integrity.",
    }
  ],
  tier2: [
    {
      role: "General Manager",
      name: "Vivi Savitri",
      tenure: "10 Years in PT KJS",
      education: "M.Sc in Marine Engineering - World Maritime University",
      specialty: "Operational Excellence & Technical Fleet Management",
      wa: "6281211112222",
      email: "gm@kamandanujayasamudera.com",
      avatar: bv,
      quote: "Efficiency is not just about speed; it's about precision and safety in every nautical mile.",
    }
  ],
  tier3: [
    {
      role: "Crewing ",
      name: "putri",
      tenure: "8 Years in PT KJS",
      education: "ANT-II - Politeknik Ilmu Pelayaran Semarang",
      specialty: "STCW 2010 Compliance & Quality Recruitment",
      wa: "6281233334444",
      email: "crewing.mgr@kamandanujayasamudera.com",
      avatar: kp,
      quote: "The strength of a ship lies not in its hull, but in the competency of its crew.",
    },
    {
      role: "Crewing",
      name: "echa",
      tenure: "5 Years in PT KJS",
      education: "B.A. in International Relations - Universitas Indonesia",
      specialty: "Global Deployment Logistics & Visa Specialist",
      wa: "6281255556666",
      email: "crewing1@kamandanujayasamudera.com",
      avatar: ke,
      quote: "Smooth seas do not make skillful sailors; meticulous preparation does.",
    }
  ]
};

const onboardCrew = [
  { position: "Master Mariner", vessel: "TANKER", status: "Onboard", nextPort: "CHINA", avatar: onboard1 },
  { position: "2nd Officer", vessel: "LCT", status: "Onboard", nextPort: "MALAYSIA", avatar: onboard2 },
  { position: "3rd Engineer", vessel: "BULK CARRIER", status: "Onboard", nextPort: "CHINA", avatar: onboard3 },
  { position: "1st Engineer", vessel: "VLCC", status: "Onboard", nextPort: "SINGAPORE", avatar: onboard4 },
  { position: "DECK CADET", vessel: "OIL TANKER", status: "Onboard", nextPort: "VIETNAM", avatar: onboard5 },
  { position: "OILER / WIPER", vessel: "LCT", status: "Onboard", nextPort: "CHINA", avatar: onboard6 },
  { position: "BOSUN", vessel: "GENERAL CARGO", status: "Onboard", nextPort: "CHINA", avatar: onboard7 },
  { position: "FITTER", vessel: "VLCC", status: "Onboard", nextPort: "CHINA", avatar: onboard8 },
];

// ─── HELPER COMPONENT: MODERN MEMBER CARD ───────────────────────────────────

const MemberCard = ({ member, tier }) => (
  <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
    <div className="flex flex-col lg:flex-row">
      {/* Profile Image */}
      <div className="lg:w-2/5 relative overflow-hidden h-72 lg:h-auto">
        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Profile Details */}
      <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between relative bg-white">
        <div className="absolute top-8 right-8 text-blue-50 opacity-10 group-hover:opacity-30 transition-opacity">
          <Quote size={80} />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-blue-200">
              {member.role}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
              <Calendar size={12} className="text-blue-500" /> {member.tenure}
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-black text-[#0A2540] mb-2 group-hover:text-blue-600 transition-colors">
            {member.name}
          </h3>

          <p className="text-gray-500 italic text-sm mb-6 leading-relaxed relative z-10">
            "{member.quote}"
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Education</p>
                <p className="text-xs font-bold text-gray-700">{member.education}</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex gap-3 pt-6 border-t border-gray-50">
          <a href={`https://wa.me/${member.wa}`} className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-2xl font-bold transition-all text-xs">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={`mailto:${member.email}`} className="p-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 rounded-2xl transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const crewRef = useRef(null);
  const itemsPerPage = 4;

  useEffect(() => {
    document.title = "Our Leadership | PT Kamandanu Jaya Samudera";
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 120);
  }, []);

  const totalPages = Math.ceil(onboardCrew.length / itemsPerPage);
  const currentCrew = onboardCrew.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const paginate = (page) => {
    setCurrentPage(page);
    crewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="bg-[#F8FAFC] min-h-screen pb-24 overflow-x-hidden">
      
      {/* ─── HERO SECTION ─── */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img src={headerBg} alt="Maritime Leadership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#071829]/90 backdrop-blur-[4px]" />
        </div>
        
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-5 py-2 rounded-full text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <ShieldCheck size={14} className="animate-pulse"/> Maritime Leadership
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
            The Pillars of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Excellence</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
            Guided by decades of experience and a commitment to professional integrity, our leadership ensures PT KJS remains at the forefront of the crewing industry.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        {/* ─── PYRAMID STRUCTURE ─── */}
        <section className="space-y-16">
          
          {/* Apex Tier */}
          <div className={`flex justify-center transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-full max-w-4xl relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="h-10 w-px bg-gradient-to-b from-transparent to-blue-600" />
              </div>
              <MemberCard member={managementTeam.tier1[0]} tier="apex" />
            </div>
          </div>

          {/* Middle Tier */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-full max-w-3xl">
              <MemberCard member={managementTeam.tier2[0]} tier="mid" />
            </div>
          </div>

          {/* Base Tier */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {managementTeam.tier3.map((m, i) => (
              <div key={i} className="flex flex-col">
                <MemberCard member={m} tier="base" />
              </div>
            ))}
          </div>

        </section>

        {/* ─── CREW REGISTRY ─── */}
        <section ref={crewRef} className="mt-40 scroll-mt-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="relative">
              <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">Fleet Manpower</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0A2540] tracking-tighter">ACTIVE <span className="text-blue-600">CREW</span></h2>
            </div>
            
            <div className="bg-white px-8 py-6 rounded-[2rem] shadow-xl border border-blue-50 flex items-center gap-6 group hover:border-blue-200 transition-colors">
               <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Ship size={24} />
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Currently Onboard</p>
                 <p className="text-2xl font-black text-gray-800">500+ <span className="text-sm font-bold text-blue-500 uppercase">Seafarers</span></p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {currentCrew.map((crew, idx) => (
              <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img src={crew.avatar} alt={crew.position} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6">
                    <p className="text-blue-400 text-[9px] font-black uppercase tracking-widest mb-1">{crew.position}</p>
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-white text-[10px] font-bold uppercase tracking-tight">{crew.status}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-gray-400 font-bold uppercase tracking-tighter">Vessel</span>
                      <span className="font-black text-gray-700">{crew.vessel}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-gray-400 font-bold uppercase tracking-tighter">Destination</span>
                      <span className="font-black text-blue-600 underline decoration-blue-100 underline-offset-4">{crew.nextPort}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-6">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="w-14 h-14 bg-white rounded-full border border-gray-100 flex items-center justify-center disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-gray-200/50">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => paginate(i + 1)} className={`w-12 h-12 rounded-2xl font-black text-sm transition-all ${currentPage === i+1 ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-gray-400 border border-gray-100 hover:border-blue-400"}`}>
                  {i + 1}
                </button>
              ))}
            </div>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="w-14 h-14 bg-white rounded-full border border-gray-100 flex items-center justify-center disabled:opacity-20 hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-gray-200/50">
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        article { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
    </article>
  );
};

export default Team;
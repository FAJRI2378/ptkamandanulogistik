import React, { useState, useEffect, useRef } from "react";
import {
  Ship,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Quote,
  Calendar,
  Anchor,
  Users
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
import teamPhoto from "../img/header.jpg"; // Ini foto tim yang ada di screenshot Anda
import bv from "../img/bv.jpg"; 
import kp from "../img/kp.jpg";
import kr from "../img/kr.jpg";
import kj from "../img/kj.jpg";
import be from "../img/be.jpg";
import bs from "../img/bs.jpg";
import bsi from "../img/bsi.jpg";

// ... Data managementTeam dan onboardCrew tetap sama seperti sebelumnya ...
const managementTeam = {
  tier1: [{ role: "Owner & Founder", name: "Mr. Makkama Patontonan", tenure: "Founded since 2010", education: "Master Mariner (ANT-I) - STIP Jakarta", wa: "6281234567890", avatar: capt, quote: "Success in the maritime industry is built on the foundation of trust and unwavering integrity." }],
  tier2: [{ role: "Crewing Manager", name: "Vivi Savitri, S.Pd M.Pd", tenure: "5 Years Experience", education: "Master of English Education - UIN Jakarta", wa: "6281211112222", avatar: bv, quote: "Success is built on consistency, discipline, and the courage to keep going." }],
  tier3: [
    { role: "Crewing", name: "Putri Naflah Tabitah Mth S.Pd.", tenure: "3 Years Experience", education: "PIP Semarang", wa: "6281233334444", avatar: kp, quote: "The strength of a ship lies in its crew." },
    { role: "Crewing", name: "Riska S.Pd", tenure: "3 Years Experience", education: "Universitas Indonesia", wa: "6281255556666", avatar: kr, quote: "Smooth seas do not make skillful sailors." },
    { role: "Crewing", name: "Jasmin B. Saijeng, S.Pd", tenure: "3 Years Experience", education: "Universitas Gadjah Mada", wa: "6281277778888", avatar: kj, quote: "Nothing is a Coincidence." }
  ],
  tier4: [
    { role: "Crewing Staff", name: "Rezha Afrida Yanti S.Tr.Pel", tenure: "1 Year Experience", education: "Politeknik Maritim Makassar", wa: "6281277778888", avatar: be, quote: "Stop when you're finished." },
    { role: "Crewing Staff", name: "Shinta Melati Sudarsono, S.M", tenure: "3 Years Experience", education: "Univ. 17 Agustus 1945", wa: "6281277778888", avatar: bs, quote: "Earn the best day of your life." },
    { role: "Crewing Staff", name: "Silmi Atma Ayu S.Pd", tenure: "1 Year Experience", education: "UIN Palopo", wa: "6281277778888", avatar: bsi, quote: "Success is the sum of small efforts." }
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

const MemberCard = ({ member, layout = "vertical" }) => (
  <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
    <div className={`flex flex-col ${layout === "horizontal" ? "lg:flex-row" : ""}`}>
      <div className={`${layout === "horizontal" ? "lg:w-2/5" : "w-full"} relative overflow-hidden h-72 lg:h-auto`}>
        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-60" />
      </div>
      <div className={`${layout === "horizontal" ? "lg:w-3/5" : "w-full"} p-8 flex flex-col justify-between relative bg-white`}>
        <div className="absolute top-4 right-6 text-blue-500/10 pointer-events-none"><Quote size={80} /></div>
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{member.role}</span>
            <span className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase"><Calendar size={12} className="text-blue-500" /> {member.tenure}</span>
          </div>
          <h3 className="text-xl font-black text-[#0A2540] mb-2 group-hover:text-blue-600 transition-colors leading-tight">{member.name}</h3>
          <p className="text-gray-500 italic text-xs mb-6 leading-relaxed">"{member.quote}"</p>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><GraduationCap size={16} /></div>
            <div>
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Education</p>
              <p className="text-[11px] font-bold text-[#0A2540] leading-tight">{member.education}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-gray-50">
          <a href={`https://wa.me/${member.wa}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold transition-all text-[10px] uppercase tracking-widest">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const crewRef = useRef(null);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const totalPages = Math.ceil(onboardCrew.length / itemsPerPage);
  const currentCrew = onboardCrew.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const paginate = (page) => {
    setCurrentPage(page);
    crewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-['Plus_Jakarta_Sans'] overflow-x-hidden">
      
      {/* ─── HERO HEADER (MODERN FACEBOOK STYLE LAYOUT) ─── */}
      <header className="relative w-full h-[70vh] flex items-end justify-center overflow-hidden bg-[#071829]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={teamPhoto} alt="Our Team" className="w-full h-full object-cover object-center opacity-70 scale-105" />
          {/* Efek gradient yang menghilang ke bawah seperti di foto */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071829]/40 to-[#F8FAFC]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent" />
        </div>
        
        <div className={`relative z-10 text-center px-6 pb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <ShieldCheck size={14} className="text-blue-400 animate-pulse"/> Professional Crew Management
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0A2540] mb-4 uppercase tracking-tighter leading-none">
            Meet Our <span className="text-blue-600">Great Team</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-xl font-semibold leading-relaxed">
            Satu visi, satu misi untuk memberikan layanan crewing terbaik di industri maritim global.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        
        {/* ─── TEAM STRUCTURE WITH CONNECTORS ─── */}
        <div className="space-y-0">
          
          {/* TIER 1 - Founder */}
          <section className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <MemberCard member={managementTeam.tier1[0]} layout="horizontal" />
            </div>
            <div className="h-20 w-px bg-gradient-to-b from-blue-600 to-blue-200 my-4" />
          </section>

          {/* TIER 2 - Manager */}
          <section className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <MemberCard member={managementTeam.tier2[0]} layout="horizontal" />
            </div>
            <div className="h-20 w-px bg-gradient-to-b from-blue-200 to-gray-200 my-4" />
          </section>

          {/* TIER 3 - Senior Staff */}
          <section className="pt-8">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-blue-200" />
                <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] whitespace-nowrap bg-white px-6 py-2 rounded-full border border-blue-50 shadow-sm">
                  Crewing Management
                </h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-200 to-blue-200" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {managementTeam.tier3.map((m, i) => (
                <MemberCard key={i} member={m} layout="vertical" />
              ))}
            </div>
          </section>

          {/* Connector to Staff */}
          <div className="flex justify-center py-16">
             <div className="h-16 w-px bg-gray-200" />
          </div>

          {/* TIER 4 - Operation Staff */}
          <section>
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] whitespace-nowrap bg-white px-6 py-2 rounded-full border border-gray-50 shadow-sm">
                  Staff Crewing
                </h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {managementTeam.tier4.map((m, i) => (
                <MemberCard key={i} member={m} layout="vertical" />
              ))}
            </div>
          </section>
        </div>

        {/* ─── CREW REGISTRY ─── */}
        <section ref={crewRef} className="mt-64 pt-24 border-t border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-20 gap-10">
            <div className="relative">
              <span className="text-blue-600 font-black text-[11px] tracking-[0.5em] uppercase mb-4 block">Fleet Manpower</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0A2540] tracking-tighter uppercase">Active <br/><span className="text-blue-600">Personnel</span></h2>
            </div>
            
            <div className="bg-[#0A2540] px-12 py-10 rounded-[3rem] shadow-2xl flex items-center gap-8 group">
               <div className="h-16 w-16 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/40 transform group-hover:rotate-12 transition-transform">
                  <Users size={32} />
               </div>
               <div>
                 <p className="text-[10px] text-blue-300 font-black uppercase tracking-widest mb-1">Total Pool</p>
                 <p className="text-4xl font-black text-white">10,800+</p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Global Support</p>
               </div>
            </div>
          </div>

          {/* Grid Crew Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {currentCrew.map((crew, idx) => (
              <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="relative h-64 overflow-hidden">
                  <img src={crew.avatar} alt={crew.position} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-8">
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">{crew.position}</p>
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                       <span className="text-white text-[11px] font-bold uppercase tracking-tight">{crew.status}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Ship Type</span>
                      <span className="font-bold text-[#0A2540] text-xs">{crew.vessel}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Destination</span>
                      <span className="font-black text-blue-600 text-xs">{crew.nextPort}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="w-16 h-16 bg-white rounded-[1.5rem] border border-gray-100 flex items-center justify-center disabled:opacity-20 hover:bg-[#0A2540] hover:text-white transition-all shadow-xl"><ChevronLeft size={24} /></button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => paginate(i + 1)} className={`w-16 h-16 rounded-[1.5rem] font-black text-sm transition-all ${currentPage === i+1 ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-gray-400 border border-gray-100 hover:border-blue-500"}`}>{i + 1}</button>
              ))}
            </div>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="w-16 h-16 bg-white rounded-[1.5rem] border border-gray-100 flex items-center justify-center disabled:opacity-20 hover:bg-[#0A2540] hover:text-white transition-all shadow-xl"><ChevronRight size={24} /></button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </main>
  );
};

export default Team;
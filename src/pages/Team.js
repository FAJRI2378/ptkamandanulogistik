import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Quote,
  Users
} from "lucide-react";
import Seo from "../components/Seo";

// Import Assets
import onboard1 from "../img/onboard1.webp";
import onboard2 from "../img/onboard2.webp";
import onboard3 from "../img/onboard3.webp";
import onboard4 from "../img/onboard4.webp";
import onboard5 from "../img/onboard5.webp";
import onboard6 from "../img/onboard6.webp";
import onboard7 from "../img/onboard7.webp";
import onboard8 from "../img/onboard8.webp";
import capt from "../img/capt.webp";
import teamPhoto from "../img/header.webp";
import bv from "../img/bv.webp";
import kp from "../img/kp.webp";
import kr from "../img/kr.webp";
import kj from "../img/kj.webp";
import be from "../img/be.webp";
import bs from "../img/bs.webp";
import bsi from "../img/bsi.webp";

const managementTeam = {
  tier1: [{
    role: "Owner & Founder",
    name: "Mr. Makkama Patontonan",
    tenure: "Founded since 2010",
    education: "Banten Maritime Academy (Poltekpel)",
    wa: "6281234567890",
    avatar: capt,
    quote:
      "We are committed to developing maritime professionals who are disciplined, competent, and ready to face global challenges, because we believe that the progress of the maritime industry begins with improving the quality of the people who drive it.",
    vision:
      "To become a world-class crewing management company that sets the global benchmark for seafarer integrity and professionalism.",
    mission:
      "To deploy highly professional, competent, and well-characterized maritime personnel to the global maritime industry."
  }],
  tier2: [{ 
    role: "Crewing Manager", 
    name: "Vivi Savitri, S.Pd M.Pd", 
    tenure: "5 Years Experience", 
    education:"Master of English Education, Syarif Hidayatullah State Islamic University Jakarta", 
    wa: "6281211112222", 
    avatar: bv, 
    quote: "Success is built on consistency, discipline, and the courage to keep going.",
  }],
  tier3: [
    { role: "Crewing", name: "Putri Naflah Tabitah Mth S.Pd.", tenure: "3 Years Experience", education: "English Education - UIN Palopo", wa: "6281233334444", avatar: kp, quote: "A winner is a dreamer who never gives up." },
    { role: "Crewing", name: "Riska S.Pd", tenure: "3 Years Experience", education: "English Education - UIN Palopo", wa: "6281255556666", avatar: kr, quote: "The future belongs to the relentless." },
    { role: "Crewing", name: "Jasmin B. Saijeng, S.Pd", tenure: "3 Years Experience", education: "English Education - UIN Palopo", wa: "6281277778888", avatar: kj, quote: "Nothing is a Coincedence, Everything Happens for a Reason." }
  ],
  tier4: [
    { role: "Crewing Staff", name: "Shinta Melati Sudarsono, S.M", tenure: "3 Years Experience", education: "Management - Univ. 17 Agustus 1945", wa: "6281277778888", avatar: bs, quote: "You have through some bad days, you earn the best day of your life." },
    { role: "Crewing Staff", name: "Rezha Afrida Yanti S.Tr.Pel", tenure: "1 Year Experience", education: "PIP Makassar", wa: "6281277778888", avatar: be, quote: "Don't stop when you're tired, stop when you're finished." },
    { role: "Crewing Staff", name: "Silmi Atma Ayu S.Pd", tenure: "1 Year Experience", education: "English Education - UIN Palopo", wa: "6281277778888", avatar: bsi, quote: "Success is the sum of small efforts, repeated day in and day out." }
  ]
};

const onboardCrew = [
  { position: "AB", vessel: "TANKER", status: "Onboard", nextPort: "CHINA", avatar: onboard1 },
  { position: "2O", vessel: "LCT", status: "Onboard", nextPort: "MALAYSIA", avatar: onboard2 },
  { position: "AB", vessel: "BULK CARRIER", status: "Onboard", nextPort: "CHINA", avatar: onboard3 },
  { position: "3O", vessel: "VLCC", status: "Onboard", nextPort: "SINGAPORE", avatar: onboard4 },
  { position: "DECK CADET", vessel: "OIL TANKER", status: "Onboard", nextPort: "VIETNAM", avatar: onboard5 },
  { position: "AB", vessel: "LCT", status: "Onboard", nextPort: "CHINA", avatar: onboard6 },
  { position: "CO", vessel: "GENERAL CARGO", status: "Onboard", nextPort: "CHINA", avatar: onboard7 },
  { position: "4E", vessel: "VLCC", status: "Onboard", nextPort: "CHINA", avatar: onboard8 },
];

const MemberCard = ({ member, layout = "vertical" }) => (
  <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl h-full">
    <div className={`flex flex-col h-full ${layout === "horizontal" ? "lg:flex-row" : ""}`}>
      {/* Kolom Gambar */}
      <div className={`${layout === "horizontal" ? "lg:w-2/5" : "w-full"} relative overflow-hidden h-80 lg:h-auto`}>
        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />
      </div>

      {/* Kolom Konten */}
      <div className={`${layout === "horizontal" ? "lg:w-3/5" : "w-full"} p-8 flex flex-col justify-between relative bg-white`}>
        <div className="absolute top-4 right-6 text-blue-500/10 pointer-events-none"><Quote size={80} /></div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{member.role}</span>
          </div>

          <h3 className="text-xl font-black text-[#0A2540] mb-2 group-hover:text-blue-600 transition-colors leading-tight">{member.name}</h3>
          <p className="text-gray-600 italic text-sm md:text-base mb-6 leading-relaxed border-l-4 border-blue-100 pl-4">
            "{member.quote}"
          </p>

          <div className="space-y-6">
            {/* Education Section */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs text-blue-500 font-black uppercase tracking-[0.15em] mb-1">
                  Education Background
                </p>
                <p className="text-sm md:text-base font-bold text-[#0A2540] leading-snug">
                  {member.education}
                </p>
              </div>
            </div>

            {/* VISI & MISI */}
            {member.vision && (
              <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
                <div className="bg-blue-50/40 p-4 rounded-2xl border border-blue-100/50">
                  <p className="text-[11px] md:text-xs text-blue-600 font-black uppercase tracking-[0.2em] mb-2">Our Vision</p>
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed font-semibold">
                    {member.vision}
                  </p>
                </div>

                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-200/50">
                  <p className="text-[11px] md:text-xs text-blue-600 font-black uppercase tracking-[0.2em] mb-2">Our Mission</p>
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed font-semibold">
                    {member.mission}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-gray-50">
          <a href={`https://wa.me/${member.wa}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold transition-all text-[10px] uppercase tracking-widest">
            <MessageCircle size={14} /> WhatsApp Direct
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
    if (crewRef.current) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = crewRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ✅ FIX #4: Tambah komponen Seo yang sebelumnya tidak ada di Team.jsx */}
      <Seo
        title="Our Team | PT Kamandanu Jaya Samudera - Professional Manning Experts"
        description="Meet the dedicated team behind PT Kamandanu Jaya Samudera. Our experienced crewing professionals and management staff ensure top-quality maritime workforce solutions worldwide."
        url="/team"
      />

      <main className="bg-[#F8FAFC] min-h-screen font-['Plus_Jakarta_Sans'] overflow-x-hidden">

        {/* ─── HERO HEADER ─── */}
        <header className="relative w-full min-h-[90vh] pt-[180px] md:pt-[200px] flex items-end justify-center overflow-hidden bg-[#0A2540]">
          <div className="absolute inset-0 z-0">
            <img
              src={teamPhoto}
              alt="PT Kamandanu Jaya Samudera Team"
              className="w-full h-full object-cover object-[center_15%] md:object-center opacity-90 transition-transform duration-1000 scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#F8FAFC]" />
          </div>

          <div className={`relative z-10 text-center px-6 pb-24 md:pb-32 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-xl">
              <ShieldCheck size={14} className="text-white animate-pulse" /> Professional Crew Management
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#0A2540] mb-4 uppercase tracking-tighter leading-none drop-shadow-sm">
              Meet Our <span className="text-blue-600">Great Team</span>
            </h1>
            <p className="text-[#0A2540]/80 max-w-2xl mx-auto text-base md:text-xl font-bold leading-relaxed px-4">
              One vision, one mission to provide the best crewing services in the global maritime industry.
            </p>
          </div>
        </header>

        {/* ─── MAIN CONTENT ─── */}
        <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-24">

          <div className="space-y-24">
            {/* TIER 1 - Founder */}
            <section className="flex flex-col items-center">
              <div className="w-full max-w-5xl">
                <MemberCard member={managementTeam.tier1[0]} layout="horizontal" />
              </div>
              <div className="h-20 w-px bg-gradient-to-b from-blue-600 to-transparent my-6" />
            </section>

            {/* TIER 2 - Manager */}
            <section className="flex flex-col items-center">
              <div className="w-full max-w-4xl">
                <MemberCard member={managementTeam.tier2[0]} layout="horizontal" />
              </div>
              <div className="h-20 w-px bg-gradient-to-b from-blue-200 to-transparent my-6" />
            </section>

            {/* TIER 3 - Senior Staff */}
            <section>
              <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-blue-200" />
                  <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[0.5em] whitespace-nowrap bg-white px-8 py-3 rounded-full border border-blue-50 shadow-sm">
                    Crewing Management
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-200 to-blue-200" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {managementTeam.tier3.map((m, i) => (
                  <MemberCard key={i} member={m} layout="vertical" />
                ))}
              </div>
            </section>

            {/* TIER 4 - Staff */}
            <section>
              <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                  <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.5em] whitespace-nowrap bg-white px-8 py-3 rounded-full border border-gray-50 shadow-sm">
                    Staff Crewing
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {managementTeam.tier4.map((m, i) => (
                  <MemberCard key={i} member={m} layout="vertical" />
                ))}
              </div>
            </section>
          </div>

          {/* ─── CREW REGISTRY ─── */}
          <section ref={crewRef} className="mt-48 pt-24 border-t border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-20 gap-10">
              <div className="relative">
                <span className="text-blue-600 font-black text-[11px] tracking-[0.5em] uppercase mb-4 block">Fleet Manpower</span>
                <h2 className="text-5xl md:text-7xl font-black text-[#0A2540] tracking-tighter uppercase leading-tight">Active <br /><span className="text-blue-600">Personnel</span></h2>
              </div>

              <div className="bg-[#0A2540] px-12 py-10 rounded-[3rem] shadow-2xl flex items-center gap-8 group">
                <div className="h-16 w-16 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/40 transform group-hover:rotate-12 transition-transform">
                  <Users size={32} />
                </div>
                <div>
                  <p className="text-[10px] text-blue-300 font-black uppercase tracking-widest mb-1">Total Pool</p>
                  <p className="text-4xl font-black text-white">7000+</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Verified Seafarers</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {currentCrew.map((crew, idx) => (
                <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700">
                  <div className="relative h-72 overflow-hidden">
                    <img src={crew.avatar} alt={crew.position} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-80" />
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
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-14 h-14 bg-white rounded-2xl border border-gray-100 flex items-center justify-center disabled:opacity-20 hover:bg-[#0A2540] hover:text-white transition-all shadow-lg text-[#0A2540]"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-14 h-14 rounded-2xl font-black text-sm transition-all ${currentPage === i + 1 ? "bg-blue-600 text-white shadow-xl shadow-blue-200" : "bg-white text-gray-400 border border-gray-100 hover:border-blue-500"}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-14 h-14 bg-white rounded-2xl border border-gray-100 flex items-center justify-center disabled:opacity-20 hover:bg-[#0A2540] hover:text-white transition-all shadow-lg text-[#0A2540]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Team;
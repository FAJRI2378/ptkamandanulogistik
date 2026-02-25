import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Quote,
  Users,
  ExternalLink,
  Award,
  Target
} from "lucide-react";
import Seo from "../components/Seo";

// Asset imports
import onboard1 from "../img/onboard1.webp";
import onboard2 from "../img/onboard2.webp";
import onboard3 from "../img/onboard3.webp";
import onboard4 from "../img/onboard4.webp";
import onboard5 from "../img/onboard5.webp";
import onboard6 from "../img/onboard6.webp";
import onboard7 from "../img/onboard7.webp";
import onboard8 from "../img/onboard8.webp";
import capt from "../img/capt.webp";
import teamPhoto from "../img/bgnn.png";
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
    name: "Capt. Makkama Patontonan",
    tenure: "Founded since 2010",
    education: "Banten Maritime Academy (Poltekpel)",
    wa: "6281234567890",
    avatar: capt,
    quote: "We are committed to developing maritime professionals who are disciplined, competent, and ready to face global challenges.",
    vision: "To become a world-class crewing management company that sets the global benchmark for seafarer integrity.",
    mission: "To deploy highly professional, competent, and well-characterized maritime personnel."
  }],
  tier2: [{ 
    role: "Crewing Manager", 
    name: "Vivi Savitri, S.Pd M.Pd", 
    education:"Master of English Education, UIN Jakarta", 
    wa: "6281211112222", 
    avatar: bv, 
    quote: "Success is built on consistency, discipline, and the courage to keep going.",
  }],
  tier3: [
    { role: "Senior Crewing", name: "Putri Naflah Tabitah Mth S.Pd.", education: "English Education - UIN Palopo", wa: "6281233334444", avatar: kp, quote: "A winner is a dreamer who never gives up." },
    { role: "Senior Crewing", name: "Riska S.Pd", education: "English Education - UIN Palopo", wa: "6281255556666", avatar: kr, quote: "The future belongs to the relentless." },
    { role: "Senior Crewing", name: "Jasmin B. Saijeng, S.Pd", education: "English Education - UIN Palopo", wa: "6281277778888", avatar: kj, quote: "Everything Happens for a Reason." }
  ],
  tier4: [
    { role: "Crewing Staff", name: "Shinta Melati Sudarsono, S.M", education: "Management - Univ. 17 Agustus 1945", wa: "6281277778888", avatar: bs, quote: "Fight through bad days to earn the best days." },
    { role: "Crewing Staff", name: "Rezha Afrida Yanti S.Tr.Pel", education: "PIP Makassar", wa: "6281277778888", avatar: be, quote: "Don't stop when you're tired, stop when you're finished." },
    { role: "Crewing Staff", name: "Silmi Atma Ayu S.Pd", education: "English Education - UIN Palopo", wa: "6281277778888", avatar: bsi, quote: "Success is the sum of small efforts." }
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
  <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 h-full">
    <div className={`flex flex-col h-full ${layout === "horizontal" ? "lg:flex-row" : ""}`}>
      {/* Image Section */}
      <div className={`${layout === "horizontal" ? "lg:w-2/5" : "w-full"} relative overflow-hidden aspect-[4/5] lg:aspect-auto`}>
        <img 
          src={member.avatar} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className={`${layout === "horizontal" ? "lg:w-3/5" : "w-full"} p-6 lg:p-10 flex flex-col justify-between`}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-50 text-blue-600 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
              {member.role}
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 tracking-tight">{member.name}</h3>
          
          <div className="relative mb-6">
            <Quote className="absolute -left-2 -top-2 text-blue-100 w-8 h-8 -z-10" />
            <p className="text-slate-600 italic leading-relaxed pl-6 border-l-2 border-blue-500/20">
              {member.quote}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="p-2 bg-slate-50 rounded-lg">
                <GraduationCap size={18} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium">{member.education}</span>
            </div>
            
            {/* Vision & Mission Block (Conditional) */}
            {(member.vision || member.mission) && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-700">
                {member.vision && (
                  <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={14} className="text-blue-600" />
                      <h4 className="text-[10px] uppercase font-bold text-blue-600 tracking-widest">Our Vision</h4>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">{member.vision}</p>
                  </div>
                )}
                {member.mission && (
                  <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={14} className="text-indigo-600" />
                      <h4 className="text-[10px] uppercase font-bold text-indigo-600 tracking-widest">Our Mission</h4>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">{member.mission}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <a 
            href={`https://wa.me/${member.wa}`} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold transition-all duration-300 text-xs uppercase tracking-widest group/btn shadow-lg shadow-emerald-200"
          >
            <MessageCircle size={16} />
            Connect via WhatsApp
            <ExternalLink size={14} className="opacity-0 group-hover/btn:opacity-100 transition-all translate-x-[-10px] group-hover/btn:translate-x-0" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16 relative">
    <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">{title}</h2>
    <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full mb-6" />
    {subtitle && <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{subtitle}</p>}
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
      window.scrollTo({ top: crewRef.current.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <>
      <Seo 
        title="Our Experts | PT Kamandanu Jaya Samudera"
        description="Connect with the leadership and crewing experts at PT Kamandanu Jaya Samudera."
      />

      <main className="bg-[#FBFCFE] min-h-screen font-['Plus_Jakarta_Sans']">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 md:pt-28 pb-16 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                <Award size={14} /> Crewing Management
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8">
                Meet Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Great Team</span>
              </h1>
              <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                Driving the future of global maritime workforce with integrity and innovation.
              </p>
            </div>
          </div>

          <div className="mt-20 container mx-auto px-6">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl h-[380px] md:h-[500px] lg:h-[600px]">
              <img src={teamPhoto} alt="Management Team" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* --- MANAGEMENT TIERS --- */}
        <section className="py-24 container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-32">
            
            {/* TIER 1 - Founder */}
            <div>
              <SectionHeader title="The Founder" subtitle="Owner & Visionary" />
              <div className="relative">
                <div className="absolute -left-10 top-0 text-[10rem] font-black text-slate-50 opacity-[0.03] select-none">01</div>
                <MemberCard member={managementTeam.tier1[0]} layout="horizontal" />
              </div>
            </div>

            {/* TIER 2 - Manager */}
            <div>
              <SectionHeader title="Leadership" subtitle="Crewing Management" />
              <div className="relative">
                <div className="absolute -right-10 top-0 text-[10rem] font-black text-slate-50 opacity-[0.03] select-none text-right">02</div>
                <div className="max-w-4xl mx-auto">
                  <MemberCard member={managementTeam.tier2[0]} layout="horizontal" />
                </div>
              </div>
            </div>

            {/* TIER 3 - Senior Crewing */}
            <div>
              <SectionHeader title="Operations" subtitle="Senior Crewing Officers" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTeam.tier3.map((member, idx) => (
                  <MemberCard key={idx} member={member} />
                ))}
              </div>
            </div>

            {/* TIER 4 - Crewing Staff */}
            <div>
              <SectionHeader title="Support Team" subtitle="Crewing Staff" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTeam.tier4.map((member, idx) => (
                  <MemberCard key={idx} member={member} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- CREW REGISTRY --- */}
        <section ref={crewRef} className="bg-slate-900 py-32 text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Fleet Manpower</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Active <span className="text-slate-400 italic">Personnel</span></h2>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <Users className="text-white" size={30} />
                </div>
                <div>
                  <div className="text-4xl font-black">7,000+</div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Verified Seafarers Pool</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {currentCrew.map((crew, idx) => (
                <div key={idx} className="group relative bg-slate-800/50 border border-white/5 rounded-[2rem] overflow-hidden hover:bg-slate-800 transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    <img src={crew.avatar} alt={crew.position} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">{crew.status}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1">{crew.position}</h4>
                    <p className="text-slate-400 text-sm mb-4 uppercase tracking-tighter">{crew.vessel}</p>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                       <span className="text-[10px] text-slate-500 font-bold uppercase">Bound For</span>
                       <span className="text-xs font-black text-blue-400">{crew.nextPort}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-3">
              <button 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-4 rounded-2xl bg-white/5 hover:bg-blue-600 disabled:opacity-20 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-12 h-12 rounded-2xl font-bold transition-all ${currentPage === i + 1 ? "bg-blue-600 scale-110 shadow-lg shadow-blue-600/20" : "bg-white/5 hover:bg-white/10"}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-4 rounded-2xl bg-white/5 hover:bg-blue-600 disabled:opacity-20 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Team;
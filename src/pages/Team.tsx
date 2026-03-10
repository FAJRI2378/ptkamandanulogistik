import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  Users,
  Award,
  Camera,
  Truck,
} from "lucide-react";
import Seo from "../components/Seo.tsx";

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
import bv from "../img/bv.jpeg";
import kp from "../img/kp.webp";
import kr from "../img/kr.webp";
import kj from "../img/kj.webp";
import be from "../img/be.webp";
import bs from "../img/bss.jpg";
import bsi from "../img/bsi.webp";
import allTeamPhoto from "../img/team.webp";
import backgroundImageHeader from "../img/image.png";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

interface TeamMember {
  role: string;
  name: string;
  education: string;
  wa: string;
  avatar: string;
  quote: string;
}

interface CrewMember {
  position: string;
  vessel: string;
  status: string;
  nextPort: string;
  avatar: string;
}

const managementTeam: {
  tier1: TeamMember[];
  tier2: TeamMember[];
  tier3: TeamMember[];
  tier4: TeamMember[];
} = {
  tier1: [
    {
      role: "Owner & Founder",
      name: "Capt. Makkama Patontonan",
      education: "Banten Maritime Polytechnic, Indonesia",
      wa: "6281383730788",
      avatar: capt,
      quote:
        "We are committed to building a logistics company that is not only operationally excellent, but also trusted by partners worldwide — because integrity is the foundation of every successful shipment.",
    },
  ],
  tier2: [
    {
      role: "Operations Manager",
      name: "Vivi Savitri, S.Pd., M.Pd.",
      education:
        "Master of Management, Syarif Hidayatullah State Islamic University Jakarta, Indonesia",
      wa: "6281388094327",
      avatar: bv,
      quote: "Success is built on consistency, discipline, and the courage to keep going.",
    },
  ],
  tier3: [
    {
      role: "Logistics Officer",
      name: "Putri Naflah Tabitah Mth, S.Pd.",
      education:
        "Business Administration - State Islamic University of Palopo, Indonesia",
      wa: "6282298455490",
      avatar: kp,
      quote: "A winner is a dreamer who never gives up.",
    },
    {
      role: "Logistics Officer",
      name: "Riska, S.Pd.",
      education:
        "Business Administration - State Islamic University of Palopo, Indonesia",
      wa: "6287848055516",
      avatar: kr,
      quote: "The future belongs to the relentless.",
    },
    {
      role: "Freight Coordinator",
      name: "Jasmin B. Saijeng, S.Pd.",
      education:
        "Supply Chain Management - State Islamic University of Palopo, Indonesia",
      wa: "6285757632809",
      avatar: kj,
      quote: "Nothing is a Coincidence, Everything Happens for a Reason.",
    },
  ],
  tier4: [
    {
      role: "Logistics Staff",
      name: "Shinta Melati Sudarsono, S.M.",
      education:
        "Management Department, 17 August 1945 University Jakarta, Indonesia",
      wa: "62881011664608",
      avatar: bs,
      quote: "You have to fight through some bad days to earn the best days of your life.",
    },
    {
      role: "Logistics Staff",
      name: "Silmi Atma Ayu, S.Pd.",
      education:
        "Business Management - State Islamic University of Palopo, Indonesia",
      wa: "6282260580449",
      avatar: bsi,
      quote: "Success is the sum of small efforts, repeated day in and day out.",
    },
    {
      role: "Logistics Staff",
      name: "Rezha Afrida Yanti, S.Tr.Pel.",
      education: "Merchant Marine Polytechnic of Makassar, Indonesia",
      wa: "6282299333345",
      avatar: be,
      quote: "Don't stop when you're tired, stop when you're finished.",
    },
  ],
};

// Field operations (formerly onboard crew)
const fieldOperations: CrewMember[] = [
  { position: "Cargo Supervisor", vessel: "TANKER", status: "Active", nextPort: "CHINA", avatar: onboard1 },
  { position: "Logistics Coordinator", vessel: "LCT", status: "Active", nextPort: "CHINA", avatar: onboard2 },
  { position: "Cargo Inspector", vessel: "BULK CARRIER", status: "Active", nextPort: "CHINA", avatar: onboard3 },
  { position: "Freight Officer", vessel: "VLCC", status: "Active", nextPort: "SINGAPORE", avatar: onboard4 },
  { position: "Operations Trainee", vessel: "OIL TANKER", status: "Active", nextPort: "CHINA", avatar: onboard5 },
  { position: "Deck Supervisor", vessel: "LCT", status: "Active", nextPort: "CHINA", avatar: onboard6 },
  { position: "Chief Officer", vessel: "GENERAL CARGO", status: "Active", nextPort: "KOREA", avatar: onboard7 },
  { position: "Marine Engineer", vessel: "VLCC", status: "Active", nextPort: "SINGAPORE", avatar: onboard8 },
];

interface MemberCardProps {
  member: TeamMember;
  isMain?: boolean;
  priority?: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({
  member,
  isMain = false,
  priority = false,
}) => (
  <article
    className={`group flex flex-col items-center text-center p-8 bg-white rounded-[3rem] transition-all duration-500 hover:-translate-y-2 ${
      isMain
        ? "max-w-5xl mx-auto shadow-2xl border-2 border-blue-50"
        : "shadow-xl border border-slate-100 h-full"
    }`}
    aria-label={`${member.role}: ${member.name}`}
  >
    <div
      className={`relative mb-6 overflow-hidden rounded-[2.5rem] ${
        isMain
          ? "w-80 h-80 md:w-[420px] md:h-[420px]"
          : "w-64 h-64 md:w-72 md:h-72"
      }`}
    >
      <img
        src={member.avatar}
        alt={`${member.name} - ${member.role} PT Kamandanu Jaya Logistik`}
        className="w-full h-full object-cover shadow-xl border-8 border-white"
        style={{
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
          imageRendering: "-webkit-optimize-contrast",
        }}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
      <a
        href={`https://wa.me/${member.wa}`}
        target="_blank"
        rel="noreferrer"
        className="absolute -bottom-3 -right-3 bg-emerald-500 text-white p-4 rounded-2xl shadow-lg hover:bg-emerald-600 transition-all hover:scale-110 z-10"
        aria-label={`Hubungi ${member.name} via WhatsApp`}
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </div>
    <div className="space-y-4 w-full text-center">
      <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 px-5 py-2 bg-blue-50 rounded-full">
        {member.role}
      </span>
      <h3
        className={`font-black text-slate-900 leading-tight ${
          isMain ? "text-3xl md:text-5xl" : "text-2xl"
        }`}
      >
        {member.name}
      </h3>
      <p className="text-slate-500 text-sm font-medium italic px-6 leading-relaxed max-w-2xl mx-auto">
        "{member.quote}"
      </p>
      <div className="flex items-center justify-center gap-2 pt-2 text-slate-400">
        <GraduationCap size={18} className="text-blue-500" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-wider">
          {member.education}
        </span>
      </div>
    </div>
  </article>
);

const Team: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const crewRef = useRef<HTMLElement>(null);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const totalPages = Math.ceil(fieldOperations.length / itemsPerPage);
  const currentOps = fieldOperations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginate = (page: number) => {
    setCurrentPage(page);
    if (crewRef.current) {
      window.scrollTo({
        top: crewRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Seo
        title="Tim Profesional Kami | PT Kamandanu Jaya Logistik - Logistics & Freight Experts"
        description="Kenali tim ahli PT Kamandanu Jaya Logistik — para profesional berpengalaman di bidang freight forwarding, marine logistics, dan cargo transportation yang siap mendukung bisnis Anda."
        url="/team"
        keywords="tim logistik, freight forwarding expert, marine logistics team, Kamandanu Jaya Logistik team, cargo transportation professional"
      />

      <main
        className="bg-[#F8FAFC] min-h-screen"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {/* HERO */}
        <section
          className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden"
          aria-label="Header halaman Tim"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
            role="img"
            aria-label="Tim profesional PT Kamandanu Jaya Logistik"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540] z-0" />

          <div className="relative z-10 text-center text-white">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                  <Award size={14} aria-hidden="true" /> Professional Management
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                  Meet Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Great Team
                  </span>
                </h1>
                <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed">
                  Driving logistics excellence with professionalism, integrity,
                  and world-class freight forwarding expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HIERARCHY */}
        <div className="max-w-7xl mx-auto px-4 -mt-16 pb-24 relative z-20">
          <div className="flex flex-col items-center">
            {/* TIER 1 */}
            <div
              className={`w-full transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex justify-center">
                <MemberCard
                  member={managementTeam.tier1[0]}
                  isMain={true}
                  priority={true}
                />
              </div>
            </div>

            {/* TIER 2 */}
            <div className="w-full max-w-2xl mt-12">
              <MemberCard member={managementTeam.tier2[0]} priority={true} />
            </div>

            {/* TIER 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
              {managementTeam.tier3.map((m, i) => (
                <MemberCard key={i} member={m} />
              ))}
            </div>

            {/* TIER 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
              {managementTeam.tier4.map((m, i) => (
                <MemberCard key={i} member={m} />
              ))}
            </div>
          </div>
        </div>

        {/* TEAM PHOTO */}
        <section
          className="py-24 bg-white overflow-hidden border-t border-slate-50"
          aria-labelledby="team-photo-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                The Power of Unity
              </span>
              <h2
                id="team-photo-heading"
                className="text-4xl md:text-5xl font-black text-slate-900 uppercase"
              >
                United in Excellence
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-6 rounded-full" />
            </div>
            <div className="max-w-6xl mx-auto relative group">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
                <img
                  src={allTeamPhoto}
                  alt="Seluruh tim PT Kamandanu Jaya Logistik - Freight Forwarding & Marine Logistics"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                  <div className="text-white">
                    <p className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm mb-2">
                      <Camera size={18} aria-hidden="true" /> Official Team Portrait
                    </p>
                    <h3 className="text-3xl font-black">
                      PT. Kamandanu Jaya Logistik
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FIELD OPERATIONS */}
        <section
          ref={crewRef}
          className="bg-slate-50 py-32 border-t border-slate-100"
          aria-labelledby="field-ops-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-8 text-slate-900">
              <div className="text-center lg:text-left">
                <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                  Field Operations
                </span>
                <h2
                  id="field-ops-heading"
                  className="text-5xl font-black uppercase"
                >
                  Active Personnel
                </h2>
              </div>
              <div className="flex items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-50">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200">
                  <Truck className="text-white" size={28} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-4xl font-black">300+</div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                    Active Logistics Partners
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {currentOps.map((op, idx) => (
                <article
                  key={idx}
                  className="group bg-white rounded-[2.5rem] shadow-lg overflow-hidden border border-slate-100"
                  aria-label={`${op.position} on ${op.vessel}`}
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={op.avatar}
                      alt={`${op.position} - ${op.vessel} - PT Kamandanu Jaya Logistik`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ imageRendering: "-webkit-optimize-contrast" }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                      {op.status}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-black text-slate-900 mb-1">
                      {op.position}
                    </h4>
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                      {op.vessel}
                    </p>
                    <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                        Destination
                      </span>
                      <span className="text-sm font-black text-blue-600 px-3 py-1 bg-blue-50 rounded-lg">
                        {op.nextPort}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* PAGINATION */}
            <nav
              className="flex justify-center items-center gap-6"
              aria-label="Pagination field operations"
            >
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md disabled:opacity-30"
                aria-label="Halaman sebelumnya"
              >
                <ChevronLeft size={28} aria-hidden="true" />
              </button>
              <div className="flex items-center gap-3">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-14 h-14 rounded-2xl font-black text-lg transition-all ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white shadow-xl scale-110"
                        : "bg-white text-slate-400 border border-slate-100 hover:bg-slate-50"
                    }`}
                    aria-label={`Halaman ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md disabled:opacity-30"
                aria-label="Halaman berikutnya"
              >
                <ChevronRight size={28} aria-hidden="true" />
              </button>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
};

export default Team;
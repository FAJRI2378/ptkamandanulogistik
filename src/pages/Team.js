import React, { useState, useEffect, useRef } from "react";
import {
  Navigation,
  Building,
  Ship,
  Compass,
  Mail,
  Phone,
  Anchor,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  GraduationCap,
  BookOpen,
  Award,
  MapPin,
  Briefcase,
} from "lucide-react";

// Import Assets
import onboard1 from "../img/onboard1.png";
import onboard2 from "../img/onboard2.png";
import onboard3 from "../img/onboard3.png";
import onboard4 from "../img/onboard4.png";
import onboard5 from "../img/onboard5.png";
import onboard6 from "../img/onboard6.png";
import capt from "../img/capt.png";
import onboard7 from "../img/onboard7.jpg";
import onboard8 from "../img/onboard8.jpg";
import headerBg from "../img/header.jpg";

// ─── Structured Data for SEO (English) ──────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Kamandanu Jaya Samudera",
  url: "https://www.kamandanujayasamudera.com",
  logo: "https://www.kamandanujayasamudera.com/logo.png",
  description:
    "PT Kamandanu Jaya Samudera is a leading crewing agency and manning agent in Indonesia, providing world-class certified seafarers for the global shipping industry.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-21-1234-5678",
    contactType: "customer service",
    areaServed: "Global",
    availableLanguage: ["English", "Indonesian"],
  },
  founder: {
    "@type": "Person",
    name: "Makkama Patontonan",
    jobTitle: "Founder & Owner",
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Indonesian Maritime Academy" },
    ],
  },
  employee: {
    "@type": "QuantitativeValue",
    value: 500,
    unitText: "certified seafarers",
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kamandanujayasamudera.com" },
    { "@type": "ListItem", position: 2, name: "Professional Team", item: "https://www.kamandanujayasamudera.com/team" },
  ],
};

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeEdu, setActiveEdu] = useState(0);
  const crewRef = useRef(null);
  const itemsPerPage = 4;

  // ─── SEO Meta Tags (English) ───────────────────────────────────────────────
  useEffect(() => {
    document.title = "Professional Team & Certified Seafarers | PT Kamandanu Jaya Samudera – Global Manning Agency";

    const setMeta = (name, content, prop = false) => {
      const key = prop ? "property" : "name";
      let el = document.querySelector(`meta[${key}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(key, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("description", "Meet our professional maritime team at PT Kamandanu Jaya Samudera. Over 500 STCW-certified Indonesian seafarers ready for deployment on tankers, bulk carriers, VLCC, and LCT vessels worldwide.");
    setMeta("keywords", "manning agency indonesia, crewing agency jakarta, certified seafarers, indonesian seaman, STCW certified crew, tanker crew, ship management Indonesia");
    setMeta("robots", "index, follow");

    // Open Graph
    setMeta("og:title", "Professional Maritime Team | PT Kamandanu Jaya Samudera", true);
    setMeta("og:description", "World-class STCW-certified seafarers from Indonesia. Led by Makkama Patontonan with 30+ years of maritime expertise.", true);
    setMeta("og:url", "https://www.kamandanujayasamudera.com/team", true);

    // Structured Data Injection
    const injectLD = (id, data) => {
      let s = document.getElementById(id);
      if (!s) { s = document.createElement("script"); s.id = id; s.type = "application/ld+json"; document.head.appendChild(s); }
      s.textContent = JSON.stringify(data);
    };
    injectLD("ld-organization", structuredData);
    injectLD("ld-breadcrumb", breadcrumbData);

    setTimeout(() => setIsVisible(true), 120);
  }, []);

  // ─── Data ───────────────────────────────────────────────────────────────────
  const onboardCrew = [
    { position: "Master Mariner", vessel: "TANKER", status: "Onboard", nextPort: "CHINA", avatar: onboard1 },
    { position: "2nd Officer", vessel: "LCT", status: "Onboard", nextPort: "MALAYSIA", avatar: onboard2 },
    { position: "3rd Engineer", vessel: "BULK CARRIER", status: "Onboard", nextPort: "CHINA", avatar: onboard3 },
    { position: "1st Engineer", vessel: "VLCC", status: "Onboard", nextPort: "SINGAPORE", avatar: onboard4 },
    { position: "DECK CADET", vessel: "OIL TANKER", status: "Onboard", nextPort: "VIETNAM", avatar: onboard5 },
    { position: "OILER / WIPER", vessel: "LCT", status: "Onboard", nextPort: "CHINA", avatar: onboard6 },
    { position: "BOSUN", vessel: "GENERAL CARGO", status: "Onboard", nextPort: "CHINA", avatar: onboard7 },
    {  position: "FITTER", vessel: "VLCC", status: "Onboard", nextPort: "CHINA", avatar: onboard8 },
  ];

  const ownerEducation = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      degree: "Nautical Diploma (ANT-I)",
      institution: "Indonesian Maritime Academy – Jakarta",
      year: "1990",
      description: "Master Mariner Level I – The highest maritime certification for deck officers on international merchant vessels.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      degree: "BST & STCW Certification",
      institution: "Maritime Training Center (BP2IP)",
      year: "1991",
      description: "International maritime safety certifications following STCW 78/95 and IMO regulations.",
    },
    {
      icon: <Award className="h-5 w-5" />,
      degree: "Ship Management & Operations",
      institution: "Lloyd's Maritime Academy – London, UK",
      year: "2005",
      description: "Professional program in fleet management and global marine operations.",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      degree: "Maritime Business Management",
      institution: "Singapore Maritime Academy",
      year: "2010",
      description: "Advanced leadership training in maritime business, crewing agency operations, and global logistics.",
    },
  ];

  const owner = {
    name: "Mr. Makkama Patontonan",
    position: "Founder & Owner",
    level: "Chairman & Founder",
    experience: "30+ Years",
    avatar: capt,
    email: "kamandanu@kamandanujayasamudera.com",
    phone: "+62 21 1234 5678",
    quote: "Our commitment is to deliver quality and safety across every nautical mile we sail.",
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCrew = onboardCrew.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(onboardCrew.length / itemsPerPage);

  const paginate = (page) => {
    setCurrentPage(page);
    crewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="bg-white min-h-screen pt-16 sm:pt-20" itemScope itemType="https://schema.org/Organization">
      
      {/* ══════════════════════════ HERO HEADER ══════════════════════════ */}
      <header className="relative w-full h-[520px] sm:h-[660px] flex items-center justify-center overflow-hidden mb-16 sm:mb-24" role="banner">
        <div className="absolute inset-0 z-0">
          <img
            src={headerBg}
            alt="Professional Indonesian Seafarers at Sea"
            className="w-full h-full object-cover object-top pt-20 sm:pt-24"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#071829]/65 backdrop-blur-[1px]" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="mb-6">
            <span className="inline-flex items-center bg-blue-600/25 backdrop-blur-md text-cyan-300 px-5 py-2 rounded-full text-xs sm:text-sm font-bold border border-cyan-400/30 tracking-widest uppercase">
              <Anchor className="h-4 w-4 mr-2" aria-hidden="true" />
              Global Maritime Professional Network
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-5 leading-tight drop-shadow-xl" itemProp="name">
            Professional Team &<br/>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Certified Seafarers
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
            Bridging excellence and reliability at sea with world-class Indonesian maritime professionals certified to international STCW standards.
          </p>

        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li className="text-gray-300">/</li>
            <li className="text-blue-600 font-semibold">Professional Team</li>
          </ol>
        </nav>

        {/* ══════════════════════ ONBOARD CREW SECTION ══════════════════ */}
        <section ref={crewRef} className="mb-24 md:mb-32 scroll-mt-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200/60">
                <Navigation className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540]">Active Crew Registry</h2>
                <p className="text-gray-500 text-sm mt-0.5">Real-time status of our certified personnel</p>
              </div>
            </div>
            <div className="bg-emerald-500 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-lg text-sm sm:text-base">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative rounded-full h-3 w-3 bg-white" />
              </span>
              LIVE ONBOARD: {onboardCrew.length}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {currentCrew.map((crew, index) => (
              <article key={index} className={`bg-white border border-gray-100 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${isVisible ? "crew-card-in" : "opacity-0"}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-72">
                  <img src={crew.avatar} alt={crew.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-bold text-white text-base leading-snug">{crew.name}</h3>
                    <p className="text-cyan-400 text-xs font-bold tracking-wider uppercase">{crew.position}</p>
                  </div>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-gray-500 flex items-center gap-2"><Ship size={14}/> Vessel</span>
                    <span className="font-bold text-[#0A2540]">{crew.vessel}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-gray-500 flex items-center gap-2"><Compass size={14}/> Destination</span>
                    <span className="font-bold text-blue-600">{crew.nextPort}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <nav className="flex justify-center items-center gap-2">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="p-3 rounded-xl bg-gray-100 disabled:opacity-30"><ChevronLeft size={20}/></button>
            {[...Array(totalPages)].map((_, i) => (
              <button key={i} onClick={() => paginate(i + 1)} className={`w-11 h-11 rounded-xl font-bold ${currentPage === i+1 ? "bg-blue-600 text-white shadow-lg" : "bg-white border-2 border-gray-100"}`}>{i + 1}</button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="p-3 rounded-xl bg-gray-100 disabled:opacity-30"><ChevronRight size={20}/></button>
          </nav>
        </section>

        {/* ══════════════════════ LEADERSHIP SECTION ════════════════════ */}
        <section className="pb-24 md:pb-32">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block">Corporate Leadership</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Founder &amp; Chairman</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#071829] to-[#0f3d6b] rounded-[2.5rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5"><Building size={220} /></div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 relative z-10">
              <div className="relative shrink-0">
                <div className="absolute -inset-5 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
                <img src={owner.avatar} alt={owner.name} className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-white/10 object-cover shadow-2xl relative z-10" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">{owner.level}</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 mb-4 leading-tight">{owner.name}</h3>
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed italic">"{owner.quote}"</p>
                
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-2xl mb-8">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-sm sm:text-base">{owner.experience} Maritime Experience</span>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href={`mailto:${owner.email}`} className="bg-blue-600 hover:bg-blue-500 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 transition-all text-sm shadow-xl">
                    <Mail size={16}/> Email Contact
                  </a>
                  <a href={`tel:${owner.phone.replace(/\s/g, "")}`} className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 transition-all text-sm">
                    <Phone size={16}/> Call Directly
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-10 border-t border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
                <h4 className="font-bold text-lg">Education &amp; Professional Qualifications</h4>
              </div>

              <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {ownerEducation.map((edu, i) => (
                  <button key={i} onClick={() => setActiveEdu(i)} className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activeEdu === i ? "bg-cyan-500 text-white" : "bg-white/5 text-gray-400 border border-white/10"}`}>
                    {edu.year}
                  </button>
                ))}
              </div>

              <div className="relative">
                {ownerEducation.map((edu, i) => (
                  <div key={i} hidden={activeEdu !== i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all">
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-400/20">{edu.icon}</div>
                      <div>
                        <h5 className="font-extrabold text-lg leading-snug">{edu.degree}</h5>
                        <p className="text-cyan-400 font-semibold text-sm mb-2">{edu.institution}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes crew-card-in {
          from { transform: scale(0.92) translateY(16px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
        .crew-card-in { animation: crew-card-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </article>
  );
};

export default Team;
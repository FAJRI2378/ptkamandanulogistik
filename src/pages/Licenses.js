// src/pages/Licenses.jsx

import React, { useEffect, useState } from "react";
import { Shield, Award, CheckCircle, GraduationCap, ExternalLink } from "lucide-react";
import Seo from "../components/Seo";

// IMPORT ASSETS
import siupakImg from "../img/siup.webp";
import siukakImg from "../img/siukak.webp";
import isoImg from "../img/logo_iso.webp";
import mabt from "../img/MABT.webp";
import tot from "../img/TOT.webp";
import backgroundImageHeader from "../img/lisens.webp";

const Licenses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const licensesData = [
    { 
      id: 1, 
      name: "SIUP", 
      fullName: "Business Trading License", 
      description: "The primary operational license authorizing PT Kamandanu Jaya Samudera to conduct legal business activities and trade services within Indonesia.", 
      imageUrl: siupakImg, 
      badge: "Commercial Permit" 
    },
    { 
      id: 2, 
      name: "SIUKAK", 
      fullName: "Seafarer Recruitment & Placement License", 
      description: "Official permit from the Directorate General of Sea Transportation (Ministry of Transportation) for domestic and international crew placement, in compliance with Regulation No. 59 of 2021.", 
      imageUrl: siukakImg, 
      badge: "Operational Authority" 
    },
    { 
      id: 3, 
      name: "ISO & MLC", 
      fullName: "Quality Management & Labor Compliance", 
      description: "International standards for quality management and maritime labor protection, ensuring our operations meet global shipping industry requirements.", 
      imageUrl: isoImg, 
      badge: "Global Standard" 
    },
  ];

  const certificationData = [
    { 
      id: 4, 
      name: "Mindset Transformation", 
      fullName: "Mindset & Behavior Transformation (MABT)", 
      description: "A specialized certification focused on developing seafarers' character, integrity, and discipline to ensure peak performance and professionalism at sea.", 
      imageUrl: mabt, 
      badge: "Core Training" 
    },
    { 
      id: 5, 
      name: "Stress Management", 
      fullName: "ITF Stress Management & Coping Strategies", 
      description: "International certification aimed at maintaining mental health and psychological well-being for crew members operating in high-pressure maritime environments.", 
      imageUrl: tot, 
      badge: "Human Capital" 
    }
  ];

  return (
    <>
      <Seo
        title="Licenses & Maritime Certifications | PT Kamandanu Jaya Samudera"
        description="Official legalities and professional certifications of PT Kamandanu Jaya Samudera: SIUP, SIUKAK, ISO, MLC, and international maritime training certifications."
        url="/licenses"
      />

      <main className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center bg-[#0A2540] overflow-hidden pt-24 pb-40">
          <div
            className="absolute inset-0 z-0 opacity-40 bg-cover bg-center md:bg-fixed scale-105"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#F8FAFC] z-0" />

          <div className={`max-w-5xl mx-auto relative z-10 text-center px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Award size={14} className="text-blue-400" />
              <span className="text-blue-100 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Compliance Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1] md:leading-[0.9]">
              Trust & <br className="block md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300">Compliance</span>
            </h1>

            <p className="text-sm md:text-xl text-blue-100/70 leading-relaxed max-w-3xl mx-auto font-medium px-4">
              We operate with full legal authority and professionally certified personnel to meet the highest global maritime safety and management standards.
            </p>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <div className="max-w-7xl mx-auto px-6 -mt-20 md:-mt-32 relative z-20 pb-32">

          {/* Section: Corporate Licenses */}
          <section className="mb-24">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-12 text-center md:text-left">
              <div className="p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/20">
                <Shield className="text-white" size={28} />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight uppercase">Corporate Licenses</h2>
                <div className="h-1 w-12 bg-blue-600 rounded-full mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {licensesData.map((item) => (
                <LicenseCard key={item.id} data={item} />
              ))}
            </div>
          </section>

          {/* Section: Professional Certifications */}
          <section>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-12 text-center md:text-left">
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-xl shadow-emerald-500/20">
                <GraduationCap className="text-white" size={28} />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight uppercase">Professional Certifications</h2>
                <div className="h-1 w-12 bg-emerald-500 rounded-full mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {certificationData.map((item) => (
                <LicenseCard key={item.id} data={item} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

const LicenseCard = ({ data }) => (
  <div className="group bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(10,37,64,0.05)] border border-gray-100/50 overflow-hidden hover:shadow-[0_40px_80px_rgba(10,37,64,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
    <div className="relative h-64 md:h-72 bg-gray-50/50 flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 to-transparent" />
      <img 
        src={data.imageUrl} 
        alt={data.name} 
        className="max-w-full max-h-full object-contain relative z-10 transition-all duration-700 group-hover:scale-110 drop-shadow-xl" 
      />
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-white/90 backdrop-blur-sm shadow-sm px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black text-blue-600 border border-blue-50 uppercase tracking-widest">
          {data.badge}
        </div>
      </div>
    </div>
    
    <div className="p-8 md:p-10 flex-grow flex flex-col">
      <h3 className="text-2xl font-black text-[#0A2540] mb-1 group-hover:text-blue-600 transition-colors leading-tight uppercase">
        {data.name}
      </h3>
      <p className="text-[10px] md:text-[11px] font-black text-blue-500/80 mb-4 uppercase tracking-wider">
        {data.fullName}
      </p>
      <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base mb-8 italic">
        "{data.description}"
      </p>
      
      <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between gap-2">
        <a 
          href={data.imageUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-[#0A2540] font-black text-xs md:text-sm group/btn hover:text-blue-600 transition-colors"
        >
          View Document
          <ExternalLink size={14} className="text-blue-400 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
        <div className="flex items-center gap-1.5 text-emerald-600 text-[9px] font-black bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100 shrink-0">
          <CheckCircle size={12} strokeWidth={3} /> VALIDATED
        </div>
      </div>
    </div>
  </div>
);

export default Licenses;
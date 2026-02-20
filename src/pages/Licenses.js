// src/pages/Licenses.jsx

import React, { useEffect, useState } from "react";
import { Shield, Award, CheckCircle, GraduationCap, ExternalLink, FileText } from "lucide-react";
import Seo from "../components/Seo";

// IMPORT ASSETS
import siupakImg from "../img/siup.jpg"; 
import siukakImg from "../img/siukak.jpg";
import isoImg from "../img/logo_iso.png";
import mabt from "../img/MABT.png"; 
import tot from "../img/TOT.png";
import backgroundImageHeader from "../img/lisens.jpg";

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
      fullName: "Surat Izin Usaha Perdagangan",
      description: "Lisensi operasional utama yang mengesahkan PT Kamandanu Jaya Samudera untuk menjalankan aktivitas bisnis secara legal.",
      imageUrl: siupakImg,
      badge: "Business License",
    },
    {
      id: 2,
      name: "SIUKAK",
      fullName: "Surat Izin Usaha Keagenan Kapal",
      description: "Izin resmi untuk bertindak sebagai agen kapal, menjamin armada mematuhi hukum maritim Indonesia.",
      imageUrl: siukakImg,
      badge: "Operational Permit",
    },
    {
      id: 3,
      name: "ISO & MLC",
      fullName: "Quality Management Certifications",
      description: "Standar internasional untuk manajemen kualitas dan perlindungan tenaga kerja maritim global.",
      imageUrl: isoImg,
      badge: "International Standard",
    },
  ];

  const certificationData = [
    {
      id: 4,
      name: "Mindset Transformation",
      fullName: "Mindset & Behavior Transformation",
      description: "Sertifikasi pengembangan karakter untuk memastikan integritas dan performa unggul di laut.",
      imageUrl: tot,
      badge: "Professional Training",
    },
    {
      id: 5,
      name: "TOT Stress Management",
      fullName: "ITF Stress Management & Coping",
      description: "Sertifikasi internasional untuk menjaga kesehatan mental dan kesejahteraan kru di atas kapal.",
      imageUrl: mabt,
      badge: "Safety & Wellbeing",
    }
  ];

  return (
    <>
      <Seo
        title="Licenses & Maritime Certifications | PT Kamandanu Jaya Samudera"
        description="Legalitas resmi dan sertifikasi profesional PT Kamandanu Jaya Samudera."
      />

      <main className="bg-[#F8FAFC] min-h-screen">
        {/* --- MODERN HEADER SECTION --- */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0A2540] overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 z-0 opacity-40 bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 via-[#0A2540]/80 to-[#F8FAFC] z-0" />

          {/* Animated Glow Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />

          <div className={`max-w-5xl mx-auto relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-400/20 backdrop-blur-md">
              <Award size={14} /> Legal & Competence Portfolio
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Trust & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Compliance</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto font-medium">
              Kami beroperasi dengan legalitas penuh dan personil tersertifikasi secara profesional untuk memenuhi standar keamanan maritim global.
            </p>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-32">
          
          {/* Corporate Licenses Grid */}
          <div className="mb-28">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
                <Shield className="text-white" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Corporate Licenses</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {licensesData.map((item) => (
                <LicenseCard key={item.id} data={item} />
              ))}
            </div>
          </div>

          {/* Professional Certifications Grid */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-100">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Professional Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {certificationData.map((item) => (
                <LicenseCard key={item.id} data={item} isFullWidth />
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

// --- REUSABLE MODERN CARD COMPONENT ---
const LicenseCard = ({ data }) => (
  <div className="group bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
    {/* Image Container */}
    <div className="relative h-72 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
      
      <img
        src={data.imageUrl}
        alt={data.name}
        className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
      />
      
      <div className="absolute top-6 left-6">
         <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-blue-600 border border-blue-100 uppercase tracking-widest shadow-sm">
          {data.badge}
        </div>
      </div>
    </div>
    
    {/* Text Content */}
    <div className="p-10 flex-grow flex flex-col">
      <div className="mb-4">
        <h3 className="text-2xl font-black text-[#0A2540] mb-2 group-hover:text-blue-600 transition-colors">{data.name}</h3>
        <div className="h-1 w-12 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-500" />
      </div>
      
      <p className="text-xs font-black text-blue-500 mb-4 uppercase tracking-[0.15em]">{data.fullName}</p>
      <p className="text-gray-500 leading-relaxed font-medium mb-8">
        {data.description}
      </p>
      
      {/* Footer Card */}
      <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
        <a
          href={data.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#0A2540] font-black text-sm group/btn"
        >
          <span className="relative">
            View Document
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
          </span>
          <ExternalLink size={16} className="text-blue-600" />
        </a>
        
        <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black bg-emerald-50 px-4 py-2 rounded-xl">
          <CheckCircle size={14} strokeWidth={3} /> VALIDATED
        </div>
      </div>
    </div>
  </div>
);

export default Licenses;
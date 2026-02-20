// src/pages/Licenses.jsx

import React, { useEffect } from "react";
import { Shield, Award, CheckCircle, GraduationCap } from "lucide-react";
import Seo from "../components/Seo";

// IMPORT GAMBAR LISENSI
import siupakImg from "../img/siup.jpg"; 
import siukakImg from "../img/siukak.jpg";
import isoImg from "../img/logo_iso.png";

// IMPORT SERTIFIKAT BARU (Pastikan file sudah ada di folder img)
import mabt from "../img/MABT.png"; 
import tot from "../img/TOT.png";

const Licenses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const licensesData = [
    {
      id: 1,
      name: "SIUP",
      fullName: "Surat Izin Usaha Perdagangan",
      description: "Lisensi operasional utama yang mengesahkan PT Kamandanu Jaya Samudera untuk menjalankan aktivitas bisnis dan perdagangan layanan secara legal di Indonesia.",
      imageUrl: siupakImg,
      badge: "Business License",
      type: "legal"
    },
    {
      id: 2,
      name: "SIUKAK",
      fullName: "Surat Izin Usaha Keagenan Kapal",
      description: "Izin resmi untuk bertindak sebagai agen kapal, memastikan seluruh aktivitas armada di perairan Indonesia mematuhi hukum maritim yang berlaku.",
      imageUrl: siukakImg,
      badge: "Operational Permit",
      type: "legal"
    },
    {
      id: 3,
      name: "ISO & MLC",
      fullName: "Quality Management Certifications",
      description: "Standar internasional untuk manajemen kualitas dan perlindungan tenaga kerja maritim, menjamin efisiensi serta keamanan kru.",
      imageUrl: isoImg,
      badge: "International Standard",
      type: "legal"
    },
  ];

  const certificationData = [
    {
      id: 4,
      name: "Mindset Transformation",
      fullName: "Mindset and Behavior Transformation Certification",
      description: "Sertifikasi pengembangan karakter profesional bagi personil untuk memastikan integritas dan performa kerja yang unggul di lingkungan maritim.",
      imageUrl: tot,
      badge: "Professional Training",
      type: "cert"
    },
    {
      id: 5,
      name: "TOT on Stress Management",
      fullName: "Training of Trainers (TOT) on Stress Management",
      description: "Sertifikasi internasional (ITF) untuk manajemen stres dan koping awal, membekali pengawas dengan kemampuan menjaga kesehatan mental kru.",
      imageUrl: mabt,
      badge: "Safety & Wellbeing",
      type: "cert"
    }
  ];

  return (
    <>
      <Seo
        title="Licenses & Maritime Certifications | PT Kamandanu Jaya Samudera"
        description="Daftar lisensi resmi dan sertifikasi profesional PT Kamandanu Jaya Samudera, termasuk SIUP, SIUKAK, ISO, dan pelatihan kompetensi kru maritim."
        url="/licenses"
      />

      <main className="bg-[#F8FAFC] min-h-screen pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="bg-[#0A2540] py-20 px-6 text-center text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/10 skew-x-12 translate-x-10" />
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20">
              <Award size={14} /> Legal & Competence Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Licenses & <span className="text-blue-400">Certificates</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Kami beroperasi dengan legalitas penuh dan didukung oleh personil tersertifikasi secara profesional untuk standar keamanan global.
            </p>
          </div>
        </section>

        {/* SECTION 1: CORPORATE LICENSES */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-3xl font-black text-[#0A2540] mb-10 flex items-center gap-4">
            <Shield className="text-blue-600" size={32} /> Corporate Licenses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {licensesData.map((item) => (
              <LicenseCard key={item.id} data={item} />
            ))}
          </div>
        </div>

        {/* SECTION 2: PROFESSIONAL CERTIFICATIONS */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#0A2540] mb-10 flex items-center gap-4">
            <GraduationCap className="text-blue-600" size={32} /> Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {certificationData.map((item) => (
              <LicenseCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

// Sub-component untuk kartu agar kode lebih rapi
const LicenseCard = ({ data }) => (
  <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
    <div className="relative h-64 bg-gray-50 flex items-center justify-center p-6">
      <img
        src={data.imageUrl}
        alt={data.name}
        className="max-w-full max-h-full object-contain shadow-sm rounded-lg"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 border border-blue-100 uppercase tracking-tighter">
        {data.badge}
      </div>
    </div>
    
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-xl font-black text-[#0A2540] mb-1">{data.name}</h3>
      <p className="text-xs font-bold text-blue-500 mb-4 uppercase tracking-wider">{data.fullName}</p>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">{data.description}</p>
      
      <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
        <a
          href={data.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors flex items-center gap-1"
        >
          View Full Document
        </a>
        <div className="flex items-center gap-1 text-emerald-500 text-[10px] font-black bg-emerald-50 px-3 py-1 rounded-full">
          <CheckCircle size={12} /> VERIFIED
        </div>
      </div>
    </div>
  </div>
);

export default Licenses;
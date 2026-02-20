// src/pages/Gallery.jsx

import React, { useEffect, useState } from "react";
import { Camera, Maximize2 } from "lucide-react";
import Seo from "../components/Seo"; // Pastikan import SEO jika ada

// IMPORT SEMUA GAMBAR
import g1 from "../img/g1.jpg";
import g2 from "../img/g2.jpg";
import g3 from "../img/g3.jpg";
import g4 from "../img/g4.jpg";
import g5 from "../img/g5.jpg";
import g6 from "../img/g6.jpg";
import g7 from "../img/g7.jpg";
import g8 from "../img/g8.jpg";
import g9 from "../img/g9.jpg";
import g10 from "../img/g10.jpg";
import g11 from "../img/g11.jpg";
import g12 from "../img/g12.jpg";
import g13 from "../img/g13.jpg";
import g14 from "../img/g14.jpg";
import g15 from "../img/g15.jpg";
import g16 from "../img/g16.jpg";
import g17 from "../img/g17.jpg";
import backgroundImageHeader from "../img/gh.png";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Structured Data Injection
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Maritime Operations Gallery - PT Kamandanu Jaya Samudera",
      "description": "Visual documentation of our professional seafarers, vessel operations, and maritime training activities.",
      "publisher": {
        "@type": "Organization",
        "name": "PT Kamandanu Jaya Samudera"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  // DATA GALERI DENGAN DESKRIPSI (SEO OPTIMIZED)
  const galleryData = [
    { id: 1, imageUrl: g1, caption: "Professional Crew Onboard" },
    { id: 2, imageUrl: g2, caption: "Maritime Safety Training" },
    { id: 3, imageUrl: g3, caption: "Vessel Bridge Operations" },
    { id: 4, imageUrl: g4, caption: "Engine Room Maintenance" },
    { id: 5, imageUrl: g5, caption: "Crew Deployment Activity" },
    { id: 6, imageUrl: g6, caption: "International Shipping Logistics" },
    { id: 7, imageUrl: g7, caption: "Navigation Management" },
    { id: 8, imageUrl: g8, caption: "Seafarer Certification Ceremony" },
    { id: 9, imageUrl: g9, caption: "Deck Crew Operations" },
    { id: 10, imageUrl: g10, caption: "Safety Drill Documentation" },
    { id: 11, imageUrl: g11, caption: "Kegiatan Sosial" },
    { id: 12, imageUrl: g12, caption: "Technical Maritime Support" },
    { id: 13, imageUrl: g13, caption: "Global Manning Services" },
    { id: 14, imageUrl: g14, caption: "Marine Engineering Team" },
    { id: 15, imageUrl: g15, caption: "Cargo Handling Process" },
    { id: 16, imageUrl: g16, caption: "Crew Wellbeing Program" },
    { id: 17, imageUrl: g17, caption: "Maritime Leadership Excellence" },
  ];

  return (
    <>
      <Seo 
        title="Photo Gallery | PT Kamandanu Jaya Samudera"
        description="Explore our visual journey. View our professional crew, maritime operations, and vessel management in action."
      />

  <section className="min-h-screen bg-[#F8FAFC]">
  {/* --- AREA HEADER DENGAN BACKGROUND --- */}
<header className="relative pt-12 pb-24 bg-[#0A2540] overflow-hidden text-center">
  {/* BACKGROUND IMAGE LAYER - Diperbaiki agar tidak terlalu zoom */}
  <div 
    className="absolute inset-0 z-0 opacity-30 bg-no-repeat transition-transform duration-700"
    style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(10, 37, 64, 0.3), #0A2540), url(${backgroundImageHeader})`,
      // Menggunakan 'contain' agar gambar tidak terpotong, atau '100% 100%' untuk pas badan
      backgroundSize: 'cover', 
      backgroundPosition: 'center 20%', // Menyesuaikan fokus gambar agak ke atas sedikit
    }}
  />
    {/* Elemen Dekoratif Cahaya */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-50 z-0" />

    <div className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
        <Camera size={14} /> Operational Excellence
      </span>

      <h1 id="gallery-heading" className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">
        Our Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Portfolio</span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-blue-100/80 text-lg md:text-xl italic leading-relaxed drop-shadow-md">
        "Capturing our commitment to providing world-class maritime human resources and professional vessel management."
      </p>

      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-10 rounded-full" />
    </div>
  </header>

  {/* --- AREA GRID GALLERY (Background Bersih/Putih) --- */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      {galleryData.map((photo) => (
        <div key={photo.id} className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-gray-100">
          <a href={photo.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative overflow-hidden">
           <img
  src={photo.imageUrl}
  alt={`${photo.caption} - PT Kamandanu Jaya Samudera`}
  loading="lazy"
  className="w-full h-48 md:h-56 lg:h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-700"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium leading-snug">{photo.caption}</p>
              </div>
              <div className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <Maximize2 size={18} />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
};

export default Gallery;
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

      <section
        className="min-h-screen pt-28 md:pt-36 py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              <Camera size={14} />
              Operational Excellence
            </span>

            <h1
              id="gallery-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900"
            >
              Our Visual <span className="text-blue-600">Portfolio</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-base md:text-lg italic">
              "Capturing our commitment to providing world-class maritime human resources and professional vessel management."
            </p>

            <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
          </div>

          {/* GALLERY GRID */}
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {galleryData.map((photo) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
              >
                <a
                  href={photo.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.imageUrl}
                      alt={`${photo.caption} - PT Kamandanu Jaya Samudera`}
                      loading="lazy"
                      className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Caption on Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-sm font-medium leading-snug">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Icon Zoom */}
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
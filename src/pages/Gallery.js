// src/pages/Gallery.jsx

import React, { useEffect, useState } from "react";
import { Camera, Maximize2 } from "lucide-react";

// IMPORT SEMUA GAMBAR (WAJIB DI REACT)
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
    document.title = "Photo Gallery - PT Kamandanu Jaya Samudera";
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // DATA GALERI (LENGKAP + SEO)
  const galleryData = [
    { id: 1, imageUrl: g1 },
    { id: 2, imageUrl: g2},
    { id: 3, imageUrl: g3 },
    { id: 4, imageUrl: g4},
    { id: 5, imageUrl: g5 },
    { id: 6, imageUrl: g6},
    { id: 7, imageUrl: g7 },
    { id: 8, imageUrl: g8},
    { id: 9, imageUrl: g9},
    { id: 10, imageUrl: g10},
    { id: 11, imageUrl: g11},
    { id: 12, imageUrl: g12},
    { id: 13, imageUrl: g13},
    { id: 14, imageUrl: g14},
    { id: 15, imageUrl: g15 },
    { id: 16, imageUrl: g16},
    { id: 17, imageUrl: g17},
  ];

  // STRUCTURED DATA (VALID GOOGLE SCHEMA)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Photo Gallery - PT Kamandanu Jaya Samudera",
    description:
      "Official photo gallery showcasing maritime operations, vessels, and professional services of PT Kamandanu Jaya Samudera.",
    url: "https://ptkamandanujayasamudera.com/gallery",
    image: galleryData.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: photo.imageUrl,
      caption: photo.caption,
    })),
  };

  return (
    <>
      {/* SEO STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <section
        className="min-h-screen pt-28 md:pt-36 py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              <Camera size={14} />
              Visual Story
            </span>

            <h1
              id="gallery-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900"
            >
              Photo <span className="text-blue-600">Gallery</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
              A visual overview of our maritime operations, vessels, and
              professional services.
            </p>

            <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
          </div>

          {/* GALLERY GRID */}
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            {galleryData.map((photo) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <a
                  href={photo.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View image: ${photo.caption}`}
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs font-semibold drop-shadow-lg">
                      {photo.caption}
                    </p>
                  </div>

                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={16} className="text-gray-700" />
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

// src/pages/Licenses.jsx

import React, { useEffect, useState } from "react";
import { Shield, FileText, ExternalLink, Award, CheckCircle, Download } from "lucide-react";
import Seo from "../components/Seo";

// IMPORT GAMBAR
import siupImg from "../img/siup.jpg";
import siukakImg from "../img/siukak.jpg";
import isoImg from "../img/logo_iso.png";

const Licenses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  const licensesData = [
    {
      id: 1,
      name: "SIUPAK",
      fullName: "Surat Izin Usaha Perekrutan & Penempatan Awak Kapal",
      description: "Official license from the Indonesian Ministry of Transportation for the recruitment and placement of ship crews globally.",
      imageUrl: siupImg,
      badge: "National Standard",
    },
    {
      id: 2,
      name: "SIUKAK",
      fullName: "Surat Izin Usaha Keagenan Kapal",
      description: "Legal permit to act as a ship agent, ensuring all vessel activities in Indonesian waters comply with maritime laws.",
      imageUrl: siukakImg,
      badge: "Operational Permit",
    },
    {
      id: 3,
      name: "ISO Certification",
      fullName: "ISO 9001:2015 Management System",
      description: "International recognition of our quality management systems, ensuring efficiency, safety, and consistent service quality.",
      imageUrl: isoImg,
      badge: "International Quality",
    },
  ];

  // STRUCTURED DATA (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "serviceType": "Maritime Licensing",
    "provider": {
      "@type": "Organization",
      "name": "PT Kamandanu Jaya Samudera",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta Utara",
        "addressCountry": "ID"
      }
    },
    "hasCredential": licensesData.map((license) => ({
      "@type": "EducationalOccupationalCredential",
      "name": license.name,
      "credentialCategory": "Professional License",
      "description": license.description
    }))
  };

   return (
  <>
    <Seo
      title="Official Licenses & Maritime Certifications | PT Kamandanu Jaya Samudera"
      description="View the official licenses of PT Kamandanu Jaya Samudera, including SIUPAK, SIUKAK, and ISO certifications."
      url="/licenses"
    />

    <main className="bg-gradient-to-b from-[#0A2540] to-[#0F3A60] min-h-screen pt-32 pb-20">

      {/* HERO */}
      <section className="px-6 text-center text-white max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
          <Award size={14} /> Legal & Compliance
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Our <span className="text-blue-400">Licenses</span>
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed">
          Fully licensed and certified maritime agency operating under Indonesian
          and international standards.
        </p>
      </section>

      {/* CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {licensesData.map((license) => (
            <div
              key={license.id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={license.imageUrl}
                  alt={license.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                    <Shield size={22} />
                  </div>

                  <h2 className="text-xl font-bold text-[#0A2540]">
                    {license.name}
                  </h2>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  {license.fullName}
                </p>

                <p className="text-sm text-gray-600 mb-8">
                  {license.description}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href={license.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold text-sm hover:text-blue-800"
                  >
                    View Document
                  </a>

                  <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                    <CheckCircle size={14} />
                    Verified
                  </div>
                </div>
              </div>
            </div>

          ))}

        </div>
      </section>

    </main>
  </>
);


    
    
};

export default Licenses;
// src/pages/Licenses.jsx

import React, { useEffect, useState } from "react";
import { Shield, FileText, ExternalLink } from "lucide-react";

// IMPORT GAMBAR (WAJIB DI REACT)
import siupImg from "../img/siup.jpg";
import siukakImg from "../img/siukak.jpg";
import isoImg from "../img/logo_iso.png";

const Licenses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title =
      "Our Licenses & Certifications - PT Kamandanu Jaya Samudera";
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // DATA LISENSI (LENGKAP & SEO FRIENDLY)
  const licensesData = [
    {
      id: 1,
      name: "SIUPAK",
      description:
        "Surat Izin Usaha Perusahaan Angkutan Laut sebagai legal authorization for maritime operations.",
      imageUrl: siupImg,
    },
    {
      id: 2,
      name: "SIUKAK",
      description:
        "Surat Izin Usaha Keagenan Kapal ensuring compliance with national shipping regulations.",
      imageUrl: siukakImg,
    },
    {
      id: 3,
      name: "ISO Certification",
      description:
        "ISO certified management system demonstrating international quality and safety standards.",
      imageUrl: isoImg,
    },
  ];

  // STRUCTURED DATA (VALID SCHEMA)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Licenses & Certifications",
    url: "https://ptkamandanujayasamudera.com/licenses",
    description:
      "Official licenses and certifications of PT Kamandanu Jaya Samudera including SIUPAK, SIUKAK, and ISO certifications.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: licensesData.map((license, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ImageObject",
          name: license.name,
          description: license.description,
          contentUrl: license.imageUrl,
        },
      })),
    },
  };

  return (
    <>
      {/* SEO STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

    <section
  className="min-h-screen pt-36 sm:pt-40 md:pt-48 lg:pt-56 py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50"
  aria-labelledby="licenses-heading"
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
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              Official Documents
            </span>

            <h1
              id="licenses-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900"
            >
              Our Licenses &{" "}
              <span className="text-blue-600">Certifications</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
              PT Kamandanu Jaya Samudera operates in full compliance with national
              and international maritime standards.
            </p>

            <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
          </div>

          {/* LICENSE GRID */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {licensesData.map((license) => (
              <div
                key={license.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={license.imageUrl}
                    alt={`${license.name} - PT Kamandanu Jaya Samudera`}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Shield size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {license.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm flex-grow">
                    {license.description}
                  </p>

                  <a
                    href={license.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <FileText size={18} />
                    View Full License
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Licenses;

import React, { useEffect, useState } from "react";
import {
  Award,
  Globe,
  Users,
  ShieldCheck,
  Anchor,
  Target,
  Truck,
  ChevronRight,
  MapPin,
} from "lucide-react";
import Seo from "../components/Seo.tsx";
import backgroundImageHeader from "../img/ah.webp";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PT Kamandanu Jaya Logistik",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Warakas 3 No.23, RT.010 RW.004, Lantai 2",
        addressLocality: "Jakarta Utara",
        addressRegion: "DKI Jakarta",
        postalCode: "14330",
        addressCountry: "ID",
      },
      description:
        "Perusahaan logistik dan freight forwarding terpercaya di Indonesia — PT Kamandanu Jaya Logistik menyediakan solusi marine logistics, sea freight, dan cargo transportation kelas dunia.",
      url: "https://www.ptkamandanujayalogistik.com/about",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <>
      <Seo
        title="Tentang Kami | PT Kamandanu Jaya Logistik - Freight Forwarding & Marine Logistics"
        description="PT Kamandanu Jaya Logistik adalah perusahaan logistik terpercaya di Jakarta Utara. Menyediakan freight forwarding, sea freight, marine logistics, dan cargo transportation dengan jaringan global."
        url="/about"
        keywords="tentang Kamandanu Jaya Logistik, profil perusahaan logistik, freight forwarding Jakarta, marine logistics Indonesia, cargo transportation"
      />

      {/* ── HERO ── */}
      <section
        className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden"
        aria-label="Header halaman About"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          role="img"
          aria-label="Kantor PT Kamandanu Jaya Logistik, Jakarta Utara"
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
                <Anchor size={14} aria-hidden="true" /> Global Logistics Excellence
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Navigating{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Your Supply Chain
                </span>
              </h1>
              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Memperkuat perdagangan global dengan solusi freight forwarding,
                marine logistics, dan cargo transportation terpercaya dari
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <main
        className="max-w-7xl mx-auto px-4 -mt-10 pb-24"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {/* WHO WE ARE */}
        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          <div
            className={`lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-black text-[#0A2540] mb-6 flex items-center gap-3">
              <Truck className="text-blue-600" size={32} aria-hidden="true" />
              Strategic Logistics Partner
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>PT Kamandanu Jaya Logistik</strong> adalah perusahaan
                logistik dan freight forwarding profesional yang berkantor pusat
                di Jakarta Utara. Kami melayani kebutuhan pengiriman kargo
                domestik dan internasional, mulai dari pengurusan dokumen
                ekspor-impor hingga distribusi last-mile.
              </p>
              <p>
                Didukung oleh{" "}
                <strong>sistem digital terintegrasi</strong>, kami memastikan
                100% kepatuhan terhadap regulasi bea cukai, IMDG Code, dan
                peraturan kelautan internasional demi kelancaran rantai pasokan
                klien kami.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 border border-slate-100">
                  <MapPin size={16} className="text-blue-500" aria-hidden="true" />{" "}
                  Jakarta Utara, Indonesia
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 border border-slate-100">
                  <Users size={16} className="text-blue-500" aria-hidden="true" />{" "}
                  300+ Logistics Partners
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <Globe size={48} className="text-blue-200 mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-4">Global Network</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Dengan jaringan agen di lebih dari 50 negara, kami memberikan
                  akses cepat ke rute pengiriman terbaik untuk kebutuhan kargo
                  Anda.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">
                  Standarisasi
                </p>
                <p className="text-xl font-black italic">
                  "Quality & Integrity"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <section
          className="grid md:grid-cols-2 gap-8"
          aria-labelledby="vision-mission-heading"
        >
          <h2 id="vision-mission-heading" className="sr-only">
            Visi dan Misi PT Kamandanu Jaya Logistik
          </h2>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
            <div className="inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600 mb-8">
              <Target size={32} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-black text-[#0A2540] mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "Menjadi perusahaan logistik dan freight forwarding terdepan di
              Indonesia yang diakui secara global atas keandalan, integritas
              profesional, dan inovasi dalam rantai pasokan."
            </p>
          </div>

          <div className="bg-[#0A2540] p-10 rounded-[3rem] shadow-xl text-white relative overflow-hidden">
            <Award
              size={120}
              className="absolute top-0 right-0 p-8 opacity-10"
              aria-hidden="true"
            />
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <ShieldCheck size={32} className="text-blue-400" aria-hidden="true" /> Our
              Mission
            </h3>
            <ul className="space-y-6" aria-label="Misi perusahaan">
              {[
                "Menyediakan solusi freight forwarding dan sea freight yang efisien, transparan, dan kompetitif.",
                "Membangun ekosistem logistik yang mendukung pertumbuhan bisnis klien di pasar global.",
                "Menjaga keamanan dan ketepatan waktu pengiriman kargo sebagai prioritas utama.",
                "Mematuhi sepenuhnya regulasi bea cukai, IMDG Code, dan peraturan kelautan internasional.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <ChevronRight
                    className="text-blue-400 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300 text-lg font-medium">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
import React, { useEffect, useState } from "react";
import {
  Shield,
  Award,
  CheckCircle,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import Seo from "../components/Seo.tsx";

import siupakImg from "../img/siup.webp";
import siukakImg from "../img/siukak.webp";
import isoImg from "../img/logo_iso.webp";
import mabt from "../img/MABT.webp";
import tot from "../img/TOT.webp";
import backgroundImageHeader from "../img/lisens.webp";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

interface LicenseItem {
  id: number;
  name: string;
  fullName: string;
  description: string;
  imageUrl: string;
  badge: string;
}

const licensesData: LicenseItem[] = [
  {
    id: 1,
    name: "SIUP",
    fullName: "Surat Izin Usaha Perdagangan",
    description:
      "Izin operasional utama yang memberikan kewenangan kepada PT Kamandanu Jaya Logistik untuk menjalankan kegiatan usaha perdagangan dan jasa logistik secara sah di Indonesia.",
    imageUrl: siupakImg,
    badge: "Commercial Permit",
  },
  {
    id: 2,
    name: "SIUJPT",
    fullName: "Izin Usaha Jasa Pengurusan Transportasi",
    description:
      "Izin resmi dari Kementerian Perhubungan untuk menyelenggarakan jasa freight forwarding, pengurusan dokumen, dan manajemen kargo ekspor-impor.",
    imageUrl: siukakImg,
    badge: "Freight Forwarding License",
  },
  {
    id: 3,
    name: "ISO & Customs",
    fullName: "Quality Management & Customs Compliance",
    description:
      "Standar internasional yang memastikan sistem manajemen mutu dan kepatuhan bea cukai dalam setiap operasional pengiriman kargo global kami.",
    imageUrl: isoImg,
    badge: "Global Standard",
  },
];

const certificationData: LicenseItem[] = [
  {
    id: 4,
    name: "Logistics Excellence",
    fullName: "Logistics & Supply Chain Management Certification",
    description:
      "Sertifikasi yang menjamin kompetensi tim kami dalam manajemen rantai pasokan, pergudangan, dan distribusi kargo internasional.",
    imageUrl: mabt,
    badge: "Core Training",
  },
  {
    id: 5,
    name: "IMDG Compliance",
    fullName: "Dangerous Goods & IMDG Code Certification",
    description:
      "Sertifikasi kepatuhan internasional untuk penanganan, pengemasan, dan pengiriman barang berbahaya sesuai standar IMO/IMDG Code.",
    imageUrl: tot,
    badge: "Safety Compliance",
  },
];

interface LicenseCardProps {
  data: LicenseItem;
  delay: number;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ data, delay }) => (
  <article
    className="group bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-700 flex flex-col opacity-0 animate-fadeInUp"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    aria-label={`Lisensi: ${data.fullName}`}
  >
    <div className="relative h-64 flex items-center justify-center p-8 bg-gray-50">
      <img
        src={data.imageUrl}
        alt={`Dokumen lisensi ${data.name} - PT Kamandanu Jaya Logistik`}
        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        decoding="async"
        style={{
          imageRendering: "-webkit-optimize-contrast",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />
      <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest shadow">
        {data.badge}
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-black mb-1 uppercase text-[#0A2540]">
        {data.name}
      </h3>
      <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">
        {data.fullName}
      </p>
      <p className="text-gray-500 leading-relaxed mb-8 italic">
        "{data.description}"
      </p>

      <div className="mt-auto flex items-center justify-between">
        <a
          href={data.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-black text-sm hover:text-blue-600 transition"
          aria-label={`Lihat dokumen ${data.name} PT Kamandanu Jaya Logistik`}
        >
          View Document
          <ExternalLink size={14} aria-hidden="true" />
        </a>

        <div className="flex items-center gap-1 text-emerald-600 text-xs font-black">
          <CheckCircle size={14} strokeWidth={3} aria-hidden="true" /> VALIDATED
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
    `}</style>
  </article>
);

const Licenses: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <>
      <Seo
        title="Lisensi & Sertifikasi | PT Kamandanu Jaya Logistik - Freight Forwarding Resmi"
        description="Lisensi resmi dan sertifikasi profesional PT Kamandanu Jaya Logistik: SIUP, SIUJPT, ISO, IMDG Compliance, dan berbagai izin freight forwarding internasional."
        url="/licenses"
        keywords="lisensi freight forwarding, SIUJPT logistik, ISO logistik Indonesia, IMDG compliance, sertifikasi Kamandanu Jaya Logistik"
      />

      <main
        className="bg-[#F8FAFC] min-h-screen text-[#0A2540]"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {/* HERO */}
        <section
          className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden"
          aria-label="Header halaman Lisensi"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
            role="img"
            aria-label="Sertifikasi dan lisensi PT Kamandanu Jaya Logistik"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                <Award size={14} aria-hidden="true" /> Compliance Portfolio
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Trust{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  & Compliance
                </span>
              </h1>

              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Kami beroperasi dengan otoritas hukum penuh dan personel
                bersertifikat untuk memenuhi standar logistik dan freight
                forwarding tertinggi secara global.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 pb-32 pt-20">

          {/* Corporate Licenses */}
          <section className="mb-24" aria-labelledby="corporate-licenses-heading">
            <div
              className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="p-3 bg-blue-600 rounded-2xl shadow-xl">
                <Shield className="text-white" size={26} aria-hidden="true" />
              </div>
              <h2
                id="corporate-licenses-heading"
                className="text-3xl md:text-4xl font-black uppercase"
              >
                Corporate Licenses
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {licensesData.map((item, index) => (
                <LicenseCard key={item.id} data={item} delay={index * 150} />
              ))}
            </div>
          </section>

          {/* Professional Certifications */}
          <section aria-labelledby="professional-cert-heading">
            <div
              className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-xl">
                <GraduationCap className="text-white" size={26} aria-hidden="true" />
              </div>
              <h2
                id="professional-cert-heading"
                className="text-3xl md:text-4xl font-black uppercase"
              >
                Professional Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certificationData.map((item, index) => (
                <LicenseCard key={item.id} data={item} delay={index * 150} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Licenses;
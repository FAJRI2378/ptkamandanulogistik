import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  MapPin,
  Image as ImageIcon,
  X,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import backgroundImageHeader from "../img/hp.webp";
import Seo from "../components/Seo.tsx";

// Scroller Logos
import l1 from "../img/lclient1.webp";
import l2 from "../img/lclient2.webp";
import l3 from "../img/lclient3.webp";
import l4 from "../img/lclient4.webp";
import l5 from "../img/lclient5.webp";
import l6 from "../img/lclient6.webp";
import l7 from "../img/lclient7.webp";
import l8 from "../img/lclient8.webp";
import l9 from "../img/lclient9.webp";
import l10 from "../img/yuhua.webp";

// MoU Partner Logos
import stipJakarta from "../img/logo_stip.webp";
import poltekpelBanten from "../img/logo_poli.webp";
import bp3ip from "../img/bp3ip.webp";
import pip from "../img/pip.webp";
import ht from "../img/hangtuah.webp";
import smkp from "../img/smkp.webp";

// Documentation Images
import stipDoc1 from "../img/stip_ttd.webp";
import bantenDoc1 from "../img/ttd_poli.webp";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

interface Partner {
  name: string;
  fullName: string;
  type: string;
  description: string;
  region: string;
  logo: string;
  website: string;
  documentation: string | null;
  docTitle?: string;
  highlights: string[];
}

const mouPartners: Partner[] = [
  {
    name: "STIP Jakarta",
    fullName: "Jakarta Maritime Higher Education Institute",
    type: "Academic Maritime Partner",
    description:
      "Kemitraan strategis untuk menyediakan tenaga ahli maritim terlatih yang siap mendukung operasional logistik dan fleet management kami di tingkat internasional.",
    region: "Jakarta, Indonesia",
    logo: stipJakarta,
    website: "https://www.stipjakarta.ac.id",
    documentation: stipDoc1,
    docTitle: "Strategic MoU Signing",
    highlights: [
      "Maritime Training & Logistics Programs",
      "Officer Recruitment Pipeline",
      "Fresh Graduate Placement",
      "Industry Expert Collaboration",
      "Logistics Technology Workshop",
      "Port Operations Training",
    ],
  },
  {
    name: "Poltekpel Banten",
    fullName: "Banten Maritime Polytechnic",
    type: "Academic Maritime Partner",
    description:
      "Pusat keunggulan pelatihan vokasi maritim. Bermitra untuk mengembangkan tenaga logistik siap industri dan mendukung operasional pengiriman kargo global.",
    region: "Banten, Indonesia",
    logo: poltekpelBanten,
    website: "https://poltekpel-banten.ac.id",
    documentation: bantenDoc1,
    docTitle: "Institutional Partnership",
    highlights: [
      "On-the-Job Training Collaboration",
      "Maritime Safety & Cargo Handling",
      "Industry Placement Programs",
      "Logistics Seminars & Workshops",
      "Port & Vessel Operations Training",
    ],
  },
  {
    name: "BP3IP Jakarta",
    fullName: "Center for Maritime Education & Advanced Training",
    type: "Training Partner",
    description:
      "Lembaga pelatihan maritim lanjutan yang berfokus pada peningkatan kompetensi profesional dan sertifikasi untuk mendukung operasional logistik kelas dunia.",
    region: "Jakarta, Indonesia",
    logo: bp3ip,
    website: "https://bp3ip.ac.id/",
    documentation: null,
    highlights: [
      "Cargo Handling Training",
      "Dangerous Goods (IMDG) Certification",
      "Industry Placement Programs",
      "Medical Check-Up Services",
      "Certificate Upgrading Programs",
      "Logistics Safety Training",
    ],
  },
  {
    name: "PIP Makassar",
    fullName: "Indonesian Maritime Polytechnic Makassar",
    type: "Academic Maritime Partner",
    description:
      "Pusat keunggulan pelatihan vokasi maritim yang bermitra untuk mengembangkan profesional logistik maritim yang kompetitif secara global.",
    region: "Makassar, Indonesia",
    logo: pip,
    website: "https://pipmakassar.ac.id/",
    documentation: null,
    highlights: [
      "Logistics & Port Operations Training",
      "Maritime Safety Training",
      "Industry Placement Programs",
      "Certification Upgrading Programs",
      "Fresh Graduate Recruitment",
      "Cadet & Trainee Placement",
    ],
  },
  {
    name: "SMKS Hang Tuah Maritime Jakarta",
    fullName: "SMKS Hang Tuah Maritime Jakarta",
    type: "Vocational Education Partner",
    description:
      "Bermitra dalam pengembangan pendidikan maritim vokasi. Mendukung penempatan lulusan muda sebagai tenaga logistik profesional.",
    region: "Jakarta, Indonesia",
    logo: ht,
    website:
      "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/C0A3BAE0-016F-412F-9F91-AB8FAB6EAE30",
    documentation: null,
    highlights: [
      "Cadet & Trainee Placement",
      "Fresh Graduate Recruitment",
      "Industry Speaker & Instructor Collaboration",
    ],
  },
  {
    name: "SMK Pelayaran Jakarta",
    fullName: "Jakarta Maritime Vocational School",
    type: "Vocational Education Partner",
    description:
      "Fokus membangun fondasi kuat bagi calon tenaga logistik maritim dan menjembatani pendidikan vokasi dengan kebutuhan industri global.",
    region: "Jakarta, Indonesia",
    logo: smkp,
    website: "https://smkpelayaranjkt.sch.id/",
    documentation: null,
    highlights: [
      "Cadet & Trainee Placement",
      "Fresh Graduate Recruitment",
      "Industry Speaker & Instructor Collaboration",
    ],
  },
];

const Clients: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const scrollerLogos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <>
      <Seo
        title="Mitra & Klien Strategis | PT Kamandanu Jaya Logistik - Jaringan Logistik Global"
        description="PT Kamandanu Jaya Logistik membangun kemitraan strategis dengan institusi maritim terkemuka Indonesia untuk memastikan layanan freight forwarding dan marine logistics berkualitas tertinggi."
        url="/clients"
        keywords="mitra logistik, klien freight forwarding, jaringan logistik Indonesia, maritime education partner, shipping company clients, Kamandanu Jaya Logistik partners"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT Kamandanu Jaya Logistik",
          url: "https://ptkamandanujayalogistik.com",
          logo: "https://ptkamandanujayalogistik.com/logo.png",
          brand: "Kamandanu Logistics",
          memberOf: [
            { "@type": "EducationalOrganization", name: "STIP Jakarta" },
            { "@type": "EducationalOrganization", name: "Poltekpel Banten" },
          ],
        })}
      </script>

      {/* HERO */}
      <section
        className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden"
        aria-label="Header halaman Mitra & Klien"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          role="img"
          aria-label="Jaringan mitra logistik PT Kamandanu Jaya Logistik"
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
                <ShieldCheck size={14} aria-hidden="true" /> Verified Global Network
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Partnerships{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Driven by Quality
                </span>
              </h1>
              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Kami membangun aliansi strategis dengan institusi maritim terbaik
                Indonesia untuk memastikan layanan logistik berkaliber
                internasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <main
        className="max-w-7xl mx-auto px-4 -mt-10 pb-24 relative z-20"
        style={{ fontFamily: FONT_FAMILY }}
      >
        <section
          className="grid lg:grid-cols-2 gap-8 mb-32"
          aria-labelledby="partners-heading"
        >
          <h2 id="partners-heading" className="sr-only">
            Mitra Strategis PT Kamandanu Jaya Logistik
          </h2>

          {mouPartners.map((partner, idx) => (
            <article
              key={idx}
              className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
              aria-label={`Mitra: ${partner.fullName}`}
            >
              <div className="p-8 md:p-12 h-full flex flex-col justify-center">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-gray-100 group-hover:bg-blue-50 transition-colors shrink-0">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name} - mitra PT Kamandanu Jaya Logistik`}
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest">
                      {partner.type}
                    </span>
                    <h3 className="text-3xl font-black text-[#0A2540] mt-1 mb-3">
                      {partner.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} aria-hidden="true" /> {partner.region}
                      </span>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-blue-500 hover:underline"
                        aria-label={`Kunjungi situs resmi ${partner.name}`}
                      >
                        Official Site <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <p
                  className={`text-gray-600 leading-relaxed text-lg ${
                    partner.documentation ? "mb-8" : "mb-10"
                  }`}
                >
                  {partner.description}
                </p>

                <div
                  className={`grid ${
                    partner.documentation ? "md:grid-cols-2" : "grid-cols-1"
                  } gap-8`}
                >
                  <div className="space-y-4">
                    <h4 className="font-black text-[#0A2540] text-sm uppercase tracking-widest flex items-center gap-2">
                      <CheckCircle
                        size={18}
                        className="text-emerald-500"
                        aria-hidden="true"
                      />{" "}
                      Collaboration
                    </h4>
                    <div
                      className={`grid gap-3 ${
                        partner.documentation ? "grid-cols-1" : "md:grid-cols-2"
                      }`}
                    >
                      {partner.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm font-bold text-gray-700 bg-slate-50/50 p-2 rounded-xl border border-transparent hover:border-blue-100 transition-all"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"
                            aria-hidden="true"
                          />
                          <span className="leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {partner.documentation && (
                    <div
                      className="relative rounded-3xl overflow-hidden cursor-pointer group/img h-48 self-end"
                      onClick={() => setSelectedPartner(partner)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSelectedPartner(partner)
                      }
                      aria-label={`Lihat dokumentasi MoU ${partner.name}`}
                    >
                      <img
                        src={partner.documentation}
                        alt={`Dokumentasi MoU ${partner.name} - PT Kamandanu Jaya Logistik`}
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                          <ImageIcon size={24} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold text-xs bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                          View Document
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* LOGO MARQUEE */}
        <section
          className="mb-32"
          aria-labelledby="clients-marquee-heading"
        >
          <div className="text-center mb-16">
            <h2
              id="clients-marquee-heading"
              className="text-4xl font-black text-[#0A2540] mb-4"
            >
              World-Class Portfolios
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Dipercaya oleh pemilik kapal dan operator logistik terkemuka di
              seluruh industri maritim global.
            </p>
          </div>

          <div
            className="relative overflow-hidden py-12 space-y-10"
            aria-label="Logo klien PT Kamandanu Jaya Logistik"
          >
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
              {[...scrollerLogos, ...scrollerLogos].map((logo, i) => (
                <div
                  key={`top-${i}`}
                  className="w-40 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-700 hover:scale-110"
                >
                  <img
                    src={logo}
                    alt={`Klien PT Kamandanu Jaya Logistik ${(i % 10) + 1}`}
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <div className="flex animate-marquee-reverse whitespace-nowrap gap-16 items-center">
              {[...scrollerLogos, ...scrollerLogos].map((logo, i) => (
                <div
                  key={`bottom-${i}`}
                  className="w-40 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-700 hover:scale-110"
                >
                  <img
                    src={logo}
                    alt={`Partner logistik Kamandanu ${(i % 10) + 1}`}
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* MODAL DOCUMENTATION */}
  {/* MODAL DOCUMENTATION */}
{selectedPartner && (
  <div
    className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-all duration-500"
    onClick={() => setSelectedPartner(null)}
    role="dialog"
    aria-modal="true"
    aria-label={`Dokumentasi MoU ${selectedPartner.name}`}
  >
    <div
      className="relative max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-scale-in"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-6 right-6 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black transition-all"
        onClick={() => setSelectedPartner(null)}
        aria-label="Tutup modal"
      >
        <X size={24} />
      </button>

      <div className="grid md:grid-cols-2">

        <div className="h-[400px] md:h-full">
          <img
            src={selectedPartner.documentation ?? ""}
            alt={`Dokumen MoU resmi ${selectedPartner.name} dengan PT Kamandanu Jaya Logistik`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-50">
          <span className="text-blue-600 font-black text-xs tracking-widest uppercase mb-2">
            {selectedPartner.name}
          </span>

          <h3 className="text-3xl font-black text-[#0A2540] mb-6">
            {selectedPartner.docTitle}
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Perjanjian formal ini memastikan setiap tenaga logistik yang
            kami rekrut dari institusi mitra menjalani pengembangan
            profesional berkelanjutan sesuai standar IMO dan regulasi
            logistik terkini.
          </p>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-4">
            <div className="bg-blue-600 text-white p-3 rounded-2xl">
              <ShieldCheck />
            </div>
            <p className="text-sm font-bold text-gray-700">
              Dokumentasi Terverifikasi Secara Hukum & Diakui Internasional
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>
)}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap");
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marqueeReverse 40s linear infinite; }
        .animate-scale-in { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default Clients;
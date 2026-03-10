import React, { useEffect, useState } from "react";
import {
  Ship,
  Users,
  Handshake,
  Heart,
  ArrowRight,
  ShieldCheck,
  Package,
} from "lucide-react";
import Seo from "../components/Seo.tsx";

// Image imports
import g1 from "../img/g1.webp";
import g2 from "../img/g2.webp";
import g3 from "../img/g3.webp";
import g4 from "../img/g4.webp";
import g5 from "../img/g5.webp";
import g6 from "../img/g6.webp";
import g7 from "../img/g7.webp";
import g8 from "../img/g8.webp";
import g9 from "../img/g9.webp";
import g10 from "../img/g10.webp";
import g11 from "../img/g11.webp";
import g12 from "../img/g12.webp";
import g13 from "../img/g13.webp";
import g14 from "../img/g14.webp";
import g15 from "../img/g15.webp";
import g16 from "../img/g16.webp";
import g17 from "../img/g17.webp";
import backgroundImageHeader from "../img/hg.jpg";
import g18 from "../img/baru.webp";
import g19 from "../img/baru2.webp";
import g20 from "../img/baru3.webp";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

interface GalleryItem {
  id: number;
  img: string;
  caption: string;
  sub: string;
}

interface GallerySection {
  title: string;
  id: string;
  icon: React.ReactElement;
  items: GalleryItem[];
}

const sections: GallerySection[] = [
  {
    title: "Cargo Operations",
    id: "cargo",
    icon: <Package size={18} />,
    items: [
      {
        id: 6,
        img: g6,
        caption: "Cargo Departure Preparation",
        sub: "Tim operasional kami mempersiapkan pengiriman kargo sebelum keberangkatan ke pelabuhan tujuan.",
      },
      {
        id: 7,
        img: g7,
        caption: "Cargo Departure Preparation",
        sub: "Proses persiapan dan verifikasi muatan sebelum diberangkatkan melalui jalur logistik internasional.",
      },
      {
        id: 8,
        img: g8,
        caption: "Logistics Deployment",
        sub: "Koordinasi tim di lapangan untuk memastikan ketepatan jadwal pengiriman kargo.",
      },
      {
        id: 9,
        img: g9,
        caption: "Logistics Deployment",
        sub: "Tim logistik kami bersiap untuk keberangkatan ke pelabuhan muat.",
      },
      {
        id: 10,
        img: g10,
        caption: "Logistics Deployment",
        sub: "Persiapan akhir sebelum kargo diberangkatkan ke lokasi tujuan.",
      },
      {
        id: 5,
        img: g5,
        caption: "Marine Cargo Activity",
        sub: "Aktivitas operasional kargo di atas kapal oleh tim profesional kami.",
      },
      {
        id: 18,
        img: g18,
        caption: "Marine Cargo Activity",
        sub: "Operasional logistik laut yang dijalankan oleh tim berpengalaman PT Kamandanu Jaya Logistik.",
      },
      {
        id: 19,
        img: g19,
        caption: "Vessel Operations",
        sub: "Kegiatan operasional kapal dalam mendukung distribusi kargo lintas negara.",
      },
      {
        id: 20,
        img: g20,
        caption: "Vessel Operations",
        sub: "Tim lapangan kami menjalankan prosedur operasional kapal sesuai standar keselamatan internasional.",
      },
    ],
  },
  {
    title: "Training & Compliance",
    id: "training",
    icon: <Users size={18} />,
    items: [
      {
        id: 1,
        img: g1,
        caption: "Logistics Dispute Resolution",
        sub: "Mediasi dan penanganan kepatuhan hukum dalam operasional freight forwarding.",
      },
      {
        id: 12,
        img: g12,
        caption: "SIUJPT Documentation Handover",
        sub: "Serah terima dokumen izin resmi operasional jasa pengurusan transportasi.",
      },
    ],
  },
  {
    title: "Principal Visits",
    id: "principal",
    icon: <Handshake size={18} />,
    items: [
      {
        id: 2,
        img: g2,
        caption: "Principal Meeting Session",
        sub: "Pertemuan resmi dengan principal untuk memperkuat kolaborasi logistik dan kemitraan bisnis.",
      },
      {
        id: 3,
        img: g3,
        caption: "Principal Meeting Session",
        sub: "Diskusi strategis dengan mitra shipping untuk pengembangan jalur logistik baru.",
      },
      {
        id: 4,
        img: g4,
        caption: "Principal Meeting Session",
        sub: "Koordinasi dengan klien internasional untuk peningkatan layanan freight forwarding.",
      },
      {
        id: 13,
        img: g13,
        caption: "Principal Meeting Session",
        sub: "Pertemuan bisnis untuk membahas solusi logistik terintegrasi.",
      },
      {
        id: 14,
        img: g14,
        caption: "Principal Meeting Session",
        sub: "Penandatanganan perjanjian kerja sama logistik internasional.",
      },
      {
        id: 15,
        img: g15,
        caption: "Principal Meeting Session",
        sub: "Kunjungan resmi principal dalam rangka evaluasi kualitas layanan logistik.",
      },
      {
        id: 16,
        img: g16,
        caption: "Principal Meeting Session",
        sub: "Pertemuan tim manajemen dengan mitra shipping internasional.",
      },
      {
        id: 17,
        img: g17,
        caption: "Principal Meeting Session",
        sub: "Sesi koordinasi strategis dengan operator kapal dan pemilik kargo.",
      },
    ],
  },
  {
    title: "Social Programs",
    id: "social",
    icon: <Heart size={18} />,
    items: [
      {
        id: 11,
        img: g11,
        caption: "Corporate Social Responsibility",
        sub: "Program sosial PT Kamandanu Jaya Logistik: dukungan bagi anak-anak yatim di Yayasan Mufakat Al Banna.",
      },
    ],
  },
];

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <Seo
        title="Galeri Operasional | PT Kamandanu Jaya Logistik - Freight Forwarding & Marine Logistics"
        description="Dokumentasi visual operasional PT Kamandanu Jaya Logistik: aktivitas cargo, training logistik, kunjungan principal, dan program sosial perusahaan freight forwarding Indonesia."
        url="/gallery"
        keywords="galeri logistik, dokumentasi freight forwarding, marine logistics gallery, cargo operations photos, Kamandanu Jaya Logistik"
      />

      <main
        className="bg-[#F8FAFC] min-h-screen text-[#0A2540]"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {/* HERO */}
        <section
          className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden"
          aria-label="Header halaman Galeri"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
            role="img"
            aria-label="Operasional logistik dan cargo PT Kamandanu Jaya Logistik"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                <ShieldCheck size={14} aria-hidden="true" /> Operational Excellence
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Gallery{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Log
                </span>
              </h1>
              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed italic">
                Dokumentasi visual perjalanan operasional dan kegiatan logistik
                PT Kamandanu Jaya Logistik.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY NAVBAR */}
        <nav
          className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
          aria-label="Navigasi kategori galeri"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-start md:justify-center gap-2 md:gap-8 overflow-x-auto py-4 no-scrollbar">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-tight whitespace-nowrap transition-all hover:bg-blue-50 hover:text-blue-600 text-slate-500"
                  aria-label={`Scroll ke bagian ${section.title}`}
                >
                  <span className="text-blue-500" aria-hidden="true">
                    {section.icon}
                  </span>
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* BODY CONTENT */}
        <div className="max-w-7xl mx-auto px-4 pb-24 relative z-20 mt-12">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl p-6 md:p-16 border border-gray-100">
            {sections.map((section, sIdx) => (
              <div
                key={section.id}
                id={section.id}
                className={`mb-20 md:mb-32 last:mb-0 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${sIdx * 100}ms` }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-blue-50 rounded-2xl shrink-0 text-blue-600">
                    {React.cloneElement(section.icon, { size: 28 })}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-[#0A2540] tracking-tight uppercase">
                    {section.title}
                  </h2>
                  <div className="hidden md:block w-full h-[2px] bg-slate-50 mt-1" />
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 gap-8">
                  {section.items.map((item) => (
                    <article
                      key={item.id}
                      className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-4 md:p-6 hover:bg-slate-50/80 transition-all duration-500 rounded-[2rem] border border-transparent hover:border-slate-100"
                    >
                      <div className="w-full md:w-80 aspect-video md:h-48 flex-shrink-0 overflow-hidden rounded-3xl shadow-lg bg-gray-100 border border-white">
                        <img
                          src={item.img}
                          alt={`${item.caption} - PT Kamandanu Jaya Logistik`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                          loading="lazy"
                          decoding="async"
                          style={{
                            imageRendering: "-webkit-optimize-contrast",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                          }}
                        />
                      </div>

                      <div className="flex-grow space-y-4 w-full">
                        <div>
                          <h3 className="text-xl md:text-2xl font-black text-[#0A2540] group-hover:text-blue-600 transition-colors uppercase leading-tight">
                            {item.caption}
                          </h3>
                          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed italic mt-2">
                            "{item.sub}"
                          </p>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                            Kamandanu Jaya Logistik
                          </span>
                          <a
                            href={item.img}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#0A2540] text-[11px] font-black text-white hover:bg-blue-600 transition-all shadow-md active:scale-95"
                            aria-label={`Buka gambar: ${item.caption}`}
                          >
                            OPEN IMAGE <ArrowRight size={14} aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default Gallery;
import React, { useEffect, useState } from "react";
import { MapPin, Clock, MessageCircle, Globe } from "lucide-react";
import Seo from "../components/Seo.tsx";
import backgroundImageHeader from "../img/ch.webp";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PT Kamandanu Jaya Logistik",
  image: "https://www.ptkamandanujayalogistik.com/logo.png",
  "@id": "https://www.ptkamandanujayalogistik.com",
  url: "https://www.ptkamandanujayalogistik.com",
  telephone: "+622143938505",
  priceRange: "$$",
  description:
    "Perusahaan freight forwarding dan marine logistics terpercaya di Jakarta Utara.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Warakas 3 No.23 RT 010 RW 004, Lantai 2",
    addressLocality: "Tanjung Priok",
    addressRegion: "Jakarta Utara",
    postalCode: "14330",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "11:00",
      closes: "15:00",
    },
  ],
};

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <>
      <Seo
        title="Hubungi Kami | PT Kamandanu Jaya Logistik - Freight Forwarding Jakarta"
        description="Hubungi PT Kamandanu Jaya Logistik di Tanjung Priok, Jakarta Utara. Konsultasi gratis untuk kebutuhan freight forwarding, sea freight, marine logistics, dan cargo transportation Anda."
        url="/contact"
        keywords="kontak Kamandanu Jaya Logistik, freight forwarding Jakarta Utara, marine logistics contact, cargo transportation inquiry, Tanjung Priok logistik"
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <main
        className="bg-[#F8FAFC] min-h-screen text-[#0A2540]"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {/* HERO */}
        <section
          className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden"
          aria-label="Header halaman Kontak"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
            role="img"
            aria-label="Kantor PT Kamandanu Jaya Logistik Tanjung Priok Jakarta"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                <Globe size={14} className="animate-spin-slow" aria-hidden="true" /> Global
                Inquiry Center
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg leading-tight">
                Get In{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Touch
                </span>
              </h1>

              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Baik Anda pemilik kargo, eksportir, importir, atau operator
                kapal — tim logistik kami siap memberikan solusi terbaik untuk
                kebutuhan pengiriman Anda.
              </p>
            </div>
          </div>
        </section>

        {/* BENTO GRID */}
        <section
          className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 pb-20 relative z-20"
          aria-labelledby="contact-info-heading"
        >
          <h2 id="contact-info-heading" className="sr-only">
            Informasi Kontak PT Kamandanu Jaya Logistik
          </h2>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">

            {/* Left Column: Info Cards */}
            <div
              className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Headquarters */}
              <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shrink-0">
                    <MapPin size={24} aria-hidden="true" />
                  </div>
                  <div className="w-full min-w-0">
                    <h3 className="text-[#0A2540] font-black text-lg mb-2 uppercase tracking-tight">
                      Main Headquarters
                    </h3>
                    <address className="text-gray-500 not-italic text-sm leading-relaxed mb-4 block break-words italic">
                      Jl. Warakas 3 No.23 RT 010 RW 004, Lantai 2
                      <br />
                      Tanjung Priok, Jakarta Utara, 14330
                    </address>
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                      Dekat Pelabuhan Tanjung Priok
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 shrink-0">
                    <MessageCircle size={24} aria-hidden="true" />
                  </div>
                  <div className="w-full min-w-0">
                    <h3 className="text-[#0A2540] font-black text-lg mb-4 uppercase tracking-tight">
                      Quick Connect
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href="tel:+622143938505"
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        aria-label="Telepon kantor PT Kamandanu Jaya Logistik"
                      >
                        <span className="text-gray-400 font-bold text-[10px] uppercase">
                          Office
                        </span>
                        <span className="text-[#0A2540] font-bold text-xs md:text-sm">
                          (021) 38882473
                        </span>
                      </a>
                      <a
                        href="https://wa.me/6281311922417"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
                        aria-label="Hubungi via WhatsApp untuk konsultasi logistik"
                      >
                        <span className="text-emerald-700 font-bold text-[10px] uppercase">
                          WhatsApp
                        </span>
                        <span className="text-emerald-600 font-black text-xs md:text-sm">
                          Konsultasi Gratis
                        </span>
                      </a>
                      <a
                        href="mailto:info@kamandanujayalogistik.com"
                        className="p-3 rounded-xl bg-blue-50/50 block hover:bg-blue-50 transition-colors"
                        aria-label="Email ke PT Kamandanu Jaya Logistik"
                      >
                        <span className="text-blue-400 font-bold text-[10px] uppercase block mb-1">
                          Email
                        </span>
                        <span className="text-blue-600 font-bold text-[10px] md:text-xs break-all italic">
                          info@kamandanujayalogistik.com
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl text-slate-600 shrink-0">
                    <Clock size={24} aria-hidden="true" />
                  </div>
                  <div className="w-full min-w-0">
                    <h3 className="text-[#0A2540] font-black text-lg mb-2 uppercase tracking-tight">
                      Working Hours
                    </h3>
                    <p className="text-gray-500 text-xs font-semibold flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                        aria-hidden="true"
                      ></span>{" "}
                      Senin – Jumat: 08:30 – 17:30 WIB
                    </p>
                    <p className="text-gray-400 text-xs font-semibold ml-3.5 italic">
                      Sabtu: 11:00 – 15:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Map */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white p-3 rounded-[2.5rem] shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="relative rounded-[2rem] overflow-hidden w-full h-[400px] md:h-full min-h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15083.19654827613!2d106.875993!3d-6.118949!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMDguMiJTIDEwNsKwNTInNDIuOSJF!5e1!3m2!1sen!2sid!4v1771599591642!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Lokasi Kantor PT Kamandanu Jaya Logistik - Tanjung Priok, Jakarta Utara"
                    aria-label="Peta lokasi PT Kamandanu Jaya Logistik"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Contact;
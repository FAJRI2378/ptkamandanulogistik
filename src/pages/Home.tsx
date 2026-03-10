import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Award,
  Ship,
  Users,
  ShieldCheck,
  Database,
  ArrowRight,
  Package,
  Truck,
} from "lucide-react";
import Seo from "../components/Seo.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import foto from "../img/baruu3.webp";
import foto2 from "../img/baru.webp";
import foto3 from "../img/crew2.webp";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Kamandanu Jaya Logistik",
  url: "https://www.ptkamandanujayalogistik.com",
  logo: "https://www.ptkamandanujayalogistik.com/logo.png",
  description:
    "Leading Indonesian logistics and freight forwarding company providing comprehensive marine logistics and cargo transportation solutions.",
  sameAs: [
    "https://www.linkedin.com/company/kamandanu-jaya-logistik",
  ],
};

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      icon: Package,
      number: 5000,
      suffix: "+",
      label: "Shipments Delivered",
      color: "text-blue-500",
    },
    {
      icon: Database,
      number: 300,
      suffix: "+",
      label: "Logistics Partners",
      color: "text-cyan-500",
    },
    {
      icon: Ship,
      number: 1500,
      suffix: "+",
      label: "Vessels Handled",
      color: "text-indigo-500",
    },
    {
      icon: Award,
      number: 100,
      suffix: "%",
      label: "Customs Compliant",
      color: "text-emerald-500",
    },
  ];

  const sliderData = [
    {
      src: foto,
      alt: "PT Kamandanu Jaya Logistik - Freight Forwarding & Cargo Transportation Indonesia",
    },
    {
      src: foto2,
      alt: "Marine Logistics Solutions - Sea Freight Services Jakarta",
    },
    {
      src: foto3,
      alt: "Professional Shipping & Logistics Team Kamandanu Jaya Logistik",
    },
  ];

  return (
    <>
      <Seo
        title="PT Kamandanu Jaya Logistik | #1 Freight Forwarding & Marine Logistics Indonesia"
        description="PT Kamandanu Jaya Logistik — trusted Indonesian logistics company specializing in freight forwarding, sea freight, marine logistics, and comprehensive cargo transportation solutions worldwide."
        url="/"
        keywords="Kamandanu Jaya Logistik, freight forwarding Indonesia, marine logistics, cargo transportation, shipping company Jakarta, sea freight, ekspedisi kargo, logistik maritim"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="text-[#0A2540]" style={{ fontFamily: FONT_FAMILY }}>

        {/* ─── HERO SECTION ─── */}
        <header
          className="relative min-h-[100svh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40"
          aria-label="Hero - PT Kamandanu Jaya Logistik"
        >
          <div className="absolute inset-0 z-0 bg-[#071829]">
            <iframe
              className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 pointer-events-none"
              src="https://www.youtube.com/embed/b_q0Tb2y_qI?autoplay=1&mute=1&loop=1&playlist=b_q0Tb2y_qI&controls=0&rel=0"
              title="Marine Logistics Background - PT Kamandanu Jaya Logistik"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-transparent to-[#0A2540]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8">
                <ShieldCheck size={18} aria-hidden="true" /> Trusted Logistics Partner
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                Reliable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Logistics
                </span>{" "}
                Excellence.
              </h1>

              <p className="text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                Empowering global trade with Indonesia's most trusted freight
                forwarding and marine logistics solutions.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl"
                  aria-label="Hubungi kami untuk layanan logistik"
                >
                  Get a Quote
                </Link>

                <Link
                  to="/about"
                  className="px-10 py-4 border-2 border-white/20 hover:border-white text-white font-bold rounded-xl transition-all"
                  aria-label="Pelajari profil perusahaan Kamandanu Jaya Logistik"
                >
                  Company Profile
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:ml-10" aria-label="Statistik perusahaan">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-[2rem]"
                >
                  <stat.icon
                    className={`${stat.color} mb-4`}
                    size={32}
                    aria-hidden="true"
                  />
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.number} id={`hero-${i}`} />
                    {stat.suffix}
                  </div>
                  <p className="text-blue-200/60 text-xs uppercase tracking-widest font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ─── ABOUT SNAPSHOT SECTION ─── */}
        <section
          className="relative py-20 bg-[#F8FAFC]"
          aria-labelledby="company-profile-heading"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-[2.5rem] shadow-2xl overflow-hidden h-[450px] bg-gray-200">
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4500 }}
                pagination={{ clickable: true }}
                loop
                className="h-full w-full"
                a11y={{ enabled: true }}
              >
                {sliderData.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding={index === 0 ? "sync" : "async"}
                      style={{
                        imageRendering: "-webkit-optimize-contrast",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "translateZ(0)",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <article className="space-y-6">
              <h2
                id="company-profile-heading"
                className="text-4xl font-black text-[#0A2540]"
              >
                _COMPANY PROFILE_
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>PT KAMANDANU JAYA LOGISTIK</strong> adalah perusahaan
                logistik profesional yang bergerak di bidang freight forwarding,
                marine logistics, dan cargo transportation untuk perdagangan
                domestik dan internasional.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Didukung oleh tim ahli dan sistem manajemen digital modern,
                kami memastikan setiap pengiriman kargo tepat waktu dengan
                kepatuhan penuh terhadap regulasi bea cukai dan peraturan
                kelautan internasional.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-black hover:text-blue-600 transition-all"
                aria-label="Jelajahi layanan logistik Kamandanu Jaya Logistik"
              >
                EXPLORE OUR SERVICES
                <ArrowRight aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        {/* ─── SERVICES HIGHLIGHT ─── */}
        <section className="py-20 bg-white" aria-labelledby="services-highlight-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              id="services-highlight-heading"
              className="text-3xl md:text-4xl font-black text-[#0A2540] text-center mb-14"
            >
              Solusi Logistik Kami
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Ship,
                  title: "Sea Freight",
                  desc: "Layanan pengiriman kargo laut FCL & LCL ke seluruh pelabuhan internasional dengan biaya kompetitif.",
                },
                {
                  icon: Truck,
                  title: "Land Transport",
                  desc: "Distribusi darat terintegrasi dari pelabuhan ke gudang atau lokasi pelanggan di seluruh Indonesia.",
                },
                {
                  icon: Package,
                  title: "Freight Forwarding",
                  desc: "Pengurusan dokumen ekspor-impor, bea cukai, dan koordinasi pengiriman end-to-end.",
                },
              ].map((svc, i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:-translate-y-1 transition-all duration-300"
                >
                  <svc.icon
                    className="text-blue-600 mb-5"
                    size={36}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-black text-[#0A2540] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Award,
  Ship,
  ShieldCheck,
  Database,
  ArrowRight,
  Package,
  Truck,
  Globe,
  Anchor,
  Compass,
} from "lucide-react";
import Seo from "../components/Seo.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
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
  alternateName: "KJL Logistics",
  url: "https://www.ptkamandanujayalogistik.com",
  logo: "https://www.ptkamandanujayalogistik.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-xxx-xxxx-xxxx",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"]
  },
  description: "Penyedia layanan logistik terpadu, freight forwarding, dan solusi transportasi maritim global yang berbasis di Indonesia.",
};

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- DATA DEFINITIONS ---
  const stats = [
    { icon: Package, number: 5000, suffix: "+", label: "Global Shipments", color: "text-blue-500" },
    { icon: Database, number: 300, suffix: "+", label: "Strategic Partners", color: "text-cyan-500" },
    { icon: Ship, number: 1500, suffix: "+", label: "Vessels Managed", color: "text-indigo-500" },
    { icon: Award, number: 100, suffix: "%", label: "Compliance Rate", color: "text-emerald-500" },
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

  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      desc: "Solusi ekspor-impor via laut (FCL & LCL) dengan jaringan pelayaran global yang efisien dan aman.",
      link: "/services"
    },
    {
      icon: Truck,
      title: "Land Logistics",
      desc: "Transportasi darat terintegrasi menggunakan armada modern untuk distribusi domestik lintas wilayah.",
      link: "/services"
    },
    {
      icon: Globe,
      title: "Freight Forwarding",
      desc: "Manajemen rantai pasok end-to-end, termasuk pengurusan bea cukai (customs clearance) dan dokumentasi.",
      link: "/services"
    }
  ];

  return (
    <>
      <Seo
        title="PT Kamandanu Jaya Logistik | Jasa Freight Forwarding & Logistik Maritim Indonesia"
        description="PT Kamandanu Jaya Logistik menyediakan layanan logistik global, pengiriman kargo laut, dan transportasi darat terbaik di Indonesia. Partner terpercaya untuk ekspor dan impor."
        url="/"
        keywords="logistik indonesia, freight forwarding jakarta, jasa pengiriman kargo, marine logistics, shipping agent indonesia, pt kamandanu jaya logistik, ekspedisi laut"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="bg-white text-[#0A2540] overflow-x-hidden" style={{ fontFamily: FONT_FAMILY }}>
        
        {/* ─── MODERN HERO SECTION ─── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">
          <div className="absolute inset-0 z-0 opacity-40">
            <iframe
              className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none"
              src="https://www.youtube.com/embed/b_q0Tb2y_qI?autoplay=1&mute=1&loop=1&playlist=b_q0Tb2y_qI&controls=0&rel=0"
              title="KJL Background"
              allow="autoplay; encrypted-media"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 pt-20">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                <ShieldCheck className="text-blue-400" size={18} />
                <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
                  Certified Global Logistics
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Navigating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Global Trade
                </span> <br />
                With Precision.
              </h1>

              <p className="text-lg text-blue-100/70 max-w-lg leading-relaxed border-l-2 border-blue-500 pl-6">
                Menghubungkan bisnis Anda ke seluruh dunia melalui layanan logistik maritim terintegrasi dan manajemen kargo yang cerdas.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20">
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/20 transition-all backdrop-blur-sm">
                  View Profile
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-fit self-center">
              {stats.map((stat, i) => (
                <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                  <stat.icon className={`${stat.color} mb-4 group-hover:scale-110 transition-transform`} size={28} />
                  <div className="text-3xl font-black text-white">
                    <AnimatedCounter value={stat.number} id={`stat-${i}`} />{stat.suffix}
                  </div>
                  <p className="text-blue-200/50 text-[10px] uppercase font-bold tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT SECTION WITH REPAIRED SLIDER ─── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
                <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-gray-100">
                  <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 3500 }}
                    pagination={{ clickable: true }}
                    loop
                  >
                    {sliderData.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img src={img.src} alt={img.alt} className="w-full h-[500px] object-cover" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-blue-600" /> Professional Partner
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#0A2540] leading-tight">
                  Expert Freight Forwarding & Logistics Solutions.
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  <strong>PT Kamandanu Jaya Logistik</strong> merupakan pilar utama dalam industri kargo maritim Indonesia. Kami mengintegrasikan teknologi pelacakan real-time dengan keahlian operasional.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg"><Compass className="text-blue-600" size={24}/></div>
                    <div>
                      <h4 className="font-bold">Global Reach</h4>
                      <p className="text-sm text-gray-500">Jaringan luas di seluruh pelabuhan utama.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg"><Anchor className="text-blue-600" size={24}/></div>
                    <div>
                      <h4 className="font-bold">Safe Porting</h4>
                      <p className="text-sm text-gray-500">Standar keamanan internasional.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Link to="/about" className="font-black text-[#0A2540] flex items-center gap-3 group">
                    LEARN MORE ABOUT US 
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES GRID ─── */}
        <section className="py-24 bg-[#0A2540] text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-blue-400 font-bold tracking-[0.2em] uppercase mb-4">Our Services</h2>
              <p className="text-3xl md:text-5xl font-black">Comprehensive Supply Chain Solutions.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((svc, i) => (
                <div key={i} className="group relative bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white transition-all duration-500 overflow-hidden">
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-600/10 rounded-full group-hover:scale-[3] transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className="mb-8 inline-block p-4 rounded-2xl bg-blue-600 group-hover:bg-[#0A2540] transition-colors shadow-lg">
                      <svc.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 group-hover:text-[#0A2540] transition-colors uppercase tracking-tight italic">
                      {svc.title}
                    </h3>
                    <p className="text-blue-100/60 group-hover:text-gray-600 leading-relaxed mb-8 transition-colors">
                      {svc.desc}
                    </p>
                    <Link to={svc.link} className="inline-flex items-center gap-2 font-bold text-sm text-blue-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                      Explore Service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ─── */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Ready to Optimize Your Logistics?
            </h2>
            <Link to="/contact" className="inline-block px-12 py-5 bg-[#0A2540] text-white font-black rounded-full hover:scale-105 transition-transform shadow-2xl uppercase tracking-widest">
              Get Quote Now
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        </section>

      </main>
    </>
  );
};

export default Home;
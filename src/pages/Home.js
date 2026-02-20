import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Award,
  Ship,
  Users,
  ShieldCheck,
  Database,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Seo from "../components/Seo";

// Swiper Import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import Assets
import foto from "../img/foto.jpeg";
import foto2 from "../img/crew1.jpg";
import foto3 from "../img/crew2.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Users, number: 360, suffix: "+", label: "Crews Deployed", color: "text-blue-500" },
    { icon: Database, number: 10000, suffix: "+", label: "Talent Pool", color: "text-cyan-500" },
    { icon: Ship, number: 8000, suffix: "", label: "Vessels Served", color: "text-indigo-500" },
    { icon: Award, number: 100, suffix: "%", label: "MLC Compliant Regulation", color: "text-emerald-500" },
  ];

  const sliderData = [
    { src: foto, alt: "PT Kamandanu Jaya Samudera Professional Crew Management" },
    { src: foto2, alt: "Skilled Indonesian Seafarers Training Center" },
    { src: foto3, alt: "Maritime Excellence and Global Vessel Support" },
  ];

  // STRUCTURED DATA (SEO)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT Kamandanu Jaya Samudera",
    "url": "https://www.ptkamandanujayasamudera.com",
    "logo": "https://www.ptkamandanujayasamudera.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-8131-1922-417",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["English", "Indonesian"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/pt-kamandanu-jaya-samudera",
      "https://www.instagram.com/kamandanujayasamudera_"
    ]
  };

  return (
    <>
      <Seo
        title="PT Kamandanu Jaya Samudera | #1 Crew Manning Agency Indonesia"
        description="Trusted Indonesian crew manning agency providing STCW-certified seafarers, maritime logistics, and comprehensive crew management solutions worldwide."
        url="/"
      />

      {/* Structured Data Script */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

   <main className="font-['Plus_Jakarta_Sans'] text-[#0A2540]">
        
        {/* ─── HERO SECTION ─── */}
        <header className="relative min-h-[100svh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40">
          <div className="absolute inset-0 z-0 bg-[#071829]">
            <iframe
              className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 pointer-events-none"
              src="https://www.youtube.com/embed/b_q0Tb2y_qI?autoplay=1&mute=1&loop=1&playlist=b_q0Tb2y_qI&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Maritime Background Video"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-transparent to-[#0A2540]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8">
                <ShieldCheck size={18} /> Official Website of PT Kamandanu Jaya Samudera
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Maritime</span> <br />
                Excellence.
              </h1>
              <p className="text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                Empowering global shipping with Indonesia's finest, STCW-certified seafarers and world-class management.
              </p>
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <Link to="/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-900/40">
                  Hire Our Crew
                </Link>
                <Link to="/about" className="px-10 py-4 border-2 border-white/20 hover:border-white text-white font-bold rounded-xl transition-all">
                  Company Profile
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:ml-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-[2rem]">
                  <stat.icon className={`${stat.color} mb-4`} size={32} />
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.number} id={`hero-${i}`} />{stat.suffix}
                  </div>
                  <p className="text-blue-200/60 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

      {/* ─── ABOUT SECTION WITH SLIDER ─── */}
<section className="relative py-12 lg:py-24 bg-[#F8FAFC] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 
                  flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

    {/* ───────── LEFT SIDE : SLIDER ───────── */}
    {/* order-2 di mobile agar teks dibaca duluan, atau hapus 'order' jika slider ingin tetap di atas */}
    <div className="relative group/slider w-full order-1 lg:order-1">

      {/* Soft Glow Background - Ukuran lebih halus di mobile */}
      <div className="absolute -inset-2 md:-inset-4 bg-blue-600/10 
                      rounded-[2rem] lg:rounded-[2.5rem] blur-2xl -z-10" />

      {/* Slider Container - Height disesuaikan agar proporsional di semua layar */}
      <div className="relative rounded-[2rem] lg:rounded-[2.5rem] 
                      shadow-2xl overflow-hidden 
                      h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px] 
                      bg-gray-200 w-full">

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.prev-home',
            nextEl: '.next-home',
          }}
          loop={true}
          className="h-full w-full"
        >
          {sliderData.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation - Disembunyikan di mobile agar tidak mengganggu touch area */}
        <button
          aria-label="Previous Slide"
          className="prev-home absolute left-3 top-1/2 -translate-y-1/2 z-30 
                     w-9 h-9 bg-white/30 backdrop-blur-md rounded-full 
                     hidden md:flex items-center justify-center text-white 
                     opacity-0 lg:group-hover/slider:opacity-100 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          aria-label="Next Slide"
          className="next-home absolute right-3 top-1/2 -translate-y-1/2 z-30 
                     w-9 h-9 bg-white/30 backdrop-blur-md rounded-full 
                     hidden md:flex items-center justify-center text-white 
                     opacity-0 lg:group-hover/slider:opacity-100 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>

    {/* ───────── RIGHT SIDE : CONTENT ───────── */}
    <article className="order-2 lg:order-2 space-y-4 md:space-y-6">
      {/* Judul Tambahan untuk Mobile agar lebih informatif */}
      <h3 className="text-2xl md:text-4xl font-black text-[#0A2540] leading-tight">
        Company profile
      </h3>

      <div className="space-y-4 text-gray-600">
        <p className="text-base md:text-lg leading-relaxed">
          <strong>KAMANDANU JAYA SAMUDERA</strong> is a professional manning company specializing in the recruitment of qualified seafarers for international shipping.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Supported by maritime experts and modern computerized systems, we ensure transparency, efficiency, and full regulatory compliance.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          We deliver "service with a smile," safeguarding your assets by providing competent, work-ready crews that meet global standards.
        </p>
      </div>

      <div className="pt-4">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-[#0A2540] font-black 
                     hover:text-blue-600 transition-all group"
        >
          EXPLORE OUR SERVICES
          <ArrowRight className="transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </article>

  </div>
</section>
      </main>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s;
        }
      `}</style>
    </>
  );
};

export default Home;
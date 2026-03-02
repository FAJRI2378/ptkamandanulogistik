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
} from "lucide-react";
import Seo from "../components/Seo";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import foto from "../img/baruu3.webp";
import foto2 from "../img/baru.webp";
import foto3 from "../img/crew2.webp";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Users, number: 5000, suffix: "+", label: "Crews Deployed", color: "text-blue-500" },
    { icon: Database, number: 7000, suffix: "+", label: "Talent Pool", color: "text-cyan-500" },
    { icon: Ship, number: 5000, suffix: "+", label: "Vessels Served", color: "text-indigo-500" },
    { icon: Award, number: 100, suffix: "%", label: "MLC Compliant Regulation", color: "text-emerald-500" },
  ];

  const sliderData = [
    { src: foto, alt: "PT Kamandanu Jaya Samudera Professional Crew Management" },
    { src: foto2, alt: "Skilled Indonesian Seafarers Training Center" },
    { src: foto3, alt: "Maritime Excellence and Global Vessel Support" },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Kamandanu Jaya Samudera",
    url: "https://www.ptkamandanujayasamudera.com",
    logo: "https://www.ptkamandanujayasamudera.com/logo.png",
  };

  return (
    <>
      <Seo
        title="PT Kamandanu Jaya Samudera | #1 Crew Manning Agency Indonesia"
        description="Trusted Indonesian crew manning agency providing STCW-certified seafarers and comprehensive crew management solutions worldwide."
        url="/"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* ✅ FONT SUDAH DISAMAKAN DENGAN ABOUT */}
      <main
        className="text-[#0A2540]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* ─── HERO SECTION ─── */}
        <header className="relative min-h-[100svh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40">
          <div className="absolute inset-0 z-0 bg-[#071829]">
            <iframe
              className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 pointer-events-none"
              src="https://www.youtube.com/embed/b_q0Tb2y_qI?autoplay=1&mute=1&loop=1&playlist=b_q0Tb2y_qI&controls=0&rel=0"
              title="Maritime Background Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-transparent to-[#0A2540]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8">
                <ShieldCheck size={18} /> Official New Website
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                Reliable{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Maritime
                </span>{" "}
                Excellence.
              </h1>

              <p className="text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                Empowering global shipping with Indonesia's finest, STCW-certified seafarers.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl"
                >
                  Hire Our Crew
                </Link>

                <Link
                  to="/about"
                  className="px-10 py-4 border-2 border-white/20 hover:border-white text-white font-bold rounded-xl transition-all"
                >
                  Company Profile
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:ml-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-[2rem]"
                >
                  <stat.icon className={`${stat.color} mb-4`} size={32} />
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

        {/* ─── ABOUT SECTION ─── */}
        <section className="relative py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-[2.5rem] shadow-2xl overflow-hidden h-[450px] bg-gray-200">
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4500 }}
                pagination={{ clickable: true }}
                loop
                className="h-full w-full"
              >
                {sliderData.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <article className="space-y-6">
              <h3 className="text-4xl font-black">_COMPANY PROFILE_</h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>KAMANDANU JAYA SAMUDERA</strong> is a professional manning company specializing in qualified seafarers for international shipping.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Supported by maritime experts and modern computerized systems, ensuring full regulatory compliance.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-black hover:text-blue-600 transition-all"
              >
                EXPLORE OUR SERVICES
                <ArrowRight />
              </Link>
            </article>
          </div>
        </section>
      </main>

      {/* ✅ IMPORT FONT SAMA SEPERTI ABOUT */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap");
      `}</style>
    </>
  );
};

export default Home;
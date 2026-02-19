import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Award,
  Ship,
  Users,
  ShieldCheck,
  Anchor,
  CheckCircle,
  FileText,
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

// Import foto Anda
import foto from "../img/foto.jpeg";
const foto2 = "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1000&auto=format&fit=crop";
const foto3 = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { icon: Users, number: 360, suffix: "+", label: "Crews Deployed", color: "text-blue-500" },
    { icon: Database, number: 10000, suffix: "+", label: "Talent Pool", color: "text-cyan-500" },
    { icon: Ship, number: 8000, suffix: "", label: "Vessels Served", color: "text-indigo-500" },
    { icon: Award, number: 100, suffix: "%", label: "MLC Compliant", color: "text-emerald-500" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const homePhotos = [foto, foto2, foto3];

  return (
    <>
      <Seo
        title="PT Kamandanu Jaya Samudera | #1 Crew Manning Agency Indonesia"
        description="Trusted Indonesian crew manning agency..."
        url="/"
      />

      <main className="overflow-hidden font-['Plus_Jakarta_Sans'] text-[#0A2540]">
        {/* ─── HERO SECTION ─── */}
        <header className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0 bg-[#071829]">
            <iframe
              className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 pointer-events-none"
              src="https://www.youtube.com/embed/b_q0Tb2y_qI?autoplay=1&mute=1&loop=1&playlist=b_q0Tb2y_qI&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Maritime Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-transparent to-[#0A2540]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-8">
                <ShieldCheck size={18} /> Official Licensed Manning Agency
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
                Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Maritime</span> <br />
                Excellence.
              </h1>
              <p className="text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                Empowering global shipping with Indonesia's finest, STCW-certified seafarers.
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
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            
            {/* SISI KIRI: SLIDER FOTO */}
            <div className="relative group/slider">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl transition-all" />
              
              <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden h-[400px] md:h-[600px] bg-gray-200">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation, EffectFade]}
                  effect={'fade'}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation={{ prevEl: '.prev-home', nextEl: '.next-home' }}
                  loop={true}
                  className="h-full w-full"
                >
                  {homePhotos.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={img} 
                        alt={`Slide ${index}`} 
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Bulat Navigasi Custom (Arrow) */}
                <button className="prev-home absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:text-blue-600">
                  <ChevronLeft size={24} />
                </button>
                <button className="next-home absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:text-blue-600">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Floating Satisfaction Badge */}
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-blue-50">
                <p className="text-3xl font-black text-blue-600 mb-1">98%</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Retention Rate</p>
              </div>
            </div>

            {/* SISI KANAN: TEKS */}
            <article>
              <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-4">Established 2020</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-[#0A2540]">
                Indonesia's Premier Gateway to Global Crewing
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>PT Kamandanu Jaya Samudera</strong> is more than just a manning agency. We are a strategic partner in maritime safety and operational efficiency.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {["Rigorous Screening", "Global Compliance", "Welfare Support", "Expert Management"].map((title, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><CheckCircle size={20}/></div>
                    <h4 className="font-bold text-[#0A2540] text-sm">{title}</h4>
                  </div>
                ))}
              </div>

              <Link to="/services" className="inline-flex items-center gap-2 group text-[#0A2540] font-black hover:text-blue-600 transition-colors">
                VIEW ALL SERVICES <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </article>
          </div>
        </section>

        {/* ─── PROCESS & CTA (Sama seperti sebelumnya) ─── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "Requirement" },
              { icon: Users, title: "Sourcing" },
              { icon: ShieldCheck, title: "Verification" },
              { icon: Ship, title: "Mobilization" },
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <step.icon size={32} />
                </div>
                <h4 className="font-bold text-xl mb-2">{step.title}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-[#0A2540] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 opacity-10"><Anchor size={400} /></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Optimize Your Crew Management</h2>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all">
              Request Proposal
            </Link>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
          width: 20px;
          border-radius: 4px;
          transition: all 0.3s;
        }
      `}</style>
    </>
  );
};

export default Home;
import React, { useState, useEffect } from "react";
import {
  Users,
  FileCheck,
  Globe,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Ship,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Seo from "../components/Seo";

// Import Swiper React components & Styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import gambar lokal
import c1 from "../img/crew1.jpg";
import c2 from "../img/crew2.jpg";
import c3 from "../img/foto.jpeg"; // Contoh menggunakan string untuk path gambar  

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const workflowSteps = [
    { title: "Customer Request" },
    { title: "Check Crew & Screening" },
    { title: "Propose Customer Approval" },
    { title: "Medical Check Up" },
    { title: "Apply for Visa Requirement" },
    { title: "Brief Crew & Document" },
  ];

  const sliderImages = [c1, c2, c3];

  const mainServices = [
    {
      icon: Users,
      title: "Extensive crewing network and skilled seafarers",
      description: "With a pool of over 10,800 seafarers and ownership of more than 10 manning offices around the world, we can supply you competent crew for your vessels.",
    },
    {
      icon: FileCheck,
      title: "Crew Management System",
      description: "Our centralized system which stores all data related to seafarers for efficient monitoring of compliance with mandatory requirements (Flag State, Training, Certificates, Medical, Visa etc.). All data and documents are filed electronically for compliance check of seafarer's competence.",
    },
  ];

  return (
    <>
      <Seo title="Services | PT Kamandanu Jaya Samudera" />

      <main className="bg-[#F8FAFC] min-h-screen font-['Plus_Jakarta_Sans']">
        {/* --- Hero Section --- */}
        <header className="relative pt-32 pb-28 bg-[#0A2540] overflow-hidden text-center">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20">
              <Globe size={14} /> Global Maritime Support
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Service Solutions</span>
            </h1>
          </div>
        </header>

        {/* --- SECTION 1: VISUAL WORKFLOW --- */}
        <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-4 md:p-10 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative group p-6 rounded-3xl transition-all duration-300 hover:bg-blue-50">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-5xl font-black text-blue-600/10 mb-2">0{index + 1}</span>
                    <h4 className="text-xs md:text-[13px] font-black text-[#0A2540] uppercase tracking-wider leading-snug">{step.title}</h4>
                  </div>
                  {index < 5 && <div className="hidden lg:flex items-center absolute top-1/2 -right-2 -translate-y-1/2 text-gray-200"><ArrowRight size={20} /></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 2: WHAT WE DO (DENGAN SLIDER OTOMATIS + PAGINATION) --- */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#0A2540]">What We Do</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-16">
              {mainServices.map((service, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A2540] flex items-center justify-center text-white shadow-lg">
                      <service.icon size={28} />
                    </div>
                    <div className="h-px w-10 bg-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0A2540] mb-6 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Slider Sisi Kanan dengan Bulat-bulat (Pagination) */}
            <div className="w-full relative group/slider">
              <div className="absolute -inset-4 border border-blue-100 rounded-[3rem] rotate-2" />
              
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px]">
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination, Navigation]}
                  effect={'fade'}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={{
                    prevEl: '.prev-btn',
                    nextEl: '.next-btn',
                  }}
                  loop={true}
                  className="h-full w-full"
                >
                  {sliderImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={img} 
                        alt={`Maritime Support ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Tombol Navigasi Manual (Muncul saat Hover) */}
                <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:text-blue-600">
                  <ChevronLeft size={24} />
                </button>
                <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:text-blue-600">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-3xl text-white shadow-xl z-20 hidden md:block">
                <p className="text-3xl font-black">10.8k+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Qualified Crew</p>
              </div>
            </div>
          </div>

          <div className="mt-32 p-10 md:p-16 bg-white rounded-[3rem] shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-blue-600 uppercase tracking-[0.2em] mb-12 text-center">Our crewing services include</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
              {["Recruiting", "Coordination of manning offices", "Proactive communication", "Training of crew", "Accounting", "Cost control", "Insurance Follow up", "Payroll service", "Industry Standards Compliance", "Travel coordination"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                  <span className="text-base font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Bottom Trust CTA --- */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-[#0A2540] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to Strengthen Your Fleet?</h3>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href="/contact" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs text-center">Contact Us</a>
                <a href="/licenses" className="px-10 py-4 bg-white text-[#0A2540] font-bold rounded-2xl hover:bg-gray-100 transition-all uppercase tracking-widest text-xs text-center">View Licenses</a>
              </div>
            </div>
            <Ship className="absolute -bottom-20 -right-20 text-white/5 w-96 h-96 -rotate-12" />
          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        
        /* Custom Pagination (Putih-putih bulat) */
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white !important;
          width: 25px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        .swiper-pagination {
          bottom: 25px !important;
        }
      `}</style>
    </>
  );
};

export default Services;
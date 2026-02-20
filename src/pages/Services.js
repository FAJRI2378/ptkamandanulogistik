import React, { useEffect } from "react";
import {
  Users,
  FileCheck,
  Globe,
  ArrowRight,
  Ship,
  ChevronLeft,
  ChevronRight,
  Truck,
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
import c3 from "../img/foto.jpeg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workflowSteps = [
    { title: "Apply Job" },
    { title: "Check & Screening Crew" },
    { title: "Propose Crew To Ownership" },
    { title: "Interview With Ownership" },
    { title: "Travel Document (MCU, VISA, ETC)" },
    { title: "Briefing For Departing Crew" },
  ];

  const sliderImages = [
    { src: c1, alt: "Professional Maritime Crew Training and Development" },
    { src: c2, alt: "Rigorous Seafarer Recruitment and Screening Process" },
    { src: c3, alt: "PT Kamandanu Jaya Samudera Global Logistics Support" },
  ];

  const mainServices = [
    {
      icon: Users,
      title: "Extensive Crewing Network",
      description: "With a pool of over 10,800 skilled seafarers and 10+ manning offices worldwide, we provide competent crew recruitment for various vessel types.",
    },
    {
      icon: FileCheck,
      title: "Crew Management System",
      description: "Our centralized digital system monitors Flag State compliance, training, medical records, and visa requirements to ensure total seafarer competence.",
    },
    {
      icon: Truck,
      title: "Maritime Logistics",
      description: "We provide comprehensive logistics support for maritime operations, including supply chain management and coordination of resources at sea.",
    },
  ];

  const crewingIncludes = [
    "Global Recruiting", "Manning Office Coordination", "Proactive Communication", 
    "Crew Training", "Maritime Accounting", "Cost Control", 
    "Insurance Follow-up", "Payroll Services", "Compliance Standards", "Travel Coordination"
  ];

  // STRUCTURED DATA (SEO JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Maritime Crewing and Logistics",
    "provider": {
      "@type": "Organization",
      "name": "PT Kamandanu Jaya Samudera",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta Utara",
        "addressCountry": "ID"
      }
    },
    "description": "Professional maritime services in Indonesia: Crew management, skilled seafarer recruitment, and global logistics support.",
    "url": "https://www.ptkamandanujayasamudera.com/services",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Maritime Service Portfolio",
      "itemListElement": mainServices.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title
        }
      }))
    }
  };

  return (
    <>
      <Seo 
        title="Maritime Services & Logistics | PT Kamandanu Jaya Samudera" 
        description="Providing world-class maritime solutions: Professional crew management, global seafarer recruitment, and efficient sea logistics support."
        url="/services"
      />

      {/* Structured Data Script - Injected for Google SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
        </header>

        {/* --- SECTION 1: VISUAL WORKFLOW --- */}
        <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
          <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-4 md:p-10 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative group p-6 rounded-3xl transition-all duration-300 hover:bg-blue-50/50">
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="text-5xl font-black text-blue-600/10 mb-2 transition-colors group-hover:text-blue-600/20">0{index + 1}</span>
                    <h4 className="text-xs md:text-[13px] font-black text-[#0A2540] uppercase tracking-wider leading-snug">{step.title}</h4>
                  </div>
                  {index < 5 && (
                    <div className="hidden lg:flex items-center absolute top-1/2 -right-2 -translate-y-1/2 text-gray-200 group-hover:text-blue-200 transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 2: MAIN SERVICES --- */}
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
                    <div className="w-14 h-14 rounded-2xl bg-[#0A2540] flex items-center justify-center text-white shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
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

            {/* Slider Section */}
            <div className="w-full relative group/slider">
              <div className="absolute -inset-4 border border-blue-100 rounded-[3rem] rotate-2 hidden md:block" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px]">
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination, Navigation]}
                  effect={'fade'}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
                  loop={true}
                  className="h-full w-full"
                >
                  {sliderImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={img.src} 
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:text-blue-600 shadow-lg">
                  <ChevronLeft size={24} />
                </button>
                <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:text-blue-600 shadow-lg">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Crewing Features */}
          <div className="mt-32 p-10 md:p-16 bg-white rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-blue-50/50">
                <Ship size={120} />
             </div>
            <h3 className="text-xl font-black text-blue-600 uppercase tracking-[0.2em] mb-12 text-center relative z-10">
              Our crewing services include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 relative z-10">
              {crewingIncludes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-all duration-300" />
                  <span className="text-base font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white !important;
          width: 24px;
          border-radius: 4px;
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
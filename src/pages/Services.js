import React, { useEffect } from "react";
import {
  Users,
  FileCheck,
  Globe,
  Truck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Seo from "../components/Seo";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import c1 from "../img/crew1.webp";
import c2 from "../img/crew2.webp";
import c3 from "../img/foto.webp";
import backgroundImageHeader from "../img/as.webp";

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
      description:
        "With a pool of over 10,800 skilled seafarers, we provide competent crew recruitment for various vessel types.",
    },
    {
      icon: FileCheck,
      title: "Crew Management System",
      description:
        "Our centralized digital system monitors Flag State compliance, training, medical records, and visa requirements.",
    },
    {
      icon: Truck,
      title: "Maritime Logistics",
      description:
        "Comprehensive logistics support including supply chain management and sea-based resource coordination.",
    },
  ];

  const crewingIncludes = [
    "Global Recruiting",
    "Manning Office Coordination",
    "Proactive Communication",
    "Crew Training",
    "Maritime Accounting",
    "Cost Control",
    "Insurance Follow-up",
    "Payroll Services",
    "Compliance Standards",
    "Travel Coordination",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Maritime Crewing and Logistics",
    provider: {
      "@type": "Organization",
      name: "PT Kamandanu Jaya Samudera",
    },
    description:
      "Professional maritime services in Indonesia: Crew management, seafarer recruitment, and logistics support.",
    url: "https://www.ptkamandanujayasamudera.com/services",
  };

  return (
    <>
      <Seo
        title="Maritime Services & Logistics | PT Kamandanu Jaya Samudera"
        description="World-class maritime solutions: Crew management, global seafarer recruitment, and sea logistics."
        url="/services"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main
        className="bg-[#F8FAFC] min-h-screen text-[#0A2540]"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* ================= HERO (SAMA PERSIS DENGAN ABOUT & LICENSE) ================= */}
        <section className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
              <Globe size={14} /> Global Maritime Support
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
              Our Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Service Solutions
              </span>
            </h1>

            <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Delivering world-class maritime crewing, logistics, and compliance solutions across global waters.
            </p>
          </div>
        </section>

        {/* ================= WORKFLOW ================= */}
        <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <span className="text-4xl font-black text-blue-600/20">
                    0{index + 1}
                  </span>
                  <h4 className="text-xs font-black uppercase mt-2">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MAIN SERVICES ================= */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-black mb-16">
            What We Do
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {mainServices.map((service, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white">
                      <service.icon size={26} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Slider */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px]">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="h-full"
              >
                {sliderImages.map((img, index) => (
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
          </div>

          {/* Crewing Includes */}
          <div className="mt-24 p-10 bg-white rounded-[3rem] shadow border">
            <h3 className="text-xl font-black text-blue-600 uppercase mb-10 text-center">
              Our crewing services include
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crewingIncludes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="font-bold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
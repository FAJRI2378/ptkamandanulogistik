import React, { useEffect } from "react";
import {
  Users,
  FileCheck,
  Globe,
  Truck,
  Package,
  Warehouse,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Seo from "../components/Seo.tsx";

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

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Freight Forwarding, Marine Logistics, Cargo Transportation",
  provider: {
    "@type": "Organization",
    name: "PT Kamandanu Jaya Logistik",
  },
  description:
    "Layanan logistik profesional dari PT Kamandanu Jaya Logistik: freight forwarding, sea freight, marine logistics, cargo transportation, dan warehousing.",
  url: "https://www.ptkamandanujayalogistik.com/services",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
};

const workflowSteps = [
  { title: "Inquiry & Consultation" },
  { title: "Cargo Assessment" },
  { title: "Route Planning" },
  { title: "Documentation & Customs" },
  { title: "Shipment Execution" },
  { title: "Delivery & Confirmation" },
];

const mainServices = [
  {
    icon: Globe,
    title: "Sea Freight (FCL & LCL)",
    description:
      "Layanan pengiriman laut Full Container Load (FCL) dan Less than Container Load (LCL) ke seluruh pelabuhan utama dunia dengan harga kompetitif dan jadwal terpercaya.",
  },
  {
    icon: FileCheck,
    title: "Freight Forwarding & Customs",
    description:
      "Pengurusan dokumen ekspor-impor, pengajuan PIB/PEB, pengurusan bea cukai, dan koordinasi agen di negara tujuan untuk memastikan kelancaran pengiriman.",
  },
  {
    icon: Truck,
    title: "Land Transport & Distribution",
    description:
      "Layanan distribusi darat terintegrasi dari pelabuhan ke gudang atau lokasi akhir pelanggan di seluruh wilayah Indonesia menggunakan armada terstandarisasi.",
  },
];

const logisticsIncludes = [
  "Sea Freight FCL & LCL",
  "Air Freight",
  "Customs Clearance",
  "Import & Export Documentation",
  "Door-to-Door Delivery",
  "Cargo Insurance",
  "Warehousing & Distribution",
  "Project Cargo",
  "Dangerous Goods (IMDG)",
  "Supply Chain Consulting",
  "Track & Trace System",
  "Cost Optimization",
];

const sliderImages = [
  { src: c1, alt: "Layanan Sea Freight dan Marine Logistics PT Kamandanu Jaya Logistik" },
  { src: c2, alt: "Proses Freight Forwarding dan Customs Clearance Kamandanu Logistik" },
  { src: c3, alt: "Tim Logistik Profesional PT Kamandanu Jaya Logistik Jakarta" },
];

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Layanan Logistik & Freight Forwarding | PT Kamandanu Jaya Logistik"
        description="PT Kamandanu Jaya Logistik menawarkan solusi logistik lengkap: sea freight, freight forwarding, customs clearance, land transport, warehousing, dan marine logistics untuk bisnis Anda."
        url="/services"
        keywords="layanan freight forwarding, sea freight Indonesia, customs clearance Jakarta, marine logistics, cargo transportation, warehousing, Kamandanu Jaya Logistik"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main
        className="bg-[#F8FAFC] min-h-screen text-[#0A2540]"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {/* HERO */}
        <section
          className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden"
          aria-label="Header halaman Layanan"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
            role="img"
            aria-label="Operasional logistik dan shipping PT Kamandanu Jaya Logistik"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
              <Globe size={14} aria-hidden="true" /> Global Logistics Support
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
              Our Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Logistics Solutions
              </span>
            </h1>

            <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Delivering world-class freight forwarding, marine logistics, dan
              cargo transportation solutions across global trade routes.
            </p>
          </div>
        </section>

        {/* WORKFLOW */}
        <section
          className="max-w-7xl mx-auto px-6 -mt-16 relative z-20"
          aria-labelledby="workflow-heading"
        >
          <h2 id="workflow-heading" className="sr-only">
            Alur Proses Pengiriman Kargo
          </h2>
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <span className="text-4xl font-black text-blue-600/20">
                    0{index + 1}
                  </span>
                  <h3 className="text-xs font-black uppercase mt-2">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section
          className="max-w-7xl mx-auto px-6 py-24"
          aria-labelledby="main-services-heading"
        >
          <h2
            id="main-services-heading"
            className="text-3xl md:text-5xl font-black mb-16 text-[#0A2540]"
          >
            What We Do
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {mainServices.map((service, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white">
                      <service.icon size={26} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-[#0A2540]">
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
                a11y={{ enabled: true }}
              >
                {sliderImages.map((img, index) => (
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
          </div>

          {/* Logistics Services Include */}
          <div className="mt-24 p-10 bg-white rounded-[3rem] shadow border">
            <h3 className="text-xl font-black text-blue-600 uppercase mb-10 text-center">
              Layanan logistik kami mencakup
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logisticsIncludes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 bg-blue-600 rounded-full"
                    aria-hidden="true"
                  />
                  <span className="font-bold text-gray-700">{item}</span>
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
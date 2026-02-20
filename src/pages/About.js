import React, { useEffect, useState } from "react";
import {
  Award,
  Globe,
  Users,
  ShieldCheck,
  Anchor,
  Target,
  Ship,
  ChevronRight,
  MapPin,
} from "lucide-react";
import Seo from "../components/Seo";
import backgroundImageHeader from "../img/ah.jpg";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MarineService",
      name: "PT Kamandanu Jaya Samudera",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Warakas 3 No.23, RT.010 RW.004, 2nd Floor",
        addressLocality: "North Jakarta",
        addressRegion: "DKI Jakarta",
        postalCode: "14340",
        addressCountry: "ID",
      },
      description:
        "Leading Indonesian crewing agency providing skilled, STCW-certified seafarers and comprehensive vessel management.",
      url: "https://www.ptkamandanujayasamudera.com/about",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const services = [
    {
      title: "Talent Acquisition",
      desc: "Rigorous selection of top-tier, certified maritime talent.",
    },
    {
      title: "Global Manning",
      desc: "Seamless coordination via our worldwide network of offices.",
    },
    {
      title: "Training & Growth",
      desc: "Continuous skill development and STCW compliance.",
    },
    {
      title: "Financial Admin",
      desc: "Streamlined payroll, accounting, and cost monitoring.",
    },
    {
      title: "Compliance",
      desc: "Automated tracking of Meds, Visas, and Flag State requirements.",
    },
    {
      title: "Logistics",
      desc: "Efficient travel and crew change coordination.",
    },
    {
      title: "Consultancy",
      desc: "Expert maritime advice and regulatory guidance.",
    },
    {
      title: "Risk Management",
      desc: "Comprehensive P&I insurance and asset protection.",
    },
  ];

  return (
    <>
      <Seo
        title="About Us | PT Kamandanu Jaya Samudera - Expert Manning Agency"
        description="PT Kamandanu Jaya Samudera: North Jakarta's premier crewing agency. Managing 10,800+ seafarers with a global network and 24/7 digital monitoring."
        url="/about"
      />
     <section className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden">
        {/* BACKGROUND IMAGE DENGAN OVERLAY */}
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImageHeader})`,
            // Memberikan efek gradasi agar bagian bawah menyatu dengan konten
            maskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        />

        {/* AKSEN SKEW (Opsional, bawaan kode Anda sebelumnya) */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-20 z-0" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
              <Anchor size={14} /> Global Crewing Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
              Navigating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Human Capital
              </span>
            </h1>
            <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Empowering the global maritime industry with Indonesia's most
              skilled and professional seafarers.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 pb-24">
        {/* WHO WE ARE */}
        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          <div
            className={`lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-3xl font-black text-[#0A2540] mb-6 flex items-center gap-3">
              <Ship className="text-blue-600" size={32} />
              Strategic Manning Partner
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>PT Kamandanu Jaya Samudera</strong> specializes in
                attracting, developing, and retaining elite crew members. Based
                in North Jakarta, we serve as a vital link in the global supply
                chain, meeting the rising demand for professional energy and
                maritime labor.
              </p>
              <p>
                Supported by experts and a{" "}
                <strong>centralized digital system</strong>, we ensure 100%
                compliance with international regulations, filing every
                certificate and visa electronically for total transparency.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 border border-slate-100">
                  <MapPin size={16} className="text-blue-500" /> North Jakarta,
                  Indonesia
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 border border-slate-100">
                  <Users size={16} className="text-blue-500" /> 10,800+
                  Seafarers
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <Globe size={48} className="text-blue-200 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Global Network</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  we provide immediate access to competent crew, ensuring your
                  vessels never stop moving.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">
                  Standardization
                </p>
                <p className="text-xl font-black italic">
                  "Quality & Integrity"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
            <div className="inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600 mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-black text-[#0A2540] mb-6">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "To be the global benchmark in maritime manning, recognized for
              reliability, professional integrity, and the quality of our
              seafarers."
            </p>
          </div>

          <div className="bg-[#0A2540] p-10 rounded-[3rem] shadow-xl text-white relative overflow-hidden">
            <Award
              size={120}
              className="absolute top-0 right-0 p-8 opacity-10"
            />
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <ShieldCheck size={32} className="text-blue-400" /> Our Mission
            </h3>
            <ul className="space-y-6">
              {[
                "Execute rigorous, transparent recruitment for maximum crew competence.",
                "Cultivate a performance-driven environment for our global employees.",
                "Protect and maintain client assets as if they were our own.",
                "Adhere strictly to maritime regulations to ensure trouble-free operations.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <ChevronRight className="text-blue-400 shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg font-medium">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap");
        main {
          font-family: "Plus Jakarta Sans", sans-serif;
        }
      `}</style>
    </>
  );
};

export default About;

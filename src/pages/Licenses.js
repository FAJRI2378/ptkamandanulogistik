import React, { useEffect, useState } from "react";
import {
  Shield,
  Award,
  CheckCircle,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import Seo from "../components/Seo";

import siupakImg from "../img/siup.webp";
import siukakImg from "../img/siukak.webp";
import isoImg from "../img/logo_iso.webp";
import mabt from "../img/MABT.webp";
import tot from "../img/TOT.webp";
import backgroundImageHeader from "../img/lisens.webp";

const Licenses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const licensesData = [
    {
      id: 1,
      name: "SIUP",
      fullName: "Business Trading License",
      description:
        "The primary operational license authorizing PT Kamandanu Jaya Samudera to conduct legal business activities within Indonesia.",
      imageUrl: siupakImg,
      badge: "Commercial Permit",
    },
    {
      id: 2,
      name: "SIUKAK",
      fullName: "Seafarer Recruitment & Placement License",
      description:
        "Official permit from the Directorate General of Sea Transportation for domestic and international crew placement.",
      imageUrl: siukakImg,
      badge: "Operational Authority",
    },
    {
      id: 3,
      name: "ISO & MLC",
      fullName: "Quality Management & Labor Compliance",
      description:
        "International standards ensuring quality management and maritime labor protection in global shipping operations.",
      imageUrl: isoImg,
      badge: "Global Standard",
    },
  ];

  const certificationData = [
    {
      id: 4,
      name: "Mindset Transformation",
      fullName: "Mindset & Behavior Transformation (MABT)",
      description:
        "Certification focused on developing character, integrity, and discipline for professional maritime performance.",
      imageUrl: mabt,
      badge: "Core Training",
    },
    {
      id: 5,
      name: "Stress Management",
      fullName: "ITF Stress Management & Coping Strategies",
      description:
        "International certification ensuring mental health and psychological resilience in maritime environments.",
      imageUrl: tot,
      badge: "Human Capital",
    },
  ];

  return (
    <>
      <Seo
        title="Licenses & Maritime Certifications | PT Kamandanu Jaya Samudera"
        description="Official legalities and professional certifications of PT Kamandanu Jaya Samudera."
        url="/licenses"
      />

      <main className="bg-[#F8FAFC] min-h-screen text-[#0A2540]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        {/* HERO — SAMA PERSIS DENGAN ABOUT */}
        <section className="relative pt-10 pb-20 bg-[#0A2540] overflow-hidden">

          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageHeader})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/90 to-[#0A2540]" />

          <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20 backdrop-blur-sm">
                <Award size={14} /> Compliance Portfolio
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Trust{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  & Compliance
                </span>
              </h1>

              <p className="text-xl text-blue-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                We operate with full legal authority and professionally certified personnel to meet the highest global maritime standards.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 pb-32 pt-20">

          {/* Corporate Licenses */}
          <section className="mb-24">
            <div
              className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="p-3 bg-blue-600 rounded-2xl shadow-xl">
                <Shield className="text-white" size={26} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase">
                Corporate Licenses
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {licensesData.map((item, index) => (
                <LicenseCard key={item.id} data={item} delay={index * 150} />
              ))}
            </div>
          </section>

          {/* Professional Certifications */}
          <section>
            <div
              className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="p-3 bg-emerald-500 rounded-2xl shadow-xl">
                <GraduationCap className="text-white" size={26} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase">
                Professional Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certificationData.map((item, index) => (
                <LicenseCard key={item.id} data={item} delay={index * 150} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

const LicenseCard = ({ data, delay }) => (
  <div
    className="group bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-700 flex flex-col opacity-0 animate-fadeInUp"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    <div className="relative h-64 flex items-center justify-center p-8 bg-gray-50">
      <img
        src={data.imageUrl}
        alt={data.name}
        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest shadow">
        {data.badge}
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-black mb-1 uppercase">
        {data.name}
      </h3>
      <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">
        {data.fullName}
      </p>
      <p className="text-gray-500 leading-relaxed mb-8 italic">
        "{data.description}"
      </p>

      <div className="mt-auto flex items-center justify-between">
        <a
          href={data.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-black text-sm hover:text-blue-600 transition"
        >
          View Document
          <ExternalLink size={14} />
        </a>

        <div className="flex items-center gap-1 text-emerald-600 text-xs font-black">
          <CheckCircle size={14} strokeWidth={3} /> VALIDATED
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease forwards;
      }
    `}</style>
  </div>
);

export default Licenses;
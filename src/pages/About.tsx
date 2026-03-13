import React, { useEffect, useState } from "react";
import {
  Award,
  Globe,
  Users,
  ShieldCheck,
  Anchor,
  Target,
  Truck,
  ChevronRight,
  MapPin,
  Ship,
  History,
  Briefcase,
} from "lucide-react";
import Seo from "../components/Seo.tsx";
import backgroundImageHeader from "../img/ah.webp";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PT Kamandanu Jaya Logistik",
      image: "https://www.ptkamandanujayalogistik.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Warakas 3 No.23, RT.010 RW.004, Lantai 2",
        addressLocality: "Jakarta Utara",
        addressRegion: "DKI Jakarta",
        postalCode: "14330",
        addressCountry: "ID",
      },
      description:
        "Profil PT Kamandanu Jaya Logistik — penyedia solusi freight forwarding, marine logistics, dan transportasi kargo internasional terpercaya di Indonesia.",
      url: "https://www.ptkamandanujayalogistik.com/about",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Seo
        title="Profil Perusahaan | PT Kamandanu Jaya Logistik - Solusi Logistik Global"
        description="Pelajari visi, misi, dan nilai-nilai PT Kamandanu Jaya Logistik. Kami adalah mitra strategis Anda dalam freight forwarding dan marine logistics di Jakarta Utara."
        url="/about"
        keywords="profil perusahaan kjl, pt kamandanu jaya logistik, visi misi logistik, sejarah perusahaan logistik, freight forwarding jakarta utara"
      />

      {/* ─── MODERN HERO SECTION ─── */}
      <section 
        className="relative min-h-[60vh] flex items-center bg-[#020617] overflow-hidden"
        aria-label="About Hero"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url(${backgroundImageHeader})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8">
              <History size={16} className="text-blue-400" />
              <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">Est. Expertise in Logistics</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Global Connectivity
              </span>
            </h1>
            <p className="text-xl text-blue-100/70 max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-6">
              Lebih dari sekadar pengiriman. Kami membangun jembatan logistik yang menghubungkan potensi bisnis Indonesia ke panggung dunia.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <main className="bg-white" style={{ fontFamily: FONT_FAMILY }}>
        
        {/* SECTION: WHO WE ARE (Bento Style) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Main Text Card */}
            <div className={`lg:col-span-8 bg-[#F8FAFC] rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-sm transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-10 h-[2px] bg-blue-600" /> Who We Are
              </h2>
              <h3 className="text-4xl font-black text-[#0A2540] mb-8">
                Mitra Strategis Logistik dengan Presisi dan Integritas.
              </h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>PT Kamandanu Jaya Logistik</strong> didirikan dengan satu tujuan utama: menyederhanakan kompleksitas rantai pasok global. Berbasis di Jakarta Utara, jantung maritim Indonesia, kami telah berkembang menjadi entitas yang dipercaya untuk menangani kargo lintas benua.
                </p>
                <p>
                  Kami percaya bahwa kesuksesan logistik terletak pada detail. Dengan memanfaatkan <strong>sistem manajemen digital modern</strong>, kami menawarkan visibilitas penuh dan kepatuhan regulasi mutlak, mulai dari IMDG Code hingga aturan bea cukai terbaru.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <MapPin className="text-blue-600 mb-3" />
                  <p className="font-bold text-[#0A2540]">Jakarta HQ</p>
                  <p className="text-sm text-gray-500">Strategic Hub</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <Briefcase className="text-blue-600 mb-3" />
                  <p className="font-bold text-[#0A2540]">Professional</p>
                  <p className="text-sm text-gray-500">Certified Team</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hidden md:block">
                  <Ship className="text-blue-600 mb-3" />
                  <p className="font-bold text-[#0A2540]">Global Agent</p>
                  <p className="text-sm text-gray-500">50+ Countries</p>
                </div>
              </div>
            </div>

            {/* Sidebar Visual Card */}
            <div className={`lg:col-span-4 space-y-8 transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
              <div className="bg-blue-600 rounded-[3rem] p-10 text-white h-full flex flex-col justify-between shadow-xl relative overflow-hidden group">
                <Globe size={120} className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div>
                  <h4 className="text-2xl font-black mb-4">International Standards</h4>
                  <p className="text-blue-100 leading-relaxed italic">
                    "Komitmen kami adalah memberikan standar layanan kelas dunia tanpa kompromi pada keamanan kargo."
                  </p>
                </div>
                <div className="pt-12">
                   <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-70">Philosophy</p>
                      <p className="text-xl font-black">Quality & Trust</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: VISION & MISSION (High Contrast) */}
        <section className="py-24 bg-[#0A2540] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 translate-x-20" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              
              {/* Vision Card */}
              <div className="group bg-white/5 border border-white/10 p-12 rounded-[3.5rem] hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tight">Our Vision</h3>
                <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
                  "Menjadi pilar utama logistik di Indonesia yang menginspirasi kepercayaan global melalui inovasi tanpa henti dan integritas profesional yang tak tergoyahkan."
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl">
                <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center mb-8">
                  <Award className="text-blue-400" size={32} />
                </div>
                <h3 className="text-3xl font-black text-[#0A2540] mb-8 uppercase italic tracking-tight">Our Mission</h3>
                <ul className="space-y-5">
                  {[
                    "Menghadirkan efisiensi biaya melalui manajemen rute yang cerdas.",
                    "Mengutamakan keselamatan kargo dengan standar internasional (IMDG Code).",
                    "Memastikan transparansi melalui pelaporan data yang akurat.",
                    "Membangun kemitraan jangka panjang yang saling menguntungkan.",
                    "Mendukung pertumbuhan ekonomi nasional melalui layanan ekspor-impor prima."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <ChevronRight className="text-blue-600 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                      <p className="text-gray-700 font-semibold">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION: CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A2540] mb-8">
              Siap Bermitra Dengan Kami?
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Jelajahi bagaimana solusi logistik kami dapat mempercepat pertumbuhan bisnis Anda di pasar domestik maupun internasional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-sm">
                Hubungi Kami Sekarang
              </a>
              <a href="/services" className="px-10 py-5 border-2 border-[#0A2540] text-[#0A2540] font-black rounded-full hover:bg-[#0A2540] hover:text-white transition-all uppercase tracking-widest text-sm">
                Lihat Layanan
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default About;
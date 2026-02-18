import React, { useEffect, useState } from "react";
import { 
  Award, 
  Globe, 
  Users, 
  CheckCircle, 
  ShieldCheck, 
  Anchor, 
  Target, 
  Ship, 
  ChevronRight,
  MapPin,
  Clock
} from "lucide-react";
import Seo from "../components/Seo";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Structured Data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "PT Kamandanu Jaya Samudera",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Warakas 3 No.23, RT.010 RW.004",
          "addressLocality": "Jakarta Utara",
          "addressRegion": "DKI Jakarta",
          "addressCountry": "ID"
        },
        "description": "Professional crewing and manning agency in Indonesia providing STCW certified seafarers."
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const services = [
    { title: "Talent Acquisition", desc: "Recruitment and selection of qualified seafarers" },
    { title: "Global Manning", desc: "Coordination of global manning offices" },
    { title: "Training Programs", desc: "Crew training and development programs" },
    { title: "Financial Services", desc: "Payroll and accounting services" },
    { title: "Budget Control", desc: "Cost control and budget monitoring" },
    { title: "Compliance", desc: "Monitoring medical, visa, and certificates" },
    { title: "Logistics", desc: "Travel arrangements and crew change coordination" },
    { title: "Insurance", desc: "Protection & Indemnity (P&I) follow-up" },
  ];

  return (
    <>
      <Seo
        title="About Our Agency | PT Kamandanu Jaya Samudera - Leader in Manning"
        description="Learn more about PT Kamandanu Jaya Samudera, a leading Indonesian crewing agency. We specialize in providing highly skilled, STCW-certified crew for global maritime fleets."
        url="/about"
      />

      <main className="bg-[#F8FAFC] min-h-screen overflow-hidden">
        {/* ─── HERO HEADER ─── */}
        <section className="relative pt-32 pb-20 bg-[#0A2540] overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20">
                <Anchor size={14} /> Professional Maritime Partner
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Company</span>
              </h1>
              <p className="text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed font-medium">
                Bridging the gap between world-class ship owners and Indonesia's finest maritime professionals.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24">
          {/* ─── BENTO INFO CARDS ─── */}
          <div className="grid lg:grid-cols-3 gap-6 mb-24">
            <div className={`lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-gray-100 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
              <h2 className="text-3xl font-black text-[#0A2540] mb-6 flex items-center gap-3">
                <Ship className="text-blue-600" size={32} />
                Who We Are
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>PT Kamandanu Jaya Samudera</strong> is strategically located in the heart of North Jakarta's maritime district. We are in the business of attracting, developing, and retaining the best set of crew for our clients.
                </p>
                <p>
                  Our management centers are supported by global manning offices to recruit skilled seafarers and coordinate all crewing requirements efficiently across domestic and international waters.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 border border-slate-100">
                    <MapPin size={16} className="text-blue-500" /> North Jakarta, ID
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 border border-slate-100">
                    <Clock size={16} className="text-blue-500" /> 24/7 Support
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Users size={48} className="text-blue-200 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Elite Crew Network</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Access thousands of registered, STCW-certified seafarers managed by our proprietary system for instant deployment.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">Compliance</p>
                  <p className="text-xl font-black">100% MLC 2006</p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── SERVICES GRID ─── */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] mb-4">Manning Solutions</h2>
              <div className="w-20 h-2 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="text-lg font-black text-[#0A2540] mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── VISION & MISSION ─── */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 hover:border-blue-200 transition-all">
              <div className="inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600 mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#0A2540] mb-6">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                "To be the most reliable and influential maritime manning agency, setting the gold standard in seafarer recruitment and professional crew management globally."
              </p>
            </div>

            <div className="group bg-[#0A2540] p-10 rounded-[3rem] shadow-xl text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award size={120} />
              </div>
              <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">
                <ShieldCheck size={32} className="text-blue-400" />
                Our Mission
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Deliver excellence through rigorous and professional selection.",
                  "Develop skilled employees in a supportive, performance-driven environment.",
                  "Value strong cooperation to achieve the highest standards of service."
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

        {/* ─── CTA ─── */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-[#0A2540] mb-6">Ready to work with Indonesia's elite seafarers?</h2>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              Inquire Our Services
            </button>
          </div>
        </section>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        main { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
    </>
  );
};

export default About;
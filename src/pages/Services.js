import React, { useState, useEffect } from "react";
import {
  Ship,
  Users,
  FileCheck,
  Anchor,
  Wrench,
  Plane,
  ChevronRight,
  ShieldCheck,
  Globe,
  CheckCircle,
} from "lucide-react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // Schema.org Structured Data for Services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Crew Manning and Maritime Support",
      "provider": {
        "@type": "Organization",
        "name": "PT Kamandanu Jaya Samudera",
        "url": "https://www.kamandanujayasamudera.com"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Maritime Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crew Manning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vessel Maintenance" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maritime Documentation" } }
        ]
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const services = [
    {
      icon: Users,
      title: "Crew Manning Services",
      tag: "CORE SERVICE",
      description: "Providing high-quality seafarers for all ranks. Our pool includes deck & engine officers to ratings, all strictly vetted for international compliance.",
      features: ["STCW Certified Officers", "Engineers & Ratings", "Complete Vessel Manning", "98% Retention Rate"],
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: Ship,
      title: "Vessel Expertise",
      tag: "VERSATILITY",
      description: "Serving commercial vessels, tankers, and offshore fleets. We understand the specific technical requirements for different ship categories.",
      features: ["Oil & Chemical Tankers", "Bulk & Container Ships", "Offshore / LCT / FPSO", "Specialized Cargo"],
      color: "from-cyan-600 to-blue-700",
    },
    {
      icon: Wrench,
      title: "Technical Maintenance",
      tag: "OPERATIONAL",
      description: "Our certified technical teams are ready for rapid deployment for ship repairs, maintenance, and complex offshore projects.",
      features: ["Welding & Fitting", "Electrical Engineering", "Engine Overhaul", "Certified Travel-Ready"],
      color: "from-blue-700 to-slate-800",
    },
    {
      icon: FileCheck,
      title: "Maritime Documentation",
      tag: "COMPLIANCE",
      description: "Handling flag state services, certifications, and international regulatory compliance through global maritime affiliations.",
      features: ["Flag State Processing", "Seaman Book Renewal", "Marlins Testing", "STCW Compliance"],
      color: "from-indigo-600 to-blue-800",
    },
    {
      icon: Plane,
      title: "Travel & Logistics",
      tag: "LOGISTICS",
      description: "Comprehensive services for visa processing, flight ticketing, and crew travel logistics to ensure seamless mobilization worldwide.",
      features: ["US C1/D & Transit Visas", "Global Flight Booking", "Door-to-Deck Logistics", "24/7 Travel Support"],
      color: "from-sky-600 to-blue-700",
    },
    {
      icon: Anchor,
      title: "Training & Advisory",
      tag: "DEVELOPMENT",
      description: "Supporting seafarer competency through specialized language courses and professional advisory tailored to industry needs.",
      features: ["English & Mandarin Courses", "Competency Training", "Juridical Assistance", "Career Advisory"],
      color: "from-slate-700 to-[#0A2540]",
    },
  ];

  return (
    <>
      <Seo
        title="Maritime Services & Crew Manning Solutions | PT Kamandanu Jaya Samudera"
        description="Comprehensive maritime services including crew manning, vessel maintenance, documentation, and global travel logistics for the shipping industry."
        keywords="crew manning services, ship repair team, maritime documentation jakarta, crew travel logistics, seafarer training indonesia"
        url="/services"
      />

      <main className="bg-[#F8FAFC] min-h-screen">
        {/* --- Hero Header --- */}
        <header className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-[#0A2540] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/20">
                <Globe size={14} /> Global Maritime Support
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Our Comprehensive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Service Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
                Empowering vessel owners with elite crewing, technical expertise, and seamless administrative support across every nautical mile.
              </p>
            </div>
          </div>
        </header>

        {/* --- Services Content --- */}
        <section className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-20 pb-24 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className={`
                    group bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 overflow-hidden 
                    border border-gray-100 transition-all duration-500 hover:shadow-2xl 
                    hover:-translate-y-3 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon size={28} />
                      </div>
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-widest uppercase">
                        {service.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-[#0A2540] mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                          <CheckCircle size={16} className="text-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-gray-50">
                      {/* <button className="flex items-center gap-2 text-xs font-black text-[#0A2540] hover:text-blue-600 transition-colors uppercase tracking-widest">
                        Learn Detail <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button> */}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* --- Bottom Trust CTA --- */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-[#0A2540] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 opacity-5">
              <ShieldCheck size={200} />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Strengthen Your Fleet?
            </h3>
            <p className="text-blue-100/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Contact our crewing experts today to get a tailored proposal for your vessel requirements. We provide flexible, high-quality manning solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            < a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </a>
              <a href="/licenses" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A2540] font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                View Licenses
              </a>

            </div>
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

export default Services;
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  Award,
  Ship,
  Users,
  TrendingUp,
  ShieldCheck,
  Anchor,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  FileText,
  Database,
  Globe,
  ArrowRight,
} from "lucide-react";
import Seo from "../components/Seo";
import foto from "../img/foto.jpeg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { icon: Users, number: 360, suffix: "+", label: "Crews Deployed", color: "text-blue-500" },
    { icon: Database, number: 10000, suffix: "+", label: "Talent Pool", color: "text-cyan-500" },
    { icon: Ship, number: 8000, suffix: "", label: "Vessels Served", color: "text-indigo-500" },
    { icon: Award, number: 100, suffix: "%", label: "MLC Compliant", color: "text-emerald-500" },
    { icon: Globe, number: 24, suffix: "/7", label: "Global Support", color: "text-blue-400" },
  ];

  const testimonials = [
    {
      name: "Captain M. Rahman",
      position: "Fleet Manager",
      company: "Global Shipping Lines",
      content: "PT Kamandanu Jaya Samudera has been our trusted partner for crew management. Their professionalism and attention to detail is unmatched.",
      rating: 5,
    },
    {
      name: "S. Wijaya",
      position: "HR Director",
      company: "Pacific Maritime Corp",
      content: "The quality of seafarers provided by Kamandanu Jaya Samudera has consistently exceeded our expectations. Highly recommended!",
      rating: 5,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Inject Structured Data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MarineService",
      "name": "PT Kamandanu Jaya Samudera",
      "description": "Leading Crew Manning Agency in Indonesia. STCW-certified seafarer recruitment and management.",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manning Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crew Recruitment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vessel Manning" } }
        ]
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Seo
        title="PT Kamandanu Jaya Samudera | #1 Crew Manning Agency Indonesia"
        description="Trusted Indonesian crew manning agency. Providing STCW certified seafarers, recruitment, and maritime personnel management for global shipping companies since 2020."
        keywords="crew manning agency jakarta, seafarer recruitment indonesia, maritime agency indonesia, ship crew supply, indonesian seaman"
        url="/"
      />

      <main className="overflow-hidden font-sans text-[#0A2540]">
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
                Empowering global shipping with Indonesia's finest, STCW-certified seafarers. Since 2020, we've bridged the gap between talent and the open sea.
              </p>
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <Link to="/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-900/40 hover:-translate-y-1">
                  Hire Our Crew
                </Link>
                <Link to="/about" className="px-10 py-4 border-2 border-white/20 hover:border-white text-white font-bold rounded-xl transition-all backdrop-blur-sm">
                  Company Profile
                </Link>
              </div>
            </div>

            {/* Stats Bento Grid */}
            <div className="grid grid-cols-2 gap-4 lg:ml-10">
              {stats.slice(0, 4).map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-colors">
                  <stat.icon className={`${stat.color} mb-4`} size={32} />
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter value={stat.number} id={`hero-${i}`} />{stat.suffix}
                  </div>
                  <p className="text-blue-200/60 text-sm uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ─── TRUST BAR ─── */}
        <section className="bg-white border-y border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="font-black text-2xl tracking-tighter">ISO 9001:2015</span>
             <span className="font-black text-2xl tracking-tighter">STCW COMPLIANT</span>
             <span className="font-black text-2xl tracking-tighter">MLC 2006</span>
             <span className="font-black text-2xl tracking-tighter">IMO STANDARDS</span>
          </div>
        </section>

        {/* ─── ABOUT / PROFILE ─── */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl group-hover:bg-blue-600/20 transition-all" />
              <img 
                src={foto} 
                alt="Maritime Professionalism" 
                className="relative rounded-[2.5rem] shadow-2xl object-cover h-[600px] w-full"
                loading="lazy"
              />
              <div className="absolute bottom-8 right-8 bg-white p-8 rounded-[2rem] shadow-xl max-w-[240px]">
                <p className="text-4xl font-black text-blue-600 mb-1">98%</p>
                <p className="text-sm font-bold text-gray-500 leading-tight">Client Satisfaction & Crew Retention Rate</p>
              </div>
            </div>

            <article>
              <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm mb-4">Established 2020</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-[#0A2540]">
                Indonesia's Premier Gateway to <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Global Crewing</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>PT Kamandanu Jaya Samudera</strong> is more than just a manning agency. We are a strategic partner in maritime safety and operational efficiency. We specialize in the recruitment of top-tier Indonesian seafarers, ensuring every officer and rating is not just certified, but ready to excel in the most demanding sea conditions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Rigorous Screening", desc: "Multi-stage competency tests" },
                  { title: "Global Compliance", desc: "MLC & STCW documentation" },
                  { title: "Welfare Support", desc: "Continuous crew insurance" },
                  { title: "Expert Management", desc: "Led by Master Mariners" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg h-fit"><CheckCircle size={20}/></div>
                    <div>
                      <h4 className="font-bold text-[#0A2540]">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/services" className="inline-flex items-center gap-2 group text-[#0A2540] font-black hover:text-blue-600 transition-colors">
                VIEW ALL SERVICES <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </article>
          </div>
        </section>

        {/* ─── PROCESS SECTION ─── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Strategic Recruitment Process</h3>
            <p className="text-gray-500">How we ensure the highest quality of seafarers for your fleet.</p>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "Requirement", text: "Defining vessel & rank needs" },
              { icon: Users, title: "Sourcing", text: "Selecting from 10k+ database" },
              { icon: ShieldCheck, title: "Verification", text: "Physical & Cert validation" },
              { icon: Ship, title: "Mobilization", text: "Safe deployment to port" },
            ].map((step, i) => (
              <div key={i} className="relative group text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <step.icon size={32} />
                </div>
                <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                {i < 3 && <div className="hidden lg:block absolute top-10 -right-4 w-8 border-t-2 border-dashed border-gray-200" />}
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className="py-20 bg-[#0A2540] relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10"><Anchor size={400} /></div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              Optimize Your Crew Management <br /> With Expert Solutions
            </h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-500 transition-all">
                Request Proposal
              </Link>
              <a href="tel:02143938505" className="bg-white/10 text-white px-10 py-4 rounded-xl font-bold backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                Call Our Office
              </a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Home;
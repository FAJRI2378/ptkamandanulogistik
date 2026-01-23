import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, Ship, Users, TrendingUp } from "lucide-react";

const Home = () => {
  const [countedStats, setCountedStats] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "50+", label: "Vessels Managed", icon: Ship },
    { number: "500+", label: "Certified Seafarers", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  useEffect(() => {
    document.title = "PT Kamandanu Jaya Samudera - Professional Ship Management & Maritime Services in Indonesia";
    setTimeout(() => setIsVisible(true), 100);
    animateStats();
  }, []);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      if (!countedStats[index]) {
        const target = parseInt(stat.number.replace(/\D/g, ""));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
            setCountedStats((prev) => ({ ...prev, [index]: true }));
          }

          setCountedStats((prev) => ({
            ...prev,
            [`value_${index}`]: Math.floor(current),
          }));
        }, 16);
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-[#0A2540] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden rounded-b-[30px] md:rounded-b-[60px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/40 to-transparent z-10" />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-32 pb-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight ${
              isVisible ? "slide-in-left" : "opacity-0"
            }`}
          >
            PT Kamandanu Jaya Samudera
            <span className="block text-xl sm:text-2xl md:text-4xl mt-4 text-blue-300 font-normal tracking-wide">
              CREWING AGENCY & SHIP MANAGEMENT
            </span>
          </h1>

          <p
            className={`text-base md:text-xl text-blue-100 mb-10 max-w-2xl font-light leading-relaxed ${
              isVisible ? "slide-in-left" : "opacity-0"
            } stagger-1`}
          >
            The easiest way to get hired. Provide the best crew members who embrace where
            safety isn't just a priority, but a core value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/about"
              className={`inline-flex items-center justify-center px-12 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all font-bold shadow-lg transform hover:scale-105 ${
                isVisible ? "scale-in" : "opacity-0"
              } stagger-2`}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transition-all duration-500 hover:bg-white/20 ${
                  isVisible ? "slide-in-bottom" : "opacity-0"
                } stagger-${index + 1}`}
              >
                <Icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {countedStats[`value_${index}`] !== undefined
                    ? stat.number.includes("%")
                      ? `${countedStats[`value_${index}`]}%`
                      : `${countedStats[`value_${index}`]}+`
                    : stat.number}
                </div>
                <div className="text-blue-200 text-xs uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              About Our Company
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Leading Maritime Excellence
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Main Content */}
            <div className={`space-y-6 ${isVisible ? "slide-in-left" : "opacity-0"}`}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <div className="w-2 h-8 bg-blue-500 mr-4 rounded-full"></div>
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  KAMANDANU JAYA SAMUDERA is a service company engaged in the recruitment of labor and delivery at the crutch by sailors with supporting businesses related to maritime services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <div className="w-2 h-8 bg-blue-500 mr-4 rounded-full"></div>
                  Our Commitment
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  We present as one of the important factors in supporting world economic growth to meet the energy needs of professional sailors with high commitment and expertise.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <div className="w-2 h-8 bg-blue-500 mr-4 rounded-full"></div>
                  Professional Team
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Supported by professional workers in their respective fields with maritime experts ready to provide necessary consultations.
                </p>
              </div>
            </div>

            {/* Right Column - Key Points */}
            <div className={`space-y-6 ${isVisible ? "slide-in-right" : "opacity-0"}`}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-lg">Experienced in maritime recruitment and professional crew manning services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-lg">Computerized system for seamless information access and up-to-date activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-lg">Excellent service with dedicated staff ready to serve all your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-lg">Professional and powerful sailors ready to deliver exceptional work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-lg">Compliance with applicable regulations to ensure smooth operations</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-100 hover:border-blue-500 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-blue-100 hover:border-blue-500 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Client Focused</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 ${isVisible ? "slide-in-bottom" : "opacity-0"} stagger-2`}>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border border-blue-200">
              <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
                "We appreciate ensuring all activities entrusted to us are accomplished according to your expectations, expanding and maintaining assets as our own."
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-bold shadow-lg transform hover:scale-105"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A2540] via-blue-900 to-[#0A2540] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${isVisible ? "slide-in-bottom" : "opacity-0"}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/30 backdrop-blur-sm text-blue-100 rounded-full text-sm font-semibold border border-blue-400/30">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Maritime Services
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional crew manning and maritime recruitment solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 border-2 border-white/20 shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-500 ${isVisible ? "scale-in" : "opacity-0"} stagger-3`}>
              <div className="flex items-start mb-6">
                <div className="bg-blue-500 p-4 rounded-2xl mr-6">
                  <Ship className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-blue-300">
                    Crew Manning Services
                  </h3>
                  <div className="w-20 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-blue-50 leading-relaxed mb-8">
                The main objective of PT. KAMANDANU JAYA SAMUDERA crewing company is to provide quality assured crew manning services and supply our clients with qualified, capable and experienced seafarers of all grades from officers/engineers to ratings.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <h4 className="font-bold text-xl mb-3 text-blue-200 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Expert Team
                  </h4>
                  <p className="text-blue-100">
                    Well qualified and experienced crew managers capable of handling individual requests or complete vessel manning
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <h4 className="font-bold text-xl mb-3 text-blue-200 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Quality Assured
                  </h4>
                  <p className="text-blue-100">
                    Qualified, capable, and experienced seafarers of all grades from officers/engineers to ratings
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all font-bold shadow-lg transform hover:scale-105 flex items-center"
                >
                  View All Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all font-bold border-2 border-white/30 transform hover:scale-105 flex items-center"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes slide-in-left {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-bottom {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes scale-in {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }
          .slide-in-bottom {
            animation: slide-in-bottom 0.8s ease-out forwards;
          }
          .scale-in {
            animation: scale-in 0.8s ease-out forwards;
          }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
};

export default Home;
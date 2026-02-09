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
} from "lucide-react";
import Seo from "../components/Seo";
import foto from "../img/foto.jpeg";

const Home = () => {
  const [animated, setAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    {
      icon: Users,
      number: 11,
      suffix: "",
      label: "Crews Arranged (Nov 2020)",
    },
    {
      icon: TrendingUp,
      number: 27,
      suffix: "",
      label: "Highest Monthly Crews (Jan 2021)",
    },
    {
      icon: Users,
      number: 360,
      suffix: "+",
      label: "Total Crews Arranged",
    },
    {
      icon: Database,
      number: 10000,
      suffix: "+",
      label: "Crews in Database",
    },
    {
      icon: Ship,
      number: 8000,
      suffix: "",
      label: "Vessels Served",
    },
  ];

  const testimonials = [
    {
      name: "Captain M. Rahman",
      position: "Fleet Manager",
      company: "Global Shipping Lines",
      content:
        "PT Kamandanu Jaya Samudera has been our trusted partner for crew management. Their professionalism and attention to detail is unmatched.",
      rating: 5,
    },
    {
      name: "S. Wijaya",
      position: "HR Director",
      company: "Pacific Maritime Corp",
      content:
        "The quality of seafarers provided by Kamandanu Jaya Samudera has consistently exceeded our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "J. Anderson",
      position: "Operations Manager",
      company: "Oceanic Transport",
      content:
        "Their comprehensive crew management solutions have streamlined our operations significantly. A reliable partner in the maritime industry.",
      rating: 5,
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    // Schema.org Structured Data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PT Kamandanu Jaya Samudera",
      alternateName: "Kamandanu Jaya Samudera Crew Manning Agency",
      description:
        "Professional crew manning agency specializing in recruitment, deployment, and management of qualified seafarers for domestic and international vessels",
      foundingDate: "2020-10-23",
      url: "https://kamandanujayasamudera.com",
      logo: "https://kamandanujayasamudera.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/pt-kamandanu-jaya-samudera",
        "https://www.facebook.com/kamandanujayasamudera",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
        addressLocality: "Jakarta",
      },
      areaServed: "Worldwide",
      serviceType: [
        "Crew Manning Services",
        "Seafarer Recruitment",
        "Maritime Personnel Management",
        "Vessel Crew Supply",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    };

    // Add structured data to page
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const animateStats = useCallback(() => {
    // Animation is handled by AnimatedCounter component
  }, []);

  useEffect(() => {
    if (isVisible && !animated) {
      animateStats();
      setAnimated(true);
    }
  }, [isVisible, animated, animateStats]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* ✅ Enhanced SEO Meta Tags */}
      <Seo
        title="PT Kamandanu Jaya Samudera - Professional Crew Manning Agency Indonesia | Seafarer Recruitment & Management"
        description="Leading Indonesian crew manning and seafarer recruitment agency. 15+ years experience providing qualified, certified maritime personnel for international vessels. ISO-certified crewing services with 10,000+ seafarers pool and 98% client satisfaction."
        keywords="crew manning agency Indonesia, seafarer recruitment Indonesia, maritime recruitment agency, crewing agency Jakarta, ship crew manning, vessel crew supply, Indonesian seafarers, maritime personnel management, crew management services"
        url="/"
      />

      <div className="min-h-screen bg-white">
     {/* ================= HERO SECTION ================= */}
<header className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#0A2540] to-[#0E3A6A] overflow-hidden">
  {/* Background Video Wrapper */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Video + Aspect Ratio Wrapper */}
    <div className="relative w-full h-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
      <iframe
        className="
          absolute inset-0 w-full h-full
          object-cover
          scale-[1.00]              /* mobile portrait: no zoom → crop minimal */
          sm:scale-[1.02]           /* small screens */
          md:scale-[1.05]           /* medium */
          lg:scale-[1.12]           /* large: mulai terlihat dramatis */
          xl:scale-[1.18]           /* extra large */
          opacity-50 md:opacity-60   /* lebih transparan di mobile agar teks jelas */
          transition-transform duration-1000 ease-out
        "
        src="https://www.youtube.com/embed/b_q0Tb2y_qI?autoplay=1&mute=1&loop=1&playlist=b_q0Tb2y_qI&controls=0&showinfo=0&rel=0&modestbranding=1"
        title="Maritime Background Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        aria-hidden="true"
        loading="lazy"
      />
    </div>

    {/* Layered Overlays untuk readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/70 via-[#0A2540]/40 to-[#0E3A6A]/60 pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A2540]/80 to-transparent pointer-events-none" />
  </div>

  {/* Content Layer */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 lg:pt-40 pb-24 lg:pb-32">
    {/* Heading */}
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight ${
        isVisible ? "animate-slide-in-left" : "opacity-0"
      }`}
    >
      PT Kamandanu Jaya Samudera
      <span className="block mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-200/90 font-medium">
        Professional Crew Manning & Seafarer Recruitment Agency Indonesia
      </span>
    </h1>

    {/* Subtext */}
    <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-blue-100/90 max-w-3xl leading-relaxed font-light">
      Leading Indonesian crew manning agency established in 2020, delivering <span className="font-semibold text-white">qualified, STCW-certified seafarers</span> for domestic and international maritime operations.
    </p>

    {/* CTA Buttons */}
    <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Link
        to="/about"
        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-900/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
      >
        Explore Services
      </Link>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg"
      >
        Get a Quote
      </Link>
    </div>

    {/* Stats */}
    <aside className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
          >
            <Icon className="mx-auto mb-3 text-blue-400 w-7 h-7 sm:w-9 sm:h-9" />
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              <AnimatedCounter value={stat.number} id={index} />
              {stat.suffix}
            </div>
            <div className="text-blue-200/80 text-xs sm:text-sm mt-1 uppercase tracking-wide font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </aside>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10">
    <svg className="w-10 h-10 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</header>

        {/* ================= QUICK INFO BAR ================= - Mobile Optimized */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-3 sm:py-4 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <div className="flex items-center gap-2 py-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 py-1">
              <Phone className="w-4 h-4" />
              <span className="text-sm"> ( 021 ) 43938505</span>
            </div>
            <div className="flex items-center gap-2 py-1">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@kamandanujayasamudera.com</span>
            </div>
          </div>
        </section>

        {/* ================= COMPANY PROFILE SECTION ================= - Mobile Optimized */}
        <section
          className="py-16 sm:py-24 bg-gray-50 overflow-hidden"
          aria-labelledby="company-profile-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* LEFT SECTION: SEO-Optimized Content - Mobile Optimized */}
              <article className="order-2 lg:order-1">
                <h2
                  id="company-profile-heading"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A2540] mb-6 sm:mb-8 tracking-tight"
                >
                  Company Profile: Leading Crew Manning Agency Indonesia
                </h2>

                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  {/* Introduction with Rich Keywords - Mobile Optimized */}
                  <p>
                    <strong className="text-[#0A2540]">
                      PT Kamandanu Jaya Samudera
                    </strong>{" "}
                    is Indonesia's trusted{" "}
                    <strong className="text-blue-600">
                      crew manning agency
                    </strong>{" "}
                    and
                    <strong className="text-blue-600">
                      {" "}
                      maritime recruitment specialist
                    </strong>
                    , providing comprehensive{" "}
                    <strong className="text-blue-600">
                      seafarer recruitment
                    </strong>
                    , training, placement, and crew management services for
                    international and domestic shipping companies, offshore
                    operations, and maritime support businesses.
                  </p>

                  {/* Core Services - H3 for Structure - Mobile Optimized */}
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-r-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3 flex items-center gap-2">
                      <Anchor className="w-5 h-5 text-blue-600" />
                      Our Maritime Recruitment Services
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        ✓ <strong>Officer & Rating Recruitment</strong> -
                        STCW-certified personnel
                      </li>
                      <li>
                        ✓ <strong>Crew Management Solutions</strong> - Complete
                        manning services
                      </li>
                      <li>
                        ✓ <strong>Pre-employment Training</strong> -
                        Industry-standard certification
                      </li>
                      <li>
                        ✓ <strong>Deployment & Mobilization</strong> - Global
                        crew placement
                      </li>
                      <li>
                        ✓ <strong>Compliance Management</strong> - MLC & STCW
                        regulations
                      </li>
                    </ul>
                  </div>

                  {/* Industry Expertise - Mobile Optimized */}
                  <p>
                    Established in{" "}
                    <time datetime="2020-10-23">October 2020</time>, we operate
                    at the forefront of the rapidly evolving{" "}
                    <strong>global maritime industry</strong>. Our
                    <strong className="text-[#0A2540]">
                      {" "}
                      crew manning solutions
                    </strong>{" "}
                    address the increasing demand for skilled, professional
                    seafarers across commercial vessels, offshore platforms, and
                    specialized maritime operations worldwide.
                  </p>

                  {/* Competitive Advantages - Mobile Optimized */}
                  <p>
                    Our <strong>manning agency</strong> stands out through:
                  </p>
                  <ul className="list-none space-y-2 ml-0 text-gray-700">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Experienced Management Team</strong> - Maritime
                        professionals with decades of industry expertise
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Quality Assurance</strong> - Rigorous screening
                        and certification verification processes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Global Network</strong> - Strategic partnerships
                        with international shipping companies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Technology-Driven</strong> - Modern crew
                        management systems for real-time tracking
                      </span>
                    </li>
                  </ul>

                  {/* Regulatory Compliance - Mobile Optimized */}
                  <p>
                    We collaborate with <strong>maritime consultants</strong>{" "}
                    and industry experts to ensure full compliance with{" "}
                    <abbr title="International Maritime Organization">IMO</abbr>
                    ,
                    <abbr title="Standards of Training, Certification and Watchkeeping">
                      STCW
                    </abbr>
                    , and
                    <abbr title="Maritime Labour Convention">MLC</abbr> 2006
                    regulations, maintaining the highest international standards
                    in <strong>seafarer recruitment and crew management</strong>
                    .
                  </p>

                  {/* Technology & Efficiency - Mobile Optimized */}
                  <p>
                    PT Kamandanu Jaya Samudera utilizes advanced{" "}
                    <strong>crew management software</strong> and digital
                    platforms, enabling ship owners and operators to access
                    real-time crew availability, certification status, medical
                    fitness reports, and deployment schedules with complete
                    transparency and efficiency.
                  </p>

                  {/* Service Commitment - Mobile Optimized */}
                  <p>
                    Our commitment extends beyond recruitment. We provide
                    comprehensive <strong>crew welfare support</strong>,
                    continuous professional development, emergency assistance,
                    and career guidance to ensure seafarers perform optimally
                    while maintaining safety and operational excellence.
                  </p>

                  {/* Quality Guarantee - Mobile Optimized */}
                  <p>
                    We guarantee the provision of{" "}
                    <strong>
                      competent, certified, and deployment-ready seafarers
                    </strong>{" "}
                    who demonstrate professionalism, discipline, technical
                    competence, and full preparedness for their assigned duties
                    aboard vessels of all types and sizes.
                  </p>

                  {/* Trust Statement - Featured Quote - Mobile Optimized */}
                  <blockquote className="border-l-4 border-blue-600 bg-blue-50 pl-4 sm:pl-6 py-4 italic font-medium text-gray-800 rounded-r-lg">
                    <p className="text-lg sm:text-xl mb-2">
                      "Trust, integrity, and responsibility define our
                      operations."
                    </p>
                    <p className="text-sm sm:text-base not-italic text-gray-700">
                      All <strong>crew manning services</strong> are executed in
                      strict accordance with Indonesian maritime regulations,
                      international conventions, and industry best practices,
                      ensuring reliability, safety, security, and sustainable
                      partnerships with vessel owners worldwide.
                    </p>
                  </blockquote>

                  {/* Industry Keywords Footer - Mobile Optimized */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <strong>Keywords:</strong> Crew Manning Agency Jakarta |
                      Seafarer Recruitment Indonesia | Maritime Personnel
                      Services | Ship Crew Supply | Indonesian Manning Agency |
                      Offshore Crew Management | STCW Certified Seafarers | MLC
                      Compliant Crewing
                    </p>
                  </div>
                </div>
              </article>

              {/* RIGHT SECTION: Visual Elements & Trust Signals - Mobile Optimized */}
              <aside className="order-1 lg:order-2">
                <div className="relative">
                  {/* Decorative Background Animation - Mobile Optimized */}
                  <div
                    className="hidden sm:block absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="hidden sm:block absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
                    aria-hidden="true"
                  ></div>

                  {/* Featured Image with Caption - Mobile Optimized */}
                  <figure className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl mb-6 sm:mb-8 group">
                    <img
                      src={foto}
                      alt="Professional seafarer crew on vessel deck - PT Kamandanu Jaya Samudera Indonesian Crewing Agency and Manning Agency Indonesia"
                      className="w-full h-[250px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="800"
                      height="400"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent"></div>

                    <figcaption className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                      <p className="text-xs sm:text-sm font-medium uppercase tracking-widest opacity-80">
                        Trusted Maritime Partner
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold">
                        Professional Crew Manning Solutions
                      </h3>
                    </figcaption>
                  </figure>

                  {/* Trust Indicators Grid - Mobile Optimized */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                      <ShieldCheck
                        className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2"
                        aria-hidden="true"
                      />
                      <span className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                        100%
                      </span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        MLC Compliance
                      </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                      <Users
                        className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2"
                        aria-hidden="true"
                      />
                      <span className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                        Global
                      </span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Network
                      </p>
                    </div>
                  </div>

                  {/* Certifications Badge - Mobile Optimized */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg sm:rounded-xl p-4 sm:p-5 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Award
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-700"
                        aria-hidden="true"
                      />
                      <h4 className="font-bold text-green-900 text-sm sm:text-base">
                        Certified & Verified
                      </h4>
                    </div>
                    <ul className="text-xs sm:text-sm text-green-800 space-y-1">
                      <li>✓ ISO 9001:2015 Certified</li>
                      <li>✓ STCW Convention Compliant</li>
                      <li>✓ MLC 2006 Approved</li>
                      <li>✓ Indonesian Ministry Licensed</li>
                    </ul>
                  </div>

                  {/* CTA Card - Mobile Optimized */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between shadow-lg shadow-blue-200 hover:shadow-xl transition-shadow gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-sm opacity-90">
                        Ready to collaborate?
                      </p>
                      <p className="text-base sm:text-lg font-semibold">
                        Contact Our Manning Experts
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-white text-blue-600 px-5 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 w-full sm:w-auto text-center"
                      aria-label="Contact PT Kamandanu Jaya Samudera for crew manning services"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ================= SERVICES PREVIEW (Additional SEO Content) ================= - Mobile Optimized */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl font-bold text-center text-[#0A2540] mb-8 sm:mb-12"
            >
              Comprehensive Crew Manning Services Indonesia
            </h2>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Service 1 - Mobile Optimized */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors mx-auto">
                  <Ship className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3 text-center sm:text-left">
                  Vessel Crew Supply
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Complete manning solutions for bulk carriers, tankers,
                  container ships, and offshore vessels with STCW-certified
                  officers and ratings.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 justify-center sm:justify-start"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Service 2 - Mobile Optimized */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors mx-auto">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3 text-center sm:text-left">
                  Seafarer Recruitment
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Professional recruitment and screening of qualified maritime
                  personnel from Indonesia's extensive pool of skilled
                  seafarers.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 justify-center sm:justify-start"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Service 3 - Mobile Optimized */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors mx-auto">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3 text-center sm:text-left">
                  Crew Management
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  End-to-end crew management including documentation, medical
                  examinations, travel arrangements, and continuous welfare
                  support.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 justify-center sm:justify-start"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <Link
                to="/services"
                className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
                aria-label="View all crew manning services"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* ================= PROCESS SECTION ================= - Mobile Optimized */}
        <section
          className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2
              id="process-heading"
              className="text-2xl sm:text-3xl font-bold text-center text-[#0A2540] mb-8 sm:mb-12"
            >
              Our Simple & Efficient Process
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Step 1 - Mobile Optimized */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  1
                </div>
                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2 text-center">
                  Submit Requirements
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Provide your crew requirements and vessel specifications
                  through our online form.
                </p>
              </div>

              {/* Step 2 - Mobile Optimized */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  2
                </div>
                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2 text-center">
                  Candidate Selection
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  We screen and select the most qualified seafarers from our
                  extensive database.
                </p>
              </div>

              {/* Step 3 - Mobile Optimized */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  3
                </div>
                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2 text-center">
                  Interview & Approval
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Conduct interviews and final approval of selected candidates
                  by your team.
                </p>
              </div>

              {/* Step 4 - Mobile Optimized */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  4
                </div>
                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Ship className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2 text-center">
                  Deployment
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  Complete documentation processing and deployment of crew to
                  your vessels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION ================= - Mobile Optimized */}
        <section
          className="py-12 sm:py-16 bg-white"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2
              id="testimonials-heading"
              className="text-2xl sm:text-3xl font-bold text-center text-[#0A2540] mb-8 sm:mb-12"
            >
              What Our Clients Say
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-gray-700 italic mb-6 text-center">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4 sm:mb-0 sm:mr-4">
                    {testimonials[activeTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-bold text-[#0A2540]">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeTestimonial].position},{" "}
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= - Mobile Optimized */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join the growing list of satisfied shipping companies who trust PT
              Kamandanu Jaya Samudera for their crew manning needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-block px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
                aria-label="Contact PT Kamandanu Jaya Samudera"
              >
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="inline-block px-6 sm:px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105 text-sm sm:text-base"
                aria-label="View all services"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Additional CSS for animations - Mobile Optimized */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Home;
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
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
              aria-hidden="true"
            >
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
            {/* Main Heading - H1 with Rich Keywords */}
            <h1
              className={`text-5xl lg:text-7xl font-bold text-white ${
                isVisible && "slide-in-left"
              }`}
            >
              PT Kamandanu Jaya Samudera
              <span className="block text-2xl mt-4 text-blue-300 font-normal">
                Professional Crew Manning & Seafarer Recruitment Agency
                Indonesia
              </span>
            </h1>

            {/* Value Proposition - Semantic Paragraph */}
            <p className="mt-6 text-xl text-blue-100 max-w-2xl leading-relaxed">
              <strong>Leading Indonesian crew manning agency</strong>{" "}
              established in 2020, specializing in recruitment, deployment, and
              management of <strong>qualified, certified seafarers</strong> for
              domestic and international shipping companies. ISO-certified
              maritime personnel solutions with proven track record serving{" "}
              <strong>global maritime industry</strong>.
            </p>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/about"
                className="inline-block px-10 py-4 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
                aria-label="Learn more about PT Kamandanu Jaya Samudera services"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold hover:bg-white hover:text-[#0A2540] transition transform hover:scale-105"
                aria-label="Contact PT Kamandanu Jaya Samudera"
              >
                Get a Quote
              </Link>
            </div>

            {/* ================= KEY STATISTICS ================= */}
            <aside
              className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20"
              aria-label="Company statistics"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center transform hover:scale-105 transition-all hover:bg-white/20"
                  >
                    <Icon
                      className="mx-auto mb-3 text-blue-400 w-8 h-8"
                      aria-hidden="true"
                    />

                    <div className="text-3xl font-bold text-white">
                      <AnimatedCounter value={stat.number} id={index} />
                      {stat.suffix}
                    </div>
                    <div className="text-blue-200 text-xs uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </aside>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 20L8 13L9.4 11.6L15 17.2L20.6 11.6L22 13L15 20Z"
                fill="white"
              />
            </svg>
          </div>
        </header>

        {/* ================= QUICK INFO BAR ================= */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm"> ( 021 ) 43938505</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@kamandanujayasamudera.com</span>
            </div>
          </div>
        </section>

        {/* ================= COMPANY PROFILE SECTION ================= */}
        <section
          className="py-24 bg-gray-50 overflow-hidden"
          aria-labelledby="company-profile-heading"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* LEFT SECTION: SEO-Optimized Content */}
              <article className="order-2 lg:order-1">
                <h2
                  id="company-profile-heading"
                  className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-8 tracking-tight"
                >
                  Company Profile: Leading Crew Manning Agency Indonesia
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  {/* Introduction with Rich Keywords */}
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

                  {/* Core Services - H3 for Structure */}
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-3 flex items-center gap-2">
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

                  {/* Industry Expertise */}
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

                  {/* Competitive Advantages */}
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

                  {/* Regulatory Compliance */}
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

                  {/* Technology & Efficiency */}
                  <p>
                    PT Kamandanu Jaya Samudera utilizes advanced{" "}
                    <strong>crew management software</strong> and digital
                    platforms, enabling ship owners and operators to access
                    real-time crew availability, certification status, medical
                    fitness reports, and deployment schedules with complete
                    transparency and efficiency.
                  </p>

                  {/* Service Commitment */}
                  <p>
                    Our commitment extends beyond recruitment. We provide
                    comprehensive <strong>crew welfare support</strong>,
                    continuous professional development, emergency assistance,
                    and career guidance to ensure seafarers perform optimally
                    while maintaining safety and operational excellence.
                  </p>

                  {/* Quality Guarantee */}
                  <p>
                    We guarantee the provision of{" "}
                    <strong>
                      competent, certified, and deployment-ready seafarers
                    </strong>{" "}
                    who demonstrate professionalism, discipline, technical
                    competence, and full preparedness for their assigned duties
                    aboard vessels of all types and sizes.
                  </p>

                  {/* Trust Statement - Featured Quote */}
                  <blockquote className="border-l-4 border-blue-600 bg-blue-50 pl-6 py-4 italic font-medium text-gray-800 rounded-r-lg">
                    <p className="text-xl mb-2">
                      "Trust, integrity, and responsibility define our
                      operations."
                    </p>
                    <p className="text-base not-italic text-gray-700">
                      All <strong>crew manning services</strong> are executed in
                      strict accordance with Indonesian maritime regulations,
                      international conventions, and industry best practices,
                      ensuring reliability, safety, security, and sustainable
                      partnerships with vessel owners worldwide.
                    </p>
                  </blockquote>

                  {/* Industry Keywords Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Keywords:</strong> Crew Manning Agency Jakarta |
                      Seafarer Recruitment Indonesia | Maritime Personnel
                      Services | Ship Crew Supply | Indonesian Manning Agency |
                      Offshore Crew Management | STCW Certified Seafarers | MLC
                      Compliant Crewing
                    </p>
                  </div>
                </div>
              </article>

              {/* RIGHT SECTION: Visual Elements & Trust Signals */}
              <aside className="order-1 lg:order-2 lg:sticky lg:top-32">
                <div className="relative">
                  {/* Decorative Background Animation */}
                  <div
                    className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
                    aria-hidden="true"
                  ></div>

                  {/* Featured Image with Caption */}

                  <figure className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                    <img
                      src={foto}
                      alt="Professional seafarer crew on vessel deck - PT Kamandanu Jaya Samudera Indonesian Crewing Agency and Manning Agency Indonesia"
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="800"
                      height="400"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent"></div>

                    <figcaption className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm font-medium uppercase tracking-widest opacity-80">
                        Trusted Maritime Partner
                      </p>
                      <h3 className="text-xl font-bold">
                        Professional Crew Manning Solutions
                      </h3>
                    </figcaption>
                  </figure>

                  {/* Trust Indicators Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                      <ShieldCheck
                        className="w-8 h-8 text-blue-600 mb-2"
                        aria-hidden="true"
                      />
                      <span className="text-2xl font-bold text-[#0A2540]">
                        100%
                      </span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        MLC Compliance
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                      <Users
                        className="w-8 h-8 text-blue-600 mb-2"
                        aria-hidden="true"
                      />
                      <span className="text-2xl font-bold text-[#0A2540]">
                        Global
                      </span>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Network
                      </p>
                    </div>
                  </div>

                  {/* Certifications Badge */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Award
                        className="w-6 h-6 text-green-700"
                        aria-hidden="true"
                      />
                      <h4 className="font-bold text-green-900">
                        Certified & Verified
                      </h4>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>✓ ISO 9001:2015 Certified</li>
                      <li>✓ STCW Convention Compliant</li>
                      <li>✓ MLC 2006 Approved</li>
                      <li>✓ Indonesian Ministry Licensed</li>
                    </ul>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white flex items-center justify-between shadow-lg shadow-blue-200 hover:shadow-xl transition-shadow">
                    <div>
                      <p className="text-sm opacity-90">
                        Ready to collaborate?
                      </p>
                      <p className="text-lg font-semibold">
                        Contact Our Manning Experts
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-white text-blue-600 px-5 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
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

        {/* ================= SERVICES PREVIEW (Additional SEO Content) ================= */}
        <section className="py-16 bg-white" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              id="services-heading"
              className="text-3xl font-bold text-center text-[#0A2540] mb-12"
            >
              Comprehensive Crew Manning Services Indonesia
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Ship className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  Vessel Crew Supply
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete manning solutions for bulk carriers, tankers,
                  container ships, and offshore vessels with STCW-certified
                  officers and ratings.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  Seafarer Recruitment
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional recruitment and screening of qualified maritime
                  personnel from Indonesia's extensive pool of skilled
                  seafarers.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  Crew Management
                </h3>
                <p className="text-gray-600 mb-4">
                  End-to-end crew management including documentation, medical
                  examinations, travel arrangements, and continuous welfare
                  support.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
                aria-label="View all crew manning services"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* ================= PROCESS SECTION ================= */}
        <section
          className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              id="process-heading"
              className="text-3xl font-bold text-center text-[#0A2540] mb-12"
            >
              Our Simple & Efficient Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Submit Requirements
                </h3>
                <p className="text-gray-600 text-sm">
                  Provide your crew requirements and vessel specifications
                  through our online form.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Candidate Selection
                </h3>
                <p className="text-gray-600 text-sm">
                  We screen and select the most qualified seafarers from our
                  extensive database.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Interview & Approval
                </h3>
                <p className="text-gray-600 text-sm">
                  Conduct interviews and final approval of selected candidates
                  by your team.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Ship className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  Deployment
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete documentation processing and deployment of crew to
                  your vessels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <section
          className="py-16 bg-white"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold text-center text-[#0A2540] mb-12"
            >
              What Our Clients Say
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonials[activeTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
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

        {/* ================= CTA SECTION ================= */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the growing list of satisfied shipping companies who trust PT
              Kamandanu Jaya Samudera for their crew manning needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
                aria-label="Contact PT Kamandanu Jaya Samudera"
              >
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
                aria-label="View all services"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Additional CSS for animations */}
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

import React, { useState, useEffect, useRef } from "react";
import logo from "./img/logo.png";
import "./App.css";
import serti from "./img/serti.png";
import onboard1 from "./img/onboard1.png";
import onboard2 from "./img/onboard2.png";
import onboard3 from "./img/onboard3.png";
import onboard4 from "./img/onboard4.png";
import onboard5 from "./img/onboard5.png";
import onboard6 from "./img/onboard6.png";

import {
  Ship,
  Anchor,
  Users,
  FileCheck,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  TrendingUp,
  Building,
  Briefcase,
  GraduationCap,
  Shield,
  Camera,
  Car,
  Coffee,
  Monitor,
  Navigation,
  Compass,
} from "lucide-react";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [countedStats, setCountedStats] = useState({});
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedFacility, setSelectedFacility] = useState(null);

  const sectionRefs = useRef({});

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "services",
        "fleet",
        "team",
        "facilities",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      sections.forEach((section) => {
        const element = sectionRefs.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75;
          if (isVisible && !visibleSections[section]) {
            setVisibleSections((prev) => ({ ...prev, [section]: true }));
            if (section === "home" || section === "about") {
              animateStats();
            }
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();


    return () => {
      window.removeEventListener("scroll", handleScroll);
    
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [visibleSections]);

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



  const navigation = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Team", href: "#team", id: "team" },
    { name: "Facilities", href: "#facilities", id: "facilities" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const services = [
    {
      icon: Ship,
      title: "Ship Management Services",
      description:
        "Comprehensive vessel management including technical operations, maintenance planning, regulatory compliance, and crew management. We ensure your vessels operate at peak efficiency with full adherence to international maritime standards including ISM Code and SOLAS requirements.",
      features: [
        "Technical Management",
        "Crew Management",
        "Safety & Compliance",
        "Maintenance Planning",
      ],
      keywords: "ship management Indonesia, vessel management services",
    },
    {
      icon: Users,
      title: "Crew Manning Solutions",
      description:
        "Professional seafarer recruitment, training, and deployment services. Our extensive network provides qualified, STCW-certified crew members for all vessel types. We handle complete crew management from recruitment to repatriation with 24/7 support.",
      features: [
        "STCW Certified Crew",
        "Global Deployment",
        "Training Programs",
        "24/7 Crew Support",
      ],
      keywords: "crew manning agency, seafarer recruitment Indonesia",
    },
    {
      icon: FileCheck,
      title: "Maritime Documentation",
      description:
        "Complete documentation processing for seafarers and vessels including certifications, licenses, visa processing, and regulatory compliance. We streamline all paperwork to ensure smooth operations and full legal compliance for international voyages.",
      features: [
        "Certificate Processing",
        "Visa Services",
        "License Renewal",
        "Flag State Compliance",
      ],
      keywords: "seafarer documentation, maritime certificates",
    },
    {
      icon: Anchor,
      title: "Vessel Operations",
      description:
        "Full operational support for commercial vessels including voyage planning, port operations, bunker procurement, and logistics coordination. Our experienced team ensures efficient, cost-effective vessel operations across global trade routes.",
      features: [
        "Voyage Planning",
        "Port Operations",
        "Bunker Management",
        "Logistics Support",
      ],
      keywords: "vessel operations, maritime logistics Indonesia",
    },
  ];



  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "50+", label: "Vessels Managed", icon: Ship },
    { number: "500+", label: "Certified Seafarers", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  const onboardCrew = [
    {
      name: "Captain Ahmad Wijaya",
      position: "AB",
      vessel: "MV Kamandanu 1",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard1,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "20",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard2,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "AB",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard3,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "30",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "SINGAPORE",
      avatar: onboard4,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "DECK CADET",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard5,
    },
    {
      name: "Chief Officer Budi Santoso",
      position: "AB & OILER",
      vessel: "MV Kamandanu 2",
      status: "Onboard",
      nextPort: "CHINA",
      avatar: onboard6,
    },
  ];

  const teamMembers = [
    {
      name: "Capt. Hendra Kusuma",
      position: "Managing Director",
      department: "Management",
      experience: "20+ years",
      expertise: "Ship Management, Maritime Operations",
      avatar: "/api/placeholder/200/200",
      linkedin: "#",
      email: "hendra@kamandanujayasamudera.com",
    },
    {
      name: "Ir. Siti Nurhaliza",
      position: "Technical Director",
      department: "Technical",
      experience: "18+ years",
      expertise: "Vessel Maintenance, Naval Architecture",
      avatar: "/api/placeholder/200/200",
      linkedin: "#",
      email: "siti@kamandanujayasamudera.com",
    },
    {
      name: "Ahmad Fauzi",
      position: "Crew Manager",
      department: "Human Resources",
      experience: "15+ years",
      expertise: "Crew Recruitment, Training",
      avatar: "/api/placeholder/200/200",
      linkedin: "#",
      email: "ahmad@kamandanujayasamudera.com",
    },
    {
      name: "Maya Putri",
      position: "Operations Manager",
      department: "Operations",
      experience: "12+ years",
      expertise: "Vessel Operations, Logistics",
      avatar: "/api/placeholder/200/200",
      linkedin: "#",
      email: "maya@kamandanujayasamudera.com",
    },
    {
      name: "Capt. Budi Hartono",
      position: "Marine Superintendent",
      department: "Technical",
      experience: "25+ years",
      expertise: "Marine Safety, Inspections",
      avatar: "/api/placeholder/200/200",
      linkedin: "#",
      email: "budi@kamandanujayasamudera.com",
    },
    {
      name: "Diana Susanti",
      position: "Documentation Manager",
      department: "Administration",
      experience: "10+ years",
      expertise: "Maritime Documentation, Compliance",
      avatar: "/api/placeholder/200/200",
      linkedin: "#",
      email: "diana@kamandanujayasamudera.com",
    },
  ];

  const officeFacilities = [
    {
      name: "Operations Control Center",
      description:
        "24/7 monitoring and control center equipped with advanced tracking systems",
      icon: Monitor,
      image: "/api/placeholder/400/300",
      features: [
        "Real-time Vessel Tracking",
        "Weather Monitoring",
        "Communication Systems",
        "Emergency Response",
      ],
    },
    {
      name: "Training Facility",
      description:
        "State-of-the-art training center for seafarer certification and skill development",
      icon: GraduationCap,
      image: "/api/placeholder/400/300",
      features: [
        "Simulator Room",
        "Classroom Training",
        "Safety Drills",
        "STCW Certification",
      ],
    },
    {
      name: "Crew Lounge",
      description:
        "Comfortable lounge area for crew rest and recreation during office visits",
      icon: Coffee,
      image: "/api/placeholder/400/300",
      features: [
        "Refreshment Area",
        "Entertainment System",
        "WiFi Access",
        "Rest Rooms",
      ],
    },
    {
      name: "Medical Center",
      description:
        "Fully-equipped medical facility for crew health check-ups and emergency care",
      icon: Shield,
      image: "/api/placeholder/400/300",
      features: [
        "Medical Check-ups",
        "First Aid",
        "Health Records",
        "Emergency Care",
      ],
    },
    {
      name: "Conference Rooms",
      description:
        "Modern meeting spaces equipped with video conferencing capabilities",
      icon: Users,
      image: "/api/placeholder/400/300",
      features: [
        "Video Conference",
        "Presentation Systems",
        "Capacity 50 people",
        "Catering Service",
      ],
    },
    {
      name: "Transportation",
      description: "Company transportation for crew and staff mobility",
      icon: Car,
      image: "/api/placeholder/400/300",
      features: [
        "Airport Transfer",
        "Port Shuttle",
        "City Transport",
        "24/7 Availability",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      issuer: "BSI Group",
      validUntil: "2026-01-14",
      category: "Quality Management",
      image: serti,
      description:
        "International standard for quality management systems ensuring consistent quality in ship management services",
    },
  ];


  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "ISO Certified Operations",
      description:
        "Full compliance with international quality, safety, and environmental standards",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Extensive reach across Southeast Asia, Middle East, and international waters",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Highly experienced maritime professionals and certified seafarers",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Over 15 years of excellence in ship management and maritime services",
    },
  ];

  // Update document title and meta tags for SEO
  useEffect(() => {
    document.title = "PT Kamandanu Jaya Samudera - Professional Ship Management & Maritime Services in Indonesia";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "PT Kamandanu Jaya Samudera is a leading ship management and maritime services company in Indonesia, providing comprehensive shipping solutions including vessel management, crew manning, and maritime documentation.";
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "ship management Indonesia, maritime services, crew manning, vessel operations, seafarer documentation, shipping company Indonesia";
    
    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = window.location.href;
    
    // Update or create Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = "PT Kamandanu Jaya Samudera - Professional Ship Management & Maritime Services";
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.property = 'og:description';
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = "Leading ship management and maritime services company in Indonesia providing comprehensive shipping solutions.";
    
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.property = 'og:image';
      document.head.appendChild(ogImage);
    }
    ogImage.content = window.location.origin + "/img/logo.png";
    
    // Update or create Twitter Card meta tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.name = 'twitter:card';
      document.head.appendChild(twitterCard);
    }
    twitterCard.content = "summary_large_image";
    
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.name = 'twitter:title';
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.content = "PT Kamandanu Jaya Samudera - Professional Ship Management & Maritime Services";
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.name = 'twitter:description';
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.content = "Leading ship management and maritime services company in Indonesia providing comprehensive shipping solutions.";
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.name = 'twitter:image';
      document.head.appendChild(twitterImage);
    }
    twitterImage.content = window.location.origin + "/img/logo.png";
  }, []);

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes wave {
            0% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(20px) translateY(-10px); }
            50% { transform: translateX(0) translateY(-20px); }
            75% { transform: translateX(-20px) translateY(-10px); }
            100% { transform: translateX(0) translateY(0); }
          }
          @keyframes pulse-slow {
            0% { opacity: 0.1; }
            50% { opacity: 0.3; }
            100% { opacity: 0.1; }
          }
          @keyframes slide-in-left {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-right {
            from { transform: translateX(100px); opacity: 0; }
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
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
          .wave-animation {
            animation: wave 8s ease-in-out infinite;
          }
          .pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }
          .slide-in-right {
            animation: slide-in-right 0.8s ease-out forwards;
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
          .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .loading-dots span {
            animation: blink 1.4s infinite both;
          }
          .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
          }
          .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes blink {
            0%, 60%, 100% { opacity: 0.2; }
            20% { opacity: 1; }
          }
        `}
      </style>

      {/* SEO Schema JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT Kamandanu Jaya Samudera",
          alternateName: "Kamandanu Shipping",
          description:
            "Professional ship management and maritime services company in Indonesia providing crew manning, vessel operations, seafarer documentation, and shipping solutions for commercial vessels worldwide",
          url: "https://kamandanujayasamudera.com",
          logo: "https://kamandanujayasamudera.com/logo.png",
          image: "https://kamandanujayasamudera.com/og-image.jpg",
          telephone: "+62-813-1192-2417",
          email: "info@kamandanujayasamudera.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-813-1192-2417",
            contactType: "Customer Service",
            areaServed: ["ID", "SG", "MY", "TH", "PH"],
            availableLanguage: ["English", "Indonesian"],
          },
          sameAs: ["https://www.linkedin.com/company/kamandanu-jaya-samudera"],
          knowsAbout: [
            "Ship Management",
            "Crew Manning",
            "Maritime Services",
            "Vessel Operations",
            "Seafarer Documentation",
          ],
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "-6.2088",
              longitude: "106.8456",
            },
          },
        })}
      </script>

      {/* Enhanced Navigation Bar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A2540] shadow-xl py-2"
            : "bg-gradient-to-r from-[#0A2540] to-blue-900 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="Logo PT Kamandanu Jaya Samudera"
                className="
    h-10 w-auto
    transition-transform duration-300
    group-hover:scale-110
  "
              />

              <div>
                <h1 className="text-white font-bold text-lg md:text-xl leading-tight">
                  PT KAMANDANU JAYA SAMUDERA
                </h1>
                <p className="text-blue-200 text-xs hidden sm:block">
                  Professional Ship Management Company
                </p>
              </div>
            </a>
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative text-sm ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-blue-100 hover:bg-blue-800 hover:text-white"
                  }`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-100 transition-transform origin-center"></span>
                  )}
                </a>
              ))}
            
            </div>
            <button
              className="lg:hidden text-white p-2 hover:bg-blue-800 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}
          >
            <div className="pb-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-blue-100 hover:bg-blue-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold text-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

   {/* Hero Section */}
{/* Hero Section */}
<section
  id="home"
  ref={(el) => (sectionRefs.current["home"] = el)}
  className="relative min-h-screen flex flex-col justify-center bg-[#0A2540] overflow-hidden" 
  aria-labelledby="hero-heading"
>
  {/* Video Background - Full Width dari Kanan ke Kiri */}
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
    {/* Overlay Biru Gradasi Gelap (Gaya Figma) agar teks putih terbaca jelas */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/40 to-transparent z-10" />
  </div>

  {/* Content Container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-32 pb-12">
    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl">
      <h1
        id="hero-heading"
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight ${visibleSections["home"] ? "slide-in-left" : "opacity-0"}`}
      >
        PT Kamandanu Jaya Samudera
        <span className="block text-xl sm:text-2xl md:text-4xl mt-4 text-blue-300 font-normal tracking-wide">
          CREWING AGENCY & SHIP MANAGEMENT
        </span>
      </h1>

      <p className={`text-base md:text-xl text-blue-100 mb-10 max-w-2xl font-light leading-relaxed ${visibleSections["home"] ? "slide-in-left" : "opacity-0"} stagger-1`}>
        The easiest way to get hired. Provide the best crew members who embrace where safety isn't just a priority, but a core value.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#about"
          className={`inline-flex items-center justify-center px-12 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all font-bold shadow-lg transform hover:scale-105 ${visibleSections["home"] ? "scale-in" : "opacity-0"} stagger-2`}
        >
          Get Started
        </a>
      </div>
    </div>

    {/* Stats Grid diletakkan di bawah content, tetap menggunakan backdrop blur agar elegan di atas video */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transition-all duration-500 hover:bg-white/20 ${visibleSections["home"] ? "slide-in-bottom" : "opacity-0"} stagger-${index + 1}`}
          >
            <Icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              {countedStats[`value_${index}`] !== undefined
                ? stat.number.includes("%") ? `${countedStats[`value_${index}`]}%` : `${countedStats[`value_${index}`]}+`
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
      {/* About Section */}
      <section
        id="about"
        ref={(el) => (sectionRefs.current["about"] = el)}
        className={`py-20 bg-gray-50 ${visibleSections["about"] ? "animate-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${visibleSections["about"] ? "slide-in-bottom" : "opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              About PT Kamandanu Jaya Samudera - Leading Shipping Company in
              Indonesia
            </h2>
            <div
              className="w-24 h-1 bg-blue-500 mx-auto mb-4 transform origin-left transition-transform duration-1000 scale-x-0"
              style={visibleSections["about"] ? { transform: "scaleX(1)" } : {}}
            ></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in maritime excellence since 2008
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div
              className={`${visibleSections["about"] ? "slide-in-left" : "opacity-0"}`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6">
                Premier Ship Management and Maritime Services Provider
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                PT Kamandanu Jaya Samudera is a leading ship management and
                maritime services company based in Jakarta, Indonesia. With over
                15 years of industry expertise, we provide comprehensive
                shipping solutions to vessel owners, operators, and charterers
                across Southeast Asia and international waters.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Our services encompass complete vessel management, professional
                crew manning with STCW-certified seafarers, maritime
                documentation processing, and full operational support for
                commercial vessels including cargo ships, tankers, bulk
                carriers, and container vessels.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We are committed to delivering excellence through ISO-certified
                operations, adherence to international maritime regulations
                including ISM Code and SOLAS, and our dedication to safety,
                environmental protection, and operational efficiency.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {whyChooseUs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 ${visibleSections["about"] ? "scale-in" : "opacity-0"} stagger-${idx + 1}`}
                    >
                      <Icon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0A2540] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`space-y-6 ${visibleSections["about"] ? "slide-in-right" : "opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-500 hover:scale-105">
                <h4 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-blue-500" />
                  Our Vision
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as the most trusted and innovative ship
                  management company in Indonesia and Southeast Asia, setting
                  industry standards for maritime excellence, safety, and
                  sustainable shipping practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-500 hover:scale-105">
                <h4 className="text-2xl font-bold text-[#0A2540] mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-blue-500" />
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Delivering world-class maritime services through professional
                  vessel management, highly trained and certified crew,
                  unwavering commitment to safety and environmental stewardship,
                  and operational excellence that exceeds client expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={(el) => (sectionRefs.current["services"] = el)}
        className={`py-20 bg-white ${visibleSections["services"] ? "animate-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${visibleSections["services"] ? "slide-in-bottom" : "opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Maritime Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive shipping solutions for vessel owners, operators, and
              charterers
            </p>
            <div
              className="w-24 h-1 bg-blue-500 mx-auto mt-4 transform origin-left transition-transform duration-1000 scale-x-0"
              style={
                visibleSections["services"] ? { transform: "scaleX(1)" } : {}
              }
            ></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 ${visibleSections["services"] ? "scale-in" : "opacity-0"} stagger-${index + 1}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-4 rounded-lg flex-shrink-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Onboard Crew Section */}
      <section
        id="team"
        ref={(el) => (sectionRefs.current["team"] = el)}
        className={`py-20 bg-white ${visibleSections["team"] ? "animate-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${visibleSections["team"] ? "slide-in-bottom" : "opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Professional Team & Onboard Crew
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced maritime professionals and certified
              seafarers serving our fleet
            </p>
            <div
              className="w-24 h-1 bg-blue-500 mx-auto mt-4 transform origin-left transition-transform duration-1000 scale-x-0"
              style={visibleSections["team"] ? { transform: "scaleX(1)" } : {}}
            ></div>
          </div>
          {/* Onboard Crew */}
         <div className="mb-16">
  <h3 className="text-2xl font-bold text-[#0A2540] mb-8 flex items-center">
    <Navigation className="h-8 w-8 mr-3 text-blue-500" />
    Currently Onboard Crew
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {onboardCrew.map((crew, index) => (
      <div
  key={index}
  className={`bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden ${
    visibleSections["team"] ? "scale-in" : "opacity-0"
  } stagger-${index + 1}`}
>
  {/* IMAGE */}
  <div className="relative">
    <div className="w-full aspect-square overflow-hidden">
      <img
  src={crew.avatar}
  alt={`${crew.name} - ${crew.position} onboard at PT Kamandanu Jaya Samudera`}
  className="w-full h-full object-cover"
/>
    </div>

    <div className="absolute top-3 right-3">
      <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center shadow">
        <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
        {crew.status}
      </span>
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-4">
    <h4 className="font-bold text-lg text-[#0A2540] mb-1">
      {crew.name}
    </h4>

    <p className="text-blue-600 font-semibold text-sm mb-2">
      {crew.position}
    </p>

    <div className="space-y-1 text-sm text-gray-600">
      <p className="flex items-center">
        <Ship className="h-3 w-3 mr-2 text-gray-400" />
        {crew.vessel}
      </p>
      <p className="flex items-center">
        <Compass className="h-3 w-3 mr-2 text-gray-400" />
        Next: {crew.nextPort}
      </p>
    </div>
  </div>
</div>

    ))}
  </div>
</div>

          {/* Office Team */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-8 flex items-center">
              <Building className="h-8 w-8 mr-3 text-blue-500" />
              Office Team & Management
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 p-6 ${visibleSections["team"] ? "scale-in" : "opacity-0"} stagger-${index + 1}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-[#0A2540] mb-1">
                        {member.name}
                      </h4>
                      <p className="text-blue-600 font-semibold text-sm mb-1">
                        {member.position}
                      </p>
                      <p className="text-gray-500 text-xs mb-2">
                        {member.department}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {member.expertise}
                      </p>
                      <div className="flex items-center space-x-3 text-xs">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-500 hover:text-blue-700 flex items-center"
                        >
                          <Mail className="h-3 w-3 mr-1" />
                          Email
                        </a>
                        <a
                          href={member.linkedin}
                          className="text-blue-500 hover:text-blue-700 flex items-center"
                        >
                          <Globe className="h-3 w-3 mr-1" />
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Experience:</span>{" "}
                      {member.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Facilities Section */}
      <section
        id="facilities"
        ref={(el) => (sectionRefs.current["facilities"] = el)}
        className={`py-20 bg-gray-50 ${visibleSections["facilities"] ? "animate-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${visibleSections["facilities"] ? "slide-in-bottom" : "opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Office Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed to support our maritime
              operations and crew welfare
            </p>
            <div
              className="w-24 h-1 bg-blue-500 mx-auto mt-4 transform origin-left transition-transform duration-1000 scale-x-0"
              style={
                visibleSections["facilities"] ? { transform: "scaleX(1)" } : {}
              }
            ></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer ${visibleSections["facilities"] ? "scale-in" : "opacity-0"} stagger-${index + 1}`}
                  onClick={() => setSelectedFacility(facility)}
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-24 w-24 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Camera className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      {facility.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 text-blue-500 hover:text-blue-700 font-semibold text-sm flex items-center group">
                      View Details{" "}
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        ref={(el) => (sectionRefs.current["certifications"] = el)}
        className={`py-20 bg-white ${
          visibleSections["certifications"] ? "animate-in" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div
            className={`text-center mb-16 ${
              visibleSections["certifications"]
                ? "slide-in-bottom"
                : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internationally recognized certifications demonstrating our
              commitment to excellence
            </p>
            <div
              className="w-24 h-1 bg-blue-500 mx-auto mt-4 transform origin-left transition-transform duration-1000 scale-x-0"
              style={
                visibleSections["certifications"]
                  ? { transform: "scaleX(1)" }
                  : {}
              }
            ></div>
          </div>

          {/* CERTIFICATE GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCertificate(cert)}
                className={`bg-white border-2 border-gray-200 rounded-xl shadow-lg
          hover:shadow-2xl transition-all duration-500 hover:scale-105
          overflow-hidden group cursor-pointer
          ${
            visibleSections["certifications"] ? "scale-in" : "opacity-0"
          } stagger-${index + 1}`}
              >
                {/* IMAGE */}
                <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                 <img
                  src={cert.image}
                  alt={`Maritime Certificate ${cert.name} - PT Kamandanu Jaya Samudera`}
                  className="h-full w-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-110"
                />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-[#0A2540]">
                      {cert.name}
                    </h3>
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      {cert.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {cert.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Issuer:</span>
                      <span className="font-semibold text-gray-700">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Valid Until:</span>
                      <span className="font-semibold text-gray-700">
                        {cert.validUntil}
                      </span>
                    </div>
                  </div>

                  <button className="mt-5 w-full text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500 py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                    <Camera className="h-4 w-4 mr-2" />
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    <section
  id="contact"
  ref={(el) => (sectionRefs.current["contact"] = el)}
  className={`py-12 md:py-20 bg-gradient-to-br from-[#0A2540] via-blue-900 to-[#0A2540] relative overflow-hidden ${
    visibleSections["contact"] ? "animate-in" : ""
  }`}
>
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div
      className="absolute inset-0 pulse-slow"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundSize: "30px 30px",
      }}
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <div
      className={`text-center mb-10 md:mb-16 ${
        visibleSections["contact"] ? "slide-in-bottom" : "opacity-0"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 px-4">
        Contact PT Kamandanu Jaya Samudera
      </h2>
      <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
        Visit our office location and get in touch for maritime services
      </p>
      <div
        className="w-20 md:w-24 h-1 bg-blue-400 mx-auto mt-3 md:mt-4 transform origin-left transition-transform duration-1000 scale-x-0"
        style={
          visibleSections["contact"] ? { transform: "scaleX(1)" } : {}
        }
      />
    </div>

    <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
      {/* GOOGLE MAPS */}
      <div
        className={`bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
          visibleSections["contact"] ? "slide-in-left" : "opacity-0"
        }`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
          Office Location
        </h3>

        <div className="rounded-lg md:rounded-xl overflow-hidden border border-white/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3967.087314341997!2d106.87599327498948!3d-6.118948593867709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMDguMiJTIDEwNsKwNTInNDIuOSJF!5e0!3m2!1sen!2sid!4v1768891106036!5m2!1sen!2sid"
            width="100%"
            height="300"
            className="md:h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="PT Kamandanu Jaya Samudera Office Location"
          />
        </div>
      </div>

      {/* CONTACT INFO */}
      <div
        className={`space-y-4 md:space-y-6 ${
          visibleSections["contact"] ? "slide-in-right" : "opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-md p-5 md:p-8 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
            Contact Information
          </h3>

          <div className="space-y-5 md:space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-3 md:space-x-4 group">
              <div className="bg-blue-500 p-2.5 md:p-3 rounded-lg group-hover:bg-blue-400 transition-colors flex-shrink-0">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  Head Office
                </h4>
                <p className="text-blue-100 text-sm md:text-base">Jakarta, Indonesia</p>
                <p className="text-blue-100 text-sm md:text-base">
                  Maritime Business District
                </p>
                <p className="text-blue-100 text-xs md:text-sm mt-1">
                  Serving Indonesia & International Waters
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 md:space-x-4 group">
              <div className="bg-blue-500 p-2.5 md:p-3 rounded-lg group-hover:bg-blue-400 transition-colors flex-shrink-0">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  Phone & WhatsApp
                </h4>
                <a 
                  href="tel:+6281311922417"
                  className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block"
                >
                  Office: +62 813 1192 2417
                </a>
                <a 
                  href="https://wa.me/6281311922417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block"
                >
                  WhatsApp: +62 813 1192 2417
                </a>
                <p className="text-blue-100 text-xs md:text-sm mt-1">
                  24/7 Emergency Hotline Available
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 md:space-x-4 group">
              <div className="bg-blue-500 p-2.5 md:p-3 rounded-lg group-hover:bg-blue-400 transition-colors flex-shrink-0">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  Email
                </h4>
                <a 
                  href="mailto:info@kamandanujayasamudera.com"
                  className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block break-all"
                >
                  info@kamandanujayasamudera.com
                </a>
                <a 
                  href="mailto:operations@kamandanujayasamudera.com"
                  className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block break-all"
                >
                  operations@kamandanujayasamudera.com
                </a>
                <a 
                  href="mailto:crew@kamandanujayasamudera.com"
                  className="text-blue-100 text-sm md:text-base hover:text-blue-200 transition-colors block break-all"
                >
                  crew@kamandanujayasamudera.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons - Mobile Optimized */}
          <div className="grid grid-cols-2 gap-3 mt-6 md:mt-8">
            <a
              href="https://wa.me/6281311922417"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm md:text-base font-semibold"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <a
              href="mailto:info@kamandanujayasamudera.com"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm md:text-base font-semibold"
            >
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-[#0A2540] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Ship className="h-10 w-10 text-blue-400 hover:text-blue-300 transition-colors" />
                <div className="ml-3">
                  <h3 className="font-bold text-xl">
                    PT KAMANDANU JAYA SAMUDERA
                  </h3>
                  <p className="text-blue-300 text-sm">
                    Ship Management Company
                  </p>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                Professional ship management and maritime services company based
                in Indonesia. We provide comprehensive shipping solutions
                including vessel operations, crew manning, seafarer
                documentation, and technical management for commercial vessels
                across Southeast Asia and international waters.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-white transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#facilities"
                    className="hover:text-white transition-colors"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="#certifications"
                    className="hover:text-white transition-colors"
                  >
                    Certifications
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6281311922417"
                    className="hover:text-white transition-colors"
                  >
                    +62 813-1192-2417
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@kamandanujayasamudera.com"
                    className="hover:text-white transition-colors"
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-200 text-sm">
              &copy; 2026 PT Kamandanu Jaya Samudera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                    {selectedCertificate.name}
                  </h3>
                  <p className="text-gray-600">
                    {selectedCertificate.category} Certificate
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close certificate modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="h-96 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
               <img
                src={selectedCertificate.image}
                alt={`Official Document ${selectedCertificate.name} of PT Kamandanu Jaya Samudera`}
                className="max-h-full max-w-full object-contain"
              />
              </div>

              <p className="text-gray-700 mb-4">
                {selectedCertificate.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Issuer:</span>{" "}
                  {selectedCertificate.issuer}
                </div>
                <div>
                  <span className="font-semibold">Issue Date:</span>{" "}
                  {selectedCertificate.date}
                </div>
                <div>
                  <span className="font-semibold">Valid Until:</span>{" "}
                  {selectedCertificate.validUntil}
                </div>
                <div>
                  <span className="font-semibold">Category:</span>{" "}
                  {selectedCertificate.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Facility Modal */}
      {selectedFacility && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                    {selectedFacility.name}
                  </h3>
                  <p className="text-gray-600">Office Facility</p>
                </div>
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close facility modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="h-96 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <Building className="h-32 w-32 text-gray-400" />
              </div>
              <p className="text-gray-700 mb-4">
                {selectedFacility.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg mb-2">Features:</h4>
                {selectedFacility.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/6281311922417?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20ship%20management%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 animate-pulse hover:animate-none"
        aria-label="Contact via WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 bg-blue-500 text-white p-3 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 z-50 ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        aria-label="Scroll to top"
      >
        <ChevronRight className="h-5 w-5 transform -rotate-90" />
      </button>
    </div>
  );
};

export default App;
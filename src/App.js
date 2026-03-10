import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4"; // Import GA4
import { Helmet } from "react-helmet-async"; // <-- Tambahkan ini
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home.tsx";
import Licenses from "./pages/Licenses.tsx";
import Gallery from "./pages/Gallery.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Team from "./pages/Team.tsx";
import Contact from "./pages/Contact.tsx";
import Client from "./pages/Client.tsx"; // atau Clients.jsx kalau nama filenya beda
import "./App.css";

// Inisialisasi GA4 dengan ID kamu
ReactGA.initialize("G-VCQTGVHG5J");

// Komponen pembantu untuk melacak perpindahan halaman
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);

  return null;
};

const App = () => {
  // Data Organization JSON-LD (global untuk semua halaman)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Kamandanu Jaya Samudera",
    url: "https://www.ptkamandanujayasamudera.com",
    logo: "https://www.ptkamandanujayasamudera.com/logo.png", // pastikan logo ada di public atau assets
    description: "Trusted Indonesian crew manning agency providing STCW-certified seafarers, maritime logistics, and comprehensive crew management solutions worldwide.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Warakas 3 No.23, RT.010 RW.004, Lantai 2",
      addressLocality: "Tanjung Priok, Jakarta Utara",
      postalCode: "14330",
      addressCountry: "ID"
    },
    telephone: "+62-21-43938505",
    email: "info@kamandanujayasamudera.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-813-1192-2417",
      contactType: "customer service",
      areaServed: "Global",
      availableLanguage: ["Indonesian", "English"]
    },
    sameAs: [
      "https://www.linkedin.com/company/pt-kamandanu-jaya-samudera",
      "https://www.instagram.com/kamandanujayasamudera_"
      // tambah link lain kalau ada: Facebook, YouTube, dll
    ]
  };

  return (
    <>
      {/* JSON-LD Organization global di sini - muncul di SEMUA halaman */}
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Helmet>

      <Router>
        <AnalyticsTracker />
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/client" element={<Client />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </Router>
    </>
  );
};

export default App;
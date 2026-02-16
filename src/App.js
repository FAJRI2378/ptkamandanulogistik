import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4"; // Import GA4
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Licenses from "./pages/Licenses";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Client from "./pages/Client";
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
  return (
    <Router>
      <AnalyticsTracker /> {/* Pelacak ditaruh di dalam Router */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/client" element={<Client/>} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
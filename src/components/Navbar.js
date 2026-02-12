import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import logo from "../img/logo.png";
import iso from "../img/iso.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Clients", path: "/client" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  // Ganti link-lama.com dengan URL website sebelumnya Anda
  const oldWebsiteUrl = "https://kamandanujayasamudera.com";

  return (
    <nav className="fixed w-full z-50 transition-all duration-500">
      {/* SLIM BLUE ANNOUNCEMENT BAR */}
      <div className={`bg-blue-600 transition-all duration-500 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-1.5">
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs">
            <div className="flex items-center text-blue-50 font-medium">
              <span className="bg-blue-400/30 px-2 py-0.5 rounded-full mr-2 text-[9px] uppercase font-bold tracking-wider border border-blue-300/30">New Migration</span>
              Migrasi resmi dari <a href={oldWebsiteUrl} className="mx-1 underline decoration-blue-300 hover:text-white transition-colors">{oldWebsiteUrl.replace('https://', '')}</a>
            </div>
            <div className="hidden md:block h-3 w-[1px] bg-blue-400/50"></div>
            <p className="hidden sm:block text-white/90">
              Domain Baru: <span className="font-bold">ptkamandanujayasamudera.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR - BRIGHT BLUE THEME */}
      <div className={`transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-lg py-2" 
          : "bg-blue-50/95 backdrop-blur-md py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
           {/* Logo Section */}
<Link to="/" className="flex items-center space-x-3 group">
  {/* Wadah Logo (Kiri) */}
  <div className="flex items-center gap-2 sm:gap-3">
    {/* Logo Utama */}
    <div className="relative">
      <img
        src={logo}
        alt="Logo Utama"
        className="h-9 sm:h-10 w-auto transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Logo Kedua (Samping Logo Utama) */}
    <div className="relative">
      <img
        src={iso} // Silakan ganti dengan variabel logo kedua Anda
        alt="Logo Sekunder"
        className="h-8 sm:h-9 w-auto opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
      />
    </div>
  </div>

  {/* Teks Nama Perusahaan (Kanan) */}
  <div className={`flex flex-col border-l pl-3 transition-colors duration-500 ${
    scrolled ? "border-blue-200" : "border-blue-300/50"
  }`}>
    <h1 className={`font-extrabold text-[11px] sm:text-sm md:text-lg leading-tight tracking-tight transition-colors duration-500 ${
      scrolled ? "text-blue-900" : "text-blue-950"
    }`}>
      PT KAMANDANU JAYA <span className="text-blue-600">SAMUDERA</span>
    </h1>
    <div className="flex items-center gap-1.5">
      <span className="text-blue-500/80 font-bold text-[7px] sm:text-[8px] uppercase tracking-widest">
        Official Website 2026
      </span>
    </div>
  </div>
</Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    isActive(item.path)
                      ? "text-white bg-blue-600 shadow-md shadow-blue-200"
                      : scrolled 
                        ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                        : "text-blue-900/70 hover:text-blue-600 hover:bg-white/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all ${
                scrolled ? "text-blue-900 hover:bg-blue-50" : "text-blue-900 hover:bg-white/50"
              }`}
            >
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 space-y-1 border-t border-blue-100 pt-3">
              {/* Migration Info Box */}
              <div className="mx-1 mb-3 p-3 bg-blue-600 rounded-xl text-white shadow-inner">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="h-3.5 w-3.5 text-blue-200" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-100">Pembaruan Sistem</span>
                </div>
                <p className="text-[10px] leading-relaxed opacity-90">
                  Layanan kami telah berpindah sepenuhnya ke domain baru ini dari <span className="font-bold underline">{oldWebsiteUrl.replace('https://', '')}</span>.
                </p>
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive(item.path)
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "text-blue-900/70 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
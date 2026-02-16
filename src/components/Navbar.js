import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, ChevronRight, Menu, X } from "lucide-react";
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
  { name: "Licenses", path: "/licenses" },
  { name: "Services", path: "/services" },
  { name: "Team", path: "/team" },
  { name: "Partners & Clients", path: "/client" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];


  const isActive = (path) => location.pathname === path;
  const oldWebsiteUrl = "https://kamandanujayasamudera.com";

  return (
    <header>
      <nav 
        className="fixed w-full z-50 transition-all duration-500 ease-in-out"
        aria-label="Main Navigation"
      >
        {/* COMPACT ANNOUNCEMENT BAR */}
        <div 
          className={`bg-blue-700 transition-all duration-500 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-20 sm:max-h-12 opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4 text-[9px] sm:text-[10px] md:text-xs">
              <div className="flex items-center text-blue-50 font-semibold text-center">
                <span className="bg-blue-500/40 px-1.5 sm:px-2 py-0.5 rounded-full mr-1.5 sm:mr-2 text-[8px] sm:text-[9px] uppercase tracking-tighter border border-blue-300/30">
                  Notice
                </span>
                <span className="hidden sm:inline">Official migration from</span>
                <span className="sm:hidden">Migration from</span>
                <a href={oldWebsiteUrl} className="mx-1 underline hover:text-white transition-colors break-all sm:break-normal">
                  {oldWebsiteUrl.replace('https://', '')}
                </a>
              </div>
              <div className="hidden md:block h-3 w-[1px] bg-blue-400/50"></div>
              <p className="text-white/90 text-center">
                New Website: <span className="font-bold">ptkamandanujayasamudera.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className={`transition-all duration-500 ${
          scrolled 
            ? "bg-white shadow-xl py-2" 
            : "bg-blue-50/95 backdrop-blur-md py-3 sm:py-4"
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex justify-between items-center">
              
              {/* BRANDING SECTION */}
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0" aria-label="PT Kamandanu Jaya Samudera Home">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <img src={logo} alt="Company Logo" className="h-7 sm:h-8 md:h-10 w-auto transition-transform group-hover:scale-105" />
                  <img src={iso} alt="ISO Certified" className="h-6 sm:h-7 md:h-9 w-auto opacity-80" />
                </div>
                
                <div className={`flex flex-col border-l pl-2 sm:pl-3 transition-colors min-w-0 ${scrolled ? "border-blue-200" : "border-blue-300/50"}`}>
                  <h1 className={`font-black text-[9px] sm:text-[10px] md:text-xs lg:text-lg leading-tight tracking-tight transition-colors ${
                    scrolled ? "text-blue-900" : "text-blue-950"
                  }`}>
                    <span className="block sm:inline">PT KAMANDANU JAYA</span>
                    <span className="text-blue-600 block sm:inline sm:ml-1">SAMUDERA</span>
                  </h1>
                  <span className="text-blue-500/80 font-bold text-[6px] sm:text-[7px] md:text-[9px] uppercase tracking-widest mt-0.5">
                    Official Website 2026
                  </span>
                </div>
              </Link>

              {/* DESKTOP MENU */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 text-sm ${
                      isActive(item.path)
                        ? "text-white bg-blue-600 shadow-md"
                        : scrolled 
                          ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                          : "text-blue-900/80 hover:text-blue-600 hover:bg-white/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-1.5 sm:p-2 rounded-xl transition-all shrink-0 ${
                  scrolled ? "text-blue-900 hover:bg-blue-50" : "text-blue-900 hover:bg-white/50"
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>

            {/* MOBILE DRAWER */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                mobileMenuOpen ? "max-h-[600px] mt-3 sm:mt-4 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="pb-4 sm:pb-6 space-y-2 border-t border-blue-100 pt-3 sm:pt-4">
                {/* Migration Info Card */}
                <div className="mx-1 mb-3 sm:mb-4 p-3 sm:p-4 bg-blue-600 rounded-xl sm:rounded-2xl text-white shadow-lg">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                    <Globe size={12} className="sm:w-3.5 sm:h-3.5 text-blue-200" />
                    <span>System Update</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-blue-50">
                    Our services have fully migrated to this new domain from <span className="font-bold underline break-all">{oldWebsiteUrl.replace('https://', '')}</span>.
                  </p>
                </div>

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all ${
                      isActive(item.path)
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "text-blue-900/70 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronRight size={14} className={`sm:w-4 sm:h-4 ${isActive(item.path) ? "opacity-100" : "opacity-0"}`} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
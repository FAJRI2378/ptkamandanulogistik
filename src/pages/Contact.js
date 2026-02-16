import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - PT Kamandanu Jaya Samudera";
    // A slight delay for a smoother animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // SEO: Structured Data for Organization/LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT Kamandanu Jaya Samudera",
    "url": "https://www.kamandanujayasamudera.com", // Replace with your actual domain
    "logo": "https://www.kamandanujayasamudera.com/logo.png", // Replace with your actual logo URL
    "description": "A professional ship crew provider and trusted ship management company in Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Warakas 3 No.23 RT 010 RW 004, Lantai 2",
      "addressLocality": "Tanjung Priok",
      "addressRegion": "Jakarta Utara",
      "postalCode": "14330", // Added for completeness
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-21-43938505",
      "contactType": "customer service",
      "availableLanguage": ["English", "Indonesian"]
    },
    "telephone": "+62-813-1192-2417",
    "email": "info@kamandanujayasamudera.com",
    "openingHours": [
      "Mo-Fr 08:30-17:30", // ISO 8601 format
      "Sa 08:00-15:00"
    ]
  };

  return (
    <>
      {/* SEO: Structured Data Script */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* SEO: Use aria-labelledby to associate section with its main heading */}
      <section
        className="py-12 md:py-24 relative overflow-hidden min-h-screen pt-28 md:pt-36 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-labelledby="contact-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 border border-blue-300 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Get In Touch
            </span>
            {/* SEO: Changed h2 to h1 for proper heading hierarchy on a page */}
            <h1 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A professional ship crew provider and trusted ship management company in Indonesia. We are ready to serve your maritime needs.
            </p>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* CONTACT INFO */}
            <div className={`lg:col-span-5 space-y-4 md:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg group hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-2">Head Office</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jl. Warakas 3 No.23 RT 010 RW 004, 2nd Floor
                      <br />
                      Tanjung Priok, North Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg group hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-2">Phone & WhatsApp</h4>
                    <p className="text-gray-600 text-sm">Office: <a href="tel:+622143938505" className="hover:text-blue-600 transition-colors">(021) 43938505</a></p>
                    <a href="https://wa.me/6281311922417" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-semibold hover:underline" title="Chat with us on WhatsApp">
                      +62 813 1192 2417
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg group hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-2">Official Email</h4>
                    <a href="mailto:info@kamandanujayasamudera.com" className="text-gray-600 text-sm break-all hover:text-blue-600 transition-colors" title="Send us an email">
                      info@kamandanujayasamudera.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg group hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg mb-2">Business Hours</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Monday - Friday: 08:00 - 17:00 WIB
                      <br />
                      Saturday: 11:00 - 15:00 WIB
                      <br />
                      <span className="font-semibold text-red-500">Sunday : Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP & ACTION BUTTONS */}
            <div className={`lg:col-span-7 transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
              <div className="bg-white p-2 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7562.260187217896!2d106.875993!3d-6.118949!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMDguMiJTIDEwNsKwNTInNDIuOSJF!5e1!3m2!1sen!2sid!4v1770910520471!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  className="rounded-2xl h-[300px] md:h-[450px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  // SEO: Descriptive title for the iframe
                  title="Location of PT Kamandanu Jaya Samudera on Google Maps"
                />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 md:hidden">
                  <a href="https://wa.me/6281311922417" className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-bold text-xs shadow-lg hover:bg-green-500 transition-colors">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a href="mailto:info@kamandanujayasamudera.com" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow-lg hover:bg-blue-500 transition-colors">
                    <Send size={16} /> Email
                  </a>
                </div>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-4 mt-6">
                <a href="https://wa.me/6281311922417" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl transition-all shadow-lg font-bold">
                  <MessageCircle /> Contact via WhatsApp
                </a>
                <a href="mailto:info@kamandanujayasamudera.com" className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl transition-all shadow-lg font-bold">
                  <Send /> Send Official Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
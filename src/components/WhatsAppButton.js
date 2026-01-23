import React from "react";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281311922417?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20ship%20management%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 animate-pulse hover:animate-none"
      aria-label="Contact via WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
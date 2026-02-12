import React from "react";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
 return (
  <a
    href="https://wa.me/6281311922417?text=Selamat%20___%2C%20Pak%2FBu.%0APerkenalkan%2C%20saya%20___.%0A%0ABerikut%20saya%20kirimkan%20CV%20saya%20dengan%20data%20sebagai%20berikut%3A%0A-%20Minat%20kapal%3A%0A-%20Rank%3A%0A-%20Last%20salary%3A%0A-%20Kemampuan%20bahasa%20Inggris%20(10-100%25)%3A%0A-%20Ekspektasi%20salary%3A%0A-%20Alumni%3A%20___%20-%20Angkatan%20___%0A%0ATerima%20kasih."
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
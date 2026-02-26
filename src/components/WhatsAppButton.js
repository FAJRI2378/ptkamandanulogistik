import React from "react";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
 return (
<a
    href="https://wa.me/6281311922417?text=Good%20day%2C%20PT%20Kamandanu%20Jaya%20Samudera.%0AMy%20name%20is%20___.%0A%0AI%20am%20submitting%20my%20CV%20for%20your%20review%20with%20the%20following%20details%3A%0A-%20Vessel%20Type%20Interest%3A%0A-%20Rank%3A%0A-%20Last%20Salary%3A%0A-%20English%20Proficiency%20(10-100%25)%3A%0A-%20Salary%20Expectation%3A%0A-%20Education%20Background%3A%20___%20-%20Batch%20___%0A%0AThank%20you."
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
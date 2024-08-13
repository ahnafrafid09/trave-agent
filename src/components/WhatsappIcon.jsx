import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/6282244087426?text=Halo%20Mayasari%20Garage,%20saya%20ingin%20bertanya"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-2 bg-green-600 rounded-full shadow-lg hover:bg-green-800 transition-colors duration-300"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsappIcon;

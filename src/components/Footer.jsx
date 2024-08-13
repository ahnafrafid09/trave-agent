import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-4">
      <div className="container mx-auto px-4 md:px-2 lg:px-0">
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-between w-full mb-4">
            <div className="text-2xl font-bold">
              <Link to="/">
                <img src={logo} alt="logo" className="h-14 md:h-20" />
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white rounded-full p-2 hover:bg-blue-700 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                <FaTiktok />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full p-2 hover:from-pink-600 hover:to-purple-700 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/6282244087426?text=Halo%20Mayasari%20Garage,%20saya%20ingin%20bertanya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Mayasari Garage. Semua hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

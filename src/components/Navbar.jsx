import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State untuk mobile menu
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if we are on the homepage
  const isHomePage = location.pathname === "/";

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || !isHomePage
          ? "bg-slate-950 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-2 lg:px-0 ">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" className="h-14 md:h-20" />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/produk-kami" className="text-white hover:text-gray-300">
              Produk Kami
            </Link>
            <Link to="/kontak" className="text-white hover:text-gray-300">
              Kontak
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden text-white shadow-lg py-4 ${
            scrolled || !isHomePage ? "bg-slate-950" : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="block py-2 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/produk-kami"
              className="block py-2 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Produk Kami
            </Link>
            <Link
              to="/kontak"
              className="block py-2 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

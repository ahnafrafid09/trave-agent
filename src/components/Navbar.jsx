import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import flagId from "../assets/images/flag indo.png";
import flagEn from "../assets/images/flag eng.png";
import flagCn from "../assets/images/flag cn.png";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const pathLang = location.pathname.split("/")[1];
    if (["en", "id", "cn"].includes(pathLang)) {
      i18n.changeLanguage(pathLang);
    }
  }, [location.pathname, i18n]);

  const path = location.pathname;
  const isHomePage =
    path === "/" || path === "/en/" || path === "/id/" || path === "/cn/";

  const getLocalizedPath = (path) => {
    const lang = i18n.language;
    return `/${lang}${path}`;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const newPath = `/${lang}/${pathSegments.slice(1).join("/")}`;
    i18n.changeLanguage(lang);
    navigate(newPath);
    setDropdownOpen(false);
    setLanguageDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || !isHomePage
          ? "bg-slate-950 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={getLocalizedPath("/")} onClick={closeMobileMenu}>
            <img src={logo} alt="logo" className="h-14 md:h-20" />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={getLocalizedPath("/")}
              className="text-white hover:text-gray-300"
            >
              {t("home")}
            </Link>
            <Link
              to={getLocalizedPath("/produk-kami")}
              className="text-white hover:text-gray-300"
            >
              {t("produkKami")}
            </Link>
            <Link
              to={getLocalizedPath("/kontak")}
              className="text-white hover:text-gray-300"
            >
              {t("kontak")}
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white hover:text-gray-300 focus:outline-none"
              >
                <FaGlobe size={18} className="mr-2" />
                {t("bahasa")}
                <MdArrowDropDown size={24} className="ml-2" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-950 border border-gray-600 rounded-md shadow-lg">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    <img src={flagEn} alt="English" className="w-5 h-5 mr-2" />
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("id")}
                    className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    <img
                      src={flagId}
                      alt="Bahasa Indonesia"
                      className="w-5 h-5 mr-2"
                    />
                    Indonesia
                  </button>
                  <button
                    onClick={() => changeLanguage("cn")}
                    className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    <img src={flagCn} alt="中文" className="w-5 h-5 mr-2" />
                    中文
                  </button>
                </div>
              )}
            </div>
          </div>
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
      {mobileMenuOpen && (
        <div
          className={`container mx-auto px-4 ${
            scrolled || !isHomePage ? "bg-slate-950" : "bg-transparent"
          }`}
        >
          <div className="flex justify-between py-4 space-x-4">
            <div className="flex flex-col space-y-2 w-full">
              <Link
                to={getLocalizedPath("/")}
                className="block py-2 text-white hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                {t("home")}
              </Link>
              <Link
                to={getLocalizedPath("/produk-kami")}
                className="block py-2 text-white hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                {t("produkKami")}
              </Link>
              <Link
                to={getLocalizedPath("/kontak")}
                className="block py-2 text-white hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                {t("kontak")}
              </Link>
            </div>
            <div className="relative w-3/5">
              <button
                onClick={toggleLanguageDropdown}
                className="py-2 flex items-center justify-center text-white hover:text-gray-300"
              >
                <FaGlobe size={18} className="mr-2" />
                {t("bahasa")}
                <MdArrowDropDown size={24} className="ml-2" />
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-slate-950 border border-gray-600 rounded-md shadow-lg">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    <img src={flagEn} alt="English" className="w-5 h-5 mr-2" />
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage("id")}
                    className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    <img
                      src={flagId}
                      alt="Bahasa Indonesia"
                      className="w-5 h-5 mr-2"
                    />
                    ID
                  </button>
                  <button
                    onClick={() => changeLanguage("cn")}
                    className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    <img src={flagCn} alt="中文" className="w-5 h-5 mr-2" />
                    CN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

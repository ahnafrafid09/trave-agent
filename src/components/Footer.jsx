import React from "react";
import logo from "../assets/images/logo.png";
import { getLocalizedPath } from "../utils/getLocalizePath";
import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["navbar", "produk"]);
  const currentLang = location.pathname.split("/")[1];

  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="col-span-1 flex justify-center md:justify-start">
            <Link to={getLocalizedPath("/")}>
              <img src={logo} alt="logo" className="h-14 md:h-20" />
            </Link>
          </div>

          {/* Service Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">
              {t("navbar:produkKami")}
            </h2>
            <ul>
              <li className="mb-1">
                <Link
                  to={getLocalizedPath("/product/car-rent")}
                  className="hover:underline"
                >
                  {t("produk:navigasi.sewaMobil")}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to={getLocalizedPath("/product/tour-package")}
                  className="hover:underline"
                >
                  {t("produk:navigasi.paketWisata")}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to={getLocalizedPath("/product/travel")}
                  className="hover:underline"
                >
                  {t("produk:navigasi.travelMalangJuanda")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">
              {t("navbar:perusahaan")}
            </h2>
            <ul>
              <li className="mb-1">
                <Link
                  to={getLocalizedPath("/contact")}
                  className="hover:underline"
                >
                  {t("navbar:kontak")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">
              {t("navbar:sosialMedia")}
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white rounded-full p-2 hover:bg-[#69C9D0] hover:text-black transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg transform hover:scale-110 hover:rotate-12 hover:shadow-xl"
              >
                <FaTiktok />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full p-2 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg transform hover:scale-110 hover:rotate-12 hover:shadow-xl"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/6282244087426?text=Halo%20Anjangsana%20Trip%20PlannerGarage,%20saya%20ingin%20bertanya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg transform hover:scale-110 hover:rotate-12 hover:shadow-xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <hr className="w-full border-t border-gray-700 mb-4" />

        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} {t("navbar:footer")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

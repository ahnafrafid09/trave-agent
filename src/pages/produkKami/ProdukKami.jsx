import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../../utils/SEO";

const useCurrentLanguage = () => {
  const location = useLocation();
  return location.pathname.split("/")[1];
};

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const useDropdown = (initialState = false) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(initialState);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return { isDropdownOpen, setIsDropdownOpen, toggleDropdown };
};

const useSelectedCategory = (t) => {
  const [selectedCategory, setSelectedCategory] = useState(
    t("navigasi.paketWisata")
  );

  useEffect(() => {
    setSelectedCategory(t("navigasi.paketWisata"));
  }, [t]);

  return { selectedCategory, setSelectedCategory };
};

const NavLink = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={`text-base md:text-lg py-2 md:py-3 px-4 md:px-6 ${
      isActive
        ? "text-white bg-primary shadow-inner rounded-br-lg transform translate-y-0.5"
        : "text-slate-950 hover:text-white hover:bg-primary hover:rounded-lg hover:shadow-lg transition ease-in-out duration-200"
    }`}
  >
    {label}
  </Link>
);

const DropdownMenu = ({ items, onItemClick, isOpen, dropdownRef }) => {
  if (!isOpen) return null;

  return (
    <ul
      className="absolute left-0 mt-2 w-40 md:w-48 bg-white border border-gray-200 rounded shadow-lg z-10"
      ref={dropdownRef}
    >
      {items.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => onItemClick(item.url)}
            className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

const ProdukKami = () => {
  const { t, i18n } = useTranslation("produk");
  const navigate = useNavigate();
  const currentLang = useCurrentLanguage();
  const dropdownRef = useRef(null);

  const { isDropdownOpen, toggleDropdown, setIsDropdownOpen } = useDropdown();
  const { selectedCategory, setSelectedCategory } = useSelectedCategory(t);

  const navigationItems = [
    { path: "car-rent", label: t("navigasi.sewaMobil") },
    { path: "tour-package", label: selectedCategory, isDropdown: true },
    { path: "travel", label: t("navigasi.travelMalangJuanda") },
  ];

  const dropdownItems = [
    { url: `/${currentLang}/product/tour-package`, label: t("navigasi.semua") },
    {
      url: `/${currentLang}/product/tour-package/bromo`,
      label: t("navigasi.bromo"),
    },
    {
      url: `/${currentLang}/product/tour-package/1D`,
      label: t("navigasi.1hari"),
    },
    {
      url: `/${currentLang}/product/tour-package/2D1N`,
      label: t("navigasi.2hari"),
    },
    {
      url: `/${currentLang}/product/tour-package/3D2N`,
      label: t("navigasi.3hari"),
    },
    {
      url: `/${currentLang}/product/tour-package/4D3N`,
      label: t("navigasi.4hari"),
    },
    {
      url: `/${currentLang}/product/tour-package/5D4N`,
      label: t("navigasi.5hari"),
    },
  ];

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  const handleCategoryClick = (url) => {
    setIsDropdownOpen(false);
    navigate(url);
  };

  const getLinkClasses = (path) => {
    const isActive = location.pathname.includes(
      `/${currentLang}/product/${path}`
    );
    return isActive
      ? "text-base md:text-lg py-2 md:py-3 px-4 md:px-6 text-white bg-primary shadow-inner rounded-br-lg transform translate-y-0.5"
      : "text-base md:text-lg py-2 md:py-3 px-4 md:px-6 text-slate-950 hover:text-white hover:bg-primary hover:rounded-lg hover:shadow-lg transition ease-in-out duration-200";
  };

  return (
    <section className="mt-16 md:mt-24">
      <SEO
        title="Product - Anjangsana Trip Planner"
        description="Discover the best trips and tours with Anjangsana Trip Planner. Explore our top packages, read reviews, and find out how we can make your journey unforgettable."
        keywords="trip planner, tour packages, travel, Anjangsana, Anjangsana trip planner, Anjangsana trip"
        ogImage="URL_to_image"
        canonicalUrl="https://www.anjangsana.com/"
        twitterImage="URL_to_image"
        ogUrl="https://www.anjangsana.com/"
      />
      <Header>{t("heading.title")}</Header>
      <nav className="my-4 md:my-6 container mx-auto">
        <ul className="flex flex-wrap items-center bg-slate-100 p-4 md:p-5 rounded shadow-lg gap-2 md:gap-4">
          {navigationItems.map((item, index) =>
            item.isDropdown ? (
              <li key={index} className="relative">
                <button
                  className={getLinkClasses(item.path)}
                  onClick={toggleDropdown}
                >
                  {item.label}
                </button>
                <DropdownMenu
                  items={dropdownItems}
                  onItemClick={handleCategoryClick}
                  isOpen={isDropdownOpen}
                  dropdownRef={dropdownRef}
                />
              </li>
            ) : (
              <li key={index}>
                <NavLink
                  to={`/${currentLang}/product/${item.path}`}
                  label={item.label}
                  isActive={location.pathname.includes(
                    `/${currentLang}/product/${item.path}`
                  )}
                />
              </li>
            )
          )}
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default ProdukKami;

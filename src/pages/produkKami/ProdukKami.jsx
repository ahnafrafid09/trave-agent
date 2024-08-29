import React, { useState } from "react";
import Header from "../../components/Header";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProdukKami = () => {
  const { t } = useTranslation("produk");
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = location.pathname.split("/")[1];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    t("navigasi.paketWisata")
  );

  const getLinkClasses = (path) => {
    const isActive = location.pathname.includes(
      `/${currentLang}/produk/${path}`
    );
    return isActive
      ? "text-base md:text-lg py-2 md:py-3 px-4 md:px-6 text-white bg-primary shadow-inner rounded-br-lg transform translate-y-0.5"
      : "text-base md:text-lg py-2 md:py-3 px-4 md:px-6 text-slate-950 hover:text-white hover:bg-primary hover:rounded-lg hover:shadow-lg transition ease-in-out duration-200";
  };

  const handleCategoryClick = (category, url) => {
    setSelectedCategory(t(`navigasi.${category}`));
    setIsDropdownOpen(false);
    navigate(url);
  };

  return (
    <section className="mt-12 md:mt-16 lg:mt-24">
      <Header>{t("heading.title")}</Header>
      <nav className="my-4 md:my-6 container mx-auto">
        <ul className="flex flex-wrap items-center bg-slate-100 p-4 md:p-5 rounded shadow-lg gap-2 md:gap-4">
          <li>
            <Link
              to={`/${currentLang}/produk/sewa-mobil`}
              className={getLinkClasses("sewa-mobil")}
            >
              {t("navigasi.sewaMobil")}
            </Link>
          </li>
          <li className="relative">
            <button
              className={getLinkClasses("paket-wisata")}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCategory}
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 md:w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <li>
                  <button
                    onClick={() =>
                      handleCategoryClick(
                        "paketWisata",
                        `/${currentLang}/produk/paket-wisata`
                      )
                    }
                    className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
                  >
                    {t("navigasi.semua")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleCategoryClick(
                        "bromo",
                        `/${currentLang}/produk/paket-wisata/bromo`
                      )
                    }
                    className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
                  >
                    {t("navigasi.bromo")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleCategoryClick(
                        "1hari",
                        `/${currentLang}/produk/paket-wisata/1D`
                      )
                    }
                    className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
                  >
                    {t("navigasi.1hari")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleCategoryClick(
                        "2hari",
                        `/${currentLang}/produk/paket-wisata/2D1N`
                      )
                    }
                    className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
                  >
                    {t("navigasi.2hari")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleCategoryClick(
                        "3hari",
                        `/${currentLang}/produk/paket-wisata/3D2N`
                      )
                    }
                    className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
                  >
                    {t("navigasi.3hari")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleCategoryClick(
                        "4hari",
                        `/${currentLang}/produk/paket-wisata/4D3N`
                      )
                    }
                    className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
                  >
                    {t("navigasi.4hari")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleCategoryClick(
                        "5hari",
                        `/${currentLang}/produk/paket-wisata/5D4N`
                      )
                    }
                    className="block w-full text-left px-3 py-2 md:px-4 md:py-2 hover:bg-gray-200"
                  >
                    {t("navigasi.5hari")}
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to={`/${currentLang}/produk/travel-malang-juanda`}
              className={getLinkClasses("travel-malang-juanda")}
            >
              {t("navigasi.travelMalangJuanda")}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default ProdukKami;

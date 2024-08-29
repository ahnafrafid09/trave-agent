import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card";
import { useTranslation } from "react-i18next";

const PaketWisata = () => {
  const { t } = useTranslation("paketWisata");
  const { kategori } = useParams();

  const paketWisataBromo = t("paketWisata.paketBromo", { returnObjects: true });
  const paketWisata1Hari = t("paketWisata.paketWisata1Hari", {
    returnObjects: true,
  });
  const paketWisata2Hari = t("paketWisata.paketWisata2Hari", {
    returnObjects: true,
  });
  const paketWisata3Hari = t("paketWisata.paketWisata3Hari", {
    returnObjects: true,
  });
  const paketWisata4Hari = t("paketWisata.paketWisata4Hari", {
    returnObjects: true,
  });
  const paketWisata5Hari = t("paketWisata.paketWisata5Hari", {
    returnObjects: true,
  });

  const allPackages = [
    ...paketWisataBromo.paketBromoDetail,
    ...paketWisata1Hari.listPaketWisata,
    ...paketWisata2Hari.listPaketWisata,
    ...paketWisata3Hari.listPaketWisata,
    ...paketWisata4Hari.listPaketWisata,
    ...paketWisata5Hari.listPaketWisata,
  ];

  const getFilteredList = () => {
    switch (kategori) {
      case "1D":
        return paketWisata1Hari.listPaketWisata;
      case "2D1N":
        return paketWisata2Hari.listPaketWisata;
      case "3D2N":
        return paketWisata3Hari.listPaketWisata;
      case "4D3N":
        return paketWisata4Hari.listPaketWisata;
      case "5D4N":
        return paketWisata5Hari.listPaketWisata;
      case "bromo":
        return paketWisataBromo.paketBromoDetail;
      default:
        return allPackages;
    }
  };
  const kategoriTitle = () => {
    switch (kategori) {
      case "1D":
        return paketWisata1Hari.title;
      case "2D1N":
        return paketWisata2Hari.title;
      case "3D2N":
        return paketWisata3Hari.title;
      case "4D3N":
        return paketWisata4Hari.title;
      case "5D4N":
        return paketWisata5Hari.title;
      case "bromo":
        return paketWisataBromo.title;
      default:
        return t("paketWisata.title");
    }
  };

  const listPaketWisata = getFilteredList();

  const getLowestPrice = (hargaObj) => {
    const allPrices = Object.values(hargaObj).flatMap((price) =>
      typeof price === "object" ? Object.values(price) : price
    );

    // Filter hanya nilai yang merupakan angka
    const validPrices = allPrices.filter(
      (price) => !isNaN(price) && typeof price === "number"
    );

    // Jika tidak ada harga valid, kembalikan string default
    if (validPrices.length === 0) {
      return "Hubungi Kami";
    }

    // Temukan harga terendah dari harga yang valid
    const lowestPrice = Math.min(...validPrices);

    // Format harga menjadi string lokal
    return lowestPrice.toLocaleString();
  };

  console.log(paketWisataBromo.paketBromoDetail.harga);

  const label = t("paketWisata.label", { returnObjects: true });
  const kategoriTranslation = t("paketWisata.kategori", {
    returnObjects: true,
  });

  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center md:text-start">
        {t("paketWisata.title")}
      </h1>

      {listPaketWisata.length > 0 ? (
        <>
          {kategori !== undefined ? (
            <h1 className="text-xl md:text-2xl text-center font-bold mt-6">
              {kategoriTitle()}
            </h1>
          ) : (
            ""
          )}
          <div className="flex justify-center mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
              {listPaketWisata.map((data, index) => {
                const kategoriName = kategoriTranslation[data.kategoriId];

                return (
                  <Card
                    key={`${data.id}-${index}`}
                    gambar="https://source.unsplash.com/random/800x600/?bromo"
                    judul={data.judulPaket}
                    harga={getLowestPrice(data.harga)}
                    details={[{ label: label.kategori, value: kategoriName }]}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center mt-12">{t("paketWisata.noPackages")}</p>
      )}
    </div>
  );
};

export default PaketWisata;

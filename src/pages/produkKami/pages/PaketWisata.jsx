import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLowestPrice } from "../../../utils/getLowestPrice";
import CardSkeleton from "../../../components/CardSkeleton";

const Card = lazy(() => import("../../../components/Card"));

const PaketWisata = () => {
  const { t } = useTranslation(["paketWisata", "produk"]);
  const { kategori } = useParams();

  const paketWisataData = {
    bromo: t("paketWisata:paketWisata.paketBromo", { returnObjects: true }),
    "1Hari": t("paketWisata:paketWisata.paketWisata1Hari", {
      returnObjects: true,
    }),
    "2Hari": t("paketWisata:paketWisata.paketWisata2Hari", {
      returnObjects: true,
    }),
    "3Hari": t("paketWisata:paketWisata.paketWisata3Hari", {
      returnObjects: true,
    }),
    "4Hari": t("paketWisata:paketWisata.paketWisata4Hari", {
      returnObjects: true,
    }),
    "5Hari": t("paketWisata:paketWisata.paketWisata5Hari", {
      returnObjects: true,
    }),
  };

  const allPackages = Object.values(paketWisataData).flatMap(
    (data) => data.listPaketWisata || data.paketBromoDetail || []
  );

  const getFilteredList = () => {
    switch (kategori) {
      case "1D":
        return paketWisataData["1Hari"].listPaketWisata;
      case "2D1N":
        return paketWisataData["2Hari"].listPaketWisata;
      case "3D2N":
        return paketWisataData["3Hari"].listPaketWisata;
      case "4D3N":
        return paketWisataData["4Hari"].listPaketWisata;
      case "5D4N":
        return paketWisataData["5Hari"].listPaketWisata;
      case "bromo":
        return paketWisataData.bromo.paketBromoDetail;
      default:
        return allPackages;
    }
  };

  const getKategoriTitle = () => {
    switch (kategori) {
      case "1D":
        return paketWisataData["1Hari"].title;
      case "2D1N":
        return paketWisataData["2Hari"].title;
      case "3D2N":
        return paketWisataData["3Hari"].title;
      case "4D3N":
        return paketWisataData["4Hari"].title;
      case "5D4N":
        return paketWisataData["5Hari"].title;
      case "bromo":
        return paketWisataData.bromo.title;
      default:
        return t("paketWisata:paketWisata.title");
    }
  };

  const kategoriTranslation = t("paketWisata:paketWisata.kategori", {
    returnObjects: true,
  });
  const label = t("paketWisata:paketWisata.label", { returnObjects: true });

  const listPaketWisata = getFilteredList();
  const skeletonArray = Array(3).fill(null);
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center md:text-start">
        {t("paketWisata:paketWisata.title")}
      </h1>

      {listPaketWisata.length > 0 ? (
        <>
          {kategori && (
            <h1 className="text-xl md:text-2xl text-center font-bold mt-6">
              {getKategoriTitle()}
            </h1>
          )}
          <div className="flex justify-center mt-4">
            <Suspense
              fallback={
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
                  {skeletonArray.map((_, index) => (
                    <CardSkeleton key={index} />
                  ))}
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
                {listPaketWisata.map((data, index) => {
                  const kategoriName = kategoriTranslation[data.kategoriId];

                  return (
                    <Card
                      key={`${data.id}-${index}`}
                      gambar={data.gambar}
                      judul={data.judulPaket}
                      harga={getLowestPrice(data.harga)}
                      details={[{ label: label.kategori, value: kategoriName }]}
                    />
                  );
                })}
              </div>
            </Suspense>
          </div>
          <p className="text-sm text-gray-600 my-4 text-end">
            * {t("produk:paketWisata.catatan")}
          </p>
        </>
      ) : (
        <p className="text-center mt-12">
          {t("paketWisata:paketWisata.noPackages")}
        </p>
      )}
    </div>
  );
};

export default PaketWisata;

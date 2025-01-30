import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { getLowestPrice } from "../../utils/getLowestPrice";
import { getLocalizedPath } from "../../utils/getLocalizePath";

const ProdukRekomen = () => {
  const { t } = useTranslation(["home", "paketWisata", "travelJuanda"]);
  const currentLang = location.pathname.split("/")[1];
  const paketBromoDetail = t(
    "paketWisata:paketWisata.paketBromo.paketBromoDetail",
    {
      returnObjects: true,
    }
  );
  const paketWisata2Hari = t(
    "paketWisata:paketWisata.paketWisata2Hari.listPaketWisata",
    {
      returnObjects: true,
    }
  );
  const travel = t("travelJuanda:travel.list", { returnObjects: true });

  const selectedPaketBromo = paketBromoDetail.find((paket) => paket.id === 1);
  const selectedPaketWisata2Hari = paketWisata2Hari.find(
    (paket) => paket.id === 1
  );

  const selectedTravel = travel.find((paket) => paket.id === 1);

  const rekomendasiProdukPaketWisata = [
    selectedPaketBromo,
    selectedPaketWisata2Hari,
  ];

  const label = t("paketWisata:paketWisata.label", { returnObjects: true });
  const kategori = t("paketWisata:paketWisata.kategori", {
    returnObjects: true,
  });

  return (
    <div className="container py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        {t("home:rekomendasiProduk.judul")}
      </h1>
      <div className="flex justify-center my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
          {rekomendasiProdukPaketWisata.map((data, index) => {
            const namaKategori = kategori[data.kategoriId];
            return (
              <Card
                key={`${data.id}-${index}`}
                gambar={data.gambar}
                judul={data.judulPaket}
                harga={getLowestPrice(data.harga)}
                details={[{ label: label.kategori, value: namaKategori }]}
              />
            );
          })}
          <Card
            key={selectedTravel.id}
            gambar={selectedTravel.gambar}
            judul={selectedTravel.judul}
            harga={selectedTravel.harga.toLocaleString()}
            details={[
              { value: selectedTravel.deskripsi },
              { value: selectedTravel.keberangkatan },
              { value: selectedTravel.berangkat },
              { value: selectedTravel.catatan },
              { value: selectedTravel.mobil.join(", ") },
            ]}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button to={getLocalizedPath("/product")}>
          {t("home:rekomendasiProduk.tombol")}
        </Button>
      </div>
    </div>
  );
};

export default ProdukRekomen;

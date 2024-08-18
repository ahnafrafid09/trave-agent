import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { useTranslation } from "react-i18next";

const ProdukKami = () => {
  const { t } = useTranslation("produk");
  const katalogMobil = t("katalogMobil", { returnObjects: true });
  const listMobil = katalogMobil?.listMobil || [];
  const label = katalogMobil.labels;

  return (
    <section className="mt-16 md:mt-24">
      <Header>{t("heading.title")}</Header>
      <div className="container">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center md:text-start">
          {t("katalogMobil.title")}
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
            {listMobil.map((data) => (
              <Card
                key={data.id}
                gambar={data.gambar}
                judul={data.namaMobil}
                namaMobil={data.namaMobil}
                harga={data.harga.toLocaleString()}
                details={[
                  { label: label.tahun, value: data.tahun },
                  { label: label.jenisMobil, value: data.jenisMobil },
                  { label: label.bahanBakar, value: data.bahanBakar },
                  {
                    label: label.kapasitas,
                    value: `${data.kapasitasPenumpang} + ${data.kapasitasDriver}`,
                  },
                ]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdukKami;

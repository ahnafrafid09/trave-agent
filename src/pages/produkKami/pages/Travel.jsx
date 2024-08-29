import React from "react";
import Card from "../../../components/Card";
import { useTranslation } from "react-i18next";

const Travel = () => {
  const { t } = useTranslation("travelJuanda");
  const travel = t("travel.list", { returnObjects: true });
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center md:text-start">
        {t("travel.judul")}
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
          {travel.map((data) => (
            <Card
              key={data.id}
              gambar={data.gambar}
              judul={data.judul}
              harga={data.harga.toLocaleString()}
              details={[
                { value: data.deskripsi },
                { value: data.keberangkatan },
                { value: data.berangkat },
                { value: data.catatan },
                { value: data.mobil.join(", ") },
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travel;

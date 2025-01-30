import React, { Suspense, lazy } from "react";
import CardSkeleton from "../../../components/CardSkeleton";
import { useTranslation } from "react-i18next";

const Card = lazy(() => import("../../../components/Card"));

const SewaMobil = () => {
  const { t } = useTranslation("sewaMobil");
  const sewaMobil = t("sewaMobil", { returnObjects: true });
  const listMobil = sewaMobil?.listMobil || [];
  const label = sewaMobil.labels;
  const skeletonArray = Array(3).fill(null);
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center md:text-start">
        {t("sewaMobil.title")}
      </h1>
      <div className="flex justify-center">
        <Suspense
          fallback={
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
              {skeletonArray.map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
            {listMobil.map((data) => (
              <Card
                key={data.id}
                gambar={data.gambar}
                judul={data.namaMobil}
                harga={data.harga.toLocaleString()}
                styleImage={"h-60"}
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
        </Suspense>
      </div>
    </div>
  );
};

export default SewaMobil;

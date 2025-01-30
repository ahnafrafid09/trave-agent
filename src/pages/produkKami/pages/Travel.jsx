import React, { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import CardSkeleton from "../../../components/CardSkeleton";

const Card = lazy(() => import("../../../components/Card"));

const Travel = () => {
  const { t } = useTranslation("travelJuanda");
  const travel = t("travel.list", { returnObjects: true });
  const skeletonArray = Array(3).fill(null);
  return (
    <div className="container">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center md:text-start">
        {t("travel.judul")}
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
        </Suspense>
      </div>
    </div>
  );
};

export default Travel;

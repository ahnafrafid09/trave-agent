import React from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Card = ({
  variant = "detailed", // Default variant adalah "detailed"
  gambar,
  judul,
  deskripsi,
  harga,
  Icon,
  details,
}) => {
  const { t } = useTranslation("card");
  return variant === "detailed" ? (
    // Varian 1: Kartu dengan detail lengkap
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 border border-gray-200">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={gambar}
        alt={judul}
      />
      <div className="px-4 py-4">
        <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
          {judul}
        </div>
        <ul className="text-gray-700 text-sm sm:text-base list-disc pl-4">
          {details.map((detail, index) => (
            <li key={index}>
              {detail.label}: {detail.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 px-4 justify-between">
        <div>
          <h1 className="font-bold text-xl ">Rp. {harga}</h1>
        </div>
        <Button
          href={`https://wa.me/6282244087426?text=Halo%20Anjangsana%20Trip%20PlannerGarage,%20saya%20ingin%20bertanya%20tentang%20berapa%20harga%20penyewaan%20mobil%20${judul}?`}
        >
          {t("hubungiKami")}
        </Button>
      </div>
    </div>
  ) : (
    // Varian 2: Kartu dengan ikon, judul, dan deskripsi
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 border border-gray-200 flex flex-col items-center gap-2">
      {Icon && (
        <Icon
          size={50}
          className="text-gray-700 bg-slate-200 rounded-full p-2"
        />
      )}{" "}
      <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
        {judul}
      </div>
      <p className="text-gray-700 text-sm text-center sm:text-base">
        {deskripsi}
      </p>
    </div>
  );
};

export default Card;

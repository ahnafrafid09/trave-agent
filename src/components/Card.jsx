import React from "react";
import Button from "./Button";

const Card = ({
  variant = "detailed", // Default variant adalah "detailed"
  gambar,
  namaMobil,
  tahun,
  bahanBakar,
  jenisMobil,
  kapasitasPenumpang,
  harga,
  judul,
  deskripsi, // Untuk varian kedua
  Icon, // Parameter untuk ikon
}) => {
  return variant === "detailed" ? (
    // Varian 1: Kartu dengan detail lengkap
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 border border-gray-200">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={gambar}
        alt={namaMobil}
      />
      <div className="px-4 py-4">
        <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
          {namaMobil}
        </div>
        <ul className="text-gray-700 text-sm sm:text-base list-disc pl-4">
          <li>Tahun: {tahun}</li>
          <li>Bahan Bakar: {bahanBakar}</li>
          <li>Jenis Mobil: {jenisMobil}</li>
          <li>Kapasitas: {kapasitasPenumpang} orang + 1 Driver</li>
          <li>Harga: Rp {harga.toLocaleString()}</li>
        </ul>
      </div>
      <div className="px-4 py-2 flex items-center justify-end">
        <Button
          href={`https://wa.me/6282244087426?text=Halo%20Mayasari%20Garage,%20saya%20ingin%20bertanya%20tentang%20berapa%20harga%20penyewaan%20mobil%20${namaMobil}?`}
        >
          Hubungi Kami
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

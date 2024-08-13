import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import katalogMobil from "../../translate/id/katalogMobil.json";

const ProdukKami = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(katalogMobil);
  }, []);

  return (
    <section className="mt-16 md:mt-24">
      <Header>Produk Kami</Header>
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center md:text-start">
          Price List Sewa Mobil
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0 max-w-6xl">
            {datas.map((data) => (
              <Card
                key={data.id}
                gambar={data.gambar}
                namaMobil={data.namaMobil}
                tahun={data.tahun}
                bahanBakar={data.bahanBakar}
                jenisMobil={data.jenisMobil}
                kapasitasPenumpang={data.kapasitasPenumpang}
                harga={data.harga}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdukKami;

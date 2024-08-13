import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Map from "../../components/Map";
import { IoLocationSharp, IoMail, IoCallSharp } from "react-icons/io5";

const Kontak = () => {
  return (
    <section className="mt-16 md:mt-24">
      <Header>Kontak Kami</Header>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
            Hubungi Kami
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0">
            <Card
              variant="simple"
              Icon={IoLocationSharp}
              judul="Lokasi"
              deskripsi="Grand permata jingga, Boulevard Avenue 1 No.25, Keduyo, Mangliawan, Kec. Pakis, Kabupaten Malang, Jawa Timur 65154"
            />
            <Card
              variant="simple"
              Icon={IoMail}
              judul="Email"
              deskripsi="mayasarigarage@gmail.com"
            />
            <Card
              variant="simple"
              Icon={IoCallSharp}
              judul="Hubungi Kami"
              deskripsi="(+62) 82244087426"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-6 px-10 lg:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
            Lokasi Kami
          </h1>
          <div className="w-full lg:w-3/4 xl:w-2/3">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;

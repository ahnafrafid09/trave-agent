import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Map from "../../components/Map";
import { IoLocationSharp, IoMail, IoCallSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import SEO from "../../utils/SEO";

const Kontak = () => {
  const { t } = useTranslation("kontak");

  return (
    <section className="mt-16 md:mt-24">
      <SEO
        title="Contact - Anjangsana Trip Planner"
        description="Discover the best trips and tours with Anjangsana Trip Planner. Explore our top packages, read reviews, and find out how we can make your journey unforgettable."
        keywords="trip planner, tour packages, travel, Anjangsana, Anjangsana trip planner, Anjangsana trip"
        ogImage="URL_to_image"
        canonicalUrl="https://www.anjangsana.com/"
        twitterImage="URL_to_image"
        ogUrl="https://www.anjangsana.com/"
      />
      <Header>{t("header")}</Header>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
            {t("hubungiKami")}
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 md:px-4 lg:px-0">
            <Card
              variant="simple"
              Icon={IoLocationSharp}
              judul={t("lokasi.title")}
              deskripsi={t("lokasi.description")}
            />
            <Card
              variant="simple"
              Icon={IoMail}
              judul={t("email.title")}
              deskripsi={t("email.description")}
            />
            <Card
              variant="simple"
              Icon={IoCallSharp}
              judul={t("noTelp.title")}
              deskripsi={t("noTelp.description")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-6 px-10 lg:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
            {t("lokasiKami")}
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

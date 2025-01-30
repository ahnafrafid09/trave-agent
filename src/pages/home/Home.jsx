import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import ProdukRekomen from "./ProdukRekomen";
import { FaCarSide, FaClock } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import Gallery from "./Gallery";
import animateNumber from "../../utils/animateNumber";
import StatCard from "./StatCard";
import SEO from "../../utils/SEO";

const Home = () => {
  const [totalArmada, setTotalArmada] = useState(0);
  const [jamKerja, setJamKerja] = useState(0);
  const [kantor, setKantor] = useState(0);
  const { t } = useTranslation("home");

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateNumber(0, 10, 1000, setTotalArmada);
          animateNumber(0, 24, 1000, setJamKerja);
          animateNumber(0, 1, 1000, setKantor);
          observer.unobserve(statsRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <>
      <SEO
        title="Home - Anjangsana Trip Planner"
        description="Discover the best trips and tours with Anjangsana Trip Planner. Explore our top packages, read reviews, and find out how we can make your journey unforgettable."
        keywords="trip planner, tour packages, travel, Anjangsana, Anjangsana trip planner, Anjangsana trip"
        ogImage="URL_to_image"
        canonicalUrl="https://www.anjangsana.com/"
        twitterImage="URL_to_image"
        ogUrl="https://www.anjangsana.com/"
      />
      <Hero />
      <ProdukRekomen />
      <section className="bg-slate-900 w-full py-8" ref={statsRef}>
        <div className="container flex flex-col md:flex-row flex-wrap justify-around items-center gap-8 px-4 md:px-8">
          <StatCard
            icon={FaCarSide}
            value={totalArmada}
            label={t("stats.armada")}
          />
          <StatCard
            icon={FaClock}
            value={jamKerja}
            label={t("stats.jamKerja")}
          />
          <StatCard
            icon={HiOfficeBuilding}
            value={kantor}
            label={t("stats.kantor")}
          />
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default Home;

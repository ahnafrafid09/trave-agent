import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import gambar
import bromo from "../../assets/images/bromo.jpg";
import tumpakSewu from "../../assets/images/tumpaksewu.jpg";
import batu from "../../assets/images/batu.jpg";
import ijen from "../../assets/images/ijen.jpg";
import balkot from "../../assets/images/balkot.jpg";

// Konstanta untuk gambar di Swiper
const images = [
  { src: bromo, alt: "Bromo" },
  { src: tumpakSewu, alt: "Tumpak Sewu" },
  { src: ijen, alt: "Ijen" },
  { src: balkot, alt: "Balai Kota" },
  { src: batu, alt: "Batu" },
];

// Komponen Reusable untuk Animasi Motion
const AnimatedText = ({ children, delay = 0 }) => (
  <motion.div
    className="text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-4 md:gap-12">
        <div className="flex flex-col gap-2 md:gap-3 text-center">
          <AnimatedText>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
              {t("hero.tagline")}
            </span>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold">
              {t("hero.judul")}
            </h1>
          </AnimatedText>
          <AnimatedText delay={1}>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
              {t("hero.deskripsi")}
            </span>
          </AnimatedText>
        </div>
        <Button
          size="lg"
          href="https://wa.me/6289656183536?text=Halo%20Anjangsana%20Trip%20Planner,%20saya%20ingin%20bertanya"
        >
          {t("hero.tombol")}
        </Button>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="relative w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center brightness-50"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

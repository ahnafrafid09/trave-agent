import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Konstanta untuk gambar di Swiper
const images = [
  {
    src: "https://image.anjangsanatrip.com/images/bromo.jpg",
    alt: "Bromo",
  },
  {
    src: "https://image.anjangsanatrip.com/images/tumpaksewu.jpg",
    alt: "Tumpak Sewu",
  },
  {
    src: "https://image.anjangsanatrip.com/images/ijen.jpg",
    alt: "Ijen",
  },
  {
    src: "https://image.anjangsanatrip.com/images/balkot.jpg",
    alt: "Balai Kota",
  },
  {
    src: "https://image.anjangsanatrip.com/images/batu.jpg",
    alt: "Batu",
  },
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
            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {t("hero.tagline")}
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-6xl font-bold">
              {t("hero.judul")}
            </h1>
          </AnimatedText>
          <AnimatedText delay={1}>
            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {t("hero.deskripsi")}
            </h2>
          </AnimatedText>
        </div>
        <Button
          size="md"
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

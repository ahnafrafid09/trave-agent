import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bromo from "../../assets/images/bromo.jpg";
import tumpakSewu from "../../assets/images/tumpaksewu.jpg";
import batu from "../../assets/images/batu.jpg";
import ijen from "../../assets/images/ijen.jpg";
import balkot from "../../assets/images/balkot.jpg";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <section className="relative h-screen">
      <div className="container absolute inset-0 z-10 flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col gap-3">
          <motion.p
            className="text-white text-lg sm:text-xl md:text-2xl text-center "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("hero.tagline")}
          </motion.p>
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t("hero.judul")}
          </motion.h1>
          <motion.p
            className="text-white text-lg sm:text-xl md:text-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {t("hero.deskripsi")}
          </motion.p>
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
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src={bromo}
            alt="Slide 1"
            className="w-full h-full object-cover filter brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={tumpakSewu}
            alt="Slide 2"
            className="w-full h-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ijen}
            alt="Slide 4"
            className="w-full h-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={balkot}
            alt="Slide 5"
            className="w-full h-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={batu}
            alt="Slide 3"
            className="w-full h-full object-cover brightness-50"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;

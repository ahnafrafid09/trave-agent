import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bromo from "../../assets/images/bromo.jpg";
import tumpakSewu from "../../assets/images/tumpaksewu.jpg";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="container mx-auto absolute inset-0 z-10 flex flex-col items-center md:items-start justify-center gap-12">
        <div className="flex flex-col gap-3">
          <motion.p
            className="text-white text-lg sm:text-xl md:text-2xl text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Mari Menjelajahi Jawa Timur Bersama
          </motion.p>
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mayasari Garage
          </motion.h1>
          <motion.p
            className="text-white text-lg sm:text-xl md:text-2xl text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Jadikan Momen Liburan Terbaik Anda Bersama Kami
          </motion.p>
        </div>
        <Button
          size="lg"
          href="https://wa.me/6289656183536?text=Halo%20Mayasari%20Garage,%20saya%20ingin%20bertanya"
        >
          Kontak Kami
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
        {/* Tambahkan SwiperSlide lainnya sesuai kebutuhan */}
      </Swiper>
    </section>
  );
};

export default Hero;

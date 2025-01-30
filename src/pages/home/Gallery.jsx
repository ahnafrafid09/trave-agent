import React from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation("home");
  const images = [
    "https://image.anjangsanatrip.com/images/gallery/2.jpg",
    "https://image.anjangsanatrip.com/images/gallery/3.jpg",
    "https://image.anjangsanatrip.com/images/gallery/4.jpg",
    "https://image.anjangsanatrip.com/images/gallery/5.jpg",
    "https://image.anjangsanatrip.com/images/gallery/6.jpg",
    "https://image.anjangsanatrip.com/images/gallery/7.jpg",
    "https://image.anjangsanatrip.com/images/gallery/8.jpg",
    "https://image.anjangsanatrip.com/images/gallery/9.jpg",
  ];
  return (
    <section className="container py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        {t("galeri.judul")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

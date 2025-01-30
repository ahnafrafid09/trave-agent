import React from "react";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/images/gallery/2.jpg";
import image2 from "../../assets/images/gallery/3.jpg";
import image3 from "../../assets/images/gallery/4.jpg";
import image4 from "../../assets/images/gallery/5.jpg";
import image5 from "../../assets/images/gallery/6.jpg";
import image6 from "../../assets/images/gallery/7.jpg";
import image7 from "../../assets/images/gallery/8.jpg";
import image8 from "../../assets/images/gallery/9.jpg";

const Gallery = () => {
  const { t } = useTranslation("home");
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        {t("galeri.judul")}
      </h2>
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

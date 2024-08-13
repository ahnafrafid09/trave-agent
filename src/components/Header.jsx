import React from "react";
import ijen from "../assets/images/ijen.jpg";

const Header = ({ children }) => {
  return (
    <div
      className="relative h-[33vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ijen})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold text-white uppercase tracking-wide">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Header;

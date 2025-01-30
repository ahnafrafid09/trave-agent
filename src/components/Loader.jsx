import React from "react";
import { FaCarSide } from "react-icons/fa"; // Menggunakan ikon mobil dari react-icons

const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white bg-opacity-75">
    <div className="relative flex flex-col items-center">
      <FaCarSide
        className="text-blue-500 text-6xl mb-4" // Ukuran ikon mobil dan margin bawah
        style={{
          animation: "moveCar 2s linear infinite",
        }}
      />
      <span className="text-blue-500 font-semibold text-lg">Loading...</span>
    </div>
    <style jsx>{`
      @keyframes moveCar {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `}</style>
  </div>
);

export default Loader;

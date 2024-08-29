import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children, // Teks atau elemen yang akan ditampilkan di dalam tombol
  onClick, // Fungsi yang akan dipanggil saat tombol diklik
  type = "button", // Tipe tombol, default "button"
  variant = "primary", // Varian tombol, default "primary"
  size = "md", // Ukuran tombol, default "medium"
  disabled = false, // Status disabled, default "false"
  href = null, // Link href jika tombol digunakan sebagai link
  to = null, // Route URL jika menggunakan react-router
  className = "", // Kelas tambahan
}) => {
  const baseStyle =
    "font-semibold rounded flex items-center justif-center text-center focus:outline-none focus:ring transition duration-300";
  const variantStyles = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-slate-950 hover:bg-slate-950 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-5 py-3 text-lg",
  };

  const classes = `${baseStyle} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;

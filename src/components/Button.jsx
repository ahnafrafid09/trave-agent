import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  href = null,
  to = null,
  className = "",
}) => {
  const baseStyle =
    "font-semibold rounded flex items-center justify-center text-center focus:outline-none focus:ring transition duration-300";

  const variantStyles = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-slate-950 hover:bg-slate-950 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  };

  const responsiveSizeStyles = {
    sm: "px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm md:px-4 md:py-2 md:text-md",
    md: "px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-md md:px-5 md:py-3 md:text-lg",
    lg: "px-4 py-3 text-md sm:px-5 sm:py-3 sm:text-lg md:px-6 md:py-4 md:text-xl",
  };

  const classes = `${baseStyle} ${variantStyles[variant]} ${
    responsiveSizeStyles[size]
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

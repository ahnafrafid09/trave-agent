import React from "react";

const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-secondary-yellow">
      <Icon className="text-4xl md:text-5xl lg:text-6xl" />
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">{value}</h1>
      <h1 className="text-lg md:text-xl lg:text-2xl text-secondary-yellow">
        {label}
      </h1>
    </div>
  );
};

export default StatCard;

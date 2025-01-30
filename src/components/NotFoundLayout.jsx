import React from "react";
import { Outlet } from "react-router-dom";
import NotFound from "./NotFound";

const NotFoundLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <NotFound />
    </div>
  );
};

export default NotFoundLayout;

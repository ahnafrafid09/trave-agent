import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white p-4 border border-gray-200 flex flex-col justify-between h-full animate-pulse">
      {/* Skeleton untuk gambar */}
      <div className="w-full h-48 bg-gray-300 rounded"></div>

      {/* Skeleton untuk judul dan detail */}
      <div className="flex-grow px-4 py-4">
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <ul className="space-y-2">
          <li className="h-4 bg-gray-200 rounded w-full"></li>
          <li className="h-4 bg-gray-200 rounded w-5/6"></li>
          <li className="h-4 bg-gray-200 rounded w-4/6"></li>
        </ul>
      </div>

      {/* Skeleton untuk harga */}
      <div className="flex flex-col px-4 py-2">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-6 bg-gray-300 rounded w-2/4 mt-2"></div>
      </div>

      {/* Skeleton untuk button */}
      <div className="px-4 py-2">
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;

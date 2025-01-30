const Map = () => {
  // Koordinat yang diberikan
  const position = "-7.930204267456757,112.6535128604464";

  return (
    <div className="w-full h-[30rem] mx-auto relative z-10">
      <iframe
        title="Google Maps"
        src={`https://www.google.com/maps?q=${position}&output=embed`}
        className="h-full w-full rounded-lg shadow-lg border border-gray-200"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;

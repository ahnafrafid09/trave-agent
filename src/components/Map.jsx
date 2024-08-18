import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Mengimpor gambar ikon marker secara eksplisit
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  // Koordinat yang diberikan
  const position = [-7.960320939297712, 112.66769195361768];

  // Mengatur ukuran ikon marker
  const markerIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadowPng,
    shadowSize: [41, 41],
  });

  return (
    <div className="w-full h-[30rem] mx-auto">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg shadow-lg border border-gray-200"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>Anjangsana Trip Planner</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

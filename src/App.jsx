import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import ProdukKami from "./pages/produkKami/ProdukKami";
import Kontak from "./pages/kontak/Kontak";
import SewaMobil from "./pages/produkKami/pages/sewaMobil";
import PaketWisata from "./pages/produkKami/pages/PaketWisata";
import Travel from "./pages/produkKami/pages/Travel";
import { HelmetProvider } from "react-helmet-async";
import WhatsappIcon from "./components/WhatsappIcon";
import NotFound from "./components/NotFound";

// 🔹 Daftar bahasa yang valid
const validLanguages = ["en", "id", "cn"];

// 🔹 Component untuk memeriksa bahasa yang valid
const LanguageGuard = ({ children }) => {
  const { lang } = useParams();

  if (!validLanguages.includes(lang)) {
    return <NotFound />; // 🔹 Jika bahasa tidak valid, tampilkan halaman Not Found
  }

  return children;
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="font-sans flex flex-col min-h-screen bg-[#f7f9fe]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/en" replace />} />
              <Route
                path="/:lang/*"
                element={
                  <LanguageGuard>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="product" element={<ProdukKami />}>
                        <Route index element={<Navigate to="car-rent" />} />
                        <Route path="car-rent" element={<SewaMobil />} />
                        <Route path="travel" element={<Travel />} />
                        <Route path="tour-package" element={<PaketWisata />} />
                      </Route>
                      <Route path="contact" element={<Kontak />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </LanguageGuard>
                }
              />

              {/* 🔹 Jika tidak sesuai dengan pola di atas, tampilkan Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsappIcon />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

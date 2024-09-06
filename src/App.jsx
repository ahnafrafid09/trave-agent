import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProdukKami from "./pages/produkKami/ProdukKami";
import Kontak from "./pages/kontak/Kontak";
import WhatsappIcon from "./components/WhatsappIcon";
import SewaMobil from "./pages/produkKami/pages/sewaMobil";
import PaketWisata from "./pages/produkKami/pages/PaketWisata";
import Travel from "./pages/produkKami/pages/Travel";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="font-sans flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:lang" element={<Home />} />
              <Route path="/:lang/produk" element={<ProdukKami />}>
                <Route index element={<Navigate to="sewa-mobil" />} />
                <Route path="sewa-mobil" element={<SewaMobil />} />
                <Route path="travel-malang-juanda" element={<Travel />} />
                <Route path="paket-wisata" element={<PaketWisata />}>
                  <Route path=":kategori" element={<PaketWisata />} />
                </Route>
              </Route>
              <Route path="/:lang/kontak" element={<Kontak />} />
            </Routes>
          </main>
          <Footer />
          <WhatsappIcon />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

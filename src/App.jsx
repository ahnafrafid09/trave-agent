import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdukKami from "./pages/produkKami/ProdukKami";
import Kontak from "./pages/kontak/Kontak";
import WhatsappIcon from "./components/WhatsappIcon";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="font-sans flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pb-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produk-kami" element={<ProdukKami />} />
              <Route path="/kontak" element={<Kontak />} />
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

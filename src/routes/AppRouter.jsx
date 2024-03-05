import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";


import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import ServiciosPage from "../pages/ServiciosPage";
import DetalleProductoPage from "../pages/DetalleProductoPage";
import GaleriaPage from "../pages/GaleriaPage";
import ContactanosModal from "../components/ContactanosModal";
import Footer from "../components/Footer";
  const AppRouter = () => {
    return (
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/detalleproducto" element={<DetalleProductoPage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <ContactanosModal />
        <Footer />
      </Router>
    );
  };
  
  export default AppRouter;
  
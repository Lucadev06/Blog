import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { Home } from "./components/Home";
import { SobreMi } from "./components/SobreMi";
import { Publicaciones } from "./components/Publicaciones";
import { Contacto } from "./components/Contacto";
import Footer from "./Footer";

const Blog = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre-mi" element={<SobreMi />} />
        <Route path="publicaciones" element={<Publicaciones />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default Blog;

import { Blog } from './Blog'
import { Header } from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function AppBlog() {
  return (
    <BrowserRouter>
      {/* Header siempre visible */}
      <Box sx={{ backgroundColor: "black" }}>
        <Header />
      </Box>

      {/* Rutas que cambian */}
      <Routes>
        <Route path="/" element={<Blog />} /> {/* Mostrar Blog en / */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppBlog

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import CatalogPage from "./pages/catalog";
import FavoritesPage from "./pages/favorites";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<CatalogPage />} />
        <Route path="/products" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;

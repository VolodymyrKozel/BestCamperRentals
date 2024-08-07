import { Routes, Route, Navigate, Link } from "react-router-dom";
import HomePage from "./pages/home";
import CatalogPage from "./pages/catalog";
import FavoritesPage from "./pages/favorites";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

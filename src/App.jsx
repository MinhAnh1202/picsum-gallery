import { Routes, Route, Navigate, Link } from "react-router-dom";
import PhotoList from "./pages/PhotoList";
import PhotoDetail from "./pages/PhotoDetail";

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <Link to="/photos" className="logo">
          Picsum Photo Gallery
        </Link>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/photos" replace />} />
          <Route path="/photos" element={<PhotoList />} />
          <Route path="/photos/:id" element={<PhotoDetail />} />
          {/* fallback */}
          <Route
            path="*"
            element={<div style={{ textAlign: "center" }}>404 - Not found</div>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

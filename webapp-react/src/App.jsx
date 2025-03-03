import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FilmDetail from "./pages/FilmDetail.jsx";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="app-title">WebApp Film 🎬</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/:id" element={<FilmDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

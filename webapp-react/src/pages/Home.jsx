import React, { useEffect, useState } from "react";
import api from "../api.js";
import FilmCard from "../components/FilmCard.jsx";

function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api
      .get("/films")
      .then((response) => setFilms(response.data))
      .catch((error) => console.error("Errore caricamento film:", error));
  }, []);

  return (
    <div>
      <h2 className="section-title">Lista Film</h2>
      <div className="film-grid">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

function FilmCard({ film }) {
  return (
    <div className="film-card">
      <img
        src={`http://localhost:3000/covers/${film.cover_image}`}
        alt={film.title}
      />
      <h3>{film.title}</h3>
      <p>Regista: {film.director}</p>
      <Link to={`/films/${film.id}`}>Dettagli</Link>
    </div>
  );
}

export default FilmCard;

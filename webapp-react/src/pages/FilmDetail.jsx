import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api.js";
import ReviewForm from "../components/ReviewForm.jsx";

function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  const loadFilmData = () => {
    api
      .get(`/films/${id}`)
      .then((response) => setFilm(response.data))
      .catch((error) =>
        console.error("Errore caricamento dettaglio film:", error)
      );
  };

  useEffect(() => {
    loadFilmData();
  }, [id]);

  if (!film) {
    return <p>Caricamento...</p>;
  }

  return (
    <div className="film-detail">
      <h2>{film.title}</h2>
      <img
        src={`http://localhost:3000/covers/${film.cover_image}`}
        alt={film.title}
      />
      <p>
        <strong>Regista:</strong> {film.director}
      </p>
      <p>
        <strong>Anno:</strong> {film.year}
      </p>

      <h3>Recensioni:</h3>
      <ul>
        {film.reviews.length > 0 ? (
          film.reviews.map((review) => (
            <li key={review.id}>
              {review.review_text} - <strong>{review.rating}/5</strong>
            </li>
          ))
        ) : (
          <p>Nessuna recensione disponibile.</p>
        )}
      </ul>

      <h3>Aggiungi una Recensione</h3>
      <ReviewForm filmId={id} onReviewAdded={loadFilmData} />
    </div>
  );
}

export default FilmDetail;

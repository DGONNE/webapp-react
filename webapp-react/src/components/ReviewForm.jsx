import React, { useState } from "react";
import api from "../api.js";

function ReviewForm({ filmId, onReviewAdded }) {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      review_text: reviewText,
      rating: rating,
    };

    api
      .post(`/films/${filmId}/reviews`, newReview)
      .then(() => {
        setReviewText("");
        setRating(3);
        onReviewAdded(); // ricarica le recensioni
      })
      .catch((err) => console.error("Errore nell’invio recensione:", err));
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Scrivi una recensione"
        required
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n} Stelle
          </option>
        ))}
      </select>
      <button type="submit">Invia Recensione</button>
    </form>
  );
}

export default ReviewForm;

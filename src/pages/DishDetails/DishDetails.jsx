import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./DishDetails.css"; 

export default function DishDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch dish details");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="details-loader">
        <span className="loader"></span> {/* استخدم اللودر هنا لو حابب */}
      </div>
    );
  }

  if (!meal) {
    return <p style={{ textAlign: "center" }}>No dish found.</p>;
  }

  return (
    <div className="dish-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h2 className="dish-title">{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="dish-img"
      />

      <p className="dish-desc">{meal.strInstructions}</p>

      <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="youtube-link">
        ▶ Watch on YouTube
      </a>
    </div>
  );
}

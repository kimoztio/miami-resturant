import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Loader/Loader";

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => {
        const mealsWithPrice = res.data.meals.map(meal => ({
          ...meal,
          price: Math.floor(Math.random() * 100) + 80 
          //  سعر عشوائي بين 80-180 علشان - because Not found price in API 
          // 
        }));
        setMeals(mealsWithPrice);
        setLoading(false);
      })
      .catch(() => {
        alert('Failed to load menu');
        setLoading(false);
      });
  }, []);

  const handleOrder = (meal) => {
    alert(`Order placed for: ${meal.strMeal} - EGP ${meal.price}`);
  };

  const goToDetails = (id) => {
    navigate(`/dish/${id}`);
  };


if (loading) return <Loader />;

  return (
    <div className="container my-5">
      <h2 className="mb-4">Our Menu</h2>
      <div className="row">
        {meals.map(meal => (
          <div className="col-md-6 col-lg-4 mb-4" key={meal.idMeal}>
            <div className="card h-100 shadow-sm">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text mb-2">Price: <strong>EGP {meal.price}</strong></p>

                <div className="mt-auto">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleOrder(meal)}
                    >
                    Order
                  </button>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => goToDetails(meal.idMeal)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

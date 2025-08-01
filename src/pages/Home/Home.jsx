import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import background from '../../assets/photo-1504674900247-0877df9cc836.avif';

export default function Home() {
  const navigate = useNavigate();

  function handleExploreMenu() {
    navigate('/menu');
  }

  return (
    <section className="home-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <h1>Welcome to Miami Restaurant</h1>
        <p>Enjoy our delicious meals made with fresh ingredients.</p>
        <button onClick={handleExploreMenu}>
          Explore Menu
        </button>
      </div>
    </section>
  );
}

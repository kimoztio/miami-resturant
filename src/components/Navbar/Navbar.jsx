import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="logo">
          🍔 Miami
        </NavLink>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} end>Home</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/booking" onClick={() => setMenuOpen(false)}>Booking</NavLink>
        </nav>

        <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search..." />
          <button type="submit">🔍</button>
        </form>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}

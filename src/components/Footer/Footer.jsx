import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
<>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Miami Restaurant</h3>
          <p>Address:<br />Messalla Street, Fayoum, Egypt</p>
          <p>📞 +20 100 123 4567</p>
            <p>📞 +20 111 987 6543</p>
          <p>✉️ info@miami-restaurant.com</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
         <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/Booking">Booking</Link></li>

          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>

            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>♥ Welcome in our Resturant in every time  ♥</p>
      </div>
    </footer>


</>

  )
}

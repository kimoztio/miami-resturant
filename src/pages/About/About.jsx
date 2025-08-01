import React from 'react';
import './About.css';
import restaurantImage from '../../assets/212985.jpg';
// import Food from '../../assets/212985.jpg'


export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Miami Restaurant</h2>

        <div className="about-content">
          <div className="text-content">
            <p>
              Since 2010, <strong> Miami Restaurant </strong> has served delicious meals with passion and dedication.
              Located in Fayoum, Egypt, we use fresh,  locally  sourced ingredients to deliver authentic flavors.
            </p>

            <p>
              Our team of experienced chefs and friendly staff ensure every visit is memorable. We are proud to be a
              community favorite.
            </p>

            <p><strong>We are open daily from 10:00 AM to 11:00 PM.</strong></p>

            <div className="info-box">
              <h4>📍 Location</h4>
              <p>
                 El Messalla Street , El Fayoum City, Egypt</p>

              <h4> 🕒 Opening Hours</h4>
              <ul>
                <li>Sat – Thu: 10:00 AM – 11:00 PM</li>
                <li>Friday: 1:00 PM – 12:00 AM</li>
              </ul>

              <h4> 📞 Contact</h4>
              <p>Phone: +201001234567</p>
              <p>Email: info@miamirestaurant.com</p>
            </div>
          </div>

          <div className="image-content">
            <img src={restaurantImage} alt="Miami Restaurant" />
          </div>
        </div>
      </div>
    </section>
  );
}

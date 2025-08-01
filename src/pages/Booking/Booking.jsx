import React, { useState } from "react";
import "./Booking.css";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: 1,
    request: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Booking received\nName: ${form.name}\nEmail: ${form.email}\nDate: ${form.date} ${form.time}\nPeople: ${form.people}\nRequest: ${form.request}`);
    setForm({ name: "", email: "", date: "", time: "", people: 1, request: "" });
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        <h2>Book A Table</h2>
        <p>Reserve your table in advance to enjoy a great dining experience.</p>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
          <input type="time" name="time" value={form.time} onChange={handleChange} required />
          <select name="people" value={form.people} onChange={handleChange}>
            {[...Array(12)].map((_, i) => <option key={i} value={i+1}>{i+1} People</option>)}
          </select>
          <textarea name="request" placeholder="Special Request" rows="3" value={form.request} onChange={handleChange} />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </section>
  );
}

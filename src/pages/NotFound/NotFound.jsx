import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="notfound container text-center my-5">
      <h1 className="display-1">404</h1>
      <p className="fs-4">Oops!  <br />Page not found</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </section>
  );
}

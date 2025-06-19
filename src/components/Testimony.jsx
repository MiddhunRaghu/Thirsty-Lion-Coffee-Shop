import React, { useState, useEffect } from "react";
import { testimonials } from "./TestimonyData";
import "../cssComponents/Testimony.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimony = ({
  title = "What Our Customers Say",
  enableFilter = false,
  animate = true,
}) => {
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    if (animate) {
      AOS.init({ duration: 1000, once: true });
    }
  }, [animate]);

  const filteredTestimonials = testimonials.filter(
    (t) => t.rating >= minRating
  );

  return (
    <div className="testimonial-section">
      <h2 style={{ backgroundColor:"#EEEFF1" , textAlign: "center" }}>{title}</h2>

      {enableFilter && (
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <label htmlFor="ratingFilter">Filter by Rating: </label>
          <select
            id="ratingFilter"
            onChange={(e) => setMinRating(Number(e.target.value))}
          >
            <option value="0">All</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars Only</option>
          </select>
        </div>
      )}

      <div className="testimonial-grid-container">
        {filteredTestimonials.map(({ name, text, rating, photo }, index) => (
          <div
            key={index}
            className="testimonial-card"
            data-aos={animate ? "fade-up" : ""}
          >
            <img src={photo} alt={name} className="testimonial-photo" />
            <p className="testimonial-text">"{text}"</p>
            <h4 className="testimonial-name">{name}</h4>
            <div className="testimonial-rating">{"⭐".repeat(rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;

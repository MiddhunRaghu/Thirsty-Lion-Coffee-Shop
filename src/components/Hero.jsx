import React from 'react';
import CoffeeBig from '../assets/Barista Chillout.png'; // Import the image
import '../cssComponents/Hero.css'; // Import the CSS

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-overlay">
            <img src={CoffeeBig} alt="Coffee" className="hero-image" />
        </div>

      <div className="hero-content">
        <h1>Start Your Day with a Perfect Brew</h1>
        <p>Discover the rich taste of hand-crafted coffee, made just for you.</p>
        <a href="#menu" className="hero-btn">Order Now</a>
      </div>

    </div>
    
  );
};

export default Hero;

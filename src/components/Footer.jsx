import React from 'react';
import '../cssComponents/Footer.css'; // Update path if needed
import {  NavLink } from 'react-router-dom';

const Footer = () => {

  const handleScrollToTop = (e) => {
    e.preventDefault();
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Coffee Bar</h3>
          <p>Brewing joy one cup at a time. Visit us for your daily dose of comfort.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@thirstylion.com</p>
          <p>Phone: +91 - 9659623613</p>
          <p>Location: 123 Brew Street, Bean City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Coffee Bar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

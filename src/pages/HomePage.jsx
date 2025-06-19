import React from 'react';
import styles from '../cssPages/HomePage.module.css'; // Update path if needed
import cappuccinoImg from '../assets/hot-beverages.png';
import latteImg from '../assets/lattee.png';
import espressoImg from '../assets/coffee-hero-section.png';

const HomePage = () => {
      const featuredItems = [
    { name: "Cappuccino", image: cappuccinoImg },
    { name: "Latte", image: latteImg },
    { name: "Espresso", image: espressoImg },
  ];
  return (
  
    <main className={styles.homeContainer}>
      {/* Hero Section with Video */}
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src={`${import.meta.env.BASE_URL}videos/Coffeev2.mp4`} typeof='video/mp4' // Place your video in public/videos
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className={styles.heroContent}>
          <h1>Welcome to Thirsty Lion Family</h1>
          <p>Crafted coffee. Cozy vibes. Community first.</p>
          <button className={styles.ctaButton}>Explore Menu</button>
        </div>
      </section>

      {/* Featured Coffees */}
      <section className={styles.featured}>
        <h2>Customer Favorites</h2>
        <div className={styles.coffeeGrid}>
          {featuredItems.map((item, index) => (
            <div className={styles.coffeeCard} key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Aromatic & rich. Perfect any time of day.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <h2>Visit Us Today or Order Online!</h2>
        <button className={styles.ctaButton}>Order Now</button>
      </section>
    </main>
  );
};

export default HomePage;

import React from 'react'
import '../cssPages/About.css' // Import the CSS for About page
import Jane from '../assets/MaleBarista - 1.png'
import Alex from '../assets/MaleBarista - 2.png'
import Kaira from '../assets/FemaleBarista - 2.png'
import Mekna from '../assets/FemaleBarista - 1.png'
const About = () => {
  return (
    <div className='about-container'>
        <section className="about-hero">
            <h1>About Us</h1>
            <p>Welcome to Thirsty Lion – where every cup tells a story.</p>
        </section>

        <section className='about-story'>
            <h2>Our Story</h2>
            <p>Founded in 2023, Thirsty Lion started as a small coffee cart in the heart of the city. Our passion for quality coffee and community has grown into a beloved local café.</p>
        </section>

        <section className="about-values">
            <h2>What We Value</h2>
            <ul>
                <li>☕ Sustainability</li>
                <li>👨‍👩‍👧‍👦 Community</li>
                <li>🌎 Ethical sourcing</li>
                <li>🎨 Creativity in brewing</li>
            </ul>
        </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={Jane} alt="Jane - Head Barista" />
            <h4>Jane</h4>
            <p>Head Barista & Latte Artist</p>
          </div>
          <div className="team-member">
            <img src={Alex} alt="Alex - Junior Barista" />
            <h4>Alex</h4>
            <p>Junior Barista & Cappuccino Artist</p>
          </div>
          <div className="team-member">
            <img src={Kaira} alt="Kaira - Head Barista" />
            <h4>Kaira</h4>
            <p>Head Barista & Cappuccino Artist</p>
          </div>
          <div className="team-member">
            <img src={Mekna} alt="Mekna - Junior Barista" />
            <h4>Mekna</h4>
            <p>Junior Barista & Espresso Artist</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
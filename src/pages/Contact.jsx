import React from 'react'
import '../cssPages/Contact.css'

const Contact = () => {
 return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether it’s feedback, a question, or just a hello.</p>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Our Coffee Shop</h3>
          <p>📍 123 Brew Street, Bean City</p>
          <p>📞 +91 - 9659623613</p>
          <p>✉️ support@thirstylion.com</p>

          {/* Optional: Embedded Google Map */}
          <iframe
            title="Map"
            src="https://maps.google.com/maps?q=Starbucks&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="200"
            style={{ width: '100%' ,border: 0, marginTop: '1rem' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


export default Contact
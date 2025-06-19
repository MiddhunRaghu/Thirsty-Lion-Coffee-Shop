import React from 'react'
import '../cssComponents/MenuItemCard.css' // Import the CSS for styling
import Cappuccino from '../assets/hot-beverages.png'
import Latte from '../assets/lattee.png'
import Coffee from '../assets/coffee-hero-section.png'

const products = [
  {
    id: 1,
    title: "Cappuccino",
    description: "A beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top.",
    price: "4.50",
    image: Cappuccino,
  },
  {
    id: 2,
    title: "Latte",
    description: "A milk coffee that is made up of few shots of espresso,lots of steamed milk and a thin layer of frothed milk on top.",
    price: "3.26",
    image: Latte,
  },
  {
    id: 3,
    title: "Espresso",
    description: "A concentrated coffee beverage produced by forcing hot water under high pressure through finely ground coffee beans.",
    price: "2.60",
    image: Coffee,
  },
];

const MenuItemCard = () => {
  return (
    <div className="menu-section">
      <h2 className="menu-section-title">Our Menu</h2>
      <div className="menu-cards-container">
        {products.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.title} className="menu-card-image" />
            <h3 className="menu-card-title">{item.title}</h3>
            <p className="menu-card-description">{item.description}</p>
            <div className="menu-card-footer">
              <span className="menu-card-price">${item.price}</span>
              <button className="menu-card-btn">Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemCard;

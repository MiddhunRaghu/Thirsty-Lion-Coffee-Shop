import React from 'react';
import '../cssComponents/Services.css'; // Update path if needed
import { Coffee, ShoppingBag, Truck, Utensils } from 'lucide-react';

const services = [
  {
    icon: <Utensils size={40} />,
    title: 'Dine-In',
    description: 'Relax and enjoy your favorite brews in a cozy, welcoming space.',
  },
  {
    icon: <ShoppingBag size={40} />,
    title: 'Takeaway',
    description: 'Grab your favorite coffee to go – hot or cold, we’ve got it ready.',
  },
  {
    icon: <Truck size={40} />,
    title: 'Delivery',
    description: 'Fresh coffee delivered right to your door, fast and hassle-free.',
  },
  {
    icon: <Coffee size={40} />,
    title: 'Catering',
    description: 'Serve handcrafted coffee at your events, meetings, or celebrations.',
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

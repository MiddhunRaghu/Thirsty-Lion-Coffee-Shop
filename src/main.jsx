// src/main.jsx or index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Layout from './Layout.jsx';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx'; // Placeholder for About page
import Contact from './pages/Contact.jsx'; // Placeholder for Contact page
import AuthForm from './pages/AuthForm.jsx'; // Import your AuthForm component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/thirsty-loin-coffee-shop"> {/* Set the base path for the app */}
      <Routes>
        {/* Wrap everything in Layout (includes Navbar & Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />         {/* / -> App (site homepage) */}
          <Route path="/auth/:mode" element={<AuthForm />} /> {/* /login -> AuthForm.jsx */}
          <Route path="home" element={<HomePage />} />  {/* /home -> actual HomePage.jsx */}
          <Route path="about" element={<About/>} /> {/* Placeholder for About page */}
          <Route path="contact" element={<Contact/>} /> {/* Placeholder for About page */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

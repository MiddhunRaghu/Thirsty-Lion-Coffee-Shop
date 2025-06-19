import {React,  }from 'react'
import {  NavLink ,useNavigate } from 'react-router-dom';

import '../cssComponents/NavBar.css'
import logo from '../assets/1-removebg-preview.png'

const NavBar = () => {
   const navigate = useNavigate();
    const handleLoginClick = () => {
    navigate("/auth/login");
    };

     const handleSignupClick = () => {
    navigate("/auth/signup");
    };
    
  return (
    <div className='nav-bar'>
        <div className='my_logo'>
          <NavLink to="/">
            <img className = "logo"src={logo} alt='Vite Logo' />
          </NavLink>
        </div>
        <div className='nav-bar__links'>
             <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
             <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
             <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
            
        </div>
        <div className='nav-bar__buttons'>
            <button className='nav-bar__buttons--login' onClick={handleLoginClick}>Login</button>
            <button className='nav-bar__buttons--signup'onClick={handleSignupClick}>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar
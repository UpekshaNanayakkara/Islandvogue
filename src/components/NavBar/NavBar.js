import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  // State to toggle mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-container">
      {/* Hamburger menu toggle button */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={menuOpen ? 'active' : ''}></span>
        <span className={menuOpen ? 'active' : ''}></span>
        <span className={menuOpen ? 'active' : ''}></span>
      </div>

      {/* Navigation menu */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/newarrived">New arrivals</Link>
        </li>
        <li className="nav-item">
          <Link to="/partywear">Party Wear</Link>
        </li>
        <li className="nav-item">
          <Link to="">Casual Wear</Link>
        </li>
        <li className="nav-item">
          <Link to="">Tops</Link>
        </li>
        <li className="nav-item">
          <Link to="">Straight cut</Link>
        </li>
        <li className="nav-item">
          <Link to="/frockstyle">Frocks style</Link>
        </li>
        <li className="nav-item">
          <Link to="">Cardigans</Link>
        </li>
        <li className="nav-item">
          <Link to="">Shawls & jackets</Link>
        </li>
        <li className="nav-item">
          <Link to="">Pants & leggings</Link>
        </li>
        <li className="nav-item">
          <Link to="">Accessories & gift cards</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

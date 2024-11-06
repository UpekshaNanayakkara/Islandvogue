import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle the submenu for Tops
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
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
          <Link to="/newarrived">New Store</Link>
        </li>
        <li className="nav-item">
          <Link to="/partywear">Party Wear</Link>
        </li>
        <li className="nav-item">
          <Link to="/angarkha">Angarkha</Link>
        </li>
        
        {/* Tops Category with Click-to-Open Submenu */}
        <li className="nav-item">
          <span className="nav-link" onClick={toggleSubMenu}>Tops</span>
          <ul className={`sub-menu ${subMenuOpen ? 'active' : ''}`}>
            <li className="sub-item"><Link to="">Kaftan Style Tops</Link></li>
            <li className="sub-item"><Link to="">Ponchos</Link></li>
            <li className="sub-item"><Link to="">Shirt Style</Link></li>
            <li className="sub-item"><Link to="">Short Tops</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="">Straight cut</Link>
        </li>
        <li className="nav-item">
          <Link to="/frockstyle">Frocks style</Link>
        </li>
        <li className="nav-item">
          <Link to="/cardigan">Cardigans & jackets</Link>
        </li>
        <li className="nav-item">
          <Link to="/shawl">Shawls</Link>
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({ tops: false, kurtis: false });

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle submenus individually
  const toggleSubMenu = (menu) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
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
          <span className="nav-link" onClick={() => toggleSubMenu('tops')}>
            Tops
          </span>
          <ul className={`sub-menu ${subMenuOpen.tops ? 'active' : ''}`}>
            <li className="sub-item"><Link to="/kaftan">Kaftan Style Tops</Link></li>
            <li className="sub-item"><Link to="/ponchos">Ponchos</Link></li>
            <li className="sub-item"><Link to="/shirtstyle">Shirt Style</Link></li>
            <li className="sub-item"><Link to="/shorttops">Short Tops</Link></li>
          </ul>
        </li>

        {/* Kurtis Category with Click-to-Open Submenu */}
        <li className="nav-item">
          <span className="nav-link" onClick={() => toggleSubMenu('kurtis')}>
            Kurtis
          </span>
          <ul className={`sub-menu ${subMenuOpen.kurtis ? 'active' : ''}`}>
            <li className="sub-item"><Link to="/frockstyle">Frock Style</Link></li>
            <li className="sub-item"><Link to="/princessline">Princess Line</Link></li>
            <li className="sub-item"><Link to="/staightcutTops">Straight Cut Tops</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/cardigan">Cardigans & Jackets</Link>
        </li>
        <li className="nav-item">
          <Link to="/shawl">Shawls</Link>
        </li>
        <li className="nav-item">
          <Link to="/pants">Pants & Leggings</Link>
        </li>
        <li className="nav-item">
          <Link to="/accessories">Accessories & Gift Cards</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Island Vogue Logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-logo">
        <Link to="/" className='navbar-logo'>
          <img src={logo} alt="Island Vogue" className="navbar-logo-img" />
        </Link>
      </div>
      <div className="topbar-name">
        <h1>Island Vogue</h1>
        <h3>Ethnic & Modest Wear Store</h3>
      </div>
      <div className="topbar-social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/islandvogue.sl/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@islandvogue.sl?_t=8pUgoBqwHTk&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <button className="contact-us">Contact Us</button>
      </div>
    </div>
  );
};

export default TopBar;

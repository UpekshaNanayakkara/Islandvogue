import React from 'react';
import './BannerSection.css';
import BackGroundImage from '../../assets/images/BG/young-woman-beautiful-red-dress.jpg';

const BannerSection = () => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${BackGroundImage})` }}>
      <div className="banner-content">
        <h1>Welcome to The 10th Hevan</h1>
        <p>Your One-Stop Shop for Ethnic & Modest Wear</p>
        <a href='/newarrived'>
        <button className="shop-now-btn">Shop Now</button>
        </a>
      </div>
    </div>
  );
};

export default BannerSection;

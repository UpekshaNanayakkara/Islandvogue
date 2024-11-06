import React, { useState } from 'react';
import ShawlData from '../../data/ShawlData';
import './shawl.css';

const Shawl = () => {
  return (
    <div className="shawl-container">
      <h1 className="shawl-title">Our Shawl Collection</h1>
      <div className="shawl-grid">
        {ShawlData.map((item) => (
          <ShawlCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ShawlCard = ({ item }) => {
  const images = [
    item.img,
    item.img1,
    item.img2,
    item.img3,
    item.img4,
    item.img5,
    item.img6,
    item.img7,
    item.img8,
  ].filter(Boolean); // Filter out undefined images

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="shawl-card">
      <div className="shawl-img-container">
        <img
          src={images[currentImageIndex]}
          alt={`${item.Name} - ${currentImageIndex + 1}`}
          className="shawl-img"
        />
        <button className="prev-btn" onClick={handlePrev}>❮</button>
        <button className="next-btn" onClick={handleNext}>❯</button>
      </div>
      <div className="shawl-info">
        <h2 className="shawl-name">{item.Name}</h2>
        <p className="shawl-id">{item.id}</p>
        <p className="shawl-price">{item.price2}</p>
        <p className="shawl-size">{item.DM}</p>
        <p className="shawl-size">{item.Island}</p>
      </div>
    </div>
  );
};

export default Shawl;

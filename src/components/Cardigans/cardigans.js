import React from 'react';
import './cardigans.css';
import CardigansData from '../../data/CardigansData';


const cardigans = () => {
  return (
    <div className="cardigans-container">
    <h1 className="cardigans-title">Our Cardigans & Jackets Collection</h1>
    <div className="cardigans-grid">
      {CardigansData.map((item) => (
        <div className="cardigans-card" key={item.id}>
          <img src={item.img} alt={item.Name} className="cardigans-img" />
          <div className="cardigans-info">
            <h2 className="cardigans-name">{item.Name}</h2>
            <p className='cardigans-id'>{item.id}</p>
            <p className="cardigans-size">{item.available_size}</p>
            <p className="cardigans-price">{item.price}</p>
            {/* <p className="cardigans-price">{item.price2}</p> */}
            <p className="cardigans-size">{item.DM}</p>
            <p className="cardigans-size">{item.Island}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default cardigans;

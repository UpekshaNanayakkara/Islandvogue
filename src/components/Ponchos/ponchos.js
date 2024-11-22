import React from 'react';
import './ponchos.css';
import PonchosData from '../../data/PonchosData';

const ponchos = () => {
  return (
    <div className="ponchos-container">
    <h1 className="ponchos-title">Our Ponchos Collection</h1>
    <div className="ponchos-grid">
      {PonchosData.map((item) => (
        <div className="angarkha-card" key={item.id}>
          <img src={item.img} alt={item.Name} className="ponchos-img" />
          <div className="ponchos-info">
            <h2 className="ponchos-name">{item.Name}</h2>
            <p className='ponchos-id'>{item.id}</p>
            <p className="ponchos-size">{item.available_size}</p>
            <p className="ponchos-size">{item.price}</p>
            <p className="ponchos-price">{item.price2}</p>
            <p className="ponchos-size">{item.DM}</p>
            <p className="ponchos-size">{item.Island}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ponchos;

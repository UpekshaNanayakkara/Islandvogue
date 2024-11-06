import React from 'react';
import AngarkhaData from '../../data/AngarkhaData';
import './angarkha.css';


const angarkha = () => {
  return (
    <div className="angarkha-container">
      <h1 className="angarkha-title">Our Angarkha Collection</h1>
      <div className="angarkha-grid">
        {AngarkhaData.map((item) => (
          <div className="angarkha-card" key={item.id}>
            <img src={item.img} alt={item.Name} className="angarkha-img" />
            <div className="angarkha-info">
              <h2 className="angarkha-name">{item.Name}</h2>
              <p className='angarkha-id'>{item.id}</p>
              <p className="angarkha-size">{item.available_size}</p>
              <p className="angarkha-size">{item.price}</p>
              <p className="angarkha-price">{item.price2}</p>
              <p className="angarkha-size">{item.DM}</p>
              <p className="angarkha-size">{item.Island}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default angarkha;

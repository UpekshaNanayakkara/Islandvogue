import React from 'react';
import PartyWearData from '../../data/PartyWearData';
import './partyWear.css';

const partyWear = () => {
  return (
    <div className="partywear-container">
      <h1 className="partywear-title">Our Party Wear Collection</h1>
      <div className="partywear-grid">
        {PartyWearData.map((item) => (
          <div className="partywear-card" key={item.id}>
            <img src={item.img} alt={item.Name} className="partywear-img" />
            <div className="partywear-info">
              <h2 className="partywear-name">{item.Name}</h2>
              <p className='partywear-id'>{item.id}</p>
              <p className="partywear-size">{item.available_size}</p>
              <p className="partywear-size">{item.price}</p>
              <p className="partywear-price">{item.price2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default partyWear;

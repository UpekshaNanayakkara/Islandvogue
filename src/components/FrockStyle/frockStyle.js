import React from 'react';
import FrockStyleData from '../../data/FrocksStyleData';
import './frockStyle.css';

const frockStyle = () => {
  return (
    <div className="frockstyle-container">
      <h1 className="frockstyle-title">Our Frock Style Collection</h1>
      <div className="frockstyle-grid">
        {FrockStyleData.map((item) => (
          <div className="frockstyle-card" key={item.id}>
            <img src={item.img} alt={item.Name} className="frockstyle-img" />
            <div className="frockstyle-info">
              <h2 className="frockstyle-name">{item.Name}</h2>
              <p className='frockstyle-id'>{item.id}</p>
              <p className="frockstyle-size">{item.available_size}</p>
              <p className="frockstyle-size">{item.price}</p>
              <p className="frockstyle-price">{item.price2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default frockStyle;

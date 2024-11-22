import React from 'react';
import StraightCutTops from '../../data/StraightCutTopsData';
import './straightCutTops.css';

const straightCutTops = () => {
    return (
        <div className="SCT-container">
        <h1 className="SCT-title">Our Straight Cut Tops Collection</h1>
        <div className="SCT-grid">
          {StraightCutTops.map((item) => (
            <div className="SCT-card" key={item.id}>
              <img src={item.img} alt={item.Name} className="SCT-img" />
              <div className="SCT-info">
                <h2 className="SCT-name">{item.Name}</h2>
                <p className='SCT-id'>{item.id}</p>
                <p className="SCT-size">{item.available_size}</p>
                <p className="SCT-size">{item.price}</p>
                <p className="SCT-price">{item.price2}</p>
                <p className="SCT-size">{item.DM}</p>
                <p className="SCT-size">{item.Island}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      );
}

export default straightCutTops;

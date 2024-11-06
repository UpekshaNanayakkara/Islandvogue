import React from 'react';
import NewArrivedData from '../../data/NewArrivedData';
import './newArrived.css';

const newArrived = () => {
    return (
        <div className="newarrived-container">
          <h1 className="newarrived-title">Our Collection</h1>
          <div className="newarrived-grid">
            {NewArrivedData.map((item) => (
              <div className="newarrived-card" key={item.id}>
                <img src={item.img} alt={item.Name} className="newarrived-img" />
                <div className="newarrived-info">
                  <h2 className="newarrived-name">{item.Name}</h2>
                  <p className='newarrived-id'>{item.id}</p>
                  <p className="newarrived-size">{item.available_size}</p>
                  <p className="newarrived-size">{item.price}</p>
                  <p className="newarrived-price">{item.price2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default newArrived

import React, { useState } from 'react';
import './feedBack.css';
import img1 from '../../assets/images/FeedBack/1.jpeg';
import img2 from '../../assets/images/FeedBack/2.jpeg';
import img3 from '../../assets/images/FeedBack/3.jpeg';
import img4 from '../../assets/images/FeedBack/4.jpeg';
import img5 from '../../assets/images/FeedBack/5.jpeg';
import img6 from '../../assets/images/FeedBack/6.jpeg';
import img7 from '../../assets/images/FeedBack/7.jpeg';
import img8 from '../../assets/images/FeedBack/8.jpeg';
import img9 from '../../assets/images/FeedBack/9.jpeg';
import img10 from '../../assets/images/FeedBack/10.jpeg';

const feedbackData = [
  { img: img1 },
  { img: img2},
  { img: img3 },
  { img: img4 },
  { img: img5},
  { img: img6 },
  { img: img7 },
  { img: img8},
  { img: img9},
  { img: img10}
];

const FeedBack = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="feedback-section">
      <h2 className="feedback-title">What Our Customers Say</h2>
      <div className="feedback-grid">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="feedback-item" onClick={() => openModal(feedback.img)}>
            <img src={feedback.img} alt={`Feedback ${index + 1}`} className="feedback-image" />
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Modal Feedback" className="modal-image" />
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedBack;

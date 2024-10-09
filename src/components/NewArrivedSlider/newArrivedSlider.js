import React from 'react';
import Slider from 'react-slick';
import NewArrivedData from '../../data/NewArrivedData';
import './newArrivedSlider.css'; 
import {Link} from 'react-router-dom';

const NewArrivedSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite:true,
                    dots:true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="new-arrived-slider">
            <div className='topic'><h1>--- New Arrived Styles ---</h1></div>
            <Slider {...settings}>
                {NewArrivedData.map((item, index) => (
                    <div key={index} className="slide-item">
                        <div className="image-column">
                            <Link to={'/newarrived'}>
                            <img src={item.img} alt={item.Name} className="item-image" />
                            </Link>
                            
                        </div>
                        <div className="text-column">
                            <h3>{item.Name}</h3>
                            <p>{item.available_size}</p>
                            <p>{item.price}</p>
                            <p>{item.price2}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default NewArrivedSlider;

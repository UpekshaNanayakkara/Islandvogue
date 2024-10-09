import React from 'react';
import BannerSection from '../components/BannerSection/BannerSection';
import NewArrivedSlider from '../components/NewArrivedSlider/newArrivedSlider';
import AboutUs from '../components/AboutUs/aboutus';
import FeedBack from '../components/FeedBack/feedBack';

const Home = () => {
  return (
    <div>
      <BannerSection />
      <NewArrivedSlider />
      <AboutUs />
      <FeedBack />
    </div>
  )
}

export default Home

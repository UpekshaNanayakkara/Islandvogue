import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TopBar from './components/TopBar';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import BannerSection from './components/BannerSection/BannerSection';
import Footer from './components/Footer/footer';
import PartyWear from './components/PartyWear/partyWear';
import FrockStyle from './components/FrockStyle/frockStyle';
import Angarkha from "./components/Angarkha/angarkha";
import Cardigans from './components/Cardigans/cardigans';
import NewArrived from './components/NewArrived/newArrived';
import NewArrivedSlider from './components/NewArrivedSlider/newArrivedSlider';
import AboutUs from './components/AboutUs/aboutus';
import TermsAndCondition from './components/TermsAndCondition/termsAndCondition';
import ExchangePolicy from './components/ExchangePolicy/exchangePolicy';
import DeliveryPolicy from './components/DeliveryPolicy/deliveryPolicy';
import Shawl from './components/Shawl/shawl';


function App() {

  return (
    <div>
      <Router>
        <TopBar />
        <NavBar/>
        {/* <Helmet>
        <title>Island Vogue</title>
        <meta name="description" content="Ethnic & Modest wear sore" />
        <meta name="keywords" content="island, island-vogue, vogue, ethnic-wear, modest-wear, wear-sore " />
      </Helmet> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/bannerSection" element={<BannerSection />} />
          <Route path="/newarrivedslider" element={<NewArrivedSlider/>} />  
          <Route path="/partywear" element={<PartyWear/>} />
          <Route path="/frockstyle" element={<FrockStyle />} />
          <Route path="/angarkha" element={<Angarkha />} />
          <Route path="/cardigan" element={<Cardigans />} />
          <Route path="/newarrived" element={<NewArrived />} />
          <Route path="/aboutus" element = {<AboutUs />} />
          <Route path="/terms" element = {<TermsAndCondition />} />
          <Route path="/exchange" element = {<ExchangePolicy />} />
          <Route path="/delivery" element = {<DeliveryPolicy />} />
          <Route path="/shawl" element = {<Shawl />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

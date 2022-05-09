import React from 'react';
import DisplayProduct from './DisplayProduct/DisplayProduct';
import Footer from './Footer/Footer';
import OfferSlider from './OfferSlider/OfferSlider';
import Topbanner from './Topbanner/Topbanner';

const Home = () => {
    return (
      <div  style={{backgroundColor:'#e3e3e3'}}>
           <Topbanner></Topbanner>
            <OfferSlider></OfferSlider>
            <DisplayProduct></DisplayProduct>
           
            <Footer></Footer>
      </div>
    );
};

export default Home;
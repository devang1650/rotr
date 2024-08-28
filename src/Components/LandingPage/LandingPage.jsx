import React from 'react'
// import Logo from "./../../assets/Logo.png"/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.css"
import image1 from "../../assets/Slider_Images/image1.jpg";
import image2 from "../../assets/Slider_Images/image2.jpg";
import image3 from "../../assets/Slider_Images/image3.jpg";
import image4 from "../../assets/Slider_Images/image4.jpg";
import image5 from "../../assets/Slider_Images/image5.jpg";

const LandingPage = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
   
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  // return (
  //   <>
  //   <section className='Home-Container'>
  //     <div className='Home-Content'>
  //       <h1>ROTARACT CLUB OF</h1>
  //       <h1 style={{color:"#b63146"}}>PALGHAR</h1>
  //     </div>
  //     <img src={Logo} alt="" />
  //   </section>
  //   </>
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default LandingPage
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../public/images/banner1.jpg'
import banner2 from '../../public/images/banner2.jpg'
import banner3 from '../../public/images/banner3.jpg'
import banner4 from '../../public/images/banner4.jpg'
import banner5 from '../../public/images/banner5.jpg'


const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <div id="banner-slider" className="container px-1 py-0 mb-40">
    <Slider {...settings} className="h-50"> {/* Adjust height as needed */}
      <div className="h-full">
        <Image 
          src={banner1} 
          alt="Banner 1" 
          width={800}  // Adjust width as needed
          height={250} // Adjust height as needed
          className="object-cover w-full h-1/2"
        />
      </div>
      <div className="h-full">
        <Image 
          src={banner1} 
          alt="Banner 2" 
          width={800}  // Adjust width as needed
          height={250} // Adjust height as needed
          className="object-cover w-full h-1/2"
        />
      </div>
      <div className="h-full">
        <Image 
          src={banner1} 
          alt="Banner 3" 
          width={800}  // Adjust width as needed
          height={300} // Adjust height as needed
          className="object-cover w-full h-1/2"
        />
      </div>
      <div className="h-full">
        <Image 
          src={banner1} 
          alt="Banner 4" 
          width={800}  // Adjust width as needed
          height={300} // Adjust height as needed
          className="object-cover w-full h-1/2"
        />
      </div>
      <div className="h-full">
        <Image 
          src={banner1} 
          alt="Banner 5" 
          width={800}  // Adjust width as needed
          height={300} // Adjust height as needed
          className="object-cover w-full h-1/2"
        />
      </div>
    </Slider>
  </div>
  );
};

export default BannerSlider;

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
    <div className="container mx-auto px-5 py-7">
      <Slider {...settings}>
        <div>
          <Image src={banner1} alt="Banner 1" className="w-full" />
        </div>
        <div>
          <Image src={banner2} alt="Banner 2" className="w-full" />
        </div>
        <div>
          <Image src={banner3} alt="Banner 3" className="w-full" />
        </div>
        <div>
          <Image src={banner4} alt="Banner 4" className="w-full" />
        </div>
        <div>
          <Image src={banner5} alt="Banner 5" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;

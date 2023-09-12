import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import one from '../../../public/images/pvr/image-110.jpg';
import two from '../../../public/images/pvr/Westwave1 (2).jpg';
import three from '../../../public/images/pvr/image-153.jpg';
import four from '../../../public/images/pvr/image-156.jpg';
import five from '../../../public/images/pvr/image-109.jpg';
import six from '../../../public/images/pvr/Westwave3.jpg';
import seven from '../../../public/images/pvr/image-178.jpg';
import eight from '../../../public/images/pvr/image-209.jpg';
import nine from '../../../public/images/pvr/image-210.jpg';
import ten from '../../../public/images/pvr/image-220.jpg';
import eleven from '../../../public/images/pvr/image000.jpeg';

function Gallery() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="gallery" className="py-5">
        <Fade bottom>
          <h1
            className="text-center fs-2 pb-3"
            style={{ color: 'rgb(2 35 107)', fontWeight: 400 }}
          >
            Take a{' '}
            <span style={{ color: '#c3a554', fontWeight: 600 }}>
              Closer Look
            </span>
          </h1>
        </Fade>
        <Slider {...settings}>
          <div className="slick-carousel">
            <Image src={one} />
          </div>
          <div className="slick-carousel">
            <Image src={two} />
          </div>
          <div className="slick-carousel">
            <Image src={three} />
          </div>
          <div className="slick-carousel">
            <Image src={four} />
          </div>
          <div className="slick-carousel">
            <Image src={five} />
          </div>
          <div className="slick-carousel">
            <Image src={six} />
          </div>
          <div className="slick-carousel">
            <Image src={seven} />
          </div>
          <div className="slick-carousel">
            <Image src={eight} />
          </div>
          <div className="slick-carousel">
            <Image src={nine} />
          </div>
          <div className="slick-carousel">
            <Image src={ten} />
          </div>
          <div className="slick-carousel">
            <Image src={eleven} />
          </div>
        </Slider>
      </div>
    </>
  );
}
export default Gallery;

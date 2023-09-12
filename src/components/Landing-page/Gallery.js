import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import one from '../../../public/images/pearlz/1.jpg';
import two from '../../../public/images/pearlz/2.jpg';
import three from '../../../public/images/pearlz/3.jpg';
import four from '../../../public/images/pearlz/4.jpg';
import six from '../../../public/images/pearlz/6.jpg';
import seven from '../../../public/images/pearlz/7.jpg';
import eight from '../../../public/images/pearlz/8.jpg';
import nine from '../../../public/images/pearlz/9.jpg';
import ten from '../../../public/images/pearlz/10.jpg';
import eleven from '../../../public/images/pearlz/11.jpg';
import twelve from '../../../public/images/pearlz/12.jpg';
import thirteen from '../../../public/images/pearlz/13.jpg';
import Fade from 'react-reveal/Fade';

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
      <div id="gallery">
        <Fade bottom>
          <h1
            style={{ color: '#A5A5A5', fontWeight: '400' }}
            className="text-center fs-2 py-4"
          >
            Take A Closer Look
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
          <div className="slick-carousel">
            <Image src={twelve} />
          </div>
          <div className="slick-carousel">
            <Image src={thirteen} />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Gallery;

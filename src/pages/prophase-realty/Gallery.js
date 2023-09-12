import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';

function Gallery({ images }) {
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
    <div className="py-5 home_gallery ">
      <div className="main-title">
        <Fade bottom>
          <h2 style={{ fontWeight: 700 }}>
            View Our <span style={{ color: '#4dc2e6' }}>gallery</span>
          </h2>
        </Fade>
      </div>{' '}
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
          {images?.map((key) => {
            return (
              <>
                <div className="slick-carousel">
                  <img
                    src={`https://seller.estatedekho.com/${key?.image_path}`}
                    className="mx-2"
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;

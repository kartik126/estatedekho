import React from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from '../../../public/images/pvr/floor1 (1).png';
import img2 from '../../../public/images/pvr/floor1 (2).png';
import { keyBy } from 'lodash';
import Fade from 'react-reveal/Fade';
const data = [
  {
    img: '../../public/images/pearlz/1BED--TYPE-A.jpg',
  },
  {
    img: '../../public/images/pearlz/1BED--TYPE-B.jpg',
  },
  { img: '../../public/images/pearlz/2BED--TYPE-A.jpg' },
  { img: '../../public/images/pearlz/2BED--TYPE-B.jpg' },
  { img: '../../public/images/pearlz/2BED--TYPE-C.jpg' },
  { img: '../../public/images/pearlz/4-BED-DUPLEX.jpg' },
];
function FloorPlan() {
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
    <div
      id="floorplan"
      className=" d-flex flex-md-row flex-sm-column  container pb-5"
    >
      <div className="col-lg-12 col-xs-12">
        <Fade bottom>
          <h1
            style={{
              fontSize: '35px',
              fontWeight: 400,
              color: 'rgb(2 35 107)',
            }}
          >
            Have A Look Into <br />
            <span style={{ color: '#c3a554', fontWeight: 600 }}>
              Available Properties
            </span>
          </h1>
        </Fade>
        <div className="display-col d-flex flex-lg-row flex-sm-column justify-content-between pt-5">
          <Fade bottom>
            <div className="col p-3">
              <Image src={img1} className="shadow-lg" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="col p-3">
              <Image src={img2} className="shadow-lg" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default FloorPlan;

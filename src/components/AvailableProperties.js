import React from 'react';
import Image from 'next/image';
import LandingPageFloor from './LandingPageFloor';
import LandingPageForm from './LandingPageForm';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from '../../public/images/pearlz/1BED--TYPE-A.jpg';
import img2 from '../../public/images/pearlz/1BED--TYPE-B.jpg';
import img3 from '../../public/images/pearlz/2BED--TYPE-A.jpg';
import img4 from '../../public/images/pearlz/2BED--TYPE-B.jpg';
import img5 from '../../public/images/pearlz/2BED--TYPE-C.jpg';
import img6 from '../../public/images/pearlz/4-BED-DUPLEX.jpg';
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
function AvailableProperties() {
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
      className="display-col mt-60 d-flex flex-md-row flex-sm-column  container py-5"
    >
      <div className="col-lg-12 col-xs-12">
        <Fade bottom>
          <h1 style={{ fontSize: '35px', color: '#A5A5A5', fontWeight: 400 }}>
            Have A Look Into <br />
            <span style={{ color: '#d20019', fontWeight: 600 }}>
              Available Properties
            </span>
          </h1>
        </Fade>
        {/* <div>
          <button className="landing-btn ">1 BHK</button>
          <button className="landing-btn">2 BHK</button>
        </div> */}

        <Slider {...settings}>
          <div className="w-100 rounded-4 shadow-md p-2 m-2 my-5">
            <div className="rounded-4 border border-1 overflow-hidden">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={img1} width={400} height={350} />
              </div>
            </div>
          </div>
          <div className="w-100 rounded-4 shadow-md p-2 m-2 my-5">
            <div className="rounded-4 border border-1 overflow-hidden">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={img2} width={400} height={350} />
              </div>
            </div>
          </div>
          <div className="w-100 rounded-4 shadow-md p-2 m-2 my-5">
            <div className="rounded-4 border border-1 overflow-hidden">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={img3} width={400} height={350} />
              </div>
            </div>
          </div>
          <div className="w-100 rounded-4 shadow-md p-2 m-2 my-5">
            <div className="rounded-4 border border-1 overflow-hidden">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={img4} width={400} height={350} />
              </div>
            </div>
          </div>
          <div className="w-100 rounded-4 shadow-md p-2 m-2 my-5">
            <div className="rounded-4 border border-1 overflow-hidden">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={img5} width={400} height={350} />
              </div>
            </div>
          </div>
          <div className="w-100 rounded-4 shadow-md p-2 m-2 my-5">
            <div className="rounded-4 border border-1 overflow-hidden">
              <div className="d-flex align-items-center justify-content-center">
                <Image src={img6} width={400} height={350} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AvailableProperties;

import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
function LandingPageFloor({ images }) {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
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
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      {images?.photo_type == 'floor_plans' && 
        <div className="pt-5" id="floorplan">
          <h1
            className="px-5"
            style={{ fontSize: '30px', color: '#A5A5A5', fontWeight: 400 }}
          >
            Have A Look Into <br />
            <span style={{ color: '#19469B', fontWeight: 600 }}>
              Available Properties
            </span>
          </h1>

          <Slider {...settings}>
            <div className="d-flex justify-content-center display-col">
              {images
                ?.filter((j) => j.photo_type == 'floor_plans')
                .map((key) => {
                  return (
                    <>
                      <div className="pvr-highlight-block col-4 rounded-4 p-3">
                        <div className="rounded-4 border border-1.5 shadow overflow-hidden">
                          <div className="d-flex align-items-center justify-content-center">
                            <Link
                              href={`https://seller.estatedekho.com/images/projects/${key?.image_path}`}
                            >
                              <a target={'_blank'}>
                                <img
                                  src={`https://seller.estatedekho.com/images/projects/${key?.image_path}`}
                                  style={{ width: '100%', height: 370 }}
                                  alt=""
                                  className="cursor-pointer"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </Slider>
        </div>
      }
    </>
  );
}

export default LandingPageFloor;

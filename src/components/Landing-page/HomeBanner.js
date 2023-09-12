import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-slideshow-image/dist/styles.css';
import banner from '../../../public/images/petalzbanner.jpg';
import Image from 'next/image';
import img from '../../../public/images/pearlz/8.jpg';
import Fade from 'react-reveal/Fade';

function HomeBanner() {
  const getConfigurableProps = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    interval: 2000,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
  });
  return (
    <>
      {/* <Image width={350} height={350} src={img} style={{position:"absolute",right:0,zIndex:999}}/> */}

      <div id="home" className="home_container">
        <div className="d-flex flex-row">
          <div className="col-sm-12 col-lg-12 p-5 landing-page-banner">
            <Image src={banner} layout="fill" />

            <div style={{ position: 'absolute', width: '50%' }}>
              <h1
                className="pt-5 animate__animated animate__fadeInUp "
                style={{ color: '#fff', fontSize: '4.5rem', fontWeight: '700' }}
              >
                Petalz By
                <br /> <span style={{ color: '#d20019' }}>Danube</span>
              </h1>
              <p
                className="animate__animated animate__fadeInUp"
                style={{ fontSize: '1rem', fontWeight: '500', color: '#fff' }}
              >
                Experience the Pinnacle of Luxury
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;

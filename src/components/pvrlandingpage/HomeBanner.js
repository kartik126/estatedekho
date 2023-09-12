import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-slideshow-image/dist/styles.css';
import banner from '../../../public/images/pvr/pvrTop.jpg';
import Image from 'next/image';
import img from '../../../public/images/pearlz/8.jpg';
import Fade from 'react-reveal/Fade';
import logo from '../../../public/images/pvr/westwave.png';
import bannerMob from '../../../public/images/pvr/pvrTopMob.png';
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
            <Image className="display" src={banner} layout="fill" />
            <Image className="pvr-banner-mob" src={bannerMob} layout="fill" />
            <div style={{ position: 'absolute', width: '50%' }}>
              <h1
                className="pt-5 animate__animated animate__fadeInUp"
                style={{ color: '#fff', fontWeight: '700' }}
              >
                West Wave By
                <br /> <span style={{ color: '#c3a554' }}>PVR Developers</span>
              </h1>
              <p
                className="animate__animated animate__fadeInUp"
                style={{ fontSize: '1rem', fontWeight: '400', color: '#fff' }}
              >
                PVR WESTWAVE, the Most Premium Grade Office in the Heart of
                Western Hyderabad. A New Global Landmark @ Financial District
              </p>
            </div>
          </div>
          {/* <div className='p-5' style={{position:"absolute",bottom:100,right:100,borderRadius:"100px"}}>
<Image src={logo} width={270} height={260} style={{}}/>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HomeBanner;

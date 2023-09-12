// premium landing PAGE DUBAI
import AvailableProperties from 'components/AvailableProperties';
import LandingPageAbout from 'components/Landing-page/About';
import Gallery from 'components/Landing-page/Gallery';
import Landingpageheader from 'components/Landing-page/header';
import HomeBanner from 'components/Landing-page/HomeBanner';
import LandingPageAmenities from 'components/LandingPageAmenities';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import LPFooter from 'components/Landing-page/Footer';
import ProjectLocation from 'components/Landing-page/ProjectLocation';
import WhyToInvest from 'components/Landing-page/WhyToInvest';
import PaymentPlan from 'components/Landing-page/PaymentPlan';
import Offers from 'components/pvrlandingpage/Offers';
// import header from '../components/Landing-page/header'
function Landingpage() {
  const [color, setcolor] = useState('rgba(255, 255, 255,0)');
  const [linkColor, setlinkColor] = useState('#ffff');
  const listen = () => {
    if (window.scrollY > 100) {
      setcolor('#ffff');
      setlinkColor('#000');
      // alert('hy')
    } else {
      setcolor('rgba(255, 255, 255,0)');
      setlinkColor('#ffff');
      // alert('hello')
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    var currentLocation = window.location.pathname;
    console.log('url======>', currentLocation);
  }, []);

  return (
    <>
      <Landingpageheader color={color} linkColor={linkColor} listen={listen} />
      <div style={{ height: '100vh' }}>
        <HomeBanner />
      </div>
      <LandingPageAbout />
      {/* <AvailableProperties/> */}

      <LandingPageAmenities />
      <Gallery />
      <AvailableProperties />
      <PaymentPlan />
      <WhyToInvest />
      <div style={{ height: '100vh' }}>
        <ProjectLocation />
      </div>

      <LPFooter />
    </>
  );
}

export default Landingpage;

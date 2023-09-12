import LandingPageAbout from 'components/pvrlandingpage/About';
import HomeBanner from 'components/pvrlandingpage/HomeBanner';
import React from 'react';
import Header from '../../components/pvrlandingpage/Header';
import About from '../../components/pvrlandingpage/About';
import { useState } from 'react';
import { useEffect } from 'react';
import ProjectDetails from 'components/pvrlandingpage/ProjectDetails';
import Gallery from 'components/pvrlandingpage/Gallery';
import Footer from 'components/pvrlandingpage/Footer';
import Nearby from 'components/pvrlandingpage/Nearby';
import FloorPlan from 'components/pvrlandingpage/FloorPlan';
import PvrMap from 'components/pvrlandingpage/Map';
import ProjectHighlight from 'components/pvrlandingpage/ProjectHighlight';
import Amenities from 'components/pvrlandingpage/Amenities';
import Offers from 'components/pvrlandingpage/Offers';
import { useSelector, useDispatch } from 'react-redux';
import propertyListing from '../../redux/action/propertyListing';
function Home() {
  const searchData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [color, setcolor] = useState('rgba(255, 255, 255,0)');
  const [linkColor, setlinkColor] = useState('#ffff');

  const listen = () => {
    if (window.scrollY > 100) {
      setcolor('rgb(2 35 107)');
      setlinkColor('#000');
      // alert('hy')
    } else {
      setcolor('rgba(255, 255, 255,0)');
      setlinkColor('#ffff');
      // alert('hello')
    }
  };

  useEffect(() => {
    console.log(
      'useSelector==========================================>',
      searchData
    );
    // dispatch(propertyListing.getSearchData);
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header color={color} listen={listen} />
      <div style={{ height: '100vh' }}>
        <HomeBanner />
      </div>
      <div
        className="d-flex flex-row align-items-center pt-5"
        style={{ height: '100vh', background: '#eaeaea' }}
      >
        <About />
      </div>
      <ProjectHighlight />
      <div className="d-flex flex-row align-items-center px-5 py-5">
        <ProjectDetails />
      </div>
      <Amenities />
      <div style={{ height: '100vh' }}>
        <Gallery />
      </div>

      <Offers />

      <div
        className="d-flex flex-row align-items-center px-5"
        style={{ height: '100%' }}
      >
        <FloorPlan />
      </div>
      <Nearby />
      {/* <div
        className=" px-5 mb-5"
        style={{ height: '50vh', position: 'relative', width: '100%' }}
      >
        <PvrMap />
      </div> */}
      <Footer />
    </>
  );
}

export default Home;

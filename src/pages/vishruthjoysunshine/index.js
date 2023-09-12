import React from 'react';
import About from './About';
import Amenities from './Amenities';
import Banner from './Banner';
import Details from './Details';
import Gallery from './Gallery';
import Header from './Header';
import WhyWe from './WhyWe';
import plan from '../../../public/images/vishruth/4.png';
import Image from 'next/image';
import Footer from './Footer';
function index() {
  return (
    <>
      <Header />
      <div style={{ height: '100vh' }}>
        <Banner />
      </div>
      <div style={{ height: '100vh' }}>
        <Details />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Amenities />
      </div>
      <div>
        <About />
      </div>
      <div className="px-5 col-lg-8 py-5 d-flex flex-column  justify-content-center">
        <h1 style={{ fontSize: '35px', fontWeight: 700, color: '#FDB24D' }}>
          Full Tour
        </h1>
        <iframe
          className="pt-4"
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/tGKjpniHTtw"
          title="Joy Sunshine Project Walk-through"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <WhyWe />
      </div>
      <div className="px-5 col-lg-8 py-4">
        <h1 style={{ fontSize: '35px', fontWeight: 700, color: '#FDB24D' }}>
          Plan Layout
        </h1>
        <Image src={plan} />
      </div>
      <Footer />
    </>
  );
}

export default index;

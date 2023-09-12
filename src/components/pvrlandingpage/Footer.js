import React from 'react';
import logo from '../../../public/images/pvr/logo.png';
import Image from 'next/image';
import CallIcon from '@mui/icons-material/Call';
function LPFooter() {
  return (
    <div
      className="display-col landing-pg-footer row d-flex justify-content-center"
      style={{
        position: 'relative',
        bottom: 0,
        background: 'rgb(2 35 107)',
        height: '260px',
      }}
    >
      <div className="col-sm-4  d-flex flex-column justify-content-center align-items-start px-5">
        <Image className="rounded-3" src={logo} width={170} height={70} />
      </div>
      <div
        className="py-5 d-flex flex-column align-items-start   col-sm-4"
        style={{ color: '#ffff' }}
      >
        <p className="fw-semibold">Quick Links</p>
        <div className="pvr-landing-pg-head">
          <a style={{ fontSize: '13px' }} href="#home">
            <p className="cursor-pointer">Home</p>
          </a>
          <a href="#aboutus" style={{ fontSize: '13px' }}>
            <p className="cursor-pointer">About Us</p>
          </a>
          <a href="#section5" style={{ fontSize: '13px' }}>
            <p className="cursor-pointer">Gallery</p>
          </a>
          <a href="#ProjectDetails" style={{ fontSize: '13px' }}>
            <p className="cursor-pointer">Project Details</p>
          </a>
        </div>
      </div>
      <div className="py-5 col-sm-4" style={{ color: '#ffff' }}>
        <p className="fw-semibold">Phone:</p>
        <p>
          <CallIcon style={{ fontSize: '20px' }} />
          +91 76808 89982
        </p>
        <p className="fw-semibold">Email:</p>
        <p style={{ textAlign: 'justify' }}>campaign@pvrwestwave.com</p>
      </div>
      {/* <h1 className=' py-2 text-center' style={{color:"#19469B",position:"absolute",zIndex:2,bottom:"21rem"}}>Other Properties in this Project and Nearby</h1> */}

      {/* <div className='d-flex flex-row justify-content-center px-5 w-90 ' style={{zIndex:"2",position:"absolute",bottom:"45%"}}>
        <LandingPageCard/>
        <LandingPageCard/>
        <LandingPageCard/>
        <LandingPageCard/>
      </div> */}
      {/* <div
        className="d-flex justify-content-center"
        style={{ background: '#363636', height: '260px' }}
      >
        <div
          className="py-2 d-flex flex-row justify-content-between align-items-center"
          style={{ position: 'absolute', bottom: '10%' }}
        >
          
          <p className="mx-4 fw-semibold" style={{ color: '#fff' }}>
            Home
          </p>
          <p className="mx-4  fw-semibold" style={{ color: '#fff' }}>
            Project Highlight
          </p>
          <p className="mx-4  fw-semibold" style={{ color: '#fff' }}>
            Floor Plans
          </p>
          <p className="mx-4  fw-semibold" style={{ color: '#fff' }}>
            About Us
          </p>
          <p className="mx-4  fw-semibold" style={{ color: '#fff' }}>
            Amenities
          </p>
          <p className="mx-4  fw-semibold" style={{ color: '#fff' }}>
            Gallery
          </p>
        </div>
        <p
          style={{
            color: '#fff',
            position: 'absolute',
            bottom: 0,
            left: 25,
            fontSize: '12px',
          }}
        >
          © All Rights Reserved. Developed and managed by ODMS Pvt Ltd.
        </p>
      </div> */}
      <p
        style={{
          color: '#fff',
          position: 'absolute',
          bottom: 0,
          left: 25,
          fontSize: '12px',
        }}
      >
        © All Rights Reserved. Developed and managed by EstateDekho digi avenues
        PVT LTD.
      </p>
    </div>
  );
}

export default LPFooter;

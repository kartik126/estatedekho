import React from 'react';
import LandingPageCard from './LandingPageCard';
import logo from '../../public/images/jsr logo.png';
import Image from 'next/image';
import CallIcon from '@mui/icons-material/Call';
import apiClient from 'utils/apiClient';
import moment from 'moment';
import ed from '../../public/images/poweredbyed.png';
function LandingPageBottom({ header, footerData, address }) {
  return (
    <div
      className="display-col landing-pg-footer row d-flex justify-content-center"
      style={{
        position: 'relative',
        bottom: 0,
        background: '#363636',
        height: '260px',
      }}
    >
      <div className="col-sm-4  d-flex flex-column justify-content-center align-items-start px-5">
        <div style={{ width: '150px' }}>
          {header ? (
            <img
              className="rounded-3"
              src={apiClient.Urls.imgUrl + header?.logo}
              width={'100%'}
              height={'100%'}
              style={{ background: '#ffff', objectFit: 'contain' }}
            />
          ) : null}
        </div>
        <p
          className=" py-3"
          style={{
            color: '#ffff',
            textAlign: 'justify',
            fontSize: '12px',
            lineHeight: '1.4',
          }}
        >
          {/* JSR GROUP SUNCITY an ISO 9001-2015 Certified Company offers HMDA/DTCP
          approved layout Residential and Commercial Plots. */}
        </p>
      </div>
      <div
        className="py-5 d-flex flex-column align-items-start   col-sm-4"
        style={{ color: '#FDFDFD' }}
      >
        <p className="fw-semibold">Quick Links</p>
        <div>
          <a style={{ fontSize: '13px' }} href="#section1">
            <p className="cursor-pointer">Project Highlight</p>
          </a>
          <a href="#floorplan" style={{ fontSize: '13px' }}>
            <p className="cursor-pointer">Floor Plans</p>
          </a>
          <a href="#section3" style={{ fontSize: '13px' }}>
            <p className="cursor-pointer">About Us</p>
          </a>
          <a href="#section5" style={{ fontSize: '13px' }}>
            <p className="cursor-pointer">Gallery</p>
          </a>
        </div>
      </div>
      <div
        className="py-5 col-sm-4"
        style={{ color: '#FDFDFD', position: 'relative' }}
      >
        {/* <p className="fw-semibold">Phone:</p>
        <p>
          <CallIcon style={{ fontSize: '20px' }} />
          +91 {footerData?.footer_contact1}
          <br />
        </p> */}
        <p className="fw-semibold">Address:</p>
        <p>
          {address?.address_line_1} {address?.address_line_2}
          <br />
          {address?.landmark}
          {address?.locality_name}
          {'-'}
          {address?.pincode}
        </p>
        <div style={{ position: 'absolute', bottom: '5%', left: 5 }}>
          <Image src={ed} width={145} height={22} alt="" />
        </div>
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
          color: '#FDFDFD',
          position: 'absolute',
          bottom: 0,
          left: 25,
          fontSize: '12px',
        }}
      >
        Copyright © {moment().format('yyyy')} EstateDekho digi avenues Pvt. Ltd.
        (Designed and managed by EstateDekho). All rights reserved.
      </p>
    </div>
  );
}

export default LandingPageBottom;

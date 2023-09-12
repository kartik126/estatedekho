import React from 'react';
import logo from '../../public/images/jsr logo.png';
import Image from 'next/image';
import Link from 'next/link';
import apiClient from 'utils/apiClient';
import call from '../../public/images/call.png';
function Landingpageheader({ data, footerData }) {
  return (
    <div
      className=" shadow-sm landing-pg-header d-flex flex-row align-items-center px-3 "
      style={{
        height: '70px',
        position: 'fixed',
        width: '100%',
        zIndex: '999',
        background: '#ffff',
      }}
    >
      <div
        className="col-sm-3 d-flex  align-items-center"
        style={{ height: '100%' }}
      >
        {data ? (
          <img
            src={apiClient.Urls.imgUrl + data.logo}
            alt="logo"
            style={{ maxWidth: '100%', maxHeight: '65%', objectFit: 'contain' }}
          />
        ) : null}
      </div>
      <div className="col-sm-6 d-flex flex-row justify-content-between">
        <li className="display fs-7 fw-semibold cursor-pointer ">
          <a
            style={{
              fontWeight: 400,
              fontSize: '12px',
            }}
            href="#home"
          >
            Home
          </a>{' '}
        </li>

        <li className=" display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 400,
              fontSize: '12px',
            }}
            href="#projecthighlight"
          >
            {' '}
            Project Highlight{' '}
          </a>
        </li>
        <li className=" display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 400,
              fontSize: '12px',
            }}
            href="#projecthighlight"
          >
            {' '}
            Project specifications{' '}
          </a>
        </li>
        <li className=" display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 400,
              fontSize: '12px',
            }}
            href="#Mapview"
          >
            {' '}
            Map view
          </a>
        </li>
        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 400,
              fontSize: '12px',
            }}
            href="#gallery"
          >
            {' '}
            Gallery
          </a>
        </li>
        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 400,
              fontSize: '12px',
            }}
            href="#about"
          >
            About
          </a>{' '}
        </li>
      </div>
      <div className="col-3 d-flex justify-content-sm-end align-items-center px-4">
        <a href={`tel:${footerData?.footer_contact1}`}>
          {/* <Image className="cursor-pointer" src={call} width={25} height={25} /> */}
          {/* <p
            className="cursor-pointer"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              marginTop: '7px',
              marginLeft: '6px',
              color: '#19469B',
            }}
          >
            +91 {footerData?.footer_contact1}
          </p> */}
        </a>
      </div>
    </div>
  );
}

export default Landingpageheader;

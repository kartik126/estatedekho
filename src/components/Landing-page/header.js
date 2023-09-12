import React from 'react';
import logo from '../../../public/images/danubelogo.png';
import Image from 'next/image';
import Link from 'next/link';
import apiClient from 'utils/apiClient';
import { useEffect } from 'react';
import { useState } from 'react';
function Landingpageheader({ data, color, listen, linkColor }) {
  useEffect(() => {
    window.addEventListener('scroll', listen);
  });
  const [active, setactive] = useState(false);
  return (
    <div
      className="landing-pg-header d-flex flex-row align-items-center px-4 "
      style={{
        height: '60px',
        position: 'fixed',
        width: '100%',
        zIndex: '999',
        backgroundColor: color,
      }}
    >
      <div className="col-sm-3 pl-4 mt-4">
        <Image src={logo} width={120} height={50} />
      </div>
      <div className="col-sm-1"></div>
      <div
        className="landing-pg-head col-sm-5 col-9  d-flex flex-row justify-content-around"
        style={{ color: linkColor }}
      >
        <li className="display fs-7 fw-semibold cursor-pointer ">
          <a
            onClick={() => setactive(true)}
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#home"
          >
            Home
          </a>{' '}
        </li>

        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#aboutus"
          >
            About Us
          </a>{' '}
        </li>
        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#amenities"
          >
            Amenities
          </a>{' '}
        </li>

        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
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
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#floorplan"
          >
            {' '}
            Floor Plans
          </a>
        </li>
        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#location"
          >
            Location
          </a>{' '}
        </li>
      </div>
    </div>
  );
}

export default Landingpageheader;

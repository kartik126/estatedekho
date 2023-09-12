import React from 'react';
import logo from '../../../public/images/pvr/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import apiClient from 'utils/apiClient';
import { useEffect } from 'react';
import { useState } from 'react';
function Pvrheader({ data, color, listen, linkColor }) {
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
      <div className="col-sm-3 pl-4 mt-2">
        <Image src={logo} width={100} height={40} />
      </div>
      <div className="col-sm-1"></div>
      <div
        className="pvr-landing-pg-head col-sm-5 col-9  d-flex flex-row justify-content-around"
        style={{ color: '#ffff' }}
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
            href="#ProjectDetails"
          >
            {' '}
            Project Details
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
            Nearby
          </a>{' '}
        </li>
      </div>
    </div>
  );
}

export default Pvrheader;

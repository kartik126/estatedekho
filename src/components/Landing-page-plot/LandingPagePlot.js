import { TextField } from '@mui/material';
import Landingpageheader from 'components/Landingpageheader';
import React from 'react';
import AboutDeveloper from './AboutDeveloper';
import LandingPageDetail from './LandingPageDetail';
import LandingPageForm from './LandingPageForm';
import PlotDetail from './PlotDetail';
import PoweredBy from '../../../public/images/Powered_By__1_-removebg-preview.png';
import Image from 'next/image';
import Mapview from './Mapview';
import Gallery from './Gallery';
import moment from 'moment';

function LandingPagePlot({ header, details, clientDetails, about }) {
  return (
    <>
      <Landingpageheader data={header} />
      {details?.featured_image?.includes('projects') ||
      details?.featured_image_path?.includes('projects') ? (
        <>
          <img
            id="home"
            src={`https://seller.estatedekho.com/${
              details?.featured_image_path || details?.featured_image
            }`}
            width={'100%'}
            height={'100%'}
            alt=""
            style={{
              filter: 'brightness(0.7)',
              position: 'relative',
            }}
          />
        </>
      ) : (
        <>
          <img
            id="home"
            src={`https://seller.estatedekho.com/images/projects/${
              details?.featured_image_path || details?.featured_image
            }`}
            width={'100%'}
            height={'100%'}
            style={{
              filter: 'brightness(0.7)',
            }}
            alt=""
          />
        </>
      )}
      <div style={{ position: 'relative' }}>
        <LandingPageForm />
        <LandingPageDetail details={details} />
        <PlotDetail details={details} />
        <Mapview details={details} />
        <Gallery />
        <AboutDeveloper
          details={details}
          clientDetails={clientDetails}
          about={about}
        />
      </div>
      <div
        className="py-2 "
        style={{
          background: '#222',
          color: 'rgb(150 150 150)',
          fontSize: '10px',
          paddingLeft: '50px',
        }}
      >
        Copyright © {moment().format('yyyy')} EstateDekho digi avenues Pvt. Ltd.
        (Designed and managed by EstateDekho). All rights reserved.
      </div>
      <div style={{ position: 'fixed', right: 0, top: 526 }}>
        <Image src={PoweredBy} width={200} height={125} />
      </div>
      {/* <Image src={PoweredBy} width={110} height={19} style={{position:'static'}}/> */}
    </>
  );
}

export default LandingPagePlot;

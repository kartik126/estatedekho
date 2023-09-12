import React from 'react';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShowerIcon from '@mui/icons-material/Shower';
import BedIcon from '@mui/icons-material/Bed';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Fade from 'react-reveal/Fade';

import moment from 'moment';
function About({ details, Type,clientDetails }) {
  return (
    <div className="pb-5 about_property container" id="aboutus">
      <div className="main-title">
        <p>Property Description</p>
        <Fade bottom>
          <h2 style={{ fontWeight: 700 }}>
            About{' '}
            <span style={{ color: '#4dc2e6' }}>
              {details?.project_name}
              {details?.plot_name}
            </span>
          </h2>
        </Fade>
      </div>{' '}
      <p
        style={{ color: '#a0a0a0', fontSize: '16px' }}
        className="text-center py-4"
      >
        {details?.project_description || details?.plot_description}
      </p>
      <div className="property_config">
        <div className="single_config">
          <div className="icon">
            <SquareFootIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
          </div>{' '}
          <span className="counter">{details?.area || details?.plot_area}</span>
          {details?.area && <i>Area Square Feet</i>}
          {details?.plot_area && <i>Area Square Yard</i>}
        </div>{' '}
        <div className="single_config">
          <div className="icon">
            <CalendarMonthIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
          </div>{' '}
          {Type == 'property' ? (
            <span className="counter">
              {' '}
              {moment(details?.launch_date).isBefore(moment())
                ? 'Ready To Move'
                : moment(details?.launch_date).format('MMM yyyy')}
            </span>
          ) : (
            <span className="counter">Immediate</span>
          )}
          <i>Possession</i>
        </div>{' '}
        {details?.bathroom && (
          <div className="single_config">
            <div className="icon">
              <ShowerIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
            </div>{' '}
            <span className="counter">0{details?.bathroom}</span>
            <i>Bath Rooms</i>
          </div>
        )}
        {details?.bhk && (
          <div className="single_config">
            <div className="icon">
              <BedIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
            </div>{' '}
            {/* End of .icon */}
            <span className="counter">0{details?.bhk}</span>
            <i>Bed Rooms</i>
          </div>
        )}
        <div className="single_config">
          <div className="icon">
            <CurrencyRupeeOutlinedIcon
              style={{ fontSize: '80px', color: '#4dc2e6' }}
            />
          </div>{' '}
          <span className="counter">
            ₹ {details?.cost_per_sqft || details?.price_per_sqyd}
          </span>
          {details?.cost_per_sqft && <i>Cost Per Sqft.</i>}
          {details?.price_per_sqyd && <i>Cost Per Sqyd</i>}
        </div>
      </div>
    </div>
  );
}

export default About;

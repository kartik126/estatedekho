import React from 'react';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShowerIcon from '@mui/icons-material/Shower';
import BedIcon from '@mui/icons-material/Bed';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import Fade from 'react-reveal/Fade';

import moment from 'moment';
function About({ details }) {
  return (
    <div className="pb-5 about_property container" id="aboutus">
      <div className="main-title">
        <p>Property Description</p>
        <Fade bottom>
          <h2 style={{ fontWeight: 700 }}>
            About{' '}
            <span style={{ color: '#4dc2e6' }}>{details?.project_name}</span>
          </h2>
        </Fade>
      </div>{' '}
      {/* End of .main-title */}
      <div className="property_config">
        <div className="single_config">
          <div className="icon">
            <SquareFootIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
          </div>{' '}
          {/* End of .icon */}
          <span className="counter">{details?.area}</span>
          <i>Area Square Feet</i>
        </div>{' '}
        {/* End of .config */}
        <div className="single_config">
          <div className="icon">
            <CalendarMonthIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
          </div>{' '}
          {/* End of .icon */}
          <span className="counter">
            {' '}
            {moment(details?.launch_date).isBefore(moment())
              ? 'Ready To Move'
              : moment(details?.launch_date).format('MMM yyyy')}
          </span>
          <i>Possession</i>
        </div>{' '}
        {/* End of .config */}
        <div className="single_config">
          <div className="icon">
            <ShowerIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
          </div>{' '}
          {/* End of .icon */}
          <span className="counter">0{details?.bathroom}</span>
          <i>Bath Rooms</i>
        </div>{' '}
        {/* End of .config */}
        <div className="single_config">
          <div className="icon">
            <BedIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
          </div>{' '}
          {/* End of .icon */}
          <span className="counter">0{details?.bhk}</span>
          <i>Bed Rooms</i>
        </div>{' '}
        {/* End of .config */}
        {/* <div className="single_config">
          <div className="icon">
            <LocalParkingIcon style={{ fontSize: '80px', color: '#4dc2e6' }} />
          </div>{' '}
          <span className="counter">02</span>
          <i>Car Parking</i>
        </div> */}
        {/* End of .config */}
      </div>{' '}
      {/* End of .property_config */}
    </div>
  );
}

export default About;

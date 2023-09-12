import React from 'react';
import Image from 'next/image';
import bg from '../../../public/images/dotback.png';
import img from '../../../public/images/jsr srivaikuntam 4.jpg';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import apiClient from 'utils/apiClient';
import { useState } from 'react';
import banner from '../../../public/images/petalzbanner.jpg';
import Fade from 'react-reveal/Fade';
import sidebanner from '../../../public/images/pvr/channel partner-06.jpg';
// import ww from '../../../public/images/pvr/westwave.png'

function LandingPageAbout({ details, about }) {
  const [active, setActive] = useState(true);
  return (
    <div
      style={{ height: '100%' }}
      id="aboutus"
      className="display-col d-flex justify-content-between align-items-center flex-md-row flex-sm-column container py-5 "
    >
      <Fade left>
        <div className="col-md-6 col-sm-12 ">
          <h1
            style={{
              fontSize: '35px',
              color: 'rgb(2 35 107)',
              fontWeight: 400,
            }}
          >
            Know About <br />
            <span style={{ color: '#c3a554', fontWeight: 600 }}>
              {' '}
              PVR Developers
            </span>
          </h1>

          <div className="py-4">
            {active ? (
              <button
                onClick={() => setActive(true)}
                className="landing-btn px-4 py-2 animate__animated animate__fadeInLeft"
                style={{ background: 'rgb(2 35 107)' }}
              >
                About Project
              </button>
            ) : (
              <button
                onClick={() => setActive(true)}
                style={{ backgroundColor: '#ffff', color: 'black' }}
                className="landing-btn px-4 py-2 animate__animated animate__fadeInLeft"
              >
                About Project
              </button>
            )}
            {active ? (
              <button
                onClick={() => setActive(false)}
                style={{ backgroundColor: '#ffff', color: 'black' }}
                className="landing-btn px-4 py-2 animate__animated animate__fadeInLeft"
              >
                About Developer
              </button>
            ) : (
              <button
                style={{ background: 'rgb(2 35 107)' }}
                onClick={() => setActive(false)}
                className="landing-btn px-4 py-2 animate__animated animate__fadeInLeft"
              >
                About Developer
              </button>
            )}
          </div>

          {active ? (
            <>
              <h1
                className="animate__animated animate__fadeInLeft"
                style={{ color: 'rgb(116 116 116)', fontSize: '25px' }}
              >
                {/* {details.plot_type} */}
                West Wave by <br />
                {/* {about.about_name} */}
                PVR Developers
              </h1>

              <p
                className="fs-6 animate__animated animate__fadeInLeft"
                style={{ color: 'rgb(116 116 116)' }}
              >
                {/* {about.about_description} */}
                Ongoing commercial office project “WEST WAVE” a New Global
                Landmark at Financial District. West Wave is of ~2.1 mn sq ft in
                two towers with Grade A specifications with just behind One West
                (ADP Hyderabad) and right opposite to Wave Rock (Accenture
                Building), beside Shri Ram Global School.
              </p>
            </>
          ) : (
            <>
              <h1
                className="animate__animated animate__fadeInLeft"
                style={{ color: 'rgb(116 116 116)', fontSize: '25px' }}
              >
                {/* {about.about_name} */}
                PVR Developers
              </h1>
              <p
                className="fs-6 animate__animated animate__fadeInLeft"
                style={{ color: 'rgb(116 116 116)' }}
              >
                PVR DEVELOPERS INDIA PVT LTD.,over the years has evolved into a
                Re-puted & Reliable group that has sought to Thrive year on year
                through its Focused Approach, Continuous Efforts, Timely
                Execution & Delivery of our Projects as Promised to our Clients
                & Stake Holders. Our Idea is to Churn out Abodes & Landmarks of
                Highest Quality with Thoughtful & Practical Communities & Spaces
                that People Enjoy through their Lives.
              </p>
            </>
          )}
        </div>
      </Fade>

      <div
        className="display col-md-6 col-sm-12 px-sm-5"
        style={{ position: 'relative' }}
      >
        <div className=" d-flex justify-content-lg-end justify-content-sm-center px-5">
          <Image className="rounded-4" src={sidebanner} />
        </div>
      </div>
    </div>
  );
}

export default LandingPageAbout;

import React from 'react';
import Image from 'next/image';
import bg from '../../../public/images/dotback.png';
import img from '../../../public/images/jsr srivaikuntam 4.jpg';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import apiClient from 'utils/apiClient';
import { useState } from 'react';
import video from '../../../public/images/aboutvideo.gif';
import banner from '../../../public/images/petalzbanner.jpg';
import Fade from 'react-reveal/Fade';

function LandingPageAbout({ details, about }) {
  const [active, setActive] = useState(true);
  return (
    <div
      style={{ height: '100%' }}
      id="aboutus"
      className="display-col d-flex justify-content-between flex-md-row flex-sm-column  container py-5"
    >
      <Fade left>
        <div className="col-md-6 col-sm-12 ">
          <h1 style={{ fontSize: '35px', color: '#A5A5A5', fontWeight: 400 }}>
            Know About <br />
            <span style={{ color: '#d20019', fontWeight: 600 }}>
              {' '}
              Danube Properties
            </span>
          </h1>

          <div className="py-4">
            {active ? (
              <button
                onClick={() => setActive(true)}
                className="landing-btn px-4 py-2 animate__animated animate__fadeInLeft"
              >
                About Project
              </button>
            ) : (
              <button
                onClick={() => setActive(true)}
                style={{ backgroundColor: '#d3d3d3', color: 'black' }}
                className="landing-btn px-4 py-2 animate__animated animate__fadeInLeft"
              >
                About Project
              </button>
            )}
            {active ? (
              <button
                onClick={() => setActive(false)}
                style={{ backgroundColor: '#d3d3d3', color: 'black' }}
                className="landing-btn px-4 py-2 animate__animated animate__fadeInLeft"
              >
                About Developer
              </button>
            ) : (
              <button
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
                style={{ color: '#6D6D6D', fontSize: '25px' }}
              >
                {/* {details.plot_type} */}
                Petalz by <br />
                {/* {about.about_name} */}
                Danube Properties
              </h1>

              <p
                className="fs-6 animate__animated animate__fadeInLeft"
                style={{ color: '#A5A5A5' }}
              >
                {/* {about.about_description} */}
                Presenting Petalz by Danube Properties, a new residential launch
                that features studios, 1, 2 & 3-bedroom apartments located at Al
                Warsan, Dubai. Experience a lifestyle that meets all the
                expectations while also providing a wealth of opportunities to
                stimulate ones enthusiasm and enable one to enjoy a life filled
                with celebration here. Full-fledged lifestyle consists of a
                modern way of living with better amenities and genuine
                availability that is best for you in all regards. Ultimate décor
                and designs work together to create a warm inside that looks
                excellent and an exterior that makes people happy.
              </p>
            </>
          ) : (
            <>
              <h1
                className="animate__animated animate__fadeInLeft"
                style={{ color: '#6D6D6D', fontSize: '25px' }}
              >
                {/* {about.about_name} */}
                Danube Properties
              </h1>
              <p
                className="fs-6 animate__animated animate__fadeInLeft"
                style={{ color: '#A5A5A5' }}
              >
                {/* {details.plot_description} */}
                Danube Group has grown from a single store started in Deira,
                Dubai 25 years ago to one of the most trusted and household
                brand in the Middle-East. The multi-million dollar Group has
                been consistently increasing its global footprint and annual
                revenue supported by ever-growing family of over 2,500 staff.
                Danube Group is head-quartered in Dubai and operates in 9
                countries across Middle-East & Asia.
              </p>
            </>
          )}
        </div>
      </Fade>

      <div
        className="col-md-6 col-sm-12 px-sm-5"
        style={{ position: 'relative' }}
      >
        <div className=" d-flex justify-content-lg-end justify-content-sm-center px-5">
          <Image className="rounded-4" src={video} width={300} height={490} />
        </div>
      </div>
    </div>
  );
}

export default LandingPageAbout;

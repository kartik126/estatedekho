import React from 'react';
import Fade from 'react-reveal/Fade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import illust from '../../../public/images/pvr/image-147.jpg';
import bg from '../../../public/images/pvr/image-109.jpg';
function ProjectDetails() {
  return (
    <div id="ProjectDetails" className="row d-flex flex-column py-5">
      <Fade bottom>
        <h1
          className="px-4 text-left"
          style={{
            fontSize: '35px',
            color: 'rgb(2 35 107)',
            fontWeight: 400,
          }}
        >
          Project{' '}
          <span style={{ color: '#c3a554', fontWeight: 600 }}>Details</span>
        </h1>
      </Fade>

      <Fade bottom>
        <div className="display-col d-flex flex-row  py-5">
          <div className="col-lg-7 col-sm-12">
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />

              <p style={{ fontWeight: 500 }}>
                {' '}
                GHMC Approved (LP No.1/C20/14099/2019), RERA (Applied)
              </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />
              <p style={{ fontWeight: 500 }}>
                {' '}
                Two Towers (A & B) with 3 Basement & 4 Podium Parking + 13
                floors.
              </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />

              <p style={{ fontWeight: 500 }}>
                {' '}
                Project Handover by 36 months, Post RERA Approval.
              </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />
              <p style={{ fontWeight: 500 }}>
                {' '}
                Adaptable design to suit multi-occupants
              </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />
              <p style={{ fontWeight: 500 }}>
                {' '}
                Lustrous Glass Facade represents brilliance of efficient
                architecture
              </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />
              <p style={{ fontWeight: 500 }}>
                {' '}
                Floor to Floor height of 4 m for better air circulation and
                positive ambiance
              </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />
              <p style={{ fontWeight: 500 }}>
                {' '}
                Refuge area provided in upper floors as per NBC standards{' '}
              </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />
              <p style={{ fontWeight: 500 }}> Ample Car Parking </p>
            </div>
            <div className="d-flex flex-row">
              <CheckCircleIcon
                className="mx-2"
                style={{ color: 'rgb(2 35 107)' }}
              />
              <p style={{ fontWeight: 500 }}> IGBC Gold Certified </p>
            </div>
          </div>
          {/* <div className="col mx-5" style={{width:"350px"}}> */}
          {/* <div className="d-flex flex-row">
              <CheckCircleIcon className="mx-2" style={{ color: 'rgb(2 35 107)' }} />
              <p style={{ fontWeight: 500 }}>
                {' '}
                High speed lifts with DCS (Destination Control System) to
                optimize the movement to desired floors.
              </p>
            </div> */}
          {/* <div className="d-flex flex-row">
              <CheckCircleIcon className="mx-2" style={{ color: 'rgb(2 35 107)' }} />
              <p style={{ fontWeight: 500 }}>
                {' '}
                Breathe easy lifts with a capacity of 20+ passengers.
              </p>
            </div> */}
          {/* <div className="d-flex flex-row">
              <CheckCircleIcon className="mx-2" style={{ color: 'rgb(2 35 107)' }} />
              <p style={{ fontWeight: 500 }}> Central Air-conditioning </p>
            </div> */}
          {/* <div className="d-flex flex-row">
              <CheckCircleIcon className="mx-2" style={{ color: 'rgb(2 35 107)' }} />
              <p style={{ fontWeight: 500 }}> 100% Power backup </p>
            </div> */}
          {/* <div className="d-flex flex-row">
              <CheckCircleIcon className="mx-2" style={{ color: 'rgb(2 35 107)' }} />
              <p style={{ fontWeight: 500 }}>
                {' '}
                Round the clock CCTV Surveillance{' '}
              </p>
            </div> */}

          {/* </div> */}
          <div className="m-t col-lg-5 col-sm-12 d-flex flex-row justify-content-center align-items-center pvr-details">
            <div className="display d-flex align-items-center mx-5 p-2 rounded-5 shadow-lg ">
              <Image src={bg} width={450} height={300} className="rounded-5" />
            </div>
            <div
              className="display d-flex align-items-center mx-5 p-1 rounded-5 shadow-lg "
              style={{
                position: 'absolute',
                background: '#fff',
                bottom: -80,
                right: -80,
              }}
            >
              <Image
                src={illust}
                width={240}
                height={160}
                className=" rounded-5"
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProjectDetails;

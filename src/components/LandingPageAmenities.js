import React from 'react';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimeToLeaveSharpIcon from '@mui/icons-material/TimeToLeaveSharp';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import MovieIcon from '@mui/icons-material/Movie';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SpaIcon from '@mui/icons-material/Spa';
import YardIcon from '@mui/icons-material/Yard';
import Fade from 'react-reveal/Fade';
import HotTubIcon from '@mui/icons-material/HotTub';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
function LandingPageAmenities() {
  return (
    <div
      id="amenities"
      className="padding-0 d-flex justify-content-center p-5 h-fit"
      style={{ background: '#F4F7FA', height: '100vh' }}
    >
      <div
        style={{ background: '#fff' }}
        className="landing-pg-amenities w-90 d-flex flex-column justify-content-center shadow-sm border rounded-3"
      >
        <div>
          <Fade bottom delay={200}>
            <div className="text-center pb-5">
              <h1 className="fs-4" style={{ color: '#A5A5A5' }}>
                Facilities You Get
              </h1>
              <h1 className="fs-4 fw-semibold" style={{ color: '#d20019' }}>
                Amenities
              </h1>
            </div>
          </Fade>
          <div className="px-5 row">
            <Fade bottom>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <TimeToLeaveSharpIcon
                    style={{ color: '#d20019', fontSize: '28px' }}
                  />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Car Parking
                </p>
              </div>
            </Fade>
            <Fade bottom delay={400}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <PoolIcon style={{ color: '#d20019', fontSize: '28px' }} />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Swimming Pool
                </p>
              </div>
            </Fade>
            <Fade bottom delay={600}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <FitnessCenterIcon
                    style={{ color: '#d20019', fontSize: '28px' }}
                  />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Gym
                </p>
              </div>
            </Fade>
            <Fade bottom delay={800}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <OutdoorGrillIcon
                    style={{ color: '#d20019', fontSize: '28px' }}
                  />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Bbq{' '}
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1000}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <BedroomBabyIcon
                    style={{ color: '#d20019', fontSize: '28px' }}
                  />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Kids Playing Area
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <MovieIcon style={{ color: '#d20019', fontSize: '28px' }} />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Open Air Cinema
                </p>
              </div>
            </Fade>
          </div>
          <div className="px-5 my-4 row">
            <Fade bottom delay={1200}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <BusinessCenterIcon
                    style={{ color: '#d20019', fontSize: '28px' }}
                  />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Business Center
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <SportsTennisIcon
                    style={{ color: '#d20019', fontSize: '28px' }}
                  />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Padel Tennis
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <SpaIcon style={{ color: '#d20019', fontSize: '28px' }} />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Wellness Center
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <YardIcon style={{ color: '#d20019', fontSize: '28px' }} />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Garden
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <GolfCourseIcon
                    style={{ color: '#d20019', fontSize: '28px' }}
                  />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Mini Golf
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <HotTubIcon style={{ color: '#d20019', fontSize: '28px' }} />
                </div>
                <p
                  className="py-3 "
                  style={{
                    color: '#6D6D6D',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                >
                  Jacuzzi
                </p>
              </div>
            </Fade>
            {/* <div className="col pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
            <div className=" p-2 rounded-5" style={{ background: '#F4F7FA' }}>
              <BroadcastOnHomeIcon
                style={{ color: '#d20019', fontSize: '28px' }}
              />
            </div>
            <p
              className="py-3 "
              style={{ color: '#6D6D6D', fontSize: '13px', fontWeight: '500' }}
            >
             Smart Home
            </p>
          </div>
          <div className="col pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
            <div className=" p-2 rounded-5" style={{ background: '#F4F7FA' }}>
              <TimeToLeaveSharpIcon
                style={{ color: '#19469B', fontSize: '28px' }}
              />
            </div>
            <p
              className="py-3 "
              style={{ color: '#6D6D6D', fontSize: '13px', fontWeight: '500' }}
            >
              Car Parking
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageAmenities;

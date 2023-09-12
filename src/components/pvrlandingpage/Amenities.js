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
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import BoltIcon from '@mui/icons-material/Bolt';
import FenceIcon from '@mui/icons-material/Fence';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GradeIcon from '@mui/icons-material/Grade';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
function Amenities() {
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
              <h1
                className="m-t text-center fs-2"
                style={{ color: 'rgb(2 35 107)', fontWeight: 400 }}
              >
                Facilities{' '}
                <span style={{ color: '#c3a554', fontWeight: 600 }}>
                  You Get
                </span>
              </h1>
              {/* <h1 className="fs-4 fw-semibold" style={{ color: 'rgb(2 35 107)' }}>
              Amenities
            </h1> */}
            </div>
          </Fade>
          <div className="px-5 row">
            <Fade bottom>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <TimeToLeaveSharpIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <DoorSlidingIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  Lifts
                </p>
              </div>
            </Fade>
            <Fade bottom delay={600}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <BoltIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  24/7 Power Backup
                </p>
              </div>
            </Fade>
            <Fade bottom delay={800}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <FenceIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  Gated Community
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1000}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <CameraswitchIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  CCTV Surveillance
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <AcUnitIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  Air-conditioning
                </p>
              </div>
            </Fade>
          </div>
          <div className="px-5 my-4 row">
            <Fade bottom delay={1200}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <BusinessCenterIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <GradeIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  Grade A Building
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <FitnessCenterIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
            <Fade bottom delay={1200}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <YardIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  Landscape Garden
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <SelfImprovementIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  Yoga Center
                </p>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <LocalCafeIcon
                    style={{ color: 'rgb(2 35 107)', fontSize: '28px' }}
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
                  Cafeteria
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

export default Amenities;

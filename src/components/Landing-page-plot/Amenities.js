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
import DeckIcon from '@mui/icons-material/Deck';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GradeIcon from '@mui/icons-material/Grade';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SecurityIcon from '@mui/icons-material/Security';
import WifiIcon from '@mui/icons-material/Wifi';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
function Amenities() {
  return (
    <div className="px-5 py-4 m-3 border border-1 rounded-2 col-lg-8 col-sm-6">
      <h1
        style={{
          fontWeight: '600',
          fontSize: '35px',
          color: '#333',
        }}
      >
        Amenities
      </h1>
      <div style={{ border: '2px solid #19469b', width: '50px' }}></div>
      <div
        id="amenities"
        className="padding-0 d-flex justify-content-center h-fit my-4"
      >
        <div
          style={{ background: '#fff' }}
          className="landing-pg-amenities d-flex flex-column justify-content-center shadow-sm border rounded-3"
        >
          <div>
            <Fade bottom delay={200}>
              <div className="text-center pb-5"></div>
            </Fade>
            <div className="px-5 row">
              <Fade bottom>
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <BedroomBabyIcon
                      style={{ color: '#000', fontSize: '28px' }}
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
                    {`Children's play area`}
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={400}>
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <SecurityIcon style={{ color: '#000', fontSize: '28px' }} />
                  </div>
                  <p
                    className="py-3 "
                    style={{
                      color: '#6D6D6D',
                      fontSize: '13px',
                      fontWeight: '500',
                    }}
                  >
                    24/7 Security
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={600}>
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <BoltIcon style={{ color: '#000', fontSize: '28px' }} />
                  </div>
                  <p
                    className="py-3 text-center"
                    style={{
                      color: '#6D6D6D',
                      fontSize: '13px',
                      fontWeight: '500',
                    }}
                  >
                    Underground Electricity
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={800}>
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <DeckIcon style={{ color: '#000', fontSize: '28px' }} />
                  </div>
                  <p
                    className="py-3 "
                    style={{
                      color: '#6D6D6D',
                      fontSize: '13px',
                      fontWeight: '500',
                    }}
                  >
                    Gazebo
                  </p>
                </div>
              </Fade>
            </div>
            <div className="px-5 my-4 row">
              <Fade bottom delay={1000}>
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <CameraswitchIcon
                      style={{ color: '#000', fontSize: '28px' }}
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
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <WifiIcon style={{ color: '#000', fontSize: '28px' }} />
                  </div>
                  <p
                    className="py-3 "
                    style={{
                      color: '#6D6D6D',
                      fontSize: '13px',
                      fontWeight: '500',
                    }}
                  >
                    Internet
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={1200}>
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <SolarPowerIcon
                      style={{ color: '#000', fontSize: '28px' }}
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
                    Solar Powered Lights
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={1200}>
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: 'rgb(253, 178, 77)' }}
                  >
                    <YardIcon style={{ color: '#000', fontSize: '28px' }} />
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
    </div>
  );
}

export default Amenities;

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
import WaterIcon from '@mui/icons-material/Water';
import ParkIcon from '@mui/icons-material/Park';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import GroupsIcon from '@mui/icons-material/Groups';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import SportsCricketOutlinedIcon from '@mui/icons-material/SportsCricketOutlined';
import FenceOutlinedIcon from '@mui/icons-material/FenceOutlined';
import HomeIcon from '@mui/icons-material/Home';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SecurityIcon from '@mui/icons-material/Security';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

function LandingPageAmenities({ amenities, details }) {
  return (
    <>
      <section className="amenities_property">
        <div className="container">
          <div className="main-title2 text-center">
            <Fade bottom>
              <h2 style={{ fontWeight: 700 }}>
                <span style={{ color: '#4dc2e6' }}>Amenities</span> at{' '}
                {details?.project_name}
              </h2>
            </Fade>
          </div>
          <div
            id="amenities"
            className="padding-0 d-flex justify-content-center p-5 h-fit"
            style={{ background: '#F4F7FA', height: '100vh' }}
          >
            <div
              style={{ background: '#fff' }}
              className="landing-pg-amenities w-100 d-flex flex-column justify-content-center shadow-sm border rounded-3"
            >
              <div className="px-5 row">
                {`${amenities}.24hrs_water_supply` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <WaterIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
                      />
                    </div>
                    <p
                      className="py-3 "
                      style={{
                        color: '#6D6D6D',
                        fontSize: '13px',
                        fontWeight: '500',
                        textAlign: 'center',
                      }}
                    >
                      24 Hours Water Supply
                    </p>
                  </div>
                )}
                {`${amenities}.tree_plantation` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <ParkIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Tree Plantation
                    </p>
                  </div>
                )}
                {`${amenities}.cafeteria` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <LocalCafeIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                )}
                {`${amenities}.club_house` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <GroupsIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Club House
                    </p>
                  </div>
                )}
                {`${amenities}.car_parking` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <DirectionsCarOutlinedIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                )}
                {`${amenities}.cricket_court` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <SportsCricketOutlinedIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Cricket Court
                    </p>
                  </div>
                )}
              </div>
              <div className="px-5 row pt-3">
                {`${amenities}.garden` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <YardIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Garden
                    </p>
                  </div>
                )}
                {`${amenities}.outdoor_games` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <SportsBaseballIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Outdoor Games
                    </p>
                  </div>
                )}
                {`${amenities}.children_play_area` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <BedroomBabyIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Children Play Area
                    </p>
                  </div>
                )}
                {`${amenities}.security_personnel` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <SecurityIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Security Personnel
                    </p>
                  </div>
                )}
                {`${amenities}.spa` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <SpaIcon style={{ color: '#4dc2e6', fontSize: '28px' }} />
                    </div>
                    <p
                      className="py-3 "
                      style={{
                        color: '#6D6D6D',
                        fontSize: '13px',
                        fontWeight: '500',
                      }}
                    >
                      Spa
                    </p>
                  </div>
                )}
                {`${amenities}.street_light` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <WbIncandescentIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Street Light
                    </p>
                  </div>
                )}
              </div>
              <div className="px-5 row pt-3">
                {`${amenities}.gated_community` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <FenceOutlinedIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                )}
                {`${amenities}.guest_house` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <HomeIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Guest House
                    </p>
                  </div>
                )}
                {`${amenities}.gym` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <FitnessCenterIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                )}
                {`${amenities}.indoor_games` && (
                  <div className="col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                    <div
                      className=" p-2 rounded-5"
                      style={{ background: '#F4F7FA' }}
                    >
                      <VideogameAssetIcon
                        style={{ color: '#4dc2e6', fontSize: '28px' }}
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
                      Indoor Games
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPageAmenities;

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
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import GroupsIcon from '@mui/icons-material/Groups';
import GamesIcon from '@mui/icons-material/Games';
import ToysIcon from '@mui/icons-material/Toys';
import ParkIcon from '@mui/icons-material/Park';
import SecurityIcon from '@mui/icons-material/Security';
import ShowerIcon from '@mui/icons-material/Shower';
import FenceIcon from '@mui/icons-material/Fence';
import HouseIcon from '@mui/icons-material/House';
import WaterIcon from '@mui/icons-material/Water';
function Facilities({ amenities }) {
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
                className="fs-4"
                style={{ color: '#A5A5A5', fontWeight: 400 }}
              >
                Facilities You Get
              </h1>
              <h1
                className="fs-4 fw-semibold"
                style={{ color: 'rgb(25, 70, 155)', fontWeight: 600 }}
              >
                Amenities
              </h1>
            </div>
          </Fade>
          <div className="display-col px-5 d-flex flex-row">
            <Fade bottom>
              {amenities?.car_parking == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <TimeToLeaveSharpIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={400}>
              {amenities?.cafeteria == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <LocalCafeIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={600}>
              {amenities?.gym == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <FitnessCenterIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={800}>
              {amenities?.guest_house == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <GroupsIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={1000}>
              {amenities?.indoor_games == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <GamesIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={1200}>
              {amenities?.children_play_area == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <ToysIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
          </div>
          <div className="display-col px-5 my-4 d-flex flex-row ">
            <Fade bottom delay={1200}>
              {amenities?.tree_plantation == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <ParkIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={1200}>
              <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                <div
                  className=" p-2 rounded-5"
                  style={{ background: '#F4F7FA' }}
                >
                  <SecurityIcon
                    style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={1200}>
              {amenities?.spa == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <SpaIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
                    Wellness Center
                  </p>
                </div>
              )}
            </Fade>
            <Fade bottom delay={1200}>
              {amenities?.garden == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <YardIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={1200}>
              {amenities?.gated_community == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <FenceIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={1200}>
              {amenities?.guest_house == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <HouseIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
            </Fade>
            <Fade bottom delay={1200}>
              {amenities?.rain_water_harvesting == 1 && (
                <div className="pvr-highlight-block col-sm pt-3 d-flex flex-column justify-content-center align-items-center shadow  rounded mx-1">
                  <div
                    className=" p-2 rounded-5"
                    style={{ background: '#F4F7FA' }}
                  >
                    <WaterIcon
                      style={{ color: 'rgb(25, 70, 155)', fontSize: '28px' }}
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
                    Rain Water Harvesting
                  </p>
                </div>
              )}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;

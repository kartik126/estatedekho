import Image from 'next/image';
import React from 'react';
import maintainance from '../../../public/images/amenities-ed/maintainance.png';
import waterstorage from '../../../public/images/amenities-ed/waterstorage.png';
import amphitheater from '../../../public/images/amenities-ed/Amphitheater.png';
import borewell from '../../../public/images/amenities-ed/Borewell.png';
import cafeteria from '../../../public/images/amenities-ed/Cafeteria.png';
import carparking from '../../../public/images/amenities-ed/Car parking.png';
import clubhouse from '../../../public/images/amenities-ed/Club house.png';
import cricket from '../../../public/images/amenities-ed/Cricket court.png';
import firealarm from '../../../public/images/amenities-ed/Fire alarm.png';
import garden from '../../../public/images/amenities-ed/Garden.png';
import gatedcommunity from '../../../public/images/amenities-ed/Gated community.png';
import gazebo from '../../../public/images/amenities-ed/Gazebo.png';
import guesthouse from '../../../public/images/amenities-ed/Guest house.png';
import gym from '../../../public/images/amenities-ed/Gym.png';
import indoorgames from '../../../public/images/amenities-ed/Indoor games.png';
import intercom from '../../../public/images/amenities-ed/Intercom.png';
import kidsarea from '../../../public/images/amenities-ed/Kids area.png';
import landscapegarden from '../../../public/images/amenities-ed/Landscape garden.png';
import lift from '../../../public/images/amenities-ed/Lifts.png';
import municipalwater from '../../../public/images/amenities-ed/Municipal water.png';
import outdoorgames from '../../../public/images/amenities-ed/Outdoor games.png';
import petfriendly from '../../../public/images/amenities-ed/Pet friendly.png';
import pool from '../../../public/images/amenities-ed/Pool.png';
import rainwaterharvest from '../../../public/images/amenities-ed/Rain water harvest.png';
import road from '../../../public/images/amenities-ed/Road.png';
import security from '../../../public/images/amenities-ed/Security guard.png';
import spa from '../../../public/images/amenities-ed/Spa.png';
import streetlight from '../../../public/images/amenities-ed/Street light.png';
import treeplantation from '../../../public/images/amenities-ed/Tree plantation.png';
import waterdisposal from '../../../public/images/amenities-ed/Water disposal.png';
import watersupply from '../../../public/images/amenities-ed/watersupply.png';
import wifi from '../../../public/images/amenities-ed/Wifi.png';

function Amenities({ data }) {
  return (
    <>
      {data.slice(0, 50).map((val) => {
        return (
          <>
            {val.amenity_code == 'maintenance_staff' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={maintainance} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Maintainance Staff</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'water_storage' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={waterstorage} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Water Storage</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'waste_disposal' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={waterdisposal} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Water Disposal</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'rain_water_harvesting' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={rainwaterharvest} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1> Rain Water Harvesting</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'garden' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={garden} width={30} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Garden</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'wifi' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={wifi} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Wifi</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'fire_alarm' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={firealarm} width={30} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Fire Alarm</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'gym' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={gym} width={35} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Fitness Centre / Gym</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'swimming_pool' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={pool} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Swimming Pool</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'club_house' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={clubhouse} width={32} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Club House</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'security' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={security} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Security</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'lift' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={lift} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Lift(s)</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'kids_area' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={kidsarea} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Kids Area</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'intercom' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={intercom} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Intercom</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'pet_friendly' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={petfriendly} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Pet Friendly</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'gated_society' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={gatedcommunity} width={30} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Gated Society</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'municipal_water' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={municipalwater} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Municipal Water</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'borewell' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={borewell} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Borewell</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'main_road' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={road} width={25} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Main Road</h1>
                </div>
              </div>
            )}
            {val.amenity_code == 'spa' && (
              <div className="col-sm amenities-block">
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                  }}
                >
                  <Image src={spa} width={30} height={30} alt="" />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '40px',
                  }}
                >
                  {' '}
                  <h1>Spa</h1>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}

export default Amenities;

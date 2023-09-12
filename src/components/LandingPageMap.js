import React from 'react';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import NavigationSharpIcon from '@mui/icons-material/NavigationSharp';
import AssistantDirectionSharpIcon from '@mui/icons-material/AssistantDirectionSharp';
import Map from '../pages/Landing-page/Map';
import { useState } from 'react';
import { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LandingPageMap({ details, address }) {
  //   var string = details.map_location;
  //   var splits = string.split();
  //   const [lat, setlat] = useState(splits[0])
  //   const [long, setlong] = useState(splits[1])

  // console.log('coordinatess==>>',lat)
  const [landmark, setlandmark] = useState(details.landmark?.split('/'));
  return (
    <>
      <div
        className="padding-0 d-flex justify-content-center p-5 "
        style={{ background: '#F4F7FA' }}
      >
        <div
          className="display-col d-flex flex-row w-90 shadow-lg rounded-5 border border-1 "
          style={{
            background: '#ffff',
            height: 'fit-content',
            position: 'relative',
          }}
        >
          <div className="col p-5 ">
            <h1
              className="fs-3 "
              style={{ fontSize: '30px', color: '#A5A5A5', fontWeight: 400 }}
            >
              Check Location Connectivity
            </h1>
            <h1 className="fs-3 fw-semibold" style={{ color: '#19469B' }}>
              Explore Neighbourhood
            </h1>
            {/* <div>
              <button
                className="shadow border mx-2 my-3 p-2 px-3"
                style={{
                  background: '#E37D32',
                  color: '#fff',
                  fontSize: '12px',
                }}
              >
                Institution
              </button>
              <button
                style={{
                  background: '#E37D32',
                  color: '#fff',
                  fontSize: '12px',
                }}
                className="shadow border mx-2 my-3 p-2 px-3"
              >
                Restaurent
              </button>
            </div> */}
            <div className="py-3">
              {landmark[0] && (
                <p className="fs-6" style={{ color: '#A5A5A5' }}>
                  <ApartmentOutlinedIcon
                    style={{ color: '#E37D32', margin: '0 3px' }}
                  />
                  {landmark[0]}
                </p>
              )}
              {landmark[1] && (
                <p className="fs-6" style={{ color: '#A5A5A5' }}>
                  <ApartmentOutlinedIcon
                    style={{ color: '#E37D32', margin: '0 3px' }}
                  />
                  {landmark[1]}
                </p>
              )}
              {landmark[2] && (
                <p className="fs-6" style={{ color: '#A5A5A5' }}>
                  <ApartmentOutlinedIcon
                    style={{ color: '#E37D32', margin: '0 3px' }}
                  />
                  {landmark[2]}
                </p>
              )}
              {landmark[3] && (
                <p className="fs-6" style={{ color: '#A5A5A5' }}>
                  <ApartmentOutlinedIcon
                    style={{ color: '#E37D32', margin: '0 3px' }}
                  />
                  {landmark[3]}
                </p>
              )}
              {landmark[4] && (
                <p className="fs-6" style={{ color: '#A5A5A5' }}>
                  <ApartmentOutlinedIcon
                    style={{ color: '#E37D32', margin: '0 3px' }}
                  />
                  {landmark[4]}
                </p>
              )}
              {landmark[5] && (
                <p className="fs-6" style={{ color: '#A5A5A5' }}>
                  <ApartmentOutlinedIcon
                    style={{ color: '#E37D32', margin: '0 3px' }}
                  />
                  {landmark[5]}
                </p>
              )}
              {landmark[6] && (
                <p className="fs-6" style={{ color: '#A5A5A5' }}>
                  <ApartmentOutlinedIcon
                    style={{ color: '#E37D32', margin: '0 3px' }}
                  />
                  {landmark[6]}
                </p>
              )}
            </div>
          </div>
          <div className=" col p-5 map-padding">
            <div className="shadow d-flex flex-row align-items-center justify-content-center rounded-4 p-3">
              <LocationOnIcon style={{ color: '#19469B', fontSize: '35px' }} />
              <p
                className="w-90 px-2"
                style={{
                  color: '#6D6D6D',
                  fontSize: '13px',
                  fontWeight: '500',
                  lineHeight: '1.2',
                }}
              >
                {landmark[0]},<br />
                {details.locality},{details.city}
              </p>
            </div>
            {details && (
              <div style={{ position: 'relative', height: '50vh' }}>
                <Map Coordinates={details?.map_location || details?.map_url} />
              </div>
            )}
          </div>
          {/* <div style={{position:"absolute"}}>
          {details && (
              <div>
                <Map Coordinates={details?.map_location || details?.map_url} />
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default LandingPageMap;

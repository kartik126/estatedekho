import Map from 'components/Map';
import React, { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Mapview({ details }) {
  const [active, setactive] = useState(false);
  const [landmark, setlandmark] = useState(details?.landmark?.split('/'));
  console.log('landmark', details?.landmark?.split('/'));
  return (
    <div
      className="px-5 py-4 m-3 border border-1 rounded-2 col-lg-8 col-sm-6"
      id="Mapview"
    >
      <h1
        style={{
          fontWeight: '600',
          fontSize: '35px',
          color: '#333',
        }}
      >
        Explore Neighbourhood
      </h1>
      <div style={{ border: '2px solid #19469b', width: '50px' }}></div>
      <button
        onClick={() => setactive(false)}
        className={
          active
            ? 'px-2 py-1 mx-1 mt-4 lp-map-btn'
            : 'px-2 py-1 mx-1 mt-4 lp-map-btn-active'
        }
      >
        Map View
      </button>
      <button
        onClick={() => setactive(true)}
        className={
          active
            ? 'px-2 py-1 mx-1 mt-4 lp-map-btn-active'
            : 'px-2 py-1 mx-1 mt-4 lp-map-btn'
        }
      >
        Location Advantages
      </button>

      {active ? (
        <div style={{ height: '50vh' }}>
          <div className="py-5">
            {landmark?.[0] && (
              <p className="fs-6" style={{ color: '#A5A5A5' }}>
                <FiberManualRecordIcon
                  style={{
                    color: 'rgb(191 191 191)',
                    margin: '0 3px',
                    fontSize: '12px',
                  }}
                />
                {landmark[0]}
              </p>
            )}
            {landmark?.[1] && (
              <p className="fs-6" style={{ color: '#A5A5A5' }}>
                <FiberManualRecordIcon
                  style={{
                    color: 'rgb(191 191 191)',
                    margin: '0 3px',
                    fontSize: '12px',
                  }}
                />
                {landmark[1]}
              </p>
            )}
            {landmark?.[2] && (
              <p className="fs-6" style={{ color: '#A5A5A5' }}>
                <FiberManualRecordIcon
                  style={{
                    color: 'rgb(191 191 191)',
                    margin: '0 3px',
                    fontSize: '12px',
                  }}
                />
                {landmark[2]}
              </p>
            )}
            {landmark?.[3] && (
              <p className="fs-6" style={{ color: '#A5A5A5' }}>
                <FiberManualRecordIcon
                  style={{
                    color: 'rgb(191 191 191)',
                    margin: '0 3px',
                    fontSize: '12px',
                  }}
                />
                {landmark[3]}
              </p>
            )}
            {landmark?.[4] && (
              <p className="fs-6" style={{ color: '#A5A5A5' }}>
                <FiberManualRecordIcon
                  style={{
                    color: 'rgb(191 191 191)',
                    margin: '0 3px',
                    fontSize: '12px',
                  }}
                />
                {landmark[4]}
              </p>
            )}
            {landmark?.[5] && (
              <p className="fs-6" style={{ color: '#A5A5A5' }}>
                <FiberManualRecordIcon
                  style={{
                    color: 'rgb(191 191 191)',
                    margin: '0 3px',
                    fontSize: '12px',
                  }}
                />
                {landmark[5]}
              </p>
            )}
            {landmark?.[6] && (
              <p className="fs-6" style={{ color: '#A5A5A5' }}>
                <FiberManualRecordIcon
                  style={{
                    color: 'rgb(191 191 191)',
                    margin: '0 3px',
                    fontSize: '12px',
                  }}
                />
                {landmark[6]}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          {details && (
            <div style={{ position: 'relative', height: '50vh' }}>
              <Map Coordinates={details?.map_location || details?.map_url} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Mapview;

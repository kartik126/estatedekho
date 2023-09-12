import React from 'react';
import Map from '../../components/Map';
function ExploreNeighbourhood({ lat, long }) {
  return (
    <div className="display" style={{ height: 'fit-content' }}>
      <div className="row topvilla_heading">
        <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
          <h1>
            Explore
            <span style={{ fontWeight: '700' }}> Neighbourhood • </span>Map View
          </h1>
        </div>
      </div>
      <Map lat={lat} long={long} />
    </div>
  );
}

export default ExploreNeighbourhood;

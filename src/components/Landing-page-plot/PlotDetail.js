import React from 'react';

function PlotDetail({ details }) {
  return (
    <div className="px-5 py-4 m-3 border border-1 rounded-2 col-lg-8 col-sm-6">
      <h1
        style={{
          fontWeight: '600',
          fontSize: '35px',
          color: '#333',
        }}
      >
        Project specifications
      </h1>
      <div style={{ border: '2px solid #19469b', width: '50px' }}></div>

      <p
        className="my-4"
        style={{ fontSize: '14px', fontWeight: '400', color: '#333' }}
      >
        {details?.project_description}
      </p>
    </div>
  );
}

export default PlotDetail;

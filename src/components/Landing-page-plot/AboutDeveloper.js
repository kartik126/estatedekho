import React from 'react';
import apiClient from 'utils/apiClient';

function AboutDeveloper({ details, clientDetails, about }) {
  return (
    <div
      className="px-5 py-4 m-3 border border-1 rounded-2 col-lg-8 col-sm-6"
      id="about"
    >
      <h1
        style={{
          fontWeight: '600',
          fontSize: '35px',
          color: '#333',
        }}
      >
        About {clientDetails?.client_name}
      </h1>
      <div style={{ border: '2px solid #19469b', width: '50px' }}></div>
      <div className="d-flex flex-row align-items-center">
        <img
          className="p-3"
          src={apiClient.Urls.imgUrl + about?.about_image}
          height={'200px'}
          width={'200px'}
          style={{ borderRadius: '8px' }}
        />
        <p
          className="my-4"
          style={{ fontSize: '14px', fontWeight: '400', color: '#333' }}
        >
          {about?.about_description}
        </p>
      </div>
    </div>
  );
}

export default AboutDeveloper;

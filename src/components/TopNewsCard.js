import React from 'react';
import apiClient from 'utils/apiClient';

function TopNewsCard({ title, image, date }) {
  return (
    <div
      style={{
        position: 'relative',
        boxShadow: 'inset -2px -150px 59px -24px rgba(0, 0, 0, 0.75)',
        borderRadius: 10,
      }}
    >
      <div style={{ zIndex: -1, position: 'relative' }}>
        <img
          className="top-news"
          src={apiClient.Urls.imgUrl + image}
          style={{ height: 390, width: '100%', borderRadius: 10 }}
        />
      </div>
      <p
        style={{
          position: 'absolute',
          bottom: 80,
          color: '#fff',
          padding: '0px 15px',
          fontWeight: 300,
          fontSize: '12px',
        }}
      >
        {`${new Date(date).toDateString()}`} by{' '}
        <span style={{ fontWeight: 500, color: '#e37d32' }}>Santosh</span>
      </p>
      <h1
        className="line-limit"
        style={{
          position: 'absolute',
          bottom: 10,
          color: '#fff',
          padding: '2px 15px',
          fontWeight: 300,
          fontSize: 16,
        }}
      >
        {title}
      </h1>
    </div>
  );
}

export default TopNewsCard;

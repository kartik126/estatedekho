import React from 'react';
function About() {
  return (
    <div className="col-lg-8">
      <h1
        className="px-5 pt-4"
        style={{ fontSize: '35px', fontWeight: 700, color: '#FDB24D' }}
      >
        Why Shunshine
      </h1>
      <p className="px-5 pt-3" style={{ fontSize: '18px', fontWeight: 500 }}>
        Experience the eloquence of unparalleled comfort in aesthetic villas and
        plots.
      </p>
      <div className="pt-3 mx-5 d-flex flex-row why-shunshine">
        <div className="col-lg">
          {' '}
          <p>Experienced Developer</p>
          <p>Affordable Luxury</p>
          <p>Crystal Clear Legal Titles</p>
          <p>Great Connectivity</p>
          <p>Modern technology Development</p>
          <p>Good appreciation</p>
        </div>
        <div className="col-lg">
          <p>On-budget Performance</p>
          <p>Prime Location</p>
          <p>Classic Amenities</p>
          <p>Transparency</p>
          <p>Nourishing Environment</p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';

function Details() {
  return (
    <div className="col-lg-8" style={{ paddingTop: '12%' }}>
      <h1
        className="px-5 pt-4"
        style={{ fontSize: '35px', fontWeight: 700, color: '#FDB24D' }}
      >
        About Project
      </h1>
      <p className="px-5 pt-3" style={{ fontSize: '18px', fontWeight: '500' }}>
        The infrastructure is designed with modern technology and classic
        amenities
      </p>
      <p className="px-5" style={{ textAlign: 'justify' }}>
        The layout is very much driven by the concept of “Sunshine”, Starting
        with the arch that takes the shape of a Sunrise Joysunshine is a 4-acre
        plotted project, with 47% of space for open space and nature, The
        infrastructure is designed with modern technology and classic amenities
        that brings joy to every age group
      </p>
      <br />
      <h1 className="px-5" style={{ fontWeight: 500 }}>
        Villa Plots - Starts at Rs.1799/-sq.ft
      </h1>
      <p className="px-5" style={{ textAlign: 'justify' }}>
        The project boasts a sustainable and eco-friendly design with rainwater
        harvesting, solar-powered street lights, and waste management systems,
        making it a responsible investment option for those who care about the
        environment. The schools, colleges, hospitals, and banks are in the
        vicinity of the project.
      </p>
    </div>
  );
}

export default Details;

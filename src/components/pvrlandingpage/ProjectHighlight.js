import React from 'react';
import location from '../../../public/images/pvr/location-pin.png';
import Neighbourhood from '../../../public/images/pvr/placeholder.png';
import commute from '../../../public/images/pvr/car.png';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
function ProjectHighlight() {
  return (
    <div
      className="display-col d-flex flex-row justify-content-around"
      style={{ paddingTop: '80px' }}
    >
      <Fade bottom delay={400}>
        <div className="m-b col-lg-3 shadow rounded-4 p-4 pvr-highlight-block">
          <div className="d-flex align-items-center">
            <Image src={location} width={50} height={50} />
          </div>

          <div className="py-3">
            <p style={{ fontWeight: 700, fontSize: '17px', color: '#02236B' }}>
              Location
            </p>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgb(15, 30, 63)',
              }}
            >
              Prime Commercial Hub at the Heart of Western Hyderabad- Financial
              District
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom delay={500}>
        <div className="m-b col-lg-3 shadow rounded-4 p-4  pvr-highlight-block">
          <div className="d-flex align-items-center">
            <Image src={Neighbourhood} width={55} height={55} />
          </div>

          <div className="py-3">
            <p style={{ fontWeight: 700, fontSize: '17px', color: '#02236B' }}>
              Neighbourhood
            </p>

            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgb(15, 30, 63)',
              }}
            >
              Within 3-4 minutes radius proximity to MNC’s like ADP, Amazon,
              Accenture, Wipro, Microsoft, Infosys, Google, ZF, etc.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <div className="m-b col-lg-3 shadow rounded-4 p-4  pvr-highlight-block">
          <div className="d-flex align-items-center">
            <Image src={commute} width={60} height={60} />
          </div>

          <div className="py-3">
            <p style={{ fontWeight: 700, fontSize: '17px', color: '#02236B' }}>
              Commute
            </p>

            <p
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgb(15, 30, 63)',
              }}
            >
              Well connected to the main commercial hubs of the city such as ,
              Hi-Tech City, Gachibowli, Manikonda,etc.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProjectHighlight;

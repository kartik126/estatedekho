import React, { useEffect } from 'react';
import visista1 from './images/Visista/1.jpeg';
import true1 from './images/True Blue Napa Valley/floor1.jpeg';
import true2 from './images/True Blue Napa Valley/floor2.jpeg';
import third1 from './images/The Presidential Tower/1.jpeg';
import third2 from './images/The Presidential Tower/2.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

import { useRouter } from 'next/router';

function FloorPlan() {
  const router = useRouter();

  useEffect(() => {
    console.log('floor map router------------------->', router.query);
  }, []);

  return (
    <div className="py-5 home_gallery " id="floorplan">
      <div className="main-title">
        <Fade bottom>
          <h2 style={{ fontWeight: 700 }}>
            View Our <span style={{ color: '#4dc2e6' }}>Floor Plans</span>
          </h2>
        </Fade>
      </div>
      <div className=" d-flex flex-row justify-content-center pt-5 ">
        <a target="_blank">
          {router?.query?.index?.[0].includes('visista') && (
            <div className="display-col d-flex flex-row justify-content-center px-5">
              <Image
                src={visista1}
                alt=""
                className="prophase-floor-map px-5"
              />
            </div>
          )}
          {router?.query?.index?.[0].includes('true-blue-napa-valley') && (
            <>
              <div className="display-col d-flex flex-row justify-content-center px-5">
                <Image src={true1} alt="" className="prophase-floor-map px-5" />
                <Image src={true2} alt="" className="prophase-floor-map px-5" />
              </div>
            </>
          )}
          {router?.query?.index?.[0].includes('the-presidential-tower') && (
            <>
              <div className="display-col d-flex flex-row justify-content-center px-5">
                <Image
                  src={third1}
                  alt=""
                  className="prophase-floor-map px-5"
                />
                <Image
                  src={third2}
                  alt=""
                  className="prophase-floor-map px-5"
                />
              </div>
            </>
          )}
        </a>
      </div>
    </div>
  );
}

export default FloorPlan;

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

import { useRouter } from 'next/router';

function FloorPlan({ images }) {
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
      <div className=" d-flex flex-row display-col justify-content-center pt-5 ">
        <a target="_blank">
          {images?.filter((j) => j.photo_type === 'floor_plans')
            .map((key) => {
              return (
                <>
                  <div className="col-md-6 col-lg-6 col-sm-12 d-flex flex-row justify-content-center px-5 m-1">
                    {key.image_path && key.image_path.includes('projects') ? (
                      <img
                        src={`https://seller.estatedekho.com/${key.image_path}`}
                        alt=""
                        className="prophase-floor-map px-5"
                        style={{ width: '100%' }}
                      />
                    ) : (
                      <img
                        src={`https://seller.estatedekho.com/images/projects/${key.image_path}`}
                        alt=""
                        className="prophase-floor-map px-5"
                        style={{ width: '100%' }}
                      />
                    )}
                  </div>
                </>
              );
            })}
        </a>
      </div>
    </div>
  );
}

export default FloorPlan;

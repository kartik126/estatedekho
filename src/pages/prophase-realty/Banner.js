import React from 'react';
import Form from './Form';
import Fade from 'react-reveal/Fade';

function Banner({ details, clientDetails }) {
  return (
    <>
      <div className="banner" style={{ paddingTop: '70px' }}>
        <div
          id="main_slider"
          className="banner-image"
          style={{
            backgroundImage: `url('https://seller.estatedekho.com/${details?.featured_image_path}')`,
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="container">
            <div className="sub-title float_left">
              <Fade bottom delay={400}>
                <h1>{details?.project_name}</h1>
              </Fade>
              <Fade bottom delay={400}>
                <h3>
                  {details?.locality},{details?.city} <br />
                  {/* <span>CA 52698</span> <span className="price">$640,000</span> */}
                  <span className="price p-2">
                    {details?.gross_cost >= 10000000 ? (
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: '19px',
                          marginRight: '5px',
                        }}
                      >
                        <span style={{ fontFamily: 'Roboto' }}>₹</span>{' '}
                        {Math.abs(details?.gross_cost / 10000000).toFixed(2)} Cr
                        onwards
                      </p>
                    ) : (
                      <p style={{ fontWeight: 600, fontSize: '19px' }}>
                        <span
                          style={{ fontFamily: 'Roboto', marginRight: '5px' }}
                        >
                          ₹
                        </span>{' '}
                        {Math.abs(details?.gross_cost / 100000).toFixed(2)} Lac
                        onwards
                      </p>
                    )}
                  </span>
                </h3>
              </Fade>
            </div>
            <div>
              <Form clientDetails={clientDetails} />
            </div>
          </div>
        </div>{' '}
        {/* End of #main_slider */}
      </div>
    </>
  );
}

export default Banner;

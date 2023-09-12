import React from 'react';
import Form from './Form';
import Fade from 'react-reveal/Fade';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

function Banner({ details, clientDetails }) {
  return (
    <>
      <div className="banner h75" style={{ paddingTop: '70px' }}>
        <div
          id="main_slider"
          className="banner-image"
          style={{
            backgroundImage: `url('${
              details?.featured_image?.includes('projects') ||
              details?.featured_image_path?.includes('projects')
                ? `https://seller.estatedekho.com/${
                    details?.featured_image_path || details?.featured_image
                  }`
                : `https://seller.estatedekho.com/images/projects/${
                    details?.featured_image_path || details?.featured_image
                  }`
            }')`,
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="container">
            <div
              className="sub-title float_left"
              style={{
                width: '50%',
                wordBreak: 'break-all',
                whiteSpace: 'normal',
              }}
            >
              <Fade bottom delay={400}>
                <h1>
                  {details?.project_name}
                  {details?.plot_name}
                </h1>
              </Fade>
              <Fade bottom delay={400}>
                <h3>
                  <FmdGoodOutlinedIcon style={{ fontSize: '35px' }} />{' '}
                  {details?.locality},{details?.city} <br />
                  {(details?.rera_id || details?.plot_rera_id) && (
                    <span style={{ fontSize: '15px' }}>
                      Rera Id : {details?.rera_id || details?.plot_rera_id}
                    </span>
                  )}
                  <br />
                  {details?.plot_lp_number && (
                    <span style={{ fontSize: '15px' }}>
                      Lp No. : {details?.plot_lp_number}
                    </span>
                  )}
                  <span className="price p-2 d-flex flex-row">
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
            <div className="display">
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

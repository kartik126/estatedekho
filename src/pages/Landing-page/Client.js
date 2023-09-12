import React from 'react';
import Fade from 'react-reveal/Fade';

function Client({ about, phone ,clientDetails}) {
  return (
    <section className="know_agent container" id="about">
      <div className="main-title">
        <Fade bottom>
          <h2 style={{ fontWeight: 700 }}>
            Know About{' '}
            <span style={{ color: '#4dc2e6' }}>{clientDetails?.client_name}</span>
          </h2>
        </Fade>
      </div>{' '}
      {/* End of .main-title */}
      <div className="row agent_info_wrapper">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="img_holder">
            <img
              src={`https://seller.estatedekho.com/${about?.about_image}`}
              alt="image"
              className="img-responsive w-100"
            />
          </div>{' '}
          {/* End of .img_holder */}
        </div>{' '}
        {/* End of .col */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 agent_summary">
          <div className="name">
            <h4 className="pb-3">{clientDetails?.client_name}</h4>
          </div>{' '}
          {/* End of .name */}
          <p>{about?.about_description}</p>
     
          {/* End of .contact_info */}
        </div>{' '}
        {/* End of .agent_summary */}
      </div>{' '}
      {/* End of .agent_info_wrapper */}
    </section>
  );
}

export default Client;

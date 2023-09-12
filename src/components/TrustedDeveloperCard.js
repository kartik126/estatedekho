import React from 'react';
import Router from 'next/router';
import apiClient from 'utils/apiClient';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function TrustedDeveloperCard({ developer, color }) {
  const goToDeveloper = (e, x) => {
    console.log(e);
    localStorage.setItem('developerSlug', e);
    Router.push({
      pathname: `/DeveloperDetails/${x.replace(/\s/g, '-')}-Properties`,
    });
  };
  return (
    <>
      <div className="col-lg-4 col-md-6">
        {developer?.client != null ? (
          <>
            {' '}
            <div
              className="card m-b"
              style={{
                width: '100%',
                background: color,
                borderStyle: 'none',
                color: 'rgb(233 233 233)',
              }}
              onClick={() =>
                goToDeveloper(
                  developer.client.microsite_slug,
                  developer.client.client.client_name
                )
              }
            >
              <div style={{ height: '188px' }}>
                <img
                  className="card-img-top"
                  src={
                    apiClient.Urls.imgUrl + developer.client.about.about_image
                  }
                  alt="Card image cap"
                  height={'220px'}
                />
              </div>

              <div className="row trusted-card-body">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pt-3">
                    <h1
                      style={{
                        fontSize: '27px',
                      }}
                    >
                      {developer.client.client.client_name}
                    </h1>
                    <img
                      src={apiClient.Urls.imgUrl + developer.client.header.logo}
                      width={'45px'}
                      height={'45px'}
                      alt=""
                      style={{ background: '#ffff' }}
                    />
                  </div>
                  <p className="card-text">
                    {developer.client.about.about_description}
                  </p>
                  <div className="row">
                    <div className=" col">
                      <h1
                        style={{
                          fontWeight: '700',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {developer.client.about.estd_year || '2010'}
                      </h1>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        year estd
                      </p>
                    </div>
                    <div className="col">
                      <h1
                        style={{
                          fontWeight: '700',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {developer.client.allProjects}
                      </h1>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        projects
                      </p>
                    </div>
                    <div className="col">
                      <h1
                        style={{
                          fontWeight: '700',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {developer.client.currentProjects}
                      </h1>
                      <p
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Active projects
                      </p>
                    </div>
                  </div>
                  <h5
                    style={{
                      fontSize: '13px',
                      textAlign: 'center',
                      paddingTop: '17px',
                      borderTop: '0.1px solid rgb(103 103 103)',
                      cursor: 'pointer',
                    }}
                  >
                    View All Property{' '}
                    <ExpandCircleDownOutlinedIcon
                      style={{ transform: 'rotate(270deg)' }}
                    />
                  </h5>
                </div>
                <div className="col-md-2">
                  {/* <img src={img} width={"100%"}></img> */}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default TrustedDeveloperCard;

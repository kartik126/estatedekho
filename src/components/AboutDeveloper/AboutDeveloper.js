import React, { Component } from 'react';
import img from '../../../public/images/AdobeStock_233594258_Preview@2x.png';
import Image from 'next/image';
import { useState } from 'react';
function AboutDeveloper(clientData) {
  console.log('hehehe', clientData);
  const [client, setclient] = useState(clientData);

  return (
    <div className="col-md-12" style={{ padding: '30px 10px' }}>
      {client !== null ? (
        <>
          <div className="row">
            <div
              className="card"
              style={{
                width: '100%',
                height: '305px',
                background: '#15315f',
                borderStyle: 'none',
                color: 'rgb(233 233 233)',
                display: 'flex',
                flexDirection: 'row',
                padding: '0px',
              }}
            >
              <div className="col-sm-5 .aboutdeveloper-main ">
                <Image
                  className="card-img-top"
                  src={img}
                  width={'500px'}
                  height={'305px'}
                  alt="Card image cap"
                />
              </div>
              <div className="col-sm-7 trusted-card-body">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between">
                    <h1
                      style={{
                        fontFamily: "'Abril Fatface', cursive",
                        fontSize: '31px',
                      }}
                    >
                      {client.furnishing}
                      dfg
                      {/* {client == null? (
                    <> {client.client_name} dhsgdhg</>
                  ) : (
                    <></>
                  )} */}
                    </h1>

                    {/* <Image src={logo} width={'45px'} height={'45px'} alt="" /> */}
                  </div>
                  <p
                    style={{
                      paddingRight: '150px',
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '1.5',
                    }}
                  >
                    {/* {about.about_description} */}
                  </p>
                  {/* <Image src={logo} width={50} height={50} alt='' style={{borderRadius:"none"}}/> */}
                  <div
                    className="row"
                    style={{ paddingTop: '35px', position: 'relative' }}
                  >
                    <div className=" col-sm-2">
                      <h1
                        style={{
                          fontWeight: '700',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {/* {about.estd_year} */}
                      </h1>
                      <p style={{ display: 'flex', justifyContent: 'center' }}>
                        year estd
                      </p>
                    </div>
                    <div className="col-sm-2">
                      <h1
                        style={{
                          fontWeight: '700',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      ></h1>
                      <p style={{ display: 'flex', justifyContent: 'center' }}>
                        projects
                      </p>
                    </div>
                    <div className="col-sm-2">
                      <h1
                        style={{
                          fontWeight: '700',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      ></h1>
                      <p style={{ display: 'flex', justifyContent: 'center' }}>
                        Active projects
                      </p>
                    </div>
                    <div className="col-sm-6"></div>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <> no data</>
      )}
    </div>
  );
}

export default AboutDeveloper;

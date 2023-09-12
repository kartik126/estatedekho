import apiClient from 'utils/apiClient';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import Facilities from 'components/pvrlandingpage/Facilities';
import { SEO } from 'components/seo';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import Schema from 'components/schema';
import Head from 'next/head';
import loader from '../../../public/images/loading.svg';
import Image from 'next/image';
import moment from 'moment';
import About from './About';
import Gallery from './Gallery';
import LandingPageAmenities from './Amenities';
import Client from './Client';
import Banner from './Banner';
import Map from './Map';
import Header from './Header';
import FloorPlan from './FloorPlan';
import edlogo from '../../../public/images/Estate dekho Logo.svg';
import Link from 'next/link';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import Form from './Form';
function LandingPage() {
  const router = useRouter();

  const [Type, setType] = useState('');
  const [seo, setseo] = useState('');
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(null);
  const [imagePath, setimagePath] = useState([]);
  const [staticLogo, setstaticLogo] = useState(false);

  const getLandingPageData = (ms, ps) => {
    console.log(ms);
    if (ms.includes('riverscape-villa-bandlaguda-jagir-hyderabad-xgk0h')) {
      setstaticLogo(true);
    }
    setloading(true);
    let response = apiClient.get(`${apiClient.Urls.landingPage}/${ms}/${ps}`);
    response.then((result) => {
      if (result.success) {
        setdata(result.data);
        setseo(result?.meta);
        console.warn('Landing page----->>>>>', result);
        if (result?.type == 'projects') {
          setType('property');
        } else {
          setType('plot');
        }
      } else {
        router.push('/404');
      }
      setloading(false);
    });
  };

  useEffect(() => {
    if (router.isReady) {
      getLandingPageData(
        router.query?.Landingpage[1],
        router.query?.Landingpage[0]
      );
    }
  }, [router.isReady]);

  // useEffect(() => {
  //   if (router.isReady) {
  //     console.log(router?.query?.LandingPage[0].includes('urban-league'))
  //   }
  // }, [router.isReady]);

  return (
    <>
      <Head>
        {seo && <title>{seo.title}</title>}
        <meta name="description" content={seo?.description} />
      </Head>

      {loading ? (
        <>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
          >
            <Image src={loader} />
          </div>
        </>
      ) : (
        <>
          <Header header={data?.microsite_header} staticLogo={staticLogo} />

          {data?.client_details && (
            <Banner
              details={data?.project_details}
              clientDetails={data?.client_details}
            />
          )}
          <div className="banner d-lg-none d-md-none">
            <div id="main_slider">
              <Form clientDetails={data?.client_details} />
            </div>
          </div>

          <About details={data?.project_details} Type={Type} />

          {data && (
            <Gallery
              images={data?.gallery}
              details={data?.project_details}
              type={Type}
            />
          )}

          {Type == 'property' && <FloorPlan images={data?.gallery} />}

          {Type == 'property' && (
            <LandingPageAmenities
              amenities={data?.amenities}
              details={data?.project_details}
            />
          )}

          <Client
            about={data?.microsite_about}
            phone={data?.microsite_footer.footer_contact1}
            clientDetails={data?.client_details} 
          />

          <div style={{ height: '110vh' }}>
            {data?.project_details && (
              <Map details={data?.project_details} address={data?.address} />
            )}
          </div>

          <footer style={{ position: 'relative' }}>
            <div className="main_footer">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="about_estate">
                      <a href="index-2.html">
                        <img
                          style={{ width: '150px' }}
                          src={`https://seller.estatedekho.com/${data?.microsite_header?.logo}`}
                          alt="logo"
                        />
                      </a>
                      <p
                        className="pt-4"
                        style={{ color: 'gray', fontSize: '11px' }}
                      >
                        {data?.microsite_about?.about_description}
                      </p>

                      {/* End .icon_header */}
                    </div>{' '}
                    {/* End .about_estate */}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"></div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="useful_link">
                      <div className="footer_title">
                        <h3>Usefull Links</h3>
                      </div>
                      <ul>
                        <li>
                          <a href="#amenities" className="tran3s">
                            <i className="fa fa-angle-right" /> Amenities
                          </a>
                        </li>
                        <li>
                          <a href="#gallery" className="tran3s">
                            <i className="fa fa-angle-right" /> Gallery
                          </a>
                        </li>
                        <li>
                          <a href="#about" className="tran3s">
                            <i className="fa fa-angle-right" /> About Us
                          </a>
                        </li>

                        <li>
                          <a href="#" className="tran3s">
                            <i className="fa fa-angle-right" /> Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="#floorplan" className="tran3s">
                            <i className="fa fa-angle-right" /> Floor Plans
                          </a>
                        </li>
                      </ul>
                    </div>{' '}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="contact_info">
                      <div className="footer_title">
                        <h3>Contact Info</h3>
                      </div>
                      <ul>
                        <li>
                          <BusinessOutlinedIcon
                            style={{
                              color: '#4dc2e6',
                              fontSize: 20,
                              marginRight: 5,
                            }}
                          />{' '}
                          {data?.address.address_line_1},<br />
                          {data?.address.address_line_2},<br />
                          {data?.address.locality_name}
                          <br />
                          {data?.address.landmark}
                          <br />
                          {data?.address.pincode}, {data?.address.city_name}
                        </li>
                      </ul>
                    </div>{' '}
                    {/* End .contact_info */}
                  </div>
                </div>
              </div>
              <p
                className="text-center px-4 "
                style={{
                  fontSize: '11px',
                  color: 'gray',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                Copyright © {moment().format('yyyy')} EstateDekho digi avenues
                PVT LTD. All rights reserved.
              </p>
              <div
                className="display"
                style={{
                  width: '130px',
                  position: 'absolute',
                  right: 50,
                  bottom: 20,
                }}
              >
                <p style={{ color: 'gray', fontSize: '11px' }}>Powered By</p>
                <Link href="https://estatedekho.com/">
                  <a target="_blank">
                    <Image src={edlogo} />
                  </a>
                </Link>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default LandingPage;

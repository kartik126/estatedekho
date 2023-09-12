import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import About from './About';
import Gallery from './Gallery';
import LandingPageAmenities from './Amenities';
import Client from './Client';
import Banner from './Banner';
import Map from './Map';
import Header from './Header';
import { useRouter } from 'next/router';
import apiClient from 'utils/apiClient';
import FloorPlan from './FloorPlan';
import Fade from 'react-reveal/Fade';
import Form from './Form';

function Prophase() {
  const [data, setdata] = useState(null);
  const router = useRouter();

  const getLandingPageData = (ms, ps) => {
    let response = apiClient.get(`${apiClient.Urls.landingPage}/${ms}/${ps}`);
    response.then((result) => {
      console.log('Prophase realty-------->>>', result);
      setdata(result.data);
    });
  };

  useEffect(() => {
    if (router.isReady) {
      getLandingPageData(router.query?.index[0], 'prophase-realty');
    }
  }, [router.isReady]);

  console.log('routerrrr---------------->', router);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/styles/prophase.css" />
      </Head>

      <Header header={data?.microsite_header} />
      {data?.client_details && (
        <Banner
          details={data?.project_details}
          clientDetails={data?.client_details}
        />
      )}

      {/* <Form/> */}
      <About details={data?.project_details} />
      <Gallery images={data?.gallery} />
      <FloorPlan />
      <LandingPageAmenities
        amenities={data?.amenities}
        details={data?.project_details}
      />
      <Client
        about={data?.microsite_about}
        phone={data?.microsite_footer.footer_contact1}
      />
      <div style={{ height: '110vh' }}>
        {data?.project_details && (
          <Map details={data?.project_details} address={data?.address} />
        )}
      </div>
      <footer>
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
                  <p>
                    As a property developers every project we offer quality
                    Properties and Services for our trustable customers.{' '}
                    <span />
                    If you are interested in real estate do not wait and BUY IT
                    NOW!
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
                    <li>{data?.address.address_line_1}</li>
                    <li>
                      <a href="tel:98941-84-604" className="tran3s">
                        Phone: {data?.microsite_footer.footer_contact1}
                      </a>
                    </li>
                  </ul>
                </div>{' '}
                {/* End .contact_info */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Prophase;

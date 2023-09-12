import AboutDeveloper from 'components/AboutDeveloper/AboutDeveloper';
import Header from 'components/header/Header';
import React, { Component } from 'react';
import Image from 'next/image';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import img from '../../../public/images/aaaa.png';
import Link from 'next/link';
import Homecardcontainer from 'components/homecardcontainer/Homecardcontainer';
import bestappartment from '../../../public/images/Group 202328@2x.png';
import Footer from 'components/footer/Footer';
import plot from '../../../public/images/plot.png';
import apiClient from 'utils/apiClient';
import estd from '../../../public/images/estd.jpeg';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import moment from 'moment';
export function DeveloperDetails() {
  // constructor(props) {
  //   super(props);
  //   console.warn('props are ', props.router, props.router.query);
  //   this.state = {
  //     data: [],
  //     client: null,
  //     about: null,
  //     projects: [],
  //     // query:this.props.router.query
  //   };
  // }
  const router = useRouter();
  const { developer } = router.query;

  const props = {
    developer,
  };
  const [data, setdata] = useState([]);
  const [client, setclient] = useState(null);
  const [about, setabout] = useState(null);
  const [projects, setprojects] = useState([]);
  const [header, setheader] = useState(null);

  const goToPropertyDetails = (val) => {
    Router.push({
      pathname: '/PropertyDetails/PropertyId/',
      query: {
        slug: val.slug,
      },
    });
    // var locality = val.society?.address_locality.replace(/(^\s*)|(\s*$)/gi, '');
    // localStorage.setItem('propertySlug', val.slug);
    // if (val.society?.address_locality.indexOf(' ') != -1) {
    //   window.open(
    //     `/PropertyDetails/${val.society?.prop_title.replace(
    //       /\s+/g,
    //       '-'
    //     )}-by-${client.header_title.replace(/\s+/g, '-')}-in-${locality.replace(
    //       /\s/g,
    //       '-'
    //     )}-${val.society?.address_city.replace(/\s/g, '-')}`,
    //     '_blank'
    //   );
    // } else {
    //   window.open(
    //     `/PropertyDetails/${val.society?.prop_title.replace(
    //       /\s+/g,
    //       '-'
    //     )}-by-${client?.header_title.replace(/\s+/g, '-')}-in-${
    //       val.society?.address_locality
    //     }-${val.society?.address_city.replace(/\s/g, '-')}`,
    //     '_blank'
    //   );
    // }
  };
  const DeveloperDetails = (e) => {
    var slug = localStorage.getItem('developerSlug');
    let res = apiClient.get(apiClient.Urls.developerDetail + slug, {});
    res.then((result) => {
      if (result.success) {
        if (result.data.length > 0) {
          console.log('developer details----->', result);
          setdata(result.data[0]);
          setprojects(result.data[0].projects);
          setclient(result.data[0].header);
          setabout(result.data[0].about);
          setheader(result.data[0].header);
        }
      } else {
        setdata([]);
        setprojects([]);
        setclient(null);
        setabout(null);
        setheader(null);
      }
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!router.isReady) return;
    DeveloperDetails();
  }, [router.isReady]);

  // componentDidMount() {
  //   this.DeveloperDetails(this.props.router.query.e);
  //   if (this.props.router.isReady) {
  //     this.DeveloperDetails(this.props.router.query.e);
  //   }
  // }

  return (
    <>
      <Header />
      <div className="container">
        {/* about developer large */}
        <div
          className="row d-flex justify-content-sm-between "
          style={{
            padding: '55px 0',
          }}
        >
          <div className="col-sm">
            <div
              className=" row"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className=" row aboutdeveloper-main">
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
                            {about ? (
                              <img
                                className="card-img-dev"
                                src={apiClient.Urls.imgUrl + about.about_image}
                                width={'500px'}
                                height={'305px'}
                                alt="Card image cap"
                              />
                            ) : (
                              <Image
                                className="card-img-dev"
                                src={estd}
                                width={'500px'}
                                height={'305px'}
                                alt="Card image cap"
                              />
                            )}
                          </div>
                          <div className="col-sm-7 trusted-card-body px-5">
                            <div className="col-md-12">
                              <div className="d-flex justify-content-between">
                                <h1
                                  style={{
                                    fontSize: '31px',
                                  }}
                                >
                                  {client ? <>{client.header_title}</> : <></>}
                                </h1>
                                {header ? (
                                  <img
                                    src={apiClient.Urls.imgUrl + header.logo}
                                    width={'45px'}
                                    height={'45px'}
                                    alt=""
                                    style={{ background: '#fff' }}
                                  />
                                ) : (
                                  <Image
                                    src={estd}
                                    width={'45px'}
                                    height={'45px'}
                                    alt=""
                                  />
                                )}
                              </div>
                              {about ? (
                                <p
                                  style={{
                                    paddingRight: '150px',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    lineHeight: '1.5',
                                    height: '105px',
                                  }}
                                >
                                  {about.about_description}
                                </p>
                              ) : (
                                <p
                                  style={{
                                    paddingRight: '150px',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    lineHeight: '1.5',
                                    height: '105px',
                                  }}
                                >
                                  {client.header_title} is a leading player in
                                  Hyderabad real estate industry. Everyone
                                  dreams to have the own home and they help many
                                  of them to make their dreams come true. they
                                  build each home painstakingly, with focus on
                                  Quality, Useful detailing and ensure Value for
                                  money. they desire to earn people trust and
                                  confidence while they create whenever they
                                  launch their new product and services.
                                  {client.header_title} as its first ever
                                  venture, with the mission of creating
                                  excellence and delivering the best in the
                                  field of real-estate.
                                  {client.header_title}
                                  management has been attainting rich experience
                                  in diversified fields by producing and
                                  marketing electronics consumer.
                                </p>
                              )}

                              {/* <Image src={logo} width={50} height={50} alt='' style={{borderRadius:"none"}}/> */}
                              <div
                                className="row"
                                style={{
                                  paddingTop: '35px',
                                  position: 'relative',
                                }}
                              >
                                <div className="col-sm-6">
                                  {/* <ContactButton style={{ position: 'absolute' }} /> */}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              {/* <img src={img} width={"100%"}></img> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* active projects of developer */}
        <div className="row topvilla_heading py-3 px-1">
          <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
            <h1>
              Active Projects of
              <span style={{ fontWeight: '700' }}>
                {' '}
                {client ? <>{client.header_title}</> : <></>}
              </span>
            </h1>
          </div>
        </div>

        <div className="row">
          {projects?.map((val) => {
            return (
              <>
                {val.images?.[0] && (
                  <div className="col-4 py-4">
                    <div
                      className="card"
                      style={{
                        width: ' 100%',
                        border: ' 2.2px solid #eaeaea',
                        paddingBottom: '0px',
                        background: 'rgb(21, 49, 95)',
                        color: '#fff',
                      }}
                    >
                      <Link
                        href={`/PropertyDetails/?${val.slug}`}
                        as={`/PropertyDetails/${val.slug}`}
                      >
                        <a target="_blank">
                          <>
                            {val.images.length > 0 ? (
                              <img
                                className="card-img-top"
                                src={val.images[0 || 1 || 2].photo_url}
                                alt="Card image cap"
                                style={{
                                  borderBottomRightRadius: 0,
                                  borderBottomLeftRadius: 0,
                                }}
                              />
                            ) : (
                              <Image
                                className="card-img-top"
                                src={estd}
                                alt="Card image cap"
                              />
                            )}
                          </>

                          <div className="row card-body cursor-pointer">
                            <div
                              className="col-xs-9"
                              style={{ padding: '0 18px' }}
                            >
                              <h1
                                style={{
                                  textOverflow: 'ellipsis',
                                  width: '75%',
                                  overflow: 'hidden',
                                  whiteSpace: 'nowrap',
                                  color: '#fff',
                                  textTransform: 'capitalize',
                                }}
                              >
                                {val.society.prop_title}
                              </h1>
                              <span
                                style={{
                                  fontSize: '12px',
                                  fontWeight: 400,
                                }}
                              ></span>
                              <div className="d-flex flex-column ">
                                <p style={{ lineHeight: '1.3', color: '#fff' }}>
                                  {val.society.prop_type != 'Plot' ? (
                                    <span
                                      style={{
                                        fontWeight: '600',
                                        fontSize: '12px',
                                      }}
                                    >
                                      {val.bedrooms ? (
                                        <>{val.bedrooms} BHK</>
                                      ) : (
                                        <></>
                                      )}{' '}
                                      {val.society.prop_type}
                                    </span>
                                  ) : (
                                    <span
                                      style={{
                                        fontWeight: '600',
                                        fontSize: '12px',
                                      }}
                                    >
                                      {val.society.prop_subtype}
                                    </span>
                                  )}{' '}
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: 400,
                                    }}
                                  >
                                    for Sale in {val.society.address_locality}
                                    <br />
                                    <p
                                      style={{
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        color: '#fff',
                                      }}
                                    >
                                      {val.society.address_locality},
                                      {val.society.address_city}
                                    </p>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div
                              className="col-xs-3 d-flex flex-row align-items-top justify-content-end col p-0"
                              style={{
                                position: 'absolute',
                                textAlign: 'end',
                              }}
                            >
                              <div className="px-1">
                                <div className="d-flex">
                                  {/* <h3>₹ {val.property.gross_cost}</h3> */}
                                  {val.pricing?.base_cost >= 10000000 ? (
                                    <>
                                      <h3>
                                        <span
                                          style={{
                                            fontFamily:
                                              "'Noto Sans', sans-serif",
                                            fontWeight: '600',
                                          }}
                                        >
                                          {' '}
                                          ₹
                                        </span>{' '}
                                        {Math.abs(
                                          val.pricing?.base_cost / 10000000
                                        ).toFixed(2)}{' '}
                                        Cr
                                      </h3>
                                    </>
                                  ) : (
                                    <>
                                      <h3>
                                        <span
                                          style={{
                                            fontFamily:
                                              "'Noto Sans', sans-serif",
                                            fontWeight: '600',
                                          }}
                                        >
                                          {' '}
                                          ₹
                                        </span>{' '}
                                        {Math.abs(
                                          val.pricing?.base_cost / 100000
                                        ).toFixed(2)}{' '}
                                        Lac
                                      </h3>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="p-2 d-flex align-items-center col-sm-12 ">
                                <div
                                  className=" col"
                                  style={{
                                    borderRight: '1px solid rgb(232 232 232)',
                                  }}
                                >
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '0.9vw',
                                      fontWeight: '400',
                                      color: '#fff',
                                      height: '10px',
                                    }}
                                  >
                                    {(val.built_up_area && 'Built Up Area') ||
                                      (val.super_builtup_area &&
                                        'SuperBuiltup Area') ||
                                      (val.carpet_area && 'Carpet Area') ||
                                      (val.plot_area && 'Plot area')}
                                  </p>
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '0.8vw',
                                      fontWeight: '500',
                                      height: '10px',
                                      color: '#fff',
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: "'Noto Sans', sans-serif",
                                        fontWeight: '600',
                                      }}
                                    >
                                      {' '}
                                      ₹
                                    </span>{' '}
                                    {val.built_up_area ||
                                      val.super_builtup_area ||
                                      val.carpet_area ||
                                      val.plot_area}{' '}
                                    {val.pricing?.price_per_unit_type == 'Sqft'
                                      ? 'sq.ft'
                                      : val.pricing?.price_per_unit_type}
                                  </p>
                                </div>
                                <div
                                  className="pl-4 col"
                                  style={{
                                    borderRight: '1px solid rgb(232 232 232)',
                                  }}
                                >
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '0.9vw',
                                      fontWeight: '400',
                                      height: '10px',
                                      color: '#fff',
                                    }}
                                  >
                                    Avg. Price
                                  </p>
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '0.9vw',
                                      fontWeight: '500',
                                      height: '10px',
                                    }}
                                  >
                                    {val?.pricing ? (
                                      <>
                                        {' '}
                                        <p
                                          style={{
                                            textAlign: 'left',
                                            fontSize: '0.8vw',
                                            fontWeight: '500',
                                            height: '10px',
                                            color: '#fff',
                                            whiteSpace: 'nowrap',
                                          }}
                                        >
                                          {' '}
                                          <span
                                            style={{
                                              fontFamily:
                                                "'Noto Sans', sans-serif",
                                              fontWeight: '600',
                                            }}
                                          >
                                            {' '}
                                            ₹
                                          </span>{' '}
                                          {val?.pricing?.price_per_unit}/
                                          {val?.pricing?.price_per_unit_type}
                                        </p>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </p>
                                </div>
                                <div className="pl-4 col ">
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '0.9vw',
                                      fontWeight: '400',
                                      color: '#fff',
                                      height: '10px',
                                      whiteSpace: 'nowrap',
                                    }}
                                  >
                                    Possession starts
                                  </p>
                                  <p
                                    style={{
                                      textAlign: 'left',
                                      fontSize: '0.8vw',
                                      fontWeight: '500',
                                      height: '10px',
                                      color: '#fff',
                                    }}
                                  >
                                    {(val.plot_area && 'Immediate') ||
                                      (val.uc_date ? (
                                        <>
                                          {moment(
                                            val.uc_date,
                                            'DD/MM/YYYY'
                                          ).isBefore(moment())
                                            ? 'Ready to Move'
                                            : moment(
                                                val.uc_date,
                                                'DD/MM/YYYY'
                                              ).format('MMM YYYY')}
                                        </>
                                      ) : (
                                        'Ready to Move'
                                      ))}
                                  </p>
                                </div>
                              </div>
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
                            View {val.society?.prop_type}{' '}
                            <ExpandCircleDownOutlinedIcon
                              style={{
                                transform: 'rotate(270deg)',
                                fontSize: '17px',
                              }}
                            />
                          </h5>
                        </a>
                      </Link>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DeveloperDetails;

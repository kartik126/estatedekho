import Header from 'components/header/Header';
import React, { Component } from 'react';
import Footer from 'components/footer/Footer';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import img2 from '../../public/images/Group 204290@2x.png';
import Rera from '../../public/images/Group 204282@2x.png';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import apiClient from 'utils/apiClient';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Bottom_bar from 'components/Bottom_bar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import image from '../../public/images/Group 139719.png';
import logo2 from '../../public/images/Group 139719.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
import noresult from '../../public/images/noresult.png';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  WhatsappIcon,
  EmailIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import NodataFound from 'components/NodataFound/NodataFound';
import moment from 'moment';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '50%',
  bgcolor: 'none',
  border: 'none',
  borderRadius: '10px',
};
export function ContactedProperties() {
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState([]);
  const [loader, setloader] = useState(true);
  const [clientDetail, setclientDetail] = useState(null);
  const [loginOpen, setloginOpen] = useState(false);
  const router = useRouter();
  const {
    query: { city_name, data },
  } = router;

  const props = {
    city_name,
    data,
  };
  const goToPropertyDetails = (e) => {
    Router.push({
      pathname: '/PropertyDetails/PropertyId',
      query: {
        e,
      },
    });
  };
  const handleOpen = () => {
    setOpen(true);
    // setclient(client)
  };
  const handleClose = () => {
    setOpen(false);
    setloginOpen(false);
  };
  const getContacted = () => {
    setloader(true);
    let res = apiClient.get(apiClient.Urls.contactedProperties, {}, true);
    res.then((result) => {
      console.log('favourite data----------->', result);
      if (result.success) {
        setData(result.data.data);
        setloader(false);
      } else {
        setData([]);
      }
    });
  };
  const addToFavourite = (e) => {
    if (localStorage.getItem('authToken') !== null) {
      var token = localStorage.getItem('authToken');
    } else {
      token = 'null';
    }
    if (token == 'null') {
      // alert('Login to add');
    } else {
      let response = apiClient.post(
        apiClient.Urls.addToFavourite,
        { property_id: e },
        true
      );
      response.then((result) => {
        if (result.message == 'Added') {
          getContacted();
        } else if (result.message == 'Removed from favourites') {
          getContacted();
        }
        console.warn('added to favourite----->>>>>', result);
      });
    }
  };
  useEffect(() => {
    console.warn('prps dev', props.data, props.city_name);
    getContacted();
  }, []);

  return (
    <>
      <Header />
      {loader ? (
        <div className="display-col px-2 row space-mb topvilla_view">
          <div className="col">
            {' '}
            <Skeleton
              variant="rectangular"
              width={'100%'}
              height={200}
              style={{ borderRadius: 4 }}
            />
            <Skeleton />
            <Skeleton width="60%" />
          </div>
          <div className="col">
            {' '}
            <Skeleton
              variant="rectangular"
              width={'100%'}
              height={200}
              style={{ borderRadius: 4 }}
            />
            <Skeleton />
            <Skeleton width="60%" />
          </div>
          <div className="col">
            {' '}
            <Skeleton
              variant="rectangular"
              width={'100%'}
              height={200}
              style={{ borderRadius: 4 }}
            />
            <Skeleton />
            <Skeleton width="60%" />
          </div>
        </div>
      ) : (
        <div className="home_container">
          <div className="row topvilla_heading py-3 px-1">
            <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
              <h1 onClick={() => console.warn('data is ', Data)}>
                Contacted
                <span style={{ fontWeight: '700' }}> Properties </span>
              </h1>
            </div>
          </div>
          {Data.length > 0 ? (
            <>
              <div className="row">
                {Data.map((val) => {
                  return (
                    <>
                      {val.property != null ? (
                        <>
                          {' '}
                          <div
                            className="col-4 py-3"
                            // onClick={()=>alert(val.property.id)}
                          >
                            <div
                              className="card"
                              style={{
                                width: ' 100%',
                                border: ' 2.2px solid #eaeaea',
                                padding: ' 6px 6px',
                                paddingBottom: '0px',
                              }}
                            >
                              <Link
                                href={`/PropertyDetails/?${val.property.slug}`}
                                as={`/PropertyDetails/${val.property.slug}`}
                              >
                                <a target="_blank">
                                  {val.property.images.length > 0 ? (
                                    <img
                                      className="card-img-top"
                                      src={
                                        val.property.images[0 || 1 || 2 || 3]
                                          .photo_url
                                      }
                                      alt="Card cap"
                                      style={{ borderRadius: '5px' }}
                                    />
                                  ) : (
                                    <Image
                                      className="card-img-top"
                                      src={image}
                                      width={'100%'}
                                      height={'200px'}
                                      alt="Card cap"
                                      style={{ borderRadius: '5px' }}
                                    />
                                  )}
                                </a>
                              </Link>

                              {/* <p>{apiClient.Urls.imgUrl} {val.featured_image_path}</p> */}
                              {/* <p className="sponsored">Sponsored</p> */}

                              {val.property.favourited ? (
                                <>
                                  <button
                                    className="favourite-icon"
                                    onClick={() =>
                                      addToFavourite(val.property.id)
                                    }
                                  >
                                    <StarRoundedIcon />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    className="favourite-icon"
                                    onClick={() => {
                                      addToFavourite(val.property.id);
                                    }}
                                  >
                                    <StarBorderRoundedIcon />
                                  </button>
                                </>
                              )}

                              <div className="share-btn">
                                <button className="share-icon">
                                  <ShareOutlinedIcon />
                                </button>
                                <div className="share-popup">
                                  <p style={{ fontWeight: '600' }}>
                                    Share on :{' '}
                                  </p>
                                  <div className="d-flex justify-content-around align-items-center">
                                    <FacebookShareButton
                                      url={
                                        'http://growthdekho.in:8080/PropertyDetails/PropertyId?e=' +
                                        val.property.slug
                                      }
                                      className="Demo__some-network__share-button"
                                    >
                                      <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <FacebookMessengerShareButton
                                      url={
                                        'http://growthdekho.in:8080/PropertyDetails/PropertyId?e=' +
                                        val.property.slug
                                      }
                                      appId="521270401588372"
                                      className="Demo__some-network__share-button"
                                    >
                                      <FacebookMessengerIcon size={32} round />
                                    </FacebookMessengerShareButton>
                                    <WhatsappShareButton
                                      url={
                                        'http://growthdekho.in:8080/PropertyDetails/PropertyId?e=' +
                                        val.property.slug
                                      }
                                      className="Demo__some-network__share-button"
                                    >
                                      <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                    <EmailShareButton
                                      url={
                                        'http://growthdekho.in:8080/PropertyDetails/PropertyId?e=' +
                                        val.property.slug
                                      }
                                      body="body"
                                      className="Demo__some-network__share-button"
                                    >
                                      <EmailIcon size={32} round />
                                    </EmailShareButton>
                                    <TwitterShareButton
                                      url={
                                        'http://growthdekho.in:8080/PropertyDetails/PropertyId?e=' +
                                        val.property.slug
                                      }
                                      className="Demo__some-network__share-button"
                                    >
                                      <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <TelegramShareButton
                                      url={
                                        'http://growthdekho.in:8080/PropertyDetails/PropertyId?e=' +
                                        val.property.slug
                                      }
                                      className="Demo__some-network__share-button"
                                    >
                                      <TelegramIcon size={32} round />
                                    </TelegramShareButton>
                                  </div>
                                </div>
                              </div>
                              <Link
                                href={`/PropertyDetails/?${val.property.slug}`}
                                as={`/PropertyDetails/${val.property.slug}`}
                              >
                                <a target="_blank">
                                  <>
                                    <div
                                      className="row card-body cursor-pointer"
                                      onClick={() =>
                                        localStorage.setItem(
                                          'propertySlug',
                                          val.property.slug
                                        )
                                      }
                                    >
                                      <div className="col-xs-9">
                                        <h1>
                                          {val.property.society.prop_title}
                                        </h1>
                                        <span
                                          style={{
                                            fontSize: '12px',
                                            fontWeight: 400,
                                            color: ' #818181',
                                          }}
                                        >
                                          By {val.property.client.client_name}
                                        </span>
                                        <div className="d-flex flex-column ">
                                          <p style={{ lineHeight: '1.3' }}>
                                            {val.property.society.prop_type !==
                                            'Plot' ? (
                                              <span
                                                style={{
                                                  fontWeight: '600',
                                                  fontSize: '12px',
                                                }}
                                              >
                                                {val.property.bedrooms ? (
                                                  <>
                                                    {val.property.bedrooms} BHK
                                                  </>
                                                ) : (
                                                  <></>
                                                )}{' '}
                                                {val.property.society.prop_type}
                                              </span>
                                            ) : (
                                              <span
                                                style={{
                                                  fontWeight: '600',
                                                  fontSize: '12px',
                                                }}
                                              >
                                                {
                                                  val.property.society
                                                    .prop_subtype
                                                }
                                              </span>
                                            )}{' '}
                                            <span
                                              style={{
                                                fontSize: '11px',
                                                fontWeight: 400,
                                                color: '#818181',
                                              }}
                                            >
                                              for Sale in{' '}
                                              {
                                                val.property.society
                                                  .address_locality
                                              }
                                              <br />
                                              <p
                                                style={{
                                                  fontSize: '11px',
                                                  fontWeight: '600',
                                                }}
                                              >
                                                {
                                                  val.property.society
                                                    .address_locality
                                                }
                                                ,
                                                {
                                                  val.property.society
                                                    .address_city
                                                }
                                              </p>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className="col-xs-3 d-flex flex-row align-items-top justify-content-end col p-0"
                                        style={{ position: 'absolute' }}
                                      >
                                        <div>
                                          {val.property.interaction.rera_id !=
                                          null ? (
                                            <>
                                              {' '}
                                              <Image
                                                src={Rera}
                                                width={'65px'}
                                                height={'25px'}
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <></>
                                          )}

                                          {/* <h3>₹ {val.property.gross_cost}</h3> */}
                                          {val.property.pricing.base_cost >=
                                          10000000 ? (
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
                                                  val.property.pricing
                                                    .base_cost / 10000000
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
                                                  val.property.pricing
                                                    .base_cost / 100000
                                                ).toFixed(2)}{' '}
                                                Lac
                                              </h3>
                                            </>
                                          )}
                                        </div>
                                      </div>

                                      <div>
                                        <div className="p-2 d-flex align-items-center col-sm-12 property-details">
                                          <div
                                            className=" col"
                                            style={{
                                              borderRight:
                                                '1px solid rgb(232 232 232)',
                                            }}
                                          >
                                            <p
                                              style={{
                                                textAlign: 'left',
                                                fontSize: '0.9vw',
                                                fontWeight: '400',
                                                color: 'rgb(147, 150, 156)',
                                                height: '10px',
                                              }}
                                            >
                                              {(val.property.built_up_area &&
                                                'Built Up Area') ||
                                                (val.property
                                                  .super_builtup_area &&
                                                  'SuperBuiltup Area') ||
                                                (val.property.carpet_area &&
                                                  'Carpet Area') ||
                                                (val.property.plot_area &&
                                                  'Plot area')}
                                            </p>
                                            <p
                                              style={{
                                                textAlign: 'left',
                                                fontSize: '0.9vw',
                                                fontWeight: '500',
                                                height: '10px',
                                                color: '#333',
                                              }}
                                            >
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
                                              {val.property.built_up_area ||
                                                val.property
                                                  .super_builtup_area ||
                                                val.property.carpet_area ||
                                                val.property.plot_area}{' '}
                                              {val.property.pricing
                                                .price_per_unit_type == 'Sqft'
                                                ? 'sq.ft'
                                                : val.property.pricing
                                                    .price_per_unit_type}
                                            </p>
                                          </div>
                                          <div
                                            className="pl-4 col"
                                            style={{
                                              borderRight:
                                                '1px solid rgb(232 232 232)',
                                            }}
                                          >
                                            <p
                                              style={{
                                                textAlign: 'left',
                                                fontSize: '0.9vw',
                                                fontWeight: '400',
                                                color: 'rgb(147, 150, 156)',
                                                height: '10px',
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
                                              {val?.property?.pricing ? (
                                                <>
                                                  {' '}
                                                  <p
                                                    style={{
                                                      textAlign: 'left',
                                                      fontSize: '0.9vw',
                                                      fontWeight: '500',
                                                      height: '10px',
                                                      color: '#333',
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
                                                    {
                                                      val?.property?.pricing
                                                        .price_per_unit
                                                    }
                                                    /
                                                    {
                                                      val?.property?.pricing
                                                        .price_per_unit_type
                                                    }
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
                                                color: 'rgb(147, 150, 156)',
                                                height: '10px',
                                                whiteSpace: 'nowrap',
                                              }}
                                            >
                                              Possession starts
                                            </p>
                                            <p
                                              style={{
                                                textAlign: 'left',
                                                fontSize: '0.9vw',
                                                fontWeight: '500',
                                                height: '10px',
                                                color: '#333',
                                              }}
                                            >
                                              {(val.property.plot_area &&
                                                'Immediate') ||
                                                (val.property.uc_date ? (
                                                  <>
                                                    {moment(
                                                      val.property.uc_date,
                                                      'DD/MM/YYYY'
                                                    ).isBefore(moment())
                                                      ? 'Ready to Move'
                                                      : moment(
                                                          val.property.uc_date,
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
                                    <div className="row d-flex justify-content-between">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div
                                          style={{
                                            paddingLeft: '5px',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                          }}
                                          className="d-flex align-items-center client-details"
                                        >
                                          {' '}
                                          {val.property.client.microsite ? (
                                            <>
                                              {' '}
                                              <img
                                                src={
                                                  apiClient.Urls.imgUrl +
                                                  val.property.client.microsite
                                                    .header.logo
                                                }
                                                width={'40px'}
                                                height={'40px'}
                                                style={{ borderRadius: '3px' }}
                                                alt=""
                                              />
                                            </>
                                          ) : (
                                            <>
                                              <img
                                                src={`https://ui-avatars.com/api/?background=random&name=${val.property.client.client_name}`}
                                                width={37}
                                                height={40}
                                                alt=""
                                              />
                                            </>
                                          )}
                                          <p
                                            className="px-1"
                                            style={{
                                              height: '20px',
                                              fontSize: '1vw',
                                              fontWeight: '600',
                                              textOverflow: 'ellipsis',
                                              whiteSpace: 'nowrap',
                                              overflow: 'hidden',
                                              width: '161px',
                                            }}
                                          >
                                            {val.property.client.client_name}
                                          </p>
                                        </div>

                                        {val.property.interaction
                                          .listing_status == 'approved' ? (
                                          <>
                                            {' '}
                                            <div className="verified-div">
                                              <Image src={logo2} alt="" />

                                              <div
                                                className="d-flex align-items-center"
                                                style={{
                                                  fontSize: '9px',
                                                  fontWeight: '600',
                                                  height: '16px',
                                                }}
                                              >
                                                <CheckCircleIcon /> Active
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <div className="verified-div">
                                              <Image src={logo2} alt="" />

                                              <div
                                                className="d-flex align-items-center"
                                                style={{
                                                  fontSize: '9px',
                                                  fontWeight: '600',
                                                  height: '16px',
                                                }}
                                              >
                                                <CheckCircleIcon /> inActive
                                              </div>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </>
                                </a>
                              </Link>
                              <div className="d-flex justify-content-center align-items-center m-2 card-bottom">
                                <h1
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setclientDetail(val.property.client),
                                      handleOpen();
                                  }}
                                >
                                  Contact Now <ExpandCircleDownOutlinedIcon />
                                </h1>
                              </div>
                              {/* <Button >Open modal</Button> */}
                              <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                  <ContactDeveloperPopup
                                    client={clientDetail}
                                    close={handleClose}
                                  />
                                </Box>
                              </Modal>
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center align-items-center py-5">
                <Image src={noresult} alt="" width={250} height={200} />
              </div>
            </>
          )}

          <Footer />
        </div>
      )}

      {/* <Bottom_bar /> */}
    </>
  );
}

export default ContactedProperties;

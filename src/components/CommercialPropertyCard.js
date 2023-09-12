import React, { useCallback, useRef, useState } from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Rera from '../../public/images/Group 204282@2x.png';
import Image from 'next/image';
import mobilebanner from '../../public/images/mobilebanner.png';
import apiClient from 'utils/apiClient';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Box from '@mui/material/Box';
import ed from '../../public/images/Group 139719@2x.png';
import Modal from '@mui/material/Modal';
import logo2 from '../../public/images/Group 139719.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import banner1 from '../../public/images/banner1.png';
import dummyImage from '../../public/images/commercial/image.png';

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
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
import moment from 'moment';
import Router from 'next/router';
import { connect } from 'react-redux';
import Link from 'next/link';
import { basePriceConvert } from 'utils/currency';

const CommercialPropertyCard = ({
  val,
  addToFavourite,
  contact,
  userData,
  setSlug,
  slug,
  commercialData,
}) => {
  const [open, setOpen] = useState(false);
  const [clientDetail, setclientDetail] = useState(null);
  const [PSlug, setPSlug] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="card mt-4"
        style={{
          width: '100%',
          border: ' 2.2px solid #eaeaea',
          // padding: ' 6px 6px',
          padding: '0',
          height: 'fit-content',
        }}
      >
        <>
          <Link
            href={`/PropertyDetails/?${commercialData?.property.slug}`}
            as={`/PropertyDetails/${commercialData?.property.slug}`}
          >
            <div
              style={{
                width: '100%',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                className="rounded-1 d-flex align-items-center px-2"
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  fontSize: '9px',
                  backgroundColor: 'rgb(46 46 46/0.8)',
                  color: '#ffff',
                  height: '20px',
                  zIndex: 1,
                }}
              >
                Possession: {commercialData?.property.availability_status}{' '}
              </div>
              {commercialData?.property?.images ? (
                <img
                  src={
                    commercialData?.property?.images.filter(
                      (j) =>
                        j.photo_type == 'featured' && j.photo_res == 'large'
                    )[0].photo_url
                  }
                  alt="Card cap"
                  height={700}
                  className="rounded-3 card-img-top"
                  style={{ borderTopLeftRadius: '5px' }}
                />
              ) : (
                <Image
                  src={dummyImage}
                  alt="Card cap"
                  height={700}
                  className="rounded-3"
                  style={{ borderTopLeftRadius: '5px' }}
                />
              )}
            </div>
          </Link>
        </>

        {/* <p className="sponsored">Sponsored</p> */}

        <>
          {/* <button
            className="favourite-icon"
            onClick={() => addToFavourite(val.id)}
          >
            <StarRoundedIcon />
          </button> */}
        </>

        <div className="share-btn">
          <button className="share-icon">
            <ShareOutlinedIcon />
          </button>
          <div className="share-popup">
            <p style={{ fontWeight: '600' }}>Share on : </p>
            <div className="d-flex justify-content-around align-items-center">
              <FacebookShareButton
                url={`https://estatedekho.com/PropertyDetails/`}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <FacebookMessengerShareButton
                url={`https://estatedekho.com/PropertyDetails/`}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
              <WhatsappShareButton
                url={`https://estatedekho.com/PropertyDetails/`}
                // title={title}
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <EmailShareButton
                url={`https://estatedekho.com/PropertyDetails/`}
                // subject={title}
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
              <TwitterShareButton
                url={`https://estatedekho.com/PropertyDetails/`}
                // title={title}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <TelegramShareButton
                url={`https://estatedekho.com/PropertyDetails/`}
                // title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>
          </div>
        </div>

        <>
          <Link
            href={`/PropertyDetails/?${commercialData?.property.slug}`}
            as={`/PropertyDetails/${commercialData?.property.slug}`}
          >
            <div className="row card-body cursor-pointer">
              <div className="d-flex flex-row px-3">
                <div className="col-sm-8">
                  <h1
                    style={{
                      textOverflow: 'ellipsis',
                      width: '100%',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textTransform: 'capitalize',
                    }}
                  >
                    {commercialData?.property.society?.prop_title}
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: ' #818181',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {' '}
                      For Sale
                    </span>
                  </h1>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: ' #818181',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    By {commercialData?.property?.client.client_name}
                  </span>
                </div>
                <div
                  className="col-sm-4 d-flex flex-column text-end"
                  style={{ lineHeight: 0.7, position: 'relative' }}
                >
                  <h3>
                    <span
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: '600',
                      }}
                    >
                      ₹
                    </span>{' '}
                    {basePriceConvert(commercialData?.property.prop_cost)}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',

                      fontWeight: 500,
                      color: ' #818181',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Noto Sans', sans-serif",
                        fontWeight: '600',
                      }}
                    >
                      ₹
                    </span>{' '}
                    {commercialData?.property.pricing.price_per_unit}{' '}
                    {commercialData?.property.pricing.price_per_unit_type}
                  </p>
                  <p
                    style={{
                      fontSize: '9px',
                      position: 'absolute',
                      right: '2px',
                      bottom: '-14px',
                      whiteSpace: 'nowrap',
                      fontWeight: 500,
                      color: ' #818181',
                    }}
                  >
                    Tax & Govt. charges inclusive
                  </p>
                </div>
              </div>

              <div className="d-flex flex-row px-3 mt-2">
                <div className="col-sm-8" style={{ lineHeight: 1.5 }}>
                  <h1
                    style={{
                      textOverflow: 'ellipsis',
                      width: '100%',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      fontSize: '13px',
                      textTransform: 'capitalize',
                    }}
                  >
                    {commercialData?.property.society.prop_kind} space
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: ' #818181',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {' '}
                      Located in
                    </span>
                  </h1>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      // color: ' #000',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {commercialData?.property?.society?.location_hub}{' '}
                    {commercialData?.property?.society?.address_locality}
                    {commercialData?.property?.society?.address_city}
                  </span>
                  {/* <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 400,
                      color: ' #818181',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Negotiable: Yesn
                  </p> */}
                </div>
                <div className="col-sm-4 d-flex flex-column align-items-end">
                  <p
                    className="rounded-1 px-1 mt-3"
                    style={{
                      backgroundColor: '#606060',
                      color: 'white',
                      width: 'fit-content',
                      fontSize: '10px',
                      lineHeight: '1.9',
                    }}
                  >
                    Area :{' '}
                    {commercialData?.property.built_up_area ||
                      commercialData?.property.carpet_area ||
                      commercialData?.property.super_builtup_area}{' '}
                    Sqft
                  </p>
                </div>
              </div>
              {/* {commercialData?.property.amenities.length > 0 && (
                <div>
                  <div
                    className="d-flex flex-wrap mx-2 py-1"
                    style={{
                      borderBottom: '0.1px solid lightgray',
                      borderTop: '0.1px solid lightgray',
                    }}
                  >
                    {commercialData?.property.amenities
                      ?.filter(
                        (e) =>
                          e.amenity_code !== 'lift' &&
                          e.amenity_code !== 'piped_gas' &&
                          e.amenity_code !== 'pet_friendly' &&
                          e.amenity_code !== 'overhead_tank'
                      )
                      .map((key) => {
                        return (
                          <>
                            <div
                              className="d-flex align-items-center rounded-1 px-1 my-1"
                              style={{
                                backgroundColor: '#f5f5f5',
                                color: '#696969',
                                width: 'fit-content',
                                fontSize: '9px',
                                marginRight: '8px',
                                height: '20px',
                                border: '0.1px solid lightgray',
                              }}
                            >
                              {key.amenity_code || 'lift'}
                            </div>
                          </>
                        );
                      })}

                    <div
                      className="d-flex align-items-center rounded-1 px-2 my-1"
                      style={{
                        backgroundColor: 'rgb(140 140 140)',
                        color: '#ffff',
                        width: 'fit-content',
                        fontSize: '9px',
                        marginRight: '8px',
                        height: '20px',
                      }}
                    >
                      More
                    </div>
                  </div>
                </div>
              )} */}
              <div className="row d-flex justify-content-between mt-2">
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
                    {commercialData?.logo ? (
                      <Image src={commercialData.logo} width={50} height={50} />
                    ) : (
                      <img
                        src={`https://ui-avatars.com/api/?background=random&name=${commercialData?.property.client.client_name}`}
                        width={37}
                        height={40}
                      />
                    )}
                    <></>
                    <p
                      className="px-1"
                      style={{
                        fontSize: '1vw',
                        fontWeight: '600',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: '200px',
                      }}
                    >
                      {commercialData?.property.client.client_name}
                    </p>
                  </div>

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
                </div>
              </div>
            </div>
          </Link>
          <div
            className="d-flex justify-content-center align-items-center cursor-pointer mt-2 py-2"
            style={{
              backgroundColor: '#19469b',
              borderBottomLeftRadius: '7px',
              borderBottomRightRadius: '7px',
            }}
          >
            <a href="tel:8585854850">
              <div className="d-flex flex-row align-items-baseline ">
                <h1
                  className=" mt-1"
                  style={{ color: 'white', fontSize: '13px' }}
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  Contact Now{' '}
                  <ExpandCircleDownOutlinedIcon
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      transform: 'rotate(-90deg)',
                      marginLeft: '5px',
                    }}
                  />
                </h1>
              </div>
            </a>
          </div>
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
                open={handleOpen}
                slug={PSlug}
                profile={userData}
              />
            </Box>
          </Modal>
        </>
      </div>
    </>
  );
};

export default connect((state) => {
  return {
    slug: state.propertyListing.slug,
  };
}, {})(CommercialPropertyCard);

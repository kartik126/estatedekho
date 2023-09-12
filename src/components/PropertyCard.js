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
import DynamicImage from './DynamicImage';

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
import LoginModal from './LoginModal/LoginModal';
import { basePriceConvert } from 'utils/currency';
const PropertyCard = ({
  val,
  contact,
  userData,
  setSlug,
  slug,
  city_name,
  token,
  getSearchData,
}) => {

  const [open, setOpen] = useState(false);
  const [clientDetail, setclientDetail] = useState(null);
  const [PSlug, setPSlug] = useState('');
  const [loginOpen, setloginOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setloginOpen(false);
  };

  const addToFavourite = (e) => {
    if (token == null) {
      setloginOpen(!loginOpen);
    } else {
      let response = apiClient.post(
        apiClient.Urls.addToFavourite,
        { property_id: e },
        true
      );
      response.then((result) => {
        if (result.success) {
          setTimeout(() => {
            getSearchData('property', 1, 'add');
          }, 500);
        } else {
          setTimeout(() => {
            getSearchData('property', 1, 'add');
          }, 500);
        }
        console.warn('added to favourite----->>>>>', result);
      });
    }
  };

  return (
    <>
    
        <Modal
          open={loginOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LoginModal close={handleClose} />
          </Box>
        </Modal>
   
      <div
        className="card"
        style={{
          width: '100%',
          border: '1px solid rgb(209, 209, 209)',
          paddingBottom: '0px',
        }}
        key={val.id}
      >
        <Link
          href={`/PropertyDetails/?${val.slug}`}
          as={`/PropertyDetails/${val.slug}`}
        >
          <a target={'_blank'}>
            <>
              {val.images?.length > 0 ? (
                <DynamicImage
                  key={val.id}
                  src={
                    val.images.filter(
                      (j) =>
                        j.photo_type == 'featured' && j.photo_res == 'large'
                    )[0].photo_url
                  }
                  alt={'Card cap'}
                  width={'100%'}
                  height={'50%'}
                />
              ) : (
                <Image
                  className="card-img-top"
                  src={ed}
                  alt="Card cap"
                  width={'100%'}
                  height={'200px'}
                />
              )}
            </>
          </a>
        </Link>
        {val.favourited ? (
          <>
            <button
              className="favourite-icon"
              onClick={() => addToFavourite(val.id)}
            >
              <StarRoundedIcon/>
            </button>
          </>
        ) : (
            <button
              className="favourite-icon"
              onClick={() => addToFavourite(val.id)}
            >
              <StarBorderRoundedIcon/>
            </button>
      
        )}

        <div className="share-btn">
          <button className="share-icon">
            <ShareOutlinedIcon />
          </button>
          <div className="share-popup">
            <p style={{ fontWeight: '600' }}>Share on : </p>
            <div className="d-flex justify-content-around align-items-center">
              <FacebookShareButton
                url={`https://estatedekho.com/PropertyDetails/${val.slug}`}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <FacebookMessengerShareButton
                url={`https://estatedekho.com/PropertyDetails/${val.slug}`}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
              <WhatsappShareButton
                url={`https://estatedekho.com/PropertyDetails/${val.sluPpropg}`}
                // title={title}
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <EmailShareButton
                url={`https://estatedekho.com/PropertyDetails/${val.slug}`}
                // subject={title}
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
              <TwitterShareButton
                url={`https://estatedekho.com/PropertyDetails/${val.slug}`}
                // title={title}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <TelegramShareButton
                url={`https://estatedekho.com/PropertyDetails/${val.slug}`}
                // title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>
          </div>
        </div>

          <Link
            href={`/PropertyDetails/?${val.slug}`}
            as={`/PropertyDetails/${val.slug}`}
          >
            <a target={'_blank'}>
              {/* <a target="_blank"> */}
              {val.society && (
                <div
                  className="row card-body cursor-pointer"
                  onClick={() => {
                    setSlug(val.slug);
                  }}
                >
                  <div className="col-xs-9">
                    <h1
                      style={{
                        textOverflow: 'ellipsis',
                        width: '68%',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textTransform: 'capitalize',
                      }}
                    >
                      {val.society?.prop_title}
                    </h1>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 400,
                        color: ' #818181',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      By {val.client?.client_name}
                    </span>
                    <div className="d-flex flex-column ">
                      <p
                        style={{
                          lineHeight: '1.3',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '80%',
                        }}
                      >
                        {val.society?.prop_type != 'plot' ? (
                          <span
                            style={{
                              fontWeight: '600',
                              fontSize: '12px',
                            }}
                          >
                            {val.BHKRange ? <>{val.BHKRange} BHK</> : <></>}{' '}
                            {val.society?.prop_type}
                          </span>
                        ) : (
                          <span
                            style={{
                              fontWeight: '600',
                              fontSize: '12px',
                            }}
                          >
                            {val.society?.prop_subtype}
                          </span>
                        )}{' '}
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 400,
                            color: '#818181',
                          }}
                        >
                          for Sale in {val.society?.address_locality}
                          <br />
                          <p
                            style={{
                              fontSize: '11px',
                              fontWeight: '600',
                            }}
                          >
                            {val.society?.address_locality},
                            {val.society?.address_city}
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
                        {val.minPrice != val.maxPrice ? (
                          <>
                            <>
                              <h3>
                                <span
                                  style={{
                                    fontFamily: "'Noto Sans', sans-serif",
                                    fontWeight: '600',
                                  }}
                                >
                                  {' '}
                                  ₹
                                </span>{' '}
                                {basePriceConvert(val.minPrice)}
                              </h3>
                            </>

                            <h3>-</h3>

                            <>
                              <h3>{basePriceConvert(val.maxPrice)}</h3>
                            </>
                          </>
                        ) : (
                          <>
                            <h3>
                              <span
                                style={{
                                  fontFamily: "'Noto Sans', sans-serif",
                                  fontWeight: '600',
                                }}
                              >
                                {' '}
                                ₹
                              </span>{' '}
                              {basePriceConvert(val.pricing.base_cost)}
                            </h3>
                          </>
                        )}
                      </div>
                      {val.interaction?.rera_id != null ? (
                        <>
                          {' '}
                          <Image
                            src={Rera}
                            width={'38px'}
                            height={'16px'}
                            alt=""
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="p-2 d-flex align-items-center col-sm-12 property-details">
                      <div
                        className="col"
                        style={{
                          borderRight: '1px solid rgb(232 232 232)',
                        }}
                      >
                        {/* {props.type == 'property' ? ( */}
                        <>
                          <p
                            style={{
                              textAlign: 'left',
                              fontSize: '12px',
                              fontWeight: '400',
                              color: '#a8acb3',
                              height: '10px',
                              whiteSpace: 'nowrap',
                              paddingRight: '3px',
                            }}
                          >
                            {(val.built_up_area && 'BuiltUp area') ||
                              (val.super_builtup_area && 'Superbuiltup area') ||
                              (val.carpet_area && 'Carpet area') ||
                              (val.plot_area && 'Plot area')}
                          </p>
                          <p
                            style={{
                              textAlign: 'left',
                              fontSize: '11px',
                              fontWeight: '500',
                              height: '10px',
                              color: '#212429',
                            }}
                          >
                            {val.built_up_area ||
                              val.super_builtup_area ||
                              val.carpet_area ||
                              val.plot_area}{' '}
                            {val.pricing.price_per_unit_type == 'Sqft'
                              ? 'sq.ft'
                              : val.pricing.price_per_unit_type}
                          </p>
                        </>
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
                            fontSize: '11px',
                            fontWeight: '400',
                            color: '#a8acb3',
                            height: '10px',
                          }}
                        >
                          Avg. Price
                        </p>
                        <p
                          style={{
                            textAlign: 'left',
                            fontSize: '11px',
                            fontWeight: '500',
                            height: '10px',
                            whiteSpace: 'nowrap',
                            color: '#212429',
                          }}
                        >
                          {val.pricing ? (
                            <>
                              {' '}
                              <span
                                style={{
                                  fontFamily: "'Noto Sans', sans-serif",
                                  fontWeight: '600',
                                }}
                              >
                                {' '}
                                ₹
                              </span>{' '}
                              {val.pricing?.price_per_unit}/
                              {val.pricing?.price_per_unit_type}
                            </>
                          ) : (
                            <></>
                          )}
                        </p>
                      </div>
                      <div className="pl-4 col">
                        <p
                          style={{
                            textAlign: 'left',
                            fontSize: '12px',
                            fontWeight: '400',
                            color: '#a8acb3',
                            height: '10px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Possession starts
                        </p>
                        <p
                          style={{
                            textAlign: 'left',
                            fontSize: '11px',
                            fontWeight: '500',
                            height: '10px',
                            color: '#212429',
                          }}
                        >
                          {(val.plot_area && 'Immediate') ||
                            (val.uc_date ? (
                              <>
                                {moment(val.uc_date, 'DD/MM/YYYY').isBefore(
                                  moment()
                                )
                                  ? 'Ready to Move'
                                  : moment(val.uc_date, 'DD/MM/YYYY').format(
                                      'MMM YYYY'
                                    )}
                              </>
                            ) : (
                              'Ready to Move'
                            ))}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
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
                      {val.client?.microsite ? (
                        <>
                          {' '}
                          <img
                            src={
                              apiClient.Urls.imgUrl +
                              val.client?.microsite.header?.logo
                            }
                            width={'40px'}
                            height={'40px'}
                            style={{
                              borderRadius: '3px',
                            }}
                            alt=""
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={`https://ui-avatars.com/api/?background=random&name=${val.client?.client_name}`}
                            width={37}
                            height={40}
                          />
                        </>
                      )}
                      <p
                        className="px-1"
                        style={{
                          paddingTop: '3px',
                          fontSize: '1vw',
                          fontWeight: '600',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          width: 'auto',
                        }}
                      >
                        {val.client?.client_name}
                      </p>
                    </div>

                    {val.interaction?.listing_status == 'approved' ? (
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
              )}
            </a>
          </Link>

        <div className="d-flex justify-content-center align-items-center m-2 card-bottom">
          <h1
            className="cursor-pointer"
            onClick={() => {
              contact(val.slug), setclientDetail(val.client), handleOpen();
              setPSlug(val.slug);
            }}
          >
            Contact Now <ExpandCircleDownOutlinedIcon />
          </h1>
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
      </div>
    </>
  );
};

export default connect((state) => {
  return {
    slug: state.propertyListing.slug,
  };
}, {})(PropertyCard);

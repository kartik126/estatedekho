import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Rera from '../../../public/images/Group 204282@2x.png';
import Image from 'next/image';
import Link from 'next/link';
import verified from '../../../public/images/verified.png';
import Router from 'next/router';
import apiClient from 'utils/apiClient';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Hidden, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import estd from '../../../public/images/estd.jpeg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import logo2 from '../../../public/images/Group 139719.png';
import image from '../../../public/images/Group 139719.png';
import { useEffect } from 'react';
import * as React from 'react';
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
import LoginModal from 'components/LoginModal/LoginModal';
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
import moment from 'moment';
import { basePriceConvert } from 'utils/currency';
import { useSelector } from 'react-redux';
import DynamicImage from 'components/DynamicImage';

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
const shareStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 150,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 0,
  pt: 2,
  px: 4,
  pb: 3,
};
function Homecardcontainer({
  title,
  titlebold,
  topVillaData,
  refresh,
  type,
  view,
}) {
  const goToSearch = (e) => {
    Router.push({
      pathname: `/PropertyListing/${e}-for-sale-in-${global.city}`,
      query: {
        propertyType: e,
        type: type,
      },
    });
  };
  console.log('top villa', topVillaData);
  const [open, setOpen] = useState(false);
  const [clientDetail, setclientDetail] = useState(null);
  const [loginOpen, setloginOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [share, setshare] = useState(false);
  const [lead_name, setlead_name] = useState('');
  const [lead_email, setlead_email] = useState('');
  const [lead_phone, setlead_phone] = useState('');
  const [Active, setActive] = useState(false);
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);
  const [slug, setSlug] = useState('');
  const city_name = useSelector((state) => state.city_name);

  const addToFavourite = (e) => {
    if (localStorage.getItem('authToken') !== null) {
      var token = localStorage.getItem('authToken');
    } else {
      token = 'null';
    }
    if (token == 'null') {
      setloginOpen(!open);
    } else {
      let response = apiClient.post(
        apiClient.Urls.addToFavourite,
        { property_id: e },
        true
      );
      response.then((result) => {
        if (result.message == 'Added') {
          refresh('Hyderabad');
        } else if (result.message == 'Removed from favourites') {
          refresh('Hyderabad');
        }
        console.warn('added to favourite----->>>>>', result);
      });
    }
  };
  const getProfile = () => {
    let res = apiClient.get(apiClient.Urls.getProfile, {}, true);
    res.then((result) => {
      if (result.success) {
        setProfile(result.profile);
      } else {
        setProfile(null);
      }
    });
  };
  useEffect(() => {
    getProfile();
    if (localStorage.getItem('authToken') != 'null') {
      var token = localStorage.getItem('authToken');
      setToken(token);
    }
  }, []);

  const contact = (e) => {
    if (token != null) {
      let response = apiClient.post(
        apiClient.Urls.propertyContact,
        {
          name: profile.name,
          email: profile.email || 'xyz@gmail.com',
          phone: profile.phone,
          slug: e,
        },
        true
      );
      response.then((result) => {
        if (result.success) {
          handleOpen();
        } else {
          handleOpen();
        }

        console.warn('contact property----->>>>>', result);
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setloginOpen(false);
    setOpen(false);
    setActive(false);
  };

  return (
    <>
      <div className="row topvilla_main">
        <div className="row topvilla_heading">
          <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
            <h1>
              {title}
              <span style={{ fontWeight: '700' }}> {titlebold}</span>
            </h1>

            <p onClick={() => goToSearch(view)}>
              View All <ExpandCircleDownOutlinedIcon />{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="product-all-contents">
        <div className="row topvilla_view">
          {topVillaData?.map((val) => {
            return (
              <>
                {val?.property != null ? (
                  <>
                    <div className="col-lg-4 col-md-6">
                      <div
                        className="card"
                        style={{
                          width: ' 100%',
                          border: '1px solid rgb(209, 209, 209)',
                          paddingBottom: '0px',
                        }}
                      >
                        <Link
                          href={`/PropertyDetails/?${val.property.slug}`}
                          as={`/PropertyDetails/${val.property.slug}`}
                        >
                          <a target={'_blank'}>
                            <>
                              {val.property?.images?.length > 0 ? (
                                <DynamicImage
                                  key={val.id}
                                  src={
                                    val.property.images.filter(
                                      (j) =>
                                        j.photo_type == 'featured' &&
                                        j.photo_res == 'large'
                                    )[0].photo_url
                                  }
                                  alt={'Card cap'}
                                  width={'100%'}
                                  height={'50%'}
                                />
                              ) : (
                                <Image
                                  className="card-img-top"
                                  src={image}
                                  width={'100%'}
                                  height={'200px'}
                                  alt="Card cap"
                                />
                              )}
                            </>
                          </a>
                        </Link>
                        {/* <p>{apiClient.Urls.imgUrl} {val.featured_image_path}</p> */}
                        {/* <p className="sponsored">Sponsored</p> */}

                        {val.property.favourited ? (
                          <>
                            <button
                              className="favourite-icon"
                              onClick={() => addToFavourite(val.property.id)}
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
                            <p style={{ fontWeight: '600' }}>Share on : </p>
                            <div className="d-flex justify-content-around align-items-center">
                              <FacebookShareButton
                                url={
                                  'https://estatedekho.com/PropertyDetails/' +
                                  val.property.slug
                                }
                                className="Demo__some-network__share-button"
                              >
                                <FacebookIcon size={32} round />
                              </FacebookShareButton>
                              <FacebookMessengerShareButton
                                url={
                                  'https://estatedekho.com/PropertyDetails/' +
                                  val.property.slug
                                }
                                appId="521270401588372"
                                className="Demo__some-network__share-button"
                              >
                                <FacebookMessengerIcon size={32} round />
                              </FacebookMessengerShareButton>
                              <WhatsappShareButton
                                url={
                                  'https://estatedekho.com/PropertyDetails/' +
                                  val.property.slug
                                }
                                title={title}
                                className="Demo__some-network__share-button"
                              >
                                <WhatsappIcon size={32} round />
                              </WhatsappShareButton>
                              <EmailShareButton
                                url={
                                  'https://estatedekho.com/PropertyDetails/' +
                                  val.property.slug
                                }
                                subject={title}
                                body="body"
                                className="Demo__some-network__share-button"
                              >
                                <EmailIcon size={32} round />
                              </EmailShareButton>
                              <TwitterShareButton
                                url={
                                  'https://estatedekho.com/PropertyDetails/' +
                                  val.property.slug
                                }
                                title={title}
                                className="Demo__some-network__share-button"
                              >
                                <TwitterIcon size={32} round />
                              </TwitterShareButton>
                              <TelegramShareButton
                                url={
                                  'https://estatedekho.com/PropertyDetails/' +
                                  val.property.slug
                                }
                                title={title}
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
                          <a target={'_blank'}>
                            <div className="row card-body cursor-pointer">
                              <div className="col-xs-9">
                                <h1
                                  style={{
                                    textOverflow: 'ellipsis',
                                    width: '75%',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textTransform: 'capitalize',
                                  }}
                                >
                                  {val.property.society?.prop_title}
                                </h1>
                                <span
                                  style={{
                                    fontSize: '12px',
                                    fontWeight: 400,
                                    color: ' #818181',
                                  }}
                                >
                                  By {val.property.client?.client_name}
                                </span>
                                <div className="d-flex flex-column ">
                                  <p style={{ lineHeight: '1.3' }}>
                                    {val.property.society?.prop_type !=
                                    'Plot' ? (
                                      <span
                                        style={{
                                          fontWeight: '600',
                                          fontSize: '12px',
                                        }}
                                      >
                                        {val.property.bedrooms ? (
                                          <>{val.property.bedrooms} BHK</>
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
                                        {val.property.society?.prop_subtype}
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
                                      {val.property.society?.address_locality}
                                      <br />
                                      <p
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                        }}
                                      >
                                        {val.property.society.address_locality},
                                        {val.property.society?.address_city}
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
                                  {val.property.interaction?.rera_id != null ? (
                                    <>
                                      {' '}
                                      <Image
                                        src={Rera}
                                        width={'50px'}
                                        height={'20px'}
                                        alt=""
                                      />
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                  <div className="d-flex">
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
                                      {basePriceConvert(
                                        val.property.pricing?.base_cost
                                      )}
                                    </h3>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="p-2 d-flex align-items-center col-sm-12 property-details">
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
                                        color: 'rgb(147, 150, 156)',
                                        height: '10px',
                                      }}
                                    >
                                      {(val.property.built_up_area &&
                                        'Built Up Area') ||
                                        (val.property.super_builtup_area &&
                                          'SuperBuiltup Area') ||
                                        (val.property.carpet_area &&
                                          'Carpet Area') ||
                                        (val.property.plot_area && 'Plot area')}
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
                                          fontFamily: "'Noto Sans', sans-serif",
                                          fontWeight: '600',
                                        }}
                                      >
                                        {' '}
                                        ₹
                                      </span>{' '}
                                      {val.property.built_up_area ||
                                        val.property.super_builtup_area ||
                                        val.property.carpet_area ||
                                        val.property.plot_area}{' '}
                                      {val.property.pricing
                                        ?.price_per_unit_type == 'Sqft'
                                        ? 'sq.ft'
                                        : val.property.pricing
                                            ?.price_per_unit_type}
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
                                        color: '#333',
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
                                                ?.price_per_unit_type
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
                                  {val.property.client?.microsite ? (
                                    <>
                                      {' '}
                                      <img
                                        src={
                                          apiClient.Urls.imgUrl +
                                          val.property.client?.microsite?.header
                                            ?.logo
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
                                      width: '244px',
                                    }}
                                  >
                                    {val.property.client?.client_name}
                                  </p>
                                </div>

                                {val.property.interaction?.listing_status ==
                                'approved' ? (
                                  <>
                                    {' '}
                                    <div
                                      className="verified-div"
                                      style={{ marginRight: '10px' }}
                                    >
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
                          </a>
                        </Link>
                        <div className="d-flex justify-content-center align-items-center m-2 card-bottom">
                          <h1
                            className="cursor-pointer"
                            onClick={() => {
                              contact(val.property.slug);
                              setclientDetail(val.property.client);
                              handleOpen();
                              setSlug(val.property.slug);
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
                              slug={slug}
                              profile={profile}
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
      </div>
      <Modal
        open={loginOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginModal close={handleClose} />
        </Box>
      </Modal>{' '}
    </>
  );
}

export default Homecardcontainer;

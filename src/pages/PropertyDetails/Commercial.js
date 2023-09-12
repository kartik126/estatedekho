import React, { useEffect, useState } from 'react';
import apiClient from 'utils/apiClient';
import Image from 'next/image';
import logo from '../../../public/images/edlogo2.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Footer from 'components/footer/Footer';
import ContactButton from 'components/ContactDeveloperButton/ContactButton';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginModal from 'components/LoginModal/LoginModal';
import SearchIcon from '@mui/icons-material/Search';
import { Chip } from '@mui/material';
import flag from '../../../public/images/flag.png';
import Drawer from '@mui/material/Drawer';
import home2 from '../../../public/images/Group 202291@2x.png';
import calendar2 from '../../../public/images/Group 202288@2x.png';
import rupee from '../../../public/images/Group 202290@2x.png';
import homesize2 from '../../../public/images/Group 202310@2x.png';
import location from '../../../public/images/Group 202131@2x.png';
import homesize from '../../../public/images/Group 202309@2x.png';
import buiding from '../../../public/images/Group 202306@2x.png';
import calendar from '../../../public/images/Group 202305@2x.png';
import price from '../../../public/images/Group 202304@2x.png';
import home from '../../../public/images/Group 202146@2x.png';
import rera from '../../../public/images/Group 202308@2x.png';
import SideMenu from 'components/sidemenu/SideMenu';
import { connect } from 'react-redux';
import {
  getCities,
  getLocalities,
  setCityName,
  setLocalities,
} from 'redux/action/cities';
import commercialData from 'models/CommercialPrroperties';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-slideshow-image/dist/styles.css';

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
const gallery = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  overflow: 'hidden',
};
const options = {
  showThumbs: false,
  showArrows: true,
};
function Commercial({
  getCities,
  setCityName,
  getLocalities,
  cities,
  city_name,
  localities,
  setLocalities,
  pdata,
  meta,
}) {
  const router = useRouter();
  const [token, settoken] = useState(null);
  const [profile, setprofile] = useState('');
  const [displaySearch, setdisplaySearch] = useState(false);
  const [query, setquery] = useState('');
  const [loginOpen, setloginOpen] = useState(false);
  const [openDrawer, setopenDrawer] = useState(false);
  const [clientDetail, setclientDetail] = useState('');
  const [open, setopen] = useState(false);
  const [userData, setuserData] = useState(null);
  const [data, setdata] = useState(null);

  const handleClose = () => {
    setloginOpen(false);
    setopen(false);
  };
  const goTolisting = (e, x) => {
    // var city = localStorage.getItem('city');
    Router.push({
      pathname: `/PropertyListing/property-for-sale-in-${city_name}`,
      query: {
        optionId: e,
        locality: x,
      },
    });
  };
  const handleOpen = () => {
    setopen(true);
  };

  const getProfile = () => {
    let res = apiClient.get(apiClient.Urls.getProfile, {}, true);
    res.then((result) => {
      if (result.success) {
        setuserData(result.profile);
      } else {
        setuserData(null);
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
      setloginOpen(true);
    } else {
      let response = apiClient.post(
        apiClient.Urls.addToFavourite,
        { property_id: e },
        true
      );
      response.then((result) => {
        var slug = localStorage.getItem('propertySlug');
        if (result.success) {
          // refresh('Hyderabad');
          // getPropertyDetails(slug);
        } else {
          // getPropertyDetails(slug);
        }

        console.warn('added to favourite----->>>>>', result);
      });
    }
  };
  useEffect(() => {
    if (router.query.commercialId == 1) {
      setdata(commercialData[0]);
    }
    if (router.query.commercialId == 2) {
      setdata(commercialData[1]);
    }
    if (router.query.commercialId == 3) {
      setdata(commercialData[2]);
    }
    if (router.query.commercialId == 4) {
      setdata(commercialData[3]);
    }
    if (router.query.commercialId == 5) {
      setdata(commercialData[4]);
    }

    // router.route.replace('/PropertyDetails','ghfhg')
    var params = new URLSearchParams(router.asPath);
    if (!router.isReady) return;
    console.log('router', router);
    // router.asPath.replace('?','/');
  }, [router.isReady]);
  const handleMenuClose = () => {
    setopenDrawer(false);
  };

  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    interval: 2000,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
  });
  useEffect(() => {
    console.log('props-------------=============', cities);
    if (localStorage.getItem('authToken') != 'null') {
      var token = localStorage.getItem('authToken');
      getProfile();
      settoken(token);
    }
    if (localStorage.getItem('profile') != 'null') {
      var profile = localStorage.getItem('profile');
      setprofile(profile);
    }
    getCities();
    console.log('property data===============>', pdata);
  }, []);
  return (
    <>
      {/* Property details header start */}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 999,
          background: '#fff',
        }}
      >
        <div className="d-flex align-items-center listing-header">
          <div className="col-sm-3 px-3 d-flex align-items-center cursor-pointer">
            <Link href="/">
              <Image src={logo} width={160} height={45} alt="estatedekho.com" />
            </Link>
          </div>
          <div className="d-flex flex-row justify-content-center ">
            <div className="d-flex align-items-center">
              {' '}
              <div
                className="d-flex justify-content-center display"
                style={{
                  borderTopLeftRadius: '12px',
                  borderBottomLeftRadius: '12px',
                  background: '#e37d32',
                  width: '150px',
                  height: '100%',
                }}
              >
                <select
                  style={{ color: '#ffff', paddingRight: '16px' }}
                  // value={cities?.[ind]?.city_name}
                  // onClick={() => setpageNumber(1)}
                  className="select-option display"
                  onChange={(e) => {
                    setCityName(e.target.value);
                    global.city = e.target.value;
                  }}
                >
                  {cities?.map((val) => {
                    return (
                      <>
                        <option value={val.city_name}>{val.city_name}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div
                onClick={() => {
                  setdisplaySearch(false);
                  getLocalities();
                }}
                style={{
                  width: '130px',
                  borderRadius: 10,
                  position: 'absolute',
                  zIndex: 3,
                  top: '27%',
                  display: 'flex',
                  alignItems: 'center',
                  /* justify-content: space-between; */
                  justifyContent: 'start',
                  margin: '0px 160px',
                }}
              >
                <div className="d-flex flex-row display ">
                  {/* {displaySearch ? null : (
                    <Chip label={props.data?.society?.address_locality} />
                  )} */}
                </div>
              </div>
              <div>
                <input
                  className="listing-input display"
                  value={query}
                  onClick={() => {
                    var page = 1;
                    setdisplaySearch(true);
                    getLocalities();
                  }}
                  onChange={(e) => {
                    setquery(e.target.value);
                    getLocalities(e.target.value);
                  }}
                />
                {displaySearch ? null : (
                  <Chip
                    style={{
                      position: 'relative',
                      height: '25px',
                      top: '-3px',
                      right: '23%',
                    }}
                    label="+ Add"
                    variant="outlined"
                    className="cursor-pointer display "
                    onClick={() => {
                      setdisplaySearch(true);
                    }}
                  />
                )}
              </div>
              <SearchIcon
                className="display"
                style={{
                  position: 'absolute',
                  fontSize: '20px',
                  color: 'gray',
                  marginLeft: '35.4rem',
                }}
              />
              <div
                className=" nav_right px-3"
                style={{ position: 'absolute', right: '0' }}
              >
                <Link href={'https://seller.estatedekho.com'}>
                  <a target={'_blank'}>
                    <button
                      onClick={() => setdisplaySearch(false)}
                      className="postad-btn"
                      id="postad-listing"
                    >
                      <Image src={flag} alt="" width={'37%'} height={'23%'} />{' '}
                      Post ad for{' '}
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          marginLeft: '4px',
                          fontFamily: 'Poppins',
                        }}
                      >
                        Free <ExpandCircleDownOutlinedIcon />
                      </span>{' '}
                    </button>
                  </a>
                </Link>
                {token == null ? (
                  <>
                    <button
                      className="d-flex align-items-center login-btn"
                      onClick={() => {
                        setloginOpen(true);
                      }}
                    >
                      {' '}
                      <AccountCircleOutlinedIcon />
                      Log in
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      style={{ width: 'fit-content' }}
                      className="d-flex align-items-center login-btn"
                      onClick={() => {
                        setopenDrawer(true);
                      }}
                    >
                      {' '}
                      <AccountCircleOutlinedIcon />
                      {profile != null ? <>{profile.split(' ', [1])}</> : <></>}
                      {/* Aman */}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={() => setopenDrawer(false)}
          >
            <Box width="400px">
              <SideMenu profileData={profile} close={handleMenuClose} />
            </Box>
          </Drawer>
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
          </>
        </div>
      </div>
      {/* property details header end */}

      <div className="home_container" style={{ overflowY: 'hidden' }}>
        {/* contact developer modal start */}
        <ContactButton
          client={data?.client}
          userData={data?.userData}
          slug={data?.slug}
          token={token}
        />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...gallery }}>
            <Carousel {...options}>
              {data?.images?.map((val) => {
                return (
                  <>
                    <div>
                      <Image src={val.img} width={800} height={600} alt="" />
                    </div>
                  </>
                );
              })}
            </Carousel>
          </Box>
        </Modal>
        {/* contact developer modal end */}

        {data ? (
          <div className="px-2">
            <div className="row">
              <div className="col-md-9 mob-image-slider">
                <div className="slider-main">
                  <Carousel {...getConfigurableProps()}>
                    {data?.images?.map((val) => {
                      return (
                        <>
                          {' '}
                          <a target={'_blank'}>
                            <div className="slider-main-commercial">
                              <div className="slide-image ">
                                <Image src={val.img} objectFit={'contain'} />
                              </div>
                            </div>
                          </a>
                        </>
                      );
                    })}
                  </Carousel>
                </div>
              </div>

              <div className="col-md-3 gallery-card">
                <div className=" gallery-image-container border cursor-pointer">
                  <div className=" gallery-title">
                    <h3>Outdoor</h3>
                    <FiberManualRecordIcon />
                    <h3>Photos</h3>
                  </div>
                  <Image src={data?.images[0].img} height={220} />
                </div>
                <div className=" gallery-image-container border cursor-pointer">
                  <div className=" gallery-title">
                    <h3>Indoor</h3>
                    <FiberManualRecordIcon />
                    <h3>Photos</h3>
                  </div>
                  <Image src={data?.images[1].img} height={220} />
                </div>
              </div>
            </div>

            {/* PROPERTY ALL DETAILS */}

            <div className="row property-all-details">
              <div className="col left-details">
                <div className="row flex-row ">
                  {data?.logo ? (
                    <>
                      <div className="col-2 p-0">
                        <Image
                          src={data?.logo}
                          width={'100px'}
                          height={'100px'}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-2 p-0">
                        <img
                          src={`https://ui-avatars.com/api/?background=random&name=${data?.name}`}
                          width={'100px'}
                          height={'100px'}
                          alt="company logo"
                        />
                      </div>
                    </>
                  )}
                  <div
                    className="col d-flex flex-column"
                    id="pos"
                    style={{
                      width: '67%',
                      overflowY: 'hidden',
                    }}
                  >
                    <h1
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: '100%',
                        paddingRight: '10px',
                      }}
                    >
                      {data?.name}
                    </h1>
                    <h5
                      style={{
                        textOverflow: 'ellipsis',
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                      }}
                    >
                      <> {data?.location}</>
                    </h5>

                    <h4>By {data?.developer}</h4>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div style={{ padding: '18px 0px' }}>
                    <button
                      className="display action-button"
                      onClick={() => {
                        setclientDetail(data?.client);
                        handleOpen();
                      }}
                    >
                      <FileDownloadOutlinedIcon />
                      Download Brochure
                    </button>
                    {data ? (
                      <>
                        {data?.favourited ? (
                          <>
                            {' '}
                            <button
                              className="action-button"
                              onClick={() => addToFavourite(data?.id)}
                            >
                              <StarRoundedIcon />
                              Saved
                            </button>
                          </>
                        ) : (
                          <>
                            {' '}
                            <button
                              className="action-button"
                              onClick={() => addToFavourite(data?.id)}
                            >
                              <StarBorderRoundedIcon />
                              Save
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-end right-details">
                <div className="col-sm-8">
                  <div className="d-flex justify-content-end align-items-center text-align-right">
                    {/* <h1>₹{data?.pricing.base_cost}</h1> */}

                    <h1>₹ {data?.cost}</h1>

                    <FiberManualRecordIcon />
                    <p>
                      <span
                        style={{
                          fontFamily: "'Noto Sans', sans-serif",
                          fontWeight: '500',
                        }}
                      >
                        ₹
                      </span>
                      {data?.priceperunit}
                    </p>
                  </div>
                  {/* <h5 style={{ color: '#212429' }}>All Inclusive</h5> */}
                </div>
              </div>
            </div>

            {/* property configuration ,possesion.... */}

            <div className="row property-configurations">
              <div className="col details-block">
                <div className="col details-block-icon">
                  <Image
                    src={home2}
                    width={40}
                    height={32}
                    alt=""
                    // style={{ right: '0' }}
                    className="details-block-img"
                  />
                </div>
                <div
                  className="col"
                  style={{
                    lineHeight: '0.5',
                    position: 'absolute',
                    bottom: '0',
                  }}
                >
                  <p>Configuration</p>
                  <h5>Commercial Space</h5>
                </div>
              </div>
              <div className="col details-block">
                <div className="col details-block-icon">
                  <Image
                    src={location}
                    width={30}
                    height={40}
                    alt=""
                    style={{ right: '0' }}
                  />
                </div>
                <div
                  style={{
                    lineHeight: '0.5',
                    position: 'absolute',
                    bottom: '0',
                  }}
                >
                  <p>Location</p>
                  <h5> {data?.location}</h5>
                </div>
              </div>
              <div className="col details-block">
                <div className="col details-block-icon">
                  <Image
                    src={calendar2}
                    width={32}
                    height={33}
                    alt=""
                    style={{ right: '0' }}
                  />
                </div>
                <div
                  style={{
                    lineHeight: '0.5',
                    position: 'absolute',
                    bottom: '0',
                  }}
                >
                  <p>Possession</p>
                  <h5>{data?.possession}</h5>
                </div>
              </div>
              <div className="col details-block">
                <div className="col details-block-icon">
                  <Image
                    src={rupee}
                    width={32}
                    height={32}
                    alt=""
                    style={{ right: '0' }}
                  />
                </div>
                <div
                  style={{
                    lineHeight: '0.5',
                    position: 'absolute',
                    bottom: '0',
                  }}
                >
                  <p>Avg. price</p>
                  <h5>
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
                      {data?.priceperunit || 'N/A'}
                    </>
                  </h5>
                </div>
              </div>
              <div
                className="col  details-block "
                style={{ borderRight: 'none' }}
              >
                <div className="col details-block-icon">
                  <Image
                    src={homesize2}
                    width={40}
                    height={30}
                    alt=""
                    style={{ right: '0' }}
                  />
                </div>
                <div
                  style={{
                    lineHeight: '0.5',
                    position: 'absolute',
                    bottom: '0',
                  }}
                >
                  <p>Area</p>
                  {data ? (
                    <>
                      {' '}
                      <h5>{data?.area}</h5>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            {/* {PROPERTY UNITS START} */}

            <div
              className="row"
              style={{
                paddingTop: '40px',
              }}
            ></div>

            {/* PROPERTY UNITS END */}

            {/*PROPERTY DESCRIPTION START */}

            <div className="row every-details">
              <div className="col">
                <h1 className="property-details-heading">
                  Property <span style={{ fontWeight: '700' }}>Details</span>{' '}
                </h1>
              </div>
              <div>
                <div className="col ">
                  <p>{data?.detail}</p>
                </div>
              </div>
            </div>

            {/*PROPERTY DESCRIPTION END*/}

            {/* PROPERTY OVERVIEW START */}

            <div className="row">
              <div className="col-sm-9 property-overview-top">
                <h1 className="property-details-heading">
                  <span style={{ fontWeight: '700' }}>Overview </span>
                  of {data?.name}
                </h1>
                <div className="overview-grid" style={{ paddingTop: '25px' }}>
                  <div className="row ">
                    <div className="col-sm overview-block">
                      <p>
                        Area <></>
                      </p>

                      <div className="d-flex ">
                        <Image
                          src={homesize}
                          alt=""
                          width={35}
                          height={18}
                          position="fixed"
                        />

                        <h3>{data?.area}</h3>
                      </div>
                    </div>
                    {data?.type == 'property' ? (
                      <>
                        <div className="col-sm overview-block">
                          <p>Project size</p>
                          <div className="d-flex ">
                            <Image
                              src={buiding}
                              alt=""
                              width={'35px'}
                              height={'30px'}
                              position="fixed"
                            />
                            <h3>1 Building . 30 Untils</h3>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {data != null ? (
                      <>
                        <div className="col-sm overview-block">
                          <p>Possession starts</p>
                          <div className="d-flex ">
                            <Image
                              src={calendar}
                              alt=""
                              width={30}
                              height={30}
                              position="fixed"
                            />
                            <h3>{data?.possession}</h3>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-sm overview-block">
                      <p>avg. price</p>
                      <div className="d-flex ">
                        <Image
                          src={price}
                          alt=""
                          width={32}
                          height={30}
                          position="fixed"
                        />{' '}
                        <h3>
                          <span
                            style={{
                              fontFamily: "'Noto Sans', sans-serif",
                              fontWeight: '500',
                            }}
                          >
                            {' '}
                            ₹
                          </span>
                          {data?.priceperunit}
                        </h3>
                      </div>
                    </div>

                    {data?.type == 'property' ? (
                      <>
                        {' '}
                        <div className="col-sm overview-block">
                          <p>configuration</p>
                          <div className="d-flex ">
                            <Image
                              src={home}
                              alt=""
                              width={'35px'}
                              height={'30px'}
                              position="fixed"
                            />

                            {data ? (
                              <>
                                {' '}
                                <h3>
                                  {data?.bedrooms}BHK {data?.society.prop_type}
                                </h3>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="row">
                    <>
                      {' '}
                      <div className="col-sm overview-block">
                        <p>Lp No.</p>
                        <div className="d-flex ">
                          <Image
                            src={rera}
                            alt=""
                            width={30}
                            height={30}
                            position="fixed"
                          />

                          <h3>{data?.lp || 'N/A'}</h3>
                        </div>
                      </div>
                    </>

                    <div className="col-sm overview-block"></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="gallerymodal-main cursor-pointer ">
                  <Image
                    onClick={() => handleOpen()}
                    src={data?.images[0].img}
                    alt=" "
                    height={420}
                    width={350}
                  />
                  <p>Overview • {data?.images.length} Photos</p>
                </div>
              </div>
            </div>

            {/* PROPERTY OVERVIEW END      */}

            {/*AMENITIES START */}

            <div
              className="row"
              style={{
                paddingTop: '40px',
              }}
            >
              <h1 className="property-details-heading">
                <span style={{ fontWeight: '700' }}>Amenities </span>
              </h1>
              <div className="col-sm-9 amenities-top ">
                <div
                  className="overview-grid py-4"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                  }}
                >
                  {data?.amenities.map((val) => {
                    return (
                      <>
                        <div className="col-sm amenities-block">
                          <div
                            style={{
                              position: 'absolute',
                              left: '10px',
                            }}
                          >
                            {val.img}
                            {/* {val.img} */}
                            {/* <Image src={maintainance} width={25} height={30} alt="" /> */}
                          </div>
                          <div
                            style={{
                              position: 'absolute',
                              left: '10px',
                              top: '40px',
                            }}
                          >
                            {' '}
                            <h1>{val?.code}</h1>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="col-sm-3 d-flex align-items-center"></div>
            </div>

            {data?.aboutDeveloper && (
              <div className="row">
                <h1 className="property-details-heading">
                  About
                  <span style={{ fontWeight: '700' }}> {data?.developer}</span>
                </h1>
                <div className="pt-2 d-flex flex-row align-items-center">
                  <Image src={data?.logo} width={50} height={50} />
                  <p
                    className="px-3"
                    style={{ fontWeight: 600, fontSize: '15px' }}
                  >
                    {data?.developer}
                  </p>
                </div>
                <p
                  className="py-4"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    textAlign: 'justify',
                  }}
                >
                  {data?.aboutDeveloper}
                </p>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
        {displaySearch ? (
          <>
            {' '}
            <div
              onClick={(e) => {
                if (e.target == e.currentTarget) {
                  setdisplaySearch(false);
                }
              }}
              style={{
                width: '100%',
                height: '100vh',
                position: 'absolute',
                top: '0',
                zIndex: '999',

                backgroundColor: 'rgba(0,0,0,0.0)',
              }}
            >
              <div className="search-local">
                <div></div>
                <div>
                  <p
                    style={{
                      fontWeight: '600',
                      color: '#969696',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      fontSize: '12px',
                    }}
                  >
                    Popular
                  </p>

                  {localities?.map((o) => {
                    return (
                      <>
                        <p
                          className="d-flex justify-content-between cursor-pointer "
                          style={{
                            color: '#767676',
                          }}
                          onClick={() => {
                            var page = 1;
                            setquery('');
                            setdisplaySearch(false);
                            var arr = [];
                            arr.push(o.param + o.id);
                            goTolisting(arr, o.label);
                            // setLoadMore(true);
                          }}
                        >
                          {o.label}{' '}
                          <span
                            style={{
                              color: '#19469b',
                              fontSize: '10px',
                            }}
                          >
                            {' '}
                            {o.type}
                          </span>
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </>
  );
}

export default connect(
  (state) => {
    return {
      cities: state.cities.cities,
      city_name: state.cities.city_name,
      localities: state.cities.localities,
    };
  },
  {
    getCities,
    setCityName,
    getLocalities,
    setLocalities,
  }
)(Commercial);

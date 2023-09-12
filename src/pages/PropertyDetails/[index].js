import React, { useEffect, useState } from 'react';
import { SEO } from 'components/seo';
import Schema, { makeOrganizationalSchema } from 'components/schema';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import { DOMAIN } from 'utils/constant';
import { wrapper } from 'redux/store';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import logo2 from '../../../public/images/Group 139719.png';
import image from '../../../public/images/Group 139719.png';
import apiClient from 'utils/apiClient';
import { isProdEnv } from 'utils/helpers';
import ImageSlider from 'components/PropertyImageGallery/ImageSlider';
import Image from 'next/image';
import GalleryCard from 'components/PropertyImageGallery/GalleryCard';
import logo from '../../../public/images/edlogo2.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Footer from 'components/footer/Footer';
import GalleryModal from 'components/gallerywithmodel/GalleryModal';
import ContactButton from 'components/ContactDeveloperButton/ContactButton';
import Rera from '../../../public/images/Group 204282@2x.png';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import RequestFloorPlanButton from 'components/RequestFloorPlanButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginModal from 'components/LoginModal/LoginModal';
import SearchIcon from '@mui/icons-material/Search';
import { Chip } from '@mui/material';
import flag from '../../../public/images/flag.png';
import Drawer from '@mui/material/Drawer';
import Skeleton from '@mui/material/Skeleton';
import { basePriceConvert } from 'utils/currency';
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
import SideMenu from 'components/sidemenu/SideMenu';
import moment from 'moment';
import Amenities from 'components/PropertyDetailComponents/Amenities';
import UnitOptions from 'components/PropertyDetailComponents/UnitOptions';
import PropertyDescription from 'components/PropertyDetailComponents/PropertyDescription';
import PropertyOverview from 'components/PropertyDetailComponents/PropertyOverview';
import Faq from 'components/PropertyDetailComponents/Faq';
import PropertyConfiguration from 'components/PropertyDetailComponents/PropertyConfiguration';
import { route } from 'next/dist/server/router';
import { connect } from 'react-redux';
import {
  getCities,
  getLocalities,
  setCityName,
  setLocalities,
} from 'redux/action/cities';

import ExploreNeighbourhood from 'components/PropertyDetailComponents/ExploreNeighbourhood';
import CommercialPropertyOverview from 'components/CommercialPropertyOverview';
import DynamicImage from 'components/DynamicImage';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // var state = store.getState();
    const response = await apiClient.post(
      `${apiClient.Urls.getPropertyDetail}`,
      { slug: context.query.index, config: 'all' },
      true
    );
    const data = response;
    console.log('slug===================================>>>>>>>>>', response);

    if (!response.success) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        pdata: data.data,
        meta: data.meta,
      },
    };
  }
);
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
function PropertyDetails({
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
  const [loader, setloader] = useState(false);
  const [clientDetail, setclientDetail] = useState('');
  const [slug, setslug] = useState('');
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
  const getPropertyDetails = (e) => {
    setloader(true);
    let res = apiClient.post(
      apiClient.Urls.getPropertyDetail,
      {
        slug: e,
        config: 'all',
      },
      true
    );
    res.then((result) => {
      if (result.success) {
        setdata(result.data);
        setloader(false);
        console.log('property arrray', result.data);
      } else {
        setdata(null);
      }
    });
  };
  const getProfile = () => {
    let res = apiClient.get(apiClient.Urls.getProfile, {}, true);
    res.then((result) => {
      if (result.success) {
        console.log('profileeeeee', result.profile);
        setuserData(result.profile);
      } else {
        setuserData(null);
      }
    });
  };
  const contact = (e) => {
    if (token != null) {
      let response = apiClient.post(
        apiClient.Urls.propertyContact,
        {
          name: userData.name,
          email: userData.email || 'random@gmail.com',
          phone: userData.phone,
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
  const activateInput = () => {
    document.getElementById('activateInput').focus();
  };
  useEffect(() => {
    var params = new URLSearchParams(router.asPath);
    if (!router.isReady) return;
    getPropertyDetails(router.query.index);
    console.log('router', router);
    // router.asPath.replace('?','/');
  }, [router.isReady]);

  const callToAction = () => {
    return (
      <>
        <ContactButton
          userData={userData}
          client={data?.client}
          token={token}
          slug={data?.slug}
        />
      </>
    );
  };

  const handleMenuClose = () => {
    setopenDrawer(false);
  };

  const myLoader = ({ src }) => {
    return apiClient.Urls.imgUrl + data?.client?.microsite?.header?.logo;
  };

  useEffect(() => {
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
    // var city = localStorage.getItem('city');
    // global.city = city;
  }, []);

  return (
    <>
      <SEO
        title={meta?.title || 'EstateDekho'}
        description={meta?.description || 'Real Estate in Hyderabad'}
        keywords={meta?.keywords || 'Property for Sell/Buy in Hyderabad'}
        canonical={DOMAIN}
        // image={iypDefaultIcon}
      />
      {isProdEnv() && (
        <>
          <SiteLinksSearchBoxJsonLd
            url={DOMAIN}
            potentialActions={[
              {
                target: `${DOMAIN}/search?searchTerm`,
                queryInput: 'search_term_string',
              },
            ]}
          />
          <Schema
            structuredData={makeOrganizationalSchema({
              name: meta.title || 'EstateDekho',
              url: DOMAIN,
              logo: `${DOMAIN}/images/new/logo/dark.svg`,
              email: 'info@estatedekho.com',
              telephone: '8247269476',
              description: meta.description || 'Real Estate in Hyderabad',
              contactPoint: [
                {
                  telephone: '8247269476',
                  contactType: 'technical support',
                },
              ],
            })}
          />
        </>
      )}

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

          <div>
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
                    value={city_name}
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
                    justifyContent: 'start',
                    margin: '0px 160px',
                  }}
                ></div>
                <div>
                  <input
                    className="listing-input display"
                    id="activateInput"
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
                        activateInput();
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
                        {profile != null ? (
                          <>{profile.split(' ', [1])}</>
                        ) : (
                          <></>
                        )}
                        {/* Aman */}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            {displaySearch && (
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
            )}
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

      {loader ? (
        <>
          <div className="d-flex  flex-row row px-lg-5 px-sm-3 py-lg-5">
            <div
              className=" d-flex flex-column  col-sm-8 py-5"
              style={{ paddingLeft: '7%' }}
            >
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={400}
                className="rounded-4"
              />
              <div className="d-flex flex-row">
                <Skeleton
                  variant="rectangular"
                  width={'10%'}
                  height={80}
                  className="rounded-1 mt-2"
                />
                <div className="w-100 d-flex flex-column">
                  <Skeleton
                    variant="rectangular"
                    width={'40%'}
                    height={20}
                    className="rounded-1 mt-2 mx-2"
                  />
                  <Skeleton
                    variant="rectangular"
                    width={'20%'}
                    height={15}
                    className="rounded-1 mt-2 mx-2"
                  />
                  <Skeleton
                    variant="rectangular"
                    width={'30%'}
                    height={15}
                    className="rounded-1 mt-2 mx-2"
                  />
                </div>
              </div>
            </div>
            <div
              className="display d-flex flex-column py-5 col-sm-4 "
              style={{ paddingRight: '7%' }}
            >
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={190}
                className="rounded-4"
              />
              <Skeleton
                variant="rectangular"
                width={'100%'}
                height={190}
                className="rounded-4 mt-2"
              />
            </div>
          </div>
        </>
      ) : data != null ? (
        <div className="home_container" style={{ overflowY: 'hidden' }}>
          {/* contact developer modal start */}
          <ContactButton
            client={data?.client}
            userData={data?.userData}
            slug={data?.slug}
            token={token}
          />
          {/* contact developer modal end */}

          {data ? (
            <div className="px-2">
              <div className="row align-items-center">
                <div className="col-md-9 mob-image-slider">
                  {pdata && <ImageSlider data={pdata} />}
                </div>
                {data?.society.prop_type === 'Plot' ||
                data?.society.prop_type === 'Farm Land' ||
                data?.society?.prop_kind === 'Commercial' ? (
                  <div className="col-sm-3 display">
                    {data?.images ? (
                      <>
                        {' '}
                        {data?.images.length > 0 ? (
                          <>
                            <GalleryModal image={data?.images} />
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div
                    className="col-md-3 gallery-card"
                    style={{ height: '25rem' }}
                  >
                    {data?.images ? (
                      <GalleryCard images={data?.images} />
                    ) : null}
                  </div>
                )}
              </div>

              {/* PROPERTY ALL DETAILS */}

              <div className="row property-all-details">
                <div className="col left-details">
                  <div className="row flex-row ">
                    {data?.client.microsite ? (
                      <>
                        <div className="col-2 p-0">
                          <Image
                            src={
                              apiClient.Urls.imgUrl +
                              data?.client?.microsite?.header?.logo
                            }
                            width={'100px'}
                            height={'100px'}
                            alt={pdata?.client?.client_name}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-2 p-0">
                          <img
                            src={`https://ui-avatars.com/api/?background=random&name=${data?.client.client_name}`}
                            width={'100px'}
                            height={'100px'}
                            // alt={`${data?.society.prop_title} ${
                            //   data?.BHKRange || data?.bedrooms
                            // } BHK ${data?.society.prop_type} by ${
                            //   data?.client.client_name
                            // } in ${data?.society.address_locality} ${
                            //   data?.society.address_city
                            // }`}
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
                        {data?.society ? (
                          <>{data?.society.prop_title}</>
                        ) : (
                          <></>
                        )}
                      </h1>
                      <h5
                        style={{
                          textOverflow: 'ellipsis',
                          width: '100%',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                        }}
                      >
                        {data?.society ? (
                          <>
                            {' '}
                            {data?.society.address_locality},{' '}
                            {data?.society.address_city}
                          </>
                        ) : (
                          <></>
                        )}
                      </h5>

                      <h4>By {data?.client.client_name}</h4>
                    </div>
                    <div>
                      {/* {data?.favourited ? (
                        <>
                          {' '}
                          <button
                            className="action-button"
                            onClick={() => addToFavourite(data?.id)}
                          >
                            <StarRoundedIcon />
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
                          </button>
                        </>
                      )} */}
                    </div>
                  </div>
                  {/* <div className="d-flex flex-row">
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
                  </div> */}
                </div>
                <div
                  className="col d-flex flex-column align-items-end right-details"
                  style={{ padding: 0 }}
                >
                  <div className="col-sm-8">
                    <div className="d-flex flex-column justify-content-end align-items-end text-align-right">
                      {/* <h1>₹{data?.pricing.base_cost}</h1> */}
                      {data?.minPrice != data?.maxPrice ? (
                        <>
                          <h1>₹ {basePriceConvert(data?.minPrice)}</h1>
                          <h1>
                            {'  '}-{'  '}
                          </h1>
                          <h1>{basePriceConvert(data?.maxPrice)}</h1>
                        </>
                      ) : (
                        <>
                          <h1>
                            ₹ {basePriceConvert(data?.pricing?.base_cost)}
                          </h1>
                        </>
                      )}
                      <p>
                        {data?.pricing ? (
                          <>
                            {' '}
                            <span
                              style={{
                                fontFamily: "'Noto Sans', sans-serif",
                                fontWeight: '500',
                              }}
                            >
                              {' '}
                              ₹
                            </span>
                            {data?.pricing.price_per_unit}/
                            {data?.pricing.price_per_unit_type}
                          </>
                        ) : (
                          <></>
                        )}
                      </p>
                    </div>
                    {/* <h5 style={{ color: '#212429' }}>All Inclusive</h5> */}
                  </div>
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '13px',
                      color: 'gray',
                    }}
                  >
                    Posted on {moment(data?.created_at).format('MMM D')}{' '}
                  </p>
                </div>
              </div>

              {/* property configuration ,possesion.... */}

              <PropertyConfiguration data={data} />

              {/* {PROPERTY UNITS START} */}

              <div
                className="row"
                style={{
                  paddingTop: '40px',
                }}
              >
                {data?.society.prop_type == 'Plot' ||
                data?.society.prop_type == 'Farm Land' ? null : (
                  <UnitOptions
                    data={data}
                    basePriceConvert={basePriceConvert}
                  />
                )}
              </div>

              {/* PROPERTY UNITS END */}

              {/*PROPERTY DESCRIPTION START */}

              <PropertyDescription data={data} />

              {/*PROPERTY DESCRIPTION END*/}

              {/* PROPERTY OVERVIEW START */}

              <div className="row" style={{ padding: '40px 0' }}>
                <div
                  className="col-sm-9 property-overview-top"
                  style={{ position: 'relative' }}
                >
                  <h1 className="property-details-heading">
                    <span style={{ fontWeight: '600' }}>Overview </span>
                    of{' '}
                    {data?.society ? <> {data?.society.prop_title}</> : <></>}
                  </h1>

                  {data?.society?.prop_kind === 'Commercial' ? (
                    <CommercialPropertyOverview data={data} />
                  ) : (
                    <PropertyOverview data={data} />
                  )}
                </div>
                <div className="col-sm-3">
                  {data?.images ? (
                    <>
                      {' '}
                      {data?.images.length > 0 ? (
                        <>
                          <GalleryModal image={data?.images} />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/* PROPERTY OVERVIEW END      */}

              {/*AMENITIES START */}

              {data?.society.prop_type == 'Plot' ||
              data?.society.prop_type == 'Farm Land' ? null : (
                <div className="row every-details">
                  <h1 className="property-details-heading">
                    <span style={{ fontWeight: '600', fontSize: '22px' }}>
                      Amenities{' '}
                    </span>
                  </h1>
                  <div className="col-sm-9 amenities-top ">
                    <div
                      className="overview-grid py-4"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto',
                      }}
                    >
                      {data?.amenities && <Amenities data={data?.amenities} />}
                    </div>
                  </div>
                  <div className="col-sm-3 d-flex align-items-center">
                    {data?.images ? (
                      <>
                        {' '}
                        {data?.images.length > 0 ? (
                          <>
                            <GalleryModal image={data?.images} />
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              )}

              {/*AMENITIES END*/}
              {/* Explore ExploreNeighbourhood start*/}

              {/* <ExploreNeighbourhood
                lat={data?.property_latitude}
                long={data?.property_longitude}
              /> */}

              {/* Explore ExploreNeighbourhood end*/}
              {/*SIMILAR PROPERTIES START*/}

              <div className="row">
                <div className="row topvilla_heading">
                  <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
                    <h1>
                      Similar
                      <span style={{ fontWeight: '600' }}> Properties</span>
                    </h1>
                  </div>
                </div>
                {data?.similar.map((val) => {
                  return (
                    <>
                      <div className="col-4 py-2">
                        <div
                          className="card"
                          style={{
                            width: ' 100%',
                            border: ' 2.2px solid #eaeaea',
                            paddingBottom: '0px',
                          }}
                        >
                          <Link
                            href={`/PropertyDetails/?${val.slug}`}
                            as={`/PropertyDetails/${val.slug}`}
                          >
                            <a target={'_blank'}>
                              {val.images.length > 0 ? (
                                <DynamicImage
                                  key={val.id}
                                  src={
                                    val.images.filter(
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
                            </a>
                          </Link>
                          {val.favourited ? (
                            <>
                              <button
                                className="favourite-icon"
                                onClick={() => addToFavourite(val.id)}
                              >
                                <StarRoundedIcon />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="favourite-icon"
                                onClick={() => {
                                  addToFavourite(val.id);
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
                                    val.slug
                                  }
                                  className="Demo__some-network__share-button"
                                >
                                  <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <FacebookMessengerShareButton
                                  url={
                                    'https://estatedekho.com/PropertyDetails/' +
                                    val.slug
                                  }
                                  appId="521270401588372"
                                  className="Demo__some-network__share-button"
                                >
                                  <FacebookMessengerIcon size={32} round />
                                </FacebookMessengerShareButton>
                                <WhatsappShareButton
                                  url={
                                    'https://estatedekho.com/PropertyDetails/' +
                                    val.slug
                                  }
                                  className="Demo__some-network__share-button"
                                >
                                  <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                                <EmailShareButton
                                  url={
                                    'https://estatedekho.com/PropertyDetails/' +
                                    val.slug
                                  }
                                  body="body"
                                  className="Demo__some-network__share-button"
                                >
                                  <EmailIcon size={32} round />
                                </EmailShareButton>
                                <TwitterShareButton
                                  url={
                                    'https://estatedekho.com/PropertyDetails/' +
                                    val.slug
                                  }
                                  className="Demo__some-network__share-button"
                                >
                                  <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <TelegramShareButton
                                  url={
                                    'https://estatedekho.com/PropertyDetails/' +
                                    val.slug
                                  }
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
                            <a target="_blank">
                              <>
                                <div
                                  className="row card-body cursor-pointer"
                                  // onClick={() => goToPropertyDetails(val)}
                                >
                                  <div className="col-xs-9">
                                    <h1
                                      style={{
                                        textOverflow: 'ellipsis',
                                        width: '200px',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textTransform: 'capitalize',
                                      }}
                                    >
                                      {val.society.prop_title}
                                    </h1>
                                    <span
                                      style={{
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        color: ' #818181',
                                      }}
                                    >
                                      By {val.client.client_name}
                                    </span>
                                    <div className="d-flex flex-column ">
                                      <p
                                        style={{
                                          lineHeight: '1.3',
                                          textOverflow: 'ellipsis',
                                          overflow: 'hidden',
                                          whiteSpace: 'nowrap',
                                          width: '60%',
                                        }}
                                      >
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
                                            color: '#818181',
                                          }}
                                        >
                                          for Sale in{' '}
                                          {val.society.address_locality}
                                          <br />
                                          <p
                                            style={{
                                              fontSize: '11px',
                                              fontWeight: '600',
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
                                    className="col-xs-3 d-flex align-items-top justify-content-end p-0"
                                    style={{
                                      position: 'absolute',
                                      textAlign: 'end',
                                    }}
                                  >
                                    <div className="px-1">
                                      {val.interaction.rera_id != null ? (
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

                                      {/* <h3>₹ {val.property.gross_cost}</h3> */}
                                      {val.pricing.base_cost >= 10000000 ? (
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
                                              val.pricing.base_cost / 10000000
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
                                              val.pricing.base_cost / 100000
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
                                          {(val.built_up_area &&
                                            'Built Up Area') ||
                                            (val.super_builtup_area &&
                                              'SuperBuiltup Area') ||
                                            (val.carpet_area &&
                                              'Carpet Area') ||
                                            (val.plot_area && 'Plot area')}
                                        </p>
                                        <p
                                          style={{
                                            textAlign: 'left',
                                            fontSize: '0.9vw',
                                            fontWeight: '500',
                                            height: '10px',
                                            whiteSpace: 'nowrap',
                                            color: '#333',
                                          }}
                                        >
                                          {val.built_up_area ||
                                            val.super_builtup_area ||
                                            val.carpet_area ||
                                            val.plot_area}{' '}
                                          {val.pricing.price_per_unit_type ==
                                          'Sqft'
                                            ? 'sq.ft'
                                            : val.pricing.price_per_unit_type}
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
                                            whiteSpace: 'nowrap',
                                            color: '#333',
                                          }}
                                        >
                                          {val.pricing ? (
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
                                                {val.pricing.price_per_unit}/
                                                {
                                                  val.pricing
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
                                          Possession
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
                                      {val.client.microsite ? (
                                        <>
                                          {' '}
                                          <img
                                            src={
                                              apiClient.Urls.imgUrl +
                                              val.client.microsite?.header?.logo
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
                                            src={`https://ui-avatars.com/api/?background=random&name=${val.client.client_name}`}
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
                                        {val.client.client_name}
                                      </p>
                                    </div>

                                    {val.interaction.listing_status ==
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
                                contact(val.slug);
                                setclientDetail(val.client);

                                handleOpen();
                                setslug(val.slug);
                                // setState({ slug: val.slug });
                              }}
                            >
                              Contact Now <ExpandCircleDownOutlinedIcon />
                            </h1>
                          </div>
                          {/* <Button >Open modal</Button> */}
                          {data?.clientDetail ? (
                            <Modal
                              open={data?.open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <ContactDeveloperPopup
                                  client={data?.clientDetail}
                                  close={handleClose}
                                  open={handleOpen}
                                  slug={data?.slug}
                                  profile={data?.userData}
                                />
                              </Box>
                            </Modal>
                          ) : null}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              {/* SIMILAR PROPERTIES END */}

              {/*FAQ START */}

              <Faq data={data} basePriceConvert={basePriceConvert} />

              {/* FAQ END */}
            </div>
          ) : (
            <></>
          )}
          {/* {displaySearch && (
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
          )} */}
        </div>
      ) : null}

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
)(PropertyDetails);

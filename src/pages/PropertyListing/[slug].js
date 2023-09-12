import React, { useCallback, useRef } from 'react';
import Footer from 'components/footer/Footer';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Rera from '../../../public/images/Group 204282@2x.png';
import Link from 'next/link';
import { SEO } from 'components/seo';
import Image from 'next/image';
import mobilebanner from '../../../public/images/mobilebanner.png';
import { Router, useRouter } from 'next/router';
import apiClient from 'utils/apiClient';
import { useEffect, useState } from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Chip, Drawer, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import nodata from '../../../public/images/nodatafound.jpg';
import ed from '../../../public/images/Group 139719@2x.png';
import toast, { Toaster } from 'react-hot-toast';
import Skeleton from '@mui/material/Skeleton';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../../public/images/edlogo2.png';
import flag from '../../../public/images/flag.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import estd from '../../../public/images/estd.jpeg';
import logo2 from '../../../public/images/Group 139719.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import loading from '../../../public/images/loading.svg';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import LoginModal from 'components/LoginModal/LoginModal';
import banner1 from '../../../public/images/banner1.png';
import banner2 from '../../../public/images/banner2.png';
import { setSlug, setLabel } from 'redux/action/propertyListing';
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
import ListingPopup from 'components/ListingPopup';
import SideMenu from 'components/sidemenu/SideMenu';
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
import moment from 'moment';
import Schema, { makeOrganizationalSchema } from 'components/schema';
import { DOMAIN } from 'utils/constant';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import { isProdEnv } from 'utils/helpers';
import { getCities, setCityName, getLocalities } from 'redux/action/cities';
import {
  setPropType,
  setbhk,
  setbudget,
  setsale,
  setconstruction,
  setloader,
  getSearchData,
  setsearchData,
  setHasMore,
  setLoadMore,
  setpageNumber,
  setMeta,
} from 'redux/action/propertyListing';
import { setPropertyType } from 'redux/action/home';
import { connect } from 'react-redux';
import PropertyCard from 'components/PropertyCard';
import { wrapper } from 'redux/store';
import CommercialPropertyCard from 'components/CommercialPropertyCard';
import { debounce } from 'utils/helpers';
import Select from 'react-select';

const marks = [
  {
    value: 0,
    label: '0Cr',
  },
  {
    value: 10000000,
    label: '1Cr',
  },
  {
    value: 20000000,
    label: '2Cr',
  },
  {
    value: 30000000,
    label: '3Cr',
  },
  {
    value: 40000000,
    label: '4Cr',
  },
  {
    value: 50000000,
    label: '5cr +',
  },
];
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
const popupStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 410,
  height: '70%',
  border: 'none',
  boxShadow: 10,
};
function valuetext(value) {
  return `${value}°C`;
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     var state = store.getState();
//     console.log(
//       'store ===============================================>',
//       state.cities
//     );
//     var city_name = state.cities.city_name;
//     var bhk = state.propertyListing.bhk;
//     var propType = state.propertyListing.propType;
//     var Label = state.propertyListing?.Label;
//     var { pType } = state.home.pType;

//     var bed = bhk?.filter((j) => j.isSelected)?.map((item) => item['value']);
//     var propertyType = state.propertyListing?.propType
//       ?.filter((j) => j.isSelected)
//       ?.map((item) => item['value']);
//     var arr = Label?.filter((j) => j.isSelected)?.map((item) => item['id']);

//     const response = await apiClient.post(
//       `${apiClient.Urls.searchListing}`,
//       {
//         property: 'property',
//         city: city_name,
//         bedrooms: bed || [],
//         search: arr || [],
//         property_type: propertyType,
//       },
//       true
//     );
//     console.log(
//       'seooooo data============================================================>>>>',
//       response.meta
//     );
//     const data = response;
//     return {
//       props: {
//         seoData: data.meta,
//       },
//     };
//   }
// );

function PropertyListing({
  cities,
  getCities,
  setCityName,
  city_name,
  getLocalities,
  localities,
  setPropType,
  setbhk,
  setbudget,
  setsale,
  setconstruction,
  bhk,
  PropType,
  budget,
  sale,
  construction,
  loader,
  setloader,
  Label,
  searchData,
  getSearchData,
  hasMore,
  loadMore,
  setHasMore,
  setLoadMore,
  setpageNumber,
  Total,
  pType,
  setPropertyType,
  seoData,
  setSlug,
  slug,
  setLabel,
  meta,
}) {
  const [query, setQuery] = useState('');
  const [displaySearch, setdisplaySearch] = useState(false);
  const [bhkpicker, setbhkpicker] = useState(false);
  const [PropTypepicker, setPropTypepicker] = useState(false);
  const [salepicker, setsalepicker] = useState(false);
  const [constructionpicker, setconstructionpicker] = useState(false);
  const [budgetpicker, setbudgetpicker] = useState(false);
  const [selectedBedrooms, setselectedBedrooms] = useState([]);
  const [selectedConstruction, setselectedConstruction] = useState([]);
  const [selectedFurnished, setselectedFurnished] = useState([]);
  const [selectedSale, setselectedSale] = useState([]);
  const [selectedPropType, setselectedPropType] = useState([]);
  const [updatePtype, setupdatePtype] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setuserData] = useState(null);
  const [Menu, setMenu] = useState(false);
  const [popup, setpopup] = useState(false);
  const [openDrawer, setopenDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [displayvalue, setDisplayValue] = useState([]);
  const [clientDetail, setclientDetail] = useState(null);
  const [PSlug, setPSlug] = useState('');
  const [displayFilter, setdisplayFilter] = useState(true);
  const [visible, setVisible] = useState(true);
  const [loginOpen, setloginOpen] = useState(false);
  const [projects, setProjects] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter();
  const {
    label,
    optionId,
    locality,
    propertyType,
    type,
    FilterType,
    location,
    FilterBudget,
    bedrooms,
    property,
    LabelDetails,
  } = router.query;
  const queries = {
    label,
    optionId,
    locality,
    propertyType,
    type,
    FilterType,
    location,
    bedrooms,
    FilterBudget,
    property,
    LabelDetails,
  };
  // const [hasMore, setHasMore] = useState(false);
  // const {seoData} = props;

  // const { seoData } = props;
  console.log('seoo dataaa', city_name);

  const handleScroll = debounce(() => {
    // alert('jhjhj')
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    getCities();

    if (localStorage.getItem('authToken') != 'null') {
      var token = localStorage.getItem('authToken');
      setToken(token);
      getProfile();
    }
    if (localStorage.getItem('profile') != 'null') {
      var profile = localStorage.getItem('profile');
      setProfile(profile);
    }

    const modalShown = sessionStorage.getItem('ListingModal');
    if (!modalShown) {
      setTimeout(() => {
        setpopup(true);
        sessionStorage.setItem('ListingModal', true);
      }, 9000);
    }

    if (queries != undefined) {
      if (type == 'null') {
        setProjects(true);
      } else {
        setLabel([]);
      }
      if (queries.propertyType) {
        selectedPropType.push(queries.propertyType);
        if (queries.propertyType == 'Apartment') {
          let objIndex = PropType.findIndex((e) => e.value == 'Apartment');
          PropType[objIndex].isSelected = true;
        }
        if (queries.propertyType == 'Villa') {
          let objIndex = PropType.findIndex((e) => e.value == 'Villa');
          PropType[objIndex].isSelected = true;
        }
        if (queries.propertyType == 'Independent house') {
          let objIndex = PropType.findIndex(
            (e) => e.value == 'Independent House'
          );
          PropType[objIndex].isSelected = true;
        }
        if (queries.propertyType == 'Premium house') {
          let objIndex = PropType.findIndex((e) => e.value == 'Premium house');
          PropType[objIndex].isSelected = true;
        }
        getSearchData(type, 1, 'add');
      }
      if (queries.bedrooms) {
        selectedBedrooms.push(queries.bedrooms);
      }
      if (queries.locality != '' && queries.locality != undefined) {
        if (queries.locality.indexOf(' ') != -1) {
          Label.push({
            name: queries.locality.replace(/\s+/g, '-'),
            isSelected: true,
            id: queries.optionId,
          });
        } else {
          Label.push({
            name: queries.locality + '-',
            isSelected: true,
            id: queries.optionId,
          });
        }
        getSearchData(type, 1, 'add');
      }
      if (queries.FilterBudget) {
        queries.FilterBudget;
        setbudget(queries.FilterBudget);
      }
      if (pType == 'plots') {
        selectedPropType.push('Plot');
        let arr = PropType.map((key) => {
          key.isSelected = false;
          return { ...key };
        });
        let objIndex = arr.findIndex((e) => e.value == 'Plot');
        arr[objIndex].isSelected = true;
        setPropType(arr);
      }
      getSearchData(type, 1, 'add');
    } else {
      getSearchData(type, 1, 'add');
    }
  }, [slug]);

  // useEffect(() => {
  //   function handleScroll() {
  //     const currentScrollPos = window.pageYOffset;
  //     if (prevScrollPos > currentScrollPos) {
  //       document.querySelector('.subheader').classList.remove('hidden');
  //     } else {
  //       document.querySelector('.subheader').classList.add('hidden');
  //     }
  //     setPrevScrollPos(currentScrollPos);
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [prevScrollPos]);

  const handleLabel = () => {
    let name = Label.map((item) => {
      item.isSelected = false;
      return { ...item };
    });
    // setLabel(name);
    setloader(true);
    getSearchData();
  };
  const selectBedroom = (ind) => {
    setloader(true);
    var page = 1;
    setpageNumber(page);
    let arr = bhk.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setbhk(arr);
    setsearchData([]);
    // setTimeout(() => {
    if (
      bhk.filter((j) => j.isSelected)?.map((item) => item['label']).length >
        0 ||
      PropType.filter((j) => j.isSelected).map((item) => item['label']).length >
        0
    ) {
      router.replace(
        `${bhk
          .filter((j) => j.isSelected)
          ?.map((item) => item['label'])
          .join('')}${PropType.filter((j) => j.isSelected)
          .map((item) => item['label'])
          .join('')}for-sale-in-${Label?.filter((j) => j.isSelected)
          ?.map((item) => item['name'])
          .join('')}${city_name.replace(/\s/g, '-')}`,
        null,
        { shallow: true }
      );
    } else {
      router.replace(
        `property-for-sale-in-${Label?.filter((j) => j.isSelected)
          ?.map((item) => item['name'])
          .join('')}${city_name.replace(/\s/g, '-')}`,
        null,
        {
          shallow: true,
        }
      );
    }
    //   var type = localStorage.getItem('type');
    getSearchData('property', 1, 'add');
    // }, 100);
  };
  const selectProperty = (ind) => {
    setloader(true);
    var page = 1;
    let arr = PropType.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setPropType(arr);
    setsearchData([]);

    // setTimeout(() => {
    if (
      bhk.filter((j) => j.isSelected)?.map((item) => item['label']).length >
        0 ||
      PropType.filter((j) => j.isSelected).map((item) => item['label']).length >
        0
    ) {
      router.replace(
        `${bhk
          .filter((j) => j.isSelected)
          ?.map((item) => item['label'])
          .join('')}${PropType.filter((j) => j.isSelected)
          .map((item) => item['label'])
          .join('')}for-sale-in-${Label?.filter((j) => j.isSelected)
          ?.map((item) => item['name'])
          .join('')}${city_name.replace(/\s/g, '-')}`,
        null,
        { shallow: true }
      );
    } else {
      router.replace(
        `property-for-sale-in-${Label?.filter((j) => j.isSelected)
          ?.map((item) => item['name'])
          .join('')}${city_name.replace(/\s/g, '-')}`,
        null,
        {
          shallow: true,
        }
      );
    }
    //   var type = localStorage.getItem('type');
    //   setpageNumber(page);
    setPropertyType('property');
    getSearchData('property', 1, 'add');
    // }, 100);
  };
  const selectSale = (ind) => {
    setloader(true);
    var page = 1;
    setpageNumber(page);
    let arr = sale.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setsale(arr);
    // setsearchData([]);
    // setTimeout(() => {
    //   getSearchData(Type);
    // }, 100);
  };
  const selectConstruction = (ind) => {
    setloader(true);
    var page = 1;
    setpageNumber(page);
    let arr = construction.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setconstruction(arr);
    getSearchData('property', 1, 'add');
    // setsearchData([]);
    // setTimeout(() => {
    //   getSearchData(Type, 1);
    // }, 100);
  };
  const addToFavourite = (e) => {
    if (token == 'null') {
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
  const contact = (e) => {
    if (token != null) {
      let response = apiClient.post(
        apiClient.Urls.propertyContact,
        {
          name: userData.name,
          email: userData.email || 'xyz@gmail.com',
          phone: userData.phone,
          slug: e,
        },
        true
      );
      response.then((result) => {
        if (result.success) {
          setOpen(true);
        } else {
          setOpen(true);
        }

        console.warn('contact property----->>>>>', result);
      });
    }
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
  const observer = useRef();
  const lastPropertyRef = useCallback(
    (node) => {
      if (loadMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((data) => {
        if (data[0].isIntersecting && hasMore) {
          setLoadMore(true);
          if (!projects)
            if (updatePtype) {
              getSearchData('property');
            } else {
              getSearchData('property');
            }
          else {
            getSearchData('null');
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMore, hasMore]
  );
  const handleClose = () => {
    setloginOpen(false);
    setpopup(false);
    setOpen(false);
  };
  const goToPropertyDetails = (val) => {
    // var locality = val.society?.address_locality.replace(/(^\s*)|(\s*$)/gi, '');
    // localStorage.setItem('propertySlug', val.slug);
    // setPSlug(val.slug)
    // console.warn('slugg', val?.slug);
    // setSlug(val.slug);
    // if (
    //   val.society?.prop_type.includes('Plot') ||
    //   val.society?.prop_type.includes('Farm')
    // ) {
    //   if (val.society?.address_locality.indexOf(' ') != -1) {
    //     window.open(
    //       `/PropertyDetails/${val.society?.prop_title.replace(
    //         /\s+/g,
    //         '-'
    //       )}-${val.society?.prop_type.replace(
    //         /\s+/g,
    //         '-'
    //       )}-by-${val.client?.client_name.replace(
    //         /\s+/g,
    //         '-'
    //       )}-in-${locality.replace(
    //         /\s/g,
    //         '-'
    //       )}-${val.society?.address_city.replace(/\s/g, '-')}`,
    //       '_blank'

    //     );
    //   } else {
    //     window.open(
    //       `/PropertyDetails/${val.society?.prop_title.replace(
    //         /\s+/g,
    //         '-'
    //       )}-${val.society?.prop_type.replace(
    //         /\s+/g,
    //         '-'
    //       )}-by-${val.client?.client_name.replace(/\s+/g, '-')}-in-${
    //         val.society?.address_locality
    //       }-${val.society?.address_city.replace(/\s/g, '-')}`,
    //       '_blank'
    //     );
    //   }
    // } else {
    //   if (val.society?.address_locality.indexOf(' ') != -1) {
    //     window.open(
    //       `/PropertyDetails/${val.society?.prop_title.replace(
    //         /\s+/g,
    //         '-'
    //       )}-${val.BHKRange?.replace(
    //         /[, ]+/g,
    //         '-'
    //       )}-BHK-${val.society?.prop_type.replace(
    //         /\s+/g,
    //         '-'
    //       )}-by-${val.client?.client_name.replace(
    //         /\s+/g,
    //         '-'
    //       )}-in-${locality.replace(
    //         /\s/g,
    //         '-'
    //       )}-${val.society?.address_city.replace(/\s/g, '-')}`,
    //       '_blank'
    //     );
    //   } else {
    //     window.open(
    //       `/PropertyDetails/${val.society?.prop_title.replace(
    //         /\s+/g,
    //         '-'
    //       )}-${val.BHKRange?.replace(
    //         /[, ]+/g,
    //         '-'
    //       )}-BHK-${val.society?.prop_type.replace(
    //         /\s+/g,
    //         '-'
    //       )}-by-${val.client?.client_name.replace(/\s+/g, '-')}-in-${
    //         val.society?.address_locality
    //       }-${val.society?.address_city.replace(/\s/g, '-')}`,
    //       '_blank'
    //     );
    //   }
    // }
    console.warn('slug isssssssss=========>>>>>>>>>>', slug);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent', // Set the background color to transparent
      border: 'none', // Remove the border
      boxShadow: 'none', // Remove the box shadow
      '&:hover': {
        border: 'none', // Remove border on hover
      },
      color: '#fff',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#e9f1fe' : 'transparent',
      '&:hover': {
        backgroundColor: state.isSelected ? '#e9f1fe' : '#f3f3f3',
      },
      color: '#000',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#fff', // Set the color of the selected text to white
      fontSize: '12px',
      fontWeight: 500,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#fff', // Set the color of the dropdown select icon to white
    }),
    menu: (provided, state) => ({
      ...provided,
      width: '140px', // Set the width of the option dropdown to 300px
      minWidth: '140px',
    }),
  };

  return (
    <>
      {/* Listing Popup */}
      <SEO
        title={meta?.title}
        description={
          'Apartment/Flat for sale in Kollur ,Marunji hyderabad. Verified Luxury Apartments for Sale/Buy with all amenities in hyderabad.'
        }
        keywords={
          'Real Estate, Property in hyderabad, Property in India, Properties in hyderabad, Property Sites hyderabad, Real Estate Portal, Apartment in hyderabad, Villas in hyderabad, All Properties in Hyderabad'
        }
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
              name: (seoData && seoData?.title) || 'EstateDekho',
              url: DOMAIN,
              logo: `${DOMAIN}/images/new/logo/dark.svg`,
              email: 'info@estatedekho.com',
              telephone: '8247269476',
              description:
                (seoData && seoData?.description) || 'Real Estate in Hyderabad',
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
      <Modal
        open={popup}
        onClick={handleClose}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={popupStyle}>
          <CancelIcon
            className="cursor-pointer"
            onClick={handleClose}
            style={{
              color: '#ffff',
              position: 'absolute',
              zIndex: '999',
              top: '4px',
              right: '4px',
            }}
          />

          <ListingPopup />
        </Box>
      </Modal>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 999,
          background: '#fff',
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center listing-header">
          <div className="col-sm-3 px-3 d-flex align-items-center cursor-pointer">
            <Link href="/">
              <Image src={logo} width={160} height={45} alt="" />
            </Link>
          </div>

          {/* search input field */}
          <div>
            <div className=" d-flex flex-row justify-content-center ">
              <div className="d-flex align-items-center">
                {' '}
                {Label?.filter((j) => j.isSelected)
                  .slice(0, 1)
                  ?.map((key, ind) => {
                    return (
                      <>
                        <>
                          {' '}
                          <div
                            onClick={() => setdisplaySearch(false)}
                            style={{
                              width: '130px',
                              borderRadius: 10,
                              position: 'absolute',
                              zIndex: 3,
                              top: '10%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'start',
                              margin: '0px 160px',
                            }}
                          >
                            <>
                              {' '}
                              {displaySearch ? (
                                <></>
                              ) : (
                                <>
                                  <div
                                    className="d-flex flex-row display "
                                    style={{ marginTop: '3px' }}
                                  >
                                    <div
                                      style={{
                                        marginLeft: '11px',
                                        maxWidth: ` ${
                                          Label?.filter((j) => j.isSelected)
                                            .length > 1
                                            ? '150px'
                                            : 'fit-content'
                                        }`,
                                        background: '#19469b',
                                        color: '#ffff',
                                        display: 'flex',
                                        whiteSpace: 'nowrap',
                                        borderRadius: '23px',
                                        height: '25px',
                                        fontSize: '10px',
                                        padding: '4px 11px',
                                      }}
                                    >
                                      <p
                                        style={{
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                          height: '100%',
                                        }}
                                      >
                                        {key.name.replaceAll('-', ' ')}
                                      </p>
                                    </div>
                                    {Label?.filter((j) => j.isSelected).length >
                                    1 ? (
                                      <div
                                        style={{
                                          marginLeft: '11px',
                                          maxWidth: 'fit-content',
                                          background: '#19469b',
                                          color: '#ffff',
                                          display: 'flex',
                                          whiteSpace: 'nowrap',
                                          borderRadius: '23px',
                                          height: '25px',
                                          fontSize: '10px',
                                          padding: '4px 11px',
                                        }}
                                      >
                                        <p>{`+${
                                          Label?.filter((j) => j.isSelected)
                                            .length - 1
                                        } More`}</p>
                                      </div>
                                    ) : null}
                                  </div>
                                </>
                              )}
                            </>

                            <p
                              onClick={() => {
                                displayvalue.pop(key.label);
                              }}
                              style={{ marginLeft: 20 }}
                            ></p>
                          </div>
                        </>
                      </>
                    );
                  })}
                <div className="d-flex flex-row align-items-center">
                  <div
                    className="d-flex justify-content-center display"
                    style={{
                      borderTopLeftRadius: '12px',
                      borderBottomLeftRadius: '12px',
                      background: '#e37d32',
                      width: '150px',
                      height: '41px',
                    }}
                  >
                    <div style={{ width: '140px' }}>
                      <Select
                        styles={customStyles}
                        value={{ value: city_name, label: city_name }}
                        onChange={(selectedOption) => {
                          setCityName(selectedOption.value);
                          global.city = selectedOption.value;
                          setLabel([]);
                          setloader(true);
                          getSearchData('property', 1, 'add');
                          setsearchData([]);
                        }}
                        options={cities?.map((val) => ({
                          value: val.city_name,
                          label: val.city_name,
                        }))}
                      />
                    </div>
                  </div>
                  <input
                    className="listing-input display"
                    value={query}
                    onClick={() => {
                      var page = 1;
                      setpageNumber(page);
                      setdisplaySearch(true);
                      getLocalities();
                    }}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      getLocalities(e.target.value);
                    }}
                  />
                  {/* {displaySearch ? null : (
                  <Chip
                    style={{
                      position: 'relative',
                      height: '25px',
                      top: '-1px',
                      right: '23%',
                    }}
                    label="+ Add"
                    variant="outlined"
                    className="cursor-pointer display "
                    onClick={() => {
                      setdisplaySearch(true);
                    }}
                  />
                )} */}
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
                    {Label?.filter((j) => j.isSelected)?.map((key, ind) => {
                      return (
                        <>
                          <h6
                            style={{
                              backgroundColor: 'white',
                              width: 'fit-content',
                              borderRadius: 10,
                            }}
                          >
                            {key ? (
                              <>
                                {' '}
                                <Chip
                                  label={key.name.replaceAll('-', ' ')}
                                  style={{
                                    height: '25px',
                                    fontSize: '10px',
                                  }}
                                  onDelete={() => {
                                    setpageNumber(1);
                                    setloader(true);
                                    setsearchData([]);
                                    if (Label.indexOf(key) > -1) {
                                      Label.splice(Label.indexOf(key), 1);
                                    }
                                    if (
                                      bhk
                                        .filter((j) => j.isSelected)
                                        ?.map((item) => item['label']).length >
                                        0 ||
                                      PropType.filter((j) => j.isSelected).map(
                                        (item) => item['label']
                                      ).length > 0
                                    ) {
                                      router.replace(
                                        `${bhk
                                          .filter((j) => j.isSelected)
                                          ?.map((item) => item['label'])
                                          .join('')}${PropType.filter(
                                          (j) => j.isSelected
                                        )
                                          .map((item) => item['label'])
                                          .join('')}for-sale-in-${Label.filter(
                                          (j) => j.isSelected
                                        )
                                          .map((item) => item['name'])
                                          .join('')}${city_name.replace(
                                          /\s/g,
                                          '-'
                                        )}`,
                                        null,
                                        { shallow: true }
                                      );
                                    } else {
                                      router.replace(
                                        `${pType}-for-sale-in-${Label.filter(
                                          (j) => j.isSelected
                                        )
                                          .map((item) => item['name'])
                                          .join('')}${city_name.replace(
                                          /\s/g,
                                          '-'
                                        )}`,
                                        null,
                                        { shallow: true }
                                      );
                                    }
                                    getSearchData('property', 1, 'add');
                                  }}
                                />
                              </>
                            ) : (
                              <></>
                            )}

                            <p
                              // onClick={() => {
                              //   displayvalue.pop(key.label),
                              //     setdisplaySearch(false);
                              // }}
                              style={{ marginLeft: 20 }}
                            ></p>
                          </h6>
                        </>
                      );
                    })}
                  </div>
                  <div>
                    <h6
                      style={{
                        fontWeight: '600',
                        color: '#969696',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '12px',
                      }}
                    >
                      Popular
                    </h6>

                    {localities ? (
                      <>
                        {' '}
                        {localities.map((o) => {
                          return (
                            <>
                              <p
                                className="d-flex justify-content-between cursor-pointer "
                                style={{
                                  color: '#767676',
                                }}
                                onClick={() => {
                                  var page = 1;
                                  var regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;
                                  setpageNumber(page);
                                  setdisplaySearch(false),
                                    setsearchData([]),
                                    setupdatePtype(true);
                                  setQuery('');
                                  {
                                    o.label.indexOf(' ') != -1
                                      ? regexp.test(o.label)
                                        ? Label.push({
                                            name:
                                              o.label.replace(/\s+/g, '-') +
                                              '-',
                                            isSelected: true,
                                            id: o.param + o.id,
                                          })
                                        : Label.push({
                                            name: o.label.replace(/\s+/g, '-'),
                                            isSelected: true,
                                            id: o.param + o.id,
                                          })
                                      : Label.push({
                                          name: o.label + '-',
                                          isSelected: true,
                                          id: o.param + o.id,
                                        });
                                  }
                                  // setLoadMore(true);
                                  setloader(true);
                                  if (
                                    o.type == 'property' ||
                                    o.type == 'developer'
                                  ) {
                                    // alert('hy')
                                    setProjects(true);
                                    router.replace(
                                      `${o.label.replace(/\s/g, '-')}-projects`,
                                      null,
                                      { shallow: true }
                                    );
                                  } else {
                                    setProjects(true);
                                    if (
                                      bhk
                                        .filter((j) => j.isSelected)
                                        ?.map((item) => item['label']).length >
                                        0 ||
                                      PropType.filter((j) => j.isSelected).map(
                                        (item) => item['label']
                                      ).length > 0
                                    ) {
                                      router.replace(
                                        `${bhk
                                          .filter((j) => j.isSelected)
                                          ?.map((item) => item['label'])
                                          .join('')}${PropType.filter(
                                          (j) => j.isSelected
                                        )
                                          .map((item) => item['label'])
                                          .join('')}for-sale-in-${Label.filter(
                                          (j) => j.isSelected
                                        )
                                          .map((item) => item['name'])
                                          .join('')}${city_name.replace(
                                          /\s/g,
                                          '-'
                                        )}`,
                                        null,
                                        { shallow: true }
                                      );
                                    } else {
                                      router.replace(
                                        `${pType}-for-sale-in-${Label.filter(
                                          (j) => j.isSelected
                                        )
                                          .map((item) => item['name'])
                                          .join('')}${city_name.replace(
                                          /\s/g,
                                          '-'
                                        )}`,
                                        null,
                                        { shallow: true }
                                      );
                                    }
                                  }
                                  getSearchData('null', 1, 'add');
                                }}
                              >
                                {o.label}{' '}
                                <span
                                  style={{
                                    color: '#19469b',
                                    fontSize: '10px',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {' '}
                                  {o.type}
                                </span>
                              </p>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* search input field end */}
          <div
            className=" nav_right px-3"
            style={{ position: 'absolute', right: '0' }}
          >
            <Link href={'https://seller.estatedekho.com'}>
              <a target={'_blank'}>
                <button
                  onClick={() => setdisplaySearch(false)}
                  className="postad-btn d-md-none d-lg-flex"
                  id="postad-listing"
                >
                  <Image src={flag} alt="" width={'37%'} height={'23%'} /> Post
                  ad for{' '}
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
                    setOpen(true), setloginOpen(!loginOpen);
                    console.warn('token is', token);
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
                    setopenDrawer(true), setOpen(true), setMenu(!Menu);
                  }}
                >
                  {' '}
                  <AccountCircleOutlinedIcon />
                  {profile != null ? <>{profile.split(' ', [1])}</> : <></>}
                </button>
              </>
            )}
          </div>
          <>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setopenDrawer(false)}
            >
              <Box width="400px">
                <SideMenu
                  profileData={userData}
                  close={() => setopenDrawer(false)}
                />
              </Box>
            </Drawer>
          </>
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
        {/* Filters */}
        <div className="">
          <div className={' d-flex align-items-center filters-main px-2 '}>
            {/* PROPERTY TYPE FILTER */}
            <div className="px-2">
              <div
                className="filter cursor-pointer "
                onClick={() => {
                  setpageNumber(1),
                    setPropTypepicker(!PropTypepicker),
                    setbhkpicker(false),
                    setbudgetpicker(false),
                    setsalepicker(false),
                    setconstructionpicker(false);
                }}
              >
                <div
                  style={{
                    lineHeight: '0.4',
                    paddingTop: '6px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p>Property Type</p>
                  {selectedPropType.length > 0 ? (
                    <p>{selectedPropType.join(', ')}</p>
                  ) : (
                    <p
                      style={{
                        fontSize: '9px',
                        color: '#bababa',
                        fontWeight: 500,
                      }}
                    >
                      Select Type
                    </p>
                  )}
                </div>
                <div className="select-icon">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              {/* PROPERTY TYPE DROPDOWN PICKER */}

              {PropTypepicker ? (
                <div
                  onClick={(e) => {
                    if (e.target == e.currentTarget) {
                      setPropTypepicker(false);
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '999',
                    backgroundColor: 'rgba(0,0,0,0.0)',
                  }}
                >
                  <div className="filter_dropdown box-shadow">
                    {PropType.map((o, ind) => {
                      return (
                        <>
                          {o.isSelected ? (
                            <div
                              className="option_chip cursor-pointer"
                              onClick={() => {
                                if (selectedPropType.indexOf(o.value) > -1) {
                                  selectedPropType.splice(
                                    selectedPropType.indexOf(o.value),
                                    1
                                  );
                                }
                                // selectedPropType.pop(o.value),
                                selectProperty(ind);
                              }}
                            >
                              <CheckOutlinedIcon
                                style={{ fontSize: '12px', margin: '3px' }}
                              />
                              {o.value}
                            </div>
                          ) : (
                            <div
                              className="option_chip-inactive cursor-pointer"
                              onClick={() => {
                                selectedPropType.push(o.value),
                                  selectProperty(ind);
                              }}
                            >
                              <AddIcon style={{ fontSize: '12px' }} /> {o.value}
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            {/* BHK FILTER */}
            <div className="px-2">
              <div
                className="filter cursor-pointer"
                onClick={() => {
                  setpageNumber(1),
                    setbhkpicker(!bhkpicker),
                    setPropTypepicker(false),
                    setbudgetpicker(false),
                    setsalepicker(false),
                    setconstructionpicker(false);
                }}
              >
                <div style={{ lineHeight: '0.4', paddingTop: '6px' }}>
                  <p>BHK Type</p>
                  {selectedBedrooms.length > 0 ? (
                    <p>{selectedBedrooms.join(', ')} BHK</p>
                  ) : (
                    <p
                      style={{
                        fontSize: '9px',
                        color: '#bababa',
                        fontWeight: 500,
                      }}
                    >
                      Select Type
                    </p>
                  )}
                </div>
                <div className="select-icon cursor-pointer">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              {/* BHK DROPDOWN PICKER */}
              {bhkpicker ? (
                <div
                  onClick={(e) => {
                    if (e.target == e.currentTarget) {
                      setbhkpicker(false);
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '999',
                    backgroundColor: 'rgba(0,0,0,0.0)',
                    left: '0%',
                    paddingLeft: '188px',
                  }}
                >
                  <div className="filter_dropdown box-shadow">
                    {bhk.map((o, ind) => {
                      return (
                        <>
                          {o.isSelected ? (
                            <div
                              className="option_chip cursor-pointer"
                              onClick={() => {
                                if (selectedBedrooms.indexOf(o.value) > -1) {
                                  selectedBedrooms.splice(
                                    selectedBedrooms.indexOf(o.value),
                                    1
                                  );
                                }
                                selectBedroom(ind);
                              }}
                            >
                              <CheckOutlinedIcon
                                style={{ fontSize: '12px', margin: '3px' }}
                              />{' '}
                              {o.value} BHK
                            </div>
                          ) : (
                            <div
                              className="option_chip-inactive cursor-pointer"
                              onClick={() => {
                                selectBedroom(ind),
                                  selectedBedrooms.push(o.value);
                              }}
                            >
                              <AddIcon style={{ fontSize: '12px' }} />
                              {o.value} BHK
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="px-2">
              <div
                className="filter cursor-pointer"
                onClick={() => {
                  setpageNumber(1),
                    setbudgetpicker(!budgetpicker),
                    setPropTypepicker(false),
                    setbhkpicker(false),
                    setsalepicker(false),
                    setconstructionpicker(false);
                }}
              >
                <div style={{ lineHeight: '0.4', paddingTop: '6px' }}>
                  <p>Budget</p>
                  <div className="d-flex justify-content-space-around">
                    {budget?.[0] >= 10000000 ? (
                      <>
                        <p
                          style={{
                            fontSize: '9px',
                            color: '#bababa',
                            fontWeight: 500,
                            padding: '0 11px',
                          }}
                        >
                          {Math.abs(budget?.[0] / 10000000).toFixed(2)} Cr
                        </p>{' '}
                      </>
                    ) : (
                      <>
                        <p
                          style={{
                            fontSize: '9px',
                            color: '#bababa',
                            fontWeight: 500,
                            padding: '0 11px',
                          }}
                        >
                          {Math.abs(budget?.[0] / 100000).toFixed()} L
                        </p>
                      </>
                    )}
                    {'-'}
                    {budget?.[1] >= 10000000 ? (
                      <>
                        <p
                          style={{
                            fontSize: '9px',
                            color: '#bababa',
                            fontWeight: 500,
                          }}
                        >
                          {Math.abs(budget?.[1] / 10000000).toFixed(2)} Cr
                        </p>{' '}
                      </>
                    ) : (
                      <>
                        <p
                          style={{
                            fontSize: '9px',
                            color: '#bababa',
                            fontWeight: 500,
                          }}
                        >
                          {Math.abs(budget?.[1] / 100000).toFixed()} L
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="select-icon">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              {budgetpicker ? (
                <div
                  onClick={(e) => {
                    if (e.target == e.currentTarget) {
                      setbudgetpicker(false);
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '999',
                    backgroundColor: 'rgba(0,0,0,0.0)',
                    left: '0%',
                    paddingLeft: '210px',
                  }}
                >
                  <div
                    className="box-shadow"
                    id="position"
                    style={{ background: '#fff', position: 'absolute' }}
                  >
                    <div className="row">
                      <div className="col-sm">
                        {' '}
                        {budget[0] >= 10000000 ? (
                          <>
                            <p className="p-2">
                              {Math.abs(budget[0] / 10000000).toFixed(2)} Cr
                            </p>{' '}
                          </>
                        ) : (
                          <>
                            <p className="p-2">
                              {Math.abs(budget[0] / 100000).toFixed()} L
                            </p>
                          </>
                        )}
                      </div>
                      <div className="col-sm d-flex justify-content-end">
                        {' '}
                        {budget[1] >= 10000000 ? (
                          <>
                            <p className="p-2 ">
                              {budget[1] >= 50000000 ? (
                                '5 Cr+'
                              ) : (
                                <>
                                  {Math.abs(budget[1] / 10000000).toFixed(2)} Cr
                                </>
                              )}
                            </p>{' '}
                          </>
                        ) : (
                          <>
                            <p className="p-2">
                              {Math.abs(budget[1] / 100000).toFixed()} L
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <Box
                      sx={{
                        width: 400,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={budget}
                        onChange={(e) => setbudget(e.target.value)}
                        onChangeCommitted={() => {
                          setloader(true);
                          var type = localStorage.getItem('type');
                          getSearchData('property', 1, 'add'),
                            setsearchData([]);
                        }}
                        getAriaValueText={valuetext}
                        min={0}
                        max={50000000}
                        marks={marks}
                      />
                    </Box>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="px-2">
              <div
                className="filter cursor-pointer"
                onClick={() => {
                  setpageNumber(1),
                    setPropTypepicker(false),
                    setsalepicker(!salepicker),
                    setbudgetpicker(false),
                    setbhkpicker(false);
                  setconstructionpicker(false);
                }}
              >
                <div style={{ lineHeight: '0.4', paddingTop: '6px' }}>
                  <p>Sale Type</p>
                  {selectedSale.length > 0 ? (
                    <p>{selectedSale}</p>
                  ) : (
                    <p
                      style={{
                        fontSize: '9px',
                        color: '#bababa',
                        fontWeight: 500,
                      }}
                    >
                      Select Type
                    </p>
                  )}
                </div>
                <div className="select-icon">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              {salepicker ? (
                <div
                  onClick={(e) => {
                    if (e.target == e.currentTarget) {
                      setsalepicker(false);
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '999',
                    backgroundColor: 'rgba(0,0,0,0.0)',
                    left: '0%',
                    paddingLeft: '33.1rem',
                  }}
                >
                  <div className="filter_dropdown box-shadow">
                    {sale.map((o, ind) => {
                      return (
                        <>
                          {o.isSelected ? (
                            <div
                              className="option_chip cursor-pointer"
                              onClick={() => {
                                if (selectedSale.indexOf(o.value) > -1) {
                                  selectedSale.splice(
                                    selectedSale.indexOf(o.value),
                                    1
                                  );
                                }
                                selectSale(ind);
                              }}
                            >
                              <CheckOutlinedIcon
                                style={{ fontSize: '12px', margin: '3px' }}
                              />{' '}
                              {o.label}
                            </div>
                          ) : (
                            <div
                              className="option_chip-inactive cursor-pointer"
                              onClick={() => {
                                selectSale(ind), selectedSale.push(o.value);
                              }}
                            >
                              <AddIcon style={{ fontSize: '12px' }} />
                              {o.label}
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="px-2">
              <div
                className="filter cursor-pointer"
                onClick={() => {
                  setpageNumber(1),
                    setconstructionpicker(!constructionpicker),
                    setPropTypepicker(false),
                    setbhkpicker(false),
                    setsalepicker(false),
                    setbudgetpicker(false);
                }}
              >
                <div
                  style={{
                    lineHeight: '0.4',
                    paddingTop: '6px',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p>Construction</p>
                  {selectedConstruction.length > 0 ? (
                    <p>{selectedConstruction}</p>
                  ) : (
                    <p
                      style={{
                        fontSize: '9px',
                        color: '#bababa',
                        fontWeight: 500,
                      }}
                    >
                      Select Type
                    </p>
                  )}
                </div>
                <div className="select-icon">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              {constructionpicker ? (
                <div
                  onClick={(e) => {
                    if (e.target == e.currentTarget) {
                      setconstructionpicker(false);
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '999',
                    backgroundColor: 'rgba(0,0,0,0.0)',
                    left: '0%',
                    paddingLeft: '43.8rem',
                  }}
                >
                  <div className="filter_dropdown box-shadow">
                    {construction?.map((o, ind) => {
                      return (
                        <>
                          {o.isSelected ? (
                            <div
                              className="option_chip cursor-pointer"
                              onClick={() => {
                                if (
                                  selectedConstruction.indexOf(o.value) > -1
                                ) {
                                  selectedConstruction.splice(
                                    selectedConstruction.indexOf(o.value),
                                    1
                                  );
                                }
                                selectConstruction(ind);
                              }}
                            >
                              <CheckOutlinedIcon
                                style={{ fontSize: '12px', margin: '3px' }}
                              />{' '}
                              {o.label}
                            </div>
                          ) : (
                            <div
                              className="option_chip-inactive cursor-pointer"
                              onClick={() => {
                                selectConstruction(ind),
                                  selectedConstruction.push(o.value);
                              }}
                            >
                              <AddIcon style={{ fontSize: '12px' }} />
                              {o.label}
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="col-sm d-flex justify-content-end px-2">
              <h1
                // onClick={() => console.warn('data is ', searchData)}
                style={{
                  position: 'sticky',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'rgb(33 37 41)',
                }}
              >
                Showing 1- {searchData?.filter((j) => !j.is_banner).length} of{' '}
                {Total}
              </h1>
            </div>
          </div>
          {/* Selected Filters */}
          {selectedPropType ||
          selectedBedrooms ||
          selectedConstruction ||
          selectedFurnished > 0 ? (
            <>
              <div className="d-flex justify-content-sm-between align-items-center selected_filter  px-2 ">
                <div className="d-flex flex-row">
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#969AA3',
                      fontWeight: '500',
                      display: 'contents',
                    }}
                  >
                    {' '}
                    Selected Filters :
                  </p>

                  <>
                    {PropType?.filter((j) => j.isSelected).map((o, ind) => {
                      return (
                        <>
                          <div className="custom-chip">
                            {o.value}
                            <CloseIcon
                              onClick={() => {
                                setpageNumber(1);
                                selectedPropType.pop(o);
                                let arr = PropType?.map((item, index) => {
                                  if (ind == index) {
                                    o.isSelected = false;
                                  }
                                  return { ...item };
                                });
                                setPropType(arr);
                                setloader(true);
                                setsearchData([]);
                                setPropertyType('property');
                                // setTimeout(() => {
                                if (
                                  bhk
                                    .filter((j) => j.isSelected)
                                    ?.map((item) => item['label']).length > 0 ||
                                  PropType.filter((j) => j.isSelected).map(
                                    (item) => item['label']
                                  ).length > 0
                                ) {
                                  router.replace(
                                    `${bhk
                                      .filter((j) => j.isSelected)
                                      ?.map(
                                        (item) => item['label']
                                      )}${PropType.filter(
                                      (j) => j.isSelected
                                    ).map(
                                      (item) => item['label']
                                    )}for-sale-in-${Label?.filter(
                                      (j) => j.isSelected
                                    )
                                      ?.map((item) => item['name'])
                                      .join('')}${city_name.replace(
                                      /\s/g,
                                      '-'
                                    )}`,
                                    null,
                                    { shallow: true }
                                  );
                                } else {
                                  router.replace(
                                    `property-for-sale-in-${Label?.filter(
                                      (j) => j.isSelected
                                    )
                                      ?.map((item) => item['name'])
                                      .join('')}${city_name.replace(
                                      /\s/g,
                                      '-'
                                    )}`,
                                    null,
                                    {
                                      shallow: true,
                                    }
                                  );
                                }
                                //   var type = localStorage.getItem('type');
                                getSearchData('property', 1, 'add');
                                // }, 100);
                              }}
                            />
                          </div>
                        </>
                      );
                    })}

                    {bhk
                      ?.filter((j) => j.isSelected)
                      .map((o, ind) => {
                        return (
                          <>
                            <div className="custom-chip">
                              {o.value} BHK
                              <CloseIcon
                                onClick={() => {
                                  setpageNumber(1);
                                  selectedBedrooms.pop(o);
                                  let arr = bhk.map((item, index) => {
                                    if (ind == index) {
                                      o.isSelected = false;
                                    }
                                    return { ...item };
                                  });
                                  setbhk(arr);
                                  setloader(true);
                                  // setsearchData([]);
                                  // setTimeout(() => {
                                  if (
                                    bhk
                                      .filter((j) => j.isSelected)
                                      ?.map((item) => item['label']).length >
                                      0 ||
                                    PropType.filter((j) => j.isSelected).map(
                                      (item) => item['label']
                                    ).length > 0
                                  ) {
                                    router.replace(
                                      `${bhk
                                        .filter((j) => j.isSelected)
                                        ?.map((item) => item['label'])
                                        .join('')}${PropType.filter(
                                        (j) => j.isSelected
                                      )
                                        .map((item) => item['label'])
                                        .join('')}for-sale-in-${Label?.filter(
                                        (j) => j.isSelected
                                      )
                                        ?.map((item) => item['name'])
                                        .join('')}${city_name.replace(
                                        /\s/g,
                                        '-'
                                      )}`,
                                      null,
                                      { shallow: true }
                                    );
                                  } else {
                                    router.replace(
                                      `property-for-sale-in-${Label?.filter(
                                        (j) => j.isSelected
                                      )
                                        ?.map((item) => item['name'])
                                        .join('')}${city_name.replace(
                                        /\s/g,
                                        '-'
                                      )}`,
                                      null,
                                      {
                                        shallow: true,
                                      }
                                    );
                                  }
                                  //   var type = localStorage.getItem('type');
                                  getSearchData('property', 1);
                                  // }, 100);
                                }}
                              />
                            </div>
                          </>
                        );
                      })}
                    {sale
                      ?.filter((j) => j.isSelected)
                      .map((o, ind) => {
                        return (
                          <>
                            <div className="custom-chip">
                              {o.label}
                              <CloseIcon
                                onClick={() => {
                                  setpageNumber(1);
                                  selectedSale.pop(o);
                                  let arr = sale.map((item, index) => {
                                    if (ind == index) {
                                      o.isSelected = false;
                                    }
                                    return { ...item };
                                  });
                                  setsale(arr);
                                  // setsearchData([]);
                                  setloader(true);
                                  // setTimeout(() => {
                                  //   var type = localStorage.getItem('type');
                                  getSearchData('property', 1);
                                  // }, 100);
                                }}
                              />
                            </div>
                          </>
                        );
                      })}
                    {construction
                      ?.filter((j) => j.isSelected)
                      .map((o, ind) => {
                        return (
                          <>
                            <div className="custom-chip">
                              {o.label}
                              <CloseIcon
                                onClick={() => {
                                  setpageNumber(1);
                                  selectedConstruction.pop(o);
                                  let arr = construction.map((item, index) => {
                                    if (ind == index) {
                                      o.isSelected = false;
                                    }
                                    return { ...item };
                                  });
                                  setconstruction(arr);
                                  // setsearchData([]);
                                  // setloader(true);
                                  // setTimeout(() => {
                                  //   var type = localStorage.getItem('type');
                                  getSearchData('property', 1, 'add');
                                  // }, 100);
                                }}
                              />
                            </div>
                          </>
                        );
                      })}
                  </>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div style={{ paddingTop: '150px' }}>
        {/* Listing Cards */}
        {loader ? (
          <>
            <div className="display-col space-mb row px-2 mt-4 topvilla_view">
              <div className="col-4 ">
                {' '}
                <Skeleton variant="rectangular" width={'100%'} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </div>
              <div className="col-4 col-sm">
                {' '}
                <Skeleton variant="rectangular" width={'100%'} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </div>
              <div className="col-4 col-sm">
                {' '}
                <Skeleton variant="rectangular" width={'100%'} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </div>
            </div>
          </>
        ) : (
          <>
            {Total > 0 ? (
              <>
                <div
                  className="row "
                  style={{ paddingTop: '0', padding: '0 15px' }}
                >
                  {searchData?.map((val, ind) => {
                    if (searchData?.length === ind + 1) {
                      return (
                        <>
                          <div
                            className="col-4 py-4"
                            ref={lastPropertyRef}
                            key={val.id}
                          >
                            {!val.is_banner && (
                              // <CommercialPropertyCard/>
                              <PropertyCard
                                val={val}
                                addToFavourite={addToFavourite}
                                userData={userData}
                                contact={contact}
                                setSlug={setSlug}
                                city_name={city_name}
                                token={token}
                                getSearchData={getSearchData}
                              />
                            )}
                          </div>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <div className="col-lg-4 col-md-6 py-4" key={val.id}>
                            {!val.is_banner && (
                              // <CommercialPropertyCard/>
                              <PropertyCard
                                val={val}
                                addToFavourite={addToFavourite}
                                userData={userData}
                                contact={contact}
                                setSlug={setSlug}
                                city_name={city_name}
                                token={token}
                                getSearchData={getSearchData}
                              />
                            )}
                          </div>
                          {val.is_banner && (
                            <>
                              <a href="tel:8585854850" className="web-banner">
                                <div style={{ paddingBottom: '20px' }}>
                                  <Image
                                    src={banner1}
                                    className="cursor-pointer"
                                    alt=""
                                  />
                                </div>
                              </a>
                              <a href="tel:8585854850" className="mob-banner">
                                <div style={{ paddingBottom: '20px' }}>
                                  <Image
                                    src={mobilebanner}
                                    className="cursor-pointer"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </>
                          )}
                        </>
                      );
                    }
                  })}
                </div>
              </>
            ) : (
              <>
                <NodataFound locality={handleLabel} label={Label} />
              </>
            )}
          </>
        )}
        {/* 
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
                {Label?.filter((j) => j.isSelected)?.map((key, ind) => {
                  return (
                    <>
                      <h6
                        style={{
                          backgroundColor: 'white',
                          width: 'fit-content',
                          borderRadius: 10,
                        }}
                      >
                        {key ? (
                          <>
                            {' '}
                            <Chip
                              label={key.name.replaceAll('-', ' ')}
                              style={{
                                height: '25px',
                                fontSize: '10px',
                              }}
                              onDelete={() => {
                                setpageNumber(1);
                                setloader(true);
                                setsearchData([]);
                                if (Label.indexOf(key) > -1) {
                                  Label.splice(Label.indexOf(key), 1);
                                }
                                if (
                                  bhk
                                    .filter((j) => j.isSelected)
                                    ?.map((item) => item['label']).length > 0 ||
                                  PropType.filter((j) => j.isSelected).map(
                                    (item) => item['label']
                                  ).length > 0
                                ) {
                                  router.replace(
                                    `${bhk
                                      .filter((j) => j.isSelected)
                                      ?.map((item) => item['label'])
                                      .join('')}${PropType.filter(
                                      (j) => j.isSelected
                                    )
                                      .map((item) => item['label'])
                                      .join('')}for-sale-in-${Label.filter(
                                      (j) => j.isSelected
                                    )
                                      .map((item) => item['name'])
                                      .join('')}${city_name.replace(
                                      /\s/g,
                                      '-'
                                    )}`,
                                    null,
                                    { shallow: true }
                                  );
                                } else {
                                  router.replace(
                                    `${pType}-for-sale-in-${Label.filter(
                                      (j) => j.isSelected
                                    )
                                      .map((item) => item['name'])
                                      .join('')}${city_name.replace(
                                      /\s/g,
                                      '-'
                                    )}`,
                                    null,
                                    { shallow: true }
                                  );
                                }
                                getSearchData('property', 1, 'add');
                              }}
                            />
                          </>
                        ) : (
                          <></>
                        )}

                        <p
                          // onClick={() => {
                          //   displayvalue.pop(key.label),
                          //     setdisplaySearch(false);
                          // }}
                          style={{ marginLeft: 20 }}
                        ></p>
                      </h6>
                    </>
                  );
                })}
              </div>
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

                {localities ? (
                  <>
                    {' '}
                    {localities.map((o) => {
                      return (
                        <>
                          <p
                            className="d-flex justify-content-between cursor-pointer "
                            style={{
                              color: '#767676',
                            }}
                            onClick={() => {
                              var page = 1;
                              var regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;
                              setpageNumber(page);
                              setdisplaySearch(false),
                                setsearchData([]),
                                setupdatePtype(true);
                              setQuery('');
                              {
                                o.label.indexOf(' ') != -1
                                  ? regexp.test(o.label)
                                    ? Label.push({
                                        name:
                                          o.label.replace(/\s+/g, '-') + '-',
                                        isSelected: true,
                                        id: o.param + o.id,
                                      })
                                    : Label.push({
                                        name: o.label.replace(/\s+/g, '-'),
                                        isSelected: true,
                                        id: o.param + o.id,
                                      })
                                  : Label.push({
                                      name: o.label + '-',
                                      isSelected: true,
                                      id: o.param + o.id,
                                    });
                              }
                              // setLoadMore(true);
                              setloader(true);
                              if (
                                o.type == 'property' ||
                                o.type == 'developer'
                              ) {
                                // alert('hy')
                                setProjects(true);
                                router.replace(
                                  `${o.label.replace(/\s/g, '-')}-projects`,
                                  null,
                                  { shallow: true }
                                );
                              } else {
                                setProjects(true);
                                if (
                                  bhk
                                    .filter((j) => j.isSelected)
                                    ?.map((item) => item['label']).length > 0 ||
                                  PropType.filter((j) => j.isSelected).map(
                                    (item) => item['label']
                                  ).length > 0
                                ) {
                                  router.replace(
                                    `${bhk
                                      .filter((j) => j.isSelected)
                                      ?.map((item) => item['label'])
                                      .join('')}${PropType.filter(
                                      (j) => j.isSelected
                                    )
                                      .map((item) => item['label'])
                                      .join('')}for-sale-in-${Label.filter(
                                      (j) => j.isSelected
                                    )
                                      .map((item) => item['name'])
                                      .join('')}${city_name.replace(
                                      /\s/g,
                                      '-'
                                    )}`,
                                    null,
                                    { shallow: true }
                                  );
                                } else {
                                  router.replace(
                                    `${pType}-for-sale-in-${Label.filter(
                                      (j) => j.isSelected
                                    )
                                      .map((item) => item['name'])
                                      .join('')}${city_name.replace(
                                      /\s/g,
                                      '-'
                                    )}`,
                                    null,
                                    { shallow: true }
                                  );
                                }
                              }
                              getSearchData('null', 1, 'add');
                            }}
                          >
                            {o.label}{' '}
                            <span
                              style={{
                                color: '#19469b',
                                fontSize: '10px',
                                textTransform: 'uppercase',
                              }}
                            >
                              {' '}
                              {o.type}
                            </span>
                          </p>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        )} */}
        <Footer />
      </div>
    </>
  );
}

export default connect(
  (state) => {
    return {
      cities: state.cities.cities,
      city_name: state.cities.city_name,
      localities: state.cities.localities,
      bhk: state.propertyListing.bhk,
      PropType: state.propertyListing.propType,
      budget: state.propertyListing.budget,
      sale: state.propertyListing.sale,
      construction: state.propertyListing.construction,
      loader: state.propertyListing.loader,
      Label: state.propertyListing.Label,
      searchData: state.propertyListing.searchData,
      hasMore: state.propertyListing.hasMore,
      loadMore: state.propertyListing.loadMore,
      pageNumber: state.propertyListing.pageNumber,
      Total: state.propertyListing.Total,
      token: state.session.authToken,
      pType: state.home.pType,
      slug: state.propertyListing.slug,
      meta: state.propertyListing.meta,
    };
  },
  {
    getCities,
    setCityName,
    getLocalities,
    setPropType,
    setbhk,
    setbudget,
    setsale,
    setconstruction,
    setloader,
    setsearchData,
    getSearchData,
    setHasMore,
    setLoadMore,
    setpageNumber,
    setPropertyType,
    setSlug,
    setLabel,
    setMeta,
  }
)(PropertyListing);

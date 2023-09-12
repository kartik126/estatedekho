import * as React from 'react';
import Image from 'next/image';
import img from '../../../public/images/homebanner.png';
import testbanner from '../../../public/images/homebanner.png';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useEffect, useState } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import location from '../../../public/images/Group 139712@2x.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link';
import Router from 'next/router';
import AdSpace from 'components/adspace/AdSpace';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import apiClient from 'utils/apiClient';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { connect } from 'react-redux';
import { getCities, setCityName, getLocalities } from 'redux/action/cities';
import { getHomeExplore } from 'redux/action/home';
import { setLabel } from 'redux/action/propertyListing';

function Topbanners({
  cities,
  getCities,
  setCityName,
  parentCallback,
  HomeDataCallback,
  premiumProjectData,
  developerData,
  refresh,
  HomeExploreCallback,
  PropertyType,
  setPropertyType,
  getLocalities,
  localities,
  city_name,
  getHomeExplore,
  HomeExplore,
  setLabel,
}) {
  const [select, setSelect] = useState(true);
  const [select1, setSelect1] = useState(false);
  const [select2, setselect2] = useState(false);
  const [select3, setselect3] = useState(false);
  const [DeveloperData, setdeveloperData] = useState([]);
  const [searchField, setsearchField] = useState(false);
  const [query, setquery] = useState('');
  const [Type, setType] = useState(PropertyType);
  const [placeholderText, setPlaceholderText] = useState('');
  const [index, setIndex] = useState(0);
  const text = 'Search for locality, landmark, projects or builder...';
  const handleChange = (event) => {
    setCityName(event.target.value);
    parentCallback(event);
    HomeDataCallback();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderText(text.substring(0, index));
      setIndex((index) => (index === text.length ? 0 : index + 1));
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    getCities();
    setdeveloperData(developerData);
  }, []);

  const goToSearch = (e, x, ptype) => {
    console.log('typeeeeeeeeeeee', Type);
    Router.push({
      pathname: `PropertyListing/Property-for-sale-in-${x.replace(
        /\s+/g,
        '-'
      )}${city_name}`,
      query: {
        // slug: city_name,
        optionId: e,
        locality: x,
        type: ptype || PropertyType,
        // city: global.city,
      },
    });
  };
  return (
    <div className="row main_top">
      <div className="col-lg-9 col-md-12 left_banner">
        <Image
          src={testbanner}
          className='left_banner_image'
          alt="Home page banner"
          style={{ borderRadius: '10px'}}
        />
        <div
          className="col-lg-6 col-md-8"
          style={{ position: 'absolute', top: '55px', left: '55px' }}
        >
          <h1>Dil khol ke Dreams dekho!</h1>
          {/* <Link href="/about-us">
            <a target={'_blank'}>
              <p>
                Learn More <ExpandCircleDownOutlinedIcon />
              </p>
            </a>
          </Link> */}
        </div>
        <div className="col-md-12 col-sm-12 d-flex justify-content-center ">
          <div className="col-md-11 col-sm-11 banner_search">
            <div className="categories-btn cursor-pointer">
              <a
                className={PropertyType == 'property' ? 'active-link' : null}
                onClick={() => {
                  setSelect(true),
                    setSelect1(false),
                    setselect2(false),
                    setselect3(false);
                  setPropertyType('property');
                  getHomeExplore('project');
                  // HomeExploreCallback('property');
                }}
              >
                Property
              </a>
              <a
                className={PropertyType == 'plots' ? 'active-link' : null}
                onClick={() => {
                  setSelect1(true),
                    setSelect(false),
                    setselect2(false),
                    setselect3(false);
                  setPropertyType('plots');
                  // HomeExploreCallback('plots');
                  getHomeExplore('plots');
                }}
              >
                Plots
              </a>
              <a
                className={PropertyType == 'Commercial' ? 'active-link' : null}
                onClick={() => {
                  setselect2(true),
                    setSelect(false),
                    setSelect1(false),
                    setselect3(false);
                  setPropertyType('Commercial');
                  // HomeExploreCallback('Commercial');
                }}
              >
                Commercial
              </a>
              <a
                className={PropertyType == 'Rent' ? 'active-link' : null}
                onClick={() => {
                  setselect3(true),
                    setselect2(false),
                    setSelect(false),
                    setSelect1(false);
                  setPropertyType('Rent');
                  // HomeExploreCallback('Rent');
                }}
              >
                Rent
              </a>
            </div>
            <div className="d-flex justify-content-center col-md-12 col-sm-12">
              <div className="row search_field">
                <div className="d-flex col-sm ">
                  {select3 ? (
                    <div className="col sub_search d-flex align-items-center">
                      <h5>Coming Soon</h5>
                    </div>
                  ) : (
                    <div className="col sub_search">
                      <h5>Location</h5>
                      <div
                        className="d-flex align-items-center"
                        style={{ height: '66px' }}
                      >
                        <LocationOnOutlinedIcon />
                        {/* <Image src={location} width={20} height={27} /> */}
                        <div>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <select
                              value={city_name}
                              style={{ borderColor: 'white' }}
                              onChange={(e) => {
                                setCityName(e.target.value);
                                global.city == e.target.value;

                                setLabel([]);
                                console.log('concole city_name', city_name);
                                handleChange(e),
                                  select
                                    ? HomeExploreCallback('project')
                                    : HomeExploreCallback('plots');
                              }}
                            >
                              {cities?.map((val) => {
                                return (
                                  <>
                                    <option value={val.city_name}>
                                      {val.city_name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  )}
                  {select2 || select3 ? null : (
                    <input
                      className="search-input"
                      autoFocus
                      // placeholder="Search for locality, landmark, projects or builder"
                      placeholder={placeholderText}
                      value={query}
                      onChange={(e) => {
                        setquery(e.target.value),
                          setsearchField(true),
                          getLocalities(e.target.value);
                      }}
                    />
                  )}

                  {query != '' ? (
                    <>
                      {' '}
                      <div className="search-result shadow-lg ">
                        {localities ? (
                          <>
                            {' '}
                            {localities.map((val) => {
                              return (
                                <>
                                  <h6
                                    className="cursor-pointer search_focus"
                                    onClick={() => {
                                      var x = [];
                                      x.push(val.param + val.id);
                                      goToSearch(x, val.label, 'null');
                                    }}
                                  >
                                    {val.label}
                                    <span
                                      style={{
                                        position: 'absolute',
                                        right: 0,
                                        fontWeight: '600',
                                        fontSize: '10px',
                                        padding: '0 20px',
                                        color: 'rgb(153, 153, 153)',
                                        textTransform: 'uppercase',
                                      }}
                                    >
                                      {val.type}
                                    </span>
                                  </h6>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                {PropertyType === 'Rent' ? (
                  <div className="col-sm-2 search_btn" style={{cursor:'not-allowed'}}> 
                    <h3>
                      Search <ExpandCircleDownOutlinedIcon />
                    </h3>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      if (city_name.indexOf(' ') != -1) {
                        Router.push({
                          pathname: `/PropertyListing/${PropertyType}-for-sale-in-${city_name?.replace(
                            /\s/g,
                            '-'
                          )}`,
                        });
                      } else {
                        Router.push({
                          pathname: `/PropertyListing/${PropertyType}-for-sale-in-${city_name}`,
                        });
                      }
                    }}
                    className="col-sm-2 search_btn"
                  >
                    <h3>
                      Search <ExpandCircleDownOutlinedIcon />
                    </h3>
                  </div>
                )}
              </div>
              {/* search field for mobile view  start*/}

              <div className="mobile-search">
                <div>
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: 120,
                      fontSize: '18px',
                      fontWeight: 500,
                    }}
                  >
                    {/* <LocationOnOutlinedIcon/> */}
                    {select2 || select3 ? (
                      <select value="Coming Soon">
                        <option>Coming Soon</option>
                      </select>
                    ) : (
                      <select
                        value={city_name}
                        // defaultValue={global.city}
                        style={{ marginTop: 12, borderColor: 'white' }}
                        onChange={(e) => {
                          setCityName(e.target.value);
                          global.city == e.target.value;

                          setLabel([]);
                          console.log('concole city_name', city_name);
                          handleChange(e),
                            select
                              ? HomeExploreCallback('project')
                              : HomeExploreCallback('plots');
                        }}
                      >
                        {cities?.map((val) => {
                          return (
                            <>
                              <option value={val.city_name}>
                                {val.city_name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    )}
                  </FormControl>
                </div>
                <div>
                  {/* <SearchSharpIcon/> */}
                  {select2 || select3 ? (
                    <input className="search-input" />
                  ) : (
                    <input
                      className="search-input"
                      autoFocus
                      placeholder="Search for locality,landmark,projects or builder"
                      value={query}
                      onChange={(e) => {
                        setquery(e.target.value),
                          setsearchField(true),
                          getLocalities(e.target.value);
                        // handleChange(e)
                      }}
                    />
                  )}

                  {query != '' ? (
                    <>
                      {' '}
                      <div className="search-result">
                        {localities ? (
                          <>
                            {' '}
                            {localities.map((val) => {
                              return (
                                <>
                                  <div
                                    style={{
                                      width: '70%',
                                      textOverflow: 'ellipsis',
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    <h6
                                      className="cursor-pointer"
                                      onClick={() => {
                                        var x = [];
                                        x.push(val.param + val.id);
                                        goToSearch(x, val.label, 'null');
                                      }}
                                    >
                                      {val.label}
                                      <span
                                        style={{
                                          position: 'absolute',
                                          right: 0,
                                          fontWeight: '500',
                                          fontSize: '12px',
                                          padding: '0 20px',
                                          color: '#19469b',
                                        }}
                                      >
                                        {val.type}
                                      </span>
                                    </h6>
                                  </div>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <Link
                  href={{
                    pathname: '/PropertyListing/slug',
                    // query: {
                    //   slug: city_name,
                    //   type: PropertyType,
                    //   city: global.city,
                    // },
                  }}
                >
                  <div
                    // onClick={() => goToSearch()}
                    className="col mob-search_btn"
                  >
                    Search
                    <ExpandCircleDownOutlinedIcon style={{ color: '#ffff' }} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {premiumProjectData == null ? (
        <>
          <div className="col-3 d-md-none d-lg-block right_banner">
            <Skeleton
              variant="rectangular"
              width="100%"
              height="98.5%"
              style={{ borderRadius: '10px' }}
            />
          </div>
        </>
      ) : (
        <>
          {' '}
          <AdSpace premiumProjectData={premiumProjectData} />
        </>
      )}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      cities: state.cities.cities,
      city_name: state.cities.city_name,
      localities: state.cities.localities,
      HomeExplore: state.home.HomeExplore,
    };
  },
  {
    getCities,
    setCityName,
    getLocalities,
    getHomeExplore,
    setLabel,
  }
)(Topbanners);

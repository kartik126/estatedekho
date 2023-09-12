import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import apiClient from 'utils/apiClient';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import DoneIcon from '@mui/icons-material/Done';
import { getOptionsFromChildren } from '@mui/base';
import Router from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function valuetext(value) {
  return `${value}°C`;
}
function SearchFilterMobile({ handleSearchState }) {
  const [total, settotal] = useState('');
  const [optionId, setoptionId] = useState([]);
  const [popularLocation, setpopularLocation] = useState([]);
  const [searchItems, setsearchItems] = useState([]);
  const [searchField, setsearchField] = useState(false);
  const [budget, setbudget] = React.useState([0, 50000000]);
  const [localities, setlocalities] = useState([]);
  const [query, setquery] = useState('');
  const [Number, setNumber] = useState('5');
  const [slide, setslide] = useState(false);
  const [selectedBedrooms, setselectedBedrooms] = useState([]);
  const [selectedPropType, setselectedPropType] = useState([]);
  const [selectedLocation, setselectedLocation] = useState([]);
  const city_name = useSelector((state) => state.cities.city_name);
  const [bhk, setbhk] = useState([
    { label: '1 BHK', value: 1, isSelected: false },
    { label: '2 BHK', value: 2, isSelected: false },
    { label: '3 BHK', value: 3, isSelected: false },
    { label: '4 BHK', value: 4, isSelected: false },
    { label: '5 BHK', value: 5, isSelected: false },
    { label: '5+ BHK', value: 6, isSelected: false },
  ]);
  const [PropType, setPropType] = useState([
    { label: 'Apartment', value: 'Apartment', isSelected: false },
    { label: 'Plot', value: 'Plot', isSelected: false },
    { label: ' Villa', value: 'Villa', isSelected: false },
    {
      label: 'Independent House',
      value: 'Independent House',
      isSelected: false,
    },
    {
      label: 'Independent Floor',
      value: 'Independent Floor',
      isSelected: false,
    },
    { label: 'Farm Land', value: 'Farm land', isSelected: false },
    { label: 'Farm House', value: 'Farm House', isSelected: false },
  ]);
  const goToSearch = (e) => {
    // console.warn(x)
    Router.push({
      pathname: '/PropertyListing/slug',
      query: {
        bedrooms: bhk.filter((j) => j.isSelected).map((item) => item['value']),
        type: 'property',
        propertyType: PropType.filter((j) => j.isSelected).map(
          (item) => item['value']
        ),
        locality: selectedLocation
          .filter((j) => j.isSelected)
          .map((item) => item['name']),
        optionId: selectedLocation
          .filter((j) => j.isSelected)
          .map((item) => item['id']),
        FilterBudget: budget,
      },
    });
  };
  const getLocalities = (event) => {
    let response = apiClient.post(
      apiClient.Urls.getLocalities,
      { city: city_name, search: event },
      true
    );
    response.then((result) => {
      if (result.success) {
        setlocalities(result.data);
        setsearchField(true);
      } else {
        setlocalities([]);
      }
      console.warn('added to favourite----->>>>>', result);
    });
  };
  const popularLocality = () => {
    let response = apiClient.post(
      apiClient.Urls.getLocalities,
      { city: city_name },
      true
    );
    response.then((result) => {
      if (result.success) {
        setpopularLocation(result.data);
        let arr = result.data.map((key) => {
          key.isSelected = false;
          return {
            ...key,
          };
        });
        setpopularLocation(arr);
      } else {
        setpopularLocation([]);
      }

      console.warn('added to favourite----->>>>>', result);
    });
  };
  const getSearchData = (e) => {
    let conarr = optionId.concat(searchItems);

    setselectedLocation(conarr);
    let arr =
      conarr.filter((j) => j.isSelected).map((item) => item['id']) ||
      selectedLocation.filter((j) => j.isSelected).map((item) => item['id']);
    let res = apiClient.post(
      apiClient.Urls.searchListing,
      {
        city: city_name,
        bedrooms: selectedBedrooms,
        search: arr,
        property_type: selectedPropType,
        property: 'null',
        budget_min: budget[0],
        budget_max: budget[1],
        records: 15,
      },
      true
    );
    res.then((result) => {
      console.log('search resss====>', result);
      if (result.success) {
        settotal(result.total);
      } else {
        settotal(null);
      }
    });
  };
  useEffect(() => {
    getLocalities();
    popularLocality();
  }, []);
  return (
    <>
      {slide ? (
        <div className="search-filter-mobile">
          <KeyboardArrowLeftIcon
            style={{ margin: ' 11px 10px' }}
            onClick={() => {
              setslide(false);
            }}
          />
          <div className="m-2 py-3 px-1" style={{ background: '#fafcff' }}>
            <div className=" d-flex flex-row justify-content-between">
              <h1 style={{ fontSize: '16px', fontWeight: '700' }}>Filter</h1>
              <h1
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#19469b',
                }}
                onClick={() => console.log('searchghh', selectedLocation)}
              >
                {' '}
                Clear all
              </h1>
            </div>
            <div
              className=" d-flex flex-row justify-content-between"
              style={{ borderBottom: '0.1px solid #d3d3d3' }}
            >
              {' '}
              <p style={{ fontWeight: '400', fontSize: '12px' }}>
                {' '}
                You are searching in{' '}
                <span style={{ fontWeight: '600' }}>{city_name}</span>{' '}
              </p>
              <p style={{ fontSize: '10px' }} onClick={() => setslide(false)}>
                Change location{' '}
                <ArrowForwardIosIcon style={{ fontSize: '10px' }} />{' '}
              </p>
            </div>
            <div>
              <p
                className="py-2"
                style={{ fontWeight: '500', color: 'gray', fontSize: '13px' }}
              >
                Filter Applied
              </p>
              <div
                className="d-flex flex-row align-items-baseline"
                style={{ overFlowX: 'scroll' }}
              >
                <p
                  className=""
                  style={{
                    color: '#19469b',
                    fontWeight: '500',
                    fontSize: '11px',
                    display: 'flex',
                  }}
                >
                  {budget[0] >= 10000000 ? (
                    <>
                      <p
                        style={{
                          color: '#19469b',
                          fontWeight: '500',
                          fontSize: '11px',
                        }}
                      >
                        {Math.abs(budget[0] / 10000000).toFixed(2)} Cr
                      </p>{' '}
                    </>
                  ) : (
                    <>
                      <p
                        style={{
                          color: '#19469b',
                          fontWeight: '500',
                          fontSize: '11px',
                        }}
                      >
                        {Math.abs(budget[0] / 100000).toFixed()} L
                      </p>
                    </>
                  )}{' '}
                  {'-'}{' '}
                  {budget[1] >= 10000000 ? (
                    <>
                      <p
                        style={{
                          color: '#19469b',
                          fontWeight: '500',
                          fontSize: '11px',
                        }}
                      >
                        {Math.abs(budget[1] / 10000000).toFixed(2)} Cr
                      </p>{' '}
                    </>
                  ) : (
                    <>
                      <p
                        style={{
                          color: '#19469b',
                          fontWeight: '500',
                          fontSize: '11px',
                        }}
                      >
                        {Math.abs(budget[1] / 100000).toFixed()} L
                      </p>
                    </>
                  )}
                  <CancelIcon
                    style={{ fontSize: '13px', margin: '5px' }}
                    onClick={() => {
                      setbudget([0, 50000000]);
                      getSearchData();
                    }}
                  />
                </p>
                {bhk
                  .filter((j) => j.isSelected)
                  .map((val) => {
                    return (
                      <>
                        <p
                          style={{
                            color: '#19469b',
                            fontWeight: '500',
                            fontSize: '11px',
                            display: 'flex',
                          }}
                        >
                          {val.label}
                          <CancelIcon
                            style={{ fontSize: '13px', margin: '5px' }}
                          />
                        </p>
                      </>
                    );
                  })}
                {PropType.filter((j) => j.isSelected).map((val) => {
                  return (
                    <>
                      <p
                        style={{
                          color: '#19469b',
                          fontWeight: '500',
                          fontSize: '11px',
                          display: 'flex',
                        }}
                      >
                        {val.label}
                        <CancelIcon
                          style={{ fontSize: '13px', margin: '5px' }}
                        />
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="px-3 d-flex flex-column">
            <p style={{ fontWeight: '500', fontSize: '13px' }}>Localities</p>
            <div className="d-flex flex-row">
              <button
                style={{
                  border: 'none',
                  background: '#19469b',
                  color: '#fff',
                  height: '32px',
                  borderRadius: '5px',
                  fontSize: '12px',
                }}
                onClick={() => setslide(false)}
              >
                Add More <AddIcon style={{ fontSize: '15px' }} />{' '}
              </button>
              {selectedLocation
                .filter((j) => j.isSelected)
                .map((o, ind) => {
                  return (
                    <>
                      <p
                        className="p-1 px-3"
                        style={{
                          color: '#19469b',
                          fontWeight: '500',
                          fontSize: '11px',
                        }}
                      >
                        {o.name}{' '}
                        <CancelIcon
                          style={{ fontSize: '13px' }}
                          onClick={() => {
                            let arr = selectedLocation.map((item, index) => {
                              if (ind == index) {
                                o.isSelected = false;
                              }
                              return { ...item };
                            });

                            setselectedLocation(arr);
                            setTimeout(() => {
                              getSearchData(arr);
                            }, 100);
                          }}
                        />
                      </p>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="px-3">
            <p style={{ fontWeight: '500', fontSize: '13px' }}>BHK type</p>
            <div
              className="d-flex flex-row justify-content-between"
              style={{ overflowX: 'scroll' }}
            >
              {bhk.map((val, ind) => {
                return (
                  <>
                    {val.isSelected ? (
                      <div
                        style={{
                          background: 'rgb(25, 70, 155)',
                          color: '#ffff',
                        }}
                        className="mx-1 px-2 filter-button"
                        onClick={() => {
                          if (selectedBedrooms.indexOf(val.value) > -1) {
                            selectedBedrooms.splice(
                              selectedBedrooms.indexOf(val.value),
                              1
                            );
                          }
                          let arr = bhk.map((item, index) => {
                            if (ind == index) {
                              item.isSelected = !item.isSelected;
                            }
                            return { ...item };
                          });
                          setbhk(arr);
                          setTimeout(() => {
                            getSearchData(arr);
                          }, 2000);
                        }}
                      >
                        <p className="my-1" style={{ fontSize: '10px' }}>
                          {val.label}
                        </p>
                        <DoneIcon
                          style={{ fontSize: '14px', marginLeft: '4px' }}
                        />
                      </div>
                    ) : (
                      <div
                        className="mx-1 px-2 filter-button"
                        onClick={() => {
                          selectedBedrooms.push(val.value);
                          let arr = bhk.map((item, index) => {
                            if (ind == index) {
                              item.isSelected = !item.isSelected;
                            }
                            return { ...item };
                          });
                          setbhk(arr);
                          setTimeout(() => {
                            getSearchData(arr);
                          }, 2000);
                        }}
                      >
                        <CircleOutlinedIcon
                          style={{ fontSize: '13px', marginRight: '3px' }}
                        />{' '}
                        <p className="my-1" style={{ fontSize: '10px' }}>
                          {val.label}
                        </p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className="px-3">
            <p className="py-2" style={{ fontWeight: '500', fontSize: '13px' }}>
              Budget
            </p>

            <div className="row justify-content-between">
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
                      {Math.abs(budget[1] / 10000000).toFixed(2)} Cr
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
              className="px-3"
              sx={{
                height: 30,
                display: 'flex',

                alignItems: 'center',
              }}
            >
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={budget}
                onChange={(e) => setbudget(e.target.value)}
                onChangeCommitted={() => {
                  getSearchData();
                }}
                getAriaValueText={valuetext}
                min={0}
                max={50000000}
              />
            </Box>
          </div>
          <div className="px-3 py-3">
            <p style={{ fontWeight: '500', fontSize: '13px' }}>Property Type</p>
            <div
              className="d-flex flex-row justify-content-between"
              style={{ overflowX: 'scroll' }}
            >
              {PropType.map((val, ind) => {
                return (
                  <>
                    {val.isSelected ? (
                      <div
                        style={{
                          background: 'rgb(25, 70, 155)',
                          color: '#ffff',
                        }}
                        className="mx-1 px-2 filter-button"
                        onClick={() => {
                          if (selectedPropType.indexOf(val.value) > -1) {
                            selectedPropType.splice(
                              selectedPropType.indexOf(val.value),
                              1
                            );
                          }
                          let arr = PropType.map((item, index) => {
                            if (ind == index) {
                              item.isSelected = !item.isSelected;
                            }
                            return { ...item };
                          });
                          setPropType(arr);
                          setTimeout(() => {
                            getSearchData(arr);
                          }, 2000);
                        }}
                      >
                        <p className="my-1" style={{ fontSize: '10px' }}>
                          {val.label}
                        </p>
                        <DoneIcon
                          style={{ fontSize: '14px', marginLeft: '4px' }}
                        />
                      </div>
                    ) : (
                      <div
                        className="mx-1 px-2 filter-button"
                        onClick={() => {
                          selectedPropType.push(val.value);
                          let arr = PropType.map((item, index) => {
                            if (ind == index) {
                              item.isSelected = !item.isSelected;
                            }
                            return { ...item };
                          });
                          setPropType(arr);
                          setTimeout(() => {
                            getSearchData(arr);
                          }, 2000);
                        }}
                      >
                        <CircleOutlinedIcon
                          style={{ fontSize: '13px', marginRight: '3px' }}
                        />{' '}
                        <p className="my-1" style={{ fontSize: '10px' }}>
                          {val.label}
                        </p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className="px-3 py-5">
            <div
              className="search-filter"
              onClick={(e) => {
                handleSearchState();
                e.preventDefault();

                // x.push(total,total+1)
                goToSearch();
              }}
            >
              <p className="mt-2">View {total} Properties</p>
              <ExpandCircleDownOutlinedIcon style={{ color: '#ffff' }} />
            </div>
          </div>
        </div>
      ) : (
        <div className="search-filter-mobile">
          <KeyboardArrowLeftIcon
            style={{ margin: ' 11px 10px' }}
            onClick={handleSearchState}
          />
          <div className=" py-2">
            <p
              className="px-3"
              style={{ fontSize: '14px', fontWeight: '500', color: '#212429' }}
            >
              Select Locality or project in {city_name}
            </p>
            <div>
              <div className="px-3 d-flex justify-content-center align-items-center">
                <SearchIcon style={{ position: 'absolute', left: '25px' }} />
                <input
                  placeholder={`Select Locality,project in ${city_name}`}
                  value={query}
                  onChange={(e) => {
                    setquery(e.target.value),
                      setsearchField(true),
                      getLocalities(e.target.value);
                  }}
                />
                {query != '' ? (
                  <>
                    {' '}
                    <div className="search-result2">
                      {localities ? (
                        <>
                          {' '}
                          {localities.map((val) => {
                            return (
                              <>
                                <div>
                                  <h6
                                    className="cursor-pointer"
                                    onClick={() => {
                                      setquery(''),
                                        searchItems.push({
                                          name: val.label,
                                          isSelected: true,
                                          id: val.param + val.id,
                                        });
                                    }}
                                  >
                                    {val.label}
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
            </div>
            <div className="px-3">
              {optionId.length > 0 ||
              searchItems.filter((j) => j.isSelected).length > 0 ? (
                <p
                  className=" py-2"
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#212429',
                  }}
                >
                  Selected Localities
                </p>
              ) : null}

              <div className="d-flex flex-row" style={{ overflowY: 'auto' }}>
                {popularLocation
                  .filter((item) => item.isSelected)
                  .map((o, ind) => {
                    return (
                      <>
                        <div className="select-chip px-2">
                          <p
                            style={{ fontSize: '12px' }}
                            className="d-flex align-items-center px-2 mt-2"
                          >
                            {o.label}
                          </p>
                          <CloseIcon
                            onClick={() => {
                              optionId.pop(o);
                              let arr = popularLocation.map((item, index) => {
                                if (ind == index) {
                                  o.isSelected = false;
                                }
                                return { ...item };
                              });
                              setpopularLocation(arr);
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
                {searchItems
                  .filter((j) => j.isSelected)
                  .map((key, ind) => {
                    return (
                      <>
                        <div className="select-chip px-2">
                          <p
                            style={{ fontSize: '12px' }}
                            className="d-flex align-items-center px-2 mt-2"
                          >
                            {key.name}
                          </p>
                          <CloseIcon
                            onClick={() => {
                              // searchItems.pop(key);

                              let arr = searchItems.map((item, index) => {
                                if (ind == index) {
                                  key.isSelected = false;
                                }
                                return { ...item };
                              });
                              setsearchItems(arr);
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div>
              <p
                className="px-3 py-2"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#212429',
                }}
              >
                Popular Localities
              </p>

              {popularLocation ? (
                <>
                  {' '}
                  {popularLocation.slice(0, Number).map((o, ind) => {
                    return (
                      <>
                        {o.isSelected ? (
                          <div
                            onClick={() => {
                              optionId.pop(o);
                              if (optionId.indexOf(o) > -1) {
                                optionId.splice(optionId.indexOf(o), 1);
                              }
                              let arr = popularLocation.map((item, index) => {
                                if (ind == index) {
                                  o.isSelected = false;
                                }
                                return {
                                  ...item,
                                };
                              });
                              setpopularLocation(arr);
                            }}
                            className="d-flex flex-row align-items-center px-2 my-2 mx-4"
                            style={{
                              borderRadius: '4px',
                              height: '35px',
                              background: '#fafcff',
                              border: '1px solid #41a6aa',
                            }}
                          >
                            {/* <CircleOutlinedIcon style={{ fontSize: '15px' }} / */}
                            <p
                              className="px-4 mt-2"
                              style={{ fontSize: '12px' }}

                              // onClick={() => {
                              //   var page = 1;
                              //   setpageNumber(page);
                              //   setdisplaySearch(false),
                              //     setsearchData([]),
                              //     setupdatePtype(true);
                              //   setQuery(''),
                              //     Label.push({
                              //       name: o.label,
                              //       isSelected: true,
                              //       id: o.param + o.id,
                              //     }),
                              //     getSearchData('null', pageNumber);
                              // }}
                            >
                              {o.label}
                            </p>
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              optionId.push({
                                name: o.label,
                                isSelected: true,
                                id: o.param + o.id,
                              });

                              let arr = popularLocation.map((item, index) => {
                                if (ind == index) {
                                  item.isSelected = !item.isSelected;
                                }
                                return {
                                  ...item,
                                };
                              });
                              setpopularLocation(arr);
                            }}
                            className="d-flex flex-row align-items-center px-2 my-2 mx-4"
                            style={{
                              borderRadius: '4px',
                              height: '35px',
                              background: '#fafcff',
                            }}
                          >
                            <CircleOutlinedIcon style={{ fontSize: '15px' }} />
                            <p
                              className="px-4 mt-2"
                              style={{ fontSize: '12px' }}

                              // onClick={() => {
                              //   var page = 1;
                              //   setpageNumber(page);
                              //   setdisplaySearch(false),
                              //     setsearchData([]),
                              //     setupdatePtype(true);
                              //   setQuery(''),
                              //     Label.push({
                              //       name: o.label,
                              //       isSelected: true,
                              //       id: o.param + o.id,
                              //     }),
                              //     getSearchData('null', pageNumber);
                              // }}
                            >
                              {o.label}
                            </p>
                          </div>
                        )}
                      </>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
              {Number == '5' ? (
                <p
                  style={{
                    fontSize: '12px',
                    position: 'absolute',
                    right: '30px',
                  }}
                  onClick={() => setNumber('1000')}
                >
                  Show more{' '}
                  <KeyboardArrowDownIcon style={{ fontSize: '12px' }} />
                </p>
              ) : (
                <p
                  style={{
                    fontSize: '12px',
                    position: 'absolute',
                    right: '30px',
                  }}
                  onClick={() => setNumber('5')}
                >
                  Show less{' '}
                  <KeyboardArrowDownIcon style={{ fontSize: '12px' }} />
                </p>
              )}
            </div>
            <div className="px-3 py-5">
              <div
                className="search-filter"
                onClick={() => {
                  setslide(true);
                  setTimeout(() => {
                    getSearchData();
                  }, 100);
                }}
              >
                <p className="mt-2">Search</p>
                <ExpandCircleDownOutlinedIcon style={{ color: '#ffff' }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchFilterMobile;

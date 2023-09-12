import React from 'react';
import Image from 'next/image';
import img from '../../public/images/Group 1764.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import apiClient from 'utils/apiClient';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
function QuickFilter({ type, data }) {
  const [bhk, setbhk] = useState([
    { label: '1 BHK', value: 1, isSelected: false },
    { label: '2 BHK', value: 2, isSelected: false },
    { label: '3 BHK', value: 3, isSelected: false },
    { label: '4 BHK', value: 4, isSelected: false },
    { label: '5 BHK', value: 5, isSelected: false },
    { label: '5+ BHK', value: 6, isSelected: false },
  ]);
  const [selectedBedrooms, setselectedBedrooms] = useState([]);

  const [optionId, setoptionId] = useState([]);

  const [popularLocation, setpopularLocation] = useState(data);

  const goToSearch = () => {
    // console.warn(x)
    Router.push({
      pathname: '/PropertyListing/slug',
      query: {
        bedrooms: bhk.filter((j) => j.isSelected).map((item) => item['value']),
        type: type,
        locality: optionId
          .filter((j) => j.isSelected)
          .map((item) => item['name']),
        optionId: optionId
          .filter((j) => j.isSelected)
          .map((item) => item['id']),
      },
    });
  };
  useEffect(() => {
    setpopularLocation(data);
  });
  return (
    <div className="quick-filter-main my-3">
      <div className="row">
        <div className="d-flex flex-row justify-content-between px-4  py-2 ">
          <p style={{ fontWeight: '500', fontSize: '15px' }}>
            Quick Filters
            <p style={{ fontSize: '11px' }}>
              Filter Properties by BHK and Location
            </p>
          </p>
          <Image src={img} alt="" width={55} height={50} />
        </div>
      </div>
      <div className="col px-3">
        <p style={{ fontSize: '11px' }}>Quick Filters</p>
        <div className="d-flex" style={{ overflowX: 'scroll' }}>
          {bhk.map((val, ind) => {
            return (
              <>
                {val.isSelected ? (
                  <button
                    className="quick_filter_button"
                    style={{ fontSize: '10px' }}
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
                    }}
                  >
                    {val.label}
                    <CloseIcon />
                  </button>
                ) : (
                  <button
                    className="quick_filter_button_inactive"
                    style={{ fontSize: '10px' }}
                    onClick={() => {
                      selectedBedrooms.push(val.value);
                      let arr = bhk.map((item, index) => {
                        if (ind == index) {
                          item.isSelected = !item.isSelected;
                        }
                        return { ...item };
                      });
                      setbhk(arr);
                    }}
                  >
                    {val.label}
                  </button>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="col px-3">
        <p style={{ fontSize: '11px', paddingTop: '5px' }}>Location</p>
        <div className="d-flex" style={{ overflowX: 'scroll' }}>
          {/* <button className="quick_filter_button">
            Banjara Hills <CheckCircleIcon />
          </button>
          <button className="quick_filter_button_inactive">
            Jubilli Hills
          </button> */}
          {popularLocation ? (
            <>
              {' '}
              {popularLocation?.map((o, ind) => {
                return (
                  <>
                    {o.isSelected ? (
                      <button
                        className="quick_filter_button"
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
                      >
                        {o.label}
                        <CloseIcon />
                      </button>
                    ) : (
                      <button
                        className="quick_filter_button_inactive"
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
                      >
                        {o.label}
                      </button>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="col px-3 py-3">
        <button className="quick-filter-search" onClick={() => goToSearch()}>
          <h3>
            Search <ExpandCircleDownOutlinedIcon />
          </h3>
        </button>
      </div>
    </div>
  );
}

export default QuickFilter;

import React from 'react';
import logo from '../../../public/images/header2.png';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import flag from '../../../public/images/flag.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

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
    label: 'Any',
  },
];
function valuetext(value) {
  return `${value}°C`;
}
function ListingHeader() {
  const [bhkpicker, setbhkpicker] = useState(false);
  const [PropTypepicker, setPropTypepicker] = useState(false);
  const [salepicker, setsalepicker] = useState(false);
  const [constructionpicker, setconstructionpicker] = useState(false);
  const [furnishedpicker, setfurnishedpicker] = useState(false);
  const [budgetpicker, setbudgetpicker] = useState(false);
  const [selectedBedrooms, setselectedBedrooms] = useState([]);
  const [selectedPropType, setselectedPropType] = useState([]);
  const [selectedConstruction, setselectedConstruction] = useState([]);
  const [selectedFurnished, setselectedFurnished] = useState([]);
  const [selectedSale, setselectedSale] = useState([]);
  const [budget, setbudget] = React.useState([0, 0]);
  const [bhk, setbhk] = useState([
    { label: '1 BHK', value: 1, isSelected: false },
    { label: ' 2 BHK', value: 2, isSelected: false },
    { label: '3 BHK', value: 3, isSelected: false },
    { label: '4 BHK', value: 4, isSelected: false },
    { label: '5 BHK', value: 5, isSelected: false },
    { label: '5+ BHK', value: 6, isSelected: false },
  ]);
  const [construction, setconstruction] = useState([
    { label: 'Under Construction', value: 'Under Construction' },
    { label: 'Ready to Move', value: 'Ready to Move' },
  ]);
  const [PropType, setPropType] = useState([
    { label: 'Apartment', value: 'Apartment', isSelected: false },
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
    { label: 'Farm House', value: 'Farm House', isSelected: false },
  ]);
  const [sale, setsale] = useState([
    { label: 'New Projects', value: 1, isSelected: false },
  ]);
  const [furnished, setfurnished] = useState([
    { label: 'Full Furnished', value: 'Full Furnished' },
    { label: 'Semi Furnished', value: 'Semi Furnished' },
    { label: 'UnFurnished', value: 'UnFurnished' },
  ]);
  const selectBedroom = (ind) => {
    let arr = bhk.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setbhk(arr);
  };
  const selectProperty = (ind) => {
    let arr = PropType.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setPropType(arr);
  };
  const selectSale = (ind) => {
    let arr = sale.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setsale(arr);
  };
  const selectConstruction = (ind) => {
    let arr = construction.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setconstruction(arr);
  };
  const selectFurnished = (ind) => {
    let arr = furnished.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    setfurnished(arr);
  };
  return (
    <>
      <div className="d-flex align-items-center listing-header">
        <div className="col-sm-3 d-flex align-items-center px-3">
          <Image src={logo} width={190} height={30} alt="" />
        </div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="d-flex align-items-center">
            {' '}
            <div
              className="d-flex justify-content-center"
              style={{
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                background: '#e37d32',
                width: '150px',
                height: '100%',
              }}
            >
              <select style={{ color: '#ffff', paddingRight: '16px' }}>
                <option>Hyderabad</option>
              </select>
            </div>
            <input className="listing-input" />
            <SearchIcon
              style={{
                position: 'absolute',
                fontSize: '20px',
                color: 'gray',
                marginLeft: '31.4rem',
              }}
            />
            <div
              className=" nav_right px-3"
              style={{ position: 'absolute', right: '0' }}
            >
              <button className="postad-btn">
                <Image src={flag} alt="" width={'37%'} height={'23%'} /> Post ad
                for{' '}
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
              <button
                className="d-flex align-items-center login-btn"
                style={{ color: '#19469b', background: '#ffffff' }}
              >
                {' '}
                <AccountCircleIcon />
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center filters-main px-4">
        <div className="col-sm">
          <div
            className="filter cursor-pointer "
            onClick={() => setPropTypepicker(!PropTypepicker)}
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
              <p>Porperty Type</p>
              {selectedPropType.length > 0 ? (
                <p>{selectedPropType.join(', ')}</p>
              ) : (
                <p
                  style={{ fontSize: '9px', color: '#bababa', fontWeight: 500 }}
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
            <div className="filter_dropdown">
              {PropType.map((o, ind) => {
                return (
                  <>
                    {o.isSelected ? (
                      <div
                        className="option_chip cursor-pointer"
                        onClick={() => {
                          selectProperty(ind), selectedPropType.pop(o.value);
                        }}
                      >
                        <CheckOutlinedIcon
                          style={{ fontSize: '12px', margin: '3px' }}
                        />
                        {o.label}
                      </div>
                    ) : (
                      <div
                        className="option_chip-inactive cursor-pointer"
                        onClick={() => {
                          selectProperty(ind), selectedPropType.push(o.value);
                        }}
                      >
                        <AddIcon style={{ fontSize: '12px' }} /> {o.label}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="col-sm">
          <div
            className="filter cursor-pointer"
            onClick={() => setbhkpicker(!bhkpicker)}
          >
            <div style={{ lineHeight: '0.4', paddingTop: '6px' }}>
              <p>BHK Type</p>
              {selectedBedrooms.length > 0 ? (
                <p>{selectedBedrooms.join(', ')} Bhk</p>
              ) : (
                <p
                  style={{ fontSize: '9px', color: '#bababa', fontWeight: 500 }}
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
            <div className="filter_dropdown">
              {bhk.map((o, ind) => {
                return (
                  <>
                    {o.isSelected ? (
                      <div
                        className="option_chip cursor-pointer"
                        onClick={() => {
                          selectBedroom(ind), selectedBedrooms.pop(o.value);
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
                          selectBedroom(ind), selectedBedrooms.push(o.value);
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
          ) : null}
        </div>
        <div className="col-sm">
          <div className="filter cursor-pointer">
            <div style={{ lineHeight: '0.4', paddingTop: '6px' }}>
              <p>Budget</p>
              <div className="d-flex justify-content-space-around">
                {budget[0] >= 10000000 ? (
                  <>
                    <p
                      style={{
                        fontSize: '9px',
                        color: '#bababa',
                        fontWeight: 500,
                      }}
                    >
                      {Math.abs(budget[0] / 10000000).toFixed(2)} Cr
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
                      {Math.abs(budget[0] / 100000).toFixed()} Lac
                    </p>
                  </>
                )}
                {'-'}
                {budget[1] >= 10000000 ? (
                  <>
                    <p
                      style={{
                        fontSize: '9px',
                        color: '#bababa',
                        fontWeight: 500,
                      }}
                    >
                      {Math.abs(budget[1] / 10000000).toFixed(2)} Cr
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
                      {Math.abs(budget[1] / 100000).toFixed()} Lac
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="select-icon">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {/* <Select>        
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
                        {Math.abs(budget[0] / 100000).toFixed()} Lac
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
                        {Math.abs(budget[1] / 100000).toFixed()} Lac
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
                  // onChangeCommitted={() => getSearchData(props.slug)}
                  getAriaValueText={valuetext}
                  min={0}
                  max={50000000}
                  marks={marks}
                />
              </Box>  
          </Select> */}
          <div>
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm d-flex justify-content-end"></div>
            </div>
            {/* <Select>
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
                      // onChangeCommitted={() => getSearchData(props.slug)}
                      getAriaValueText={valuetext}
                      min={0}
                      max={50000000}
                      marks={marks}
                    />
                  </Box>
                  </Select> */}
          </div>
        </div>
        <div className="col-sm">
          <div
            className="filter cursor-pointer"
            onClick={() => setsalepicker(!salepicker)}
          >
            <div style={{ lineHeight: '0.4', paddingTop: '6px' }}>
              <p>Sale Type</p>
              {selectedSale.length > 0 ? (
                <p>{selectedSale}</p>
              ) : (
                <p
                  style={{ fontSize: '9px', color: '#bababa', fontWeight: 500 }}
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
            <div className="filter_dropdown">
              {sale.map((o, ind) => {
                return (
                  <>
                    {o.isSelected ? (
                      <div
                        className="option_chip cursor-pointer"
                        onClick={() => {
                          selectSale(ind), selectedSale.pop(o.value);
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
          ) : null}
        </div>
        <div className="col-sm">
          <div
            className="filter cursor-pointer"
            onClick={() => setconstructionpicker(!constructionpicker)}
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
                  style={{ fontSize: '9px', color: '#bababa', fontWeight: 500 }}
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
            <div className="filter_dropdown">
              {construction.map((o, ind) => {
                return (
                  <>
                    {o.isSelected ? (
                      <div
                        className="option_chip cursor-pointer"
                        onClick={() => {
                          selectConstruction(ind),
                            selectedConstruction.pop(o.value);
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
          ) : null}
        </div>
        <div className="col-sm">
          <div
            className="filter cursor-pointer"
            onClick={() => setfurnishedpicker(!furnishedpicker)}
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
              <p>Furnished</p>
              {selectedFurnished.length > 0 ? (
                <p>{selectedFurnished}</p>
              ) : (
                <p
                  style={{ fontSize: '9px', color: '#bababa', fontWeight: 500 }}
                >
                  Select Type
                </p>
              )}
            </div>
            <div className="select-icon">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {furnishedpicker ? (
            <div className="filter_dropdown">
              {furnished.map((o, ind) => {
                return (
                  <>
                    {o.isSelected ? (
                      <div
                        className="option_chip cursor-pointer"
                        onClick={() => {
                          selectFurnished(ind), selectedFurnished.pop(o.value);
                        }}
                      >
                        <CheckOutlinedIcon
                          style={{ fontSize: '12px', margin: '3px' }}
                        />
                        {o.label}
                      </div>
                    ) : (
                      <div
                        className="option_chip-inactive cursor-pointer"
                        onClick={() => {
                          selectFurnished(ind), selectedFurnished.push(o.value);
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
          ) : null}
        </div>

        <div className="col-sm"></div>
        <div className="col-sm"></div>
      </div>
      <div className=" d-flex justify-content-sm-between align-items-center selected_filter px-2">
        <div className="d-flex flex-row">
          <p
            style={{
              fontSize: '11px',
              color: '#969AA3',
              fontWeight: '500',
            }}
          >
            {' '}
            Selected Filters :
          </p>

          <>
            {selectedPropType.map((o) => {
              return (
                <>
                  <div className="custom-chip">
                    {o}
                    <CloseIcon />
                  </div>
                </>
              );
            })}
            {selectedBedrooms.map((o) => {
              return (
                <>
                  <div className="custom-chip">
                    {o} BHK
                    <CloseIcon />
                  </div>
                </>
              );
            })}
            {selectedSale.map((o) => {
              return (
                <>
                  <div className="custom-chip">
                    {o}
                    <CloseIcon />
                  </div>
                </>
              );
            })}
            {selectedConstruction.map((o) => {
              return (
                <>
                  <div className="custom-chip">
                    {o}
                    <CloseIcon />
                  </div>
                </>
              );
            })}
            {selectedFurnished.map((o) => {
              return (
                <>
                  <div className="custom-chip">
                    {o}
                    <CloseIcon />
                  </div>
                </>
              );
            })}
          </>
        </div>

        {/* <h1
                onClick={() => console.warn('data is ', searchData)}
                style={{
                  position: 'sticky',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#212529',
                }}
              >
                Showing 1- {searchData.length} of {Total}
              </h1>
              {Label.length > 0 ? (
                <>
                  {' '}
                  <p style={{ color: '#a8a8a8' }}>
                    Properties for Sale in{' '}
                    {Label.map((key) => {
                      return <>{key.name}</>;
                    })}{' '}
                  </p>
                </>
              ) : (
                <></>
              )} */}
      </div>
    </>
  );
}

export default ListingHeader;

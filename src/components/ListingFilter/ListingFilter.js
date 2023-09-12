import React, { useState, useEffect } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import FormControl from '@mui/material/FormControl';
function ListingFilter({ cityname, cities }) {
  const [value, setValue] = useState('');
  const [multipleValues, setMultipleValues] = useState([]);
  // const [cityName, setcityName] = useState(cities[0].city_name);
  const options = [
    {
      name: 'Hyderabad',
      value: 'annie.cruz',
      photo: 'https://randomuser.me/api/portraits/women/60.jpg',
    },
    {
      name: 'Dehradun',
      value: 'eli.shelton',
      photo: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Banglore',
      value: 'loretta.rogers',
      photo: 'https://randomuser.me/api/portraits/women/51.jpg',
    },
    {
      name: 'Mumbai',
      value: 'lloyd.fisher',
      photo: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
  ];
  const handleChange = (event) => {
    // setcityName(event.target.value);
  };

  return (
    <div className="row filters p-0 ">
      <div className="col-sm ">
        <h5 style={{}}>location</h5>
        <div>
          <select
            // value={cityName}
            // defaultValue={cityName}
            style={{ marginTop: 12, borderColor: 'white' }}
            onChange={(e) => handleChange(e)}
          >
            {cities.map((val) => {
              return (
                <>
                  <option value={val.city_name}>{val.city_name}</option>
                </>
              );
            })}
          </select>
        </div>
      </div>
      <div className="col-sm ">
        <h5>Property Type</h5>
        <div className="App">
          {/* <h1>Select and search</h1> */}
          <div style={{ margin: '13px -10px', alignSelf: 'flex-start' }}>
            <SelectSearch
              options={options}
              value={value}
              onChange={setValue}
              search
              filterOptions={fuzzySearch}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="col-sm ">
        <h5>Budget</h5>
        <div className="App">
          {/* <h1>Select and search</h1> */}
          <div style={{ margin: '13px -10px', alignSelf: 'flex-start' }}>
            <SelectSearch
              options={options}
              value={value}
              onChange={setValue}
              search
              filterOptions={fuzzySearch}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="col-sm ">
        {/* <h5>Property Type</h5> */}
        <div className="App">
          <h5>BHK</h5>
          <div style={{ margin: '13px -10px', alignSelf: 'flex-start' }}>
            <SelectSearch
              options={options}
              value={value}
              onChange={setValue}
              search
              filterOptions={fuzzySearch}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="col-sm ">
        {/* <h5>Property Type</h5> */}
        <div className="App">
          <h5>Possesion status</h5>
          <div style={{ margin: '13px -10px', alignSelf: 'flex-start' }}>
            <SelectSearch
              options={options}
              value={value}
              onChange={setValue}
              search
              filterOptions={fuzzySearch}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="col-sm ">
        {/* <h5>Property Type</h5> */}
        <div className="App">
          {/* <h1>Select and search</h1> */}
          <h5>listed by</h5>
          <div style={{ margin: '13px -10px', alignSelf: 'flex-start' }}>
            <SelectSearch
              options={options}
              value={value}
              onChange={setValue}
              search
              filterOptions={fuzzySearch}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="col-sm  ">
        {/* <h5>Property Type</h5> */}
        <div className="App">
          {/* <h1>Select and search</h1> */}
          <h5>more filter</h5>
          <div
            style={{
              margin: '13px -10px',
              alignSelf: 'flex-start',
              borderRight: 'none',
            }}
          >
            <SelectSearch
              options={options}
              value={value}
              onChange={setValue}
              search
              filterOptions={fuzzySearch}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div className="col-sm p-0">
        <button className="apply-btn">
          Apply <ExpandCircleDownOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default ListingFilter;

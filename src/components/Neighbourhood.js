import React, { Component } from 'react';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

export default class Neighbourhood extends Component {
  state = {
    Data: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    // console.warn('hyyyyyyyyyy');
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M&location=${this.props.lat},${this.props.long}&radius=30`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://maps.googleapis.com',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:::::::', data);
        this.setState({
          Data: data.results,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <>
        <h1 className="mt-4">Location Connectivity</h1>
        <p>
          <ModeOfTravelIcon />
        </p>
        {this.state.Data && <p>{this.state.Data.name}</p>}
      </>
    );
  }
}

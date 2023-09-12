import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Fade from 'react-reveal/Fade';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
class Nearby extends Component {
  render() {
    return (
      <div id="location" className="display px-sm-0 px-lg-5 pt-5 py-5">
        <Fade bottom>
          <h1
            className=" text-center fs-2 pb-5"
            style={{ color: 'rgb(2 35 107)', fontWeight: 400 }}
          >
            Project{' '}
            <span style={{ color: '#c3a554', fontWeight: 600 }}>Location</span>
          </h1>
        </Fade>
        <div
          className="display-col d-flex flex-row h-fit"
          style={{ position: 'relative' }}
        >
          <div className="mb-5 col">
            {/* <h2>hsfhv</h2> */}

            <Map
              className="pvr-map-main pvr-map-mob"
              // style={{ width: '55%' ,height:"55%",position:"absolute",left:0}}
              initialCenter={{
                lat: 17.419669357685635,
                lng: 78.34909113875025,
              }}
              google={this.props.google}
              zoom={14}
            >
              <Marker onClick={this.onMarkerClick} name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
              </InfoWindow>
            </Map>
          </div>
          <Fade right>
            <div className="col d-flex flex-row">
              <div className=" display px-2 d-flex flex-column px-5 py-4">
                <p style={{ fontWeight: 600, color: 'rgb(2 35 107)' }}>
                  <BusinessCenterIcon /> MULTINATIONAL WORK PLACES
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  AMAZON :4 mins - 1.4 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  WIPRO :6 mins - 3.1 KM
                </p>

                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  MICROSOFT :10 mins - 3.2 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  INFOSIS :10 mins - 4.4 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  GOOGLE :15 mins - 6.5 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  WAVEROCK :2 mins - 0.2 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  NEOPOLIS :10 mins - 6.0 KM
                </p>
              </div>
              <div className=" display px-2 d-flex flex-column px-5 py-4">
                <p style={{ fontWeight: 600, color: 'rgb(2 35 107)' }}>
                  <LocalHospitalIcon /> HOSPITALS
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  Continental Hospitals :5 mins - 1.2 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  CARE (Gachibowli) :10 mins - 5.0 KM
                </p>

                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  KIMS (Kondapur) :19 mins - 8 KM
                </p>
                <p style={{ fontWeight: 600, color: 'rgb(2 35 107)' }}>
                  <ShoppingCartIcon /> SHOPPING AND ENTERTAINMENT
                </p>

                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  Flip Side :9 mins - 3.8 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  Atrium Mall :9 mins - 4.6 KM
                </p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'gray' }}>
                  {' '}
                  Inorbit Mall :16 mins - 8.O KM
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M',
})(Nearby);

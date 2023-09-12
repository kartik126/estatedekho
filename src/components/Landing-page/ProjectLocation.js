import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Fade from 'react-reveal/Fade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
class ProjectLocation extends Component {
  render() {
    return (
      <div id="location" className=" px-sm-0 px-lg-5 pt-5 ">
        <Fade bottom>
          <h1
            style={{ color: '#A5A5A5', fontWeight: '400' }}
            className="text-center fs-2 py-4"
          >
            Project Location
          </h1>
        </Fade>
        <div
          className="display-col d-flex flex-row h-fit"
          style={{ position: 'relative' }}
        >
          <div className="mb-5 col">
            {/* <h2>hsfhv</h2> */}

            <Map
              className="map-main map-mob"
              // style={{ width: '55%' ,height:"55%",position:"absolute",left:0}}
              initialCenter={{
                lat: 25.0277898,
                lng: 55.1546894,
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
            <div className="display px-5 d-flex flex-column px-5 py-4">
              <p style={{ fontWeight: 500 }} className="pb-3">
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                5 Minutes To Academic city
              </p>
              <p style={{ fontWeight: 500 }} className="pb-3">
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                7 Minutes To Dragon Mart
              </p>

              <p style={{ fontWeight: 500 }} className="pb-3">
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                10 Minutes to Mirdif city center
              </p>
              <p style={{ fontWeight: 500 }} className="pb-3">
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                10 Minutes to Dubai Silicon Oasis
              </p>
              <p style={{ fontWeight: 500 }} className="pb-3">
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                13 Minutes to Dubai International Airport
              </p>
              <p style={{ fontWeight: 500 }} className="pb-3">
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                18 Minutes to Burj khalifa
              </p>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M',
})(ProjectLocation);

import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { mergeBreakpointsInOrder } from '@mui/system';
class Maps extends Component {
  render() {
    return (
      <div className="py-4">
        {/* <h2>hsfhv</h2> */}
        {this.props.lat && (
          <Map
            style={{ width: '50%', height: '380px' }}
            initialCenter={{
              lat: this.props.lat,
              lng: this.props.long,
            }}
            google={this.props.google}
            zoom={14}
          >
            <Marker onClick={this.onMarkerClick} name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
            </InfoWindow>
          </Map>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M',
})(Maps);

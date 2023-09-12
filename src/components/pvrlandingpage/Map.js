import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
export class PvrMap extends Component {
  render() {
    return (
      <div>
        <Map
          className="pvr-map-main pvr-map-mob"
          // style={{ width: '100%' ,position:"absolute",left:0,right:0}}
          initialCenter={{
            lat: 17.419139000025687,
            lng: 78.34947856948635,
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M',
})(PvrMap);

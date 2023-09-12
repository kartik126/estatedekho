import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    console.log(this.props.Coordinates[0]);
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.Coordinates.split(',')[1],
          lng: this.props.Coordinates.split(',')[0],
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M',
})(MapContainer);
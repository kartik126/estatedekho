import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
const style = {
  margin: '20px 0',
  width: '100%',
  height: '100%',
};
export class MapContainer extends Component {
  render() {
    console.log('coordinatessssss', this.props.Coordinates.split(',')[0]);

    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.Coordinates.split(',')[1],
          lng: this.props.Coordinates.split(',')[0],
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M',
})(MapContainer);

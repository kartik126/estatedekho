import React, { Component } from 'react';
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Fade from 'react-reveal/Fade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleMap from './GoogleMap';

class ProjectLocation extends Component {
  state = {
    landmark: this.props.details?.landmark?.split('/'),
  };

  render() {
    return (
      <section className="near_by_place container pt-5">
        <div className="main-title">
          <Fade bottom>
            <h2 style={{ fontWeight: 700 }}>
              Near By <span style={{ color: '#4dc2e6' }}>places</span>
            </h2>
          </Fade>
        </div>
        <div id="location" className=" px-sm-0 px-lg-5 pt-5 ">
          <div
            className="display-col d-flex flex-row h-fit"
            style={{ position: 'relative' }}
          >
            <div className="mb-5 col">
              {this.props.details && (
                <div style={{ position: 'relative', height: '50vh' }}>
                  <GoogleMap
                    Coordinates={
                      this.props.details?.map_location ||
                      this.props.details?.map_url
                    }
                  />
                </div>
              )}
            </div>
            <Fade right>
              <div className=" px-5 d-flex flex-column px-5">
                {this.state.landmark?.[0] && (
                  <p style={{ fontWeight: 500 }} className="pb-3">
                    {' '}
                    <CheckCircleIcon
                      className="mx-2"
                      style={{ color: '#4dc2e6' }}
                    />
                    {this.state.landmark?.[0]}
                  </p>
                )}
                {this.state.landmark?.[0] && (
                  <p style={{ fontWeight: 500 }} className="pb-3">
                    {' '}
                    <CheckCircleIcon
                      className="mx-2"
                      style={{ color: '#4dc2e6' }}
                    />
                    {this.state.landmark?.[1]}
                  </p>
                )}
                {this.state.landmark?.[2] && (
                  <p style={{ fontWeight: 500 }} className="pb-3">
                    {' '}
                    <CheckCircleIcon
                      className="mx-2"
                      style={{ color: '#4dc2e6' }}
                    />
                    {this.state.landmark?.[2]}
                  </p>
                )}
                {this.state.landmark?.[3] && (
                  <p style={{ fontWeight: 500 }} className="pb-3">
                    {' '}
                    <CheckCircleIcon
                      className="mx-2"
                      style={{ color: '#4dc2e6' }}
                    />
                    {this.state.landmark?.[3]}
                  </p>
                )}
                {this.state.landmark?.[4] && (
                  <p style={{ fontWeight: 500 }} className="pb-3">
                    {' '}
                    <CheckCircleIcon
                      className="mx-2"
                      style={{ color: '#4dc2e6' }}
                    />
                    {this.state.landmark?.[4]}
                  </p>
                )}
                {this.state.landmark?.[5] && (
                  <p style={{ fontWeight: 500 }} className="pb-3">
                    {' '}
                    <CheckCircleIcon
                      className="mx-2"
                      style={{ color: '#4dc2e6' }}
                    />
                    {this.state.landmark?.[5]}
                  </p>
                )}
                {this.state.landmark?.[6] && (
                  <p style={{ fontWeight: 500 }} className="pb-3">
                    {' '}
                    <CheckCircleIcon
                      className="mx-2"
                      style={{ color: '#4dc2e6' }}
                    />
                    {this.state.landmark?.[6]}
                  </p>
                )}
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUExmnby83BijpCKcttYfjjLdMrBwCO1M',
})(ProjectLocation);

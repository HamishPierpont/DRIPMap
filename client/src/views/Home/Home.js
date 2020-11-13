import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import TwitterContainer from '../../components/TwitterContainer';

const mapStyles = {
  width: '81vw',
  height: '100vh',
};

const twitterStyle = {
  float: 'right',
  overflowY: 'scroll',
  width: '18vw',
  height: '100vh'
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <div>
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={
            {
              lat: 29.6516,
              lng: -82.3248
            }
          }
        />
        </div>
        <div style = {twitterStyle}>
          <TwitterContainer/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCK0OcFEpHwXXXYuXYFlNwk5RBH7TaxbB8'
})(MapContainer);

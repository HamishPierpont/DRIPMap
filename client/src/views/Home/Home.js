import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCK0OcFEpHwXXXYuXYFlNwk5RBH7TaxbB8'
})(MapContainer);
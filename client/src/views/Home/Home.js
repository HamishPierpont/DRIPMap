import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Container, Row, Col } from "react-bootstrap";
import TwitterContainer from '../../components/TwitterContainer';

const mapStyles = {
  width: '83.5%',
  height: '100%',
};

const twitterStyle = {
  width: '17%',
  float: 'right',
  overflowY: 'scroll',
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
          <main>
            <Container fluid>
              <Row>
                <Col xs="auto">
                  <TwitterContainer></TwitterContainer>
                </Col>
              </Row>
            </Container>
        </main>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCK0OcFEpHwXXXYuXYFlNwk5RBH7TaxbB8'
})(MapContainer);
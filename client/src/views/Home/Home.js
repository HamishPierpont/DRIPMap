import React, { useEffect } from 'react';
import { ACCESS_TOKEN_NAME, API_BASE_URL, BASE_URL } from '../../shared/apiConstants';
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';
import config from '../../config/config';
import axios from 'axios';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

import TwitterContainer from '../../components/TwitterContainer';
const twitterStyle = {
  float: 'right',
  overflowY: 'scroll',
  width: '20%',
  height: '100vh'
};

const libraries = ["places"];
const mapContainerStyle = {
  float: 'left',
  width: "80%",
  height: "100vh",
};
const options = {
  zoomControl: true
};
const center = {
  lat: 29.6516,
  lng: -82.3248
};


function MapContainer(props) {


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GMAPS_API_KEY || config.gmaps_api_key, 
    libraries,
  });

  const [events, setEvents] = React.useState([]);
  const [image, setImage] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  useEffect(() => {

    axios.get(API_BASE_URL + '/event/read')
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setEvents(response.data);
        }
        else {
          alert.show("Error retrieving events, please try again.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  const onSelectEvent = async (event) => {

    await axios.get(BASE_URL + event.imageURL, { headers: {
      'Content-Type': 'application/json',
  }} )
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        setImage(response.config.url); 
      }
      else {
        alert.show("Error retrieving image.");
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    setSelected(event);
  }


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (


    <div>

      <div style={{ flex: 1, flexDirection: 'row' }}>
        <Search panTo={panTo} />
      </div>

      <div style={{ flex: 1, flexDirection: 'row' }}>
        <div style={twitterStyle}>
          <TwitterContainer />
        </div>

        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
          {events? (events.map((event) => (
            <Marker
              key={`${event.location.lat}-${event.location.lng}`}
              position={event.location}
              onClick={() => {
                onSelectEvent(event);
              }}
            />
           ) )) : null 
        }
          {selected ?
            (
              <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h1>Title: {selected.title}</h1>
                  <h1>Type: {selected.typeOfDisaster}</h1>
                  <p>Description: {selected.description}</p>
                  <p>Host: {selected.userName}</p>
                  <p>Created: {selected.date}</p>
                  {image ? (<img style={{ width: 40, height: 30, backgroundColor: 'skyblue' }} src={image} alt="currentLocationMarker" />) : (<br></br>)}
                </div>
              </InfoWindow>
            ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div style={{ border: "5px #282c34" }}>
      <div className="search" style={{ backgroundColor: "#282c34", paddingTop: 25 }}>
        <Combobox onSelect={handleSelect}>

        <div style={{ marginLeft: "25vw" }}>

            <ComboboxInput style={{ width: 500, height: 40 }}
              value={value}
              onChange={handleInput}
              disabled={!ready}
              placeholder="Search a location">
            </ComboboxInput>

            <button style={{ marginLeft: 10, height: 40 }}
              className="currentLocation"
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    panTo({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    });
                  },
                  () => null
                );
              }}
            >Show Current Location
      </button>
            <div style={{}}>
              {localStorage.getItem(ACCESS_TOKEN_NAME) ?
                <li style={{ listStyleType: 'none', marginLeft: 250 }} class="nav-item active"><a class="nav-link" href="/events/new">Create a new event? <span class="sr-only"></span></a></li>
                : <li style={{ listStyleType: 'none', marginLeft: 200 }} class="nav-item active"><a class="nav-link" href="/user/login">Please login to create a new event<span class="sr-only"></span></a></li>
              }
            </div>
          </div>
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    </div>
  );
}


export default withRouter(MapContainer);

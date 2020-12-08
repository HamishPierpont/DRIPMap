import React, { useState } from 'react';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

//TO DO: Connect to back end, make marker work () -> See: https://cherniavskii.com/using-leaflet-in-react-apps-with-react-hooks/ , make sure images works 

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";


const libraries = ["places"];
const mapContainerStyle = {
  marginTop: '15px',
  overflowY: 'scroll',
  height: "50vh",
  width: "92vw",
};
const options = {
  zoomControl: true
};
const center = {
  lat: 29.65195,
  lng: -82.32278
};

export default function NewEvent({ props }) {

  const [state, setState] = React.useState({
    location: "",
    selectedLocation: { //default is Gainesville
      lat: 29.65195,
      lng: -82.32278
    },
    title: "",
    description: "",
    creator: "",
    images: [],
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleLocationSelection = (address, lat, lng) => {
    setState({
      selectedLocation: {
        lat: lat,
        lng: lng
      }
    });
    console.log(state.selectedLocation);
  }

  const sendDetailsToServer = () => {

    console.log("Person has submitted");
    return; //

    if (state.email.length && state.password.length) {
      //props.showError(null);
      const payload = {
        "location": state.selectedLocation,
        "user": state.creator, //might have to do a get
        "title": state.title,
        "description": state.description,
        "images": state.images,
      }
      axios.post(API_BASE_URL + '/events/create', { headers: { 'auth-token': localStorage.getItem(ACCESS_TOKEN_NAME) } }, payload)
        .then(function (response) {
          if (response.status === 200) {
            setState(prevState => ({
              ...prevState,
              'successMessage': 'Event created successfully. Redirecting to home page..'
            }))
            props.history.push('/Home');
            alert.show("Success")
          } else {
            alert.show("Some error occured")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert.show('Error')
    }

  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (true) {
      sendDetailsToServer()
    } else {
      console.log("Form not valid");
    }
  }



  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCK0OcFEpHwXXXYuXYFlNwk5RBH7TaxbB8",
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);

  }, [])

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";




  function Search({ panTo }) {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {},
      debounce: 300,
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
        ;
      } catch (error) {
        console.log("😱 Error: ", error);
      }
    };

    return (
      <div className="search"
        style={{ marginBottom: '30px' }}
      >
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            default={state.location}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search for a location"
          />
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
    );
  }



  return (

      <div style={{ margin: '70px' }}>
        <center><h1> Create a New Event </h1></center>

        <div>
          <form>
            <div className="form-group text-left" >
              <label htmlFor="nameInput">Event Title</label>
              <input type="text"
                className="form-control"
                id="title"
                placeholder="Name of my event"
                value={state.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="InputDescription">Description</label>
              <input type="textarea"
                className="form-control"
                id="description"
                aria-describedby="descriptionHelp"
                placeholder="Enter a short description"
                value={state.description}
                onChange={handleChange}
              />
              <small id="descriptionHelp" className="form-text text-muted">Short description helps everyone</small>
            </div>
            <div className="form-group">
              <label htmlFor="FileInput">Image</label>
              <input type="file"
                className="form-control"
                id="imageFileInput"
              />
            </div>
            <div className="form-group text-left">
            <Search panTo={panTo} />
              <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
                onLoad={onMapLoad}
              >
                 {state.selectedLocation.lat && (
               <Marker position = {state.selectedLocation}/>)
                } 
              </GoogleMap>
            </div>
            <center><button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmitClick}
            >
              Submit
                </button></center>
          </form>
        </div>
      </div>
  );
}

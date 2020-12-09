import React, { useState } from 'react';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import "./NewEvent.css"

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


function NewEvent({ props }) {

  const [selected, setSelected] = React.useState(null);
  const [input, setInput] = React.useState(null);

  const [state, setState] = React.useState({
    title: "",
    description: "",
    value : "",
    creator: "",
    image: null,
    imagePreviewUrl: null
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

 
  const sendDetailsToServer = () => {

    const payload = {
      "location": selected,
     // "user": state.creator, //might have to do a get
      "title": state.title,
      "description": state.description,
      "image": state.image,
    }
    
    console.log("Person has submitted " , payload);
    return; //

    if (state.location.length && state.title.length ) {
      //props.showError(null);
      const payload = {
        "location": state.selected,
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
      defaultValue:  "Search for a Location"
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
        setSelected({lat, lng});
        panTo({ lat, lng });
      } catch (error) {
        console.log("😱 Error: ", error);
      }


    };

    return (
      <div className="search"
        style={{ marginBottom: '30px' }}
      >
              <p className="bw3">Location:</p>
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            className="class"
            selectOnClick
            value={value}
            onChange={handleInput}
            disabled={!ready}
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

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelected({ lat, lng})
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        setState({
            image: file,
            imagePreviewUrl: reader.result
        });
    }

    reader.readAsDataURL(file);
  };

  
   let $imagePreview = null;

  return (
      <div className="app">
        <br></br>
        <center><h1 className="title"> Create a New Event </h1></center>
        <br></br>
        <div>
          <form className="formContainer" style={{backgroundColor: "#282c34"}}>
            <div className="form-group text-left" >
              <label className="bw1" htmlFor="nameInput">Event Title:</label>
              <input type="text"
                className="fc1"
                id="title"
                placeholder="Name of my event"
                value={state.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left">
              <label className="bw2" htmlFor="InputDescription">Description:</label>
              <input type="textarea"
                className="fc2"
                id="description"
                aria-describedby="descriptionHelp"
                placeholder="Enter a short description of the disaster"
                value={state.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left">
              <label className="bw3" htmlFor="FileInput">Image:</label>
              <input type="file"
                className="fc3"
                id="imageFileInput"
                onChange={(e) => handleImageChange(e)} 
                /> 
                <div className="img-preview">
                {$imagePreview}
                  </div>

            </div>
            <div className="form-group text-left">
            <Search panTo={panTo} />
            <div className="mapClass">
              <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
                onLoad={onMapLoad}
              >
                 {selected? 
               (<Marker position = {selected} draggable={true} onDragEnd={(e) => onMarkerDragEnd(e)}/>) :null 
                } 
              </GoogleMap>
              </div>
            </div>
            <div className="buttonClass">
            <center>
              
              <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmitClick}
              >
                  Submit
              </button>
                
                </center>
                </div>
          </form>
        </div>
      </div>
  );
}

export default withRouter(NewEvent)
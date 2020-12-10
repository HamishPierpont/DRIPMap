import React, { useState } from 'react';
import { useAlert } from 'react-alert'
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import FormData from 'form-data';
import "./NewEvent.css"

import {
  GoogleMap,
  useLoadScript,
  Marker
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
  height: "40vh",
  width: "60vw",
};
const options = {
  zoomControl: true
};
const center = {
  lat: 29.65195,
  lng: -82.32278
};


function NewEvent({ props }) {

  const alert = useAlert();
  const [selected, setSelected] = React.useState(null);
  const [input, setInput] = React.useState(null);

  const [state, setState] = React.useState({
    title: "",
    description: "",
    typeOfDisaster: "",
    image: null,
    imagePreviewUrl: null, 
  })

  const handleChange = (e) => {
    console.log(e.target);
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

 
  const sendDetailsToServer = async () => {

    if (selected && state.title.length && state.typeOfDisaster.length ) {
      
      let data = new FormData();
      console.log(state.image);
      data.append('image', state.image, state.image.name);

      var imageId = null;
      
    await Promise.allSettled([
      Promise.resolve(axios.post(API_BASE_URL + '/image/create', data)),
    ]).then(axios.spread ((imageResponse)=> {
      console.log(imageResponse);

      if (imageResponse.value.status === 200) {
        imageId =imageResponse.value.data.imageId;
      }
      else{
        alert.show("Error");
      }
    }))
    .catch(function (error) {
      alert.show("Error");
      console.log(error); 
    });
      
     

      let token = localStorage.getItem(ACCESS_TOKEN_NAME);
      const payload = {
        "title": state.title,
        "description": state.description,
        "typeOfDisaster": state.typeOfDisaster, 
        "userName":  localStorage.getItem("username"),
        "location": selected,
        "date" : new Date(), 
        "imageId": imageId
      }
      
      axios.post(API_BASE_URL + '/event/create', payload, { headers: {'auth-token': token} })

        .then(function (response) {
          if (response.status === 200) {
            setState(prevState => ({
              ...prevState,
              'successMessage': 'Event created successfully. Redirecting to home page..'
            }))
            redirectToHome();
            alert.show("Success");
          } else {
            alert.show("Some error occured");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert.show('Error');
    }

  }

  const redirectToHome = async () =>{
    props.history.push('/home');
}

  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendDetailsToServer();
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
        setSelected({lat, lng});
        panTo({ lat, lng });
      } catch (error) {
        console.log("😱 Error: ", error);
      }


    };

    return (
      <div className="search"
      >
              <p className="bw3">Location:</p>
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            className="class"
            selectOnClick
            value={value}
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

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelected({ lat, lng})
  };

  const handleImageChange = (e) => {

    e.preventDefault();
    setState(prevState => ({
          ...prevState,
          ["image"]:  e.target.files[0]
    }));
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
        <label className="bw1" htmlFor="nameInput">Type of Disaster:</label>
        <div style={{ marginLeft: '80px' }}>
          <div className="radio">
          <label className="option1">
            <input
              type="radio"
              id="typeOfDisaster"
              value="Earthquake"
              checked={state.typeOfDisaster === "Earthquake"}
              onChange={handleChange}
            />
            Earthquake
          </label>
        </div>
        <div className="radio">
          <label className="option2">
            <input
              type="radio"
              id="typeOfDisaster"
              value="Fire"
              checked={state.typeOfDisaster === "Fire"}
              onChange={handleChange}
            />
            Fire
          </label>
        </div>
        <div className="radio">
          <label className="option3">
            <input
              type="radio"
              id="typeOfDisaster"
              value="Flooding"
              checked={state.typeOfDisaster === "Flooding"}
              onChange={handleChange}
            />
            Flooding
          </label>
        </div>
        <div className="radio">
          <label className="option4">
            <input
              type="radio"
              id="typeOfDisaster"
              value="Hurricane"
              checked={state.typeOfDisaster === "Hurricane"}
              onChange={handleChange}
            />
            Hurricane
          </label>
        </div>
        <div className="radio">
          <label className="option5">
            <input
              type="radio"
              id="typeOfDisaster"
              value="Tornado"
              checked={state.typeOfDisaster === "Tornado"}
              onChange={handleChange}
            />
            Tornado
          </label>
        </div>
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
            </div>
            <div className="form-group text-left">
              <label className="bw3" htmlFor="FileInput">Image:</label>
              <input type="file"
                className="fc3"
                id="image"
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
              >Submit</button>
                
                </center>
                </div>
          </form>
        </div>
      </div>
  );
}

export default withRouter(NewEvent)

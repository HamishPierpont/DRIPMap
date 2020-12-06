import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";

import TwitterContainer from '../../components/TwitterContainer';
const twitterStyle = {
  float: 'right',
  overflowY: 'scroll',
  width: '18vw',
  height: '100vh'
};

const libraries = ["places"];
const mapContainerStyle = {
  float: 'left',
  overflowY: 'scroll',
  height: "85vh",
  width: "80vw",
};
const options = {
  zoomControl: true
};
const center = {
  lat: 29.6516,
  lng: -82.3248
};


export default function MapContainer() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCK0OcFEpHwXXXYuXYFlNwk5RBH7TaxbB8",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

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

      <div style={{flex: 1, flexDirection: 'row',float: 'left'}} >
      <Locate panTo={panTo} />
      <Search panTo={panTo} />
      </div>

      <div style={{flex: 1, flexDirection: 'row'}}>
      <div style = {twitterStyle}>
          <TwitterContainer/>
        </div>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `/logo192.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
              <div>
              <img  style={{width: 40, height: 30, backgroundColor: 'skyblue'}} src="/fire.png" alt="currentLocationMarker" />
              <NewEventForm />
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
        </div>
    </div>
  );
}
//              <p>LocationPin {formatRelative(selected.time, new Date())}</p>

function NewEventForm({props}){
  return (
    <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelect">Select</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelectMulti">Select Multiple</Label>
      <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="exampleText">Text Area</Label>
      <Input type="textarea" name="text" id="exampleText" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleFile">File</Label>
      <Input type="file" name="file" id="exampleFile" />
      <FormText color="muted">
        This is some placeholder block-level help text for the above input.
        It's a bit lighter and easily wraps to a new line.
      </FormText>
    </FormGroup>
    <FormGroup tag="fieldset">
      <legend>Radio Buttons</legend>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          Option one is this and that—be sure to include why it's great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1" />{' '}
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup check disabled>
        <Label check>
          <Input type="radio" name="radio1" disabled />{' '}
          Option three is disabled
        </Label>
      </FormGroup>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" />{' '}
        Check me out
      </Label>
    </FormGroup>
    <Button>Submit</Button>
  </Form>   
  );
}

function Locate({ panTo }) {
  return (
    <button
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
    >
      <img  style={{width: 40, height: 30, backgroundColor: 'skyblue'}} src="/current_location.png" alt="currentLocationMarker" />
    </button>
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
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

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
    <div className="search"
    style={{marginBottom : '30px'}}
    >
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
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
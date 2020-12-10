import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import axios from 'axios'

import './Profile.css';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function Profile(props) {


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

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCK0OcFEpHwXXXYuXYFlNwk5RBH7TaxbB8",
    libraries,
  });

  const [isLoading, setLoading] = useState(true);

  const [state, setState] = useState({
    currentUser: "",
    currentUserEvents: []
  });

  const [selected, setSelected] = React.useState(null);

  const onSelectEvent = async (event) => {
    setSelected(event);
  }

  const onDeleteEvent = async () => {
    console.log("Event is deleted");
    console.log(selected);
    return; 
    //draft
    // const params = {
    //   new URLSearchParams([['_userName', localStorage.getItem('username')]]),
    //   new URLSearchParams([['_id', selected._id]])
    // }

    // axios.deleteOne(API_BASE_URL + '/event/delete/', params, { headers: { 'auth-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })
  }

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const alert = useAlert();

  useEffect( async () => {

    await Promise.allSettled([
      Promise.resolve(axios.get(API_BASE_URL + '/user/'+ localStorage.getItem('username'), { headers: { 'auth-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })),
      Promise.resolve(axios.get(API_BASE_URL + '/event/read/'+ localStorage.getItem('username'), { headers: { 'auth-token': localStorage.getItem(ACCESS_TOKEN_NAME) } }))
    ]).then(axios.spread ((userResponse, eventsResponse)=> {

      if (userResponse.value.status !== 200) {
        alert.show("Error retrieving user information. Please try logging in again.");
        props.history.push('user/login');
      }

      if (eventsResponse.value.status !== 200) {
        alert.show("Error retrieving events.");
        setState({ currentUser: userResponse.data.user });
      }else{
        setState({ currentUserEvents: eventsResponse.value.data.events });
        setState({ currentUser: userResponse.value.data.user });
      }
      setLoading(false);
    
    }))
    .catch(function (error) {
      console.log(error); 
      props.history.push('user/login');
    })

  }, []);
   


  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    window.location.reload(false);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
      {state.currentUser.firstName && (
          <p> Welcome  {state.currentUser.userName} ! </p>)} 
     </header>
      <div>
        {state.currentUser.firstName && 
        (<div>
          <p className="App-Text">First name: {state.currentUser.lastName} </p>
          <br></br>
          <br></br>
          <p className="App-Text">Last name: {state.currentUser.firstName}</p>
          <br></br>
          <br></br>
          <p className="App-Text">Email: {state.currentUser.email}</p>
          <br></br>
          <br></br>

          </div>)
          }
          </div>
      <div>
      <center>
        {state.currentUserEvents ?
          (state.currentUserEvents.length ?
            (
            <GoogleMap
              id="map"
              mapContainerStyle={mapContainerStyle}
              zoom={8}
              center={center}
              options={options}
              onLoad={onMapLoad}
            >
              {state.currentUserEvents.map((event) => (
                <Marker
                  key={`${event.location.lat}-${event.location.lng}`}
                  position={event.location}
                  onClick={() => {
                    onSelectEvent(event);
                  }}
                />
              ))}
              {selected ?
                (
                  <InfoWindow
                    position={selected.location}
                    clickable={true}
                    onCloseClick={() => onSelectEvent(null)}
                  >
                    <div>
                      <h1>Title: {selected.title}</h1>
                      <h1>Type: {selected.typeOfDisaster}</h1>
                      <p>Description: {selected.description}</p>
                      <p>Host: {selected.userName}</p>
                      <p>Created: {selected.date}</p>
                      <img style={{ width: 40, height: 30, backgroundColor: 'skyblue' }} src={selected.image} alt=" " />
                      <button onClick = {onDeleteEvent}>Delete</button>
                    </div>
                  </InfoWindow>
                ) : null}
            </GoogleMap>
      )
          : (<p>You have not create any events. <li style={{ listStyleType: 'none', marginLeft: 250 }} class="nav-item active"><a class="nav-link" href="/events/new">Create a new event? <span class="sr-only"></span></a></li> </p>))
          : <p className="App-Text">Error loading events.</p>}
          </center>
       </div>
      <div>
        <button style={{ width: 200, height: 50, marginBottom: 50 }}
          type="submit"
          className="btn btn-primary"
          onClick={handleLogout}
        >Logout</button>
      </div>
    </div>
  );
}


export default withRouter(Profile);
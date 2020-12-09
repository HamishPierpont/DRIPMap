import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import axios from 'axios'

import './Profile.css';

function Profile(props) {

  const [state, setState] = useState({
      currentUser : "",
      currentUserEvents : []
  });

  const alert = useAlert();

  useEffect(() => {
    axios.get(API_BASE_URL + '/user/me', { headers: { 'auth-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })
      .then(function (response) {

        if (response.status !== 200) {
           props.history.push('user/login');
        }
        setState({currentUser: response.data.user});
        console.log(response.data.user);
        console.log(state.currentUser);
      })
      .catch(function (error) {
        props.history.push('user/login');
      });

      axios.get(API_BASE_URL + '/event/read/'+ localStorage.getItem('username'), { headers: { 'auth-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })
      .then(function (response) {

        if (response.status !== 200) {
            alert.show("Error retrieving events.");
            console.log(response); 
        }
        setState({currentUserEvents: response.data.events});
      })
      .catch(function (error) {
        console.log(error);
      });


  }, []);

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    window.location.reload(false);
  }

 
  return  (
    <div className="App">
      <header className="App-header">
        Profile Page Content
            </header>
            <div>
         {state.currentUser.name && (
         <p> Welcome {state.currentUser.firstName} ! 
            {state.currentUser.lastName}
            {state.currentUser.email}
            {state.currentUser.userName}.
         </p>)}</div>
         <div>
         {state.currentUserEvents ? 
         (<p>{state.currentUserEvents}</p>) :
         (<p>You have not create any events. <li style={{ listStyleType: 'none', marginLeft: 250 }} class="nav-item active"><a class="nav-link" href="/events/new">Create a new event? <span class="sr-only"></span></a></li> </p>) 
         }</div>
      <div>
      <button style={{width: 200, height: 50, marginBottom: 50}}
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleLogout}
                >Logout</button>
      </div>
    </div>
  );
}


export default withRouter(Profile);
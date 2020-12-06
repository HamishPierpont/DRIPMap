import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import axios from 'axios'
import { BoxLoading } from 'react-loadingg'; //Potentially helpful for loading data.

import './Profile.css';


var currentUser = ""; 

function Profile(props) {

  useEffect(() => {
    axios.get(API_BASE_URL + '/user/me', { headers: { 'auth-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })
      .then(function (response) {

        if (response.status !== 200) {
           props.history.push('user/login');
        }
        currentUser =  response.data.user;
        console.log(currentUser)
      })
      .catch(function (error) {
        props.history.push('user/login');
      });
  })

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
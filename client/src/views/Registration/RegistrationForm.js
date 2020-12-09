import React, { useState } from 'react';
import { useAlert } from 'react-alert'
import axios from 'axios';
import './RegistrationForm.css';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {


    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const alert = useAlert();

    const sendDetailsToServer = () => {

        if (state.email.length && state.password.length) {
            const payload = {
                "firstName": state.first_name,
                "lastName": state.last_name,
                "userName": state.user_name,
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + '/user/register', payload)
                .then(function (response) {
                    if (response.status === 200) {
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token)
                        localStorage.setItem("username", response.data.token) 
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..'
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
            alert.show('Please enter valid username and password')
        }

    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            alert.show('Passwords do not match');
        }
    }

    const redirectToLogin = () => {
        props.history.push('/user/login');
    }

    return (
        <div className="app">
            <form className="formContainer" style={{backgroundColor: "#282c34"}}>
                <br></br>
                <h1 className="header">Registration</h1>
                <br></br>
                <div className="form-group text-left">
                    <label className="bodyWords2" htmlFor="firstNameInput">First name: </label>
                    <input type="text"
                        className="formChanger1"
                        id="first_name"
                        placeholder="John"
                        value={state.first_name}
                        onChange={handleChange}
                    />
                              <br></br> 
                </div>
                <div className="form-group text-left">
                    <label className="bodyWords2" htmlFor="lastNameInput">Last name: </label>
                    <input type="text"
                        className="formChanger1"
                        id="last_name"
                        placeholder="Doe"
                        value={state.last_name}
                        onChange={handleChange}
                    />
                              <br></br> 
                </div>
                <div className="form-group text-left">
                    <label className="bodyWords2" htmlFor="userNameInput">Username: </label>
                    <input type="text"
                        className="formChanger1"
                        id="user_name"
                        placeholder="JohnDoe321"
                        value={state.user_name}
                        onChange={handleChange}
                    />
                              <br></br> 
                </div>
                <div className="form-group text-left">
                    <label className="bodyWords2" htmlFor="exampleInputEmail1">Email address*: </label>
                    <input type="email"
                        className="formChanger2"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="johndoe@gmail.com"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <br></br> 
                </div>
                <div className="form-group text-left">
                    <label className="bodyWords3" htmlFor="exampleInputPassword1">Password*: </label>
                    <input type="password"
                        className="formChanger3"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                    <br></br>
                </div>
                <div className="form-group text-left">
                    <label className="bodyWords4" htmlFor="exampleInputPassword1">Confirm Password: </label>
                    <input type="password"
                        className="formChanger4"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <small id="emailHelp" className="specialText">*DRIPMaP will never share your email with other people or companies</small>
                <br></br>
                <small id="emailHelp" className="specialText">*Password must be at least 6 characters long</small>
                <br></br>
                <br></br>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                > Register</button>
                 <div className="registerMessage">
                <div className="messageText">Already have an account? </div>
                <span className="loginText" onClick={() => redirectToLogin()}>Login</span>
            </div>
            </form>
        </div>
    )
}

export default withRouter(RegistrationForm);
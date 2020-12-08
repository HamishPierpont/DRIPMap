import React, { useState } from 'react';
import { useAlert } from 'react-alert'
import axios from 'axios';
import './RegistrationForm.css';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import { withRouter } from "react-router-dom";


function RegistrationForm(props) {


    const [state, setState] = useState({
        name: "",
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
            //props.showError(null);
            const payload = {
                "name": state.name,
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + '/user/register', payload)
                .then(function (response) {
                    if (response.status === 200) {
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token)
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..'
                        }))
                        props.history.push('/Home');
                        alert.show("Success")
                        //props.showError(null)
                    } else {
                        //props.showError("Some error ocurred");
                        alert.show("Some error occured")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert.show('Please enter valid username and password')
            //props.showError('Please enter valid username and password')
            //console.log("Please enter a valid username and password")
        }

    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            //props.showError("Passwords do not match");
            alert.show('Passwords do not match');
        }
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="nameInput">Name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        placeholder="John Doe"
                        value={state.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegistrationForm);
import React, { useState } from 'react';
import { useAlert } from 'react-alert'
import axios from 'axios';
import './LoginForm.css';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../shared/apiConstants';
import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const alert = useAlert();

 
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        const payload = {
            "email": state.email,
            "password": state.password,
        }


        await Promise.allSettled([Promise.resolve(axios.post(API_BASE_URL + '/user/login', payload))
        ]).then(axios.spread((loginResponse) => {
            if (loginResponse.value.status === 200) {
               
                localStorage.setItem(ACCESS_TOKEN_NAME, loginResponse.value.data.token)
                localStorage.setItem("username", loginResponse.value.data.userName)
                setState(prevState => ({
                    ...prevState,
                    'successMessage': 'Login successful. Redirecting to home page..'
                }))
                redirectToHome();
            }
            else if (loginResponse.value.status === 204) {
                alert.show("Username and password do not match");
            }
            else {
                alert.show("Username does not exists");
            }
        })).catch(function (error) {
            console.log(error);
            alert.show("Login error, please try again.");
        });
        
    };




    const redirectToHome = async () =>{
        props.history.push('/home');
        window.location.reload(false); //Refresh to update the nav bar
    }

    const redirectToRegister = () => {
        props.history.push('/user/register');
    }
    return (
        <div className="app">
            <form className="formContainer" style={{ backgroundColor: "#282c34" }}>
                <br></br>
                <h1 className="header">Log In</h1>
                <br></br>
                <br></br>
                <div className="form-group text-left">
                    <label className="bodyWordsAgain1" htmlFor="nameInput">Email Address*: </label>
                    <input type="email"
                        className="formChangerAgain1"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />

                </div>
                <div className="form-group text-left">
                    <label className="bodyWordsAgain2" htmlFor="exampleInputEmail1">Password: </label>
                    <input type="password"
                        className="formChangerAgain2"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check">
                </div>
                <small id="emailHelp" className="messageText">*DRIPMaP will never share your email with other people or companies</small>
                <br></br>
                <br></br>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Log In</button>
            </form>
            <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <div className="messageText">Dont have an account? </div>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span>
            </div>
        </div>
    )
}


export default withRouter(LoginForm);
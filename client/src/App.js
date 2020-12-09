import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';

import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./views/Home/Home";
import Donate from "./views/Donate/Donate";
import Profile from "./views/Profile/Profile";
import NewEvent from "./views/Events/NewEvent";
import Login from "./views/Login/LoginForm";
import Registration from "./views/Registration/RegistrationForm";

import Resources from "./views/Resources/Resources";
import Earthquakes from "./views/Resources/Earthquakes";
import Fires from "./views/Resources/Wildfires";
import Flooding from "./views/Resources/Flooding";
import Hurricanes from "./views/Resources/Hurricanes";
import Tornados from "./views/Resources/Tornados";




const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Donate" component={Donate} />
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/register" component={Registration} />
        <Route exact path="/events/new" component={NewEvent} />
        <Route exact path="/resources/earthquakes" component={Earthquakes} />
        <Route exact path="/resources/fires" component={Fires} />
        <Route exact path="/resources/flooding" component={Flooding} />
        <Route exact path="/resources/hurricanes" component={Hurricanes} />
        <Route exact path="/resources/tornados" component={Tornados} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

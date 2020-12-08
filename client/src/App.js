import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Resources from "./views/Resources/Resources";
import Profile from "./views/Profile/Profile";
import Donate from "./views/Donate/Donate";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar/>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Donate" component={Donate} />
          <Route component={NotFound}/>
        </Switch>
      </div>
      <Footer/>
      </div>
  );
}

export default App;

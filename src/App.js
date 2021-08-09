import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import Registerx from "./Registerx";
import Home from "./Home";
import Loginmain from "./Loginmain";
import Profile from "./Profile";
import SoundAlarm from "./SoundAlarm";
import Geofence from "./Geofence";
import Navbar from "./Navbar";
import Mapx from "./Mapx";
import PrivateRoute from "./PrivateRoutes";
// import DataService from "./services/Data";

const App = () => {
  // useEffect(() => {
  //   console.log("effect");
  //   DataService.getAll("usersData").then((response) => console.log(response));
  // }, []);

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Login" exact component={Loginmain} />
      <Route path="/Profile" exact component={Profile} />
      <Route path="/SoundAlarm" exact component={SoundAlarm} />
      <Route path="/Geofence" exact component={Geofence} />
      <Route path="/Navbar" exact component={Navbar} />
      <Route path="/SucessfulRegistration" exact component={Registerx} />
      <Route path="/Mapx" exact component={Mapx} />
    </Router>
  );
};

export default App;

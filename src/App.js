import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import Registerx from "./Registerx";
import Home from "./Home";
import Loginmain from "./Loginmain";
import VerticalNav from "./components/VerticalNav";
// import DataService from "./services/Data";

const App = () => {
  // useEffect(() => {
  //   console.log("effect");
  //   DataService.getAll("usersData").then((response) => console.log(response));
  // }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Loginmain} />
        <Route path="/SucessfulRegistration" exact component={Registerx} />
        <Route path="/Uppernav" exact component={VerticalNav} />
      </Switch>
    </Router>
  );
};

export default App;

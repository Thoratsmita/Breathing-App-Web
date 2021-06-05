import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";

import Home from "./Home";

// import DataService from "./services/Data";

const App = () => {
  // useEffect(() => {
  //   console.log("effect");
  //   DataService.getAll("usersData").then((response) => console.log(response));
  // }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

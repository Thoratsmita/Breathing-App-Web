import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";

import Login from "./Login";

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
          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

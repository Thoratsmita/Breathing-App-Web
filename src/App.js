import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Home";
import Services from "./Services";
import Blog from "./Blog";
import Help from "./Help";
import Login from "./Login";
import PostProperty from "./PostProperty";
import Profile from "./Profile";

import DataService from "./services/Data";

const App = () => {
  const pages = [
    {
      pageLink: "/",
      view: Home,
      name: "Home",
    },
    {
      pageLink: "/Services",
      view: Services,
      name: "Services",
    },
    {
      pageLink: "/Blog",
      view: Blog,
      name: "Blog",
    },
    {
      pageLink: "/Help",
      view: Help,
      name: "Help",
    },
    {
      pageLink: "/Register",
      view: Login,
      name: "Sign Up",
    },
    {
      pageLink: "/Profile",
      view: Profile,
      name: "My Profile",
    },
    {
      pageLink: "/PostProperty",
      view: PostProperty,
      name: "Post a Property",
    },
  ];

  useEffect(() => {
    console.log("effect");
    DataService.getAll().then((response) => console.log(response));
  }, []);
  return (
    <>
      <Router>
        <NavBar pages={pages} className="Nav" />
        <br />
        <br />
        <br />
        <Switch>
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.pageLink}
              exact
              component={page.view}
            />
          ))}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

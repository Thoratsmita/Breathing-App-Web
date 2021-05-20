import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Home";
import Services from "./Services";
import Blog from "./Blog";
import Help from "./Help";
import Login from "./Login";
import PostProperty from "./PostProperty";
import Profile from "./Profile";

const App = () => {
  const pages = [
    {
      pageLink: "/",
      view: Home,
    },
    {
      pageLink: "/Services",
      view: Services,
    },
    {
      pageLink: "/Blog",
      view: Blog,
    },
    {
      pageLink: "/Help",
      view: Help,
    },
    {
      pageLink: "/Profile",
      view: Profile,
    },
    {
      pageLink: "/PostProperty",
      view: PostProperty,
    },
    {
      pageLink: "/Login",
      view: Login,
    },
  ];
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {pages.map((page, index) => (
            <Route path={page.pageLink} exact component={page.view} />
          ))}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

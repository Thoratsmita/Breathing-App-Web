import React from "react";
import Blog from "./Blog";
import NavBar from "./components/NavBar";

import Home from "./Home";
import Services from "./Services";
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
    // <Router>
    //   <NavBar />
    //   <Switch>
    //     <Route />
    //     <Route />
    //   </Switch>
    // </Router>
    <Login />
  );
};

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";

import NavBar from "./components/NavBar";

import Home from "./Home";
import Services from "./Services";
import Blog from "./Blog";
import Help from "./Help";
import Login from "./Login";
import Register from "./Register";
import PostProperty from "./PostPorperty";
import Profile from "./Profile";

// import DataService from "./services/Data";

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
      pageLink: "/Login",
      view: Login,
      name: "Login",
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
  const [loggedIn, setloggedIn] = useState(false);
  const toggleLoginStatus = () => setloggedIn(!loggedIn);

  // useEffect(() => {
  //   console.log("effect");
  //   DataService.getAll().then((response) => console.log(response));
  // }, []);

  return (
    <>
      <Router>
        <NavBar pages={pages} className="Nav" loggedIn={loggedIn} />
        <br />
        <br />
        <br />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" exact component={Services} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/Help" exact component={Help} />
          <Route path="/PostProperty" exact component={PostProperty} />
          <Route
            path="/Login"
            exact
            render={(props) => (
              <Login
                loggedIn={loggedIn}
                toggleLogin={toggleLoginStatus}
                {...props}
              />
            )}
          />
          <Route path="/Register" exact component={Register} />
          <Route
            path="/Profile"
            exact
            render={(props) => (
              <Profile
                loggedIn={loggedIn}
                toggleLogin={toggleLoginStatus}
                {...props}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;

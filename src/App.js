import React from "react";
import NavBar from "./components/NavBar";
import Login from "./Login";

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

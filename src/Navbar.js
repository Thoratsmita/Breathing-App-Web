import React from "react";
import { Link ,Redirect} from "react-router-dom";
import {
  // List,
  // ListItem,
  // ListItemText,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import SoundAlarm from "./SoundAlarm";
import Geofence from "./Geofence";
import Profile from "./Profile";
import VerticalNav from "./VerticalNav";
import TrackingPeriod from "./TrackingPeriod";
import Device from "./Device";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Horizontalnav from "./components/Horizontalnav";
import AddNewPet from "./AddNewPet";
import WhereisMyPet from "./WhereisMyPet";
import { isAuthenticated } from "./coreAPIcalls/userAPIcalls";


const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    navButton: {
      textTransform: "none",
    },
    Gridmenu: {
      padding: "10px",
    },
    GridContainer: {
      background: "#f4f4f2",
      height: "100vh",
      margin: "0",
    },
    Maincontainer:{
      marginTop:"12px",
    }
  }));

  const classes = useStyles();
  const navPages = [
    {
      pageLink: "/WhereisMyPet",
      view: WhereisMyPet,
      name: "Where is my pet?",
    },
    {
      pageLink: "/SoundAlarm",
      view: SoundAlarm,
      name: "Sound the Alarm",
    },
    {
      pageLink: "/Profile",
      view: Profile,
      name: "My Profile",
    },
    {
      pageLink: "/Geofence",
      view: Geofence,
      name: "Set Geofence",
    },
    
    {
      pageLink: "/TrackingPeriod",
      view: TrackingPeriod,
      name: "Set TrackingPeriod",
    },
    {
      pageLink: "/Device",
      view: Device,
      name: "Device",
    }
  ];
  const addnewpet = {
    pageLink: "/addNewPet",
    view: AddNewPet,
    name: "+Add pet",
  };
  //const leftNav = pages.slice(0, 4);
  //let rightNav = loggedIn ? pages.slice(5, 6) : pages.slice(4, 5);
  // rightNav.push(pages.slice(6, pages.length)[0]);


  /*const isAuthenticatedtrue = () => {
    return <div>
    <Horizontalnav />
   
    <Router>
      <Grid container className = {classes. Maincontainer}>
        <Grid item xs={2} className={classes.GridContainer}>
          <center>
            <VerticalNav pages={navPages} addnewpet={addnewpet} className={classes.navpages} />
          </center>
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route path="/WhereisMyPet" component={WhereisMyPet} />
            <Route path="/SoundAlarm" exact component={SoundAlarm} />
            <Route path="/TrackingPeriod" exact component={TrackingPeriod} />
            <Route path="/Geofence" exact component={Geofence} />
            <Route path="/Device" exact component={Device} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/addNewPet" exact component={AddNewPet} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  </div>
  }

const isAuthenticatedfalse = () => {
  return <Redirect
  to={{
    pathname: "/Login",
  }}
/>
}*/


return  isAuthenticated ?  <div>
<Horizontalnav />

<Router>
  <Grid container className = {classes. Maincontainer}>
    <Grid item xs={2} className={classes.GridContainer}>
      <center>
        <VerticalNav pages={navPages} addnewpet={addnewpet} className={classes.navpages} />
      </center>
    </Grid>
    <Grid item xs={10}>
      <Switch>
        <Route path="/WhereisMyPet" component={WhereisMyPet} />
        <Route path="/SoundAlarm" exact component={SoundAlarm} />
        <Route path="/TrackingPeriod" exact component={TrackingPeriod} />
        <Route path="/Geofence" exact component={Geofence} />
        <Route path="/Device" exact component={Device} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/addNewPet" exact component={AddNewPet} />
      </Switch>
    </Grid>
  </Grid>
</Router>
</div> :
<div><h3>not authenticated</h3></div>


};

export default Navbar;

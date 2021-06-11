import React from "react";
import { Link } from "react-router-dom";
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
import Timezone from "./Timezone";
import Device from "./Device";
import EMailAlert from "./EMailAlert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Horizontalnav from "./components/Horizontalnav";

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
  }));

  const classes = useStyles();
  const navPages = [
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
      pageLink: "/Timezone",
      view: Timezone,
      name: "Set Timezone",
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
    },
    {
      pageLink: "/EMailAlert",
      view: EMailAlert,
      name: "EMailAlert",
    },
  ];
  //const leftNav = pages.slice(0, 4);
  //let rightNav = loggedIn ? pages.slice(5, 6) : pages.slice(4, 5);
  // rightNav.push(pages.slice(6, pages.length)[0]);

  return (
    <div>
      <Horizontalnav />
      <br></br>
      <br></br>
      <br></br>
      <Router>
        <Grid container>
          <Grid item xs={2} className={classes.GridContainer}>
            <center>
              <VerticalNav pages={navPages} className={classes.navpages} />
            </center>
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route path="/SoundAlarm" exact component={SoundAlarm} />
              <Route path="/TrackingPeriod" exact component={TrackingPeriod} />
              <Route path="/Geofence" exact component={Geofence} />
              <Route path="/EMailAlert" exact component={EMailAlert} />
              <Route path="/Timezone" exact component={Timezone} />
              <Route path="/Device" exact component={Device} />
              <Route path="/Profile" exact component={Profile} />
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
};

export default Navbar;

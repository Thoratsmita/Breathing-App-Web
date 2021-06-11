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

const VerticalNav = ({ pages }) => {
  const useStyles = makeStyles((theme) => ({
    navButton: {
      textTransform: "none",
    },
    navpages: {
      background: "#ffffff",
      padding: "5px",
      margin: "10px",
    },
  }));

  const classes = useStyles();

  //const leftNav = pages.slice(0, 4);
  //let rightNav = loggedIn ? pages.slice(5, 6) : pages.slice(4, 5);
  // rightNav.push(pages.slice(6, pages.length)[0]);

  return (
    <div>
      {pages.map((page, index) => (
        <Grid item className={classes.navpages}>
          <Button
            className={classes.navButton}
            key={index}
            component={Link}
            to={page.pageLink}
          >
            {page.name}
          </Button>
        </Grid>
      ))}
    </div>
  );
};

export default VerticalNav;

//<Grid item>
//{rightNav.map((page, index) => (
// <Button
// className={classes.navButton}
// key={index}
// component={Link}
// to={page.pageLink}
// >
//  {page.name}
// </Button>
//))}
//</Grid>

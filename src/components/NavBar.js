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

const useStyles = makeStyles((theme) => ({
  navButton: {
    textTransform: "none",
  },
}));

const NavBar = ({ pages, loggedIn }) => {
  const classes = useStyles();

  const leftNav = pages.slice(0, 4);
  let rightNav = loggedIn ? pages.slice(5, 6) : pages.slice(4, 5);
  rightNav.push(pages.slice(6, pages.length)[0]);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              {leftNav.map((page, index) => (
                <Button
                  className={classes.navButton}
                  key={index}
                  component={Link}
                  to={page.pageLink}
                >
                  {page.name}
                </Button>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textPrimary">
                Real Estate
              </Typography>
            </Grid>
            <Grid item>
              {rightNav.map((page, index) => (
                <Button
                  className={classes.navButton}
                  key={index}
                  component={Link}
                  to={page.pageLink}
                >
                  {page.name}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

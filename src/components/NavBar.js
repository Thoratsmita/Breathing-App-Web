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
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [open, setOpen] = useState(false);
  // const toggleDrawer = () => setOpen(!open);
  // //For mobile compatible drop-down menu
  // const drawer = (
  //   <div>
  //     <List>
  //       pages.map((page, index) =>
  //       <ListItem button component={Link} to={page.path}>
  //         <ListItemText primary={page.name} />
  //       </ListItem>
  //       );
  //     </List>
  //   </div>
  // );
  const leftNav = pages.slice(0, 4);
  // console.log(pages);

  let rightNav = loggedIn ? pages.slice(5, 6) : pages.slice(4, 5);
  // const rightNav = loggedIn ? pages.slice(4, 5) : pages.slice(5, pages.length);
  // rightNav = { ...pages.slice(6, 7) };
  rightNav.push(pages.slice(6, pages.length)[0]);
  // console.log(pages.slice(6, pages.length));
  console.log(rightNav);
  // Login, Profile, Post property

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

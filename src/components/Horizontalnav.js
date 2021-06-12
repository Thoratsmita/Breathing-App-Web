import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import logo from "../assets/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "63px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: "10px",
    marginLeft: "-20px",
  },
  title: {
    flexGrow: 1,
  },
  image: {
    backgroundColor: "white",
    padding: "0px",
    height: "60px",
    margin: "0px",
  },
}));

const Horizontalnav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="topnav">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} className={classes.image} />
          </IconButton>

          <Button color="inherit">
            <b>Welcome</b>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Horizontalnav;

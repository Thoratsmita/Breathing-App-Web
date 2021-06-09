import React from "react";
import "./login.css";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "./assets/logo.png";
import "./login.css";
import dog from "./assets/dog.png";
import { makeStyles } from "@material-ui/core/styles";

const Registerx = () => {
  const useStyles = makeStyles((theme) => ({
    signin: {
      margin: " 20px 0",
      color: "white",
      border: "2px solid #ff6864 ",
      fontSize: "20px",
      width: "288px",
      height: "69px",
      borderRadius: "34.5px",
    },
    image: {
      margin: "0px",
      width: "100%",
      height: "100vh",
      flexGrow: "1",
      display: "flex",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <center>
        <div className="flex-container">
          <div className="flex-container2">
            <img src={dog} className={classes.image} />
          </div>

          <br></br>
          <br></br>
          <div className={classes.paper}>
            <img src={logo} />

            <h1 className="Successfully-registe ">Successfully Registered</h1>
            <Button variant="outlined" className={classes.signin}>
              <Link component={LinkRouter} to="/Login">
                SignIn
              </Link>
            </Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Registerx;

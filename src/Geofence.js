import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Registermain from "./Registermain";
import logo from "./assets/logo.png";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Loginmain from "./Loginmain";
import "./login.css";

const Geofence = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        width: "25ch",
        wrap: "flex",
        overflow: "hidden",
      },
    },

    image: {
      margin: "0px",
      width: "100%",
      height: "100vh",
      flexGrow: "1",
      display: "flex",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <h1>Components yet to be added</h1>
    </div>
  );
};

export default Geofence;

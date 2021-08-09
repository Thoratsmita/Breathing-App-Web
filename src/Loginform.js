import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import dog from "./assets/dog.png";

import Typography from "@material-ui/core/Typography";
import { Link as LinkRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import "./login.css";
import { signin , isAuthenticated} from "./coreAPIcalls/userAPIcalls";
import PrivateRoute from "./PrivateRoutes";

const Loginform = ({ Login, error }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    signin(details)
    .then(res => {
      setDetails({
        email:"",
        password:""
      });
      console.log("User signed in successfully");
      console.log(res);
    })
    .catch(err => {console.log(err)});
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/Navbar" />;
    }
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(5),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    signup: {
      margin: " 20px 0",
      color: "#21dbcf",

      border: "solid 1px #21dbcf",
      width: "288px",
      height: "69px",
      borderRadius: "34.5px",
      fontSize: "20px",
    },
    signin: {
      margin: " 20px 0",
      color: "#ffffff",
      border: "2px solid #ff6864 ",
      background: "#ff6864",
      fontSize: "20px",
      width: "288px",
      height: "69px",
      borderRadius: "34.5px",
    },
  }));

  const classes = useStyles();

  return (
    <center>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={submitHandler} noValidate>
            <TextField
              required
              fullWidth
              id="standard-basic"
              label="Email"
              name="Email"
              className="Username"
              autoFocus
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              value={details.email}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextField
              required
              fullWidth
              id="standard-basic"
              name="password"
              label="Password"
              type="password"
              className="Username"
              autoComplete="current-password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <br></br>
            <br></br>
            <br></br>

            <center>
              <Button
                variant="outlined"
                className={classes.signin}
                value="Submit"
                type="submit"
                value="Submit"
                onClick={submitHandler}
              >
                <Link component={LinkRouter} to="/Navbar">
                  SignIn
                </Link>
              
              </Button>
              <Button variant="outlined" className={classes.signup}>
                <Link component={LinkRouter} to="/">
                  SignUp
                </Link>
                
              </Button>
              <br></br>

              <br></br>
            </center>
          </form>
        </div>
      </Container>
    </center>
  );
};
export default Loginform;

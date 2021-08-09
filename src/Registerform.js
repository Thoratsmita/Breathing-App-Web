import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import dog from "./assets/dog.png";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "./assets/logo.png";
import { Link as LinkRouter } from "react-router-dom";
import "./login.css";
import DataService from "./service/Data";
import { signup } from "./coreAPIcalls/userAPIcalls";

const Registerform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setUserName] = useState("");

  const ChangeName = (event) => {
    setName({ name: event.target.value });
  };
  const ChangeEmail = (event) => {
    setEmail({ email: event.target.value });
  };
  const ChangePassword = (event) => {
    setpassword({ password: event.target.value });
  };
  const ChangeUserName = (event) => {
    setUserName({ username: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
      username,
    };
    signup(data)
    .then(res => {
      setName("");
      setEmail("");
      setpassword("");
      setUserName("");
      console.log(`Data sent to server: ${JSON.stringify(res)}`);
      }
    )
    .catch(err => {console.log(err)});
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
      color: "white",
      background: "#4de3d9",
      width: "288px",
      height: "69px",
      borderRadius: "34.5px",
      fontSize: "20px",
    },
    signin: {
      margin: " 20px 0",
      color: "white",
      border: "2px solid #ff6864 ",
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
          <img src={logo} />
          <form className={classes.form} noValidate>
            <TextField
              required
              fullWidth
              id="standard-basic"
              label="Name"
              name="Name"
              className="Username"
              autoFocus
              onChange={ChangeName}
            />
            <br></br>
            <br></br>
            <br></br>
            <TextField
              required
              fullWidth
              id="standard-basic"
              label="Username"
              name="Username"
              className="Username"
              autoFocus
              onChange={ChangeUserName}
            />
            <br></br>
            <br></br>
            <br></br>

            <TextField
              required
              fullWidth
              id="standard-basic"
              label="Email"
              name="Email"
              className="Username"
              autoFocus
              onChange={ChangeEmail}
            />
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
              onChange={ChangePassword}
            />
            <br></br>
            <br></br>
            <br></br>

            <center>
              <Button
                variant="outlined"
                className={classes.signup}
                type="submit"
                value="Submit"
                onClick={onSubmit}
              >
                <Link component={LinkRouter} to="/SucessfulRegistration">
                  SignUp
                </Link>
              </Button>
         
              <Button variant="outlined" className={classes.signin}>
                <Link component={LinkRouter} to="/Login">
                  SignIn
                </Link>
              </Button>
              <br></br>
            </center>
          </form>
        </div>
      </Container>
    </center>
  );
};
export default Registerform;

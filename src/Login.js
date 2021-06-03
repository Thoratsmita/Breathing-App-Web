import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Login = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setpassword] = useState([]);
  const [confirmpassword, setconfirmpassword] = useState([]);

  const ChangeName = (event) => {
    setName({ name: event.target.value });
  };
  const ChangeEmail = (event) => {
    setEmail({ email: event.target.value });
  };
  const ChangePassword = (event) => {
    setpassword({ password: event.target.value });
  };
  const ChangeConfirmPassword = (event) => {
    setconfirmpassword({ confirmpassword: event.target.value });
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    signup: {
      margin: " 20px 0",
      color: "white",
      background: "#4de3d9",
      width: "288px",
      height: "69px",
      borderRadius: "34.5px",
    },
    signin: {
      margin: " 20px 0",
      color: "#ff6864",
      border: "2px solid #ff6864 ",

      width: "288px",
      height: "69px",
      borderRadius: "34.5px",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <br></br>
      <br></br>
      <div>
        <form noValidate autoComplete="off" className={classes.root}>
          <TextField
            required
            id="standard-basic"
            label="Name"
            defaultValue=" "
            onChange={ChangeName}
          />
          <br></br>
          <br></br>
          <TextField
            required
            id="standard-basic"
            label="Email"
            defaultValue=" "
            onChange={ChangeEmail}
          />
          <br></br>
          <br></br>
          <TextField
            required
            id="standard-basic"
            label="Password"
            defaultValue=" "
            onChange={ChangePassword}
          />
          <br></br>
          <br></br>
          <TextField
            required
            id="standard-basic"
            label="Confirm Password"
            defaultValue=" "
            onChange={ChangeConfirmPassword}
          />
        </form>
        <Button variant="outlined" className={classes.signup}>
          SignUp
        </Button>
        <br></br>
        <Button variant="outlined" className={classes.signin}>
          SignIn
        </Button>
      </div>
    </div>
  );
};

export default Login;

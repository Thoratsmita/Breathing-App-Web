import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  makeStyles,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Link,
} from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Register = ({ /* loggedIn,*/ toggleLogin }) => {
  // console.log(logIn);
  const classes = useStyles();
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobNo, setMobNo] = useState("");

  const updateUserType = (event) => setUserType(event.target.value);
  const updateName = (event) => setName(event.target.value);
  const updateEmail = (event) => setEmail(event.target.value);
  const updatePass = (event) => setPassword(event.target.value);
  const updateMobNo = (event) => setMobNo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      userType,
      name,
      email,
      password,
      mobNo,
    };
    console.log(data);
    const sendToServer = JSON.stringify(data);
    console.log(`JSON String sent to server: ${sendToServer}`);
    // toggleLogin();
    setUserType("");
    setName("");
    setEmail("");
    setPassword("");
    setMobNo("");
  };

  return (
    <Paper
      style={{
        padding: "1rem",
      }}
    >
      <Typography align="center" variant="h5">
        Sign Up
      </Typography>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={userType}
          onChange={updateUserType}
          row
        >
          <FormControlLabel
            value="Buyer/Owner"
            control={<Radio />}
            label="Buyer/Owner"
          />
          <FormControlLabel value="Agent" control={<Radio />} label="Agent" />
          <FormControlLabel
            value="Builder"
            control={<Radio />}
            label="Builder"
          />
        </RadioGroup>
        <div>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={updateName}
          />
        </div>
        <div>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={updatePass}
          />
        </div>
        <div>
          <TextField
            label="MobNo"
            type="number"
            variant="outlined"
            value={mobNo}
            onChange={updateMobNo}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          Register
        </Button>
      </form>
      <Typography>
        Already Registered?
        <Link component={LinkRouter} to="/login">
          &nbsp;Login Now
        </Link>
      </Typography>
    </Paper>
  );
};

export default Register;

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
import DataService from "../services/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const SignUp = ({ toggleLogin }) => {
  const classes = useStyles();
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const updateUserType = (event) => setUserType(event.target.value);
  const updateName = (event) => setName(event.target.value);
  const updateEmail = (event) => setEmail(event.target.value);
  const updatePass = (event) => setPassword(event.target.value);
  const updatePhoneNo = (event) => setPhoneNo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      userType,
      name,
      email,
      password,
      phoneNo,
    };
    console.log(data);
    DataService.create("usersData", data);
    console.log(`Data sent to server: ${JSON.stringify(data)}`);
    toggleLogin();
    setUserType("");
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNo("");
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
            label="Phone Number"
            variant="outlined"
            value={phoneNo}
            onChange={updatePhoneNo}
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

export default SignUp;

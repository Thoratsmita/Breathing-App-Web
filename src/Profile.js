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
import Horizontalnav from "./components/Horizontalnav";

const Profile = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [doorno, setdoorno] = useState([]);
  const [streetname, setstreetname] = useState([]);
  const [city, setcity] = useState([]);
  const [states, setstates] = useState([]);
  const [phone, setphone] = useState([]);
  const ChangeName = (event) => {
    setName({ name: event.target.value });
  };
  const ChangeEmail = (event) => {
    setEmail({ email: event.target.value });
  };
  const ChangeDoor = (event) => {
    setdoorno({ doorno: event.target.value });
  };
  const ChangeStreetname = (event) => {
    setstreetname({ streetname: event.target.value });
  };
  const ChangeCity = (event) => {
    setcity({ city: event.target.value });
  };
  const ChangeStates = (event) => {
    setstates({ states: event.target.value });
  };
  const ChangePhone = (event) => {
    setphone({ phone: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      doorno,
      streetname,
      city,
      states,
      phone,
    };
    console.log(data);
    DataService.create("ProfileData", data);
    console.log(`Data sent to server: ${JSON.stringify(data)}`);
    setName("");
    setEmail("");
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
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
    save: {
      width: "179px",
      height: "49px",
      margin: "3px 15px 11px 118px",
      padding: "14px 65px 13px 66px",
      borderRadius: "34.5px",
      backgroundColor: "#4de382",
      justifyContent: "right",
      color: "#ffffff",
      float: "right",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <center>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
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
                value={name}
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
                value={email}
              />
              <br></br>
              <br></br>
              <br></br>
              <TextField
                required
                fullWidth
                id="standard-basic"
                name="Doorno"
                label="Doorno"
                className="Username"
                autoComplete="current-password"
                onChange={ChangeDoor}
                value={doorno}
              />
              <br></br>
              <br></br>
              <br></br>
              <TextField
                required
                fullWidth
                id="standard-basic"
                name="StreetName"
                label="StrretName"
                className="Username"
                onChange={ChangeStreetname}
                value={streetname}
              />

              <br></br>
              <br></br>
              <br></br>
              <TextField
                required
                fullWidth
                id="standard-basic"
                name="City"
                label="City"
                className="Username"
                autoComplete="current-password"
                onChange={ChangeCity}
                value={city}
              />

              <br></br>
              <br></br>
              <br></br>
              <TextField
                required
                fullWidth
                id="standard-basic"
                name="State"
                label="State"
                className="Username"
                onChange={ChangeStates}
                value={states}
              />

              <br></br>
              <br></br>
              <br></br>
              <TextField
                required
                fullWidth
                id="standard-basic"
                name="Phone"
                label="Phone"
                className="Username"
                onChange={ChangePhone}
                value={phone}
              />

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <center>
                <Button
                  variant="outlined"
                  className="save"
                  type="submit"
                  className={classes.save}
                  onClick = {onSubmit}
                >
                  <b>Save</b>
                </Button>
                <br></br>

                <br></br>
              </center>
            </form>
          </div>
        </Container>
      </center>
    </div>
  );
};
export default Profile;

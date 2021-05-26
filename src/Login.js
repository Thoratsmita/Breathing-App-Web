import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Login = ({ /* loggedIn,*/ toggleLogin }) => {
  // console.log(logIn);
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUser = (event) => setUsername(event.target.value);
  const updatePass = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    console.log(data);
    const sendToServer = JSON.stringify(data);
    console.log(`JSON String sent to server: ${sendToServer}`);
    toggleLogin();
    setUsername("");
    setPassword("");
  };

  return (
    <Paper
      style={{
        padding: "1rem",
      }}
    >
      <Typography align="center" variant="h5">
        Login
      </Typography>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div>
          <TextField
            label="Email or Username"
            variant="outlined"
            value={username}
            onChange={updateUser}
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;

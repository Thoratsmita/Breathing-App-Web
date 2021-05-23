import {
  TextField,
  Button,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form = ({ username, password, handleUser, handlePass, handleSubmit }) => {
  const classes = useStyles();

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
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            label="Email or Username"
            variant="outlined"
            value={username}
            onChange={handleUser}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={handlePass}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth="true"
          style={{ marginTop: "1rem" }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DataService from "./service/Data";
import Mapx from "./Mapx";

import { makeStyles } from "@material-ui/core/styles";
const Geofence = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function input(event) {
    setCount({ count: event.target.value });
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      count,
    };
    console.log(data);
    DataService.create("geofencdata", data);
    console.log(`Data sent to server: ${JSON.stringify(data)}`);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    counter: {
      background: " #eec311",
      padding: "10px",
      width: "64px",
      height: "54px",
      fontSize: "20px",
      color: "#fffff",
    },
    save: {
      width: "179px",
      height: "49px",
      margin: "3px 15px 11px 334px",
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
    <Mapx/>
    <div>
      <h1>Set Geofence</h1>
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
      />
      <Button
        variant="contained"
        className={classes.counter}
        onClick={decrease}
      >
        -
      </Button>
      <TextField id="outlined-basic" variant="outlined" value={count} />

      <Button
        onClick={increase}
        variant="contained"
        className={classes.counter}
      >
        +
      </Button>

      <Button onClick={onSubmit} variant="contained" className={classes.save}>
        Save
      </Button>
    </FormGroup></div>
 </div>
  );
};
export default Geofence;

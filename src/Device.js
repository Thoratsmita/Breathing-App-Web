import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Device = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    restart: {
      width: "282px",
      height: "49px",
      color: "#ffffff",

      borderRadius: "34.5px",
      background: "#4de382",
      fontSize: "20px",
    },
    turnoff: {
      width: "282px",
      height: "49px",
      color: "#ffffff",

      borderRadius: "34.5px",
      background: "#ff004a",
      fontSize: "20px",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <center>
        <Button className={classes.restart}>
          <b>Restart</b>
        </Button>
        <br></br>
        <br></br>
        <Button className={classes.turnoff}>Turn off</Button>
      </center>
    </div>
  );
};
export default Device;

import React from "react";
import Soundalarm from "./assets/Soundalarm.png";
import SoundAlarmbg from "./assets/SoundAlarmbg.png";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./login.css";

const SoundAlarm = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        width: "25ch",
        wrap: "flex",
        overflow: "hidden",
      },
    },

    image: {
      position: "absolutrelaticve",

      zIndex: "1",
    },
    image2: {
      marginTop: "70%",
      position: "relative",
      zIndex: "1",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div>
        <center>
          <Button>
            <img src={Soundalarm} className={classes.image2} />
          </Button>
          <br></br>
          <Typography variant="h5" gutterBottom>
            This option will activate the device light and play a musical tone
            so you can find your pet
          </Typography>
        </center>
      </div>
    </div>
  );
};
export default SoundAlarm;

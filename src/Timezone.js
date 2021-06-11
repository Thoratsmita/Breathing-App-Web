import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  save: {
    width: "179px",
    height: "49px",
    margin: "3px 15px 11px 118px",
    padding: "14px 65px 13px 66px",
    borderRadius: "34.5px",
    backgroundColor: "#4de382",
    justifyContent: "right",
  },
}));

const Timezone = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +12:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +11:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +11:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +10:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +10:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +09:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +09:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +08:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +08:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +07:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +07:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +06:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +06:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +05:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +05:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +05:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +05:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +04:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +04:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +03:30"
            labelPlacement="start"
            className="time"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="East GMT +03:00"
            labelPlacement="start"
            className="time"
          />
        </Grid>
      </Grid>
      <Button type="submit " value="Submit" className={classes.save}>
        Save
      </Button>
    </div>
  );
};
export default Timezone;

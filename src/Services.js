import React, { useEffect, useState } from "react";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import DataService from "./services/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Services = () => {
  const classes = useStyles();

  const [services, setServices] = useState("");
  useEffect(() => {
    DataService.getAll("servicesData").then((response) =>
      setServices(response)
    );
  }, []);

  console.log(services);
  return (
    <>
      <div>Services</div>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Paper>brr</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;

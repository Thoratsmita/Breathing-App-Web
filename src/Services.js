import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DataService from "./services/Data";
import realEstate from "./assets/real-estate.jpg";

const useStyles = makeStyles((theme) => ({
  centerText: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  gridContainer: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(28),
    paddingRight: theme.spacing(28),
  },
}));

const Services = () => {
  const classes = useStyles();
  const [services, setServices] = useState([]);

  useEffect(() => {
    DataService.getAll("servicesData").then((response) =>
      setServices(response)
    );
  }, []);

  console.log(services);
  return (
    <>
      <Typography color="primary" variant="h6" className={classes.centerText}>
        SERVICES
      </Typography>
      <Grid container spacing={4} className={classes.gridContainer}>
        {services.map((service, index) => (
          <Grid key={index} item xs={12} sm={6} className={classes.card}>
            <Card className={classes.card}>
              <CardMedia image={realEstate} />
              <CardContent>
                <Typography gutterBottom>{service.title}</Typography>
                <Typography color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary" variant="contained">
                  More Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Services;

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
  root: {
    flexGrow: 1,
  },
  card: { maxWidth: 350, padding: theme.spacing(2) },
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
    <div style={{ paddingLeft: 200, paddingRight: 200 }}>
      <div>Services</div>
      <Grid container className={classes.root} spacing={4}>
        {services.map((service, index) => (
          <Grid key={index} item xs={6}>
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
    </div>
  );
};

export default Services;

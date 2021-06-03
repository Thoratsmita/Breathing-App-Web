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
    paddingLeft: theme.spacing(30),
    paddingRight: theme.spacing(30),
  },
}));

const Blog = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    DataService.getAll("blogData").then((response) => setBlogs(response));
  }, []);

  console.log(blogs);
  return (
    <>
      <Typography color="primary" variant="h6" className={classes.centerText}>
        BLOG
      </Typography>
      <Grid container spacing={4} className={classes.gridContainer}>
        {blogs.map((blog, index) => (
          <Grid key={index} item xs={12} sm={6} className={classes.card}>
            <Card className={classes.card}>
              <CardMedia image={realEstate} />
              <CardContent className={classes.card}>
                <Typography gutterBottom>{blog.title}</Typography>
                <Typography color="textSecondary">
                  {blog.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="primary" variant="contained">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Blog;

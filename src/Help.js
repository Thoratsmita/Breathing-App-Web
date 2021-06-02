import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  CardMedia,
  Link,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
import DataService from "./services/Data";
import realEstate from "./assets/real-estate.jpg";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  flexWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  gridWrapper: {
    margin: theme.spacing(1),
  },
  root: {
    // paddingLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Help = () => {
  const classes = useStyles();
  const [helpTopic, setHelpTopic] = useState([]);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    DataService.getAll("helpData").then((response) => {
      console.log(response);
      setHelpTopic(response.topics);
      setFaqData(response.faqData);
      console.log(helpTopic, faqData);
      // fff
    });
  }, []);

  return (
    <>
      <Typography color="primary" variant="h6" className={classes.root}>
        HELP
      </Typography>
      <div className={classes.flexWrapper}>
        <Grid
          className={classes.gridWrapper}
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Typography className={classes.root}>Help Topics</Typography>
          </Grid>
          {helpTopic.map((topic, index) => (
            <Grid item key={index}>
              <Card className={classes.card}>
                <CardMedia image={realEstate} />
                <CardContent>
                  <Typography gutterBottom>{topic.title}</Typography>
                </CardContent>
                <CardActions className={classes.flexCol}>
                  {topic.contents.map((content, index) => (
                    <Typography
                      key={index}
                      component={Link}
                      color="textSecondary"
                    >
                      {content}
                    </Typography>
                  ))}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={2}
          direction="column"
          className={classes.gridWrapper}
        >
          <Grid item>
            <Typography className={classes.root}>FAQs</Typography>
          </Grid>
          <Grid item>
            {faqData.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{faq.que}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary">{faq.ans}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Help;

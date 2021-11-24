import { Grid, IconButton, useMediaQuery, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import BackArrow from "../assets/backArrow.svg";
import ForwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40rem",
  },
  arrowContainer: {
    marginTop: "0.5rem",
  },
  rowContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
  paragraphContainer:{
      maxWidth:'30rem'
  }
}));

const Websites = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: matchesXs ? "1rem" : "2rem" }}
        justifyContent={matchesMd ? "center" : "flex-start"}
      >
        {/*--------Website Dev Block(first)--------*/}
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1rem", marginLeft: "-3.5rem" }}
          >
            <IconButton
              style={{ background: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <img src={BackArrow} alt="back to ios/android page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMd ? "center" : "inherit"} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              align={matchesMd ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ background: "transparent" }}
              to="/services"
              component={Link}
              onClick={() => {
                setSelectedIndex(0);
                setValue(1);
              }}
            >
              <img src={ForwardArrow} alt="Forward to Services" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container className={classes.rowContainer} alignItems='center'>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{marginLeft:'-2.75rem'}}
                alt="graph with magnifying glass revealing 1's and 0 's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
            <Typography variant='body1' className={classes.paragraphContainer}>
            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Websites;

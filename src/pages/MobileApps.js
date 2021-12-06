import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import Lottie from "react-lottie";
import React from "react";

import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ForwardArrow from "../assets/forwardArrow.svg";
import BackArrow from "../assets/backArrow.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagment from "../assets/increaseEngagement.svg";
import CallToAction from "../components/CallToAction.js";
import { useContext } from "react";
import { NavContext } from '../context/nav-context';

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
}));

const MobileApps = ( ) => {
  const navCtx = useContext(NavContext)
  const {setSelectedIndex, setValue}=navCtx
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      {/*--------iOS/Android App Block (first)--------*/}
      <Grid
        item
        container
        justifyContent={matchesMd ? "center" : "flex-start"}
        className={classes.rowContainer}
        style={{ marginTop: matchesXs ? "1rem" : "2rem" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1rem", marginLeft: "-3.5rem" }}
          >
            <IconButton
              style={{ background: "transparent" }}
              component={Link}
              to="/customSoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <img src={BackArrow} alt="back to custom software page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMd ? "center" : "inherit"} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMd ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMd ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMd ? "center" : "inherit"}
              variant="body1"
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ background: "transparent" }}
              to="/websites"
              component={Link}
              onClick={() => {
                setSelectedIndex(3);
                setValue(1);
              }}
            >
              <img src={ForwardArrow} alt="Forward to Website Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*--------Integration and Simultaneous Platform Block(second)--------*/}
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15rem", marginBottom: "15rem" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSm ? "center" : "left"}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSm ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesSm ? "center" : "left"}
              variant="body1"
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20rem" }} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ marginTop: matchesXs ? "2rem" : 0 }}
          md
        >
          <Grid item>
            <Typography
              align={matchesSm ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSm ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              align={matchesSm ? "center" : "right"}
              variant="body1"
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*--------Icons Block(third)--------*/}
      <Grid
        item
        container
        direction={matchesMd ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: "15rem" }}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{
            marginTop: matchesMd ? "10rem" : 0,
            marginBottom: matchesMd ? "10rem" : 0,
          }}
          md
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXs ? "20rem" : "28rem" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagment} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction  />
      </Grid>
    </Grid>
  );
};

export default MobileApps;

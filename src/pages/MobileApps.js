import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ForwardArrow from "../assets/forwardArrow.svg";
import BackArrow from "../assets/backArrow.svg";
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

const MobileApps = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent={matchesMd ? "center" : "flex-start"}
        className={classes.rowContainer}
        style={{ marginTop: matchesXs ? "1rem" : "2rem" }}
      >
        {/*--------First Block--------*/}
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
    </Grid>
  );
};

export default MobileApps;

import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import Lottie from "react-lottie";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    background: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="row">
      {/*--------First Block (Left Side)--------*/}
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Lottie
            options={defaultOptions}
            isStopped
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
      {/*--------Second  Block (Right side)--------*/}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{
              fontWeight: 500,
              marginBottom: "2.5em",
              marginTop: "5em",
              fontSize: "2.25em",
            }}
            gutterBottom
          >
            Which service are you interested in?
          </Typography>
        </Grid>
        {/*--------Second Block (The Icons Block)--------*/}
        <Grid item container>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={software}
                alt="three floating strings"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={mobile} alt="mobile icon" className={classes.icon} />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1em" }}
              >
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={website} alt="computer" className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        {/*--------Second Block (The Arrows Block)--------*/}
        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: "15em", marginTop: "3em" }}
        >
          <Grid item>
            <img src={backArrow} alt="previous question" />
          </Grid>
          <Grid item>
            <img src={forwardArrow} alt="next question" />
          </Grid>
        </Grid>
        {/*--------Second Block (The Button)--------*/}
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;

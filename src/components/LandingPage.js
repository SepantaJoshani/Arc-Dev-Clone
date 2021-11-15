import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React, { Fragment } from "react";
import Lottie from "react-lottie";
import ButtonArrow from "./ui/ButtonArrow";

import animationData from "../animations/landinganimation/data";
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg'

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50rem",
    minWidth: "21rem",
    marginTop: "2rem",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  btnContainer: {
    marginTop: "2rem",
  },
  learnBtnHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  heroTextContainer: {
    minWidth: "21.5rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {" "}
          {/*-----Hero Block-----*/}
          <Grid container justifyContent="flex-end" alignItems="center">
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology <br /> to the Midewest{" "}
              </Typography>
              <Grid
                container
                justifyContent="center"
                className={classes.btnContainer}
              >
                <Grid item>
                  <Button className={classes.estimateBtn} variant="contained">
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.learnBtnHero}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Services Block-----*/}
          <Grid container>
            <Grid item>
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1">
                Save Energy. Save Time. Save Money
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span>celebration</span>
              </Typography>
              <Button variant="outlined">
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img src={CustomSoftwareIcon} alt="custom software icon" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LandingPage;

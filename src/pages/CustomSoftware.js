import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Grid, IconButton, Typography, useMediaQuery } from "@material-ui/core";
import BackArrow from "../assets/backArrow.svg";
import ForwardArrow from "../assets/forwardArrow.svg";
import lightBulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40rem",
  },
  arrowContainer: {
    marginTop: "0.5rem",
  },
  mainContainer: {
    padding: "2rem 5rem 10rem",
  },
}));

const CustomSoftware = ({ setSelectedIndex, setValue }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container>
        {/*--------First Block--------*/}
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1rem", marginLeft: "-3.5rem" }}
        >
          <IconButton
            style={{ background: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => {
              setValue(1);
              setSelectedIndex(0);
            }}
          >
            <img src={BackArrow} alt="back to services page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton
            style={{ background: "transparent" }}
            to="/mobileapps"
            component={Link}
            onClick={() => {
              setSelectedIndex(2);
              setValue(1);
            }}
          >
            <img
              src={ForwardArrow}
              alt="Forward to iOS/Android Page"
              className={classes.arrowContainer}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginTop: "15rem", marginBottom: "20rem" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40rem" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Enregy</Typography>
          </Grid>
          <Grid item>
            <img src={lightBulb} alt="light bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40rem" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40rem" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;

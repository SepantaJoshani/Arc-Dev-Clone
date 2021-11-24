import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import BackArrow from "../assets/backArrow.svg";
import ForwardArrow from "../assets/forwardArrow.svg";
import lightBulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import {documentsAnimation} from "../animations/documentsAnimation/data";
import Lottie from "react-lottie";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import roots from "../assets/root.svg";
import automationAnimation from "../animations/automationAnimation/data.json";
import {uxAnimation} from "../animations/uxAnimation/data";
import CallToAction from "../components/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40rem",
  },
  arrowContainer: {
    marginTop: "0.5rem",
  },
  mainContainer: {
    padding: "2rem 5rem 10rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      paddingTop: "1rem",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

const CustomSoftware = ({ setSelectedIndex, setValue }) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid
          item
          container
          justifyContent={matchesMd ? "center" : "flex-start"}
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
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                <img src={BackArrow} alt="back to services page" />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography align={matchesMd ? "center" : "inherit"} variant="h2">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMd ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography
                align={matchesMd ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                align={matchesMd ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography
                align={matchesMd ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                style={{ background: "transparent" }}
                to="/mobileapps"
                component={Link}
                onClick={() => {
                  setSelectedIndex(2);
                  setValue(1);
                }}
              >
                <img src={ForwardArrow} alt="Forward to iOS/Android Page" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginTop: "15rem", marginBottom: "20rem" }}
        >
          {/*--------Second Block--------*/}
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
            style={{
              maxWidth: "40rem",
              marginTop: matchesSm ? "10rem" : 0,
              marginBottom: matchesSm ? "10rem" : 0,
            }}
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
        <Grid
          item
          container
          justifyContent="space-around"
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : "flex-start"}
        >
          {/*--------Third Block--------*/}
          <Grid
            item
            container
            className={classes.itemContainer}
            direction={matchesSm ? "column" : "row"}
            style={{ marginBottom: matchesMd ? "15rem" : 0 }}
            md
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="h4"
                >
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="body1"
                  paragraph
                >
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="body1"
                  paragraph
                >
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="body1"
                  paragraph
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={documentsOptions}
                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            direction={matchesSm ? "column" : "row"}
            md
          >
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{ maxHeight: 260, maxWidth: 280 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesSm ? "center" : "right"}>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSm ? "center" : "right"}
                  paragraph
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{ marginTop: "20rem", marginBottom: "20rem" }}
        >
          {/*--------4th Block--------*/}
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <img
                src={roots}
                alt="tree"
                height={matchesSm ? "300rem" : "450rem"}
                width={matchesSm ? "300rem" : "450rem"}
              />
            </Grid>
            <Grid item className={classes.itemContainer}>
              <Typography align="center" variant="h4" gutterBottom>
                Root-Cause Analysis
              </Typography>
              <Typography align="center" variant="body1" paragraph>
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography align="center" variant="body1" paragraph>
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-around"
          style={{ marginBottom: "20rem" }}
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : "flex-start"}
        >
          {/*--------5th Block--------*/}
          <Grid
            item
            container
            className={classes.itemContainer}
            direction={matchesSm ? "column" : "row"}
            style={{ marginBottom: matchesMd ? "15rem" : 0 }}
            md
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="h4"
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="body1"
                  paragraph
                >
                  Why waste time when you don’t have to?
                </Typography>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="body1"
                  paragraph
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography
                  align={matchesSm ? "center" : "inherit"}
                  variant="body1"
                  paragraph
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={automationOptions}
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            direction={matchesSm ? "column" : "row"}
            md
          >
            <Grid item md>
              <Lottie
                options={uxOptions}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesSm ? "center" : "right"}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSm ? "center" : "right"}
                  paragraph
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography
                  variant="body1"
                  align={matchesSm ? "center" : "right"}
                  paragraph
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body1"
                  align={matchesSm ? "center" : "right"}
                  paragraph
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CallToAction setValue={setValue} />
    </Fragment>
  );
};

export default CustomSoftware;

import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React, { Fragment } from "react";
import Lottie from "react-lottie";
import ButtonArrow from "../components/ui/ButtonArrow";

import { animationData } from "../animations/landinganimation/data";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";
import MobileIcon from "../assets/mobileIcon.svg";
import WebsiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";

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
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
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
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1rem",
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12rem",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10rem",
    [theme.breakpoints.down("sm")]: {
      padding: "8rem 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
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
                  <Button
                    component={Link}
                    to="/estimate"
                    className={classes.estimateBtn}
                    variant="contained"
                    onClick={() => setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnBtnHero}
                    onClick={() => setValue(2)}
                  >
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
          {/*--------Custom Software Block--------*/}
          <Grid
            container
            className={classes.serviceContainer}
            justifyContent={matchesSM ? "center" : "flex-start"}
          >
            <Grid
              item
              style={{
                marginLeft: !matchesSM && "5rem",
                textAlign: matchesSM && "center",
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button
                component={Link}
                to="/customsoftware"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                src={CustomSoftwareIcon}
                alt="custom software icon"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*--------iOS/Android Block--------*/}
          <Grid
            container
            className={classes.serviceContainer}
            justifyContent={matchesSM ? "center" : "flex-end"}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM && "center",
              }}
            >
              <Typography variant="h4">iOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app{" "}
                {!matchesSM && <br />} with either mobile platform
              </Typography>
              <Button
                component={Link}
                to="/mobileapps"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                style={{ marginRight: !matchesSM && "5rem" }}
                src={MobileIcon}
                alt="Mobile phone icon"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/*--------Custom Website Block--------*/}
          <Grid
            container
            className={classes.serviceContainer}
            justifyContent={matchesSM ? "center" : "flex-start"}
          >
            <Grid
              item
              style={{
                marginLeft: !matchesSM && "5rem",
                textAlign: matchesSM && "center",
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built fore speed.
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button
                component={Link}
                to="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                src={WebsiteIcon}
                alt="website icon"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*--------Revolution Part--------*/}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100rem", marginTop: "12rem" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography gutterBottom variant="h3">
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnBtnHero}
                    onClick={() => {
                      setValue(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
        <Grid item>
          {/*--------Information Part--------*/}
          <Grid
            container
            style={{ height: "80rem" }}
            alignItems="center"
            className={classes.infoBackground}
          >
            <Grid
              item
              container
              direction={matchesXS ? "column" : "row"}
              style={{
                textAlign: matchesXS ? "center" : "inherit",
              }}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : !matchesSM ? "5rem" : "2rem",
                  
                }}
              >
                <Grid container style={{marginBottom: matchesXS ? "10rem" : 0,}} direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: "white", borderColor: "white" }}
                      onClick={() => {
                        setValue(3);
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : !matchesSM ? "5rem" : "2rem",
                  textAlign: matchesXS ? "center" : "right",
                  
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Say Hello!{" "}
                    <span role="img" aria-label="waving hand">
                      👋🏻{" "}
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: "white", borderColor: "white" }}
                      onClick={() => {
                        setValue(4);
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*--------Call To Action Part--------*/}
        <CallToAction setValue={setValue} />
      </Grid>
    </Fragment>
  );
};

export default LandingPage;

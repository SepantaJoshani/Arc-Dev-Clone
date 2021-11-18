import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "../components/ui/ButtonArrow";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";
import MobileIcon from "../assets/mobileIcon.svg";
import WebsiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
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
    marginTop: "10rem",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
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
}));

const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item style={{ marginLeft: !matchesSM && "5rem",marginTop:matchesSM?'1rem':'2rem' }}>
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : "inherit"}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/*--------iOS/Android Block--------*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{ marginTop: matchesSM ? "1rem" : "5rem" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
              width: !matchesSM && "35rem",
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
              width="250rem"
            />
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
        {/*--------Custom Website Block--------*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{ marginBottom: "10rem" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
              width: !matchesSM && "35rem",
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
          <Grid item style={{ marginRight: !matchesSM && "5rem" }}>
            <img
              src={WebsiteIcon}
              alt="website icon"
              className={classes.icon}
              width="250rem"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;

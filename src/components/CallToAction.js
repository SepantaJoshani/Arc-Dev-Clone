import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import ButtonArrow from "./ui/ButtonArrow";
import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  },
  backGround: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60rem",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    width: 205,
    background: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5rem",
    marginLeft: "2rem",
    "&:hover":{
        background: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
    
  },
}));

const CallToAction = ({ setValue}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      justifyContent={matchesSM ? "center" : "space-between"}
      className={classes.backGround}
      alignItems="center"
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5rem",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century
            </Typography>
            <Grid
              container
              justifyContent={matchesSM ? "center" : "flex-start"}
              item
            >
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
                onClick={()=>{setValue(2)}}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          className={classes.estimateBtn}
          onClick={()=>{setValue(5)}}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;

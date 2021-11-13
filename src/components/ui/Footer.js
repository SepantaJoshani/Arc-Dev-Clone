import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  gridItem: {
    margin: "3rem",
  },
}));

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
   <Hidden mdDown>
   <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              className={classes.link}
            >
              Services
            </Grid>
            <Grid
              item
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              className={classes.link}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              className={classes.link}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              className={classes.link}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
              className={classes.link}
            >
              The Revolution
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
              className={classes.link}
            >
              Vision
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
              className={classes.link}
            >
              Technology
            </Grid>
            <Grid
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
              className={classes.link}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
              className={classes.link}
            >
              About Us
            </Grid>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
              className={classes.link}
            >
              History
            </Grid>
            <Grid
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
              className={classes.link}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/contact"
              onClick={() => setValue(4)}
              className={classes.link}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
      <img
        src={footerAdornment}
        alt="black decorative"
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;

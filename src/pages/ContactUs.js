import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direciton="row">
      <Grid item container direction="column" justifyContent="center" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            style={{ color: theme.palette.common.blue }}
            variant="body1"
          >
            We're waiting.
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={phoneIcon}
              alt="phone"
              style={{ marginRight: "0.5rem" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              (98) 935-590-8760
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt="envelop"
              style={{ marginRight: "0.5rem",verticalAlign:'bottom' }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
            >
              Sepanta_97@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
};

export default ContactUs;

import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import background from '../assets/background.jpg'

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
      <Grid item container direction="column" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{lineHeight:1}}>Contact Us</Typography>
          <Typography style={{color:theme.palette.common.blue}} variant="body1">We're waiting.</Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}>

      </Grid>
    </Grid>
  );
};

export default ContactUs;

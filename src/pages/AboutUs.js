import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
         {/*--------About Us Block (first)--------*/}
      <Grid item className={classes.rowContainer} style={{ marginTop: "2rem" }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Typography variant="h4" center className={classes.missionStatement}>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
       {/*--------History Block (second)--------*/}
       <Grid item container className={classes.rowContainer}>
           <Grid item container direction='column'>
               <Grid item>
                   <Typography variant='h2' gutterBottom>
                       History
                   </Typography>
               </Grid>
               <Grid item>
                   <Typography variant='body1' style={{fontWeight:'700',fontStyle:'italic'}}>
                   We're the new kid on the block
                   </Typography>
               </Grid>
           </Grid>
       </Grid>
    </Grid>
  );
};

export default AboutUs;

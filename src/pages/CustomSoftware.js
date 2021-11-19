import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { Grid, IconButton, useMediaQuery } from "@material-ui/core";
import BackArrow from "../assets/backArrow.svg";
import ForwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles((theme) => ({}));

const CustomSoftware = () => {
  const theme = useTheme();
  const classses = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container direction="row">
        {/*--------First Block--------*/}
        <Grid item>
          <IconButton>
            <img src={BackArrow} alt="back to services page" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;

import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "../components/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    width: 205,
    background: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5rem",
    marginLeft: "2rem",
    "&:hover": {
      background: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
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

const ContactUs = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Grid container direciton="row">
      {/*--------Form Block (Left)--------*/}
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
              style={{ marginRight: "0.5rem", verticalAlign: "bottom" }}
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
        <Grid item container>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            value={message}
            id="message"
            onChange={(event) => setMessage(event.target.value)}
            multiline
            minRows={10}
          />
        </Grid>
        <Grid item>
          <Button variant="contained">
            Send Message <img src={airplane} alt="airplane" />
          </Button>
        </Grid>
      </Grid>
      {/*--------Call 2 Action Block (Right)--------*/}
      <Grid item container alignItems='center' className={classes.background} lg={9}>
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
                  onClick={() => {
                    setValue(2);
                  }}
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
            onClick={() => {
              setValue(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;

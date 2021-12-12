import React, { Fragment, useCallback, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@material-ui/core";
import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "../components/ui/ButtonArrow";
import { useContext } from "react";
import { NavContext } from "../context/nav-context";
import { AlertContext } from "../context/alert-context";
import { useHttp } from "../hooks/use-http";
import AlertSnack from "../components/Snackbar/AlertSnack";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    width: 205,
    background: theme.palette.common.orange,
    fontSize: "1.5em",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      background: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7em",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1em",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
}));

const ContactUs = () => {
  const navCtx = useContext(NavContext);
  const { setValue } = navCtx;
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { loading, sendHttp } = useHttp();
  const alertCtx = useContext(AlertContext);
  const {
    open: isAlertOpen,
    closeHandler,
    message: alertMessage,
    backgroundColor,
    severity,
  } = alertCtx;

  const onChange = (event) => {
    let isValid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!isValid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }

        break;
      case "phone":
        setPhone(event.target.value);
        isValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!isValid) {
          setPhoneHelper("Invalid number");
        } else {
          setPhoneHelper("");
        }

        break;

      default:
        break;
    }
  };

  const onConfirm = useCallback(() => {
    sendHttp(
      "https://jsonplaceholder.typicode.com/posts",
      {
        name,
        email,
        phone,
        message,
      },
      () => {
        setOpen(false);
        setEmail("");
        setMessage("");
        setPhone("");
        setName("");
      }
    );
  }, [sendHttp, name, email, phone, message]);

  const buttonContent = (
    <Fragment>
      Send Message
      <img style={{ marginLeft: "1em" }} src={airplane} alt="airplane" />
    </Fragment>
  );

  return (
    <Grid container direciton="row">
      {/*--------Form Block (Left)--------*/}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                style={{ color: theme.palette.common.blue }}
                align={matchesMD ? "center" : "left"}
                variant="body1"
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1em" }}
                >
                  <a
                    href="tel:+989355908760"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    (98) 935-590-8760
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelop"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1em" }}
                >
                  <a
                    href="mailto:sepanta_97@Yahoo.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Sepanta_97@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                id="message"
                onChange={(event) => setMessage(event.target.value)}
                multiline
                minRows={10}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContent}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*--------Dialog (optional place) --------*/}
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="xl"
      >
        <DialogContent>
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            alignContent="center"
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography align="center" variant="h4" gutterBottom>
                    Confirm Message
                  </Typography>
                </Grid>

                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    fullWidth
                    label="Name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    fullWidth
                    label="Email"
                    id="email"
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    fullWidth
                    label="Phone"
                    id="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>

                <Grid item style={{ minWidth: matchesXS ? "20em" : "30em" }}>
                  <TextField
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    value={message}
                    className={classes.message}
                    id="message"
                    onChange={(event) => setMessage(event.target.value)}
                    multiline
                    minRows={10}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                item
                container
                alignItems="center"
                direction={matchesSM ? "column" : "row"}
                style={{ marginTop: "2em" }}
                justifyContent="center"
              >
                <Grid item>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      email.length === 0 ||
                      phone.length === 0 ||
                      phoneHelper.length !== 0 ||
                      emailHelper.length !== 0
                    }
                    variant="contained"
                    className={classes.sendButton}
                    onClick={onConfirm}
                  >
                    {loading ? <CircularProgress size={30} /> : buttonContent}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/*--------Snackbar part (optional place)--------*/}
      <AlertSnack
        open={isAlertOpen}
        backgroundColor={backgroundColor}
        onClose={closeHandler}
        severity={severity}
        alertMessage={alertMessage}
      />

      {/*--------Call 2 Action Block (Right)--------*/}
      <Grid
        item
        container
        alignItems="center"
        className={classes.background}
        direction={matchesMD ? "column" : "row"}
        lg={8}
        xl={9}
        justifyContent={matchesMD ? "center" : "flex-start"}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : "left"} variant="h2">
                Simple Software.
                <br /> Revolutionary Results
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : "left"}
                style={{ fontSize: "1.5em" }}
              >
                Take advantage of the 21st Century
              </Typography>
              <Grid
                container
                justifyContent={matchesMD ? "center" : "flex-start"}
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

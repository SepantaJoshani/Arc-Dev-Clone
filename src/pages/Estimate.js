import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  TextField,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Lottie from "react-lottie";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import { defaultQuestions } from "../data/data";
import { websiteQuestions } from "../data/data";
import { softwareQuestions } from "../data/data";
import estimateAnimation from "../animations/estimateAnimation/data.json";
import cloneDeep from "lodash.clonedeep";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    background: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
}));



const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const prevQuestion = () => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const backButtonDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === 1) {
      return true;
    } else {
      return false;
    }
  };

  const forwardButtonDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);

        break;

      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        break;

      case "Website Development":
        setQuestions(websiteQuestions);
        break;

      default:
        setQuestions(newQuestions);
    }
  };

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

  return (
    <Grid container direction="row">
      {/*--------First Block (Left Side)--------*/}
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Lottie
            options={defaultOptions}
            isStopped
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
      {/*--------Second  Block (Right side)--------*/}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <Fragment key={index}>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    marginTop: "5em",
                    fontSize: "2.25em",
                    lineHeight: 1.25,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>

              {/*--------Second Block (The Icons Block)--------*/}

              <Grid item container>
                {question.options.map((option) => (
                  <Grid
                    item
                    container
                    direction="column"
                    md
                    onClick={() => handleSelect(option.id)}
                    component={Button}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      background: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                    key={option.id}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Fragment>
          ))}

        {/*--------Second Block (The Arrows Block)--------*/}
        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton disabled={backButtonDisabled()} onClick={prevQuestion}>
              <img
                src={backButtonDisabled() ? backArrowDisabled : backArrow}
                alt="previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={forwardButtonDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={
                  forwardButtonDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        {/*--------Second Block (The Button)--------*/}
        <Grid item>
          <Button
            onClick={() => setIsDialogOpen(true)}
            variant="contained"
            className={classes.estimateButton}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      {/*--------Dialog(Optional Area)--------*/}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Grid container justifyContent="center">
          <Typography variant="h2" align="center">
            Estimate
          </Typography>
        </Grid>
        <DialogContent>
          <Grid container>
            {/*--------Dialog 's Left Side --------*/}
            <Grid item container direction="column">
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
              <Grid item>
                <Typography variant="body1" paragraph>
                  We can create this digital solution for an estimated
                </Typography>
                <Typography variant="body1" paragraph>
                  Fill out your name, number, and email, place your request, and
                  we’ll get back to you with details moving forward and a final
                  price.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Estimate;

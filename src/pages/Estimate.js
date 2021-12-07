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
import check from "../assets/check.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import send from "../assets/send.svg";
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
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
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
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState("");

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
        setService(newSelected.title);

        break;

      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;

      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        break;

      default:
        setQuestions(newQuestions);
    }
  };

  const dialogFirstCheckStatement = `for ${
    //if only web application is selected...
    platforms.indexOf("Web Application") > -1 &&
    platforms.length === 1
      ? //then finish sentence here
        "a Web Application."
      : //otherwise, if web application and another platform is selected...
      platforms.indexOf("Web Application") > -1 &&
        platforms.length === 2
      ? //then finish the sentence here
        `a Web Application and an ${platforms[1]}.`
      : //otherwise, if only one platform is selected which isn't web application...
      platforms.length === 1
      ? //then finish the sentence here
        `an ${platforms[0]}`
      : //otherwise, if other two options are selected...
      platforms.length === 2
      ? //then finish the sentence here
        "an iOS Application and an Android Application."
      : //otherwise if all three are selected...
      platforms.length === 3
      ? //then finish the sentence here
        "a Web Application, an iOS Application, and an Android Application."
      : null
  }`

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

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((option) => option.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));
    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].cost;

      cost -= userCost;
      cost *= userCost;
    }
    setTotal(cost);
  };

  const getPlatforms = () => {
    if (questions.length > 2) {
      let newPlatforms = [];

      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
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
            onClick={() => {
              setIsDialogOpen(true);
              getTotal();
              getPlatforms();
            }}
            variant="contained"
            className={classes.estimateButton}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      {/*--------Dialog(Optional Area)--------*/}
      <Dialog
        maxWidth="xl"
        open={isDialogOpen}
        fullScreen={matchesXS}
        onClose={() => setIsDialogOpen(false)}
        style={{ zIndex: 1302 }}
      >
        <Grid container justifyContent="center">
          <Typography variant="h2" align="center">
            Estimate
          </Typography>
        </Grid>
        <DialogContent>
          <Grid container>
            {/*--------Dialog 's Left Side --------*/}
            <Grid item md={7}>
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                      InputProps={{ style: { width: 350 } }}
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
                      InputProps={{ style: { width: 350 } }}
                      label="Email"
                      id="email"
                      value={email}
                      onChange={onChange}
                    />
                  </Grid>

                  <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                      InputProps={{ style: { width: 350 } }}
                      error={phoneHelper.length !== 0}
                      helperText={phoneHelper}
                      label="Phone"
                      id="phone"
                      value={phone}
                      onChange={onChange}
                    />
                  </Grid>

                  <Grid item style={{ minWidth: matchesXS ? "20em" : "30em" }}>
                    <TextField
                      InputProps={{
                        disableUnderline: true,
                        style: { width: 350 },
                      }}
                      value={message}
                      className={classes.message}
                      id="message"
                      onChange={(event) => setMessage(event.target.value)}
                      multiline
                      minRows={10}
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1" paragraph>
                    We can create this digital solution for an estimated{" "}
                    <span className={classes.specialText}>
                      {total.toFixed(2)}
                    </span>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Fill out your name, number, and email, place your request,
                    and we’ll get back to you with details moving forward and a
                    final price.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* Dialog 's Right Side */}

            <Grid item container direction="column" md={5}>
              <Grid item>
                <Grid item container direction="column">
                  <Grid item container alignItems="center">
                    <Grid item>
                      <img src={check} alt="checkmark" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">You Want {service}
                      {platforms.length>0 && dialogFirstCheckStatement}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center">
                    <Grid item>
                      <img src={check} alt="checkmark" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">Second Item Check</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center">
                    <Grid item>
                      <img src={check} alt="checkmark" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">Third Item Check</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Place Request
                  <img
                    src={send}
                    alt="airplane"
                    style={{ marginLeft: "0.5em" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* End Of Dialog */}
    </Grid>
  );
};

export default Estimate;

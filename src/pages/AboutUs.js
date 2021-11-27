import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import {
  Avatar,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import history from "../assets/history.svg";
import Sepanta from "../assets/Sepanta.png";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import { LoremIpsum } from "react-lorem-ipsum";
import CallToAction from "../components/CallToAction";

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
  avatar: {
    height: "22em",
    width: "22em",
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
      width: "20rem",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const AboutUs = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      {/*--------About Us Block (first)--------*/}
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1rem" : "2rem" }}
      >
        <Typography variant="h2" align={matchesMD ? "center" : "left"}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: "3rem" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      {/*--------History Block (second)--------*/}
      <Grid
        item
        container
        justifyContent="space-around"
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : "flex-start"}
        style={{ marginTop: "10rem", marginBottom: "10rem" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            style={{ maxWidth: "35rem" }}
            lg
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : "left"}
                variant="h2"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                style={{ fontWeight: "700", fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : "left"}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src={history}
              style={{ maxHeight: matchesMD ? 200 : "22rem" }}
              alt="quill pen"
            />
          </Grid>
        </Grid>
      </Grid>
      {/*--------Team Block (Third)--------*/}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15rem" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Sepanta Joshany
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I just cloned this site as a training
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={Sepanta} className={classes.avatar} />
        </Grid>
        <Grid item container justifyContent={matchesMD ? "center" : "flex-end"}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45rem", padding: "1.25rem" }}>
              <Typography
                component="div"
                variant="body1"
                align="center"
                paragraph
              >
                <LoremIpsum p={1} random={false} avgWordsPerSentence={5} />
              </Typography>
              <Typography
                component="div"
                variant="body1"
                align="center"
                paragraph
              >
                <LoremIpsum p={1} random={false} avgWordsPerSentence={5} />
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-start"}
            style={{ marginBottom: matchesMD ? "2.5rem" : 0 }}
          >
            <Grid item>
              <img
                src={yearbook}
                alt="yearbook"
                style={{ maxWidth: matchesMD ? 300 : null }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from Zach yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45rem", padding: "1.25rem" }}>
              <Typography
                component="div"
                variant="body1"
                align="center"
                paragraph
              >
                <LoremIpsum p={1} random={false} avgWordsPerSentence={5} />
              </Typography>
              <Typography
                component="div"
                variant="body1"
                align="center"
                paragraph
              >
                <LoremIpsum p={1} random={false} avgWordsPerSentence={5} />
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src={puppy}
                alt="puppy"
                style={{ maxWidth: matchesMD ? 300 : null }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Zach 's miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default AboutUs;

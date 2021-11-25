import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Typography, useMediaQuery } from "@material-ui/core";
import Lottie from "react-lottie";
import React from "react";
import consultation from "../assets/consultationIcon.svg";

import technologyAnimation from "../animations/technologyAnimation/data.json";
import vision from "../assets/vision.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
}));

const Revolution = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      {/*--------First Block (Vision)--------*/}

      <Grid item className={classes.rowContainer} style={{ marginTop: "2rem" }}>
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid item container alignItems="center" className={classes.rowContainer}>
        <Grid item lg>
          <img
            src={vision}
            alt="Mountain"
            style={{ maxWidth: "40rem", marginRight: "5rem" }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "40rem" }}
          lg
        >
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography align="right" variant="body1" paragraph>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/*--------Technology Block (Second)--------*/}

      <Grid item container alignItems="center" className={classes.rowContainer}>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "40rem" }}
          lg
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography variant="body1" paragraph>
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography variant="body1" paragraph>
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography variant="body1" paragraph>
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography variant="body1" paragraph>
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography variant="body1" paragraph>
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography variant="body1" paragraph>
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40rem", margin: 0 }}
          />
        </Grid>
      </Grid>
      {/*--------Process Block (Third)--------*/}

      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      {/*--------Process Block , The Background Part--------*/}
      <Grid
        item
        container
        direcion="row"
        style={{ backgroundColor: "#B3B3B3", height: "90rem" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", margintop: "5rem" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20rem" }}
              paragraph
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20rem" }}
              paragraph
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20rem" }}
              paragraph
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container alignContent='center' lg>
          <img src={consultation} alt="handshake" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;

import { Container, Typography, makeStyles } from "@material-ui/core";

import PriceHorizontal from "./PriceHorizontal";
import React from "react";
import ScrollHorizontal from "./ScrollHorizontal";

const useStyle = makeStyles(() => ({
  banner: {
    backgroundPosition: "center center",
    backgroundImage:
      "url(https://www.themasterpicks.com/wp-content/uploads/2020/04/22b22287602523.5dbd29081561d.gif)",
    display: "flex",
    justifyContent: "center",
  },
  bannerContent: {
    background: "radial-gradient(circle, #430046c4, transparent)",
    margin: "0",
    height: 800,
    paddingTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tagline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyle();

  return (
    <div className={classes.banner}>
      <Container maxWidth="xl" className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h1"
            style={{
              fontWeight: "bold",
              marginBottom: 5,
              paddingRight: 20,
              paddingLeft: 20,
              fontFamily: "",
              color: "white",
            }}
          >
            TEST!
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              paddingRight: 20,
              paddingLeft: 20,
              fontFamily: "",
              color: "white",
            }}
          >
            Happy Testing~
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Banner;

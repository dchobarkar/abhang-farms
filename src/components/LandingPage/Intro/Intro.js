import React from "react";
import { makeStyles } from "@material-ui/styles";

import Image from "../../../assets/img/intro.png";
import IntroCSS from "./Intro.css";

// CSS
const useStyles = makeStyles({ ...IntroCSS });

// Driver component
function Intro(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.introduction}>
        <h2 className={classes.header}>Our Smart Approach</h2>

        <ul>
          <li>Crop grown in automated Polyhouse.</li>

          <li>
            Use of climate automation systems to bring forth ideal conditions
            for crop's growth.
          </li>

          <li>Limited use of Chemicals.</li>
        </ul>

        <p>
          Amid the climate change consequences disrupting agriculture sector in
          India, we are trying to tackle the challenges by implementing latest
          technologies for farming...
        </p>
      </div>

      <img className={classes.image} src={Image} alt="Introduction" />
    </section>
  );
}

export default Intro;

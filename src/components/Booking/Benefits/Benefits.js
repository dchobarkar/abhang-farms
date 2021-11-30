import React from "react";
import { makeStyles } from "@material-ui/styles";

import Image from "../../../assets/img/benefits.png";
import BenefitsCSS from "./Benefits.css";

// CSS
const useStyles = makeStyles({ ...BenefitsCSS });

// Driver component
function Benefits(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Health Benefits of Capsicum</h2>

      <img
        className={classes.image}
        src={Image}
        alt="Health benefits of capsicum"
      />

      <div className={classes.text}>
        <ul>
          <li>Prevents Cancer.</li>
          <li>Gives a healthy heart.</li>
          <li>Cures yellow fever.</li>
          <li>Gives glowing skin.</li>
          <li>Improves overall health.</li>
          <li>Alleviates menopausal symptoms.</li>
          <li>Reduces arthritic pain.</li>
        </ul>
      </div>
    </div>
  );
}

export default Benefits;

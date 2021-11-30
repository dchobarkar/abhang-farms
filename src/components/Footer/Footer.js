import React from "react";
import { makeStyles } from "@material-ui/styles";

import Heart from "../../assets/img/heart.png";
import FooterCSS from "./Footer.css.js";

// CSS
const useStyles = makeStyles({ ...FooterCSS });

// Driver component
function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>
        Made with <img className={classes.image} src={Heart} alt="Heart" /> by{" "}
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/dchobarkar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Darshan Chobarkar
        </a>{" "}
        &copy; Copyright 2020
      </p>
    </div>
  );
}

export default Footer;

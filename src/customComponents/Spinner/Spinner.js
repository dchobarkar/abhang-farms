import React from "react";
import { makeStyles } from "@material-ui/styles";

import SpinnerCSS from "./Spinner.css";

// CSS
const useStyles = makeStyles({ ...SpinnerCSS });

// Driver component
function Spinner(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.ldsRing}>
        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
}

export default Spinner;

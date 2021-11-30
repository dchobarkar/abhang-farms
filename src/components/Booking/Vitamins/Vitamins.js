import React from "react";
import { makeStyles } from "@material-ui/styles";

import List from "./Vitamins.list";
import VitaminsCSS from "./Vitamins.css";

// CSS
const useStyles = makeStyles({ ...VitaminsCSS });

// Driver component
function Vitamins(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Vitamins and Minerals</h2>

      <div className={classes.container}>
        {List.map((ele, index) => (
          <div key={index} className={classes.box}>
            <div className={classes.circle}>{ele.value}</div>
            <p className={classes.label}>{ele.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vitamins;

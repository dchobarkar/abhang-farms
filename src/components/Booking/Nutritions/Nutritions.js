import React from "react";
import { makeStyles } from "@material-ui/styles";

import List from "./Nutritions.list";
import NutritionsCSS from "./Nutritions.css";

// CSS
const useStyles = makeStyles({ ...NutritionsCSS });

// Driver component
function Nutritions(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Nutritions per 100g</h2>

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

export default Nutritions;

import React from "react";
import { makeStyles } from "@material-ui/styles";

import Feature1 from "../../../assets/img/features/feature1.png";
import Feature2 from "../../../assets/img/features/feature2.png";
import Feature3 from "../../../assets/img/features/feature3.png";

import FeatureCSS from "./Feature.css";

// CSS
const useStyles = makeStyles({ ...FeatureCSS });

// Driver component
function Features(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.one}>
        <img className={classes.image} src={Feature1} alt="Feature 1" />

        <p className={classes.text}>
          Plants grown in controlled temperature with less chance of crop damage
          will be freshly picked and delivered at yours.
        </p>
      </div>

      <div className={classes.two}>
        <img className={classes.image} src={Feature2} alt="Feature 2" />

        <p className={classes.text}>
          Crops grown throughout the year with no impact of extreme weather.
        </p>
      </div>

      <div className={classes.three}>
        <img className={classes.image} src={Feature3} alt="Feature 3" />

        <p className={classes.text}>
          Crops grown in enclosed environment free from pests and insects.
        </p>
      </div>
    </section>
  );
}

export default Features;

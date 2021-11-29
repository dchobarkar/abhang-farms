import React from "react";
import { makeStyles } from "@material-ui/styles";

import IntroImg from "../../../assets/img/intro.png";
import IntroCSS from "./Intro.css";

// CSS
const useStyles = makeStyles({ ...IntroCSS });

// Driver component
function Intro(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.introduction}>
        <h2 className={classes.header}>Header</h2>

        <ul>
          <li>
            Lorem ipsum dolor sit amet, nam eu debitis civibus, vim euripidis
            quaerendum cu.
          </li>
          <li>
            Offendit corrumpit reprimique id quo, est sumo explicari persecuti
            ei.
          </li>
          <li>
            Eos debet imperdiet eu. Et fabulas consetetur has, ex facer pertinax
            incorrupte eam. Oblique convenire signiferumque te his.
          </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, nam eu debitis civibus, vim euripidis
          quaerendum cu. Offendit corrumpit reprimique id quo, est sumo
          explicari persecuti ei. Eos debet imperdiet eu. Et fabulas consetetur
          has, ex facer pertinax incorrupte eam. Oblique convenire signiferumque
          te his.
        </p>
      </div>

      <img className={classes.image} src={IntroImg} alt="Introduction" />
    </section>
  );
}

export default Intro;

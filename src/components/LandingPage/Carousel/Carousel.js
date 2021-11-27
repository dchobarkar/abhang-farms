import React from "react";
import { makeStyles } from "@material-ui/styles";

import CarouselContainer from "../../../customComponents/Carousel/Carousel";
import Slides from "./Carousel.list";
import CarouselCSS from "./Carousel.css";

// CSS
const useStyles = makeStyles({ ...CarouselCSS });

// Driver component
function Carousel() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <h1 className={classes.header}>Abhang Farms</h1>
      </div>

      <CarouselContainer slides={[...Slides]} />
    </React.Fragment>
  );
}

export default Carousel;

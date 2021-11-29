import React from "react";
import { makeStyles } from "@material-ui/styles";

import Image1 from "../../assets/img/gallery/gallery1.png";
import Image2 from "../../assets/img/gallery/gallery2.png";
import Image3 from "../../assets/img/gallery/gallery3.png";
import Image4 from "../../assets/img/gallery/gallery4.png";
import Image5 from "../../assets/img/gallery/gallery5.png";
import Image6 from "../../assets/img/gallery/gallery6.png";
import Image7 from "../../assets/img/gallery/gallery7.png";
import Image8 from "../../assets/img/gallery/gallery8.png";
import Image9 from "../../assets/img/gallery/gallery9.png";

import GalleryCSS from "./Gallery.css";

// CSS
const useStyles = makeStyles({ ...GalleryCSS });

// Driver component
function Gallery(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.one} src={Image1} alt="Gallery 1" />

      <img className={classes.two} src={Image2} alt="Gallery 2" />
      <img className={classes.three} src={Image3} alt="Gallery 3" />
      <img className={classes.two} src={Image4} alt="Gallery 4" />
      <img className={classes.three} src={Image5} alt="Gallery 5" />
      <img className={classes.two} src={Image6} alt="Gallery 6" />
      <img className={classes.three} src={Image7} alt="Gallery 7" />
      <img className={classes.two} src={Image8} alt="Gallery 8" />
      <img className={classes.three} src={Image9} alt="Gallery 9" />
    </div>
  );
}

export default Gallery;

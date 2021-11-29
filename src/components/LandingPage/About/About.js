import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

import AboutImg from "../../../assets/img/about.png";
import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <img className={classes.image} src={AboutImg} alt="about" />

      <h2 className={classes.header}>About Abhang Farms</h2>

      <p className={classes.text}>
        Lorem ipsum dolor sit amet, ceteros mediocrem similique te quo, vide
        error id ius. Et pro postea inimicus gubergren, in iisque alienum his,
        putant dissentiunt no mel. Est euismod complectitur et, mollis tamquam
        vel ei, ex eos quot mandamus. Ei consul soluta facete mei. Lorem ipsum
        dolor sit amet, ceteros mediocrem similique te quo, vide error id ius.
        Et pro postea inimicus gubergren, in iisque alienum his, putant
        dissentiunt no mel. Est euismod complectitur et, mollis tamquam vel ei,
        ex eos quot mandamus. Ei consul soluta facete mei.Lorem ipsum dolor sit
        amet, ceteros mediocrem similique te quo, vide error id ius. Et pro
        postea inimicus gubergren, in iisque alienum his, putant dissentiunt no
        mel. Est euismod complectitur et, mollis tamquam vel ei, ex eos quot
        mandamus. Ei consul soluta facete mei. Lorem ipsum dolor sit amet,
        ceteros mediocrem similique te quo, vide error id ius. Et pro postea
        inimicus gubergren, in iisque alienum his, putant dissentiunt no mel.
        Est euismod complectitur et, mollis tamquam vel ei, ex eos quot
        mandamus. Ei consul soluta facete mei.Lorem ipsum dolor sit amet,
        ceteros mediocrem similique te quo, vide error id ius. Et pro postea
        inimicus gubergren, in iisque alienum his, putant dissentiunt no mel.
        Est euismod complectitur et, mollis tamquam vel ei, ex eos quot
        mandamus. Ei consul soluta facete mei.Lorem ipsum dolor sit amet,
        ceteros mediocrem similique te quo, vide error id ius. Et pro postea
        inimicus gubergren, in iisque alienum his, putant dissentiunt no mel.
        Est euismod complectitur et, mollis tamquam vel ei, ex eos quot
        mandamus. Ei consul soluta facete mei.Lorem ipsum dolor sit amet,
        ceteros mediocrem similique te quo, vide error id ius. Et pro postea
        inimicus gubergren, in iisque alienum his, putant dissentiunt no mel.
        Est euismod complectitur et, mollis tamquam vel ei, ex eos quot
        mandamus. Ei consul soluta facete mei.Lorem ipsum dolor sit amet,
        ceteros mediocrem similique te quo, vide error id ius. Et pro postea
        inimicus gubergren, in iisque alienum his, putant dissentiunt no mel.
        Est euismod complectitur et, mollis tamquam vel ei, ex eos quot
        mandamus. Ei consul soluta facete mei.
      </p>

      <NavLink to="/gallery">
        <div className={classes.button}>Gallery</div>
      </NavLink>
    </section>
  );
}

export default About;

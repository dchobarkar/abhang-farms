import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

import NotFoundCSS from "./NotFound.css";

// CSS
const useStyles = makeStyles({ ...NotFoundCSS });

// Driver component
function NotFound(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 className={classes.header}>404</h1>

      <div className={classes.image}></div>

      <h2 className={classes.subHeader}>Look like you're lost</h2>

      <p className={classes.text}>the page you are looking for not avaible!</p>

      <NavLink to="/">
        <div className={classes.button}>Go to Home</div>
      </NavLink>
    </section>
  );
}

export default NotFound;

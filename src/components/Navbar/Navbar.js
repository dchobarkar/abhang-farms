import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withRouter, NavLink } from "react-router-dom";

import NavbarCSS from "./Navbar.css.js";

// CSS
const useStyles = makeStyles({ ...NavbarCSS });

// Driver component
function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavLink to="/">
        <div className={classes.logo}>
          <p className={classes.logoText}>Abhang Farms</p>
        </div>
      </NavLink>

      <NavLink to="/booking">
        <div className={classes.buyButton}>
          <p className={classes.buttonText}>Buy</p>
        </div>
      </NavLink>
    </div>
  );
}

export default withRouter(Navbar);

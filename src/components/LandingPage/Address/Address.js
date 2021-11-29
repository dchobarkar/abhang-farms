import React from "react";
import { makeStyles } from "@material-ui/styles";

import AddressCSS from "./Address.css";

// CSS
const useStyles = makeStyles({ ...AddressCSS });

// Driver component
function Address(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <iframe
        width="100%"
        height="300px"
        title="location"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?q=pangri&t=&z=15&ie=UTF8&iwloc=&output=embed"
      />

      <div className={classes.address}>
        <p>
          <strong>Mobile :</strong> 9970113413
        </p>

        <p>
          <strong>Email :</strong> abhangfarms@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Address;

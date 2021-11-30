import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

import Image from "../../../assets/img/about.png";
import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About(props) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <img className={classes.image} src={Image} alt="about" />

      <h2 className={classes.header}>About Abhang Farms</h2>

      <div className={classes.textBox}>
        <p className={classes.text}>
          The unimpeded growth of greenhouse gas emissions is raising the
          earth's temperature. The consequences include melting glaciers, more
          precipitation, more and more extreme weather events, and shifting
          seasons. The accelerating pace of climate change, combined with global
          population and income growth, threatens food security everywhere.
        </p>
        <p className={classes.text}>
          Agriculture is extremely vulnerable to climate change. Higher
          temperatures eventually reduce yields of desirable crops while
          encouraging weed and pest proliferation. Changes in precipitation
          patterns increase the likelihood of short-run crop failures and
          long-run production declines. Although there will be gains in some
          crops in some regions of the world, the overall impacts of climate
          change on agriculture are expected to be negative, threatening global
          food security.
        </p>
        <p className={classes.text}>
          Populations in the developing world, which are already vulnerable and
          food insecure, are likely to be the most seriously affected. In 2005,
          nearly half of the economically active population in developing
          countries-2.5 billion people- relied on agriculture for its
          livelihood. Today, 75 percent of the world's poor live in rural areas.
          This Food Policy Report presents research results that quantify the
          climate-change impacts mentioned above, assesses the consequences for
          food security, and estimates the investments that would offset the
          negative consequences for human well-being.
        </p>
        <p className={classes.text}>
          As technology is evolving with every new day, we have seen drastic
          changes in the art of farming as well. Where traditional methods were
          thought to be sufficient for crop production, now they have little
          application and appeal towards consumers as the demand for off-season
          yields has seen a drastic increase. To answer all these questions and
          many more we found a common solution and that is a Polyhouse.
        </p>
        <p className={classes.text}>
          Polyhouse has evolved the way of traditional farming in countries like
          India and Bangladesh and presented with new opportunities to get
          better and more yield while utilizing fewer resources.
        </p>
      </div>

      <NavLink to="/gallery">
        <div className={classes.button}>Gallery</div>
      </NavLink>
    </section>
  );
}

export default About;

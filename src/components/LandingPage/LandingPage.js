import React from "react";

import Carousel from "./Carousel/Carousel";
import Intro from "./Intro/Intro";
import IndexPage from "../IndexPage/IndexPage";
import About from "../About/About";
import Contact from "../Contact/Contact";

function LandingPage() {
  return (
    <React.Fragment>
      <Carousel />
      <Intro />
      <IndexPage />
      <About />
      <Contact />
    </React.Fragment>
  );
}

export default LandingPage;

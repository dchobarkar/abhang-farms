import React from "react";

import Carousel from "./Carousel/Carousel";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Features from "./Features/Features";
import Address from "./Address/Address";
import Contact from "./Contact/Contact";

function LandingPage() {
  return (
    <React.Fragment>
      <Carousel />

      <Intro />

      <About />

      <Features />

      <Address />

      <Contact />
    </React.Fragment>
  );
}

export default LandingPage;

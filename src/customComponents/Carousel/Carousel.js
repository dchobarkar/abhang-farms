import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

// Driver component
function CarouselContainer(props) {
  return (
    <React.Fragment>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
      >
        {props.slides.map((slide, index) => (
          <div>
            <img src={slide.img} alt={`slide${index}`} />
          </div>
        ))}
      </Carousel>
    </React.Fragment>
  );
}

export default CarouselContainer;
